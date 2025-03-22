const request = require('supertest');

// Mock environment variables
process.env.NOTION_API_KEY = 'test-api-key';
process.env.NOTION_DATABASE_ID = 'test-database-id';
process.env.PORT = '8589';
process.env.NODE_ENV = 'test';

// Mock Notion client
jest.mock('@notionhq/client', () => {
  const mockClient = {
    databases: {
      query: jest.fn().mockResolvedValue({ results: [] }),
      retrieve: jest.fn().mockResolvedValue({
        properties: {
          'Name': { type: 'title' },
          'Status': { type: 'select' },
          'Priority': { type: 'number' },
          'Tags': { type: 'multi_select' },
          'Description': { type: 'rich_text' },
          'Due Date': { type: 'date' },
          'Category': { type: 'select' }
        }
      })
    },
    pages: {
      create: jest.fn().mockResolvedValue({ id: 'new-page-id' }),
      update: jest.fn().mockResolvedValue({ id: 'updated-page-id' }),
      retrieve: jest.fn().mockResolvedValue({
        id: 'test-page-id',
        properties: {
          'Name': { 
            type: 'title',
            title: [{ plain_text: 'Test Task' }]
          },
          'Status': {
            type: 'select',
            select: { name: 'In Progress' }
          }
        },
        last_edited_time: new Date().toISOString(),
        url: 'https://notion.so/test-page'
      })
    },
    blocks: {
      children: {
        list: jest.fn().mockResolvedValue({ results: [] }),
        append: jest.fn().mockResolvedValue({})
      },
      delete: jest.fn().mockResolvedValue({})
    }
  };
  
  return {
    Client: jest.fn(() => mockClient)
  };
});

// Mock dotenv
jest.mock('dotenv', () => ({
  config: jest.fn()
}));

// Create test suite
describe('Notion Integration Tests', () => {
  let app;
  
  beforeEach(() => {
    jest.resetModules();
    // Import the app after setting up mocks
    app = require('./index');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  // Test SSE endpoint
  describe('SSE Endpoint', () => {
    test('should return capabilities', async () => {
      const res = await request(app)
        .get('/sse')
        .set('Accept', 'text/event-stream');
      
      expect(res.status).toBe(200);
      expect(res.headers['content-type']).toBe('text/event-stream');
      expect(res.text).toContain('notion-integration');
      expect(res.text).toContain('searchNotes');
      expect(res.text).toContain('getNote');
      expect(res.text).toContain('createNote');
      expect(res.text).toContain('updateNote');
    });
  });

  // Test API endpoints
  describe('Note API Endpoints', () => {
    test('should search notes', async () => {
      const res = await request(app)
        .post('/api/search')
        .send({ query: 'test', limit: 5 });
      
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
    });
    
    test('should get a note by ID', async () => {
      const res = await request(app)
        .get('/api/note/test-note-id');
      
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
    });
    
    test('should create a new note', async () => {
      const res = await request(app)
        .post('/api/note')
        .send({
          title: 'New Test Note',
          content: 'This is a test note',
          tags: ['test', 'note']
        });
      
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
    });
    
    test('should update an existing note', async () => {
      const res = await request(app)
        .patch('/api/note/test-note-id')
        .send({
          title: 'Updated Note',
          tags: ['updated']
        });
      
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
    });
  });

  // Test Command Handler
  describe('Command Handler', () => {
    test('should handle searchNotes command', async () => {
      const res = await request(app)
        .post('/command')
        .send({
          command: 'searchNotes',
          parameters: { query: 'test', limit: 5 }
        });
      
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
    });
    
    test('should handle getNote command', async () => {
      const res = await request(app)
        .post('/command')
        .send({
          command: 'getNote',
          parameters: { id: 'test-note-id' }
        });
      
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
    });
    
    test('should handle createNote command', async () => {
      const res = await request(app)
        .post('/command')
        .send({
          command: 'createNote',
          parameters: {
            title: 'New Note',
            content: 'Content',
            tags: ['tag1']
          }
        });
      
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
    });
    
    test('should handle updateNote command', async () => {
      const res = await request(app)
        .post('/command')
        .send({
          command: 'updateNote',
          parameters: {
            id: 'test-note-id',
            title: 'Updated Title'
          }
        });
      
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
    });
  });

  // Test Task Management Endpoints
  describe('Task Management Endpoints', () => {
    test('should fetch all tasks', async () => {
      const res = await request(app)
        .get('/api/tasks');
      
      expect(res.status).toBe(200);
    });
    
    test('should fetch a single task by ID', async () => {
      const res = await request(app)
        .get('/api/tasks/test-task-id');
      
      expect(res.status).toBe(200);
    });
    
    test('should create a new task', async () => {
      const res = await request(app)
        .post('/api/tasks')
        .send({
          task: {
            title: 'New Task',
            priority: 1,
            tags: ['important']
          }
        });
      
      expect(res.status).toBe(200);
    });
    
    test('should update an existing task', async () => {
      const res = await request(app)
        .put('/api/tasks/test-task-id')
        .send({
          updates: {
            title: 'Updated Task',
            status: 'completed'
          }
        });
      
      expect(res.status).toBe(200);
    });
    
    test('should delete (archive) a task', async () => {
      const res = await request(app)
        .delete('/api/tasks/test-task-id');
      
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
    });
    
    test('should sync tasks', async () => {
      const res = await request(app)
        .post('/api/sync')
        .send({
          tasks: [
            { id: 'notion-task-1', title: 'Updated Task' },
            { title: 'New Task' }
          ]
        });
      
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
    });
  });
}); 