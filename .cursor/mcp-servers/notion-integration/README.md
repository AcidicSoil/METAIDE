# Notion API Integration for OSPAiN2

This MCP server provides integration between OSPAiN2 and Notion, enabling bidirectional synchronization of tasks, knowledge graph content, and documents.

## Features

- **Task Synchronization**: Bidirectional sync between TodoManager and Notion tasks
- **Document Import**: Import Notion pages into the knowledge graph
- **Workspace Collaboration**: Leverage Notion's collaboration features
- **Search Integration**: Include Notion content in application-wide search

## Setup Instructions

1. Create a Notion integration at https://www.notion.so/my-integrations
2. Get your API key from the integration settings
3. Share your Notion databases with the integration
4. Copy `.env.template` to `.env` and add your credentials
5. Start the MCP server

## Configuration

Edit `.env` file:

```
NOTION_API_KEY=your_notion_api_key_here
NOTION_DATABASE_ID=your_notion_database_id_here
PORT=8589
```

## Starting the Server

```bash
# Start directly
node index.js

# Or through the MCP system
# (automatically added to .cursor/mcp.json)
```

## Usage in the Application

1. Open the TodoManager component
2. Click the Notion integration icon (cloud)
3. Configure your database mappings
4. Click "Sync Now" to synchronize tasks

## API Endpoints

- `GET /sse` - SSE endpoint for Cursor
- `GET /api/status` - Get connection status
- `POST /api/config` - Configure database mappings
- `GET /api/tasks` - Get tasks from Notion
- `POST /api/sync/tasks` - Sync tasks to Notion

## Technical Implementation

The integration follows the adapter pattern:

1. `NotionService.ts` - Service for interacting with the MCP server
2. `NotionContext.tsx` - React context for application-wide integration
3. `TodoManager.tsx` - UI integration for task synchronization

## Security Considerations

- The Notion API key has write access to any databases shared with it
- Store .env file securely and don't commit it to version control
- Consider implementing additional authentication for the MCP server 