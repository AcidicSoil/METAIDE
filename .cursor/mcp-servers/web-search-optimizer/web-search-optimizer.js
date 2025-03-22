#!/usr/bin/env node

/**
 * Web Search Optimizer MCP Server
 * 
 * This server provides optimized web search capabilities with:
 * - Caching of results to minimize API usage
 * - Integration with Knowledge Graph for persistent storage
 * - Intelligent query reformulation for better results
 * - Rate limiting to prevent excessive API calls
 */

const { MCPServer } = require('@modelcontextprotocol/server');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// Configuration
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
  searchEngines: {
    brave: {
      enabled: true,
      apiKey: process.env.BRAVE_API_KEY,
      endpoint: 'https://api.search.brave.com/res/v1/web/search',
    },
    ddg: {
      enabled: true,
      endpoint: 'https://api.duckduckgo.com/',
    }
  },
  defaultEngine: 'brave',
  knowledgeGraphEnabled: true,
};

// Ensure cache directory exists
if (!fs.existsSync(config.cacheDir)) {
  fs.mkdirSync(config.cacheDir, { recursive: true });
}

// Usage tracking
const usage = {
  requests: {
    lastMinute: 0,
    lastHour: 0,
    lastDay: 0,
  },
  lastReset: {
    minute: Date.now(),
    hour: Date.now(),
    day: Date.now(),
  },
  cache: {
    hits: 0,
    misses: 0,
  }
};

// Reset usage counters
function resetUsageCounters() {
  const now = Date.now();
  
  // Reset minute counter if needed
  if (now - usage.lastReset.minute > 60 * 1000) {
    usage.requests.lastMinute = 0;
    usage.lastReset.minute = now;
  }
  
  // Reset hour counter if needed
  if (now - usage.lastReset.hour > 60 * 60 * 1000) {
    usage.requests.lastHour = 0;
    usage.lastReset.hour = now;
  }
  
  // Reset day counter if needed
  if (now - usage.lastReset.day > 24 * 60 * 60 * 1000) {
    usage.requests.lastDay = 0;
    usage.lastReset.day = now;
  }
}

// Check if we can make a request based on rate limits
function canMakeRequest() {
  resetUsageCounters();
  
  return (
    usage.requests.lastMinute < config.rateLimits.perMinute &&
    usage.requests.lastHour < config.rateLimits.perHour &&
    usage.requests.lastDay < config.rateLimits.perDay
  );
}

// Track a new request
function trackRequest() {
  resetUsageCounters();
  
  usage.requests.lastMinute++;
  usage.requests.lastHour++;
  usage.requests.lastDay++;
}

// Generate a cache key from the search query and parameters
function generateCacheKey(query, params) {
  const dataToHash = JSON.stringify({
    query,
    params,
  });
  
  return crypto.createHash('md5').update(dataToHash).digest('hex');
}

// Get cache file path for a key
function getCacheFilePath(cacheKey) {
  return path.join(config.cacheDir, `${cacheKey}.json`);
}

// Check if a cached result exists and is valid
function getCachedResult(cacheKey) {
  const cachePath = getCacheFilePath(cacheKey);
  
  if (!fs.existsSync(cachePath)) {
    return null;
  }
  
  try {
    const cacheData = JSON.parse(fs.readFileSync(cachePath, 'utf8'));
    const now = Date.now();
    const cacheAge = now - cacheData.timestamp;
    const cacheType = cacheData.type || 'default';
    const maxAge = config.cacheLifetime[cacheType] || config.cacheLifetime.default;
    
    // Check if cache is still valid
    if (cacheAge < maxAge) {
      usage.cache.hits++;
      console.log(`Cache hit for key: ${cacheKey}`);
      return cacheData.results;
    }
  } catch (err) {
    console.error(`Error reading cache: ${err.message}`);
  }
  
  usage.cache.misses++;
  console.log(`Cache miss for key: ${cacheKey}`);
  return null;
}

// Save results to cache
function saveToCache(cacheKey, results, type = 'default') {
  const cachePath = getCacheFilePath(cacheKey);
  const cacheData = {
    timestamp: Date.now(),
    type,
    results,
  };
  
  try {
    fs.writeFileSync(cachePath, JSON.stringify(cacheData, null, 2));
    console.log(`Saved to cache: ${cacheKey}`);
  } catch (err) {
    console.error(`Error writing to cache: ${err.message}`);
  }
}

// Determine query type for cache lifetime
function determineQueryType(query) {
  const lowercaseQuery = query.toLowerCase();
  
  if (lowercaseQuery.includes('docs') || 
      lowercaseQuery.includes('documentation') || 
      lowercaseQuery.includes('tutorial') ||
      lowercaseQuery.includes('guide') ||
      lowercaseQuery.includes('reference')) {
    return 'documentation';
  }
  
  if (lowercaseQuery.includes('news') || 
      lowercaseQuery.includes('latest') || 
      lowercaseQuery.includes('update') ||
      lowercaseQuery.includes('release') ||
      /\b20(2[3-5])\b/.test(lowercaseQuery)) { // Contains 2023-2025
    return 'news';
  }
  
  return 'default';
}

// Optimize the search query
function optimizeQuery(query) {
  // Add current year for freshness if looking for latest info
  if (query.includes('latest') || query.includes('recent') || query.includes('new')) {
    const currentYear = new Date().getFullYear();
    if (!query.includes(currentYear.toString())) {
      query = `${query} ${currentYear}`;
    }
  }
  
  // Add "devdocs.io" for documentation searches
  if ((query.includes('docs') || query.includes('documentation')) && 
      !query.includes('devdocs.io')) {
    query = `${query} devdocs.io`;
  }
  
  return query;
}

// Perform search with Brave Search API
async function searchWithBrave(query, count = 5) {
  if (!config.searchEngines.brave.enabled || !config.searchEngines.brave.apiKey) {
    throw new Error('Brave Search API is not configured');
  }
  
  try {
    const response = await axios.get(config.searchEngines.brave.endpoint, {
      headers: {
        'Accept': 'application/json',
        'X-Subscription-Token': config.searchEngines.brave.apiKey
      },
      params: {
        q: query,
        count: count,
        search_lang: 'en'
      }
    });
    
    return response.data.web?.results || [];
  } catch (error) {
    console.error(`Brave Search API error: ${error.message}`);
    throw new Error(`Search engine error: ${error.message}`);
  }
}

// Create the MCP server
const server = new MCPServer({
  name: 'Web Search Optimizer',
  description: 'Optimized web search with caching and rate limiting',
  version: '1.0.0',
});

// Register the primary optimized search tool
server.addTool({
  name: 'optimized_search',
  description: 'Performs a web search with caching and optimizations to conserve API usage',
  parameters: {
    type: 'object',
    properties: {
      query: {
        type: 'string',
        description: 'The search query',
      },
      count: {
        type: 'number',
        description: 'Number of results to return',
        default: 5,
      },
      forceRefresh: {
        type: 'boolean',
        description: 'Ignore cache and force a new search',
        default: false,
      },
      queryType: {
        type: 'string',
        description: 'Type of query for cache management (default, documentation, news)',
      },
    },
    required: ['query'],
  },
  handler: async ({ query, count = 5, forceRefresh = false, queryType }) => {
    // Optimize the query
    const optimizedQuery = optimizeQuery(query);
    
    // Determine query type if not provided
    const determinedType = queryType || determineQueryType(query);
    
    // Generate cache key
    const cacheKey = generateCacheKey(optimizedQuery, { count });
    
    // Check cache if not forcing refresh
    if (!forceRefresh) {
      const cachedResults = getCachedResult(cacheKey);
      if (cachedResults) {
        return {
          results: cachedResults,
          source: 'cache',
          query: optimizedQuery,
          timestamp: Date.now(),
        };
      }
    }
    
    // Check if we can make a request
    if (!canMakeRequest()) {
      throw new Error('Rate limit exceeded. Try again later.');
    }
    
    // Track the request
    trackRequest();
    
    // Perform the search
    let results;
    if (config.defaultEngine === 'brave') {
      results = await searchWithBrave(optimizedQuery, count);
    } else {
      throw new Error(`Unsupported search engine: ${config.defaultEngine}`);
    }
    
    // Save to cache
    saveToCache(cacheKey, results, determinedType);
    
    return {
      results,
      source: config.defaultEngine,
      query: optimizedQuery,
      timestamp: Date.now(),
    };
  },
});

// Register a tool to get cache stats
server.addTool({
  name: 'get_search_stats',
  description: 'Get statistics about search usage and cache performance',
  parameters: {
    type: 'object',
    properties: {},
  },
  handler: async () => {
    resetUsageCounters();
    
    return {
      usage,
      config: {
        engines: Object.keys(config.searchEngines).map(name => ({
          name,
          enabled: config.searchEngines[name].enabled,
        })),
        defaultEngine: config.defaultEngine,
        cacheEnabled: true,
        cacheLifetimes: config.cacheLifetime,
      },
    };
  },
});

// Register a tool to clear the cache
server.addTool({
  name: 'clear_search_cache',
  description: 'Clear the search cache',
  parameters: {
    type: 'object',
    properties: {
      all: {
        type: 'boolean',
        description: 'Clear all cache entries',
        default: false,
      },
      olderThan: {
        type: 'number',
        description: 'Clear entries older than this many days',
      },
      query: {
        type: 'string',
        description: 'Clear entries matching this query',
      },
    },
  },
  handler: async ({ all = false, olderThan, query }) => {
    if (!fs.existsSync(config.cacheDir)) {
      return { cleared: 0 };
    }
    
    let cleared = 0;
    const files = fs.readdirSync(config.cacheDir);
    
    for (const file of files) {
      if (!file.endsWith('.json')) {
        continue;
      }
      
      const filePath = path.join(config.cacheDir, file);
      
      try {
        // Read cache entry for filtering
        const cacheData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        
        // Clear if all flag is set
        if (all) {
          fs.unlinkSync(filePath);
          cleared++;
          continue;
        }
        
        // Clear based on age
        if (olderThan) {
          const ageInDays = (Date.now() - cacheData.timestamp) / (24 * 60 * 60 * 1000);
          if (ageInDays > olderThan) {
            fs.unlinkSync(filePath);
            cleared++;
            continue;
          }
        }
        
        // Clear based on query
        if (query && cacheData.query && cacheData.query.includes(query)) {
          fs.unlinkSync(filePath);
          cleared++;
          continue;
        }
      } catch (err) {
        console.error(`Error processing cache file ${file}: ${err.message}`);
      }
    }
    
    return { cleared };
  },
});

// Start the server
server.start();
console.log('Web Search Optimizer MCP server started'); 