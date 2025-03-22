#!/usr/bin/env node

const express = require('express');
const cors = require('cors');
const { Client } = require('@notionhq/client');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 8589;

// Setup middleware
app.use(cors());
app.use(express.json());

// Initialize Notion client
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

// Verify Notion database access
const DATABASE_ID = process.env.NOTION_DATABASE_ID;

// Add database mappings
const databaseMappings = {
  title: process.env.DB_TITLE_PROPERTY || 'Name',
  status: process.env.DB_STATUS_PROPERTY || 'Status',
  priority: process.env.DB_PRIORITY_PROPERTY || 'Priority',
  tags: process.env.DB_TAGS_PROPERTY || 'Tags',
  content: process.env.DB_CONTENT_PROPERTY || 'Description',
  dueDate: process.env.DB_DUE_DATE_PROPERTY || 'Due Date',
  category: process.env.DB_CATEGORY_PROPERTY || 'Category'
};

// SSE endpoint for Cursor
app.get('/sse', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  // Send capabilities message
  const capabilities = {
    name: 'notion-integration',
    description: 'Notion API Integration for accessing and utilizing notes',
    version: '1.0.0',
    commands: [
      {
        name: 'searchNotes',
        description: 'Search notes in Notion database',
        parameters: [
          {
            name: 'query',
            type: 'string',
            description: 'Search query'
          },
          {
            name: 'limit',
            type: 'number', 
            description: 'Maximum number of results to return',
            default: 10
          }
        ]
      },
      {
        name: 'getNote',
        description: 'Get a specific note by ID',
        parameters: [
          {
            name: 'id',
            type: 'string',
            description: 'Notion page ID'
          }
        ]
      },
      {
        name: 'createNote',
        description: 'Create a new note in Notion',
        parameters: [
          {
            name: 'title',
            type: 'string',
            description: 'Note title'
          },
          {
            name: 'content',
            type: 'string',
            description: 'Note content'
          },
          {
            name: 'tags',
            type: 'array',
            description: 'Array of tags',
            default: []
          }
        ]
      },
      {
        name: 'updateNote',
        description: 'Update an existing note',
        parameters: [
          {
            name: 'id',
            type: 'string',
            description: 'Notion page ID'
          },
          {
            name: 'title',
            type: 'string',
            description: 'Note title',
            optional: true
          },
          {
            name: 'content',
            type: 'string',
            description: 'Note content',
            optional: true
          },
          {
            name: 'tags',
            type: 'array',
            description: 'Array of tags',
            optional: true
          }
        ]
      }
    ]
  };

  res.write(`data: ${JSON.stringify(capabilities)}\n\n`);

  // Handle client disconnect
  req.on('close', () => {
    console.log('Client disconnected');
  });
});

// API endpoints
app.post('/api/search', async (req, res) => {
  try {
    const { query, limit = 10 } = req.body;
    
    // Search in the database
    const response = await notion.databases.query({
      database_id: DATABASE_ID,
      filter: {
        or: [
          {
            property: 'title',
            rich_text: {
              contains: query
            }
          },
          {
            property: 'content',
            rich_text: {
              contains: query
            }
          },
          {
            property: 'tags',
            multi_select: {
              contains: query
            }
          }
        ]
      },
      page_size: limit
    });
    
    res.json({
      success: true,
      results: response.results
    });
  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

app.get('/api/note/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    // Get page content
    const page = await notion.pages.retrieve({ page_id: id });
    const blocks = await notion.blocks.children.list({ block_id: id });
    
    res.json({
      success: true,
      page,
      blocks: blocks.results
    });
  } catch (error) {
    console.error('Get note error:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

app.post('/api/note', async (req, res) => {
  try {
    const { title, content, tags = [] } = req.body;
    
    // Create a new page
    const response = await notion.pages.create({
      parent: {
        database_id: DATABASE_ID
      },
      properties: {
        title: {
          title: [
            {
              text: {
                content: title
              }
            }
          ]
        },
        tags: {
          multi_select: tags.map(tag => ({ name: tag }))
        }
      },
      children: [
        {
          object: 'block',
          type: 'paragraph',
          paragraph: {
            rich_text: [
              {
                type: 'text',
                text: {
                  content: content
                }
              }
            ]
          }
        }
      ]
    });
    
    res.json({
      success: true,
      page: response
    });
  } catch (error) {
    console.error('Create note error:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

app.patch('/api/note/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, tags } = req.body;
    
    // Update properties if provided
    const properties = {};
    
    if (title) {
      properties.title = {
        title: [
          {
            text: {
              content: title
            }
          }
        ]
      };
    }
    
    if (tags) {
      properties.tags = {
        multi_select: tags.map(tag => ({ name: tag }))
      };
    }
    
    // Update page properties
    const page = await notion.pages.update({
      page_id: id,
      properties
    });
    
    // Update content if provided
    if (content) {
      // First clear existing content
      const blocks = await notion.blocks.children.list({ block_id: id });
      for (const block of blocks.results) {
        await notion.blocks.delete({ block_id: block.id });
      }
      
      // Add new content
      await notion.blocks.children.append({
        block_id: id,
        children: [
          {
            object: 'block',
            type: 'paragraph',
            paragraph: {
              rich_text: [
                {
                  type: 'text',
                  text: {
                    content: content
                  }
                }
              ]
            }
          }
        ]
      });
    }
    
    res.json({
      success: true,
      page
    });
  } catch (error) {
    console.error('Update note error:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Command handler for SSE
app.post('/command', async (req, res) => {
  try {
    const { command, parameters } = req.body;
    
    let result;
    
    switch (command) {
      case 'searchNotes':
        const { query, limit } = parameters;
        const searchResponse = await notion.databases.query({
          database_id: DATABASE_ID,
          filter: {
            or: [
              {
                property: 'title',
                rich_text: {
                  contains: query
                }
              },
              {
                property: 'content',
                rich_text: {
                  contains: query
                }
              },
              {
                property: 'tags',
                multi_select: {
                  contains: query
                }
              }
            ]
          },
          page_size: limit || 10
        });
        result = searchResponse.results;
        break;
        
      case 'getNote':
        const { id } = parameters;
        const page = await notion.pages.retrieve({ page_id: id });
        const blocks = await notion.blocks.children.list({ block_id: id });
        result = { page, blocks: blocks.results };
        break;
        
      case 'createNote':
        const { title, content, tags = [] } = parameters;
        const createResponse = await notion.pages.create({
          parent: {
            database_id: DATABASE_ID
          },
          properties: {
            title: {
              title: [
                {
                  text: {
                    content: title
                  }
                }
              ]
            },
            tags: {
              multi_select: tags.map(tag => ({ name: tag }))
            }
          },
          children: [
            {
              object: 'block',
              type: 'paragraph',
              paragraph: {
                rich_text: [
                  {
                    type: 'text',
                    text: {
                      content: content
                    }
                  }
                ]
              }
            }
          ]
        });
        result = createResponse;
        break;
        
      case 'updateNote':
        const updateParams = parameters;
        const updateProperties = {};
        
        if (updateParams.title) {
          updateProperties.title = {
            title: [
              {
                text: {
                  content: updateParams.title
                }
              }
            ]
          };
        }
        
        if (updateParams.tags) {
          updateProperties.tags = {
            multi_select: updateParams.tags.map(tag => ({ name: tag }))
          };
        }
        
        // Update page properties
        const updatedPage = await notion.pages.update({
          page_id: updateParams.id,
          properties: updateProperties
        });
        
        // Update content if provided
        if (updateParams.content) {
          // First clear existing content
          const existingBlocks = await notion.blocks.children.list({ block_id: updateParams.id });
          for (const block of existingBlocks.results) {
            await notion.blocks.delete({ block_id: block.id });
          }
          
          // Add new content
          await notion.blocks.children.append({
            block_id: updateParams.id,
            children: [
              {
                object: 'block',
                type: 'paragraph',
                paragraph: {
                  rich_text: [
                    {
                      type: 'text',
                      text: {
                        content: updateParams.content
                      }
                    }
                  ]
                }
              }
            ]
          });
        }
        
        result = updatedPage;
        break;
        
      default:
        throw new Error(`Unknown command: ${command}`);
    }
    
    res.json({
      success: true,
      result
    });
  } catch (error) {
    console.error(`Command error (${req.body.command}):`, error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Task management endpoints
app.get('/api/tasks', async (req, res) => {
  try {
    if (!notion || !DATABASE_ID) {
      return res.status(400).json({
        success: false,
        error: 'Notion API or database ID not configured',
      });
    }

    const tasks = await fetchAllTasks();
    return res.json(tasks);
  } catch (error) {
    console.error('Error fetching tasks:', error);
    return res.status(500).json({
      success: false,
      error: error.message || 'Failed to fetch tasks',
    });
  }
});

app.get('/api/tasks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    if (!notion || !DATABASE_ID) {
      return res.status(400).json({
        success: false,
        error: 'Notion API or database ID not configured',
      });
    }

    const task = await notion.pages.retrieve({ page_id: id });
    const formattedTask = formatNotionTask(task);
    
    return res.json(formattedTask);
  } catch (error) {
    console.error(`Error fetching task ${req.params.id}:`, error);
    return res.status(500).json({
      success: false,
      error: error.message || 'Failed to fetch task',
    });
  }
});

app.post('/api/tasks', async (req, res) => {
  try {
    const { task } = req.body;
    
    if (!notion || !DATABASE_ID) {
      return res.status(400).json({
        success: false,
        error: 'Notion API or database ID not configured',
      });
    }

    if (!task || !task.title) {
      return res.status(400).json({
        success: false,
        error: 'Task title is required',
      });
    }

    const notionTask = await createNotionTask(task);
    const formattedTask = formatNotionTask(notionTask);
    
    return res.json(formattedTask);
  } catch (error) {
    console.error('Error creating task:', error);
    return res.status(500).json({
      success: false,
      error: error.message || 'Failed to create task',
    });
  }
});

app.put('/api/tasks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { updates } = req.body;
    
    if (!notion || !DATABASE_ID) {
      return res.status(400).json({
        success: false,
        error: 'Notion API or database ID not configured',
      });
    }

    if (!updates) {
      return res.status(400).json({
        success: false,
        error: 'Task updates are required',
      });
    }

    const notionTask = await updateNotionTask(id, updates);
    const formattedTask = formatNotionTask(notionTask);
    
    return res.json(formattedTask);
  } catch (error) {
    console.error(`Error updating task ${req.params.id}:`, error);
    return res.status(500).json({
      success: false,
      error: error.message || 'Failed to update task',
    });
  }
});

app.delete('/api/tasks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    if (!notion || !DATABASE_ID) {
      return res.status(400).json({
        success: false,
        error: 'Notion API or database ID not configured',
      });
    }

    await notion.pages.update({
      page_id: id,
      archived: true,
    });
    
    return res.json({
      success: true,
      message: 'Task archived successfully',
    });
  } catch (error) {
    console.error(`Error deleting task ${req.params.id}:`, error);
    return res.status(500).json({
      success: false,
      error: error.message || 'Failed to delete task',
    });
  }
});

app.post('/api/sync', async (req, res) => {
  try {
    const { tasks } = req.body;
    
    if (!notion || !DATABASE_ID) {
      return res.status(400).json({
        success: false,
        error: 'Notion API or database ID not configured',
      });
    }

    if (!Array.isArray(tasks)) {
      return res.status(400).json({
        success: false,
        error: 'Tasks must be an array',
      });
    }

    // Get current tasks from Notion
    const notionTasks = await fetchAllTasks();
    const notionTaskMap = new Map(notionTasks.map(task => [task.id, task]));
    
    // Track sync results
    const results = {
      created: 0,
      updated: 0,
      skipped: 0,
      failed: 0,
    };

    // Process each task
    for (const task of tasks) {
      try {
        // Skip tasks without necessary data
        if (!task.title) {
          results.skipped++;
          continue;
        }

        // Check if task already exists in Notion
        if (task.id && task.id.startsWith('notion-') && notionTaskMap.has(task.id)) {
          // Update existing task
          await updateNotionTask(task.id, task);
          results.updated++;
        } else {
          // Create new task
          await createNotionTask(task);
          results.created++;
        }
      } catch (error) {
        console.error(`Error syncing task ${task.id || 'new task'}:`, error);
        results.failed++;
      }
    }

    return res.json({
      success: true,
      syncedCount: results.created + results.updated,
      results,
    });
  } catch (error) {
    console.error('Error syncing tasks:', error);
    return res.status(500).json({
      success: false,
      error: error.message || 'Failed to sync tasks',
    });
  }
});

// Helper functions for Notion task operations

/**
 * Fetch all tasks from Notion database
 */
async function fetchAllTasks() {
  // Get database schema to determine property mappings
  const database = await notion.databases.retrieve({ database_id: DATABASE_ID });
  const propertyNames = Object.entries(database.properties).reduce((acc, [key, value]) => {
    acc[value.type] = key;
    return acc;
  }, {});

  // Query the database for tasks
  const response = await notion.databases.query({
    database_id: DATABASE_ID,
    sorts: [
      {
        property: propertyNames.title || propertyNames.rich_text || 'Title',
        direction: 'ascending',
      },
    ],
    page_size: 100,
  });

  // Transform Notion pages to task format
  return response.results.map(page => formatNotionTask(page));
}

/**
 * Format a Notion page as a task
 */
function formatNotionTask(page) {
  // Get property mappings from storage or use defaults
  const mappings = {
    title: 'Name',
    status: 'Status',
    priority: 'Priority',
    tags: 'Tags',
    content: 'Description',
    dueDate: 'Due Date',
    category: 'Category',
    ...databaseMappings,
  };

  const properties = page.properties;
  
  // Extract data based on property type
  const getPropertyValue = (propertyName) => {
    const prop = properties[propertyName];
    if (!prop) return null;

    switch (prop.type) {
      case 'title':
        return prop.title.map(t => t.plain_text).join('');
      case 'rich_text':
        return prop.rich_text.map(t => t.plain_text).join('');
      case 'select':
        return prop.select?.name;
      case 'multi_select':
        return prop.multi_select.map(s => s.name);
      case 'date':
        return prop.date?.start ? new Date(prop.date.start) : null;
      case 'checkbox':
        return prop.checkbox;
      case 'number':
        return prop.number;
      default:
        return null;
    }
  };

  // Build task object from Notion page
  return {
    id: page.id,
    title: getPropertyValue(mappings.title) || 'Untitled',
    content: getPropertyValue(mappings.content) || '',
    status: getPropertyValue(mappings.status) || 'not-started',
    priority: getPropertyValue(mappings.priority) || 3,
    tags: getPropertyValue(mappings.tags) || [],
    lastUpdated: new Date(page.last_edited_time),
    url: page.url,
    dueDate: getPropertyValue(mappings.dueDate),
    category: getPropertyValue(mappings.category) || 'General',
  };
}

/**
 * Create a new task in Notion
 */
async function createNotionTask(task) {
  // Get property mappings from storage or use defaults
  const mappings = {
    title: 'Name',
    status: 'Status',
    priority: 'Priority',
    tags: 'Tags',
    content: 'Description',
    dueDate: 'Due Date',
    category: 'Category',
    ...databaseMappings,
  };

  // Get database schema to determine property types
  const database = await notion.databases.retrieve({ database_id: DATABASE_ID });
  const propertyTypes = {};
  
  for (const [key, value] of Object.entries(database.properties)) {
    propertyTypes[key] = value.type;
  }

  // Build properties object based on database schema
  const properties = {};

  // Set title property (required for Notion pages)
  const titleProp = mappings.title;
  if (titleProp && propertyTypes[titleProp] === 'title') {
    properties[titleProp] = {
      title: [{ type: 'text', text: { content: task.title || 'Untitled' } }],
    };
  }

  // Set content/description property
  const contentProp = mappings.content;
  if (contentProp && task.description && propertyTypes[contentProp] === 'rich_text') {
    properties[contentProp] = {
      rich_text: [{ type: 'text', text: { content: task.description } }],
    };
  }

  // Set status property
  const statusProp = mappings.status;
  if (statusProp && task.status && propertyTypes[statusProp] === 'select') {
    properties[statusProp] = {
      select: { name: task.status },
    };
  }

  // Set priority property
  const priorityProp = mappings.priority;
  if (priorityProp && task.priority !== undefined) {
    if (propertyTypes[priorityProp] === 'number') {
      properties[priorityProp] = {
        number: task.priority,
      };
    } else if (propertyTypes[priorityProp] === 'select') {
      properties[priorityProp] = {
        select: { name: `P${task.priority}` },
      };
    }
  }

  // Set tags property
  const tagsProp = mappings.tags;
  if (tagsProp && Array.isArray(task.tags) && propertyTypes[tagsProp] === 'multi_select') {
    properties[tagsProp] = {
      multi_select: task.tags.map(tag => ({ name: tag })),
    };
  }

  // Set due date property
  const dueDateProp = mappings.dueDate;
  if (dueDateProp && task.dueDate && propertyTypes[dueDateProp] === 'date') {
    const date = new Date(task.dueDate);
    properties[dueDateProp] = {
      date: { start: date.toISOString().split('T')[0] },
    };
  }

  // Set category property
  const categoryProp = mappings.category;
  if (categoryProp && task.category) {
    if (propertyTypes[categoryProp] === 'select') {
      properties[categoryProp] = {
        select: { name: task.category },
      };
    } else if (propertyTypes[categoryProp] === 'rich_text') {
      properties[categoryProp] = {
        rich_text: [{ type: 'text', text: { content: task.category } }],
      };
    }
  }

  // Create the page in Notion
  return await notion.pages.create({
    parent: { database_id: DATABASE_ID },
    properties,
  });
}

/**
 * Update an existing task in Notion
 */
async function updateNotionTask(pageId, updates) {
  // Get property mappings from storage or use defaults
  const mappings = {
    title: 'Name',
    status: 'Status',
    priority: 'Priority',
    tags: 'Tags',
    content: 'Description',
    dueDate: 'Due Date',
    category: 'Category',
    ...databaseMappings,
  };

  // Get database schema to determine property types
  const database = await notion.databases.retrieve({ database_id: DATABASE_ID });
  const propertyTypes = {};
  
  for (const [key, value] of Object.entries(database.properties)) {
    propertyTypes[key] = value.type;
  }

  // Build properties object based on database schema
  const properties = {};

  // Update title property
  if (updates.title && mappings.title && propertyTypes[mappings.title] === 'title') {
    properties[mappings.title] = {
      title: [{ type: 'text', text: { content: updates.title } }],
    };
  }

  // Update content/description property
  if (updates.description && mappings.content && propertyTypes[mappings.content] === 'rich_text') {
    properties[mappings.content] = {
      rich_text: [{ type: 'text', text: { content: updates.description } }],
    };
  }

  // Update status property
  if (updates.status && mappings.status && propertyTypes[mappings.status] === 'select') {
    properties[mappings.status] = {
      select: { name: updates.status },
    };
  }

  // Update priority property
  if (updates.priority !== undefined && mappings.priority) {
    if (propertyTypes[mappings.priority] === 'number') {
      properties[mappings.priority] = {
        number: updates.priority,
      };
    } else if (propertyTypes[mappings.priority] === 'select') {
      properties[mappings.priority] = {
        select: { name: `P${updates.priority}` },
      };
    }
  }

  // Update tags property
  if (Array.isArray(updates.tags) && mappings.tags && propertyTypes[mappings.tags] === 'multi_select') {
    properties[mappings.tags] = {
      multi_select: updates.tags.map(tag => ({ name: tag })),
    };
  }

  // Update due date property
  if (updates.dueDate && mappings.dueDate && propertyTypes[mappings.dueDate] === 'date') {
    const date = new Date(updates.dueDate);
    properties[mappings.dueDate] = {
      date: { start: date.toISOString().split('T')[0] },
    };
  }

  // Update category property
  if (updates.category && mappings.category) {
    if (propertyTypes[mappings.category] === 'select') {
      properties[mappings.category] = {
        select: { name: updates.category },
      };
    } else if (propertyTypes[mappings.category] === 'rich_text') {
      properties[mappings.category] = {
        rich_text: [{ type: 'text', text: { content: updates.category } }],
      };
    }
  }

  // Update the page in Notion
  return await notion.pages.update({
    page_id: pageId,
    properties,
  });
}

// Start server
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Notion Integration MCP Server running on port ${PORT}`);
    console.log(`SSE endpoint available at: http://localhost:${PORT}/sse`);
  });
}

// Export the app for testing
module.exports = app; 