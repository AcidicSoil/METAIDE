#!/usr/bin/env node

/**
 * Web Search Optimizer Test Script
 * 
 * This script tests the Web Search Optimizer MCP server with various query types
 * to verify caching, DevDocs.io integration, and knowledge graph storage.
 * 
 * Usage: node test-queries.js
 */

const http = require('http');
const { v4: uuidv4 } = require('uuid');

// Configuration
const MCP_SERVER_URL = 'http://localhost:8588'; // Update with your MCP server port
const TEST_QUERIES = [
  {
    name: 'Basic Search',
    query: 'TypeScript interface examples',
    params: { count: 3 }
  },
  {
    name: 'Documentation Search',
    query: 'JavaScript Promise API',
    params: { count: 3, queryType: 'documentation' }
  },
  {
    name: 'News Search',
    query: 'latest technology announcements',
    params: { count: 3, queryType: 'news' }
  },
  {
    name: 'Cache Test (First Call)',
    query: 'React hooks tutorial',
    params: { count: 3 }
  },
  {
    name: 'Cache Test (Second Call)',
    query: 'React hooks tutorial',
    params: { count: 3 }
  },
  {
    name: 'Force Refresh',
    query: 'React hooks tutorial',
    params: { count: 3, forceRefresh: true }
  },
  {
    name: 'DevDocs.io Test',
    query: 'HTML canvas documentation',
    params: { count: 3, queryType: 'documentation' }
  }
];

// Helper to make MCP calls
async function callMCP(method, params) {
  return new Promise((resolve, reject) => {
    const requestId = uuidv4();
    const data = JSON.stringify({
      jsonrpc: '2.0',
      id: requestId,
      method,
      params
    });
    
    const options = {
      hostname: 'localhost',
      port: MCP_SERVER_URL.split(':')[2],
      path: '/',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
      }
    };
    
    const req = http.request(options, (res) => {
      let responseData = '';
      
      res.on('data', (chunk) => {
        responseData += chunk;
      });
      
      res.on('end', () => {
        try {
          const parsedData = JSON.parse(responseData);
          if (parsedData.error) {
            reject(new Error(`MCP Error: ${JSON.stringify(parsedData.error)}`));
          } else {
            resolve(parsedData.result);
          }
        } catch (err) {
          reject(new Error(`Failed to parse MCP response: ${err.message}`));
        }
      });
    });
    
    req.on('error', (err) => {
      reject(new Error(`Request error: ${err.message}`));
    });
    
    req.write(data);
    req.end();
  });
}

// Run tests
async function runTests() {
  console.log('Starting Web Search Optimizer Tests...\n');
  
  try {
    // Clear cache before tests
    console.log('Clearing cache for clean test run...');
    await callMCP('clear_search_cache', { all: true });
    console.log('Cache cleared.\n');
    
    // Get initial stats
    console.log('Getting initial stats...');
    const initialStats = await callMCP('get_search_stats', {});
    console.log('Initial stats:', JSON.stringify(initialStats, null, 2), '\n');
    
    // Run each test query
    for (const test of TEST_QUERIES) {
      console.log(`\n===== Test: ${test.name} =====`);
      console.log(`Query: "${test.query}"`);
      console.log(`Parameters: ${JSON.stringify(test.params)}`);
      
      try {
        console.time('Query Time');
        const result = await callMCP('optimized_search', {
          query: test.query,
          ...test.params
        });
        console.timeEnd('Query Time');
        
        console.log(`Source: ${result.source}`);
        console.log(`Results Count: ${result.results.length}`);
        
        if (result.results.length > 0) {
          console.log('First result:');
          console.log(`  - Title: ${result.results[0].title}`);
          console.log(`  - URL: ${result.results[0].url}`);
          console.log(`  - Description: ${result.results[0].description.substring(0, 100)}...`);
        }
      } catch (err) {
        console.error(`Test failed: ${err.message}`);
      }
    }
    
    // Get final stats
    console.log('\nGetting final stats...');
    const finalStats = await callMCP('get_search_stats', {});
    console.log('Final stats:', JSON.stringify(finalStats, null, 2));
    
    // Show cache performance
    console.log('\nCache Performance:');
    console.log(`Hits: ${finalStats.cache.hits}`);
    console.log(`Misses: ${finalStats.cache.misses}`);
    console.log(`Hit Rate: ${finalStats.cache.hits + finalStats.cache.misses === 0 ? 
      'N/A' : 
      `${Math.round((finalStats.cache.hits / (finalStats.cache.hits + finalStats.cache.misses)) * 100)}%`}`);
    
  } catch (err) {
    console.error('Test runner error:', err.message);
  }
  
  console.log('\nTests completed.');
}

// Run the tests
runTests(); 