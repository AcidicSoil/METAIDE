# Web Search Optimizer MCP Server

An optimized web search MCP server that conserves API usage through caching, rate limiting, and intelligent query optimization.

## Features

- **Caching System**: Stores search results locally to minimize redundant API calls
- **Intelligent Caching**: Different cache lifetimes based on content type (documentation, news, etc.)
- **Rate Limiting**: Prevents excessive API usage with configurable limits
- **Query Optimization**: Automatically enhances search queries for better results
- **Multiple Search Engines**: Support for Brave Search API (primary) with fallback options
- **MCP Integration**: Full Model Context Protocol compatibility for Cursor IDE

## Installation

1. Navigate to the server directory:
   ```bash
   cd .cursor/mcp-servers/web-search-optimizer
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure your API keys:
   - For Brave Search API, sign up at [Brave Search API](https://brave.com/search/api/)
   - Set the `BRAVE_API_KEY` environment variable or add it to your `.env` file

## Usage

### Starting the server

```bash
npm start
```

Or directly:

```bash
node web-search-optimizer.js
```

### Configuring in Cursor IDE

Add the following to your MCP configuration in Cursor:

```json
{
  "name": "Web Search Optimizer",
  "type": "command",
  "command": "node",
  "args": [".cursor/mcp-servers/web-search-optimizer/web-search-optimizer.js"],
  "description": "Optimized web search with caching and conservation"
}
```

## Available Tools

### optimized_search

Performs web searches with caching and optimizations.

Parameters:
- `query` (string, required): The search query
- `count` (number, default 5): Number of results to return
- `forceRefresh` (boolean, default false): Ignore cache and force a new search
- `queryType` (string): Type of query for cache management (default, documentation, news)

### get_search_stats

Get statistics about search usage and cache performance.

### clear_search_cache

Clear the search cache.

Parameters:
- `all` (boolean, default false): Clear all cache entries
- `olderThan` (number): Clear entries older than this many days
- `query` (string): Clear entries matching this query

## Configuration

You can modify the configuration in `web-search-optimizer.js`:

```javascript
const config = {
  cacheDir: path.join(__dirname, 'cache'),
  cacheLifetime: {
    default: 7 * 24 * 60 * 60 * 1000, // 7 days
    documentation: 30 * 24 * 60 * 60 * 1000, // 30 days
    news: 1 * 24 * 60 * 60 * 1000, // 1 day
  },
  rateLimits: {
    perMinute: 10,
    perHour: 50,
    perDay: 200,
  },
  // ... other settings
};
```

## API Key Conservation Strategies

This MCP server implements several strategies to minimize API usage:

1. **Caching**: Stores results locally with content-appropriate expirations
2. **Query Optimization**: Refines searches for better results without repeated queries
3. **Rate Limiting**: Configurable limits per minute, hour, and day
4. **DevDocs Integration**: Automatic direction to DevDocs.io for documentation searches
5. **Cache Stats**: Monitoring tool for tracking usage and optimizing further

## License

MIT 