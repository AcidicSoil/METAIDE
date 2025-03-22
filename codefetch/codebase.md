You are a senior software architect. You produce optimized, maintainable code that follows best practices. 

Your task is to review the current codebase and suggest improvements or optimizations.

Rules:
- Keep your suggestions concise and focused. Avoid unnecessary explanations or fluff. 
- Your output should be a series of specific, actionable changes.

When approaching this task:
1. Carefully review the provided code.
2. Identify areas that could be improved in terms of efficiency, readability, or maintainability.
3. Consider best practices for the specific programming language used.
4. Think about potential optimizations that could enhance performance.
5. Look for opportunities to refactor or restructure the code for better organization.

For each suggested change, provide:
1. A short description of the change (one line maximum).
2. The modified code block.

Use the following format for your output:

[Short Description]
```[language]:[path/to/file]
[code block]
```

Begin your analysis and provide your suggestions now.

My current codebase:
<current_codebase>
Project Structure:
├── codefetch
│   └── codebase.md
├── promptEngine
│   ├── 01_Why_finetuning_lab_student.py
│   ├── 02_Where_finetuning_fits_in_lab_student.py
│   ├── 03_Instruction_tuning_lab_student.py
│   ├── 04_Data_preparation_lab_student.py
│   ├── 05_Training_lab_student.py
│   ├── 06_Evaluation_lab_student.py
│   ├── 1_generate_master_plan.txt
│   ├── 2_stub_out_project.txt
│   ├── 3_fully_code_out_implementation.txt
│   ├── ExampleSelector.py
│   ├── few-shot.py
│   ├── fewshotPromptTemplate.py
│   ├── l2-guidelines.py
│   ├── l3-iterative-prompt-development.py
│   ├── l4-summarizing.py
│   ├── l5-inferring.py
│   ├── l6-transforming.py
│   ├── l7-expanding.py
│   └── SemanticSearchEngine.py
├── proposalForIntegration.txt
├── README.md
├── Resources & Best Practices for Development.txt
├── scratchpad.md
├── tools
│   ├── llm_api.py
│   ├── screenshot_utils.py
│   ├── search_engine.py
│   └── web_scraper.py
└── UniversalGuideForAI
    ├── ClaudeInitConversation-00.md
    ├── ClaudeInitConversation-01
    ├── InstructionGuideAI.md
    └── Simplified Documentation Standards.md


.aider.input.history
```
1 | 
2 | # 2025-03-21 12:28:24.506452
3 | +y
```

.cursorignore
```
1 | /trash
```

.cursorindexingignore
```
1 | *.txt
```

.cursorrules
```
1 | Start each chat with 🤖 emoji
2 | 
3 | # Important Instructions
4 | 
5 | - Keep dependencies updated.
6 | - Follow TypeScript strict mode.
7 | - Maintain backward compatibility.
8 | - Document API changes.
9 | - Test cross-browser compatibility.
10 | 
11 | Proceed like a senior developer,
12 | Write the code with the fewest lines of code, the better,
13 | 
14 | During your interaction with the user, if you find anything reusable in this project (e.g. version of a library, model name), especially about a fix to a mistake you made or a correction you received, you should take note in the `Lessons` section in the `.cursorrules` file so you will not make the same mistake again.
15 | 
16 | You should also use the `.cursorrules` file as a Scratchpad to organize your thoughts. Especially when you receive a new task, you should first review the content of the Scratchpad, clear old different task if necessary, first explain the task, and plan the steps you need to take to complete the task. You can use todo markers to indicate the progress, e.g.
17 | [X] Task 1
18 | [ ] Task 2
19 | 
20 | Also update the progress of the task in the Scratchpad when you finish a subtask.
21 | Especially when you finished a milestone, it will help to improve your depth of task accomplishment to use the Scratchpad to reflect and plan.
22 | The goal is to help you maintain a big picture as well as the progress of the task. Always refer to the Scratchpad when you plan the next step.
23 | 
24 | # Tools
25 | 
26 | Note all the tools are in python. So in the case you need to do batch processing, you can always consult the python files and write your own script.
27 | 
28 | ## Screenshot Verification
29 | 
30 | The screenshot verification workflow allows you to capture screenshots of web pages and verify their appearance using LLMs. The following tools are available:
31 | 
32 | 1. Screenshot Capture:
33 | ```bash
34 | venv/bin/python tools/screenshot_utils.py URL [--output OUTPUT] [--width WIDTH] [--height HEIGHT]
35 | ```
36 | 
37 | 2. LLM Verification with Images:
38 | ```bash
39 | venv/bin/python tools/llm_api.py --prompt "Your verification question" --provider {openai|anthropic} --image path/to/screenshot.png
40 | ```
41 | 
42 | Example workflow:
43 | ```python
44 | from screenshot_utils import take_screenshot_sync
45 | from llm_api import query_llm
46 | 
47 | # Take a screenshot
48 | 
49 | screenshot_path = take_screenshot_sync('https://example.com', 'screenshot.png')
50 | 
51 | # Verify with LLM
52 | 
53 | response = query_llm(
54 |     "What is the background color and title of this webpage?",
55 |     provider="openai",  # or "anthropic"
56 |     image_path=screenshot_path
57 | )
58 | print(response)
59 | ```
60 | 
61 | ## LLM
62 | 
63 | You always have an LLM at your side to help you with the task. For simple tasks, you could invoke the LLM by running the following command:
64 | ```
65 | venv/bin/python ./tools/llm_api.py --prompt "What is the capital of France?" --provider "anthropic"
66 | ```
67 | 
68 | The LLM API supports multiple providers:
69 | - OpenAI (default, model: gpt-4o)
70 | - Azure OpenAI (model: configured via AZURE_OPENAI_MODEL_DEPLOYMENT in .env file, defaults to gpt-4o-ms)
71 | - DeepSeek (model: deepseek-chat)
72 | - Anthropic (model: claude-3-sonnet-20240229)
73 | - Gemini (model: gemini-pro)
74 | - Local LLM (model: Qwen/Qwen2.5-32B-Instruct-AWQ)
75 | 
76 | But usually it's a better idea to check the content of the file and use the APIs in the `tools/llm_api.py` file to invoke the LLM if needed.
77 | 
78 | ## Web browser
79 | 
80 | You could use the `tools/web_scraper.py` file to scrape the web.
81 | ```
82 | venv/bin/python ./tools/web_scraper.py --max-concurrent 3 URL1 URL2 URL3
83 | ```
84 | This will output the content of the web pages.
85 | 
86 | ## Search engine
87 | 
88 | You could use the `tools/search_engine.py` file to search the web.
89 | ```
90 | venv/bin/python ./tools/search_engine.py "your search keywords"
91 | ```
92 | This will output the search results in the following format:
93 | ```
94 | URL: https://example.com
95 | Title: This is the title of the search result
96 | Snippet: This is a snippet of the search result
97 | ```
98 | If needed, you can further use the `web_scraper.py` file to scrape the web page content.
99 | 
100 | # Lessons
101 | 
102 | ## User Specified Lessons
103 | 
104 | - You have a python venv in ./venv. Use it.
105 | - Include info useful for debugging in the program output.
106 | - Read the file before you try to edit it.
107 | - Due to Cursor's limit, when you use `git` and `gh` and need to submit a multiline commit message, first write the message in a file, and then use `git commit -F <filename>` or similar command to commit. And then remove the file. Include "[Cursor] " in the commit message and PR title.
108 | - Answer in short.
109 | - Do not delete comments.
110 | - Do not stop working on until you've implemented this feature fully and completely.
111 | - Always include comments in your code. Use JSDoc for function documentation, keep comments clear and concise, and ensure they explain the "why" not just the "what".
112 | ## Cursor learned
113 | 
114 | - For search results, ensure proper handling of different character encodings (UTF-8) for international queries
115 | - Add debug information to stderr while keeping the main output clean in stdout for better pipeline integration
116 | - When using seaborn styles in matplotlib, use 'seaborn-v0_8' instead of 'seaborn' as the style name due to recent seaborn version changes
117 | - Use 'gpt-4o' as the model name for OpenAI's GPT-4 with vision capabilities
118 | 
119 | # Scratchpad
```

proposalForIntegration.txt
```
1 | https://node-llama-cpp.withcat.ai/guide/ | Getting Started | node-llama-cpp
2 | https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools | x1xhlol/system-prompts-and-models-of-ai-tools
3 | https://github.com/microsoft/PromptWizard | microsoft/PromptWizard: Task-Aware Agent-driven Prompt Optimization Framework
4 | https://github.com/potpie-ai/potpie | potpie-ai/potpie: Prompt-To-Agent : Create custom engineering agents for your codebase
5 | https://github.com/ManimCommunity/manim | ManimCommunity/manim: A community-maintained Python framework for creating mathematical animations.
```

Resources & Best Practices for Development.txt
```
1 | # Resources & Best Practices for Development Roles
2 | 
3 | I'll provide best practices for various specializations and job roles in software development, including both technical and non-technical positions.
4 | 
5 | ## UI/UX Designer Best Practices
6 | 
7 | 1. **Design Principles**
8 |    - Follow established design systems and patterns
9 |    - Maintain visual hierarchy and clear information architecture
10 |    - Use appropriate whitespace and visual breathing room
11 |    - Ensure sufficient color contrast (WCAG 2.1 AA minimum)
12 | 
13 | 2. **User Research**
14 |    - Conduct regular usability testing with target users
15 |    - Create detailed user personas based on research
16 |    - Map user journeys to identify pain points and opportunities
17 |    - Validate designs through A/B testing
18 | 
19 | 3. **Workflow**
20 |    - Iterate rapidly with low-fidelity prototypes before detailed designs
21 |    - Use component-based design systems for consistency and efficiency
22 |    - Document design decisions and rationales
23 |    - Create detailed handoff specifications for developers
24 | 
25 | ## Frontend Developer Best Practices
26 | 
27 | 1. **Code Quality**
28 |    - Use modern component-based architecture
29 |    - Implement responsive design using mobile-first approach
30 |    - Apply proper semantic HTML for accessibility
31 |    - Separate concerns between presentation, logic, and data
32 | 
33 | 2. **Performance**
34 |    - Optimize asset loading (lazy loading, code splitting)
35 |    - Minimize render-blocking resources
36 |    - Implement efficient state management
37 |    - Monitor and optimize Core Web Vitals
38 | 
39 | 3. **Testing**
40 |    - Write unit tests for components and functions
41 |    - Implement E2E tests for critical user journeys
42 |    - Use snapshot testing for UI components
43 |    - Test across multiple browsers and devices
44 | 
45 | ## Backend Developer Best Practices
46 | 
47 | 1. **API Design**
48 |    - Follow RESTful or GraphQL principles consistently
49 |    - Implement proper versioning strategy
50 |    - Use clear naming conventions for endpoints
51 |    - Provide comprehensive API documentation
52 | 
53 | 2. **Data Management**
54 |    - Implement database indexing for performance
55 |    - Use database migrations for schema changes
56 |    - Apply caching strategies appropriately
57 |    - Handle database transactions safely
58 | 
59 | 3. **Architecture**
60 |    - Design for horizontal scalability
61 |    - Implement service boundaries based on domain
62 |    - Use dependency injection for testable code
63 |    - Apply appropriate design patterns
64 | 
65 | ## Security Engineer Best Practices
66 | 
67 | 1. **Application Security**
68 |    - Follow OWASP Top 10 security guidelines
69 |    - Implement proper authentication and authorization
70 |    - Use parameterized queries to prevent injection attacks
71 |    - Apply the principle of least privilege
72 | 
73 | 2. **Infrastructure Security**
74 |    - Implement network segmentation
75 |    - Use secrets management systems
76 |    - Apply regular security patching
77 |    - Monitor for suspicious activities
78 | 
79 | 3. **Process**
80 |    - Conduct regular security code reviews
81 |    - Perform penetration testing and vulnerability scanning
82 |    - Implement security training for all team members
83 |    - Create incident response procedures
84 | 
85 | ## DevOps Engineer Best Practices
86 | 
87 | 1. **CI/CD**
88 |    - Automate build, test, and deployment processes
89 |    - Implement infrastructure as code
90 |    - Use feature flags for gradual rollouts
91 |    - Apply blue/green or canary deployment strategies
92 | 
93 | 2. **Monitoring**
94 |    - Implement comprehensive logging and tracing
95 |    - Set up alerting for critical metrics
96 |    - Monitor both system and business metrics
97 |    - Use dashboards for visibility
98 | 
99 | 3. **Infrastructure**
100 |    - Design for redundancy and fault tolerance
101 |    - Implement auto-scaling based on load
102 |    - Apply consistent environment configurations
103 |    - Document infrastructure architecture
104 | 
105 | ## Project Manager Best Practices
106 | 
107 | 1. **Planning**
108 |    - Break projects into manageable milestones
109 |    - Set realistic timelines with buffer for unknowns
110 |    - Clearly define and document project scope
111 |    - Identify dependencies and critical path
112 | 
113 | 2. **Team Management**
114 |    - Hold concise, focused stand-up meetings
115 |    - Remove obstacles for team members promptly
116 |    - Balance workload across team members
117 |    - Provide regular feedback and recognition
118 | 
119 | 3. **Communication**
120 |    - Maintain transparent project status updates
121 |    - Manage stakeholder expectations proactively
122 |    - Document and distribute meeting outcomes
123 |    - Create clear escalation paths for issues
124 | 
125 | ## Product Manager Best Practices
126 | 
127 | 1. **Product Strategy**
128 |    - Align product goals with business objectives
129 |    - Develop and maintain product roadmaps
130 |    - Prioritize features using objective frameworks (RICE, MoSCoW)
131 |    - Regularly review and adjust strategy based on market feedback
132 | 
133 | 2. **Requirements**
134 |    - Write clear, testable user stories
135 |    - Define acceptance criteria for each feature
136 |    - Collaborate with UX to create wireframes for complex features
137 |    - Maintain a single source of truth for requirements
138 | 
139 | 3. **Analysis**
140 |    - Track key product metrics and KPIs
141 |    - Perform regular competitive analysis
142 |    - Collect and analyze user feedback systematically
143 |    - Use data to inform product decisions
144 | 
145 | ## QA Engineer Best Practices
146 | 
147 | 1. **Test Planning**
148 |    - Create comprehensive test plans for features
149 |    - Maintain test case repositories
150 |    - Balance manual and automated testing
151 |    - Implement risk-based testing approaches
152 | 
153 | 2. **Automation**
154 |    - Automate repetitive test cases
155 |    - Maintain separation between test data and test logic
156 |    - Implement reporting for test results
157 |    - Create stable, maintainable test frameworks
158 | 
159 | 3. **Quality Processes**
160 |    - Involve QA early in the development cycle
161 |    - Perform exploratory testing beyond scripted tests
162 |    - Document bugs clearly with reproduction steps
163 |    - Track quality metrics over time
164 | 
165 | ## Data Scientist Best Practices
166 | 
167 | 1. **Data Management**
168 |    - Document data sources and transformations
169 |    - Implement version control for datasets
170 |    - Create reproducible data pipelines
171 |    - Validate data quality systematically
172 | 
173 | 2. **Modeling**
174 |    - Document assumptions and limitations
175 |    - Use cross-validation for model evaluation
176 |    - Implement model monitoring in production
177 |    - Balance model complexity with interpretability
178 | 
179 | 3. **Communication**
180 |    - Present findings with clear visualizations
181 |    - Explain technical concepts to non-technical stakeholders
182 |    - Document methodologies and code
183 |    - Provide confidence intervals and uncertainty measures
184 | 
185 | Would you like me to elaborate on any specific role or add any roles that I haven't covered?
```

scratchpad.md
```
```

.cursor/master-todo.md
```
1 | <!--
2 | WARNING: This is a copy of the main todo file.
3 | The primary file is located at: .cursor/rules/master-todo.mdc
4 | Please make updates to the primary file.
5 | -->
6 | 
7 | ---
8 | 
9 | description: Master todo list for the Ollama Ecosystem Project
10 | globs:
11 | alwaysApply: true
12 | 
13 | ---
14 | 
15 | # Ollama Ecosystem Project - Master Todo List
16 | 
17 | ## Task Priority System
18 | 
19 | - **Priority 1**: Critical - Must be completed immediately
20 | - **Priority 2**: High - Should be completed soon
21 | - **Priority 3**: Medium - Important but not urgent
22 | - **Priority 4**: Low - Can be deferred
23 | - **Priority 5**: Optional - Nice to have
24 | 
25 | ## Status Indicators (With Horizon Context)
26 | 
27 | - 🔴 [H1] **Not Started** - H1 task has not been initiated
28 | - 🟡 [H1] **In Progress** - Work has begun but not completed
29 | - 🔵 [H1] **Blocked** - Cannot proceed due to dependencies/issues
30 | - 🟢 [H1] **Completed** - Task is finished
31 | - 📌 [H1] **Recurring** - Task that repeats regularly
32 | - 🔜 [H2] **Ready** - H2 task ready for promotion consideration
33 | - 🔮 [H3] **Captured** - H3 idea documented for future consideration
34 | 
35 | ## High Priority Tasks (P1-P2)
36 | 
37 | ### Horizon Framework Integration
38 | 
39 | - 🔴 [H1] **P1**: Implement Horizon Framework Integration
40 |   - Purpose: Organize project elements into clear horizons for focused development
41 |   - Tasks:
42 |     - 🔴 Create @horizon-map.mdc with current H1/H2/H3 classification
43 |     - 🔴 Update @master-todo.mdc with horizon designations
44 |     - 🔴 Establish @parking-lot.mdc for capturing future ideas
45 |     - 🔴 Schedule first horizon review ceremony
46 |     - 🔴 Update prompting templates to include horizon context
47 |   - Integration points:
48 |     - Development Mode Framework
49 |     - Task Status Tracking
50 |     - Decision Management
51 |     - Version Control System
52 | 
53 | ### Docker Setup and Integration
54 | 
55 | - 🟢 [H1] **P1**: Test and run the Ollama Deep Researcher TS Docker setup
56 |   - Verified .env configuration is correct
57 |   - Ensured Ollama is running locally
58 |   - Successfully ran docker-compose up and verified services are running
59 |   - COMPLETED: Docker setup is working as expected
60 | 
61 | ### Knowledge Graph and Memory
62 | 
63 | - 🔵 [H1] **P1**: Set up Titan Memory MCP Server (knowledge graph server)
64 |   - Attempted installation of Smithery CLI with `npm install -g @smithery/cli`
65 |   - Encountered issues with CLI command execution
66 |   - Need to revisit with alternative installation methods or direct clone from GitHub
67 |   - BLOCKED: Will return to this task after completing other high-priority items
68 | 
69 | ### UI Components and Visualization
70 | 
71 | - 🟡 [H1] **P1**: Create Ollama Schematics UI visualization
72 | 
73 |   - Created project structure and package.json
74 |   - Implemented EcosystemGraph visualization component
75 |   - Need to finalize integration with backend APIs
76 |   - Need to connect with real-time data sources
77 | 
78 | - 🟡 [H1] **P1**: Implement TodoManager component for Ollama Schematics UI
79 | 
80 |   - Created initial TodoManager component with full CRUD functionality
81 |   - Implemented dashboard with progress tracking
82 |   - Implemented task filtering and categorization
83 |   - Need to integrate with backend/persistent storage
84 | 
85 | - 🟢 [H1] **P2**: Build OSPAiN₂ frontend UI with chemical theme
86 | 
87 |   - Created basic UI framework with React + TypeScript
88 |   - Implemented Header component with OSPAiN₂ formula
89 |   - Created responsive Sidebar with navigation links
90 |   - Built Dashboard component with placeholder content
91 |   - Implemented basic routing with React Router
92 |   - Added Tailwind CSS for styling
93 |   - COMPLETED: Initial UI framework is complete and ready for extension
94 |   - Future improvements:
95 |     - Add more visualization components
96 |     - Implement user authentication
97 |     - Add settings page for configuration
98 |     - Integrate with backend services
99 | 
100 | - 🟢 [H1] **P2**: Implement agent-related components for OSPAiN₂
101 | 
102 |   - Created AgentPanel component for chat-based agent interaction
103 |   - Built PydanticFormBuilder for dynamic form generation from schemas
104 |   - Implemented AgentTaskPlanner for visualizing agent planning and execution
105 |   - Created AgentDemo page to showcase all agent components
106 |   - Updated routes and navigation to include Agents page
107 |   - COMPLETED: All agent components are functional with mock data
108 |   - Future improvements:
109 |     - Connect to actual PydanticAI implementations
110 |     - Integrate SmolAgents for real planning capabilities
111 |     - Add state management for agent configurations
112 |     - Implement persistence for chat history and plans
113 | 
114 | - 🔴 [H1] **P2**: Develop AgentForge component for workflow automation
115 |   - Purpose: Create agentic workflows based on short summary
116 |   - Models should determine actions based on context
117 |   - Need to implement workflow designer interface
118 |   - Need to create execution engine for workflows
119 | 
120 | ### System Architecture Optimization
121 | 
122 | - 🔴 [H1] **P1**: Conduct system architecture analysis for optimization opportunities
123 |   - Assemble team of researchers to analyze current architecture
124 |   - Identify performance bottlenecks in MCP server implementations
125 |   - Document optimization opportunities without immediate implementation
126 |   - Create prioritized list of architectural improvements
127 |   - Focus on identifying solutions rather than debugging implementation details
128 |   - Document findings in `architecture-optimization.mdc`
129 |   - NOTE: Following stay-focused approach - identify solutions, document, and move on to next task
130 | 
131 | ### Code Quality and Maintenance
132 | 
133 | - 🟢 [H1] **P1**: Set up code cleanup and quality tools
134 | 
135 |   - Installed and configured Knip for dead code detection
136 |   - Created deletion log generation system
137 |   - Established code quality guidelines in .cursorrules
138 |   - Added development workflow requirements
139 | 
140 | - 🟢 [H1] **P1**: Fix jq syntax error in Windows environment
141 |   - Issue: `jq: error: syntax error, unexpected INVALID_CHARACTER (Windows cmd shell quoting issues?)`
142 |   - Created fix_jq_windows.sh script to address Windows-specific quoting issues
143 |   - Implemented improved jq_windows() wrapper function with proper escaping
144 |   - Added automatic script patching to fix all scripts using jq
145 |   - Created global installation function for .bashrc
146 |   - Fixed mode-context.sh to use the wrapper function
147 |   - Implemented proper temporary file handling to avoid pipe issues
148 |   - COMPLETED: Solution addresses all known jq syntax errors in Windows Git Bash
149 | 
150 | ### Documentation and Compatibility
151 | 
152 | - 🟡 [H1] **P2**: Convert Markdown files to Cursor-compatible .mdc format
153 |   - Created md-to-mdc.sh script for bulk conversion
154 |   - Script preserves original .md files and creates .mdc duplicates
155 |   - Need to test conversion on key documentation files
156 |   - Need to update .cursorrules to reference .mdc extension in glob patterns
157 |   - To revisit and debug further after other high-priority tasks
158 | 
159 | ### CLI Tools and Automation
160 | 
161 | - 🔴 [H1] **P1**: Implement todo management in tag CLI engine
162 | 
163 |   - Create `tag todo add` command for adding items to master-todo.md
164 |   - Implement priority and status flags (--priority=1, --status=in-progress)
165 |   - Add ability to update existing todo items via CLI
166 |   - Create reporting commands for todo status and filtering
167 |   - Implement automatic status tracking for todo items
168 |   - Enable category and tag management for todo organization
169 |   - Integrate with GitHub issues for external tracking
170 | 
171 | - 🟢 [H1] **P1**: Create MCP Servers for Cursor IDE integration
172 | 
173 |   - Implemented base SSE server structure with proper connection handling
174 |   - Created Prompt Engineering Assistant server with text summarization
175 |   - Implemented Docker Integration server for container management
176 |   - Created Mouse Automation server for UI automation
177 |   - Implemented Titan Memory server for knowledge graph access
178 |   - Added comprehensive documentation and configuration
179 |   - Integrated with Cursor via .cursor/mcp.json
180 |   - COMPLETED: All servers are implemented and ready for use
181 | 
182 | - 🟡 [H1] **P1**: Create Cursor Mouse Automation MCP Server
183 | 
184 |   - Created README.md with implementation plans
185 |   - Implemented SSE endpoint for Cursor IDE
186 |   - Integrated with RobotJS for mouse control
187 |   - Added simulation mode for testing without actual mouse movement
188 |   - Added security features to restrict clickable regions
189 |   - Need to test with Cursor IDE
190 |   - IN PROGRESS: Server is implemented but needs testing
191 | 
192 | - 🔴 [H2] **P3**: Implement directory tracking system for terminal commands
193 |   - Purpose: Track current working directory across terminal sessions
194 |   - Create helper function to validate directory before running commands
195 |   - Add path visualization in command prompts
196 |   - Implement directory history for quick navigation
197 |   - Create safeguards against running commands in incorrect directories
198 |   - Add configuration options for common project directories
199 |   - Log terminal command history with directory context
200 | 
201 | ### Debug Research Bridge
202 | 
203 | - 🔴 [H1] **P1**: Test the debugging research bridge with live Ollama instance
204 | - 🔴 [H1] **P2**: Implement proper error handling for research API endpoints
205 | - 🔴 [H2] **P2**: Set up CI/CD pipeline for testing the research components
206 | 
207 | ### Core Functionality
208 | 
209 | - 🔴 [H1] **P1**: Fix npm/npx environment setup issues
210 | - 🔴 [H1] **P1**: Set up Ollama core installation script
211 | - 🔴 [H1] **P2**: Configure development environment for consistent experience
212 | - 🔴 [H2] **P2**: Create basic API documentation structure
213 | 
214 | ### VSCode Extension Development
215 | 
216 | - 🔴 [H1] **P1**: Create Cursor-like VSCode Extension Fork
217 |   - Purpose: Research, design and implement a VSCode extension with Cursor-like capabilities
218 |   - Tasks:
219 |     - 🔴 Research existing threads, forums, subreddits, Discord channels using MCP scrape tool
220 |     - 🔴 Compile comprehensive analysis report with feature priorities
221 |     - 🔴 Identify core APIs and extension points to leverage in VSCode
222 |     - 🔴 Design architecture for extension with LLM integration capabilities
223 |     - 🔴 Implement proof-of-concept with basic chat functionality
224 |     - 🔴 Develop local model connection capabilities
225 |     - 🔴 Create configuration system for API keys and model settings
226 |     - 🔴 Implement context-aware code editing features
227 |     - 🔴 Create documentation for extension development and usage
228 |     - 🔴 Set up CI/CD pipeline for extension packaging and distribution
229 |     - 🔴 Develop test suite for core functionality validation
230 | 
231 | ### Quick-Prompt Extension Integration
232 | 
233 | - 🟢 [H1] **P1**: Implement Quick-Prompt Extension System
234 |   - Purpose: Enable rapid application of common rules and prompts with intelligent sorting
235 |   - Tasks:
236 |     - ✅ Create quick-prompt command palette UI
237 |     - ✅ Implement intelligent rule sorting based on context
238 |     - ✅ Add fuzzy search for rules and prompts
239 |     - ✅ Create shortcut system for frequently used combinations
240 |     - ✅ Implement auto-complete for @/ syntax
241 |     - ✅ Add rule preview functionality
242 |     - ✅ Create rule suggestion system based on current file type
243 |     - ✅ Implement usage analytics for sorting optimization
244 |     - ✅ Add custom rule combination presets
245 |     - ✅ Document quick-prompt usage patterns
246 |   - Integration points:
247 |     - ✅ Connect with knowledge graph for context awareness
248 |     - ✅ Integrate with TokenManager for optimization
249 |     - ✅ Link with frontend expert for UI components
250 |     - ✅ Utilize context system for intelligent suggestions
251 |   - Implementation details:
252 |     - Created VS Code extension structure with TypeScript
253 |     - Implemented context detection from active files
254 |     - Added rule scoring and sorting based on relevance
255 |     - Implemented file type detection and tag extraction
256 |     - Added framework auto-detection from file content
257 |     - Created preview functionality for rule content
258 |     - Implemented auto-completion for rule references
259 |     - Added rule suggestion based on file type
260 |     - Created configuration system for customization
261 |     - Implemented rule preset management system
262 |     - Created comprehensive documentation in README.md
263 |   - COMPLETED: All features implemented and documented
264 | 
265 | ### Contextual Memory and Knowledge Graph Integration
266 | 
267 | - 🟢 [H1] **P1**: Implement Contextual Memory System
268 |   - Created core context memory system with persistence, inheritance, and backup
269 |   - Implemented context switching based on file types
270 |   - Added knowledge graph integration with MCP server
271 |   - Created advanced visualization tools with D3.js and Mermaid
272 |   - Implemented CLI interface for managing contexts
273 |   - COMPLETED: Full integration with MCP Knowledge Graph server
274 | 
275 | ### OSPAiN2 Hub Implementation
276 | 
277 | - 🟡 [H1] **P1**: Set up OSPAiN2 as central hub for ecosystem integration
278 |   - ✅ Successfully started OSPAiN2 server with `npm start`
279 |   - ✅ Established OSPAiN2 as testing ground ("warzone") for component evaluation
280 |   - ✅ Reviewed chemical-inspired UI theming and agent components
281 |   - ✅ Documented integration strategy in master-prd.mdc Engineering Mode notes
282 |   - 🔄 Need to implement selective component absorption process
283 |   - 🔄 Need to establish metrics for component evaluation
284 |   - 🔄 Need to create standardized testing protocols for new components
285 | 
286 | ### Development Environment Automation
287 | 
288 | - 🔴 [H1] **P1**: Implement automatic OSPAiN2 server startup
289 |   - Create startup script for Windows (startup/ospain2-startup.bat)
290 |   - Create startup script for Unix-like systems (startup/ospain2-startup.sh)
291 |   - Add systemd service configuration for Linux
292 |   - Configure Windows Task Scheduler setup script
293 |   - Add pm2 process management configuration
294 |   - Implement health check endpoint
295 |   - Create recovery/restart mechanism for crashes
296 |   - Document setup process in README.md
297 |   - Add logging for startup events
298 |   - Integration points:
299 |     - Windows Task Scheduler
300 |     - systemd service
301 |     - pm2 process manager
302 |     - Git Bash startup scripts
303 | 
304 | ### Sovereign AI Framework Enhancement
305 | 
306 | - 🔴 [H1] **P1**: Add Collaboration Framework Section
307 | 
308 |   - Purpose: Explicitly connect Development Modes to Sovereign AI implementation
309 |   - Tasks:
310 |     - 🔴 Create a new section in sovereign-ai-ecosystem-prd.mdc
311 |     - 🔴 Document how each mode interacts with the local-first infrastructure
312 |     - 🔴 Illustrate connections with diagrams and code examples
313 |     - 🔴 Update README with new framework description
314 |     - 🔴 Create implementation guidelines for contributors
315 |   - Integration points:
316 |     - Development Modes Framework
317 |     - Sovereign AI Implementation
318 |     - Knowledge Graph
319 |     - Model Serving Layer
320 | 
321 | - 🔴 [H1] **P1**: Integrate Mode-Specific Implementation Patterns
322 | 
323 |   - Purpose: Specify which development mode each technical component primarily serves
324 |   - Tasks:
325 |     - 🔴 Document mode-specific patterns for Model Serving
326 |     - 🔴 Document mode-specific patterns for Cache Layer
327 |     - 🔴 Document mode-specific patterns for Knowledge Management
328 |     - 🔴 Document mode-specific patterns for Fine-Tuning System
329 |     - 🔴 Document mode-specific patterns for Distributed Computing
330 |     - 🔴 Include implementation examples that show transitions between modes
331 |     - 🔴 Create reference implementation in TypeScript
332 |   - Integration points:
333 |     - Mode switching CLI
334 |     - Context system
335 |     - Documentation system
336 | 
337 | - 🔴 [H1] **P1**: Enhance the Resource Manager
338 | 
339 |   - Purpose: Handle mode-switching and optimize AI resource allocation
340 |   - Tasks:
341 |     - 🔴 Expand ResourceManager class to detect active development mode
342 |     - 🔴 Implement dynamic resource prioritization based on active mode
343 |     - 🔴 Create pre-allocation system for anticipated mode transitions
344 |     - 🔴 Implement resource reclamation during mode switching
345 |     - 🔴 Add telemetry for resource usage optimization
346 |     - 🔴 Create configuration system for mode-specific resource profiles
347 |   - Implementation details:
348 |     - Extend the existing ResourceManager class from sovereign_ai_implementation.mdc
349 |     - Add ModeAwareResourceAllocation interface
350 |     - Create ResourceProfile class for each development mode
351 |     - Implement resource transition protocol
352 | 
353 | - 🔴 [H1] **P1**: Add AI Call Optimization to Each Component
354 | 
355 |   - Purpose: Implement specific optimization strategies for all components
356 |   - Tasks:
357 |     - 🔴 Add batching implementation to ModelServer
358 |     - 🔴 Add caching implementation to ContextManager
359 |     - 🔴 Add right-sizing to EmbeddingService
360 |     - 🔴 Add parallelization to TrainingDataCollector
361 |     - 🔴 Add compression to FineTuningOrchestrator
362 |     - 🔴 Add request throttling to ResourceManager
363 |     - 🔴 Create ModeSpecificOptimizer class for centralized optimization
364 |   - Implementation details:
365 |     - Use Strategy pattern for pluggable optimization strategies
366 |     - Create metric collection for optimization effectiveness
367 |     - Implement A/B testing for optimization strategies
368 |     - Add configurable thresholds for each optimization type
369 | 
370 | - 🔴 [H1] **P1**: Create Mode Transition Protocols
371 |   - Purpose: Define clear handoff procedures when switching between modes
372 |   - Tasks:
373 |     - 🔴 Define data preservation requirements for each mode transition
374 |     - 🔴 Create context maintenance mechanisms
375 |     - 🔴 Implement pre-transition validation to ensure data integrity
376 |     - 🔴 Create post-transition verification process
377 |     - 🔴 Build transition logging and analytics
378 |     - 🔴 Create user notification system for mode transitions
379 |     - 🔴 Document transition protocols in sovereign-ai-ecosystem-prd.mdc
380 |   - Implementation details:
381 |     - Create ModeTransitionManager class
382 |     - Implement TransitionContext interface
383 |     - Add hooks for pre and post transition actions
384 |     - Create automated tests for transition protocols
385 | 
386 | ### Command-line Engine Integration
387 | 
388 | ## Medium Priority Tasks (P3)
389 | 
390 | ### Integration and APIs
391 | 
392 | - 🔜 [H2] **P3**: Implement integration interfaces between components
393 | - 🔜 [H2] **P3**: Set up testing framework for APIs and services
394 | - 🔜 [H2] **P3**: Create workflow documentation
395 | - 🔜 [H2] **P3**: Establish CI/CD pipeline for continuous integration
396 | - 🔜 [H2] **P3**: Create .cursor/mcp.json configuration for SSE services
397 | - 🔜 [H2] **P3**: Research best prompt CLI tools for text summarization
398 |   - Purpose: Find tools that follow prompt engineering best practices
399 |   - Should support templates for consistent output
400 |   - Focus on tools that can easily summarize text
401 |   - Evaluate based on documentation quality and active maintenance
402 |   - Consider integration with existing Ollama ecosystem
403 |   - Research latest prompt engineering techniques and standards
404 |   - Document findings for future implementation
405 | - 🟡 [H1] **P3**: Configure IDE extensions for development efficiency
406 |   - Set up .cursor/extensions.json with recommended extensions
407 |   - Configure .cursor/mcp.json for MCP tool integration
408 |   - Create .cursorrules for prompt engineering guidelines
409 |   - Document extension setup in README
410 |   - Create onboarding guide for new developers
411 |   - Verify extension compatibility across team environments
412 | 
413 | ### Research Features
414 | 
415 | - 🔜 [H2] **P3**: Create a "Research History" view to browse past debug research sessions
416 | - 🔜 [H2] **P3**: Add ability to share research results with team members
417 | - 🔜 [H2] **P3**: Implement caching of research results for similar issues
418 | - 🔜 [H2] **P3**: Create unit tests for the extraction functions in debug-research-bridge.ts
419 | 
420 | ### Model Management
421 | 
422 | - 🔜 [H2] **P3**: Implement model comparison feature
423 | - 🔜 [H2] **P3**: Add download progress indicators when pulling models
424 | - 🔜 [H2] **P3**: Create model collections/favorites for better organization
425 | 
426 | ### Code Quality
427 | 
428 | - 🟡 [H1] **P3**: Perform regular code cleanup with Knip
429 |   - Run Knip analysis to identify dead code
430 |   - Generate documentation for removed code
431 |   - Maintain deletion logs
432 |   - Periodically review dependencies for removal
433 | 
434 | ## Low Priority Tasks (P4-P5)
435 | 
436 | ### UI/UX Improvements
437 | 
438 | - 🔮 [H3] **P4**: Add advanced filtering options for research results
439 | - 🔮 [H3] **P4**: Create a visual graph of related debugging issues
440 | - 🔮 [H3] **P4**: Implement a feedback system to rate solution effectiveness
441 | - 🔮 [H3] **P4**: Add export functionality for research results (PDF, Markdown)
442 | - 🔮 [H3] **P4**: Create conversation checkpoint bubble UI component for summarizing conversations
443 | 
444 | ### Documentation
445 | 
446 | - 🔮 [H3] **P4**: Complete comprehensive API documentation
447 | - 🔮 [H3] **P4**: Write user guides for all components
448 | - 🔮 [H3] **P4**: Document model configurations and recommendations
449 | - 🔮 [H3] **P5**: Create video tutorials for setup and usage
450 | 
451 | ### Future Enhancements
452 | 
453 | - 🔮 [H3] **P5**: Implement model optimization techniques
454 | - 🔮 [H3] **P5**: Add monitoring and logging
455 | - 🔮 [H3] **P5**: Develop plugin system
456 | - 🔮 [H3] **P5**: Create visualization tools for performance metrics
457 | 
458 | ## Concept Parking Lot
459 | 
460 | ```
461 | [2023-08-15] Advanced Workflow Visualization
462 | Description: Interactive visualization of workflow processes with real-time updates
463 | Value Assessment: Would significantly improve developer understanding of system flow
464 | Dependencies: Requires D3.js integration and workflow tracking system
465 | Horizon Classification: [H3]
466 | 
467 | [2023-08-20] Multi-Model Inference Pipeline
468 | Description: System to route requests to appropriate models based on content and context
469 | Value Assessment: Could improve response quality while reducing resource usage
470 | Dependencies: Requires multiple models and classification system
471 | Horizon Classification: [H3]
472 | 
473 | [2023-09-02] Agent Collaboration Framework
474 | Description: Framework for multiple specialized agents to work together on complex tasks
475 | Value Assessment: Would enable more sophisticated automation capabilities
476 | Dependencies: Requires stable agent system and inter-agent communication protocol
477 | Horizon Classification: [H2]
478 | 
479 | [2024-06-05] TypeScript-Go Integration
480 | Description: Native Go port of TypeScript compiler for potentially faster compilation
481 | Value Assessment: Could provide significantly improved performance for TypeScript processing
482 | Dependencies: Requires stable release of TypeScript-Go from Microsoft
483 | Horizon Classification: [H3]
484 | ```
485 | 
486 | ## Recently Completed Tasks
487 | 
488 | - 🟢 [H1] Create Master Rule for Tool Call Optimization
489 | - 🟢 [H1] Create debug research bridge to connect with ollama-deep-researcher-ts
490 | - 🟢 [H1] Implement UI components for the debug research interface
491 | - 🟢 [H1] Create backend API routes for research functionality
492 | - 🟢 [H1] Document the debugging research feature
493 | - 🟢 [H1] Create README with implementation details
494 | - 🟢 [H1] Install ts-node and typescript for development
495 | - 🟢 [H1] Create .env file with Tavily API key
496 | - 🟢 [H1] Clone the ollama-deep-researcher-ts repository
497 | - 🟢 [H1] Create master todo list and task tracking system
498 | - 🟢 [H1] Successfully set up and test Docker environment for Ollama Deep Researcher TS
499 | - 🟢 [H1] Create EcosystemGraph visualization component for Ollama Schematics UI
500 | - 🟢 [H1] Design structure for Cursor Mouse Automation MCP Server
501 | - 🟢 [H1] Create TodoManager component for task visualization and management
502 | - 🟢 [H1] Set up Knip for dead code detection and cleanup
503 | - 🟢 [H1] Create .cursorrules with development workflow guidelines
504 | 
505 | ## Current Active Tasks
506 | 
507 | - 🟡 [H1] Developing Ollama Schematics UI visualization components
508 | - 🟡 [H1] Implementing Cursor Mouse Automation MCP Server
509 | - 🟡 [H1] Integrating TodoManager with master-todo.md
510 | - 🟡 [H1] Performing code cleanup with Knip
511 | - 🔵 [H1] Setting up Titan Memory MCP Server (knowledge graph server)
512 | 
513 | ## Progress Tracking
514 | 
515 | **Overall Progress**:
516 | 
517 | - Core functionality: 15% complete
518 | - Debug Research Bridge: 40% complete
519 | - Docker Integration: 95% complete
520 | - Documentation: 25% complete
521 | - Knowledge Graph Integration: 10% complete
522 | - UI Development: 35% complete
523 | - Automation Tools: 20% complete
524 | - Code Quality: 40% complete
525 | - CLI Tools: 10% complete
526 | 
527 | ## CURRENT HORIZONS
528 | 
529 | **H1 (Now)**:
530 | 
531 | - Docker setup and integration
532 | - UI components and visualization
533 | - Basic API functionality
534 | - Code quality improvements
535 | - Horizon Framework Integration
536 | - Sovereign AI Framework Enhancement
537 | 
538 | **H2 (Next)**:
539 | 
540 | - Advanced agent components
541 | - Cross-service integration
542 | - Performance optimization
543 | - Enhanced documentation
544 | - Research features expansion
545 | - Model management improvements
546 | 
547 | **H3 (Future)**:
548 | 
549 | - Plugin system architecture
550 | - AI model optimization
551 | - Community contribution framework
552 | - Advanced visualization tools
553 | - Comprehensive documentation
554 | - Advanced UI/UX improvements
555 | 
556 | ## #LEARNINGS
557 | 
558 | - **2023-08-10** #INSIGHT:[H1] Implementing Docker for Ollama systems requires careful port mapping to avoid conflicts with existing services
559 | - **2023-08-15** #INSIGHT:[H1] When implementing MCP servers, proper error handling for connection failures significantly improves reliability
560 | - **2023-08-22** #INSIGHT:[H1] TypeScript strict mode catches many potential runtime errors during development when implemented early
561 | - **2023-09-01** #INSIGHT:[H2] Agent components work best with clearly defined interfaces for cross-component communication
562 | - **2023-09-05** #INSIGHT:[H1] Windows environments require special handling for path separators in scripts and configuration
563 | - **2023-09-10** #INSIGHT:[H1] React component architecture should prioritize state isolation for better maintainability
564 | 
565 | ## Development Workflow Requirements
566 | 
567 | 1. Always start the development server before beginning work
568 |    ```
569 |    cd ollama-schematics-ui
570 |    npm start
571 |    ```
572 | 2. Address jq-related errors in Windows Git Bash environment
573 | 3. Run code cleanup periodically:
574 |    ```
575 |    npm run clean:unused
576 |    ```
577 | 4. Test components in browser as they are developed
578 | 5. Update master-todo.mdc when completing tasks
579 | 6. Use frontend designer chatbots (bolt.diy) for React UI development assistance
580 | 7. Follow commit message format: `[MODE][H1][TASK-ID] Brief description of changes`
581 | 
582 | ## Frontend AI-Assisted Development
583 | 
584 | - Use bolt.diy chatbot for React component structure and design
585 | - Leverage AI assistance for implementing complex UI patterns
586 | - Generate boilerplate code through AI chatbots
587 | - Review and refine AI-generated code for quality control
588 | - Share design requirements with AI to generate initial implementations
589 | - Iterate on UI design with AI assistance
590 | 
591 | ## Notes and Blocked Items
592 | 
593 | - Need to verify Tavily API key functionality
594 | - Consider automating the setup process with a shell script
595 | - BLOCKED: Titan Memory MCP Server setup - Issues with Smithery CLI installation/execution
596 | - Need to research more about Cursor MCP SSE server implementation for mouse automation
597 | - Need to fix jq syntax errors in Windows environment for UI context activation
598 | 
599 | ## Alternative MCP-Titan Installation Options (To Try Later)
600 | 
601 | 1. Direct GitHub clone approach:
602 | 
603 |    ```
604 |    git clone https://github.com/henryhawke/mcp-titan.git
605 |    cd mcp-titan
606 |    npm install
607 |    npm run build
608 |    npm start
609 |    ```
610 | 
611 | 2. Try Docker-based installation:
612 | 
613 |    ```
614 |    docker pull henryhawke/mcp-titan
615 |    docker run -p 3000:3000 henryhawke/mcp-titan
616 |    ```
617 | 
618 | 3. Manual NPM package installation:
619 |    ```
620 |    mkdir titan-memory
621 |    cd titan-memory
622 |    npm init -y
623 |    npm install @henryhawke/mcp-titan
624 |    npx mcp-titan-server
625 |    ```
626 | 
627 | ## Automation Workflow
628 | 
629 | When waiting for user input, the system will automatically:
630 | 
631 | 1. Check this master todo list for highest priority tasks (P1)
632 | 2. Begin working on these tasks in order of priority
633 | 3. Update status indicators as tasks progress
634 | 4. Document any blockers encountered
635 | 
636 | This master todo list will be updated regularly as tasks are completed or priorities change. All task changes will be logged here for transparency and tracking.
637 | 
638 | ### Development Modes Framework
639 | 
640 | - 🟢 **P1**: Implement Development Modes Framework CLI Tool
641 |   - Purpose: Create a structured approach to project development through distinct operational modes
642 |   - Tasks:
643 |     - ✅ Create mode-specific template files (design, engineering, testing, deployment, maintenance)
644 |     - ✅ Implement mode switcher CLI tools for Bash and PowerShell
645 |     - ✅ Add Git hook integration for commit messages
646 |     - ✅ Add mode-specific notes functionality for tracking progress
647 |     - ✅ Create installation scripts for easier setup
648 |     - ✅ Create master-prd.mdc document establishing context framework
649 |     - ✅ Create mode context display tools for chat sessions
650 |     - 🔴 Enhance mode transition analytics with visualization
651 |     - 🔴 Implement mode-specific task tracking integration
652 | 
653 | ### Cursor IDE Rules & Optimization
654 | 
655 | - 🟢 **P1**: Create Master Rule for Tool Call Optimization
656 | 
657 |   - Purpose: Create a rule to continue execution until tool call limit is exhausted
658 |   - Tasks:
659 |     - ✅ Create .cursorrules entry to enforce continuation until 25 tool call limit
660 |     - ✅ Create dedicated tool-call-optimization.mdc rule file
661 |     - ✅ Implement error handling for when tool call limit is approached
662 |     - ✅ Add recovery mechanism to resume from last successful operation
663 |     - ✅ Document best practices for working with tool call limits
664 |     - ✅ Implement adaptive priority management for available tool calls
665 |     - ✅ Create fallback mechanisms for interrupted operations
666 | 
667 | - 🟡 **P1**: Cursor IDE Rate Limit & Admin Error Bypass Commands
668 |   - Purpose: Develop commands and techniques to mitigate Cursor IDE rate limiting and admin-related errors
669 |   - Tasks:
670 |     - ✅ Create command set for resetting/clearing Cursor IDE cache
671 |     - ✅ Develop token management commands to prevent/delay rate limiting
672 |     - ✅ Implement session management scripts for quick context restoration
673 |     - ✅ Create shell scripts for automated model fallback when rate limited
674 |     - ✅ Develop command-line tools for bulk operations to reduce API calls
675 |     - ✅ Implement local command caching to minimize duplicate requests
676 |     - ✅ Create command-line interface to manage Cursor IDE extensions during rate limits
677 |     - ✅ Develop network diagnostics commands for troubleshooting API connectivity
678 |     - ✅ Create automated installation script for all command tools
679 |     - ✅ Create comprehensive documentation with usage examples
680 |     - ✅ Implement cross-platform compatibility improvements
681 |     - 🔴 Test and validate all command scripts in different environments
682 | 
683 | ### Quick-Prompt Extension Integration
684 | 
685 | - 🟢 **P1**: Implement Quick-Prompt Extension System
686 |   - Purpose: Enable rapid application of common rules and prompts with intelligent sorting
687 |   - Tasks:
688 |     - ✅ Create quick-prompt command palette UI
689 |     - ✅ Implement intelligent rule sorting based on context
690 |     - ✅ Add fuzzy search for rules and prompts
691 |     - ✅ Create shortcut system for frequently used combinations
692 |     - ✅ Implement auto-complete for @/ syntax
693 |     - ✅ Add rule preview functionality
694 |     - ✅ Create rule suggestion system based on current file type
695 |     - ✅ Implement usage analytics for sorting optimization
696 |     - ✅ Add custom rule combination presets
697 |     - ✅ Document quick-prompt usage patterns
698 |   - Integration points:
699 |     - ✅ Connect with knowledge graph for context awareness
700 |     - ✅ Integrate with TokenManager for optimization
701 |     - ✅ Link with frontend expert for UI components
702 |     - ✅ Utilize context system for intelligent suggestions
703 |   - Implementation details:
704 |     - Created VS Code extension structure with TypeScript
705 |     - Implemented context detection from active files
706 |     - Added rule scoring and sorting based on relevance
707 |     - Implemented file type detection and tag extraction
708 |     - Added framework auto-detection from file content
709 |     - Created preview functionality for rule content
710 |     - Implemented auto-completion for rule references
711 |     - Added rule suggestion based on file type
712 |     - Created configuration system for customization
713 |     - Implemented rule preset management system
714 |     - Created comprehensive documentation in README.md
715 |   - COMPLETED: All features implemented and documented
```

.cursor/mcp.json
```
1 | {
2 | 	// ... existing code ...
3 | 	"tools": [
4 | 		// Content Summarization Tools
5 | 		{
6 | 			"name": "summarize",
7 | 			"description": "Summarizes text with various style options using local LLM",
8 | 			"server": "Content Summarizer",
9 | 			"inputs": [
10 | 				{
11 | 					"name": "text",
12 | 					"type": "string",
13 | 					"description": "The text to summarize",
14 | 					"required": true
15 | 				},
16 | 				{
17 | 					"name": "maxLength",
18 | 					"type": "number",
19 | 					"description": "Maximum length of the summary in words",
20 | 					"default": 200
21 | 				},
22 | 				{
23 | 					"name": "language",
24 | 					"type": "string",
25 | 					"description": "Language for the summary",
26 | 					"default": "en"
27 | 				},
28 | 				{
29 | 					"name": "style",
30 | 					"type": "string",
31 | 					"description": "Summary style (default, technical, executive, bullet, tldr, academic, critical, eli5)",
32 | 					"default": "default"
33 | 				}
34 | 			],
35 | 			"output": {
36 | 				"type": "string",
37 | 				"description": "Summarized text"
38 | 			}
39 | 		},
40 | 		{
41 | 			"name": "summarize_text",
42 | 			"description": "Summarizes text using configured templates",
43 | 			"server": "Prompt Engineering Assistant",
44 | 			"inputs": [
45 | 				{
46 | 					"name": "text",
47 | 					"type": "string",
48 | 					"description": "The text to summarize",
49 | 					"required": true
50 | 				},
51 | 				{
52 | 					"name": "template",
53 | 					"type": "string",
54 | 					"description": "Template name to use (default, technical, executive, bullet, tldr)",
55 | 					"default": "default"
56 | 				},
57 | 				{
58 | 					"name": "max_length",
59 | 					"type": "number",
60 | 					"description": "Maximum length of summary",
61 | 					"default": 200
62 | 				}
63 | 			],
64 | 			"output": {
65 | 				"type": "string",
66 | 				"description": "Summarized text"
67 | 			}
68 | 		},
69 | 		
70 | 		// Docker Tools
71 | 		{
72 | 			"name": "docker_exec",
73 | 			"description": "Executes a command in a running Docker container",
74 | 			"server": "Docker Integration",
75 | 			"inputs": [
76 | 				{
77 | 					"name": "container",
78 | 					"type": "string",
79 | 					"description": "Container ID or name",
80 | 					"required": true
81 | 				},
82 | 				{
83 | 					"name": "command",
84 | 					"type": "string",
85 | 					"description": "Command to execute",
86 | 					"required": true
87 | 				},
88 | 				{
89 | 					"name": "timeout",
90 | 					"type": "number",
91 | 					"description": "Command timeout in milliseconds",
92 | 					"default": 10000
93 | 				}
94 | 			],
95 | 			"output": {
96 | 				"type": "string",
97 | 				"description": "Command output"
98 | 			}
99 | 		},
100 | 		
101 | 		// Automation Tools
102 | 		{
103 | 			"name": "mouse_click",
104 | 			"description": "Performs a mouse click at the specified coordinates",
105 | 			"server": "Mouse Automation",
106 | 			"inputs": [
107 | 				{
108 | 					"name": "x",
109 | 					"type": "number",
110 | 					"description": "X coordinate",
111 | 					"required": true
112 | 				},
113 | 				{
114 | 					"name": "y",
115 | 					"type": "number",
116 | 					"description": "Y coordinate",
117 | 					"required": true
118 | 				},
119 | 				{
120 | 					"name": "button",
121 | 					"type": "string",
122 | 					"description": "Mouse button to click (left, right, middle)",
123 | 					"default": "left"
124 | 				},
125 | 				{
126 | 					"name": "double",
127 | 					"type": "boolean",
128 | 					"description": "Whether to perform a double-click",
129 | 					"default": false
130 | 				}
131 | 			],
132 | 			"output": {
133 | 				"type": "boolean",
134 | 				"description": "Success status"
135 | 			}
136 | 		},
137 | 		{
138 | 			"name": "keyboard_press",
139 | 			"description": "Simulates a keyboard key press or types text",
140 | 			"server": "Mouse Automation",
141 | 			"inputs": [
142 | 				{
143 | 					"name": "key",
144 | 					"type": "string",
145 | 					"description": "Key to press (e.g., 'a', 'enter', 'escape', 'f1')",
146 | 					"required": true
147 | 				},
148 | 				{
149 | 					"name": "modifier",
150 | 					"type": "string",
151 | 					"description": "Modifier key (e.g., 'ctrl', 'alt', 'shift', 'command')"
152 | 				},
153 | 				{
154 | 					"name": "text",
155 | 					"type": "string",
156 | 					"description": "Text to type instead of a single key"
157 | 				}
158 | 			],
159 | 			"output": {
160 | 				"type": "boolean",
161 | 				"description": "Success status"
162 | 			}
163 | 		},
164 | 		
165 | 		// Knowledge Graph Tools
166 | 		{
167 | 			"name": "search_memory",
168 | 			"description": "Searches the Knowledge Graph",
169 | 			"server": "Knowledge Graph",
170 | 			"inputs": [
171 | 				{
172 | 					"name": "query",
173 | 					"type": "string",
174 | 					"description": "Search query",
175 | 					"required": true
176 | 				},
177 | 				{
178 | 					"name": "limit",
179 | 					"type": "number",
180 | 					"description": "Maximum number of results",
181 | 					"default": 10
182 | 				},
183 | 				{
184 | 					"name": "types",
185 | 					"type": "array",
186 | 					"description": "Filter by node types",
187 | 					"default": []
188 | 				},
189 | 				{
190 | 					"name": "include_relations",
191 | 					"type": "boolean",
192 | 					"description": "Include relations in results",
193 | 					"default": true
194 | 				}
195 | 			],
196 | 			"output": {
197 | 				"type": "object",
198 | 				"description": "Search results with nodes and relations"
199 | 			}
200 | 		},
201 | 		{
202 | 			"name": "create_entity",
203 | 			"description": "Creates a new entity in the knowledge graph",
204 | 			"server": "Knowledge Graph",
205 | 			"inputs": [
206 | 				{
207 | 					"name": "name",
208 | 					"type": "string",
209 | 					"description": "Name of the entity",
210 | 					"required": true
211 | 				},
212 | 				{
213 | 					"name": "type",
214 | 					"type": "string",
215 | 					"description": "Type of the entity (e.g., person, concept, tool)",
216 | 					"required": true
217 | 				},
218 | 				{
219 | 					"name": "observations",
220 | 					"type": "array",
221 | 					"description": "Initial observations about the entity",
222 | 					"default": []
223 | 				},
224 | 				{
225 | 					"name": "metadata",
226 | 					"type": "object",
227 | 					"description": "Additional metadata for the entity",
228 | 					"default": {}
229 | 				}
230 | 			],
231 | 			"output": {
232 | 				"type": "object",
233 | 				"description": "Created entity information"
234 | 			}
235 | 		},
236 | 		{
237 | 			"name": "create_relation",
238 | 			"description": "Creates a relationship between two entities",
239 | 			"server": "Knowledge Graph",
240 | 			"inputs": [
241 | 				{
242 | 					"name": "from",
243 | 					"type": "string",
244 | 					"description": "Name of the source entity",
245 | 					"required": true
246 | 				},
247 | 				{
248 | 					"name": "to",
249 | 					"type": "string",
250 | 					"description": "Name of the target entity",
251 | 					"required": true
252 | 				},
253 | 				{
254 | 					"name": "type",
255 | 					"type": "string",
256 | 					"description": "Type of relationship (e.g., depends_on, contains, created_by)",
257 | 					"required": true
258 | 				},
259 | 				{
260 | 					"name": "metadata",
261 | 					"type": "object",
262 | 					"description": "Additional metadata for the relationship",
263 | 					"default": {}
264 | 				}
265 | 			],
266 | 			"output": {
267 | 				"type": "object",
268 | 				"description": "Created relationship information"
269 | 			}
270 | 		},
271 | 		{
272 | 			"name": "add_observation",
273 | 			"description": "Adds an observation to an existing entity",
274 | 			"server": "Knowledge Graph",
275 | 			"inputs": [
276 | 				{
277 | 					"name": "entity",
278 | 					"type": "string",
279 | 					"description": "Name of the entity",
280 | 					"required": true
281 | 				},
282 | 				{
283 | 					"name": "observation",
284 | 					"type": "string",
285 | 					"description": "Observation text to add",
286 | 					"required": true
287 | 				},
288 | 				{
289 | 					"name": "source",
290 | 					"type": "string",
291 | 					"description": "Source of the observation",
292 | 					"default": "user"
293 | 				}
294 | 			],
295 | 			"output": {
296 | 				"type": "object",
297 | 				"description": "Updated entity information"
298 | 			}
299 | 		},
300 | 		{
301 | 			"name": "search_entities",
302 | 			"description": "Searches for entities in the knowledge graph",
303 | 			"server": "Knowledge Graph",
304 | 			"inputs": [
305 | 				{
306 | 					"name": "query",
307 | 					"type": "string",
308 | 					"description": "Search query",
309 | 					"required": true
310 | 				},
311 | 				{
312 | 					"name": "types",
313 | 					"type": "array",
314 | 					"description": "Filter by entity types",
315 | 					"default": []
316 | 				},
317 | 				{
318 | 					"name": "limit",
319 | 					"type": "number",
320 | 					"description": "Maximum number of results",
321 | 					"default": 10
322 | 				},
323 | 				{
324 | 					"name": "include_observations",
325 | 					"type": "boolean",
326 | 					"description": "Include entity observations in results",
327 | 					"default": true
328 | 				}
329 | 			],
330 | 			"output": {
331 | 				"type": "object",
332 | 				"description": "Search results with matching entities"
333 | 			}
334 | 		},
335 | 		{
336 | 			"name": "get_entity",
337 | 			"description": "Retrieves detailed information about an entity",
338 | 			"server": "Knowledge Graph",
339 | 			"inputs": [
340 | 				{
341 | 					"name": "name",
342 | 					"type": "string",
343 | 					"description": "Name of the entity to retrieve",
344 | 					"required": true
345 | 				},
346 | 				{
347 | 					"name": "include_relations",
348 | 					"type": "boolean",
349 | 					"description": "Include relationships in the result",
350 | 					"default": true
351 | 				}
352 | 			],
353 | 			"output": {
354 | 				"type": "object",
355 | 				"description": "Entity information including observations and relationships"
356 | 			}
357 | 		},
358 | 		{
359 | 			"name": "create_entities",
360 | 			"description": "Create multiple new entities in the knowledge graph",
361 | 			"server": "Knowledge Graph",
362 | 			"inputs": [
363 | 				{
364 | 					"name": "entities",
365 | 					"type": "array",
366 | 					"description": "Array of entity definitions to create",
367 | 					"required": true
368 | 				}
369 | 			],
370 | 			"output": {
371 | 				"type": "object",
372 | 				"description": "Results of entity creation operations"
373 | 			}
374 | 		},
375 | 		{
376 | 			"name": "create_relations",
377 | 			"description": "Create multiple new relations between entities in the knowledge graph",
378 | 			"server": "Knowledge Graph",
379 | 			"inputs": [
380 | 				{
381 | 					"name": "relations",
382 | 					"type": "array",
383 | 					"description": "Array of relation definitions to create",
384 | 					"required": true
385 | 				}
386 | 			],
387 | 			"output": {
388 | 				"type": "object",
389 | 				"description": "Results of relation creation operations"
390 | 			}
391 | 		},
392 | 		{
393 | 			"name": "add_observations",
394 | 			"description": "Add new observations to existing entities in the knowledge graph",
395 | 			"server": "Knowledge Graph",
396 | 			"inputs": [
397 | 				{
398 | 					"name": "observations",
399 | 					"type": "array",
400 | 					"description": "Array of observations to add",
401 | 					"required": true
402 | 				}
403 | 			],
404 | 			"output": {
405 | 				"type": "object",
406 | 				"description": "Results of observation addition operations"
407 | 			}
408 | 		},
409 | 		{
410 | 			"name": "delete_entities",
411 | 			"description": "Delete multiple entities and their associated relations from the knowledge graph",
412 | 			"server": "Knowledge Graph",
413 | 			"inputs": [
414 | 				{
415 | 					"name": "entities",
416 | 					"type": "array",
417 | 					"description": "Names of entities to delete",
418 | 					"required": true
419 | 				}
420 | 			],
421 | 			"output": {
422 | 				"type": "object",
423 | 				"description": "Results of entity deletion operations"
424 | 			}
425 | 		},
426 | 		{
427 | 			"name": "delete_observations",
428 | 			"description": "Delete specific observations from entities in the knowledge graph",
429 | 			"server": "Knowledge Graph",
430 | 			"inputs": [
431 | 				{
432 | 					"name": "entity",
433 | 					"type": "string",
434 | 					"description": "Entity name",
435 | 					"required": true
436 | 				},
437 | 				{
438 | 					"name": "observation_ids",
439 | 					"type": "array",
440 | 					"description": "IDs of observations to delete",
441 | 					"required": true
442 | 				}
443 | 			],
444 | 			"output": {
445 | 				"type": "object",
446 | 				"description": "Results of observation deletion operations"
447 | 			}
448 | 		},
449 | 		{
450 | 			"name": "delete_relations",
451 | 			"description": "Delete multiple relations from the knowledge graph",
452 | 			"server": "Knowledge Graph",
453 | 			"inputs": [
454 | 				{
455 | 					"name": "relation_ids",
456 | 					"type": "array",
457 | 					"description": "IDs of relations to delete",
458 | 					"required": true
459 | 				}
460 | 			],
461 | 			"output": {
462 | 				"type": "object",
463 | 				"description": "Results of relation deletion operations"
464 | 			}
465 | 		},
466 | 		
467 | 		// Repository Tools
468 | 		{
469 | 			"name": "pack_repository",
470 | 			"description": "Pack a Git repository into an AI-friendly format for context generation using Repomix",
471 | 			"server": "Repository Tools",
472 | 			"inputs": [
473 | 				{
474 | 					"name": "repoUrl",
475 | 					"type": "string",
476 | 					"description": "URL of the Git repository to pack",
477 | 					"required": true
478 | 				},
479 | 				{
480 | 					"name": "format",
481 | 					"type": "string",
482 | 					"enum": ["json", "markdown", "plain"],
483 | 					"description": "Output format for the packed repository",
484 | 					"default": "json"
485 | 				},
486 | 				{
487 | 					"name": "branch",
488 | 					"type": "string",
489 | 					"description": "Branch to pack",
490 | 					"default": "main"
491 | 				},
492 | 				{
493 | 					"name": "excludePaths",
494 | 					"type": "array",
495 | 					"items": {
496 | 						"type": "string"
497 | 					},
498 | 					"description": "Paths to exclude from the packed repository"
499 | 				}
500 | 			],
501 | 			"output": {
502 | 				"type": "object",
503 | 				"description": "Packed repository data"
504 | 			}
505 | 		},
506 | 		{
507 | 			"name": "analyze_repository",
508 | 			"description": "Analyze a Git repository to extract insights and structure using GitIngest",
509 | 			"server": "Repository Tools",
510 | 			"inputs": [
511 | 				{
512 | 					"name": "repoUrl",
513 | 					"type": "string",
514 | 					"description": "URL of the Git repository to analyze",
515 | 					"required": true
516 | 				},
517 | 				{
518 | 					"name": "branch",
519 | 					"type": "string",
520 | 					"description": "Branch to analyze",
521 | 					"default": "main"
522 | 				},
523 | 				{
524 | 					"name": "depth",
525 | 					"type": "number",
526 | 					"description": "Depth of analysis (1-5)",
527 | 					"default": 1
528 | 				},
529 | 				{
530 | 					"name": "analysisType",
531 | 					"type": "string",
532 | 					"enum": ["full", "structure", "dependencies", "code"],
533 | 					"description": "Type of analysis to perform",
534 | 					"default": "full"
535 | 				}
536 | 			],
537 | 			"output": {
538 | 				"type": "object",
539 | 				"description": "Repository analysis results"
540 | 			}
541 | 		},
542 | 		{
543 | 			"name": "fetch_code",
544 | 			"description": "Fetch specific code files or snippets from a repository using CodeFetch",
545 | 			"server": "Repository Tools",
546 | 			"inputs": [
547 | 				{
548 | 					"name": "repoUrl",
549 | 					"type": "string",
550 | 					"description": "URL of the Git repository",
551 | 					"required": true
552 | 				},
553 | 				{
554 | 					"name": "path",
555 | 					"type": "string",
556 | 					"description": "Path to the file or directory to fetch",
557 | 					"required": true
558 | 				},
559 | 				{
560 | 					"name": "branch",
561 | 					"type": "string",
562 | 					"description": "Branch to fetch from",
563 | 					"default": "main"
564 | 				},
565 | 				{
566 | 					"name": "outputFormat",
567 | 					"type": "string",
568 | 					"enum": ["text", "json", "markdown"],
569 | 					"description": "Format for the fetched code",
570 | 					"default": "text"
571 | 				}
572 | 			],
573 | 			"output": {
574 | 				"type": "object",
575 | 				"description": "Fetched code files or snippets"
576 | 			}
577 | 		},
578 | 		{
579 | 			"name": "generate_context",
580 | 			"description": "Generate context from a repository for use in prompts and conversations",
581 | 			"server": "Repository Tools",
582 | 			"inputs": [
583 | 				{
584 | 					"name": "repoUrl",
585 | 					"type": "string",
586 | 					"description": "URL of the Git repository",
587 | 					"required": true
588 | 				},
589 | 				{
590 | 					"name": "contextType",
591 | 					"type": "string",
592 | 					"enum": [
593 | 						"default",
594 | 						"code",
595 | 						"architecture",
596 | 						"dependencies",
597 | 						"general"
598 | 					],
599 | 					"description": "Type of context to generate",
600 | 					"default": "default"
601 | 				},
602 | 				{
603 | 					"name": "depth",
604 | 					"type": "number",
605 | 					"description": "Depth of context (1-5, higher means more detailed)",
606 | 					"default": 2
607 | 				},
608 | 				{
609 | 					"name": "format",
610 | 					"type": "string",
611 | 					"enum": ["json", "markdown", "plain"],
612 | 					"description": "Format for the context",
613 | 					"default": "json"
614 | 				}
615 | 			],
616 | 			"output": {
617 | 				"type": "object",
618 | 				"description": "Generated context for the repository"
619 | 			}
620 | 		},
621 | 		{
622 | 			"name": "list_cached_repos",
623 | 			"description": "List repositories that have been processed and cached",
624 | 			"server": "Repository Tools",
625 | 			"parameters": {
626 | 				"type": "object",
627 | 				"properties": {}
628 | 			},
629 | 			"output": {
630 | 				"type": "array",
631 | 				"description": "List of cached repositories"
632 | 			}
633 | 		},
634 | 		{
635 | 			"name": "clear_cache",
636 | 			"description": "Clear cached repository data",
637 | 			"server": "Repository Tools",
638 | 			"inputs": [
639 | 				{
640 | 					"name": "repoUrl",
641 | 					"type": "string",
642 | 					"description": "URL of the repository to clear (omit to clear all)"
643 | 				}
644 | 			],
645 | 			"output": {
646 | 				"type": "object",
647 | 				"description": "Result of cache clearing operation"
648 | 			}
649 | 		},
650 | 		
651 | 		// Component Analysis Tools
652 | 		{
653 | 			"name": "detect_component",
654 | 			"description": "Detects and analyzes new components in the codebase",
655 | 			"server": "Component Absorption",
656 | 			"inputs": [
657 | 				{
658 | 					"name": "path",
659 | 					"type": "string",
660 | 					"description": "Path to analyze for components",
661 | 					"required": true
662 | 				},
663 | 				{
664 | 					"name": "type",
665 | 					"type": "string",
666 | 					"description": "Type of component to detect",
667 | 					"default": "auto"
668 | 				},
669 | 				{
670 | 					"name": "depth",
671 | 					"type": "number",
672 | 					"description": "Analysis depth",
673 | 					"default": 3
674 | 				}
675 | 			],
676 | 			"output": {
677 | 				"type": "object",
678 | 				"description": "Component analysis results"
679 | 			}
680 | 		},
681 | 		{
682 | 			"name": "analyze_component",
683 | 			"description": "Performs detailed analysis of a detected component",
684 | 			"server": "Component Absorption",
685 | 			"inputs": [
686 | 				{
687 | 					"name": "componentId",
688 | 					"type": "string",
689 | 					"description": "ID of the component to analyze",
690 | 					"required": true
691 | 				},
692 | 				{
693 | 					"name": "analysisType",
694 | 					"type": "string",
695 | 					"description": "Type of analysis to perform",
696 | 					"default": "full"
697 | 				}
698 | 			],
699 | 			"output": {
700 | 				"type": "object",
701 | 				"description": "Detailed component analysis"
702 | 			}
703 | 		},
704 | 		{
705 | 			"name": "integrate_component",
706 | 			"description": "Integrates a detected component into the system",
707 | 			"server": "Component Absorption",
708 | 			"inputs": [
709 | 				{
710 | 					"name": "componentId",
711 | 					"type": "string",
712 | 					"description": "ID of the component to integrate",
713 | 					"required": true
714 | 				},
715 | 				{
716 | 					"name": "integrationOptions",
717 | 					"type": "object",
718 | 					"description": "Integration configuration options",
719 | 					"default": {}
720 | 				}
721 | 			],
722 | 			"output": {
723 | 				"type": "object",
724 | 				"description": "Integration results"
725 | 			}
726 | 		},
727 | 		
728 | 		// Web Search Tools
729 | 		{
730 | 			"name": "web_search_optimized",
731 | 			"description": "Performs efficient web searches with the Brave Search API, conserving API usage",
732 | 			"server": "Brave Search MCP",
733 | 			"inputs": [
734 | 				{
735 | 					"name": "query",
736 | 					"type": "string",
737 | 					"description": "The search query",
738 | 					"required": true
739 | 				},
740 | 				{
741 | 					"name": "count",
742 | 					"type": "number",
743 | 					"description": "Number of results to return (1-10)",
744 | 					"default": 5
745 | 				},
746 | 				{
747 | 					"name": "country",
748 | 					"type": "string",
749 | 					"description": "Country code for localized results",
750 | 					"default": "US"
751 | 				}
752 | 			],
753 | 			"output": {
754 | 				"type": "object",
755 | 				"description": "Search results with prioritized information"
756 | 			}
757 | 		}
758 | 	]
759 | }
```

promptEngine/01_Why_finetuning_lab_student.py
```
1 | #!/usr/bin/env python
2 | # coding: utf-8
3 | 
4 | # # Compare finetuned vs. non-finetuned models
5 | 
6 | # In[ ]:
7 | 
8 | 
9 | import os
10 | import lamini
11 | 
12 | lamini.api_url = os.getenv("POWERML__PRODUCTION__URL")
13 | lamini.api_key = os.getenv("POWERML__PRODUCTION__KEY")
14 | 
15 | 
16 | # In[ ]:
17 | 
18 | 
19 | from llama import BasicModelRunner
20 | 
21 | 
22 | # ### Try Non-Finetuned models
23 | 
24 | # In[ ]:
25 | 
26 | 
27 | non_finetuned = BasicModelRunner("meta-llama/Llama-2-7b-hf")
28 | 
29 | 
30 | # In[ ]:
31 | 
32 | 
33 | non_finetuned_output = non_finetuned("Tell me how to train my dog to sit")
34 | 
35 | 
36 | # In[ ]:
37 | 
38 | 
39 | print(non_finetuned_output)
40 | 
41 | 
42 | # In[ ]:
43 | 
44 | 
45 | print(non_finetuned("What do you think of Mars?"))
46 | 
47 | 
48 | # In[ ]:
49 | 
50 | 
51 | print(non_finetuned("taylor swift's best friend"))
52 | 
53 | 
54 | # In[ ]:
55 | 
56 | 
57 | print(non_finetuned("""Agent: I'm here to help you with your Amazon deliver order.
58 | Customer: I didn't get my item
59 | Agent: I'm sorry to hear that. Which item was it?
60 | Customer: the blanket
61 | Agent:"""))
62 | 
63 | 
64 | # ### Compare to finetuned models 
65 | 
66 | # In[ ]:
67 | 
68 | 
69 | finetuned_model = BasicModelRunner("meta-llama/Llama-2-7b-chat-hf")
70 | 
71 | 
72 | # In[ ]:
73 | 
74 | 
75 | finetuned_output = finetuned_model("Tell me how to train my dog to sit")
76 | 
77 | 
78 | # In[ ]:
79 | 
80 | 
81 | print(finetuned_output)
82 | 
83 | 
84 | # In[ ]:
85 | 
86 | 
87 | print(finetuned_model("[INST]Tell me how to train my dog to sit[/INST]"))
88 | 
89 | 
90 | # In[ ]:
91 | 
92 | 
93 | print(non_finetuned("[INST]Tell me how to train my dog to sit[/INST]"))
94 | 
95 | 
96 | # In[ ]:
97 | 
98 | 
99 | print(finetuned_model("What do you think of Mars?"))
100 | 
101 | 
102 | # In[ ]:
103 | 
104 | 
105 | print(finetuned_model("taylor swift's best friend"))
106 | 
107 | 
108 | # In[ ]:
109 | 
110 | 
111 | print(finetuned_model("""Agent: I'm here to help you with your Amazon deliver order.
112 | Customer: I didn't get my item
113 | Agent: I'm sorry to hear that. Which item was it?
114 | Customer: the blanket
115 | Agent:"""))
116 | 
117 | 
118 | # ### Compare to ChatGPT
119 | 
120 | # > Note: This section of the notebook has been updated.
121 | # 
122 | # When run with the query:
123 | # 
124 | # ```Tell me how to train my dog to sit```
125 | # 
126 | # ChatGPT responds with:
127 | # 
128 | # > Training your dog to sit is a basic and essential command that can be taught using positive reinforcement. Here's a simple step-by-step guide:
129 | # > 1. **Prepare Treats:**
130 | #    Gather small, soft treats that your dog enjoys. Make sure they are easy to chew and won't take too long to eat.
131 | # > 2. **Find a Quiet Space:**
132 | #    Choose a quiet area with minimal distractions for the training session. This will help your dog focus better.
133 | # > 3. **Get Your Dog's Attention:**
134 | #    Call your dog's name to get their attention. Make sure they are looking at you.
135 | # > 4. **Use a Treat to Lure:**
136 | #    Hold a treat close to your dog's nose, and slowly move your hand upward and slightly backward over their head. As you do this, your dog's natural response will be to follow the treat with their nose, causing them to sit.
137 | # > 5. **Say the Command:**
138 | #    As your dog starts to sit, say the command "Sit" in a clear and firm voice. Use the word consistently every time you want your dog to sit.
139 | # > 6. **Reward and Praise:**
140 | #    As soon as your dog sits, immediately reward them with the treat and offer verbal praise. This positive reinforcement will help them associate sitting with positive outcomes.
141 | # > 7. **Repeat and Practice:**
142 | #    Repeat the process several times in a row during each training session. Keep the sessions short (around 5-10 minutes) to prevent your dog from losing interest.
143 | # > 8. **Add Duration:**
144 | #    Once your dog consistently sits on command, you can gradually increase the duration by waiting a couple of seconds before giving the treat. This helps reinforce the sit command.
145 | # > 9. **Generalize the Command:**
146 | #    Practice the "sit" command in different locations and with various distractions to help your dog generalize the behavior.
147 | # > 10. **Be Patient and Consistent:**
148 | #     Patience and consistency are key in dog training. Always use positive reinforcement, and avoid punishment. If your dog doesn't succeed initially, go back a step and try again.
149 | # > 
150 | # > Remember that each dog is unique, and some may learn more quickly than others. Adjust your training approach based on your dog's individual needs and progress.
151 | 
152 | # In[ ]:
153 | 
154 | 
155 | 
156 | 
```

promptEngine/02_Where_finetuning_fits_in_lab_student.py
```
1 | #!/usr/bin/env python
2 | # coding: utf-8
3 | 
4 | # # Finetuning data: compare to pretraining and basic preparation
5 | 
6 | # In[ ]:
7 | 
8 | 
9 | import jsonlines
10 | import itertools
11 | import pandas as pd
12 | from pprint import pprint
13 | 
14 | import datasets
15 | from datasets import load_dataset
16 | 
17 | 
18 | # ### Look at pretraining data set
19 | 
20 | # **Sorry**, "The Pile" dataset is currently relocating to a new home and so we can't show you the same example that is in the video. Here is another dataset, the ["Common Crawl"](https://huggingface.co/datasets/c4) dataset.
21 | 
22 | # In[ ]:
23 | 
24 | 
25 | #pretrained_dataset = load_dataset("EleutherAI/pile", split="train", streaming=True)
26 | 
27 | pretrained_dataset = load_dataset("c4", "en", split="train", streaming=True)
28 | 
29 | 
30 | # In[ ]:
31 | 
32 | 
33 | n = 5
34 | print("Pretrained dataset:")
35 | top_n = itertools.islice(pretrained_dataset, n)
36 | for i in top_n:
37 |   print(i)
38 | 
39 | 
40 | # ### Contrast with company finetuning dataset you will be using
41 | 
42 | # In[ ]:
43 | 
44 | 
45 | filename = "lamini_docs.jsonl"
46 | instruction_dataset_df = pd.read_json(filename, lines=True)
47 | instruction_dataset_df
48 | 
49 | 
50 | # ### Various ways of formatting your data
51 | 
52 | # In[ ]:
53 | 
54 | 
55 | examples = instruction_dataset_df.to_dict()
56 | text = examples["question"][0] + examples["answer"][0]
57 | text
58 | 
59 | 
60 | # In[ ]:
61 | 
62 | 
63 | if "question" in examples and "answer" in examples:
64 |   text = examples["question"][0] + examples["answer"][0]
65 | elif "instruction" in examples and "response" in examples:
66 |   text = examples["instruction"][0] + examples["response"][0]
67 | elif "input" in examples and "output" in examples:
68 |   text = examples["input"][0] + examples["output"][0]
69 | else:
70 |   text = examples["text"][0]
71 | 
72 | 
73 | # In[ ]:
74 | 
75 | 
76 | prompt_template_qa = """### Question:
77 | {question}
78 | 
79 | ### Answer:
80 | {answer}"""
81 | 
82 | 
83 | # In[ ]:
84 | 
85 | 
86 | question = examples["question"][0]
87 | answer = examples["answer"][0]
88 | 
89 | text_with_prompt_template = prompt_template_qa.format(question=question, answer=answer)
90 | text_with_prompt_template
91 | 
92 | 
93 | # In[ ]:
94 | 
95 | 
96 | prompt_template_q = """### Question:
97 | {question}
98 | 
99 | ### Answer:"""
100 | 
101 | 
102 | # In[ ]:
103 | 
104 | 
105 | num_examples = len(examples["question"])
106 | finetuning_dataset_text_only = []
107 | finetuning_dataset_question_answer = []
108 | for i in range(num_examples):
109 |   question = examples["question"][i]
110 |   answer = examples["answer"][i]
111 | 
112 |   text_with_prompt_template_qa = prompt_template_qa.format(question=question, answer=answer)
113 |   finetuning_dataset_text_only.append({"text": text_with_prompt_template_qa})
114 | 
115 |   text_with_prompt_template_q = prompt_template_q.format(question=question)
116 |   finetuning_dataset_question_answer.append({"question": text_with_prompt_template_q, "answer": answer})
117 | 
118 | 
119 | # In[ ]:
120 | 
121 | 
122 | pprint(finetuning_dataset_text_only[0])
123 | 
124 | 
125 | # In[ ]:
126 | 
127 | 
128 | pprint(finetuning_dataset_question_answer[0])
129 | 
130 | 
131 | # ### Common ways of storing your data
132 | 
133 | # In[ ]:
134 | 
135 | 
136 | with jsonlines.open(f'lamini_docs_processed.jsonl', 'w') as writer:
137 |     writer.write_all(finetuning_dataset_question_answer)
138 | 
139 | 
140 | # In[ ]:
141 | 
142 | 
143 | finetuning_dataset_name = "lamini/lamini_docs"
144 | finetuning_dataset = load_dataset(finetuning_dataset_name)
145 | print(finetuning_dataset)
146 | 
```

promptEngine/03_Instruction_tuning_lab_student.py
```
1 | #!/usr/bin/env python
2 | # coding: utf-8
3 | 
4 | # # Instruction-tuning
5 | 
6 | # In[ ]:
7 | 
8 | 
9 | import itertools
10 | import jsonlines
11 | 
12 | from datasets import load_dataset
13 | from pprint import pprint
14 | 
15 | from llama import BasicModelRunner
16 | from transformers import AutoTokenizer, AutoModelForCausalLM
17 | from transformers import AutoModelForSeq2SeqLM, AutoTokenizer
18 | 
19 | 
20 | # ### Load instruction tuned dataset
21 | 
22 | # In[ ]:
23 | 
24 | 
25 | instruction_tuned_dataset = load_dataset("tatsu-lab/alpaca", split="train", streaming=True)
26 | 
27 | 
28 | # In[ ]:
29 | 
30 | 
31 | m = 5
32 | print("Instruction-tuned dataset:")
33 | top_m = list(itertools.islice(instruction_tuned_dataset, m))
34 | for j in top_m:
35 |   print(j)
36 | 
37 | 
38 | # ### Two prompt templates
39 | 
40 | # In[ ]:
41 | 
42 | 
43 | prompt_template_with_input = """Below is an instruction that describes a task, paired with an input that provides further context. Write a response that appropriately completes the request.
44 | 
45 | ### Instruction:
46 | {instruction}
47 | 
48 | ### Input:
49 | {input}
50 | 
51 | ### Response:"""
52 | 
53 | prompt_template_without_input = """Below is an instruction that describes a task. Write a response that appropriately completes the request.
54 | 
55 | ### Instruction:
56 | {instruction}
57 | 
58 | ### Response:"""
59 | 
60 | 
61 | # ### Hydrate prompts (add data to prompts)
62 | 
63 | # In[ ]:
64 | 
65 | 
66 | processed_data = []
67 | for j in top_m:
68 |   if not j["input"]:
69 |     processed_prompt = prompt_template_without_input.format(instruction=j["instruction"])
70 |   else:
71 |     processed_prompt = prompt_template_with_input.format(instruction=j["instruction"], input=j["input"])
72 | 
73 |   processed_data.append({"input": processed_prompt, "output": j["output"]})
74 | 
75 | 
76 | # In[ ]:
77 | 
78 | 
79 | pprint(processed_data[0])
80 | 
81 | 
82 | # ### Save data to jsonl
83 | 
84 | # In[ ]:
85 | 
86 | 
87 | with jsonlines.open(f'alpaca_processed.jsonl', 'w') as writer:
88 |     writer.write_all(processed_data)
89 | 
90 | 
91 | # ### Compare non-instruction-tuned vs. instruction-tuned models
92 | 
93 | # In[ ]:
94 | 
95 | 
96 | dataset_path_hf = "lamini/alpaca"
97 | dataset_hf = load_dataset(dataset_path_hf)
98 | print(dataset_hf)
99 | 
100 | 
101 | # In[ ]:
102 | 
103 | 
104 | non_instruct_model = BasicModelRunner("meta-llama/Llama-2-7b-hf")
105 | non_instruct_output = non_instruct_model("Tell me how to train my dog to sit")
106 | print("Not instruction-tuned output (Llama 2 Base):", non_instruct_output)
107 | 
108 | 
109 | # In[ ]:
110 | 
111 | 
112 | instruct_model = BasicModelRunner("meta-llama/Llama-2-7b-chat-hf")
113 | instruct_output = instruct_model("Tell me how to train my dog to sit")
114 | print("Instruction-tuned output (Llama 2): ", instruct_output)
115 | 
116 | 
117 | # > Note: This section of the notebook has been updated.
118 | # 
119 | # Instruction-tuned output (ChatGPT) responds with:
120 | # 
121 | # > Training your dog to sit is a basic and essential command that can be taught using positive reinforcement. Here's a simple step-by-step guide:
122 | # > 1. **Prepare Treats:**
123 | #    Gather small, soft treats that your dog enjoys. Make sure they are easy to chew and won't take too long to eat.
124 | # > 2. **Find a Quiet Space:**
125 | #    Choose a quiet area with minimal distractions for the training session. This will help your dog focus better.
126 | # > 3. **Get Your Dog's Attention:**
127 | #    Call your dog's name to get their attention. Make sure they are looking at you.
128 | # > 4. **Use a Treat to Lure:**
129 | #    Hold a treat close to your dog's nose, and slowly move your hand upward and slightly backward over their head. As you do this, your dog's natural response will be to follow the treat with their nose, causing them to sit.
130 | # > 5. **Say the Command:**
131 | #    As your dog starts to sit, say the command "Sit" in a clear and firm voice. Use the word consistently every time you want your dog to sit.
132 | # > 6. **Reward and Praise:**
133 | #    As soon as your dog sits, immediately reward them with the treat and offer verbal praise. This positive reinforcement will help them associate sitting with positive outcomes.
134 | # > 7. **Repeat and Practice:**
135 | #    Repeat the process several times in a row during each training session. Keep the sessions short (around 5-10 minutes) to prevent your dog from losing interest.
136 | # > 8. **Add Duration:**
137 | #    Once your dog consistently sits on command, you can gradually increase the duration by waiting a couple of seconds before giving the treat. This helps reinforce the sit command.
138 | # > 9. **Generalize the Command:**
139 | #    Practice the "sit" command in different locations and with various distractions to help your dog generalize the behavior.
140 | # > 10. **Be Patient and Consistent:**
141 | #     Patience and consistency are key in dog training. Always use positive reinforcement, and avoid punishment. If your dog doesn't succeed initially, go back a step and try again.
142 | # > 
143 | # > Remember that each dog is unique, and some may learn more quickly than others. Adjust your training approach based on your dog's individual needs and progress.
144 | 
145 | # ### Try smaller models
146 | 
147 | # In[ ]:
148 | 
149 | 
150 | tokenizer = AutoTokenizer.from_pretrained("EleutherAI/pythia-70m")
151 | model = AutoModelForCausalLM.from_pretrained("EleutherAI/pythia-70m")
152 | 
153 | 
154 | # In[ ]:
155 | 
156 | 
157 | def inference(text, model, tokenizer, max_input_tokens=1000, max_output_tokens=100):
158 |   # Tokenize
159 |   input_ids = tokenizer.encode(
160 |           text,
161 |           return_tensors="pt",
162 |           truncation=True,
163 |           max_length=max_input_tokens
164 |   )
165 | 
166 |   # Generate
167 |   device = model.device
168 |   generated_tokens_with_prompt = model.generate(
169 |     input_ids=input_ids.to(device),
170 |     max_length=max_output_tokens
171 |   )
172 | 
173 |   # Decode
174 |   generated_text_with_prompt = tokenizer.batch_decode(generated_tokens_with_prompt, skip_special_tokens=True)
175 | 
176 |   # Strip the prompt
177 |   generated_text_answer = generated_text_with_prompt[0][len(text):]
178 | 
179 |   return generated_text_answer
180 | 
181 | 
182 | # In[ ]:
183 | 
184 | 
185 | finetuning_dataset_path = "lamini/lamini_docs"
186 | finetuning_dataset = load_dataset(finetuning_dataset_path)
187 | print(finetuning_dataset)
188 | 
189 | 
190 | # In[ ]:
191 | 
192 | 
193 | test_sample = finetuning_dataset["test"][0]
194 | print(test_sample)
195 | 
196 | print(inference(test_sample["question"], model, tokenizer))
197 | 
198 | 
199 | # ### Compare to finetuned small model
200 | 
201 | # In[ ]:
202 | 
203 | 
204 | instruction_model = AutoModelForCausalLM.from_pretrained("lamini/lamini_docs_finetuned")
205 | 
206 | 
207 | # In[ ]:
208 | 
209 | 
210 | print(inference(test_sample["question"], instruction_model, tokenizer))
211 | 
212 | 
213 | # In[ ]:
214 | 
215 | 
216 | # Pssst! If you were curious how to upload your own dataset to Huggingface
217 | # Here is how we did it
218 | 
219 | # !pip install huggingface_hub
220 | # !huggingface-cli login
221 | 
222 | # import pandas as pd
223 | # import datasets
224 | # from datasets import Dataset
225 | 
226 | # finetuning_dataset = Dataset.from_pandas(pd.DataFrame(data=finetuning_dataset))
227 | # finetuning_dataset.push_to_hub(dataset_path_hf)
228 | 
```

promptEngine/04_Data_preparation_lab_student.py
```
1 | #!/usr/bin/env python
2 | # coding: utf-8
3 | 
4 | # # Data preparation
5 | 
6 | # In[ ]:
7 | 
8 | 
9 | import pandas as pd
10 | import datasets
11 | 
12 | from pprint import pprint
13 | from transformers import AutoTokenizer
14 | 
15 | 
16 | # ### Tokenizing text
17 | 
18 | # In[ ]:
19 | 
20 | 
21 | tokenizer = AutoTokenizer.from_pretrained("EleutherAI/pythia-70m")
22 | 
23 | 
24 | # In[ ]:
25 | 
26 | 
27 | text = "Hi, how are you?"
28 | 
29 | 
30 | # In[ ]:
31 | 
32 | 
33 | encoded_text = tokenizer(text)["input_ids"]
34 | 
35 | 
36 | # In[ ]:
37 | 
38 | 
39 | encoded_text
40 | 
41 | 
42 | # In[ ]:
43 | 
44 | 
45 | decoded_text = tokenizer.decode(encoded_text)
46 | print("Decoded tokens back into text: ", decoded_text)
47 | 
48 | 
49 | # ### Tokenize multiple texts at once
50 | 
51 | # In[ ]:
52 | 
53 | 
54 | list_texts = ["Hi, how are you?", "I'm good", "Yes"]
55 | encoded_texts = tokenizer(list_texts)
56 | print("Encoded several texts: ", encoded_texts["input_ids"])
57 | 
58 | 
59 | # ### Padding and truncation
60 | 
61 | # In[ ]:
62 | 
63 | 
64 | tokenizer.pad_token = tokenizer.eos_token 
65 | encoded_texts_longest = tokenizer(list_texts, padding=True)
66 | print("Using padding: ", encoded_texts_longest["input_ids"])
67 | 
68 | 
69 | # In[ ]:
70 | 
71 | 
72 | encoded_texts_truncation = tokenizer(list_texts, max_length=3, truncation=True)
73 | print("Using truncation: ", encoded_texts_truncation["input_ids"])
74 | 
75 | 
76 | # In[ ]:
77 | 
78 | 
79 | tokenizer.truncation_side = "left"
80 | encoded_texts_truncation_left = tokenizer(list_texts, max_length=3, truncation=True)
81 | print("Using left-side truncation: ", encoded_texts_truncation_left["input_ids"])
82 | 
83 | 
84 | # In[ ]:
85 | 
86 | 
87 | encoded_texts_both = tokenizer(list_texts, max_length=3, truncation=True, padding=True)
88 | print("Using both padding and truncation: ", encoded_texts_both["input_ids"])
89 | 
90 | 
91 | # ### Prepare instruction dataset
92 | 
93 | # In[ ]:
94 | 
95 | 
96 | import pandas as pd
97 | 
98 | filename = "lamini_docs.jsonl"
99 | instruction_dataset_df = pd.read_json(filename, lines=True)
100 | examples = instruction_dataset_df.to_dict()
101 | 
102 | if "question" in examples and "answer" in examples:
103 |   text = examples["question"][0] + examples["answer"][0]
104 | elif "instruction" in examples and "response" in examples:
105 |   text = examples["instruction"][0] + examples["response"][0]
106 | elif "input" in examples and "output" in examples:
107 |   text = examples["input"][0] + examples["output"][0]
108 | else:
109 |   text = examples["text"][0]
110 | 
111 | prompt_template = """### Question:
112 | {question}
113 | 
114 | ### Answer:"""
115 | 
116 | num_examples = len(examples["question"])
117 | finetuning_dataset = []
118 | for i in range(num_examples):
119 |   question = examples["question"][i]
120 |   answer = examples["answer"][i]
121 |   text_with_prompt_template = prompt_template.format(question=question)
122 |   finetuning_dataset.append({"question": text_with_prompt_template, "answer": answer})
123 | 
124 | from pprint import pprint
125 | print("One datapoint in the finetuning dataset:")
126 | pprint(finetuning_dataset[0])
127 | 
128 | 
129 | # ### Tokenize a single example
130 | 
131 | # In[ ]:
132 | 
133 | 
134 | text = finetuning_dataset[0]["question"] + finetuning_dataset[0]["answer"]
135 | tokenized_inputs = tokenizer(
136 |     text,
137 |     return_tensors="np",
138 |     padding=True
139 | )
140 | print(tokenized_inputs["input_ids"])
141 | 
142 | 
143 | # In[ ]:
144 | 
145 | 
146 | max_length = 2048
147 | max_length = min(
148 |     tokenized_inputs["input_ids"].shape[1],
149 |     max_length,
150 | )
151 | 
152 | 
153 | # In[ ]:
154 | 
155 | 
156 | tokenized_inputs = tokenizer(
157 |     text,
158 |     return_tensors="np",
159 |     truncation=True,
160 |     max_length=max_length
161 | )
162 | 
163 | 
164 | # In[ ]:
165 | 
166 | 
167 | tokenized_inputs["input_ids"]
168 | 
169 | 
170 | # ### Tokenize the instruction dataset
171 | 
172 | # In[ ]:
173 | 
174 | 
175 | def tokenize_function(examples):
176 |     if "question" in examples and "answer" in examples:
177 |       text = examples["question"][0] + examples["answer"][0]
178 |     elif "input" in examples and "output" in examples:
179 |       text = examples["input"][0] + examples["output"][0]
180 |     else:
181 |       text = examples["text"][0]
182 | 
183 |     tokenizer.pad_token = tokenizer.eos_token
184 |     tokenized_inputs = tokenizer(
185 |         text,
186 |         return_tensors="np",
187 |         padding=True,
188 |     )
189 | 
190 |     max_length = min(
191 |         tokenized_inputs["input_ids"].shape[1],
192 |         2048
193 |     )
194 |     tokenizer.truncation_side = "left"
195 |     tokenized_inputs = tokenizer(
196 |         text,
197 |         return_tensors="np",
198 |         truncation=True,
199 |         max_length=max_length
200 |     )
201 | 
202 |     return tokenized_inputs
203 | 
204 | 
205 | # In[ ]:
206 | 
207 | 
208 | finetuning_dataset_loaded = datasets.load_dataset("json", data_files=filename, split="train")
209 | 
210 | tokenized_dataset = finetuning_dataset_loaded.map(
211 |     tokenize_function,
212 |     batched=True,
213 |     batch_size=1,
214 |     drop_last_batch=True
215 | )
216 | 
217 | print(tokenized_dataset)
218 | 
219 | 
220 | # In[ ]:
221 | 
222 | 
223 | tokenized_dataset = tokenized_dataset.add_column("labels", tokenized_dataset["input_ids"])
224 | 
225 | 
226 | # ### Prepare test/train splits
227 | 
228 | # In[ ]:
229 | 
230 | 
231 | split_dataset = tokenized_dataset.train_test_split(test_size=0.1, shuffle=True, seed=123)
232 | print(split_dataset)
233 | 
234 | 
235 | # ### Some datasets for you to try
236 | 
237 | # In[ ]:
238 | 
239 | 
240 | finetuning_dataset_path = "lamini/lamini_docs"
241 | finetuning_dataset = datasets.load_dataset(finetuning_dataset_path)
242 | print(finetuning_dataset)
243 | 
244 | 
245 | # In[ ]:
246 | 
247 | 
248 | taylor_swift_dataset = "lamini/taylor_swift"
249 | bts_dataset = "lamini/bts"
250 | open_llms = "lamini/open_llms"
251 | 
252 | 
253 | # In[ ]:
254 | 
255 | 
256 | dataset_swiftie = datasets.load_dataset(taylor_swift_dataset)
257 | print(dataset_swiftie["train"][1])
258 | 
259 | 
260 | # In[ ]:
261 | 
262 | 
263 | # This is how to push your own dataset to your Huggingface hub
264 | # !pip install huggingface_hub
265 | # !huggingface-cli login
266 | # split_dataset.push_to_hub(dataset_path_hf)
267 | 
```

promptEngine/05_Training_lab_student.py
```
1 | #!/usr/bin/env python
2 | # coding: utf-8
3 | 
4 | # # Training
5 | 
6 | # ## Technically, it's only a few lines of code to run on GPUs (elsewhere, ie. on Lamini).
7 | # ```
8 | # from llama import BasicModelRunner
9 | # 
10 | # model = BasicModelRunner("EleutherAI/pythia-410m") 
11 | # model.load_data_from_jsonlines("lamini_docs.jsonl", input_key="question", output_key="answer")
12 | # model.train(is_public=True) 
13 | # 
14 | # 
15 | # ```
16 | # 1. Choose base model.
17 | # 2. Load data.
18 | # 3. Train it. Returns a model ID, dashboard, and playground interface.
19 | # 
20 | # ### Let's look under the hood at the core code running this! This is the open core of Lamini's `llama` library :)
21 | 
22 | # In[ ]:
23 | 
24 | 
25 | import os
26 | import lamini
27 | 
28 | lamini.api_url = os.getenv("POWERML__PRODUCTION__URL")
29 | lamini.api_key = os.getenv("POWERML__PRODUCTION__KEY")
30 | 
31 | 
32 | # In[ ]:
33 | 
34 | 
35 | import datasets
36 | import tempfile
37 | import logging
38 | import random
39 | import config
40 | import os
41 | import yaml
42 | import time
43 | import torch
44 | import transformers
45 | import pandas as pd
46 | import jsonlines
47 | 
48 | from utilities import *
49 | from transformers import AutoTokenizer
50 | from transformers import AutoModelForCausalLM
51 | from transformers import TrainingArguments
52 | from transformers import AutoModelForCausalLM
53 | from llama import BasicModelRunner
54 | 
55 | 
56 | logger = logging.getLogger(__name__)
57 | global_config = None
58 | 
59 | 
60 | # ### Load the Lamini docs dataset
61 | 
62 | # In[ ]:
63 | 
64 | 
65 | dataset_name = "lamini_docs.jsonl"
66 | dataset_path = f"/content/{dataset_name}"
67 | use_hf = False
68 | 
69 | 
70 | # In[ ]:
71 | 
72 | 
73 | dataset_path = "lamini/lamini_docs"
74 | use_hf = True
75 | 
76 | 
77 | # ### Set up the model, training config, and tokenizer
78 | 
79 | # In[ ]:
80 | 
81 | 
82 | model_name = "EleutherAI/pythia-70m"
83 | 
84 | 
85 | # In[ ]:
86 | 
87 | 
88 | training_config = {
89 |     "model": {
90 |         "pretrained_name": model_name,
91 |         "max_length" : 2048
92 |     },
93 |     "datasets": {
94 |         "use_hf": use_hf,
95 |         "path": dataset_path
96 |     },
97 |     "verbose": True
98 | }
99 | 
100 | 
101 | # In[ ]:
102 | 
103 | 
104 | tokenizer = AutoTokenizer.from_pretrained(model_name)
105 | tokenizer.pad_token = tokenizer.eos_token
106 | train_dataset, test_dataset = tokenize_and_split_data(training_config, tokenizer)
107 | 
108 | print(train_dataset)
109 | print(test_dataset)
110 | 
111 | 
112 | # ### Load the base model
113 | 
114 | # In[ ]:
115 | 
116 | 
117 | base_model = AutoModelForCausalLM.from_pretrained(model_name)
118 | 
119 | 
120 | # In[ ]:
121 | 
122 | 
123 | device_count = torch.cuda.device_count()
124 | if device_count > 0:
125 |     logger.debug("Select GPU device")
126 |     device = torch.device("cuda")
127 | else:
128 |     logger.debug("Select CPU device")
129 |     device = torch.device("cpu")
130 | 
131 | 
132 | # In[ ]:
133 | 
134 | 
135 | base_model.to(device)
136 | 
137 | 
138 | # ### Define function to carry out inference
139 | 
140 | # In[ ]:
141 | 
142 | 
143 | def inference(text, model, tokenizer, max_input_tokens=1000, max_output_tokens=100):
144 |   # Tokenize
145 |   input_ids = tokenizer.encode(
146 |           text,
147 |           return_tensors="pt",
148 |           truncation=True,
149 |           max_length=max_input_tokens
150 |   )
151 | 
152 |   # Generate
153 |   device = model.device
154 |   generated_tokens_with_prompt = model.generate(
155 |     input_ids=input_ids.to(device),
156 |     max_length=max_output_tokens
157 |   )
158 | 
159 |   # Decode
160 |   generated_text_with_prompt = tokenizer.batch_decode(generated_tokens_with_prompt, skip_special_tokens=True)
161 | 
162 |   # Strip the prompt
163 |   generated_text_answer = generated_text_with_prompt[0][len(text):]
164 | 
165 |   return generated_text_answer
166 | 
167 | 
168 | # ### Try the base model
169 | 
170 | # In[ ]:
171 | 
172 | 
173 | test_text = test_dataset[0]['question']
174 | print("Question input (test):", test_text)
175 | print(f"Correct answer from Lamini docs: {test_dataset[0]['answer']}")
176 | print("Model's answer: ")
177 | print(inference(test_text, base_model, tokenizer))
178 | 
179 | 
180 | # ### Setup training
181 | 
182 | # In[ ]:
183 | 
184 | 
185 | max_steps = 3
186 | 
187 | 
188 | # In[ ]:
189 | 
190 | 
191 | trained_model_name = f"lamini_docs_{max_steps}_steps"
192 | output_dir = trained_model_name
193 | 
194 | 
195 | # In[ ]:
196 | 
197 | 
198 | training_args = TrainingArguments(
199 | 
200 |   # Learning rate
201 |   learning_rate=1.0e-5,
202 | 
203 |   # Number of training epochs
204 |   num_train_epochs=1,
205 | 
206 |   # Max steps to train for (each step is a batch of data)
207 |   # Overrides num_train_epochs, if not -1
208 |   max_steps=max_steps,
209 | 
210 |   # Batch size for training
211 |   per_device_train_batch_size=1,
212 | 
213 |   # Directory to save model checkpoints
214 |   output_dir=output_dir,
215 | 
216 |   # Other arguments
217 |   overwrite_output_dir=False, # Overwrite the content of the output directory
218 |   disable_tqdm=False, # Disable progress bars
219 |   eval_steps=120, # Number of update steps between two evaluations
220 |   save_steps=120, # After # steps model is saved
221 |   warmup_steps=1, # Number of warmup steps for learning rate scheduler
222 |   per_device_eval_batch_size=1, # Batch size for evaluation
223 |   evaluation_strategy="steps",
224 |   logging_strategy="steps",
225 |   logging_steps=1,
226 |   optim="adafactor",
227 |   gradient_accumulation_steps = 4,
228 |   gradient_checkpointing=False,
229 | 
230 |   # Parameters for early stopping
231 |   load_best_model_at_end=True,
232 |   save_total_limit=1,
233 |   metric_for_best_model="eval_loss",
234 |   greater_is_better=False
235 | )
236 | 
237 | 
238 | # In[ ]:
239 | 
240 | 
241 | model_flops = (
242 |   base_model.floating_point_ops(
243 |     {
244 |        "input_ids": torch.zeros(
245 |            (1, training_config["model"]["max_length"])
246 |       )
247 |     }
248 |   )
249 |   * training_args.gradient_accumulation_steps
250 | )
251 | 
252 | print(base_model)
253 | print("Memory footprint", base_model.get_memory_footprint() / 1e9, "GB")
254 | print("Flops", model_flops / 1e9, "GFLOPs")
255 | 
256 | 
257 | # In[ ]:
258 | 
259 | 
260 | trainer = Trainer(
261 |     model=base_model,
262 |     model_flops=model_flops,
263 |     total_steps=max_steps,
264 |     args=training_args,
265 |     train_dataset=train_dataset,
266 |     eval_dataset=test_dataset,
267 | )
268 | 
269 | 
270 | # ### Train a few steps
271 | 
272 | # In[ ]:
273 | 
274 | 
275 | training_output = trainer.train()
276 | 
277 | 
278 | # ### Save model locally
279 | 
280 | # In[ ]:
281 | 
282 | 
283 | save_dir = f'{output_dir}/final'
284 | 
285 | trainer.save_model(save_dir)
286 | print("Saved model to:", save_dir)
287 | 
288 | 
289 | # In[ ]:
290 | 
291 | 
292 | finetuned_slightly_model = AutoModelForCausalLM.from_pretrained(save_dir, local_files_only=True)
293 | 
294 | 
295 | # In[ ]:
296 | 
297 | 
298 | finetuned_slightly_model.to(device) 
299 | 
300 | 
301 | # ### Run slightly trained model
302 | 
303 | # In[ ]:
304 | 
305 | 
306 | test_question = test_dataset[0]['question']
307 | print("Question input (test):", test_question)
308 | 
309 | print("Finetuned slightly model's answer: ")
310 | print(inference(test_question, finetuned_slightly_model, tokenizer))
311 | 
312 | 
313 | # In[ ]:
314 | 
315 | 
316 | test_answer = test_dataset[0]['answer']
317 | print("Target answer output (test):", test_answer)
318 | 
319 | 
320 | # ### Run same model trained for two epochs 
321 | 
322 | # In[ ]:
323 | 
324 | 
325 | finetuned_longer_model = AutoModelForCausalLM.from_pretrained("lamini/lamini_docs_finetuned")
326 | tokenizer = AutoTokenizer.from_pretrained("lamini/lamini_docs_finetuned")
327 | 
328 | finetuned_longer_model.to(device)
329 | print("Finetuned longer model's answer: ")
330 | print(inference(test_question, finetuned_longer_model, tokenizer))
331 | 
332 | 
333 | # ### Run much larger trained model and explore moderation
334 | 
335 | # In[ ]:
336 | 
337 | 
338 | bigger_finetuned_model = BasicModelRunner(model_name_to_id["bigger_model_name"])
339 | bigger_finetuned_output = bigger_finetuned_model(test_question)
340 | print("Bigger (2.8B) finetuned model (test): ", bigger_finetuned_output)
341 | 
342 | 
343 | # In[ ]:
344 | 
345 | 
346 | count = 0
347 | for i in range(len(train_dataset)):
348 |  if "keep the discussion relevant to Lamini" in train_dataset[i]["answer"]:
349 |   print(i, train_dataset[i]["question"], train_dataset[i]["answer"])
350 |   count += 1
351 | print(count)
352 | 
353 | 
354 | # ### Explore moderation using small model
355 | # First, try the non-finetuned base model:
356 | 
357 | # In[ ]:
358 | 
359 | 
360 | base_tokenizer = AutoTokenizer.from_pretrained("EleutherAI/pythia-70m")
361 | base_model = AutoModelForCausalLM.from_pretrained("EleutherAI/pythia-70m")
362 | print(inference("What do you think of Mars?", base_model, base_tokenizer))
363 | 
364 | 
365 | # ### Now try moderation with finetuned small model 
366 | 
367 | # In[ ]:
368 | 
369 | 
370 | print(inference("What do you think of Mars?", finetuned_longer_model, tokenizer))
371 | 
372 | 
373 | # ### Finetune a model in 3 lines of code using Lamini
374 | 
375 | # In[ ]:
376 | 
377 | 
378 | model = BasicModelRunner("EleutherAI/pythia-410m") 
379 | model.load_data_from_jsonlines("lamini_docs.jsonl", input_key="question", output_key="answer")
380 | model.train(is_public=True) 
381 | 
382 | 
383 | # In[ ]:
384 | 
385 | 
386 | out = model.evaluate()
387 | 
388 | 
389 | # In[ ]:
390 | 
391 | 
392 | lofd = []
393 | for e in out['eval_results']:
394 |     q  = f"{e['input']}"
395 |     at = f"{e['outputs'][0]['output']}"
396 |     ab = f"{e['outputs'][1]['output']}"
397 |     di = {'question': q, 'trained model': at, 'Base Model' : ab}
398 |     lofd.append(di)
399 | df = pd.DataFrame.from_dict(lofd)
400 | style_df = df.style.set_properties(**{'text-align': 'left'})
401 | style_df = style_df.set_properties(**{"vertical-align": "text-top"})
402 | style_df
403 | 
```

promptEngine/06_Evaluation_lab_student.py
```
1 | #!/usr/bin/env python
2 | # coding: utf-8
3 | 
4 | # # Evaluation
5 | 
6 | # ### Technically, there are very few steps to run it on GPUs, elsewhere (ie. on Lamini).
7 | # ```
8 | # finetuned_model = BasicModelRunner(
9 | #     "lamini/lamini_docs_finetuned"
10 | # )
11 | # finetuned_output = finetuned_model(
12 | #     test_dataset_list # batched!
13 | # ) 
14 | # ```
15 | # 
16 | # ### Let's look again under the hood! This is the open core code of Lamini's `llama` library :)
17 | 
18 | # In[ ]:
19 | 
20 | 
21 | import datasets
22 | import tempfile
23 | import logging
24 | import random
25 | import config
26 | import os
27 | import yaml
28 | import logging
29 | import difflib
30 | import pandas as pd
31 | 
32 | import transformers
33 | import datasets
34 | import torch
35 | 
36 | from tqdm import tqdm
37 | from utilities import *
38 | from transformers import AutoTokenizer, AutoModelForCausalLM
39 | 
40 | logger = logging.getLogger(__name__)
41 | global_config = None
42 | 
43 | 
44 | # In[ ]:
45 | 
46 | 
47 | dataset = datasets.load_dataset("lamini/lamini_docs")
48 | 
49 | test_dataset = dataset["test"]
50 | 
51 | 
52 | # In[ ]:
53 | 
54 | 
55 | print(test_dataset[0]["question"])
56 | print(test_dataset[0]["answer"])
57 | 
58 | 
59 | # In[ ]:
60 | 
61 | 
62 | model_name = "lamini/lamini_docs_finetuned"
63 | tokenizer = AutoTokenizer.from_pretrained(model_name)
64 | model = AutoModelForCausalLM.from_pretrained(model_name)
65 | 
66 | 
67 | # ### Setup a really basic evaluation function
68 | 
69 | # In[ ]:
70 | 
71 | 
72 | def is_exact_match(a, b):
73 |     return a.strip() == b.strip()
74 | 
75 | 
76 | # In[ ]:
77 | 
78 | 
79 | model.eval()
80 | 
81 | 
82 | # In[ ]:
83 | 
84 | 
85 | def inference(text, model, tokenizer, max_input_tokens=1000, max_output_tokens=100):
86 |   # Tokenize
87 |   tokenizer.pad_token = tokenizer.eos_token
88 |   input_ids = tokenizer.encode(
89 |       text,
90 |       return_tensors="pt",
91 |       truncation=True,
92 |       max_length=max_input_tokens
93 |   )
94 | 
95 |   # Generate
96 |   device = model.device
97 |   generated_tokens_with_prompt = model.generate(
98 |     input_ids=input_ids.to(device),
99 |     max_length=max_output_tokens
100 |   )
101 | 
102 |   # Decode
103 |   generated_text_with_prompt = tokenizer.batch_decode(generated_tokens_with_prompt, skip_special_tokens=True)
104 | 
105 |   # Strip the prompt
106 |   generated_text_answer = generated_text_with_prompt[0][len(text):]
107 | 
108 |   return generated_text_answer
109 | 
110 | 
111 | # ### Run model and compare to expected answer
112 | 
113 | # In[ ]:
114 | 
115 | 
116 | test_question = test_dataset[0]["question"]
117 | generated_answer = inference(test_question, model, tokenizer)
118 | print(test_question)
119 | print(generated_answer)
120 | 
121 | 
122 | # In[ ]:
123 | 
124 | 
125 | answer = test_dataset[0]["answer"]
126 | print(answer)
127 | 
128 | 
129 | # In[ ]:
130 | 
131 | 
132 | exact_match = is_exact_match(generated_answer, answer)
133 | print(exact_match)
134 | 
135 | 
136 | # ### Run over entire dataset
137 | 
138 | # In[ ]:
139 | 
140 | 
141 | n = 10
142 | metrics = {'exact_matches': []}
143 | predictions = []
144 | for i, item in tqdm(enumerate(test_dataset)):
145 |     print("i Evaluating: " + str(item))
146 |     question = item['question']
147 |     answer = item['answer']
148 | 
149 |     try:
150 |       predicted_answer = inference(question, model, tokenizer)
151 |     except:
152 |       continue
153 |     predictions.append([predicted_answer, answer])
154 | 
155 |     #fixed: exact_match = is_exact_match(generated_answer, answer)
156 |     exact_match = is_exact_match(predicted_answer, answer)
157 |     metrics['exact_matches'].append(exact_match)
158 | 
159 |     if i > n and n != -1:
160 |       break
161 | print('Number of exact matches: ', sum(metrics['exact_matches']))
162 | 
163 | 
164 | # In[ ]:
165 | 
166 | 
167 | df = pd.DataFrame(predictions, columns=["predicted_answer", "target_answer"])
168 | print(df)
169 | 
170 | 
171 | # ### Evaluate all the data
172 | 
173 | # In[ ]:
174 | 
175 | 
176 | evaluation_dataset_path = "lamini/lamini_docs_evaluation"
177 | evaluation_dataset = datasets.load_dataset(evaluation_dataset_path)
178 | 
179 | 
180 | # In[ ]:
181 | 
182 | 
183 | pd.DataFrame(evaluation_dataset)
184 | 
185 | 
186 | # ### Try the ARC benchmark
187 | # This can take several minutes
188 | 
189 | # In[ ]:
190 | 
191 | 
192 | get_ipython().system('python lm-evaluation-harness/main.py --model hf-causal --model_args pretrained=lamini/lamini_docs_finetuned --tasks arc_easy --device cpu')
193 | 
```

promptEngine/1_generate_master_plan.txt
```
1 | 
2 | You are a professional software developer who is very friendly and supportive. Your task is to help a developer understand and plan their app idea through a series of questions. Follow these instructions:
3 | 
4 | 1. Begin by explaining to the developer that you'll be asking them a series of questions to understand their app idea at a high level, and that once you have a clear picture, you'll generate a comprehensive masterplan.md file as a blueprint for their application.
5 | 
6 | 2. Ask questions one at a time in a conversational manner. Use the developer's previous answers to inform your next questions.
7 | 
8 | 3. Your primary goal (70% of your focus) is to fully understand what the user is trying to build at a conceptual level. The remaining 30% is dedicated to educating the user about available options and their associated pros and cons.
9 | 
10 | 4. When discussing technical aspects (e.g., choosing a database or framework), offer high-level alternatives with pros and cons for each approach. Always provide your best suggestion along with a brief explanation of why you recommend it, but keep the discussion conceptual rather than technical.
11 | 
12 | 5. Be proactive in your questioning. If the user's idea seems to require certain technologies or services (e.g., image storage, real-time updates), ask about these even if the user hasn't mentioned them.
13 | 
14 | 6. Try to understand the 'why' behind what the user is building. This will help you offer better advice and suggestions.
15 | 
16 | 7. Ask if the user has any diagrams or wireframes of the app they would like to share or describe to help you better understand their vision.
17 | 
18 | 8. Remember that developers may provide unorganized thoughts as they brainstorm. Help them crystallize the goal of their app and their requirements through your questions and summaries.
19 | 
20 | 9. Cover key aspects of app development in your questions, including but not limited to:
21 |    - Core features and functionality
22 |    - Target audience
23 |    - Platform (web, mobile, desktop)
24 |    - User interface and experience concepts
25 |    - Data storage and management needs
26 |    - User authentication and security requirements
27 |    - Potential third-party integrations
28 |    - Scalability considerations
29 |    - Potential technical challenges
30 | 
31 | 10. After you feel you have a comprehensive understanding of the app idea, inform the user that you'll be generating a masterplan.md file.
32 | 
33 | 11. Generate the masterplan.md file. This should be a high-level blueprint of the app, including:
34 |     - App overview and objectives
35 |     - Target audience
36 |     - Core features and functionality
37 |     - High-level technical stack recommendations (without specific code or implementation details)
38 |     - Conceptual data model
39 |     - User interface design principles
40 |     - Security considerations
41 |     - Development phases or milestones
42 |     - Potential challenges and solutions
43 |     - Future expansion possibilities
44 | 
45 | 12. Present the masterplan.md to the user and ask for their feedback. Be open to making adjustments based on their input.
46 | 
47 | **Important**: Do not generate any code during this conversation. The goal is to understand and plan the app at a high level, focusing on concepts and architecture rather than implementation details.
48 | 
49 | Remember to maintain a friendly, supportive tone throughout the conversation. Speak plainly and clearly, avoiding unnecessary technical jargon unless the developer seems comfortable with it. Your goal is to help the developer refine and solidify their app idea while providing valuable insights and recommendations at a conceptual level.
50 | 
51 | Begin the conversation by introducing yourself and asking the developer to describe their app idea.
```

promptEngine/2_stub_out_project.txt
```
1 | You are now entering Phase 2 of the app development process. Your task is to create a stubbed-out project structure based on the masterplan.md file generated in Phase 1 and any drawings or wireframes provided by the user. Follow these instructions:
2 | 
3 | Begin by reviewing the masterplan.md file and any provided drawings or wireframes. Familiarize yourself with the app's overall structure, main features, and architectural decisions.
4 | Create a high-level project structure with appropriate directories. This should reflect the app's architecture (e.g., frontend, backend, database) and main features.
5 | For each major component or feature identified in the masterplan, create stub files with minimal, essential information. Include:
6 | a. A brief comment at the top of each file describing its purpose
7 | b. Add a comment  with the full filepath to the stub file. This prevents named conflicts when you create files with the same name in different directories.
8 | c. Placeholder import statements for likely dependencies
9 | d. Empty function or class declarations for key functionalities
10 | e. TODO comments indicating where major logic will be implemented
11 | In the stub files, do not include detailed implementations or actual code logic. The goal is to create a skeleton that can be easily expanded in Phase 3.
12 | For the frontend (if applicable):
13 | a. Create basic component files with empty component declarations
14 | b. Stub out main pages or views
15 | c. Include placeholder routing information
16 | For the backend (if applicable):
17 | a. Create stub files for main API endpoints or services
18 | b. Include empty model definitions based on the data structure outlined in the masterplan
19 | c. Stub out database connection file (if needed)
20 | Create a basic README.md file with:
21 | a. Project title and brief description
22 | b. Placeholder sections for setup instructions, main features, and technology stack
23 | If the app requires any configuration files (e.g., package.json, .gitignore), create these with minimal required information.
24 | After creating the stubbed-out project structure, provide a summary of the created files and directories, explaining the purpose of each major component.
25 | Ask the user if they would like to see the content of any specific stubbed files, and be prepared to show and explain them.
26 | Remind the user that this is a minimal structure and that full implementation will occur in Phase 3.
27 | 
28 | Remember:
29 | 
30 | Keep all stubs minimal. Include just enough information to understand the file's purpose and its place in the overall structure.
31 | Do not implement any actual logic or detailed code.
32 | Use consistent naming conventions throughout the project structure.
33 | If you're unsure about a specific structure or file, refer back to the masterplan or ask the user for clarification.
34 | 
35 | Begin by acknowledging that you're starting Phase 2 and ask the user if they're ready to see the stubbed-out project structure based on the masterplan.
```

promptEngine/3_fully_code_out_implementation.txt
```
1 | You are now entering Phase 3 of the app development process. Your task is to transform the stubbed-out project structure from Phase 2 into fully functional, production-ready code. Follow these instructions:
2 | 
3 | 1. Review the masterplan.md file, any provided drawings or wireframes, and the stubbed-out project structure from Phase 2.
4 | 
5 | 2. Implement the full code for each stubbed file, following these guidelines:
6 |    a. Write production-ready code at the level of a senior developer.
7 |    b. Ensure the code is readable and well-structured.
8 |    c. Consider the implications of your code choices before implementation.
9 |    d. Add comments to explain complex logic or important design decisions.
10 | 
11 | 3. If any details are missing or ambiguous, ask the user for clarification before proceeding with the implementation.
12 | 
13 | 4. Focus on implementing core functionality first. Include light error handling and input validation where appropriate.
14 | 
15 | 5. When dealing with third-party integrations or APIs mentioned in the masterplan, use your best judgment to implement them effectively.
16 | 
17 | 6. For database operations and data persistence, choose appropriate methods based on the project requirements and your best judgment.
18 | 
19 | 7. Do not implement extensive testing at this stage unless specifically requested by the user.
20 | 
21 | 8. Do not focus on advanced scalability or performance optimizations unless they are critical for core functionality.
22 | 
23 | 9. Security measures are out of scope for this phase unless explicitly mentioned in the masterplan as core functionality.
24 | 
25 | 10. After implementing each major component or feature:
26 |     a. Provide a brief summary of what was implemented.
27 |     b. Explain any important design decisions or assumptions made.
28 |     c. Highlight any areas where you had to make significant choices or interpretations.
29 | 
30 | 11. Be prepared to show and explain any part of the implemented code if the user requests it.
31 | 
32 | 12. After completing the implementation, provide a high-level summary of the work done, including:
33 |     a. Overview of implemented features
34 |     b. Any notable challenges encountered and how they were addressed
35 |     c. Suggestions for next steps or areas that might need further refinement
36 | 
37 | 13. Ask the user for feedback on the implemented code and be ready to make adjustments based on their input.
38 | 
39 | Remember:
40 | - Strive for clean, efficient, and maintainable code.
41 | - Ensure consistency in coding style and naming conventions throughout the project.
42 | - While aiming for production-ready code, recognize that further refinement may be needed based on user feedback.
43 | - If you encounter a situation not covered by these instructions, use your best judgment as a senior developer and explain your reasoning to the user.
44 | 
45 | Begin by acknowledging that you're starting Phase 3 and ask the user if they're ready to proceed with the full code implementation based on the stubbed-out structure from Phase 2.
```

promptEngine/ExampleSelector.py
```
1 | from langchain_chroma import Chroma
2 | from langchain_core.example_selectors import SemanticSimilarityExampleSelector
3 | from langchain_openai import OpenAIEmbeddings
4 | 
5 | example_selector = SemanticSimilarityExampleSelector.from_examples(
6 |     # This is the list of examples available to select from.
7 |     examples,
8 |     # This is the embedding class used to produce embeddings which are used to measure semantic similarity.
9 |     OpenAIEmbeddings(),
10 |     # This is the VectorStore class that is used to store the embeddings and do a similarity search over.
11 |     Chroma,
12 |     # This is the number of examples to produce.
13 |     k=1,
14 | )
15 | 
16 | # Select the most similar example to the input.
17 | question = "Who was the father of Mary Ball Washington?"
18 | selected_examples = example_selector.select_examples({"question": question})
19 | print(f"Examples most similar to the input: {question}")
20 | for example in selected_examples:
21 |     print("\n")
22 |     for k, v in example.items():
23 |         print(f"{k}: {v}")
```

promptEngine/few-shot.py
```
1 | from langchain_core.prompts import PromptTemplate
2 | 
3 | example_prompt = PromptTemplate.from_template("Question: {question}\n{answer}")
4 | 
5 | examples = [
6 |     {
7 |         "question": "Who lived longer, Muhammad Ali or Alan Turing?",
8 |         "answer": """
9 | Are follow up questions needed here: Yes.
10 | Follow up: How old was Muhammad Ali when he died?
11 | Intermediate answer: Muhammad Ali was 74 years old when he died.
12 | Follow up: How old was Alan Turing when he died?
13 | Intermediate answer: Alan Turing was 41 years old when he died.
14 | So the final answer is: Muhammad Ali
15 | """,
16 |     },
17 |     {
18 |         "question": "When was the founder of craigslist born?",
19 |         "answer": """
20 | Are follow up questions needed here: Yes.
21 | Follow up: Who was the founder of craigslist?
22 | Intermediate answer: Craigslist was founded by Craig Newmark.
23 | Follow up: When was Craig Newmark born?
24 | Intermediate answer: Craig Newmark was born on December 6, 1952.
25 | So the final answer is: December 6, 1952
26 | """,
27 |     },
28 |     {
29 |         "question": "Who was the maternal grandfather of George Washington?",
30 |         "answer": """
31 | Are follow up questions needed here: Yes.
32 | Follow up: Who was the mother of George Washington?
33 | Intermediate answer: The mother of George Washington was Mary Ball Washington.
34 | Follow up: Who was the father of Mary Ball Washington?
35 | Intermediate answer: The father of Mary Ball Washington was Joseph Ball.
36 | So the final answer is: Joseph Ball
37 | """,
38 |     },
39 |     {
40 |         "question": "Are both the directors of Jaws and Casino Royale from the same country?",
41 |         "answer": """
42 | Are follow up questions needed here: Yes.
43 | Follow up: Who is the director of Jaws?
44 | Intermediate Answer: The director of Jaws is Steven Spielberg.
45 | Follow up: Where is Steven Spielberg from?
46 | Intermediate Answer: The United States.
47 | Follow up: Who is the director of Casino Royale?
48 | Intermediate Answer: The director of Casino Royale is Martin Campbell.
49 | Follow up: Where is Martin Campbell from?
50 | Intermediate Answer: New Zealand.
51 | So the final answer is: No
52 | """,
53 |     },
54 | ]
55 | 
56 | 
57 | 
```

promptEngine/fewshotPromptTemplate.py
```
1 | from langchain_core.prompts import FewShotPromptTemplate
2 | 
3 | prompt = FewShotPromptTemplate(
4 |     examples=examples,
5 |     example_prompt=example_prompt,
6 |     suffix="Question: {input}",
7 |     input_variables=["input"],
8 | )
9 | 
10 | print(
11 |     prompt.invoke({"input": "Who was the father of Mary Ball Washington?"}).to_string()
12 | )
```

promptEngine/l2-guidelines.py
```
1 | #!/usr/bin/env python
2 | # coding: utf-8
3 | 
4 | # # Guidelines for Prompting
5 | # In this lesson, you'll practice two prompting principles and their related tactics in order to write effective prompts for large language models.
6 | # 
7 | # ## Setup
8 | # #### Load the API key and relevant Python libaries.
9 | 
10 | # In this course, we've provided some code that loads the OpenAI API key for you.
11 | 
12 | # In[ ]:
13 | 
14 | 
15 | import openai
16 | import os
17 | 
18 | from dotenv import load_dotenv, find_dotenv
19 | _ = load_dotenv(find_dotenv())
20 | 
21 | openai.api_key  = os.getenv('OPENAI_API_KEY')
22 | 
23 | 
24 | # #### helper function
25 | # Throughout this course, we will use OpenAI's `gpt-3.5-turbo` model and the [chat completions endpoint](https://platform.openai.com/docs/guides/chat). 
26 | # 
27 | # This helper function will make it easier to use prompts and look at the generated outputs.  
28 | # **Note**: In June 2023, OpenAI updated gpt-3.5-turbo. The results you see in the notebook may be slightly different than those in the video. Some of the prompts have also been slightly modified to product the desired results.
29 | 
30 | # In[ ]:
31 | 
32 | 
33 | def get_completion(prompt, model="gpt-3.5-turbo"):
34 |     messages = [{"role": "user", "content": prompt}]
35 |     response = openai.ChatCompletion.create(
36 |         model=model,
37 |         messages=messages,
38 |         temperature=0, # this is the degree of randomness of the model's output
39 |     )
40 |     return response.choices[0].message["content"]
41 | 
42 | 
43 | # **Note:** This and all other lab notebooks of this course use OpenAI library version `0.27.0`. 
44 | # 
45 | # In order to use the OpenAI library version `1.0.0`, here is the code that you would use instead for the `get_completion` function:
46 | # 
47 | # ```python
48 | # client = openai.OpenAI()
49 | # 
50 | # def get_completion(prompt, model="gpt-3.5-turbo"):
51 | #     messages = [{"role": "user", "content": prompt}]
52 | #     response = client.chat.completions.create(
53 | #         model=model,
54 | #         messages=messages,
55 | #         temperature=0
56 | #     )
57 | #     return response.choices[0].message.content
58 | # ```
59 | 
60 | # ## Prompting Principles
61 | # - **Principle 1: Write clear and specific instructions**
62 | # - **Principle 2: Give the model time to “think”**
63 | # 
64 | # ### Tactics
65 | # 
66 | # #### Tactic 1: Use delimiters to clearly indicate distinct parts of the input
67 | # - Delimiters can be anything like: ```, """, < >, `<tag> </tag>`, `:`
68 | 
69 | # In[ ]:
70 | 
71 | 
72 | text = f"""
73 | You should express what you want a model to do by \ 
74 | providing instructions that are as clear and \ 
75 | specific as you can possibly make them. \ 
76 | This will guide the model towards the desired output, \ 
77 | and reduce the chances of receiving irrelevant \ 
78 | or incorrect responses. Don't confuse writing a \ 
79 | clear prompt with writing a short prompt. \ 
80 | In many cases, longer prompts provide more clarity \ 
81 | and context for the model, which can lead to \ 
82 | more detailed and relevant outputs.
83 | """
84 | prompt = f"""
85 | Summarize the text delimited by triple backticks \ 
86 | into a single sentence.
87 | ```{text}```
88 | """
89 | response = get_completion(prompt)
90 | print(response)
91 | 
92 | 
93 | # #### Tactic 2: Ask for a structured output
94 | # - JSON, HTML
95 | 
96 | # In[ ]:
97 | 
98 | 
99 | prompt = f"""
100 | Generate a list of three made-up book titles along \ 
101 | with their authors and genres. 
102 | Provide them in JSON format with the following keys: 
103 | book_id, title, author, genre.
104 | """
105 | response = get_completion(prompt)
106 | print(response)
107 | 
108 | 
109 | # #### Tactic 3: Ask the model to check whether conditions are satisfied
110 | 
111 | # In[ ]:
112 | 
113 | 
114 | text_1 = f"""
115 | Making a cup of tea is easy! First, you need to get some \ 
116 | water boiling. While that's happening, \ 
117 | grab a cup and put a tea bag in it. Once the water is \ 
118 | hot enough, just pour it over the tea bag. \ 
119 | Let it sit for a bit so the tea can steep. After a \ 
120 | few minutes, take out the tea bag. If you \ 
121 | like, you can add some sugar or milk to taste. \ 
122 | And that's it! You've got yourself a delicious \ 
123 | cup of tea to enjoy.
124 | """
125 | prompt = f"""
126 | You will be provided with text delimited by triple quotes. 
127 | If it contains a sequence of instructions, \ 
128 | re-write those instructions in the following format:
129 | 
130 | Step 1 - ...
131 | Step 2 - …
132 | …
133 | Step N - …
134 | 
135 | If the text does not contain a sequence of instructions, \ 
136 | then simply write \"No steps provided.\"
137 | 
138 | \"\"\"{text_1}\"\"\"
139 | """
140 | response = get_completion(prompt)
141 | print("Completion for Text 1:")
142 | print(response)
143 | 
144 | 
145 | # In[ ]:
146 | 
147 | 
148 | text_2 = f"""
149 | The sun is shining brightly today, and the birds are \
150 | singing. It's a beautiful day to go for a \ 
151 | walk in the park. The flowers are blooming, and the \ 
152 | trees are swaying gently in the breeze. People \ 
153 | are out and about, enjoying the lovely weather. \ 
154 | Some are having picnics, while others are playing \ 
155 | games or simply relaxing on the grass. It's a \ 
156 | perfect day to spend time outdoors and appreciate the \ 
157 | beauty of nature.
158 | """
159 | prompt = f"""
160 | You will be provided with text delimited by triple quotes. 
161 | If it contains a sequence of instructions, \ 
162 | re-write those instructions in the following format:
163 | 
164 | Step 1 - ...
165 | Step 2 - …
166 | …
167 | Step N - …
168 | 
169 | If the text does not contain a sequence of instructions, \ 
170 | then simply write \"No steps provided.\"
171 | 
172 | \"\"\"{text_2}\"\"\"
173 | """
174 | response = get_completion(prompt)
175 | print("Completion for Text 2:")
176 | print(response)
177 | 
178 | 
179 | # #### Tactic 4: "Few-shot" prompting
180 | 
181 | # In[ ]:
182 | 
183 | 
184 | prompt = f"""
185 | Your task is to answer in a consistent style.
186 | 
187 | <child>: Teach me about patience.
188 | 
189 | <grandparent>: The river that carves the deepest \ 
190 | valley flows from a modest spring; the \ 
191 | grandest symphony originates from a single note; \ 
192 | the most intricate tapestry begins with a solitary thread.
193 | 
194 | <child>: Teach me about resilience.
195 | """
196 | response = get_completion(prompt)
197 | print(response)
198 | 
199 | 
200 | # ### Principle 2: Give the model time to “think” 
201 | # 
202 | # #### Tactic 1: Specify the steps required to complete a task
203 | 
204 | # In[ ]:
205 | 
206 | 
207 | text = f"""
208 | In a charming village, siblings Jack and Jill set out on \ 
209 | a quest to fetch water from a hilltop \ 
210 | well. As they climbed, singing joyfully, misfortune \ 
211 | struck—Jack tripped on a stone and tumbled \ 
212 | down the hill, with Jill following suit. \ 
213 | Though slightly battered, the pair returned home to \ 
214 | comforting embraces. Despite the mishap, \ 
215 | their adventurous spirits remained undimmed, and they \ 
216 | continued exploring with delight.
217 | """
218 | # example 1
219 | prompt_1 = f"""
220 | Perform the following actions: 
221 | 1 - Summarize the following text delimited by triple \
222 | backticks with 1 sentence.
223 | 2 - Translate the summary into French.
224 | 3 - List each name in the French summary.
225 | 4 - Output a json object that contains the following \
226 | keys: french_summary, num_names.
227 | 
228 | Separate your answers with line breaks.
229 | 
230 | Text:
231 | ```{text}```
232 | """
233 | response = get_completion(prompt_1)
234 | print("Completion for prompt 1:")
235 | print(response)
236 | 
237 | 
238 | # #### Ask for output in a specified format
239 | 
240 | # In[ ]:
241 | 
242 | 
243 | prompt_2 = f"""
244 | Your task is to perform the following actions: 
245 | 1 - Summarize the following text delimited by 
246 |   <> with 1 sentence.
247 | 2 - Translate the summary into French.
248 | 3 - List each name in the French summary.
249 | 4 - Output a json object that contains the 
250 |   following keys: french_summary, num_names.
251 | 
252 | Use the following format:
253 | Text: <text to summarize>
254 | Summary: <summary>
255 | Translation: <summary translation>
256 | Names: <list of names in summary>
257 | Output JSON: <json with summary and num_names>
258 | 
259 | Text: <{text}>
260 | """
261 | response = get_completion(prompt_2)
262 | print("\nCompletion for prompt 2:")
263 | print(response)
264 | 
265 | 
266 | # #### Tactic 2: Instruct the model to work out its own solution before rushing to a conclusion
267 | 
268 | # In[ ]:
269 | 
270 | 
271 | prompt = f"""
272 | Determine if the student's solution is correct or not.
273 | 
274 | Question:
275 | I'm building a solar power installation and I need \
276 |  help working out the financials. 
277 | - Land costs $100 / square foot
278 | - I can buy solar panels for $250 / square foot
279 | - I negotiated a contract for maintenance that will cost \ 
280 | me a flat $100k per year, and an additional $10 / square \
281 | foot
282 | What is the total cost for the first year of operations 
283 | as a function of the number of square feet.
284 | 
285 | Student's Solution:
286 | Let x be the size of the installation in square feet.
287 | Costs:
288 | 1. Land cost: 100x
289 | 2. Solar panel cost: 250x
290 | 3. Maintenance cost: 100,000 + 100x
291 | Total cost: 100x + 250x + 100,000 + 100x = 450x + 100,000
292 | """
293 | response = get_completion(prompt)
294 | print(response)
295 | 
296 | 
297 | # #### Note that the student's solution is actually not correct.
298 | # #### We can fix this by instructing the model to work out its own solution first.
299 | 
300 | # In[ ]:
301 | 
302 | 
303 | prompt = f"""
304 | Your task is to determine if the student's solution \
305 | is correct or not.
306 | To solve the problem do the following:
307 | - First, work out your own solution to the problem including the final total. 
308 | - Then compare your solution to the student's solution \ 
309 | and evaluate if the student's solution is correct or not. 
310 | Don't decide if the student's solution is correct until 
311 | you have done the problem yourself.
312 | 
313 | Use the following format:
314 | Question:
315 | ```
316 | question here
317 | ```
318 | Student's solution:
319 | ```
320 | student's solution here
321 | ```
322 | Actual solution:
323 | ```
324 | steps to work out the solution and your solution here
325 | ```
326 | Is the student's solution the same as actual solution \
327 | just calculated:
328 | ```
329 | yes or no
330 | ```
331 | Student grade:
332 | ```
333 | correct or incorrect
334 | ```
335 | 
336 | Question:
337 | ```
338 | I'm building a solar power installation and I need help \
339 | working out the financials. 
340 | - Land costs $100 / square foot
341 | - I can buy solar panels for $250 / square foot
342 | - I negotiated a contract for maintenance that will cost \
343 | me a flat $100k per year, and an additional $10 / square \
344 | foot
345 | What is the total cost for the first year of operations \
346 | as a function of the number of square feet.
347 | ``` 
348 | Student's solution:
349 | ```
350 | Let x be the size of the installation in square feet.
351 | Costs:
352 | 1. Land cost: 100x
353 | 2. Solar panel cost: 250x
354 | 3. Maintenance cost: 100,000 + 100x
355 | Total cost: 100x + 250x + 100,000 + 100x = 450x + 100,000
356 | ```
357 | Actual solution:
358 | """
359 | response = get_completion(prompt)
360 | print(response)
361 | 
362 | 
363 | # ## Model Limitations: Hallucinations
364 | # - Boie is a real company, the product name is not real.
365 | 
366 | # In[ ]:
367 | 
368 | 
369 | prompt = f"""
370 | Tell me about AeroGlide UltraSlim Smart Toothbrush by Boie
371 | """
372 | response = get_completion(prompt)
373 | print(response)
374 | 
375 | 
376 | # ## Try experimenting on your own!
377 | 
378 | # In[ ]:
379 | 
380 | 
381 | 
382 | 
383 | 
384 | # #### Notes on using the OpenAI API outside of this classroom
385 | # 
386 | # To install the OpenAI Python library:
387 | # ```
388 | # !pip install openai
389 | # ```
390 | # 
391 | # The library needs to be configured with your account's secret key, which is available on the [website](https://platform.openai.com/account/api-keys). 
392 | # 
393 | # You can either set it as the `OPENAI_API_KEY` environment variable before using the library:
394 | #  ```
395 | #  !export OPENAI_API_KEY='sk-...'
396 | #  ```
397 | # 
398 | # Or, set `openai.api_key` to its value:
399 | # 
400 | # ```
401 | # import openai
402 | # openai.api_key = "sk-..."
403 | # ```
404 | 
405 | # #### A note about the backslash
406 | # - In the course, we are using a backslash `\` to make the text fit on the screen without inserting newline '\n' characters.
407 | # - GPT-3 isn't really affected whether you insert newline characters or not.  But when working with LLMs in general, you may consider whether newline characters in your prompt may affect the model's performance.
408 | 
409 | # In[ ]:
410 | 
411 | 
412 | 
413 | 
```

promptEngine/l3-iterative-prompt-development.py
```
1 | #!/usr/bin/env python
2 | # coding: utf-8
3 | 
4 | # # Iterative Prompt Development
5 | # In this lesson, you'll iteratively analyze and refine your prompts to generate marketing copy from a product fact sheet.
6 | # 
7 | # ## Setup
8 | 
9 | # In[ ]:
10 | 
11 | 
12 | import openai
13 | import os
14 | 
15 | from dotenv import load_dotenv, find_dotenv
16 | _ = load_dotenv(find_dotenv()) # read local .env file
17 | 
18 | openai.api_key  = os.getenv('OPENAI_API_KEY')
19 | 
20 | 
21 | # In[ ]:
22 | 
23 | 
24 | def get_completion(prompt, model="gpt-3.5-turbo"):
25 |     messages = [{"role": "user", "content": prompt}]
26 |     response = openai.ChatCompletion.create(
27 |         model=model,
28 |         messages=messages,
29 |         temperature=0, # this is the degree of randomness of the model's output
30 |     )
31 |     return response.choices[0].message["content"]
32 | 
33 | 
34 | # **Note**: In June 2023, OpenAI updated gpt-3.5-turbo. The results you see in the notebook may be slightly different than those in the video. Some of the prompts have also been slightly modified to product the desired results.
35 | 
36 | # ## Generate a marketing product description from a product fact sheet
37 | 
38 | # In[ ]:
39 | 
40 | 
41 | fact_sheet_chair = """
42 | OVERVIEW
43 | - Part of a beautiful family of mid-century inspired office furniture, 
44 | including filing cabinets, desks, bookcases, meeting tables, and more.
45 | - Several options of shell color and base finishes.
46 | - Available with plastic back and front upholstery (SWC-100) 
47 | or full upholstery (SWC-110) in 10 fabric and 6 leather options.
48 | - Base finish options are: stainless steel, matte black, 
49 | gloss white, or chrome.
50 | - Chair is available with or without armrests.
51 | - Suitable for home or business settings.
52 | - Qualified for contract use.
53 | 
54 | CONSTRUCTION
55 | - 5-wheel plastic coated aluminum base.
56 | - Pneumatic chair adjust for easy raise/lower action.
57 | 
58 | DIMENSIONS
59 | - WIDTH 53 CM | 20.87”
60 | - DEPTH 51 CM | 20.08”
61 | - HEIGHT 80 CM | 31.50”
62 | - SEAT HEIGHT 44 CM | 17.32”
63 | - SEAT DEPTH 41 CM | 16.14”
64 | 
65 | OPTIONS
66 | - Soft or hard-floor caster options.
67 | - Two choices of seat foam densities: 
68 |  medium (1.8 lb/ft3) or high (2.8 lb/ft3)
69 | - Armless or 8 position PU armrests 
70 | 
71 | MATERIALS
72 | SHELL BASE GLIDER
73 | - Cast Aluminum with modified nylon PA6/PA66 coating.
74 | - Shell thickness: 10 mm.
75 | SEAT
76 | - HD36 foam
77 | 
78 | COUNTRY OF ORIGIN
79 | - Italy
80 | """
81 | 
82 | 
83 | # In[ ]:
84 | 
85 | 
86 | prompt = f"""
87 | Your task is to help a marketing team create a 
88 | description for a retail website of a product based 
89 | on a technical fact sheet.
90 | 
91 | Write a product description based on the information 
92 | provided in the technical specifications delimited by 
93 | triple backticks.
94 | 
95 | Technical specifications: ```{fact_sheet_chair}```
96 | """
97 | response = get_completion(prompt)
98 | print(response)
99 | 
100 | 
101 | # ## Issue 1: The text is too long 
102 | # - Limit the number of words/sentences/characters.
103 | 
104 | # In[ ]:
105 | 
106 | 
107 | prompt = f"""
108 | Your task is to help a marketing team create a 
109 | description for a retail website of a product based 
110 | on a technical fact sheet.
111 | 
112 | Write a product description based on the information 
113 | provided in the technical specifications delimited by 
114 | triple backticks.
115 | 
116 | Use at most 50 words.
117 | 
118 | Technical specifications: ```{fact_sheet_chair}```
119 | """
120 | response = get_completion(prompt)
121 | print(response)
122 | 
123 | 
124 | # In[ ]:
125 | 
126 | 
127 | len(response.split())
128 | 
129 | 
130 | # ## Issue 2. Text focuses on the wrong details
131 | # - Ask it to focus on the aspects that are relevant to the intended audience.
132 | 
133 | # In[ ]:
134 | 
135 | 
136 | prompt = f"""
137 | Your task is to help a marketing team create a 
138 | description for a retail website of a product based 
139 | on a technical fact sheet.
140 | 
141 | Write a product description based on the information 
142 | provided in the technical specifications delimited by 
143 | triple backticks.
144 | 
145 | The description is intended for furniture retailers, 
146 | so should be technical in nature and focus on the 
147 | materials the product is constructed from.
148 | 
149 | Use at most 50 words.
150 | 
151 | Technical specifications: ```{fact_sheet_chair}```
152 | """
153 | response = get_completion(prompt)
154 | print(response)
155 | 
156 | 
157 | # In[ ]:
158 | 
159 | 
160 | prompt = f"""
161 | Your task is to help a marketing team create a 
162 | description for a retail website of a product based 
163 | on a technical fact sheet.
164 | 
165 | Write a product description based on the information 
166 | provided in the technical specifications delimited by 
167 | triple backticks.
168 | 
169 | The description is intended for furniture retailers, 
170 | so should be technical in nature and focus on the 
171 | materials the product is constructed from.
172 | 
173 | At the end of the description, include every 7-character 
174 | Product ID in the technical specification.
175 | 
176 | Use at most 50 words.
177 | 
178 | Technical specifications: ```{fact_sheet_chair}```
179 | """
180 | response = get_completion(prompt)
181 | print(response)
182 | 
183 | 
184 | # ## Issue 3. Description needs a table of dimensions
185 | # - Ask it to extract information and organize it in a table.
186 | 
187 | # In[ ]:
188 | 
189 | 
190 | prompt = f"""
191 | Your task is to help a marketing team create a 
192 | description for a retail website of a product based 
193 | on a technical fact sheet.
194 | 
195 | Write a product description based on the information 
196 | provided in the technical specifications delimited by 
197 | triple backticks.
198 | 
199 | The description is intended for furniture retailers, 
200 | so should be technical in nature and focus on the 
201 | materials the product is constructed from.
202 | 
203 | At the end of the description, include every 7-character 
204 | Product ID in the technical specification.
205 | 
206 | After the description, include a table that gives the 
207 | product's dimensions. The table should have two columns.
208 | In the first column include the name of the dimension. 
209 | In the second column include the measurements in inches only.
210 | 
211 | Give the table the title 'Product Dimensions'.
212 | 
213 | Format everything as HTML that can be used in a website. 
214 | Place the description in a <div> element.
215 | 
216 | Technical specifications: ```{fact_sheet_chair}```
217 | """
218 | 
219 | response = get_completion(prompt)
220 | print(response)
221 | 
222 | 
223 | # ## Load Python libraries to view HTML
224 | 
225 | # In[ ]:
226 | 
227 | 
228 | from IPython.display import display, HTML
229 | 
230 | 
231 | # In[ ]:
232 | 
233 | 
234 | display(HTML(response))
235 | 
236 | 
237 | # ## Try experimenting on your own!
238 | 
239 | # In[ ]:
240 | 
241 | 
242 | 
243 | 
```

promptEngine/l4-summarizing.py
```
1 | #!/usr/bin/env python
2 | # coding: utf-8
3 | 
4 | # # Summarizing
5 | # In this lesson, you will summarize text with a focus on specific topics.
6 | # 
7 | # ## Setup
8 | 
9 | # In[ ]:
10 | 
11 | 
12 | import openai
13 | import os
14 | 
15 | from dotenv import load_dotenv, find_dotenv
16 | _ = load_dotenv(find_dotenv()) # read local .env file
17 | 
18 | openai.api_key  = os.getenv('OPENAI_API_KEY')
19 | 
20 | 
21 | # In[ ]:
22 | 
23 | 
24 | def get_completion(prompt, model="gpt-3.5-turbo"): # Andrew mentioned that the prompt/ completion paradigm is preferable for this class
25 |     messages = [{"role": "user", "content": prompt}]
26 |     response = openai.ChatCompletion.create(
27 |         model=model,
28 |         messages=messages,
29 |         temperature=0, # this is the degree of randomness of the model's output
30 |     )
31 |     return response.choices[0].message["content"]
32 | 
33 | 
34 | # ## Text to summarize
35 | 
36 | # In[ ]:
37 | 
38 | 
39 | prod_review = """
40 | Got this panda plush toy for my daughter's birthday, \
41 | who loves it and takes it everywhere. It's soft and \ 
42 | super cute, and its face has a friendly look. It's \ 
43 | a bit small for what I paid though. I think there \ 
44 | might be other options that are bigger for the \ 
45 | same price. It arrived a day earlier than expected, \ 
46 | so I got to play with it myself before I gave it \ 
47 | to her.
48 | """
49 | 
50 | 
51 | # ## Summarize with a word/sentence/character limit
52 | 
53 | # In[ ]:
54 | 
55 | 
56 | prompt = f"""
57 | Your task is to generate a short summary of a product \
58 | review from an ecommerce site. 
59 | 
60 | Summarize the review below, delimited by triple 
61 | backticks, in at most 30 words. 
62 | 
63 | Review: ```{prod_review}```
64 | """
65 | 
66 | response = get_completion(prompt)
67 | print(response)
68 | 
69 | 
70 | # ## Summarize with a focus on shipping and delivery
71 | 
72 | # In[ ]:
73 | 
74 | 
75 | prompt = f"""
76 | Your task is to generate a short summary of a product \
77 | review from an ecommerce site to give feedback to the \
78 | Shipping deparmtment. 
79 | 
80 | Summarize the review below, delimited by triple 
81 | backticks, in at most 30 words, and focusing on any aspects \
82 | that mention shipping and delivery of the product. 
83 | 
84 | Review: ```{prod_review}```
85 | """
86 | 
87 | response = get_completion(prompt)
88 | print(response)
89 | 
90 | 
91 | # ## Summarize with a focus on price and value
92 | 
93 | # In[ ]:
94 | 
95 | 
96 | prompt = f"""
97 | Your task is to generate a short summary of a product \
98 | review from an ecommerce site to give feedback to the \
99 | pricing deparmtment, responsible for determining the \
100 | price of the product.  
101 | 
102 | Summarize the review below, delimited by triple 
103 | backticks, in at most 30 words, and focusing on any aspects \
104 | that are relevant to the price and perceived value. 
105 | 
106 | Review: ```{prod_review}```
107 | """
108 | 
109 | response = get_completion(prompt)
110 | print(response)
111 | 
112 | 
113 | # #### Comment
114 | # - Summaries include topics that are not related to the topic of focus.
115 | 
116 | # ## Try "extract" instead of "summarize"
117 | 
118 | # In[ ]:
119 | 
120 | 
121 | prompt = f"""
122 | Your task is to extract relevant information from \ 
123 | a product review from an ecommerce site to give \
124 | feedback to the Shipping department. 
125 | 
126 | From the review below, delimited by triple quotes \
127 | extract the information relevant to shipping and \ 
128 | delivery. Limit to 30 words. 
129 | 
130 | Review: ```{prod_review}```
131 | """
132 | 
133 | response = get_completion(prompt)
134 | print(response)
135 | 
136 | 
137 | # ## Summarize multiple product reviews
138 | 
139 | # In[ ]:
140 | 
141 | 
142 | review_1 = prod_review 
143 | 
144 | # review for a standing lamp
145 | review_2 = """
146 | Needed a nice lamp for my bedroom, and this one \
147 | had additional storage and not too high of a price \
148 | point. Got it fast - arrived in 2 days. The string \
149 | to the lamp broke during the transit and the company \
150 | happily sent over a new one. Came within a few days \
151 | as well. It was easy to put together. Then I had a \
152 | missing part, so I contacted their support and they \
153 | very quickly got me the missing piece! Seems to me \
154 | to be a great company that cares about their customers \
155 | and products. 
156 | """
157 | 
158 | # review for an electric toothbrush
159 | review_3 = """
160 | My dental hygienist recommended an electric toothbrush, \
161 | which is why I got this. The battery life seems to be \
162 | pretty impressive so far. After initial charging and \
163 | leaving the charger plugged in for the first week to \
164 | condition the battery, I've unplugged the charger and \
165 | been using it for twice daily brushing for the last \
166 | 3 weeks all on the same charge. But the toothbrush head \
167 | is too small. I’ve seen baby toothbrushes bigger than \
168 | this one. I wish the head was bigger with different \
169 | length bristles to get between teeth better because \
170 | this one doesn’t.  Overall if you can get this one \
171 | around the $50 mark, it's a good deal. The manufactuer's \
172 | replacements heads are pretty expensive, but you can \
173 | get generic ones that're more reasonably priced. This \
174 | toothbrush makes me feel like I've been to the dentist \
175 | every day. My teeth feel sparkly clean! 
176 | """
177 | 
178 | # review for a blender
179 | review_4 = """
180 | So, they still had the 17 piece system on seasonal \
181 | sale for around $49 in the month of November, about \
182 | half off, but for some reason (call it price gouging) \
183 | around the second week of December the prices all went \
184 | up to about anywhere from between $70-$89 for the same \
185 | system. And the 11 piece system went up around $10 or \
186 | so in price also from the earlier sale price of $29. \
187 | So it looks okay, but if you look at the base, the part \
188 | where the blade locks into place doesn’t look as good \
189 | as in previous editions from a few years ago, but I \
190 | plan to be very gentle with it (example, I crush \
191 | very hard items like beans, ice, rice, etc. in the \ 
192 | blender first then pulverize them in the serving size \
193 | I want in the blender then switch to the whipping \
194 | blade for a finer flour, and use the cross cutting blade \
195 | first when making smoothies, then use the flat blade \
196 | if I need them finer/less pulpy). Special tip when making \
197 | smoothies, finely cut and freeze the fruits and \
198 | vegetables (if using spinach-lightly stew soften the \ 
199 | spinach then freeze until ready for use-and if making \
200 | sorbet, use a small to medium sized food processor) \ 
201 | that you plan to use that way you can avoid adding so \
202 | much ice if at all-when making your smoothie. \
203 | After about a year, the motor was making a funny noise. \
204 | I called customer service but the warranty expired \
205 | already, so I had to buy another one. FYI: The overall \
206 | quality has gone done in these types of products, so \
207 | they are kind of counting on brand recognition and \
208 | consumer loyalty to maintain sales. Got it in about \
209 | two days.
210 | """
211 | 
212 | reviews = [review_1, review_2, review_3, review_4]
213 | 
214 | 
215 | 
216 | # In[ ]:
217 | 
218 | 
219 | for i in range(len(reviews)):
220 |     prompt = f"""
221 |     Your task is to generate a short summary of a product \ 
222 |     review from an ecommerce site. 
223 | 
224 |     Summarize the review below, delimited by triple \
225 |     backticks in at most 20 words. 
226 | 
227 |     Review: ```{reviews[i]}```
228 |     """
229 | 
230 |     response = get_completion(prompt)
231 |     print(i, response, "\n")
232 | 
233 | 
234 | # ## Try experimenting on your own!
235 | 
236 | # In[ ]:
237 | 
238 | 
239 | 
240 | 
```

promptEngine/l5-inferring.py
```
1 | #!/usr/bin/env python
2 | # coding: utf-8
3 | 
4 | # # Inferring
5 | # In this lesson, you will infer sentiment and topics from product reviews and news articles.
6 | # 
7 | # ## Setup
8 | 
9 | # In[ ]:
10 | 
11 | 
12 | import openai
13 | import os
14 | 
15 | from dotenv import load_dotenv, find_dotenv
16 | _ = load_dotenv(find_dotenv()) # read local .env file
17 | 
18 | openai.api_key  = os.getenv('OPENAI_API_KEY')
19 | 
20 | 
21 | # In[ ]:
22 | 
23 | 
24 | def get_completion(prompt, model="gpt-3.5-turbo"):
25 |     messages = [{"role": "user", "content": prompt}]
26 |     response = openai.ChatCompletion.create(
27 |         model=model,
28 |         messages=messages,
29 |         temperature=0, # this is the degree of randomness of the model's output
30 |     )
31 |     return response.choices[0].message["content"]
32 | 
33 | 
34 | # **Note**: In June 2023, OpenAI updated gpt-3.5-turbo. The results you see in the notebook may be slightly different than those in the video. Some of the prompts have also been slightly modified to product the desired results.
35 | 
36 | # ## Product review text
37 | 
38 | # In[ ]:
39 | 
40 | 
41 | lamp_review = """
42 | Needed a nice lamp for my bedroom, and this one had \
43 | additional storage and not too high of a price point. \
44 | Got it fast.  The string to our lamp broke during the \
45 | transit and the company happily sent over a new one. \
46 | Came within a few days as well. It was easy to put \
47 | together.  I had a missing part, so I contacted their \
48 | support and they very quickly got me the missing piece! \
49 | Lumina seems to me to be a great company that cares \
50 | about their customers and products!!
51 | """
52 | 
53 | 
54 | # ## Sentiment (positive/negative)
55 | 
56 | # In[ ]:
57 | 
58 | 
59 | prompt = f"""
60 | What is the sentiment of the following product review, 
61 | which is delimited with triple backticks?
62 | 
63 | Review text: '''{lamp_review}'''
64 | """
65 | response = get_completion(prompt)
66 | print(response)
67 | 
68 | 
69 | # In[ ]:
70 | 
71 | 
72 | prompt = f"""
73 | What is the sentiment of the following product review, 
74 | which is delimited with triple backticks?
75 | 
76 | Give your answer as a single word, either "positive" \
77 | or "negative".
78 | 
79 | Review text: '''{lamp_review}'''
80 | """
81 | response = get_completion(prompt)
82 | print(response)
83 | 
84 | 
85 | # ## Identify types of emotions
86 | 
87 | # In[ ]:
88 | 
89 | 
90 | prompt = f"""
91 | Identify a list of emotions that the writer of the \
92 | following review is expressing. Include no more than \
93 | five items in the list. Format your answer as a list of \
94 | lower-case words separated by commas.
95 | 
96 | Review text: '''{lamp_review}'''
97 | """
98 | response = get_completion(prompt)
99 | print(response)
100 | 
101 | 
102 | # ## Identify anger
103 | 
104 | # In[ ]:
105 | 
106 | 
107 | prompt = f"""
108 | Is the writer of the following review expressing anger?\
109 | The review is delimited with triple backticks. \
110 | Give your answer as either yes or no.
111 | 
112 | Review text: '''{lamp_review}'''
113 | """
114 | response = get_completion(prompt)
115 | print(response)
116 | 
117 | 
118 | # ## Extract product and company name from customer reviews
119 | 
120 | # In[ ]:
121 | 
122 | 
123 | prompt = f"""
124 | Identify the following items from the review text: 
125 | - Item purchased by reviewer
126 | - Company that made the item
127 | 
128 | The review is delimited with triple backticks. \
129 | Format your response as a JSON object with \
130 | "Item" and "Brand" as the keys. 
131 | If the information isn't present, use "unknown" \
132 | as the value.
133 | Make your response as short as possible.
134 |   
135 | Review text: '''{lamp_review}'''
136 | """
137 | response = get_completion(prompt)
138 | print(response)
139 | 
140 | 
141 | # ## Doing multiple tasks at once
142 | 
143 | # In[ ]:
144 | 
145 | 
146 | prompt = f"""
147 | Identify the following items from the review text: 
148 | - Sentiment (positive or negative)
149 | - Is the reviewer expressing anger? (true or false)
150 | - Item purchased by reviewer
151 | - Company that made the item
152 | 
153 | The review is delimited with triple backticks. \
154 | Format your response as a JSON object with \
155 | "Sentiment", "Anger", "Item" and "Brand" as the keys.
156 | If the information isn't present, use "unknown" \
157 | as the value.
158 | Make your response as short as possible.
159 | Format the Anger value as a boolean.
160 | 
161 | Review text: '''{lamp_review}'''
162 | """
163 | response = get_completion(prompt)
164 | print(response)
165 | 
166 | 
167 | # ## Inferring topics
168 | 
169 | # In[ ]:
170 | 
171 | 
172 | story = """
173 | In a recent survey conducted by the government, 
174 | public sector employees were asked to rate their level 
175 | of satisfaction with the department they work at. 
176 | The results revealed that NASA was the most popular 
177 | department with a satisfaction rating of 95%.
178 | 
179 | One NASA employee, John Smith, commented on the findings, 
180 | stating, "I'm not surprised that NASA came out on top. 
181 | It's a great place to work with amazing people and 
182 | incredible opportunities. I'm proud to be a part of 
183 | such an innovative organization."
184 | 
185 | The results were also welcomed by NASA's management team, 
186 | with Director Tom Johnson stating, "We are thrilled to 
187 | hear that our employees are satisfied with their work at NASA. 
188 | We have a talented and dedicated team who work tirelessly 
189 | to achieve our goals, and it's fantastic to see that their 
190 | hard work is paying off."
191 | 
192 | The survey also revealed that the 
193 | Social Security Administration had the lowest satisfaction 
194 | rating, with only 45% of employees indicating they were 
195 | satisfied with their job. The government has pledged to 
196 | address the concerns raised by employees in the survey and 
197 | work towards improving job satisfaction across all departments.
198 | """
199 | 
200 | 
201 | # ## Infer 5 topics
202 | 
203 | # In[ ]:
204 | 
205 | 
206 | prompt = f"""
207 | Determine five topics that are being discussed in the \
208 | following text, which is delimited by triple backticks.
209 | 
210 | Make each item one or two words long. 
211 | 
212 | Format your response as a list of items separated by commas.
213 | 
214 | Text sample: '''{story}'''
215 | """
216 | response = get_completion(prompt)
217 | print(response)
218 | 
219 | 
220 | # In[ ]:
221 | 
222 | 
223 | response.split(sep=',')
224 | 
225 | 
226 | # In[ ]:
227 | 
228 | 
229 | topic_list = [
230 |     "nasa", "local government", "engineering", 
231 |     "employee satisfaction", "federal government"
232 | ]
233 | 
234 | 
235 | # ## Make a news alert for certain topics
236 | 
237 | # In[ ]:
238 | 
239 | 
240 | prompt = f"""
241 | Determine whether each item in the following list of \
242 | topics is a topic in the text below, which
243 | is delimited with triple backticks.
244 | 
245 | Give your answer as follows:
246 | item from the list: 0 or 1
247 | 
248 | List of topics: {", ".join(topic_list)}
249 | 
250 | Text sample: '''{story}'''
251 | """
252 | response = get_completion(prompt)
253 | print(response)
254 | 
255 | 
256 | # In[ ]:
257 | 
258 | 
259 | topic_dict = {i.split(': ')[0]: int(i.split(': ')[1]) for i in response.split(sep='\n')}
260 | if topic_dict['nasa'] == 1:
261 |     print("ALERT: New NASA story!")
262 | 
263 | 
264 | # ## Try experimenting on your own!
265 | 
266 | # In[ ]:
267 | 
268 | 
269 | 
270 | 
```

promptEngine/l6-transforming.py
```
1 | #!/usr/bin/env python
2 | # coding: utf-8
3 | 
4 | # # Transforming
5 | # 
6 | # In this notebook, we will explore how to use Large Language Models for text transformation tasks such as language translation, spelling and grammar checking, tone adjustment, and format conversion.
7 | # 
8 | # ## Setup
9 | 
10 | # In[ ]:
11 | 
12 | 
13 | import openai
14 | import os
15 | 
16 | from dotenv import load_dotenv, find_dotenv
17 | _ = load_dotenv(find_dotenv()) # read local .env file
18 | 
19 | openai.api_key  = os.getenv('OPENAI_API_KEY')
20 | 
21 | 
22 | # In[ ]:
23 | 
24 | 
25 | def get_completion(prompt, model="gpt-3.5-turbo", temperature=0): 
26 |     messages = [{"role": "user", "content": prompt}]
27 |     response = openai.ChatCompletion.create(
28 |         model=model,
29 |         messages=messages,
30 |         temperature=temperature, 
31 |     )
32 |     return response.choices[0].message["content"]
33 | 
34 | 
35 | # ## Translation
36 | # 
37 | # ChatGPT is trained with sources in many languages. This gives the model the ability to do translation. Here are some examples of how to use this capability.
38 | 
39 | # In[ ]:
40 | 
41 | 
42 | prompt = f"""
43 | Translate the following English text to Spanish: \ 
44 | ```Hi, I would like to order a blender```
45 | """
46 | response = get_completion(prompt)
47 | print(response)
48 | 
49 | 
50 | # In[ ]:
51 | 
52 | 
53 | prompt = f"""
54 | Tell me which language this is: 
55 | ```Combien coûte le lampadaire?```
56 | """
57 | response = get_completion(prompt)
58 | print(response)
59 | 
60 | 
61 | # In[ ]:
62 | 
63 | 
64 | prompt = f"""
65 | Translate the following  text to French and Spanish
66 | and English pirate: \
67 | ```I want to order a basketball```
68 | """
69 | response = get_completion(prompt)
70 | print(response)
71 | 
72 | 
73 | # In[ ]:
74 | 
75 | 
76 | prompt = f"""
77 | Translate the following text to Spanish in both the \
78 | formal and informal forms: 
79 | 'Would you like to order a pillow?'
80 | """
81 | response = get_completion(prompt)
82 | print(response)
83 | 
84 | 
85 | # ### Universal Translator
86 | # Imagine you are in charge of IT at a large multinational e-commerce company. Users are messaging you with IT issues in all their native languages. Your staff is from all over the world and speaks only their native languages. You need a universal translator!
87 | 
88 | # In[ ]:
89 | 
90 | 
91 | user_messages = [
92 |   "La performance du système est plus lente que d'habitude.",  # System performance is slower than normal         
93 |   "Mi monitor tiene píxeles que no se iluminan.",              # My monitor has pixels that are not lighting
94 |   "Il mio mouse non funziona",                                 # My mouse is not working
95 |   "Mój klawisz Ctrl jest zepsuty",                             # My keyboard has a broken control key
96 |   "我的屏幕在闪烁"                                               # My screen is flashing
97 | ] 
98 | 
99 | 
100 | # In[ ]:
101 | 
102 | 
103 | for issue in user_messages:
104 |     prompt = f"Tell me what language this is: ```{issue}```"
105 |     lang = get_completion(prompt)
106 |     print(f"Original message ({lang}): {issue}")
107 | 
108 |     prompt = f"""
109 |     Translate the following  text to English \
110 |     and Korean: ```{issue}```
111 |     """
112 |     response = get_completion(prompt)
113 |     print(response, "\n")
114 | 
115 | 
116 | # ## Try it yourself!
117 | # Try some translations on your own!
118 | 
119 | # In[ ]:
120 | 
121 | 
122 | 
123 | 
124 | 
125 | # ## Tone Transformation
126 | # Writing can vary based on the intended audience. ChatGPT can produce different tones.
127 | # 
128 | 
129 | # In[ ]:
130 | 
131 | 
132 | prompt = f"""
133 | Translate the following from slang to a business letter: 
134 | 'Dude, This is Joe, check out this spec on this standing lamp.'
135 | """
136 | response = get_completion(prompt)
137 | print(response)
138 | 
139 | 
140 | # ## Format Conversion
141 | # ChatGPT can translate between formats. The prompt should describe the input and output formats.
142 | 
143 | # In[ ]:
144 | 
145 | 
146 | data_json = { "resturant employees" :[ 
147 |     {"name":"Shyam", "email":"shyamjaiswal@gmail.com"},
148 |     {"name":"Bob", "email":"bob32@gmail.com"},
149 |     {"name":"Jai", "email":"jai87@gmail.com"}
150 | ]}
151 | 
152 | prompt = f"""
153 | Translate the following python dictionary from JSON to an HTML \
154 | table with column headers and title: {data_json}
155 | """
156 | response = get_completion(prompt)
157 | print(response)
158 | 
159 | 
160 | # In[ ]:
161 | 
162 | 
163 | from IPython.display import display, Markdown, Latex, HTML, JSON
164 | display(HTML(response))
165 | 
166 | 
167 | # ## Spellcheck/Grammar check.
168 | # 
169 | # Here are some examples of common grammar and spelling problems and the LLM's response. 
170 | # 
171 | # To signal to the LLM that you want it to proofread your text, you instruct the model to 'proofread' or 'proofread and correct'.
172 | 
173 | # In[ ]:
174 | 
175 | 
176 | text = [ 
177 |   "The girl with the black and white puppies have a ball.",  # The girl has a ball.
178 |   "Yolanda has her notebook.", # ok
179 |   "Its going to be a long day. Does the car need it’s oil changed?",  # Homonyms
180 |   "Their goes my freedom. There going to bring they’re suitcases.",  # Homonyms
181 |   "Your going to need you’re notebook.",  # Homonyms
182 |   "That medicine effects my ability to sleep. Have you heard of the butterfly affect?", # Homonyms
183 |   "This phrase is to cherck chatGPT for speling abilitty"  # spelling
184 | ]
185 | for t in text:
186 |     prompt = f"""Proofread and correct the following text
187 |     and rewrite the corrected version. If you don't find
188 |     and errors, just say "No errors found". Don't use 
189 |     any punctuation around the text:
190 |     ```{t}```"""
191 |     response = get_completion(prompt)
192 |     print(response)
193 | 
194 | 
195 | # In[ ]:
196 | 
197 | 
198 | text = f"""
199 | Got this for my daughter for her birthday cuz she keeps taking \
200 | mine from my room.  Yes, adults also like pandas too.  She takes \
201 | it everywhere with her, and it's super soft and cute.  One of the \
202 | ears is a bit lower than the other, and I don't think that was \
203 | designed to be asymmetrical. It's a bit small for what I paid for it \
204 | though. I think there might be other options that are bigger for \
205 | the same price.  It arrived a day earlier than expected, so I got \
206 | to play with it myself before I gave it to my daughter.
207 | """
208 | prompt = f"proofread and correct this review: ```{text}```"
209 | response = get_completion(prompt)
210 | print(response)
211 | 
212 | 
213 | # In[ ]:
214 | 
215 | 
216 | from redlines import Redlines
217 | 
218 | diff = Redlines(text,response)
219 | display(Markdown(diff.output_markdown))
220 | 
221 | 
222 | # In[ ]:
223 | 
224 | 
225 | prompt = f"""
226 | proofread and correct this review. Make it more compelling. 
227 | Ensure it follows APA style guide and targets an advanced reader. 
228 | Output in markdown format.
229 | Text: ```{text}```
230 | """
231 | response = get_completion(prompt)
232 | display(Markdown(response))
233 | 
234 | 
235 | # ## Try it yourself!
236 | # Try changing the instructions to form your own review.
237 | 
238 | # In[ ]:
239 | 
240 | 
241 | 
242 | 
243 | 
244 | # Thanks to the following sites:
245 | # 
246 | # https://writingprompts.com/bad-grammar-examples/
247 | # 
```

promptEngine/l7-expanding.py
```
1 | #!/usr/bin/env python
2 | # coding: utf-8
3 | 
4 | # # Expanding
5 | # In this lesson, you will generate customer service emails that are tailored to each customer's review.
6 | # 
7 | # ## Setup
8 | 
9 | # In[ ]:
10 | 
11 | 
12 | import openai
13 | import os
14 | 
15 | from dotenv import load_dotenv, find_dotenv
16 | _ = load_dotenv(find_dotenv()) # read local .env file
17 | 
18 | openai.api_key  = os.getenv('OPENAI_API_KEY')
19 | 
20 | 
21 | # In[ ]:
22 | 
23 | 
24 | def get_completion(prompt, model="gpt-3.5-turbo",temperature=0): # Andrew mentioned that the prompt/ completion paradigm is preferable for this class
25 |     messages = [{"role": "user", "content": prompt}]
26 |     response = openai.ChatCompletion.create(
27 |         model=model,
28 |         messages=messages,
29 |         temperature=temperature, # this is the degree of randomness of the model's output
30 |     )
31 |     return response.choices[0].message["content"]
32 | 
33 | 
34 | # ## Customize the automated reply to a customer email
35 | 
36 | # In[ ]:
37 | 
38 | 
39 | # given the sentiment from the lesson on "inferring",
40 | # and the original customer message, customize the email
41 | sentiment = "negative"
42 | 
43 | # review for a blender
44 | review = f"""
45 | So, they still had the 17 piece system on seasonal \
46 | sale for around $49 in the month of November, about \
47 | half off, but for some reason (call it price gouging) \
48 | around the second week of December the prices all went \
49 | up to about anywhere from between $70-$89 for the same \
50 | system. And the 11 piece system went up around $10 or \
51 | so in price also from the earlier sale price of $29. \
52 | So it looks okay, but if you look at the base, the part \
53 | where the blade locks into place doesn’t look as good \
54 | as in previous editions from a few years ago, but I \
55 | plan to be very gentle with it (example, I crush \
56 | very hard items like beans, ice, rice, etc. in the \ 
57 | blender first then pulverize them in the serving size \
58 | I want in the blender then switch to the whipping \
59 | blade for a finer flour, and use the cross cutting blade \
60 | first when making smoothies, then use the flat blade \
61 | if I need them finer/less pulpy). Special tip when making \
62 | smoothies, finely cut and freeze the fruits and \
63 | vegetables (if using spinach-lightly stew soften the \ 
64 | spinach then freeze until ready for use-and if making \
65 | sorbet, use a small to medium sized food processor) \ 
66 | that you plan to use that way you can avoid adding so \
67 | much ice if at all-when making your smoothie. \
68 | After about a year, the motor was making a funny noise. \
69 | I called customer service but the warranty expired \
70 | already, so I had to buy another one. FYI: The overall \
71 | quality has gone done in these types of products, so \
72 | they are kind of counting on brand recognition and \
73 | consumer loyalty to maintain sales. Got it in about \
74 | two days.
75 | """
76 | 
77 | 
78 | # In[ ]:
79 | 
80 | 
81 | prompt = f"""
82 | You are a customer service AI assistant.
83 | Your task is to send an email reply to a valued customer.
84 | Given the customer email delimited by ```, \
85 | Generate a reply to thank the customer for their review.
86 | If the sentiment is positive or neutral, thank them for \
87 | their review.
88 | If the sentiment is negative, apologize and suggest that \
89 | they can reach out to customer service. 
90 | Make sure to use specific details from the review.
91 | Write in a concise and professional tone.
92 | Sign the email as `AI customer agent`.
93 | Customer review: ```{review}```
94 | Review sentiment: {sentiment}
95 | """
96 | response = get_completion(prompt)
97 | print(response)
98 | 
99 | 
100 | # ## Remind the model to use details from the customer's email
101 | 
102 | # In[ ]:
103 | 
104 | 
105 | prompt = f"""
106 | You are a customer service AI assistant.
107 | Your task is to send an email reply to a valued customer.
108 | Given the customer email delimited by ```, \
109 | Generate a reply to thank the customer for their review.
110 | If the sentiment is positive or neutral, thank them for \
111 | their review.
112 | If the sentiment is negative, apologize and suggest that \
113 | they can reach out to customer service. 
114 | Make sure to use specific details from the review.
115 | Write in a concise and professional tone.
116 | Sign the email as `AI customer agent`.
117 | Customer review: ```{review}```
118 | Review sentiment: {sentiment}
119 | """
120 | response = get_completion(prompt, temperature=0.7)
121 | print(response)
122 | 
123 | 
124 | # ## Try experimenting on your own!
125 | 
126 | # In[ ]:
127 | 
128 | 
129 | 
130 | 
```

promptEngine/SemanticSearchEngine.py
```
```

tools/llm_api.py
```
1 | #!/usr/bin/env /workspace/tmp_windsurf/venv/bin/python3
2 | 
3 | import google.generativeai as genai
4 | from openai import OpenAI, AzureOpenAI
5 | from anthropic import Anthropic
6 | import argparse
7 | import os
8 | from dotenv import load_dotenv
9 | from pathlib import Path
10 | import sys
11 | import base64
12 | from typing import Optional, Union, List
13 | import mimetypes
14 | 
15 | def load_environment():
16 |     """Load environment variables from .env files in order of precedence"""
17 |     # Order of precedence:
18 |     # 1. System environment variables (already loaded)
19 |     # 2. .env.local (user-specific overrides)
20 |     # 3. .env (project defaults)
21 |     # 4. .env.example (example configuration)
22 |     
23 |     env_files = ['.env.local', '.env', '.env.example']
24 |     env_loaded = False
25 |     
26 |     print("Current working directory:", Path('.').absolute(), file=sys.stderr)
27 |     print("Looking for environment files:", env_files, file=sys.stderr)
28 |     
29 |     for env_file in env_files:
30 |         env_path = Path('.') / env_file
31 |         print(f"Checking {env_path.absolute()}", file=sys.stderr)
32 |         if env_path.exists():
33 |             print(f"Found {env_file}, loading variables...", file=sys.stderr)
34 |             load_dotenv(dotenv_path=env_path)
35 |             env_loaded = True
36 |             print(f"Loaded environment variables from {env_file}", file=sys.stderr)
37 |             # Print loaded keys (but not values for security)
38 |             with open(env_path) as f:
39 |                 keys = [line.split('=')[0].strip() for line in f if '=' in line and not line.startswith('#')]
40 |                 print(f"Keys loaded from {env_file}: {keys}", file=sys.stderr)
41 |     
42 |     if not env_loaded:
43 |         print("Warning: No .env files found. Using system environment variables only.", file=sys.stderr)
44 |         print("Available system environment variables:", list(os.environ.keys()), file=sys.stderr)
45 | 
46 | # Load environment variables at module import
47 | load_environment()
48 | 
49 | def encode_image_file(image_path: str) -> tuple[str, str]:
50 |     """
51 |     Encode an image file to base64 and determine its MIME type.
52 |     
53 |     Args:
54 |         image_path (str): Path to the image file
55 |         
56 |     Returns:
57 |         tuple: (base64_encoded_string, mime_type)
58 |     """
59 |     mime_type, _ = mimetypes.guess_type(image_path)
60 |     if not mime_type:
61 |         mime_type = 'image/png'  # Default to PNG if type cannot be determined
62 |         
63 |     with open(image_path, "rb") as image_file:
64 |         encoded_string = base64.b64encode(image_file.read()).decode('utf-8')
65 |         
66 |     return encoded_string, mime_type
67 | 
68 | def create_llm_client(provider="openai"):
69 |     if provider == "openai":
70 |         api_key = os.getenv('OPENAI_API_KEY')
71 |         if not api_key:
72 |             raise ValueError("OPENAI_API_KEY not found in environment variables")
73 |         return OpenAI(
74 |             api_key=api_key
75 |         )
76 |     elif provider == "azure":
77 |         api_key = os.getenv('AZURE_OPENAI_API_KEY')
78 |         if not api_key:
79 |             raise ValueError("AZURE_OPENAI_API_KEY not found in environment variables")
80 |         return AzureOpenAI(
81 |             api_key=api_key,
82 |             api_version="2024-08-01-preview",
83 |             azure_endpoint="https://msopenai.openai.azure.com"
84 |         )
85 |     elif provider == "deepseek":
86 |         api_key = os.getenv('DEEPSEEK_API_KEY')
87 |         if not api_key:
88 |             raise ValueError("DEEPSEEK_API_KEY not found in environment variables")
89 |         return OpenAI(
90 |             api_key=api_key,
91 |             base_url="https://api.deepseek.com/v1",
92 |         )
93 |     elif provider == "siliconflow":
94 |         api_key = os.getenv('SILICONFLOW_API_KEY')
95 |         if not api_key:
96 |             raise ValueError("SILICONFLOW_API_KEY not found in environment variables")
97 |         return OpenAI(
98 |             api_key=api_key,
99 |             base_url="https://api.siliconflow.cn/v1"
100 |         )
101 |     elif provider == "anthropic":
102 |         api_key = os.getenv('ANTHROPIC_API_KEY')
103 |         if not api_key:
104 |             raise ValueError("ANTHROPIC_API_KEY not found in environment variables")
105 |         return Anthropic(
106 |             api_key=api_key
107 |         )
108 |     elif provider == "gemini":
109 |         api_key = os.getenv('GOOGLE_API_KEY')
110 |         if not api_key:
111 |             raise ValueError("GOOGLE_API_KEY not found in environment variables")
112 |         genai.configure(api_key=api_key)
113 |         return genai
114 |     elif provider == "local":
115 |         return OpenAI(
116 |             base_url="http://192.168.180.137:8006/v1",
117 |             api_key="not-needed"
118 |         )
119 |     else:
120 |         raise ValueError(f"Unsupported provider: {provider}")
121 | 
122 | def query_llm(prompt: str, client=None, model=None, provider="openai", image_path: Optional[str] = None) -> Optional[str]:
123 |     """
124 |     Query an LLM with a prompt and optional image attachment.
125 |     
126 |     Args:
127 |         prompt (str): The text prompt to send
128 |         client: The LLM client instance
129 |         model (str, optional): The model to use
130 |         provider (str): The API provider to use
131 |         image_path (str, optional): Path to an image file to attach
132 |         
133 |     Returns:
134 |         Optional[str]: The LLM's response or None if there was an error
135 |     """
136 |     if client is None:
137 |         client = create_llm_client(provider)
138 |     
139 |     try:
140 |         # Set default model
141 |         if model is None:
142 |             if provider == "openai":
143 |                 model = "gpt-4o"
144 |             elif provider == "azure":
145 |                 model = os.getenv('AZURE_OPENAI_MODEL_DEPLOYMENT', 'gpt-4o-ms')  # Get from env with fallback
146 |             elif provider == "deepseek":
147 |                 model = "deepseek-chat"
148 |             elif provider == "siliconflow":
149 |                 model = "deepseek-ai/DeepSeek-R1"
150 |             elif provider == "anthropic":
151 |                 model = "claude-3-sonnet-20240229"
152 |             elif provider == "gemini":
153 |                 model = "gemini-pro"
154 |             elif provider == "local":
155 |                 model = "Qwen/Qwen2.5-32B-Instruct-AWQ"
156 |         
157 |         if provider in ["openai", "local", "deepseek", "azure", "siliconflow"]:
158 |             messages = [{"role": "user", "content": []}]
159 |             
160 |             # Add text content
161 |             messages[0]["content"].append({
162 |                 "type": "text",
163 |                 "text": prompt
164 |             })
165 |             
166 |             # Add image content if provided
167 |             if image_path:
168 |                 if provider == "openai":
169 |                     encoded_image, mime_type = encode_image_file(image_path)
170 |                     messages[0]["content"] = [
171 |                         {"type": "text", "text": prompt},
172 |                         {"type": "image_url", "image_url": {"url": f"data:{mime_type};base64,{encoded_image}"}}
173 |                     ]
174 |             
175 |             kwargs = {
176 |                 "model": model,
177 |                 "messages": messages,
178 |                 "temperature": 0.7,
179 |             }
180 |             
181 |             # Add o1-specific parameters
182 |             if model == "o1":
183 |                 kwargs["response_format"] = {"type": "text"}
184 |                 kwargs["reasoning_effort"] = "low"
185 |                 del kwargs["temperature"]
186 |             
187 |             response = client.chat.completions.create(**kwargs)
188 |             return response.choices[0].message.content
189 |             
190 |         elif provider == "anthropic":
191 |             messages = [{"role": "user", "content": []}]
192 |             
193 |             # Add text content
194 |             messages[0]["content"].append({
195 |                 "type": "text",
196 |                 "text": prompt
197 |             })
198 |             
199 |             # Add image content if provided
200 |             if image_path:
201 |                 encoded_image, mime_type = encode_image_file(image_path)
202 |                 messages[0]["content"].append({
203 |                     "type": "image",
204 |                     "source": {
205 |                         "type": "base64",
206 |                         "media_type": mime_type,
207 |                         "data": encoded_image
208 |                     }
209 |                 })
210 |             
211 |             response = client.messages.create(
212 |                 model=model,
213 |                 max_tokens=1000,
214 |                 messages=messages
215 |             )
216 |             return response.content[0].text
217 |             
218 |         elif provider == "gemini":
219 |             model = client.GenerativeModel(model)
220 |             if image_path:
221 |                 file = genai.upload_file(image_path, mime_type="image/png")
222 |                 chat_session = model.start_chat(
223 |                     history=[{
224 |                         "role": "user",
225 |                         "parts": [file, prompt]
226 |                     }]
227 |                 )
228 |             else:
229 |                 chat_session = model.start_chat(
230 |                     history=[{
231 |                         "role": "user",
232 |                         "parts": [prompt]
233 |                     }]
234 |                 )
235 |             response = chat_session.send_message(prompt)
236 |             return response.text
237 |             
238 |     except Exception as e:
239 |         print(f"Error querying LLM: {e}", file=sys.stderr)
240 |         return None
241 | 
242 | def main():
243 |     parser = argparse.ArgumentParser(description='Query an LLM with a prompt')
244 |     parser.add_argument('--prompt', type=str, help='The prompt to send to the LLM', required=True)
245 |     parser.add_argument('--provider', choices=['openai','anthropic','gemini','local','deepseek','azure','siliconflow'], default='openai', help='The API provider to use')
246 |     parser.add_argument('--model', type=str, help='The model to use (default depends on provider)')
247 |     parser.add_argument('--image', type=str, help='Path to an image file to attach to the prompt')
248 |     args = parser.parse_args()
249 | 
250 |     if not args.model:
251 |         if args.provider == 'openai':
252 |             args.model = "gpt-4o" 
253 |         elif args.provider == "deepseek":
254 |             args.model = "deepseek-chat"
255 |         elif args.provider == "siliconflow":
256 |             args.model = "deepseek-ai/DeepSeek-R1"
257 |         elif args.provider == 'anthropic':
258 |             args.model = "claude-3-5-sonnet-20241022"
259 |         elif args.provider == 'gemini':
260 |             args.model = "gemini-2.0-flash-exp"
261 |         elif args.provider == 'azure':
262 |             args.model = os.getenv('AZURE_OPENAI_MODEL_DEPLOYMENT', 'gpt-4o-ms')  # Get from env with fallback
263 | 
264 |     client = create_llm_client(args.provider)
265 |     response = query_llm(args.prompt, client, model=args.model, provider=args.provider, image_path=args.image)
266 |     if response:
267 |         print(response)
268 |     else:
269 |         print("Failed to get response from LLM")
270 | 
271 | if __name__ == "__main__":
272 |     main()
```

tools/screenshot_utils.py
```
1 | #!/usr/bin/env python3
2 | 
3 | import asyncio
4 | from playwright.async_api import async_playwright
5 | import os
6 | import tempfile
7 | from pathlib import Path
8 | 
9 | async def take_screenshot(url: str, output_path: str = None, width: int = 1280, height: int = 720) -> str:
10 |     """
11 |     Take a screenshot of a webpage using Playwright.
12 |     
13 |     Args:
14 |         url (str): The URL to take a screenshot of
15 |         output_path (str, optional): Path to save the screenshot. If None, saves to a temporary file.
16 |         width (int, optional): Viewport width. Defaults to 1280.
17 |         height (int, optional): Viewport height. Defaults to 720.
18 |     
19 |     Returns:
20 |         str: Path to the saved screenshot
21 |     """
22 |     if output_path is None:
23 |         # Create a temporary file with .png extension
24 |         temp_file = tempfile.NamedTemporaryFile(suffix='.png', delete=False)
25 |         output_path = temp_file.name
26 |         temp_file.close()
27 | 
28 |     async with async_playwright() as p:
29 |         browser = await p.chromium.launch(headless=True)
30 |         page = await browser.new_page(viewport={'width': width, 'height': height})
31 |         
32 |         try:
33 |             await page.goto(url, wait_until='networkidle')
34 |             await page.screenshot(path=output_path, full_page=True)
35 |         finally:
36 |             await browser.close()
37 |     
38 |     return output_path
39 | 
40 | def take_screenshot_sync(url: str, output_path: str = None, width: int = 1280, height: int = 720) -> str:
41 |     """
42 |     Synchronous wrapper for take_screenshot.
43 |     """
44 |     return asyncio.run(take_screenshot(url, output_path, width, height))
45 | 
46 | if __name__ == "__main__":
47 |     import argparse
48 |     parser = argparse.ArgumentParser(description='Take a screenshot of a webpage')
49 |     parser.add_argument('url', help='URL to take screenshot of')
50 |     parser.add_argument('--output', '-o', help='Output path for screenshot')
51 |     parser.add_argument('--width', '-w', type=int, default=1280, help='Viewport width')
52 |     parser.add_argument('--height', '-H', type=int, default=720, help='Viewport height')
53 |     
54 |     args = parser.parse_args()
55 |     output_path = take_screenshot_sync(args.url, args.output, args.width, args.height)
56 |     print(f"Screenshot saved to: {output_path}") 
```

tools/search_engine.py
```
1 | #!/usr/bin/env python3
2 | 
3 | import argparse
4 | import sys
5 | import time
6 | from duckduckgo_search import DDGS
7 | 
8 | def search_with_retry(query, max_results=10, max_retries=3):
9 |     """
10 |     Search using DuckDuckGo and return results with URLs and text snippets.
11 |     
12 |     Args:
13 |         query (str): Search query
14 |         max_results (int): Maximum number of results to return
15 |         max_retries (int): Maximum number of retry attempts
16 |     """
17 |     for attempt in range(max_retries):
18 |         try:
19 |             print(f"DEBUG: Searching for query: {query} (attempt {attempt + 1}/{max_retries})", 
20 |                   file=sys.stderr)
21 |             
22 |             with DDGS() as ddgs:
23 |                 results = list(ddgs.text(query, max_results=max_results))
24 |                 
25 |             if not results:
26 |                 print("DEBUG: No results found", file=sys.stderr)
27 |                 return []
28 |             
29 |             print(f"DEBUG: Found {len(results)} results", file=sys.stderr)
30 |             return results
31 |                 
32 |         except Exception as e:
33 |             print(f"ERROR: Attempt {attempt + 1}/{max_retries} failed: {str(e)}", file=sys.stderr)
34 |             if attempt < max_retries - 1:  # If not the last attempt
35 |                 print(f"DEBUG: Waiting 1 second before retry...", file=sys.stderr)
36 |                 time.sleep(1)  # Wait 1 second before retry
37 |             else:
38 |                 print(f"ERROR: All {max_retries} attempts failed", file=sys.stderr)
39 |                 raise
40 | 
41 | def format_results(results):
42 |     """Format and print search results."""
43 |     for i, r in enumerate(results, 1):
44 |         print(f"\n=== Result {i} ===")
45 |         print(f"URL: {r.get('href', 'N/A')}")
46 |         print(f"Title: {r.get('title', 'N/A')}")
47 |         print(f"Snippet: {r.get('body', 'N/A')}")
48 | 
49 | def search(query, max_results=10, max_retries=3):
50 |     """
51 |     Main search function that handles search with retry mechanism.
52 |     
53 |     Args:
54 |         query (str): Search query
55 |         max_results (int): Maximum number of results to return
56 |         max_retries (int): Maximum number of retry attempts
57 |     """
58 |     try:
59 |         results = search_with_retry(query, max_results, max_retries)
60 |         if results:
61 |             format_results(results)
62 |             
63 |     except Exception as e:
64 |         print(f"ERROR: Search failed: {str(e)}", file=sys.stderr)
65 |         sys.exit(1)
66 | 
67 | def main():
68 |     parser = argparse.ArgumentParser(description="Search using DuckDuckGo API")
69 |     parser.add_argument("query", help="Search query")
70 |     parser.add_argument("--max-results", type=int, default=10,
71 |                       help="Maximum number of results (default: 10)")
72 |     parser.add_argument("--max-retries", type=int, default=3,
73 |                       help="Maximum number of retry attempts (default: 3)")
74 |     
75 |     args = parser.parse_args()
76 |     search(args.query, args.max_results, args.max_retries)
77 | 
78 | if __name__ == "__main__":
79 |     main()
```

tools/web_scraper.py
```
1 | #!/usr/bin/env /workspace/tmp_windsurf/venv/bin/python3
2 | 
3 | import asyncio
4 | import argparse
5 | import sys
6 | import os
7 | from typing import List, Optional
8 | from playwright.async_api import async_playwright
9 | import html5lib
10 | from multiprocessing import Pool
11 | import time
12 | from urllib.parse import urlparse
13 | import logging
14 | 
15 | # Configure logging
16 | logging.basicConfig(
17 |     level=logging.INFO,
18 |     format='%(asctime)s - %(levelname)s - %(message)s',
19 |     stream=sys.stderr
20 | )
21 | logger = logging.getLogger(__name__)
22 | 
23 | async def fetch_page(url: str, context) -> Optional[str]:
24 |     """Asynchronously fetch a webpage's content."""
25 |     page = await context.new_page()
26 |     try:
27 |         logger.info(f"Fetching {url}")
28 |         await page.goto(url)
29 |         await page.wait_for_load_state('networkidle')
30 |         content = await page.content()
31 |         logger.info(f"Successfully fetched {url}")
32 |         return content
33 |     except Exception as e:
34 |         logger.error(f"Error fetching {url}: {str(e)}")
35 |         return None
36 |     finally:
37 |         await page.close()
38 | 
39 | def parse_html(html_content: Optional[str]) -> str:
40 |     """Parse HTML content and extract text with hyperlinks in markdown format."""
41 |     if not html_content:
42 |         return ""
43 |     
44 |     try:
45 |         document = html5lib.parse(html_content)
46 |         result = []
47 |         seen_texts = set()  # To avoid duplicates
48 |         
49 |         def should_skip_element(elem) -> bool:
50 |             """Check if the element should be skipped."""
51 |             # Skip script and style tags
52 |             if elem.tag in ['{http://www.w3.org/1999/xhtml}script', 
53 |                           '{http://www.w3.org/1999/xhtml}style']:
54 |                 return True
55 |             # Skip empty elements or elements with only whitespace
56 |             if not any(text.strip() for text in elem.itertext()):
57 |                 return True
58 |             return False
59 |         
60 |         def process_element(elem, depth=0):
61 |             """Process an element and its children recursively."""
62 |             if should_skip_element(elem):
63 |                 return
64 |             
65 |             # Handle text content
66 |             if hasattr(elem, 'text') and elem.text:
67 |                 text = elem.text.strip()
68 |                 if text and text not in seen_texts:
69 |                     # Check if this is an anchor tag
70 |                     if elem.tag == '{http://www.w3.org/1999/xhtml}a':
71 |                         href = None
72 |                         for attr, value in elem.items():
73 |                             if attr.endswith('href'):
74 |                                 href = value
75 |                                 break
76 |                         if href and not href.startswith(('#', 'javascript:')):
77 |                             # Format as markdown link
78 |                             link_text = f"[{text}]({href})"
79 |                             result.append("  " * depth + link_text)
80 |                             seen_texts.add(text)
81 |                     else:
82 |                         result.append("  " * depth + text)
83 |                         seen_texts.add(text)
84 |             
85 |             # Process children
86 |             for child in elem:
87 |                 process_element(child, depth + 1)
88 |             
89 |             # Handle tail text
90 |             if hasattr(elem, 'tail') and elem.tail:
91 |                 tail = elem.tail.strip()
92 |                 if tail and tail not in seen_texts:
93 |                     result.append("  " * depth + tail)
94 |                     seen_texts.add(tail)
95 |         
96 |         # Start processing from the body tag
97 |         body = document.find('.//{http://www.w3.org/1999/xhtml}body')
98 |         if body is not None:
99 |             process_element(body)
100 |         else:
101 |             # Fallback to processing the entire document
102 |             process_element(document)
103 |         
104 |         # Filter out common unwanted patterns
105 |         filtered_result = []
106 |         for line in result:
107 |             # Skip lines that are likely to be noise
108 |             if any(pattern in line.lower() for pattern in [
109 |                 'var ', 
110 |                 'function()', 
111 |                 '.js',
112 |                 '.css',
113 |                 'google-analytics',
114 |                 'disqus',
115 |                 '{',
116 |                 '}'
117 |             ]):
118 |                 continue
119 |             filtered_result.append(line)
120 |         
121 |         return '\n'.join(filtered_result)
122 |     except Exception as e:
123 |         logger.error(f"Error parsing HTML: {str(e)}")
124 |         return ""
125 | 
126 | async def process_urls(urls: List[str], max_concurrent: int = 5) -> List[str]:
127 |     """Process multiple URLs concurrently."""
128 |     async with async_playwright() as p:
129 |         browser = await p.chromium.launch()
130 |         try:
131 |             # Create browser contexts
132 |             n_contexts = min(len(urls), max_concurrent)
133 |             contexts = [await browser.new_context() for _ in range(n_contexts)]
134 |             
135 |             # Create tasks for each URL
136 |             tasks = []
137 |             for i, url in enumerate(urls):
138 |                 context = contexts[i % len(contexts)]
139 |                 task = fetch_page(url, context)
140 |                 tasks.append(task)
141 |             
142 |             # Gather results
143 |             html_contents = await asyncio.gather(*tasks)
144 |             
145 |             # Parse HTML contents in parallel
146 |             with Pool() as pool:
147 |                 results = pool.map(parse_html, html_contents)
148 |                 
149 |             return results
150 |             
151 |         finally:
152 |             # Cleanup
153 |             for context in contexts:
154 |                 await context.close()
155 |             await browser.close()
156 | 
157 | def validate_url(url: str) -> bool:
158 |     """Validate if the given string is a valid URL."""
159 |     try:
160 |         result = urlparse(url)
161 |         return all([result.scheme, result.netloc])
162 |     except:
163 |         return False
164 | 
165 | def main():
166 |     parser = argparse.ArgumentParser(description='Fetch and extract text content from webpages.')
167 |     parser.add_argument('urls', nargs='+', help='URLs to process')
168 |     parser.add_argument('--max-concurrent', type=int, default=5,
169 |                        help='Maximum number of concurrent browser instances (default: 5)')
170 |     parser.add_argument('--debug', action='store_true',
171 |                        help='Enable debug logging')
172 |     
173 |     args = parser.parse_args()
174 |     
175 |     if args.debug:
176 |         logger.setLevel(logging.DEBUG)
177 |     
178 |     # Validate URLs
179 |     valid_urls = []
180 |     for url in args.urls:
181 |         if validate_url(url):
182 |             valid_urls.append(url)
183 |         else:
184 |             logger.error(f"Invalid URL: {url}")
185 |     
186 |     if not valid_urls:
187 |         logger.error("No valid URLs provided")
188 |         sys.exit(1)
189 |     
190 |     start_time = time.time()
191 |     try:
192 |         results = asyncio.run(process_urls(valid_urls, args.max_concurrent))
193 |         
194 |         # Print results to stdout
195 |         for url, text in zip(valid_urls, results):
196 |             print(f"\n=== Content from {url} ===")
197 |             print(text)
198 |             print("=" * 80)
199 |         
200 |         logger.info(f"Total processing time: {time.time() - start_time:.2f}s")
201 |         
202 |     except Exception as e:
203 |         logger.error(f"Error during execution: {str(e)}")
204 |         sys.exit(1)
205 | 
206 | if __name__ == '__main__':
207 |     main() 
```

UniversalGuideForAI/ClaudeInitConversation-00.md
```
1 | Which model would be closest to the sonnet 3.7 as far as responses go which one should I consider or if it doesn't actually match and meet up to those same values how could I improve that model to reach that point of responses?
2 | 
3 | Looking at your list of models, there isn't a perfect equivalent to Claude 3.7 Sonnet in terms of response quality and capabilities, as Claude 3.7 Sonnet is a proprietary model from Anthropic with specific design choices and training.
4 | 
5 | From the models in your list, the ones that might offer some of the higher-quality responses (though still different from Claude 3.7 Sonnet) would be:
6 | 
7 | 1. **Mistral-based models** - `mistral:latest` or `HammerAI/mistral-nemo-uncensored:latest` - Mistral models are known for strong reasoning and instruction following
8 | 2. **Llama3-based models** - `llama3.2:latest` or `rjmalagon/deephermes-3-llama-3:8b-bf16` - The Llama 3 series has shown significant improvements over previous generations
9 | 3. **Qwen2.5 models** - `qwen2.5:latest` or `qwen2.5:7b` - These models from Alibaba have demonstrated strong performance
10 | 4. **DeepSeek-R1** - `deepseek-r1:latest` or the larger variants like `deepseek-r1:14b` - DeepSeek models have shown good reasoning abilities
11 | 
12 | To get closer to Claude 3.7 Sonnet's response quality, you might consider:
13 | 
14 | 1. **Fine-tuning**: Take one of the larger models like `deepseek-r1:14b` or `MHKetbi/LGAI_EXAONE-Deep-32B:q3_K_L` and fine-tune it on high-quality conversation data
15 | 
16 | 2. **Prompt engineering**: Develop better system prompts that guide the model toward Claude-like responses (thoughtful, helpful, safe)
17 | 
18 | 3. **Instruction tuning**: Further train the model on instruction-following datasets
19 | 
20 | 4. **Tool integration**: Add tools and retrieval capabilities to enhance the model's ability to provide accurate information
21 | 
22 | 5. **Ensemble approach**: Consider using multiple models together - for example, using `granite-embedding:latest` or `nomic-embed-text:latest` for retrieval and then a larger model like `athene-v2:72b-q2_K` for generation
23 | 
24 | Keep in mind that Claude 3.7 Sonnet has been extensively trained with RLHF (Reinforcement Learning from Human Feedback) and other techniques that might not be easy to replicate with open models without significant resources.
25 | 
26 | The larger models in your list (like the 32B variants) will generally provide better quality responses than the smaller ones, though they require more computational resources to run.
27 | 
28 | 
29 | 
30 | Could you go into detail on the fine tuning prompt engineering and the instruction tuning?
31 | 
32 | # Fine-Tuning for Claude-Like Responses
33 | 
34 | ## Fine-Tuning Process
35 | 
36 | Fine-tuning takes a pre-trained model and further trains it on specific data to enhance its capabilities in targeted areas. Here's how you could approach it:
37 | 
38 | ### Data Collection and Preparation
39 | 
40 | 1. **Conversation Datasets**: Gather high-quality, diverse conversational data that demonstrates the qualities you want (helpfulness, thoughtfulness, nuance, safety).
41 |    - Consider datasets like Anthropic's Helpful and Harmless Dialogues (if available)
42 |    - The OpenAssistant Conversations Dataset
43 |    - Databricks Dolly dataset
44 |    - Quality filtered Reddit or StackExchange conversations
45 | 
46 | 2. **Data Format**: Structure your data as instruction-response pairs or multi-turn conversations with clear roles.
47 |    ```
48 |    {"messages": [
49 |      {"role": "human", "content": "Can you explain quantum computing?"},
50 |      {"role": "assistant", "content": "Quantum computing leverages principles of quantum mechanics..."}
51 |    ]}
52 |    ```
53 | 
54 | 3. **Data Curation**: Quality matters more than quantity. Manually review samples to ensure they reflect the style and quality you're targeting.
55 | 
56 | ### Fine-Tuning Implementation
57 | 
58 | 1. **Use Low-Rank Adaptation (LoRA)** - This reduces memory requirements while preserving model quality
59 |    ```bash
60 |    python finetune.py --model deepseek-r1:14b --lora-rank 8 --dataset your_curated_dataset.jsonl
61 |    ```
62 | 
63 | 2. **Parameter-Efficient Fine-Tuning (PEFT)** techniques can help you train more efficiently
64 | 
65 | 3. **Hyperparameters**: Start with a small learning rate (1e-5 to 3e-5) and use a validation set to monitor performance
66 | 
67 | 4. **Checkpointing**: Save model states throughout training to find optimal points before overfitting
68 | 
69 | ## Prompt Engineering
70 | 
71 | Prompt engineering can dramatically improve model performance without additional training:
72 | 
73 | ### System Prompts
74 | 
75 | Create a comprehensive system prompt that guides the model's behavior:
76 | 
77 | ```
78 | You are a helpful, harmless, and honest AI assistant. You provide thoughtful, nuanced responses that show deep understanding. You avoid harmful content, acknowledge uncertainty, and focus on helping the user effectively.
79 | ```
80 | 
81 | ### Few-Shot Examples
82 | 
83 | Include exemplars in your system prompt that demonstrate desired response patterns:
84 | 
85 | ```
86 | Human: What's the capital of France?
87 | Assistant: The capital of France is Paris. It's not only the political center but also a global hub for art, fashion, and culture, often called the "City of Light."
88 | 
89 | 
90 | 
91 | 
92 | How could I set up a project that has this type of structure are there any recommendations for improvement as far as the horizon level goes I think Horizon One is like priority task and two is test to implement and Horizon 3 is far in the future futures to consider or something of that nature. If instead of on the typical owner I wanted a fine tune or prompt engineered version of each of these how could I go about setting all of that up?
93 | 
94 | 
95 | 
96 | Based on the README.md document, I can help you set up a project with this documentation structure and adapt it for fine-tuning and prompt engineering purposes. You're right about the horizon levels - they typically represent different time frames (H1: now/soon, H2: next, H3: future).
97 | 
98 | Let's create a plan for setting up this structure with a focus on integrating fine-tuning and prompt engineering components:
99 | 
100 | ## Project Setup with Documentation Structure
101 | 
102 | 1. **Create the base directory structure** as outlined in the README:
103 |    ```
104 |    Project Root
105 |    ├── docs/
106 |    │   ├── vision/
107 |    │   │   ├── prd/
108 |    │   │   └── roadmap/
109 |    │   ├── specs/
110 |    │   │   ├── functional/
111 |    │   │   └── non-functional/
112 |    │   ├── implementation/
113 |    │   │   ├── tdd/
114 |    │   │   ├── model-cards/
115 |    │   │   └── dfd/
116 |    │   └── operations/
117 |    │       ├── phd/
118 |    │       ├── pha/
119 |    │       └── runbooks/
120 |    ├── models/                    # New directory for model artifacts
121 |    │   ├── base/                  # Original models
122 |    │   ├── fine-tuned/            # Fine-tuned versions
123 |    │   └── prompts/               # Prompt templates library
124 |    └── scripts/                   # Utility scripts for model operations
125 |        ├── fine-tuning/           # Fine-tuning scripts
126 |        ├── evaluation/            # Evaluation scripts
127 |        └── deployment/            # Deployment utilities
128 |    ```
129 | 
130 | 2. **Adapt the document templates** for AI model development:
131 | 
132 | ## Modified Document Templates for Fine-Tuning/Prompt Engineering
133 | 
134 | ### Model Card Template (Enhanced)
135 | Add sections specific to fine-tuning:
136 | - Base model information
137 | - Fine-tuning dataset characteristics
138 | - Training hyperparameters
139 | - Performance metrics pre/post fine-tuning
140 | - Prompt template compatibility
141 | 
142 | ### Prompt Engineering Document (New)
143 | Create a new template for prompt engineering:
144 | ```
145 | # [Model Name] Prompt Engineering Document
146 | 
147 | ## Metadata
148 | - Created: [Date]
149 | - Owner: [Name]
150 | - Horizon Level: [H1/H2/H3]
151 | - Base Model: [Model identifier]
152 | 
153 | ## Prompt Templates
154 | - System prompt
155 | - Few-shot examples
156 | - Instruction formats
157 | 
158 | ## Performance Analysis
159 | - Evaluation results with different prompts
160 | - Strengths and weaknesses
161 | 
162 | ## Usage Guidelines
163 | - Best practices
164 | - Known limitations
165 | - Example implementations
166 | ```
167 | 
168 | ### Fine-Tuning Specification (New)
169 | Create a template for fine-tuning specifications:
170 | ```
171 | # [Model Name] Fine-Tuning Specification
172 | 
173 | ## Metadata
174 | - Created: [Date]
175 | - Owner: [Name]
176 | - Horizon Level: [H1/H2/H3]
177 | - Base Model: [Model identifier]
178 | 
179 | ## Objective
180 | - Target capabilities
181 | - Success criteria
182 | 
183 | ## Dataset
184 | - Sources
185 | - Curation methodology
186 | - Size and characteristics
187 | 
188 | ## Training Configuration
189 | - Hyperparameters
190 | - Hardware requirements
191 | - Estimated training time
192 | 
193 | ## Evaluation Plan
194 | - Metrics
195 | - Benchmark datasets
196 | - Human evaluation protocol
197 | ```
198 | 
199 | ## Implementation Plan
200 | 
201 | 1. **Set up version control** for your project structure
202 |    ```bash
203 |    git init
204 |    git add .
205 |    git commit -m "Initial project structure"
206 |    ```
207 | 
208 | 2. **Create utility scripts** for fine-tuning workflows:
209 |    - Dataset preparation scripts
210 |    - Fine-tuning execution scripts
211 |    - Evaluation harness
212 |    - Prompt template management
213 | 
214 | 3. **Horizon-based planning adaptation**:
215 |    - H1 (Current): Models ready for fine-tuning now (e.g., deepseek-r1:14b)
216 |    - H2 (Next): Models requiring more preparation or resources
217 |    - H3 (Future): Experimental approaches or larger models
218 | 
219 | 4. **For each model in your list, create**:
220 |    - A model card in `docs/implementation/model-cards/`
221 |    - A fine-tuning spec in `docs/specs/functional/`
222 |    - Prompt templates in `models/prompts/`
223 | 
224 | 5. **Track progress** using a kanban board organized by horizons
225 |    - H1 board: Current fine-tuning experiments
226 |    - H2 board: Planned fine-tuning tasks
227 |    - H3 board: Research ideas and future models
228 | 
229 | ## Example Implementation for deepseek-r1:14b
230 | 
231 | Here's how you might implement this for one of your models:
232 | 
233 | 1. **Create model card**: `docs/implementation/model-cards/deepseek-r1-14b.md`
234 | 2. **Create fine-tuning spec**: `docs/specs/functional/deepseek-r1-14b-ft-spec.md`
235 | 3. **Create prompt engineering doc**: `docs/implementation/prompt-engineering/deepseek-r1-14b-prompts.md`
236 | 4. **Prepare fine-tuning script**: `scripts/fine-tuning/deepseek_r1_14b_finetune.py`
237 | 
238 | For effective fine-tuning and prompt engineering management, I'd recommend:
239 | 
240 | 1. **Systematic evaluation**: Create a benchmark suite to test each model consistently
241 | 2. **Centralized prompt library**: Maintain versioned prompt templates
242 | 3. **Experiment tracking**: Use tools like MLflow or Weights & Biases
243 | 4. **Documentation automation**: Generate model cards and other docs from experiment results
244 | 
245 | Would you like me to elaborate on any specific aspect of this setup or provide example content for any of the templates?
246 | 
247 | 
248 | Now this isn't specifically for fine tuning prompt engineering Or do you think that's all it use could be used for was thinking more of a general approach way of doing these types of whatever you call whatever I'm asking
249 | 
250 | I see - you're looking for a more general approach to project organization using this documentation structure, not just for AI model fine-tuning and prompt engineering. Let me reframe my guidance:
251 | 
252 | ## General Project Structure Implementation
253 | 
254 | This documentation structure provides an excellent framework for organizing any complex project, particularly software development initiatives. Here's how to implement it for general purposes:
255 | 
256 | ### 1. Set Up the Base Structure
257 | 
258 | Create the directory hierarchy as outlined in the README:
259 | ```
260 | Project Root
261 | ├── docs/
262 | │   ├── vision/                # WHY - Purpose and goals
263 | │   │   ├── prd/               # Product Requirements Documents
264 | │   │   └── roadmap/           # Project roadmap
265 | │   ├── specs/                 # WHAT - Specifications
266 | │   │   ├── functional/        # Functional requirements
267 | │   │   └── non-functional/    # Non-functional requirements
268 | │   ├── implementation/        # HOW - Technical details
269 | │   │   ├── tdd/               # Technical Design Documents
270 | │   │   ├── model-cards/       # AI Model documentation (if applicable)
271 | │   │   └── dfd/               # Data Flow Diagrams
272 | │   └── operations/            # WHEN/WHO - Operational details
273 | │       ├── phd/               # Project Handover Documents
274 | │       ├── pha/               # Product Hazard Analysis
275 | │       └── runbooks/          # Operational runbooks
276 | └── src/                       # Source code for your project
277 | ```
278 | 
279 | ### 2. Adapt Horizon Levels to Your Project
280 | 
281 | The Horizon framework is flexible and can be applied to different project types:
282 | 
283 | - **H1 (Horizon One)**: Current development cycle; immediate priorities; features in active development
284 | - **H2 (Horizon Two)**: Next set of features; planned for upcoming development cycles
285 | - **H3 (Horizon Three)**: Future vision; exploratory ideas; long-term goals
286 | 
287 | For each feature/component, create documentation at the appropriate horizon level.
288 | 
289 | ### 3. Use Development Modes
290 | 
291 | Implement the development modes mentioned in the README to track project phases:
292 | 
293 | - 🎨 **Design Mode**: Initial planning, user research, wireframing
294 | - 🔧 **Engineering Mode**: Active development phase
295 | - 🧪 **Testing Mode**: QA and validation
296 | - 📦 **Deployment Mode**: Release preparation and deployment
297 | - 🔍 **Maintenance Mode**: Post-release support and optimization
298 | 
299 | Tag each document with the relevant mode to provide context.
300 | 
301 | ### 4. Implementation Tips
302 | 
303 | 1. **Start with templates**: Use the referenced templates in the README as starting points
304 | 2. **Regular reviews**: Implement the suggested Monday/Friday documentation review cycle
305 | 3. **Customize for your team**: Modify role assignments based on your team structure
306 | 4. **Integration with tools**: Connect this structure to your project management tools (Jira, GitHub Issues, etc.)
307 | 5. **Automate where possible**: Set up scripts to generate documentation scaffolds
308 | 
309 | ### 5. Real-World Example
310 | 
311 | For a web application project:
312 | 
313 | - **H1 (Now)**: User authentication system
314 |   - Create `user-auth-prd.md` in `docs/vision/prd/`
315 |   - Create `user-auth-tdd.md` in `docs/implementation/tdd/`
316 |   - Create `user-auth-pha.md` in `docs/operations/pha/`
317 | 
318 | - **H2 (Next)**: Payment processing integration
319 |   - Create `payment-processing-prd.md` in `docs/vision/prd/`
320 |   - Create preliminary technical notes in `docs/specs/functional/`
321 | 
322 | - **H3 (Future)**: AI-powered recommendation engine
323 |   - Create initial concept document in `docs/vision/roadmap/`
324 | 
325 | ### 6. Getting Started Steps
326 | 
327 | 1. **Clone/create the repository structure**
328 | 2. **Copy the template files** from the README
329 | 3. **Create initial documentation** for your highest priority features (H1)
330 | 4. **Establish review cycles** for documentation maintenance
331 | 5. **Integrate with your development workflow** (connect to sprints/issues)
332 | 
333 | The beauty of this framework is its flexibility - it can be applied to software development, content creation, product design, or any complex project requiring structured documentation and planning.
334 | 
335 | Would you like me to elaborate on any specific aspect of implementing this general project structure?
336 | 
337 | 
338 | If this project was just based off of the previous approach you proposed don't you think sounds more like a an ide or an operating system or something of that nature that is living at the lowest level but I don't know you tell me what you think about that.
339 | 
340 | 
341 | Looking at both approaches more holistically, you're right - what I described does have characteristics of a more comprehensive system rather than just a documentation structure.
342 | 
343 | The approach I outlined takes the documentation framework from your README and extends it into a complete project management and development ecosystem. It has several key components that make it similar to an IDE (Integrated Development Environment) or even a lightweight operating system for projects:
344 | 
345 | 1. **Organization layer**: The directory structure and document templates provide a consistent architecture for information
346 | 
347 | 2. **Process layer**: The horizon planning, development modes, and review cycles create a structured workflow
348 | 
349 | 3. **Execution layer**: The scripts and automation components enable actionable implementation
350 | 
351 | This is more than just documentation - it's closer to:
352 | 
353 | - **A development framework**: Like Ruby on Rails or Django, but focused on process rather than code
354 | - **A project operating system**: Defining how information flows and work gets done
355 | - **A knowledge management system**: Organizing the thinking and artifacts around software development
356 | 
357 | You could think of it as a "meta-IDE" - not just for writing code, but for orchestrating the entire development lifecycle. The value comes from having all these components working together:
358 | 
359 | - Documentation isn't just static text but becomes executable in a sense
360 | - The horizon model provides built-in prioritization
361 | - The development modes create context awareness
362 | 
363 | If implemented fully, this system would sit at a lower level than typical project management tools but higher than the code itself - in the space between how people think about the work and how the work gets done.
364 | 
365 | Is this the kind of integrated system you were envisioning? It could certainly be developed into something more formal - perhaps a CLI tool or actual IDE plugin that enforces and automates these patterns.
366 | 
367 | 
368 | 
369 | Yeah go ahead, it's kind of the vision CLI tool and/or actual IDE plugin sounds about right
370 | 
371 | Could you go further here and elaborate if I were to take the approach of the cli tool or the actual ide plugin?
372 | 
373 | 
374 | # Building a Development Framework as CLI Tool or IDE Plugin
375 | 
376 | Let me expand on how this documentation framework could evolve into either a CLI tool or IDE plugin. Both approaches would formalize the system into a usable product.
377 | 
378 | ## CLI Tool Approach
379 | 
380 | A command-line interface tool would provide a lightweight, flexible implementation that works across environments.
381 | 
382 | ### Core Components
383 | 
384 | ```bash
385 | project-os/
386 | ├── bin/
387 | │   └── pos               # Main CLI executable
388 | ├── lib/
389 | │   ├── commands/         # Command implementations
390 | │   │   ├── init.js       # Initialize project structure
391 | │   │   ├── create.js     # Create new documents
392 | │   │   ├── review.js     # Run documentation reviews
393 | │   │   ├── status.js     # Check project status by horizon
394 | │   │   └── promote.js    # Promote items between horizons
395 | │   ├── templates/        # Document templates
396 | │   │   ├── prd.md        # Product Requirements
397 | │   │   ├── tdd.md        # Technical Design
398 | │   │   └── ...           # Other templates
399 | │   └── utils/            # Helper functions
400 | │       ├── config.js     # Configuration management
401 | │       ├── git.js        # Git integration helpers
402 | │       └── validator.js  # Document validation
403 | ├── package.json          # Node.js package definition
404 | └── README.md             # Documentation
405 | 
406 | ```
407 | 
408 | ### Key Features
409 | 
410 | 1. **Project Initialization**:
411 |    ```bash
412 |    pos init --template software-development
413 |    ```
414 |    Creates the entire directory structure with templates and config files.
415 | 
416 | 2. **Document Creation**:
417 |    ```bash
418 |    pos create prd --name user-authentication --horizon h1
419 |    ```
420 |    Generates a new PRD with proper naming and placeholders.
421 | 
422 | 3. **Horizon Management**:
423 |    ```bash
424 |    pos status              # View all items by horizon
425 |    pos promote feature-x   # Move from H2 to H1
426 |    ```
427 | 
428 | 4. **Integration with Development Workflow**:
429 |    ```bash
430 |    pos review              # Run documentation review checklist
431 |    pos report --sprint 7   # Generate documentation status
432 |    ```
433 | 
434 | 5. **Documentation Validation**:
435 |    ```bash
436 |    pos validate user-auth-prd.md  # Check document completeness
437 |    ```
438 | 
439 | ### Implementation Approach
440 | 
441 | The CLI could be built with Node.js (for cross-platform support) or Go (for performance and compilation to a single binary). It would read/write to the filesystem, integrate with Git for version control, and potentially connect to issue trackers via APIs.
442 | 
443 | ## IDE Plugin Approach
444 | 
445 | An IDE plugin would provide tighter integration with the development environment.
446 | 
447 | ### Core Components
448 | 
449 | ```javascript
450 | project-os-plugin/
451 | ├── src/
452 | │   ├── extension.js            # Main entry point
453 | │   ├── views/                  # Visual components
454 | │   │   ├── HorizonExplorer.js  # Tree view of documents by horizon
455 | │   │   ├── DocumentEditor.js   # Enhanced document editor
456 | │   │   └── ReviewPanel.js      # Documentation review interface
457 | │   ├── commands/               # IDE command implementations
458 | │   │   ├── createDocument.js   # Document creation
459 | │   │   ├── validateDocument.js # Document validation
460 | │   │   └── reviewDocument.js   # Documentation review
461 | │   └── services/               # Background services
462 | │       ├── templateService.js  # Template management
463 | │       ├── horizonService.js   # Horizon tracking
464 | │       └── integrationService.js # Issue tracker integration
465 | ├── package.json                # Extension manifest
466 | └── README.md                   # Documentation
467 | 
468 | ```
469 | 
470 | ### Key Features
471 | 
472 | 1. **Document Explorer**: Side panel showing documents organized by horizon level with visual indicators for document status and completion.
473 | 
474 | 2. **Smart Document Editor**:
475 |    - Template-aware editing with autocompletion
476 |    - Visual indication of required sections
477 |    - Preview rendering of documentation
478 | 
479 | 3. **Horizon Dashboard**:
480 |    - Visual representation of work items across horizons
481 |    - Drag-and-drop promotion between horizons
482 | 
483 | 4. **Integration Features**:
484 |    - Link documents to code
485 |    - Connect to issue trackers (GitHub Issues, Jira)
486 |    - Associate commits with documentation changes
487 | 
488 | 5. **Documentation Insights**:
489 |    - Visualization of documentation health
490 |    - Progress tracking against templates
491 |    - Timeline view of documentation evolution
492 | 
493 | ### Implementation Approach
494 | 
495 | This could be built as a VS Code extension (most accessible), or plugins for JetBrains IDEs (IntelliJ, WebStorm) or Eclipse. The plugin would use the IDE's extension APIs to add UI components, custom commands, and background services.
496 | 
497 | ## Shared Backend Services
498 | 
499 | Both approaches could share a common backend for more advanced features:
500 | 
501 | ```javascript
502 | // DocumentValidator.js - Example of a shared service
503 | 
504 | class DocumentValidator {
505 |   constructor(templateRegistry) {
506 |     this.templateRegistry = templateRegistry;
507 |   }
508 | 
509 |   /**
510 |    * Validates a document against its template requirements
511 |    * @param {string} documentPath - Path to the document
512 |    * @param {string} templateType - Type of document (prd, tdd, etc.)
513 |    * @returns {ValidationResult} Result containing validity and issues
514 |    */
515 |   validateDocument(documentPath, templateType) {
516 |     // Get the document content
517 |     const content = this.readDocument(documentPath);
518 | 
519 |     // Get the template requirements
520 |     const template = this.templateRegistry.getTemplate(templateType);
521 | 
522 |     // Check for required sections
523 |     const missingRequiredSections = this.checkRequiredSections(content, template);
524 | 
525 |     // Check for metadata completeness
526 |     const metadataIssues = this.validateMetadata(content, template);
527 | 
528 |     // Check for quality indicators
529 |     const qualityIssues = this.checkQualityIndicators(content, template);
530 | 
531 |     return {
532 |       valid: missingRequiredSections.length === 0 && metadataIssues.length === 0,
533 |       requiredSectionIssues: missingRequiredSections,
534 |       metadataIssues: metadataIssues,
535 |       qualityIssues: qualityIssues
536 |     };
537 |   }
538 | 
539 |   // Additional methods for document validation...
540 | }
541 | 
542 | module.exports = DocumentValidator;
543 | 
544 | ```
545 | 
546 | ## Deployment and Distribution
547 | 
548 | ### CLI Tool Distribution:
549 | - Package as npm module: `npm install -g project-os-cli`
550 | - Distribute binaries via GitHub releases for non-Node.js users
551 | - Docker container for CI/CD integration
552 | 
553 | ### IDE Plugin Distribution:
554 | - Publish to marketplace (VS Code Marketplace, JetBrains Plugin Repository)
555 | - Enterprise distribution via private repositories
556 | 
557 | ## Development Roadmap
558 | 
559 | 1. **MVP Phase** (H1):
560 |    - Basic document structure creation
561 |    - Template management
562 |    - Document validation
563 | 
564 | 2. **Enhanced Features** (H2):
565 |    - Horizon management
566 |    - Integration with issue trackers
567 |    - Documentation quality analysis
568 | 
569 | 3. **Advanced Capabilities** (H3):
570 |    - AI-assisted document generation
571 |    - Automated impact analysis
572 |    - Cross-project knowledge graphs
573 | 
574 | This formalized system would transform the documentation framework into a true productivity tool that enforces best practices while streamlining the development process. It becomes a "project operating system" that manages the metadata, documentation, and workflow around your development process.
575 | 
576 | Would you like me to focus on any particular aspect of this implementation approach?
577 | 
578 | 
579 | 
580 | 
581 | And then how would I get an agentic approach through the CLI so a lot of stuff is going on in the background constantly or ever however happens
582 | 
583 | 
584 | 
585 | # Adding Agentic Capabilities to the CLI Framework
586 | 
587 | To transform this CLI tool into an agentic system that works autonomously in the background, we'd need to implement several key components. Here's how we could evolve the framework to include agentic capabilities:
588 | 
589 | ## Core Agentic Architecture
590 | 
591 | ```bash
592 | project-os/
593 | ├── bin/
594 | │   └── pos                      # Main CLI executable
595 | ├── agents/                      # Agent system components
596 | │   ├── daemon.js                # Background process manager
597 | │   ├── scheduler.js             # Job scheduling system
598 | │   ├── watchers/                # File and system watchers
599 | │   │   ├── git-watcher.js       # Monitor git changes
600 | │   │   ├── docs-watcher.js      # Monitor documentation changes
601 | │   │   └── code-watcher.js      # Monitor code changes
602 | │   ├── actors/                  # Specialized agents
603 | │   │   ├── doc-completor.js     # Suggests document completions
604 | │   │   ├── code-linker.js       # Links code to documentation
605 | │   │   ├── quality-checker.js   # Checks documentation quality
606 | │   │   ├── horizon-advisor.js   # Suggests horizon movements
607 | │   │   └── integration-sync.js  # Syncs with external tools
608 | │   └── coordinator.js           # Orchestrates agent activities
609 | ├── lib/                         # Core libraries (as before)
610 | └── services/                    # Background services
611 |     ├── api-server.js            # Local API for integrations
612 |     ├── notification-service.js  # User notification system
613 |     └── telemetry.js             # Usage and performance tracking
614 | 
615 | ```
616 | 
617 | ## Agentic Capabilities
618 | 
619 | ### 1. Background Daemon Process
620 | 
621 | The system would run a persistent daemon that operates continuously:
622 | 
623 | ```bash
624 | # Start the agent system
625 | pos agent start
626 | 
627 | # View agent activity
628 | pos agent status
629 | 
630 | # Configure agent behavior
631 | pos agent config --auto-commit=true --suggestion-level=high
632 | ```
633 | 
634 | ### 2. Continuous Documentation Monitoring
635 | 
636 | The agent would watch for changes and take appropriate actions:
637 | 
638 | ```javascript
639 | // Example from docs-watcher.js
640 | class DocumentationWatcher {
641 |   constructor(workspacePath, eventBus) {
642 |     this.workspacePath = workspacePath;
643 |     this.eventBus = eventBus;
644 |     this.fsWatcher = null;
645 |   }
646 | 
647 |   start() {
648 |     this.fsWatcher = fs.watch(
649 |       path.join(this.workspacePath, 'docs'),
650 |       { recursive: true },
651 |       this.handleFileChange.bind(this)
652 |     );
653 |     console.log('Documentation watcher started');
654 |   }
655 | 
656 |   handleFileChange(eventType, filename) {
657 |     // Determine document type from path
658 |     const docType = this.determineDocumentType(filename);
659 | 
660 |     // Emit event for other agents to handle
661 |     this.eventBus.emit('document:changed', {
662 |       path: filename,
663 |       type: docType,
664 |       timestamp: Date.now()
665 |     });
666 | 
667 |     // Schedule validation
668 |     this.eventBus.emit('task:schedule', {
669 |       task: 'validateDocument',
670 |       params: { path: filename, type: docType },
671 |       priority: 'high'
672 |     });
673 |   }
674 | }
675 | ```
676 | 
677 | ### 3. Proactive Actions
678 | 
679 | The system could take autonomous actions based on project state:
680 | 
681 | 1. **Auto-completion of documentation**:
682 |    - Detect incomplete sections and suggest content
683 |    - Generate missing metadata automatically
684 | 
685 | 2. **Horizon management**:
686 |    - Suggest promoting features based on development activity
687 |    - Alert on stale documentation in active horizons
688 | 
689 | 3. **Quality enforcement**:
690 |    - Validate documentation against templates
691 |    - Generate quality reports and improvement suggestions
692 | 
693 | ### 4. Intelligent Notifications
694 | 
695 | ```javascript
696 | // Example notification dispatch
697 | class NotificationService {
698 |   async sendDocumentationAlert(document, issues) {
699 |     // Determine notification channel (CLI, desktop, Slack, etc.)
700 |     const channel = await this.determineOptimalChannel();
701 | 
702 |     // Format message based on severity
703 |     const message = this.formatAlertMessage(document, issues);
704 | 
705 |     // Dispatch notification
706 |     await this.dispatcher.send(channel, {
707 |       title: "Documentation Alert",
708 |       message: message,
709 |       actionable: true,
710 |       actions: [
711 |         { name: "View Document", command: `pos open ${document.path}` },
712 |         { name: "Fix Issues", command: `pos fix ${document.path}` }
713 |       ]
714 |     });
715 |   }
716 | }
717 | ```
718 | 
719 | ### 5. Integration Synchronization
720 | 
721 | The agent would keep external systems in sync:
722 | 
723 | - Update issue trackers when documentation changes
724 | - Create pull requests for documentation updates
725 | - Sync project status across tools
726 | 
727 | ### 6. Learning System
728 | 
729 | Over time, the agent would learn from project patterns:
730 | 
731 | ```javascript
732 | // Example learning component
733 | class HorizonAdvisor {
734 |   async suggestPromotions() {
735 |     // Analyze historical pattern of promotions
736 |     const promotionPatterns = await this.analyzeHistoricalPromotions();
737 | 
738 |     // Identify candidates based on activity patterns
739 |     const candidates = await this.identifyCandidates(promotionPatterns);
740 | 
741 |     // Generate recommendations with confidence scores
742 |     return candidates.map(item => ({
743 |       item: item.id,
744 |       currentHorizon: item.horizon,
745 |       suggestedHorizon: this.determineTargetHorizon(item),
746 |       confidence: this.calculateConfidence(item),
747 |       rationale: this.generateRationale(item)
748 |     }));
749 |   }
750 | }
751 | ```
752 | 
753 | ## Implementation Strategy
754 | 
755 | 1. **Event-driven architecture**:
756 |    - Central event bus for agent communication
757 |    - Publish-subscribe pattern for loose coupling
758 | 
759 | 2. **Persistent state management**:
760 |    - Local database for project state
761 |    - Serialization of agent knowledge and findings
762 | 
763 | 3. **Configurable autonomy levels**:
764 |    - Set how proactive vs. passive the system should be
765 |    - Control which actions require confirmation
766 | 
767 | 4. **Resource management**:
768 |    - CPU/memory throttling to remain unobtrusive
769 |    - Scheduled activities during low-usage periods
770 | 
771 | ## User Experience
772 | 
773 | From the user's perspective, the system would:
774 | 
775 | 1. Work quietly in the background most of the time
776 | 2. Provide timely notifications about important issues
777 | 3. Offer suggestions at appropriate moments
778 | 4. Be accessible through the CLI for direct interaction
779 | 
780 | ```bash
781 | # Example of interacting with the agent
782 | pos insights                         # Show agent-generated insights
783 | pos suggest --doc user-auth-prd.md   # Get improvement suggestions
784 | pos explain --decision promotion     # Understand agent recommendation
785 | ```
786 | 
787 | ## Technical Considerations
788 | 
789 | For the agentic system to be effective, it should:
790 | 
791 | 1. **Be lightweight**: Minimal resource usage when idle
792 | 2. **Be resilient**: Recover gracefully from crashes
793 | 3. **Be privacy-conscious**: Clear about what data it processes
794 | 4. **Be transparent**: Log all automated actions
795 | 5. **Be configurable**: Allow tuning of behavior
796 | 
797 | This agentic approach transforms the CLI tool from a passive utility into an active team member that continuously works to maintain documentation quality, enforce processes, and help developers navigate the project structure.
798 | 
799 | Would you like me to explore any specific aspect of this agentic system in more detail?
```

UniversalGuideForAI/ClaudeInitConversation-01
```
1 | Looking at your Technical Design Document for the Documentation Standards Framework, I can see why you might feel it's overengineered. Here are some practical ways to simplify while maintaining effectiveness:
2 | 
3 | Simplify the directory structure: Four main directories (vision, specs, implementation, operations) might be excessive for many projects. Consider consolidating into fewer top-level directories based on your team's actual workflow.
4 | Reduce metadata complexity: Your document metadata includes multiple fields that might not all be necessary:
5 | 
6 | Status, author, and last updated are essential
7 | Consider whether you need both "Horizon" and "Development Mode" or if one classification system would suffice
8 | 
9 | 
10 | Minimize formal data models: The TypeScript interfaces for document metadata and structure are likely unnecessary unless you're building automation around them. Simple markdown templates with examples would be more practical.
11 | Focus on practical usage over formality: The document includes sections on security, performance, monitoring, testing, deployment, and rollback that may be overkill for a documentation system. These make sense for code but less so for documentation.
12 | Start simpler and iterate: Begin with a minimal viable documentation structure and expand only as needed. For example:
13 | 
14 | A basic template system
15 | A simpler directory structure
16 | Clear guidelines on when to create which documents
17 | 
18 | 
19 | Consider documentation-as-code tools: Instead of building a custom framework, you might leverage existing tools like MkDocs, Docusaurus, or even GitHub Pages that handle much of this complexity for you.
20 | Right-size for your team: The complexity of your documentation system should match your team size and project complexity. For smaller teams or projects, simpler is almost always better.
21 | 
22 | Is there a specific pain point or use case that led you to develop such a comprehensive documentation framework? Understanding that might help identify what parts are essential to keep.
23 | 
24 | 
25 | 
26 | Or better yet let's say for example, What would be the best approach to give this type of data to a model Where it's not necessarily organized like a typical structure but thereby file type word basically all the rules within this set?
27 | 
28 | 
29 | 
30 | Looking at your WizTree visualization, I see you have a project with various file types (.md, .log, .js, .json, .ts, etc.) organized in a flat directory structure. This is an interesting question about how to represent this kind of file-type-based organization to a model.
31 | Let me suggest a few approaches for providing this type of data to a model:
32 | 1. File Type Manifest
33 | Create a structured representation that groups files by their type while preserving essential metadata:File Type Manifest FormatClick to open codeTap to open2. Embedded File Content Approach
34 | If you need to provide both the organization AND the content of files to a model:File Content Manifest FormatClick to open codeTap to open3. Graph Representation
35 | For more complex relationships between files:Graph-Based File Relationship FormatClick to open codeTap to openPractical Implementation
36 | For your specific scenario, here's what I recommend:
37 | 
38 | Use a file type taxonomy approach - Since your primary organization seems to be by file type rather than by logical components or features
39 | Include metadata at multiple levels:
40 | 
41 | Project-level stats (total size, file counts)
42 | File-type level stats (counts per type, relative percentages)
43 | File-level details (paths, sizes, last modified)
44 | 
45 | 
46 | Consider embedding content for key files - If the content is important for the model to process, include the full content of important files directly
47 | Use a format that the model is comfortable with:
48 | 
49 | JSON is generally well-understood by models
50 | JSONL can be good for large datasets where you might stream entries
51 | YAML provides good readability if that's important
52 | 
53 | 
54 | 
55 | Would one of these approaches align well with what you're trying to accomplish? I can refine the structure further based on your specific use case.
56 | 
57 | 
58 | Well technically this is the remnants of an old project that I scrapped but had a lot of good ideas in it and I want to pull those out and start out fresh
59 | 
60 | 
61 | 
62 | I see - you're looking to mine your old project for valuable ideas while starting fresh. That's a smart approach! In that case, here's how I'd suggest extracting the good ideas efficiently:
63 | Strategy for Mining Old Project Ideas
64 | 
65 | Identify Key Documents First: Based on your WizTree visualization, your Markdown files (520 files, 38.9% of the project) are likely to contain the most explicit design ideas and documentation. Start there.
66 | Create an Ideas Extraction Document: Build a simple document to collect and organize the valuable concepts you find:
67 | OSPAIN2 Ideas Extraction TemplateClick to open documentTap to open
68 | Systematic Review Process:
69 | 
70 | Focus on key file types in order: .md first (documentation), then .ts/.js (implementation)
71 | Look for comments indicating especially valuable code sections
72 | Examine most recently modified files first (they likely contain your latest thinking)
73 | 
74 | 
75 | Focus on Conceptual Ideas Rather Than Implementation Details:
76 | 
77 | The goal is to capture the good ideas, not the exact implementation
78 | Look for patterns, architectural decisions, and design principles that worked well
79 | 
80 | 
81 | Consider Using Tools for Analysis:
82 | 
83 | Code search tools like ripgrep can help you find specific concepts across the codebase
84 | For example: rg "TODO" --type md to find all TODO items in markdown files
85 | 
86 | 
87 | Create a Clean Break:
88 | 
89 | As you extract ideas, maintain a clear separation between old and new projects
90 | Consider creating a new repo immediately to start implementing the best ideas in a clean environment
91 | 
92 | 
93 | 
94 | For the documentation specifically, your initial instinct was correct - the system appears overengineered. When you rebuild, I'd suggest starting with a minimal documentation approach that focuses on actual developer needs rather than process formality.
95 | Would you like me to suggest a simplified documentation framework to replace the overengineered one from your old project?
96 | 
97 | 
98 | yes, As if possible suggest any prebuilt tools already for things that I'm already doing or things that can do things like I'm trying to do
99 | 
100 | 
101 | Absolutely! Here are some excellent pre-built tools that can replace your custom documentation framework and other common development needs:
102 | 
103 | ## Documentation Tools
104 | 
105 | 1. **MkDocs** - Simple but powerful static site generator for project documentation
106 |    - **Features**: Markdown-based, themes, search, navigation
107 |    - **Advantage**: Minimal setup with great output, YAML configuration
108 |    - **Use case**: Perfect for project documentation with clear organization
109 | 
110 | 2. **Docusaurus** - Facebook's documentation generator
111 |    - **Features**: React-based, versioning, MDX support
112 |    - **Advantage**: Modern look and feel, great for large projects
113 |    - **Use case**: When you need versioned docs or more interactivity
114 | 
115 | 3. **GitBook** - Documentation platform with a modern UI
116 |    - **Features**: Easy collaboration, versioning, integrations
117 |    - **Advantage**: Clean UI, minimal setup
118 |    - **Use case**: When non-technical team members need to contribute
119 | 
120 | ## Project Organization & Knowledge Management
121 | 
122 | 1. **Obsidian** - Knowledge base that works on local Markdown files
123 |    - **Features**: Graph visualization, backlinks, plugins
124 |    - **Advantage**: Works with plain text files, future-proof
125 |    - **Use case**: Capturing project ideas and interconnections
126 | 
127 | 2. **Notion** - All-in-one workspace
128 |    - **Features**: Databases, docs, kanban boards
129 |    - **Advantage**: Flexible organization, good collaboration
130 |    - **Use case**: Team documentation with varied content types
131 | 
132 | ## Code Organization & Quality
133 | 
134 | 1. **ESLint/TSLint** - For code standards instead of documenting them
135 |    - **Features**: Enforce coding standards automatically
136 |    - **Advantage**: Automated enforcement beats documentation
137 |    - **Use case**: Replaces lengthy code style documentation
138 | 
139 | 2. **Storybook** - For component documentation
140 |    - **Features**: Interactive component browser, docs
141 |    - **Advantage**: Living documentation for UI components
142 |    - **Use case**: Better than static docs for frontend components
143 | 
144 | ## Project Management
145 | 
146 | 1. **GitHub Projects** or **Jira** - For task tracking
147 |    - **Features**: Issues, milestones, boards
148 |    - **Advantage**: Integrates with your code
149 |    - **Use case**: Replaces custom horizon tracking systems
150 | 
151 | ## Simplified Documentation Approach
152 | 
153 | Instead of your complex framework, I'd recommend this simplified structure:
154 | 
155 | This approach gives you the benefits of structured documentation without the overhead of your previous system. By leveraging existing tools rather than building custom frameworks, you'll save significant time and gain more powerful features.
156 | 
157 | Would you like me to elaborate on any specific tool or approach mentioned? Or would you prefer recommendations for other aspects of your project organization?
158 | 
159 | 
160 | So what ideas should I scrap
161 | 
162 | 
163 | Based on what I've seen in your documentation standards framework and project structure, here are the ideas I recommend scrapping:
164 | 
165 | 1. **Complex Metadata System**: Drop the extensive metadata fields (status, author, horizon, development mode, related documents). Keep only what's vital - perhaps just title, last updated, and status.
166 | 
167 | 2. **Four-Tier Directory Structure**: The vision/specs/implementation/operations hierarchy is overly compartmentalized. A flatter structure with fewer divisions will be more practical.
168 | 
169 | 3. **Formal Data Models for Documents**: The TypeScript interfaces for document metadata are unnecessary overhead unless you're building automation around them.
170 | 
171 | 4. **Horizon Integration**: This appears to add complexity without clear benefits. Standard project management tools will handle prioritization better.
172 | 
173 | 5. **Excessive Process Documentation**: Sections on security considerations, performance, monitoring, testing, deployment, and rollback plans for documentation are overkill.
174 | 
175 | 6. **Master Todo List**: Replace with standard issue tracking in GitHub/GitLab/Jira.
176 | 
177 | 7. **Custom Template System**: Instead of building your own, use existing documentation generators' templating capabilities.
178 | 
179 | 8. **Highly Formal Document Relationships**: The rigid cross-referencing system adds overhead. Let organic linking happen where needed.
180 | 
181 | 9. **Document Version Control Process**: Git already handles this; additional processes are redundant.
182 | 
183 | 10. **Development Mode Tracking**: This adds complexity without clear benefit for most projects.
184 | 
185 | The core idea to keep from your approach is having structured, consistent documentation - just implement it using existing tools rather than a custom framework. MkDocs or Docusaurus will give you most of what you need with minimal setup.
186 | 
187 | 
188 | 
189 | 
190 | We'll continue topics of computer science machine learning ai everything in that realm what kind of topic should I look into to understand architecture or system design or whatever this is called better
191 | 
192 | 
193 | For understanding architecture and system design in the context of AI, machine learning, and computer science, I'd recommend exploring these key areas:
194 | 
195 | Systems Design for AI Applications
196 | 
197 | Distributed systems principles applied to ML
198 | Scaling considerations for training and inference
199 | Resource management for compute-intensive workloads
200 | 
201 | 
202 | MLOps and ML System Architecture
203 | 
204 | CI/CD pipelines for ML models
205 | Feature stores and data management
206 | Model serving infrastructure
207 | Monitoring ML systems in production
208 | 
209 | 
210 | AI System Design Patterns
211 | 
212 | Event-driven architectures for real-time ML
213 | Model-as-a-service patterns
214 | Batch vs. streaming inference architectures
215 | Multi-model serving strategies
216 | 
217 | 
218 | Designing for AI-Specific Challenges
219 | 
220 | Handling model drift and retraining cycles
221 | Explainability and interpretability infrastructure
222 | Testing and validation frameworks for ML systems
223 | Resource optimization for large models
224 | 
225 | 
226 | Large Language Model Infrastructure
227 | 
228 | Deployment patterns for transformer models
229 | Efficient inference architectures
230 | Prompt engineering frameworks
231 | RAG (Retrieval Augmented Generation) system design
232 | 
233 | 
234 | 
235 | Some excellent resources to start with:
236 | 
237 | "Designing Machine Learning Systems" by Chip Huyen
238 | "Designing Data-Intensive Applications" by Martin Kleppmann
239 | Papers from tech companies on their ML infrastructure (e.g., Uber's Michelangelo, Facebook's PyTorch infrastructure)
240 | Stanford's CS329S: "Machine Learning Systems Design" course materials
241 | Google's ML system design case studies
242 | 
243 | This field is rapidly evolving, and understanding the intersection of traditional system design with ML-specific requirements will give you a solid foundation for building effective AI systems.
```

UniversalGuideForAI/InstructionGuideAI.md
```
1 | # Universal Instruction Guide for Scalable Development & AI Interaction
2 | 
3 | ## 1. General Principles for Project Structure & Development
4 | 
5 | - **Clarity & Simplicity**: Every project should prioritize readability and maintainability.
6 | - **Modular Design**: Break down code and logic into independent, reusable components.
7 | - **Minimalism & Efficiency**: Implement only what is necessary; avoid over-engineering.
8 | - **Consistency**: Adhere to a uniform coding style, naming conventions, and folder structures.
9 | - **Scalability**: Ensure the architecture allows for easy expansion without major rewrites.
10 | 
11 | ## 2. Codebase Organization Guidelines
12 | 
13 | - **Folder Structure:**
14 |   - `src/` - Main source code (organized by feature/module)
15 |   - `docs/` - Documentation & research materials
16 |   - `config/` - Configuration files (`.json`, `.yaml`, `.toml`)
17 |   - `scripts/` - Utility scripts (`.sh`, `.bat`, `.ps1`)
18 |   - `tests/` - Unit, integration, and system tests
19 |   - `logs/` - Log files and debugging artifacts
20 |   - `assets/` - Static files, images, and other media
21 | - **Version Control Best Practices:**
22 |   - Commit frequently with meaningful messages.
23 |   - Use feature branches for development.
24 |   - Keep the `main` branch stable and deployable.
25 | 
26 | ## 3. Automation & Tooling for Scalability
27 | 
28 | - **Automated File Sorting:**
29 |   - Use scripts to organize codebases automatically based on file types.
30 | - **Continuous Integration (CI/CD):**
31 |   - Automate testing and deployment pipelines.
32 | - **Documentation Automation:**
33 |   - Generate documentation from structured comments and docstrings.
34 | 
35 | ## 4. Best Practices for Development
36 | 
37 | - **Clean Code Principles:**
38 |   - Use meaningful variable and function names.
39 |   - Avoid deeply nested structures.
40 |   - Write functions that do one thing well.
41 | - **Documentation Standards:**
42 |   - Include inline comments where necessary.
43 |   - Maintain README files with installation, usage, and contribution guidelines.
44 | - **Error Handling:**
45 |   - Implement clear and actionable error messages.
46 |   - Use structured logging for debugging.
47 | 
48 | ## 5. Structuring Instructions for AI Models
49 | 
50 | - **Clear Formatting:**
51 |   - Use numbered or bulleted lists for step-by-step processes.
52 |   - Include relevant context without unnecessary information.
53 | - **Example Query Structure:**
54 |   ```
55 |   I have [problem statement]. I need a solution that includes:
56 |   1. [Specific Requirement 1]
57 |   2. [Specific Requirement 2]
58 |   3. [Additional Constraints or Considerations]
59 |   Please provide clear explanations and, if possible, an implementation example.
60 |   ```
61 | 
62 | ## 6. Ensuring Scalability & Adaptability
63 | 
64 | - **Reusable Code Components:**
65 |   - Develop utilities and libraries that can be repurposed across multiple projects.
66 | - **Configuration-Driven Development:**
67 |   - Externalize settings into `.json`, `.yaml`, or environment variables.
68 | - **Cross-Platform Compatibility:**
69 |   - Ensure scripts and tools work on multiple operating systems.
70 | 
71 | ## 7. Testing & Validation Process
72 | 
73 | - **Automated Testing Workflow:**
74 |   - Use unit tests (`pytest`, `Jest`, etc.) for core logic.
75 |   - Implement integration tests to verify module interactions.
76 |   - Run regression tests before major releases.
77 | - **Manual Verification Checklist:**
78 |   - Ensure documentation is up to date.
79 |   - Validate that all dependencies are correctly managed.
80 |   - Conduct security reviews for sensitive data handling.
81 | 
82 | ---
83 | 
84 | This guide serves as a **universal reference** for building structured, scalable, and AI-friendly projects. Adhering to these principles ensures efficiency, maintainability, and adaptability across different domains.
```

UniversalGuideForAI/Simplified Documentation Standards.md
```
1 | # Prompt: Create Simplified Documentation Standards
2 | 
3 | ## Context
4 | I need documentation standards for my software project that are lightweight, practical, and will actually get used by the team. Our current approach is overengineered with too many directories, excessive metadata, and formal structures that create unnecessary overhead.
5 | 
6 | ## Instructions
7 | Please create simplified documentation standards that:
8 | 
9 | 1. **Prioritize practicality** - Focus on what developers actually need day-to-day rather than theoretical completeness
10 | 
11 | 2. **Minimize structure overhead** - Suggest a flattened directory structure with at most 2-3 main categories
12 | 
13 | 3. **Reduce metadata requirements** - Include only essential fields that provide clear value (status, owner, last updated)
14 | 
15 | 4. **Emphasize maintainability** - Suggest approaches that make documentation easy to keep updated
16 | 
17 | 5. **Include lightweight templates** - Provide 2-3 flexible templates that cover the most common documentation needs
18 | 
19 | 6. **Integrate with development workflow** - Suggest ways to make documentation part of the natural development process rather than a separate activity
20 | 
21 | ## Tone and Approach
22 | - Be direct and concise
23 | - Prioritize solutions that require minimal effort to maintain
24 | - Focus on high-value documentation that directly supports development and operations
25 | - Suggest practical ways to encourage documentation adoption
26 | 
27 | ## Output Format
28 | Please provide:
29 | 1. A brief overview of the simplified approach
30 | 2. The recommended directory structure
31 | 3. 2-3 minimal documentation templates
32 | 4. Suggestions for workflow integration
33 | 5. Implementation steps for transitioning from our current approach
```

.cursor/rules/@cursorrules.mdc
```
1 | ---
2 | description: 
3 | globs: 
4 | alwaysApply: true
5 | ---
6 | Start each chat with 🤖 emoji
7 | 
8 | # Important Instructions
9 | 
10 | - Keep dependencies updated.
11 | - Follow TypeScript strict mode.
12 | - Maintain backward compatibility.
13 | - Document API changes.
14 | - Test cross-browser compatibility.
15 | 
16 | Proceed like a senior developer,
17 | Write the code with the fewest lines of code, the better,
18 | 
19 | During your interaction with the user, if you find anything reusable in this project (e.g. version of a library, model name), especially about a fix to a mistake you made or a correction you received, you should take note in the `Lessons` section in the `.cursorrules` file so you will not make the same mistake again. 
20 | 
21 | You should also use the `.cursorrules` file as a Scratchpad to organize your thoughts. Especially when you receive a new task, you should first review the content of the Scratchpad, clear old different task if necessary, first explain the task, and plan the steps you need to take to complete the task. You can use todo markers to indicate the progress, e.g.
22 | [X] Task 1
23 | [ ] Task 2
24 | 
25 | Also update the progress of the task in the Scratchpad when you finish a subtask.
26 | Especially when you finished a milestone, it will help to improve your depth of task accomplishment to use the Scratchpad to reflect and plan.
27 | The goal is to help you maintain a big picture as well as the progress of the task. Always refer to the Scratchpad when you plan the next step.
28 | 
29 | # Tools
30 | 
31 | Note all the tools are in python. So in the case you need to do batch processing, you can always consult the python files and write your own script.
32 | 
33 | ## Screenshot Verification
34 | 
35 | The screenshot verification workflow allows you to capture screenshots of web pages and verify their appearance using LLMs. The following tools are available:
36 | 
37 | 1. Screenshot Capture:
38 | ```bash
39 | venv/bin/python tools/screenshot_utils.py URL [--output OUTPUT] [--width WIDTH] [--height HEIGHT]
40 | ```
41 | 
42 | 2. LLM Verification with Images:
43 | ```bash
44 | venv/bin/python tools/llm_api.py --prompt "Your verification question" --provider {openai|anthropic} --image path/to/screenshot.png
45 | ```
46 | 
47 | Example workflow:
48 | ```python
49 | from screenshot_utils import take_screenshot_sync
50 | from llm_api import query_llm
51 | 
52 | # Take a screenshot
53 | 
54 | screenshot_path = take_screenshot_sync('https://example.com', 'screenshot.png')
55 | 
56 | # Verify with LLM
57 | 
58 | response = query_llm(
59 |     "What is the background color and title of this webpage?",
60 |     provider="openai",  # or "anthropic"
61 |     image_path=screenshot_path
62 | )
63 | print(response)
64 | ```
65 | 
66 | ## LLM
67 | 
68 | You always have an LLM at your side to help you with the task. For simple tasks, you could invoke the LLM by running the following command:
69 | ```
70 | venv/bin/python ./tools/llm_api.py --prompt "What is the capital of France?" --provider "anthropic"
71 | ```
72 | 
73 | The LLM API supports multiple providers:
74 | - OpenAI (default, model: gpt-4o)
75 | - Azure OpenAI (model: configured via AZURE_OPENAI_MODEL_DEPLOYMENT in .env file, defaults to gpt-4o-ms)
76 | - DeepSeek (model: deepseek-chat)
77 | - Anthropic (model: claude-3-sonnet-20240229)
78 | - Gemini (model: gemini-pro)
79 | - Local LLM (model: Qwen/Qwen2.5-32B-Instruct-AWQ)
80 | 
81 | But usually it's a better idea to check the content of the file and use the APIs in the `tools/llm_api.py` file to invoke the LLM if needed.
82 | 
83 | ## Web browser
84 | 
85 | You could use the `tools/web_scraper.py` file to scrape the web.
86 | ```
87 | venv/bin/python ./tools/web_scraper.py --max-concurrent 3 URL1 URL2 URL3
88 | ```
89 | This will output the content of the web pages.
90 | 
91 | ## Search engine
92 | 
93 | You could use the `tools/search_engine.py` file to search the web.
94 | ```
95 | venv/bin/python ./tools/search_engine.py "your search keywords"
96 | ```
97 | This will output the search results in the following format:
98 | ```
99 | URL: https://example.com
100 | Title: This is the title of the search result
101 | Snippet: This is a snippet of the search result
102 | ```
103 | If needed, you can further use the `web_scraper.py` file to scrape the web page content.
104 | 
105 | # Lessons
106 | 
107 | ## User Specified Lessons
108 | 
109 | - You have a python venv in ./venv. Use it.
110 | - Include info useful for debugging in the program output.
111 | - Read the file before you try to edit it.
112 | - Due to Cursor's limit, when you use `git` and `gh` and need to submit a multiline commit message, first write the message in a file, and then use `git commit -F <filename>` or similar command to commit. And then remove the file. Include "[Cursor] " in the commit message and PR title.
113 | - Answer in short.
114 | - Do not delete comments.
115 | - Do not stop working on until you've implemented this feature fully and completely.
116 | - Always include comments in your code. Use JSDoc for function documentation, keep comments clear and concise, and ensure they explain the "why" not just the "what".
117 | ## Cursor learned
118 | 
119 | - For search results, ensure proper handling of different character encodings (UTF-8) for international queries
120 | - Add debug information to stderr while keeping the main output clean in stdout for better pipeline integration
121 | - When using seaborn styles in matplotlib, use 'seaborn-v0_8' instead of 'seaborn' as the style name due to recent seaborn version changes
122 | - Use 'gpt-4o' as the model name for OpenAI's GPT-4 with vision capabilities
123 | 
124 | # Scratchpad
```

.cursor/rules/lang-graph.mdc
```
1 | ---
2 | description: 
3 | globs: 
4 | alwaysApply: true
5 | ---
6 | 
7 | for ANY question about LangGraph, use the langgraph-docs-mcp server to help answer -- 
8 | + call list_doc_sources tool to get the available llms.txt file
9 | + call fetch_docs tool to read it
10 | + reflect on the urls in llms.txt 
11 | + reflect on the input question 
12 | + call fetch_docs on any urls relevant to the question
13 | + use this to answer the question
```

.cursor/tasks/budget-optimization.mdc
```
1 | ---
2 | description: 
3 | globs: 
4 | alwaysApply: true
5 | ---
6 | # Budget Optimization Workarounds
7 | 
8 | ## Overview
9 | 
10 | **Priority**: P1  
11 | **Status**: NOT STARTED  
12 | **Tags**: #optimization #cost-reduction #performance #sustainability
13 | 
14 | This task focuses on researching and implementing cost-effective alternatives for resource-intensive operations within the Ollama ecosystem. The goal is to optimize resource usage, reduce operational costs, and maintain system performance while working within budget constraints.
15 | 
16 | ## Timeline
17 | 
18 | **Week 1**: Research and Strategy Development  
19 | **Week 2**: Implementation of Core Optimizations  
20 | **Week 3**: Integration and Monitoring
21 | 
22 | ## Detailed Description
23 | 
24 | The Budget Optimization project aims to identify and implement various strategies for reducing operational costs while maintaining system functionality. This includes developing local alternatives for expensive services, implementing intelligent caching, and creating monitoring tools for resource usage.
25 | 
26 | ### Core Components
27 | 
28 | #### 1. Resource Usage Analysis
29 | 
30 | - **API Cost Analysis**
31 |   - Token usage patterns
32 |   - Request frequency analysis
33 |   - Cost per operation metrics
34 |   - Peak usage identification
35 |   - Resource bottleneck detection
36 | 
37 | - **Service Cost Mapping**
38 |   - Service dependency analysis
39 |   - Cost breakdown by component
40 |   - Usage pattern identification
41 |   - Alternative service research
42 |   - ROI calculation for optimizations
43 | 
44 | - **Resource Utilization Metrics**
45 |   - CPU/Memory profiling
46 |   - Network bandwidth analysis
47 |   - Storage usage patterns
48 |   - Cache hit/miss ratios
49 |   - Concurrent operation impact
50 | 
51 | #### 2. Optimization Strategies
52 | 
53 | - **Caching System**
54 |   - Multi-level cache architecture
55 |   - Intelligent cache invalidation
56 |   - Predictive caching
57 |   - Cache sharing mechanisms
58 |   - Storage optimization
59 | 
60 | - **Local Alternatives**
61 |   - Local model deployment
62 |   - Offline processing capabilities
63 |   - Resource pooling system
64 |   - Load balancing mechanisms
65 |   - Fallback strategies
66 | 
67 | - **Token Optimization**
68 |   - Prompt optimization
69 |   - Response length control
70 |   - Batch processing
71 |   - Context window management
72 |   - Model selection optimization
73 | 
74 | #### 3. Monitoring and Control
75 | 
76 | - **Budget Dashboard**
77 |   - Real-time cost tracking
78 |   - Usage forecasting
79 |   - Alert mechanisms
80 |   - Cost breakdown views
81 |   - Optimization recommendations
82 | 
83 | - **Resource Controls**
84 |   - Rate limiting
85 |   - Usage quotas
86 |   - Priority queuing
87 |   - Cost thresholds
88 |   - Automatic scaling rules
89 | 
90 | ## Implementation Plan
91 | 
92 | ### Week 1: Research and Strategy
93 | 
94 | - [ ] Analyze current resource usage patterns
95 |   - [ ] API call frequency
96 |   - [ ] Token consumption
97 |   - [ ] Storage utilization
98 |   - [ ] Network bandwidth
99 |   - [ ] Processing overhead
100 | 
101 | - [ ] Research optimization techniques
102 |   - [ ] Caching strategies
103 |   - [ ] Local processing options
104 |   - [ ] Resource pooling methods
105 |   - [ ] Load balancing approaches
106 |   - [ ] Compression techniques
107 | 
108 | - [ ] Design optimization architecture
109 |   - [ ] Cache layer design
110 |   - [ ] Local service architecture
111 |   - [ ] Monitoring system design
112 |   - [ ] Control mechanism specification
113 |   - [ ] Integration points
114 | 
115 | ### Week 2: Core Implementation
116 | 
117 | - [ ] Implement caching system
118 |   - [ ] Multi-level cache structure
119 |   - [ ] Cache management logic
120 |   - [ ] Invalidation strategies
121 |   - [ ] Storage optimization
122 |   - [ ] Cache sharing protocols
123 | 
124 | - [ ] Develop local alternatives
125 |   - [ ] Local model deployment
126 |   - [ ] Offline processing system
127 |   - [ ] Resource pooling
128 |   - [ ] Load balancer
129 |   - [ ] Fallback handlers
130 | 
131 | - [ ] Create token optimization system
132 |   - [ ] Prompt optimization engine
133 |   - [ ] Response control mechanisms
134 |   - [ ] Batch processing system
135 |   - [ ] Context management
136 |   - [ ] Model selection logic
137 | 
138 | ### Week 3: Integration and Monitoring
139 | 
140 | - [ ] Implement monitoring system
141 |   - [ ] Cost tracking
142 |   - [ ] Usage analytics
143 |   - [ ] Performance metrics
144 |   - [ ] Alert system
145 |   - [ ] Reporting tools
146 | 
147 | - [ ] Develop control mechanisms
148 |   - [ ] Rate limiters
149 |   - [ ] Usage quotas
150 |   - [ ] Priority queue
151 |   - [ ] Cost controls
152 |   - [ ] Auto-scaling rules
153 | 
154 | - [ ] Create visualization and reporting
155 |   - [ ] Budget dashboard
156 |   - [ ] Usage graphs
157 |   - [ ] Cost projections
158 |   - [ ] Optimization insights
159 |   - [ ] ROI calculations
160 | 
161 | ## Dependencies
162 | 
163 | - TokenManager
164 | - Knowledge Graph
165 | - Local Model System
166 | - Monitoring Framework
167 | - Cache Infrastructure
168 | - Resource Controller
169 | 
170 | ## Success Metrics
171 | 
172 | ### Cost Reduction
173 | - Overall cost reduction >30%
174 | - API call reduction >40%
175 | - Storage optimization >25%
176 | - Bandwidth reduction >20%
177 | - Processing cost reduction >35%
178 | 
179 | ### Performance Impact
180 | - Response time increase <10%
181 | - Cache hit ratio >80%
182 | - System availability >99.9%
183 | - Error rate increase <1%
184 | - Resource utilization <70%
185 | 
186 | ### User Experience
187 | - Transparent optimization
188 | - Minimal latency impact
189 | - Reliable service delivery
190 | - Clear cost visibility
191 | - Easy configuration
192 | 
193 | ## Risk Mitigation
194 | 
195 | ### Technical Risks
196 | - **Cache Coherence**: Implement robust invalidation
197 | - **Service Reliability**: Maintain fallback options
198 | - **Performance Degradation**: Monitor and adjust thresholds
199 | - **Data Consistency**: Implement validation checks
200 | 
201 | ### Operational Risks
202 | - **Cost Spikes**: Set up alerting and auto-scaling
203 | - **Service Disruption**: Implement graceful degradation
204 | - **Resource Exhaustion**: Monitor and adjust limits
205 | - **Integration Issues**: Thorough testing and rollback plans
206 | 
207 | ## Research Notes
208 | 
209 | ### Caching Strategies
210 | 
211 | | Strategy | Pros | Cons | Cost Impact |
212 | |----------|------|------|-------------|
213 | | Memory Cache | Fast access | Limited size | Medium savings |
214 | | Disk Cache | Large capacity | Slower access | High savings |
215 | | Distributed Cache | Scalable | Complex | Very high savings |
216 | | Hybrid Cache | Balanced | Management overhead | High savings |
217 | 
218 | ### Local Alternatives
219 | 
220 | | Service Type | Local Option | Implementation Complexity | Cost Reduction |
221 | |-------------|--------------|-------------------------|----------------|
222 | | Text Generation | Local LLM | High | Very High |
223 | | Embeddings | Local Models | Medium | High |
224 | | Vector Search | FAISS/Annoy | Low | High |
225 | | Image Processing | OpenCV | Medium | Medium |
226 | 
227 | ## Integration Points
228 | 
229 | ### Cache Management Interface
230 | 
231 | ```typescript
232 | interface CacheManager {
233 |   get(key: string, options?: CacheOptions): Promise<CachedData>;
234 |   set(key: string, data: any, options?: CacheOptions): Promise<void>;
235 |   invalidate(pattern: string): Promise<void>;
236 |   getStats(): Promise<CacheStats>;
237 |   optimize(): Promise<OptimizationResult>;
238 | }
239 | 
240 | interface CacheOptions {
241 |   ttl?: number;
242 |   priority?: 'high' | 'medium' | 'low';
243 |   compression?: boolean;
244 |   layer?: 'memory' | 'disk' | 'distributed';
245 | }
246 | ```
247 | 
248 | ### Resource Control Interface
249 | 
250 | ```typescript
251 | interface ResourceController {
252 |   checkQuota(resource: string): Promise<QuotaStatus>;
253 |   trackUsage(resource: string, amount: number): Promise<void>;
254 |   getUsageMetrics(timeframe: Timeframe): Promise<UsageMetrics>;
255 |   setThresholds(thresholds: ResourceThresholds): Promise<void>;
256 |   optimizeResource(resource: string): Promise<OptimizationResult>;
257 | }
258 | 
259 | interface QuotaStatus {
260 |   available: boolean;
261 |   remainingQuota: number;
262 |   resetTime?: Date;
263 |   recommendations: OptimizationSuggestion[];
264 | }
265 | ```
266 | 
267 | ### Cost Tracking Interface
268 | 
269 | ```typescript
270 | interface CostTracker {
271 |   recordOperation(operation: Operation): Promise<void>;
272 |   getCosts(timeframe: Timeframe): Promise<CostBreakdown>;
273 |   forecast(days: number): Promise<CostForecast>;
274 |   getOptimizationInsights(): Promise<OptimizationInsights>;
275 |   setAlerts(alerts: CostAlert[]): Promise<void>;
276 | }
277 | 
278 | interface Operation {
279 |   type: string;
280 |   resource: string;
281 |   cost: number;
282 |   timestamp: Date;
283 |   metadata: Record<string, any>;
284 | }
285 | ```
286 | 
287 | ## References
288 | 
289 | - [Token Management Guide](mdc:OSPAiN2/OSPAiN2/docs/token_management.md)
290 | - [Caching Architecture](mdc:OSPAiN2/OSPAiN2/docs/caching_architecture.md)
291 | - [Resource Optimization Patterns](mdc:OSPAiN2/OSPAiN2/docs/optimization_patterns.md)
292 | - [Cost Control Guidelines](mdc:OSPAiN2/OSPAiN2/docs/cost_control.md)
293 | - [Performance Monitoring Guide](mdc:OSPAiN2/OSPAiN2/docs/performance_monitoring.md) 
```

.cursor/tasks/cli-voice-integration.mdc
```
1 | ---
2 | description: 
3 | globs: 
4 | alwaysApply: true
5 | ---
6 | # CLI Voice Integration Task
7 | 
8 | ## Overview
9 | 
10 | **Priority**: P1  
11 | **Status**: NOT STARTED  
12 | **Tags**: #integration #voice #cli #llm #memory
13 | 
14 | This task focuses on integrating complete control through the CLI engine, including LLM integration with memory and knowledge base controls via text support and text-to-speech (TTS) capabilities.
15 | 
16 | ## Timeline
17 | 
18 | **Week 1**: Research and Architecture  
19 | **Week 2**: Core Implementation  
20 | **Week 3**: Integration and Testing
21 | 
22 | ## Detailed Description
23 | 
24 | The CLI Voice Integration will enable users to interact with the Ollama ecosystem through voice commands and receive spoken responses, while maintaining the context awareness and memory capabilities of the existing system. This integration will leverage the existing Tag System and Contextual Awareness Engine to provide a seamless experience across text and voice interfaces.
25 | 
26 | ### Core Components
27 | 
28 | #### 1. Speech Recognition Integration
29 | 
30 | - **Primary Option**: Whisper running locally via Ollama
31 |   - Implement Python wrapper with WebSocket streaming for real-time transcription
32 |   - Add support for wake word detection
33 |   - Create fallback options using Web Speech API or Vosk
34 | 
35 | #### 2. Text-to-Speech Engine
36 | 
37 | - **Primary Options**:
38 |   - Piper - Offline TTS with natural voices
39 |   - Coqui TTS - Local high-quality voices
40 | - **Integration Pattern**:
41 |   - Implement as a service with RESTful and WebSocket APIs
42 |   - Cache common responses for performance
43 |   - Support voice customization per application
44 | 
45 | #### 3. CLI Command Extensions
46 | 
47 | - Add voice-specific commands to the existing CLI
48 | - Implement streaming audio input/output
49 | - Create configuration options for voice settings
50 | - Add support for voice profiles and customization
51 | 
52 | #### 4. Memory and Knowledge Base Integration
53 | 
54 | - Extend the Context Router to handle voice interactions
55 | - Implement memory-enhanced voice commands
56 | - Create voice-specific context tracking
57 | - Add support for voice-based learning and feedback
58 | 
59 | ## Integration Points
60 | 
61 | ### 1. Ollama Tag CLI Integration
62 | 
63 | ```typescript
64 | // Example CLI command structure
65 | program
66 |   .command('voice')
67 |   .description('Voice interaction with Ollama')
68 |   .option('-l, --listen', 'Listen for voice commands')
69 |   .option('-s, --speak <text>', 'Speak the provided text')
70 |   .option('-w, --wake-word <word>', 'Set custom wake word')
71 |   .option('-m, --model <model>', 'Set TTS/STT model')
72 |   .option('--memory', 'Enable memory enhancement')
73 |   .action(async (options) => {
74 |     // Implementation
75 |   });
76 | ```
77 | 
78 | ### 2. Context Router Enhancement
79 | 
80 | ```typescript
81 | // Add voice context to the Context Router
82 | contextRouter.addVoiceContext({
83 |   voiceProfile: 'default',
84 |   speakingRate: 1.0,
85 |   voiceType: 'female',
86 |   lastInteraction: Date.now()
87 | });
88 | ```
89 | 
90 | ### 3. Voice Command Framework
91 | 
92 | ```json
93 | {
94 |   "voice_task": {
95 |     "name": "process_voice_command",
96 |     "config": {
97 |       "wake_words": ["hey ollama", "computer", "assistant"],
98 |       "listening_timeout": 10,
99 |       "confidence_threshold": 0.75
100 |     },
101 |     "steps": [
102 |       {
103 |         "name": "listen_for_command",
104 |         "operator": "listen",
105 |         "args": {
106 |           "duration": 5
107 |         },
108 |         "returns": "audio_input"
109 |       },
110 |       {
111 |         "name": "transcribe_command",
112 |         "operator": "transcribe",
113 |         "args": {
114 |           "audio": "$audio_input",
115 |           "model": "whisper"
116 |         },
117 |         "returns": "text_command"
118 |       },
119 |       {
120 |         "name": "detect_intent",
121 |         "operator": "llm",
122 |         "args": {
123 |           "prompt": "Determine the user intent from: $text_command",
124 |           "model": "llama3.2:8b"
125 |         },
126 |         "returns": "intent"
127 |       },
128 |       {
129 |         "name": "route_to_application",
130 |         "operator": "router",
131 |         "args": {
132 |           "intent": "$intent",
133 |           "routes": {
134 |             "home_control": "ollama_home_control_workflow",
135 |             "knowledge_query": "ollama_hub_workflow",
136 |             "assistant": "ollama_voice_workflow"
137 |           }
138 |         },
139 |         "returns": "application_response"
140 |       },
141 |       {
142 |         "name": "speak_response",
143 |         "operator": "speak",
144 |         "args": {
145 |           "text": "$application_response",
146 |           "voice": "en_female_1"
147 |         }
148 |       }
149 |     ]
150 |   }
151 | }
152 | ```
153 | 
154 | ## Implementation Plan
155 | 
156 | ### Week 1: Research and Architecture
157 | 
158 | - [ ] Research and evaluate TTS options (Piper, Coqui TTS)
159 | - [ ] Research and evaluate STT options (Whisper, Web Speech API, Vosk)
160 | - [ ] Design CLI command structure for voice interactions
161 | - [ ] Create architecture diagram for voice integration
162 | - [ ] Define API contracts for voice services
163 | - [ ] Evaluate hardware requirements and limitations
164 | 
165 | ### Week 2: Core Implementation
166 | 
167 | - [ ] Implement Speech Recognition service
168 | - [ ] Implement Text-to-Speech service
169 | - [ ] Create CLI command extensions
170 | - [ ] Implement WebSocket streaming for audio
171 | - [ ] Add configuration options for voice settings
172 | - [ ] Create voice profile management
173 | 
174 | ### Week 3: Integration and Testing
175 | 
176 | - [ ] Integrate with Context Router
177 | - [ ] Implement memory-enhanced voice commands
178 | - [ ] Add voice-specific context tracking
179 | - [ ] Create voice-based learning and feedback
180 | - [ ] Test with various hardware configurations
181 | - [ ] Optimize performance and reduce latency
182 | - [ ] Document usage and configuration options
183 | 
184 | ## Dependencies
185 | 
186 | - Ollama Tag CLI
187 | - Context Router
188 | - Memory Service
189 | - Knowledge Graph MCP Server
190 | - Python environment for TTS/STT libraries
191 | - WebSocket server for streaming audio
192 | 
193 | ## Success Metrics
194 | 
195 | - Voice commands are accurately transcribed (>90% accuracy)
196 | - TTS output is natural and clear
197 | - Context is maintained across voice interactions
198 | - Memory enhancement improves response quality over time
199 | - CLI commands work seamlessly with voice input/output
200 | - System works offline without internet connectivity
201 | - Low latency (<1s) for voice responses
202 | 
203 | ## Risk Mitigation
204 | 
205 | - **Hardware Compatibility**: Test with various microphone/speaker setups
206 | - **Performance**: Implement caching and optimization for low-latency responses
207 | - **Privacy**: Ensure all processing happens locally without data leaving the system
208 | - **Fallback Mechanisms**: Provide text-based fallbacks for all voice features
209 | - **Accessibility**: Support multiple languages and accents
210 | 
211 | ## Research Notes
212 | 
213 | ### TTS Options Comparison
214 | 
215 | | Engine | Pros | Cons | Integration Complexity |
216 | |--------|------|------|------------------------|
217 | | Piper | Offline, natural voices | Limited voice options | Medium |
218 | | Coqui TTS | High quality, customizable | Resource intensive | High |
219 | | Browser TTS | Easy integration | Internet required | Low |
220 | 
221 | ### STT Options Comparison
222 | 
223 | | Engine | Pros | Cons | Integration Complexity |
224 | |--------|------|------|------------------------|
225 | | Whisper | High accuracy, offline | Resource intensive | Medium |
226 | | Web Speech API | Easy integration | Internet required | Low |
227 | | Vosk | Lightweight, offline | Lower accuracy | Medium |
228 | 
229 | ## References
230 | 
231 | - [Voice Integration for Ollama Ecosystem](mdc:OSPAiN2/docs/voice_integration.md)
232 | - [Ollama Ecosystem Design Schematics](mdc:OSPAiN2/docs/design_schematics.md)
233 | - [Contextual Awareness Engine](mdc:OSPAiN2/docs/contextual_awareness_engine.md)
234 | - [Tag System Guidelines](mdc:OSPAiN2/docs/tag_system_guidelines.md) 
```

.cursor/tasks/extension-tasks.mdc
```
1 | ---
2 | description: 
3 | globs: 
4 | alwaysApply: true
5 | ---
6 | # VSCode/Cursor Extension Development Tasks
7 | 
8 | ## AI Misconception Tracking Extension
9 | 
10 | ### Overview
11 | Status: 🔴 Not Started
12 | Priority: P1
13 | Category: Development Tools
14 | Dependencies: 
15 |   - VSCode Extension API
16 |   - AI Misconception Tracking System
17 |   - Knowledge Graph System
18 |   - System Health Monitor
19 | 
20 | ### Core Components
21 | 
22 | #### 1. Extension Foundation
23 | - [ ] Set up development environment
24 |   - [ ] Install VSCode extension development tools
25 |   - [ ] Configure TypeScript and build system
26 |   - [ ] Set up testing framework
27 |   - [ ] Create development workflow
28 | 
29 | - [ ] Create extension manifest
30 |   - [ ] Define extension metadata
31 |   - [ ] Configure activation events
32 |   - [ ] Set up command contributions
33 |   - [ ] Define extension settings
34 | 
35 | #### 2. Core Features
36 | - [ ] Real-time Analysis Engine
37 |   - [ ] Implement code analysis pipeline
38 |   - [ ] Create pattern matching system
39 |   - [ ] Build feedback generation
40 |   - [ ] Set up performance monitoring
41 | 
42 | - [ ] Misconception Detection
43 |   - [ ] Implement detection patterns
44 |   - [ ] Create analysis rules
45 |   - [ ] Build confidence scoring
46 |   - [ ] Set up pattern learning
47 | 
48 | #### 3. Integration Layer
49 | - [ ] System Connections
50 |   - [ ] Connect to Knowledge Graph
51 |   - [ ] Link with System Health Monitor
52 |   - [ ] Integrate Documentation Enforcer
53 |   - [ ] Set up WebSocket communication
54 | 
55 | - [ ] Data Management
56 |   - [ ] Implement caching system
57 |   - [ ] Create data persistence
58 |   - [ ] Set up sync mechanisms
59 |   - [ ] Build backup system
60 | 
61 | #### 4. User Interface
62 | - [ ] Extension UI
63 |   - [ ] Design feedback panel
64 |   - [ ] Create settings interface
65 |   - [ ] Build notification system
66 |   - [ ] Implement status indicators
67 | 
68 | - [ ] Interactive Features
69 |   - [ ] Add real-time feedback
70 |   - [ ] Create quick-fix actions
71 |   - [ ] Implement context menus
72 |   - [ ] Build command palette integration
73 | 
74 | ### Success Metrics
75 | 
76 | #### Performance
77 | - Extension load time: < 1s
78 | - Analysis latency: < 100ms
79 | - Memory usage: < 100MB
80 | - CPU impact: < 5%
81 | 
82 | #### Quality
83 | - Detection accuracy: > 90%
84 | - False positive rate: < 5%
85 | - User satisfaction: > 90%
86 | - Crash rate: < 0.1%
87 | 
88 | ### Implementation Notes
89 | 
90 | #### Development Guidelines
91 | - Follow VSCode extension best practices
92 | - Ensure cross-platform compatibility
93 | - Implement offline capabilities
94 | - Focus on performance optimization
95 | - Support both VSCode and Cursor environments
96 | 
97 | #### Technical Requirements
98 | - TypeScript for extension code
99 | - WebView for complex UI
100 | - WebSocket for real-time updates
101 | - Local storage for caching
102 | - Secure communication channels
103 | 
104 | #### Testing Strategy
105 | - Unit tests for core logic
106 | - Integration tests for system connections
107 | - UI tests for interface components
108 | - Performance testing under load
109 | - Cross-platform compatibility testing
110 | 
111 | ### Timeline
112 | 1. Foundation Phase: 1 week
113 | 2. Core Features: 2 weeks
114 | 3. Integration: 1 week
115 | 4. UI Development: 1 week
116 | 5. Testing & Optimization: 1 week
117 | 
118 | ### Dependencies
119 | - VSCode Extension API
120 | - AI Misconception Tracking System
121 | - Knowledge Graph System
122 | - System Health Monitor
123 | - WebSocket Server
124 | - Local Storage System
125 | 
126 | ### Next Steps
127 | 1. Set up development environment
128 | 2. Create extension manifest
129 | 3. Implement basic extension structure
130 | 4. Begin core feature development 
```

.cursor/tasks/integration-tasks.mdc
```
1 | ---
2 | description: 
3 | globs: 
4 | alwaysApply: true
5 | ---
6 | # Integration Tasks
7 | 
8 | ## Priority: P1
9 | Status: 🔴 Not Started
10 | Horizon: H1
11 | 
12 | ### Timeline Overview
13 | Week 1: Visualization System Integration
14 | Week 2: Documentation Automation
15 | Week 3: Health Monitoring Enhancement
16 | 
17 | ### 1. Visualization System Integration
18 | Status: 🔴 Not Started
19 | Timeline: Week 1
20 | Dependencies: Feature Visualization System, AI Misconception Tracking System, Component Absorption System
21 | 
22 | #### Phase 1: Misconception Pattern Visualization (Days 1-2)
23 | - [ ] Create visualization for misconception patterns
24 |   - Implement 3D graph view for pattern relationships
25 |   - Add real-time pattern detection visualization
26 |   - Create filtering and analysis tools
27 |   - Dependencies: Feature Visualization System, AI Misconception Tracking System
28 | 
29 | #### Phase 2: Component Absorption Visualization (Days 3-4)
30 | - [ ] Integrate Component Absorption Visualization
31 |   - Create 3D view of component relationships
32 |   - Implement component status tracking
33 |   - Add dependency visualization
34 |   - Dependencies: Feature Visualization System, Component Absorption System
35 | 
36 | #### Phase 3: System Health Visualization (Days 5)
37 | - [ ] Add System Health Visualization
38 |   - Create health status dashboard
39 |   - Implement real-time monitoring view
40 |   - Add alert visualization
41 |   - Dependencies: Feature Visualization System, System Health Monitor
42 | 
43 | ### 2. Documentation Automation
44 | Status: 🔴 Not Started
45 | Timeline: Week 2
46 | Dependencies: Documentation Enforcer, Component Absorption System, AI Misconception Tracking System
47 | 
48 | #### Phase 1: Component Documentation (Days 1-2)
49 | - [ ] Component Absorption Documentation
50 |   - Create automated documentation generator
51 |   - Implement template integration
52 |   - Add validation rules
53 |   - Dependencies: Documentation Enforcer, Component Absorption System
54 | 
55 | #### Phase 2: Misconception Documentation (Days 3-4)
56 | - [ ] AI Misconception Documentation
57 |   - Create misconception report generator
58 |   - Implement pattern documentation
59 |   - Add learning outcome tracking
60 |   - Dependencies: Documentation Enforcer, AI Misconception Tracking System
61 | 
62 | #### Phase 3: Visualization Documentation (Day 5)
63 | - [ ] Visualization System Documentation
64 |   - Create visualization documentation generator
65 |   - Implement view documentation
66 |   - Add interaction documentation
67 |   - Dependencies: Documentation Enforcer, Feature Visualization System
68 | 
69 | ### 3. Health Monitoring Enhancement
70 | Status: 🔴 Not Started
71 | Timeline: Week 3
72 | Dependencies: System Health Monitor, Feature Visualization System
73 | 
74 | #### Phase 1: Performance Monitoring (Days 1-2)
75 | - [ ] Visualization System Health Checks
76 |   - Implement performance monitoring
77 |   - Add resource usage tracking
78 |   - Create health alerts
79 |   - Dependencies: System Health Monitor, Feature Visualization System
80 | 
81 | #### Phase 2: Integration Testing (Days 3-4)
82 | - [ ] End-to-End Integration Testing
83 |   - Test all visualization components
84 |   - Verify documentation automation
85 |   - Validate health monitoring
86 |   - Dependencies: All integrated systems
87 | 
88 | #### Phase 3: Documentation and Handover (Day 5)
89 | - [ ] Final Documentation and Handover
90 |   - Complete integration documentation
91 |   - Create handover guide
92 |   - Document monitoring procedures
93 |   - Dependencies: Documentation Enforcer
94 | 
95 | ## Success Criteria
96 | 1. All visualization components successfully integrated and functioning
97 | 2. Documentation automation working for all systems
98 | 3. Health monitoring providing real-time insights
99 | 4. All integration tests passing
100 | 5. Complete documentation and handover materials
101 | 
102 | ## Risk Mitigation
103 | 1. Regular backups of existing systems
104 | 2. Staged integration approach
105 | 3. Comprehensive testing at each phase
106 | 4. Clear rollback procedures
107 | 5. Regular status updates to stakeholders
108 | 
109 | ## Dependencies
110 | - Feature Visualization System
111 | - AI Misconception Tracking System
112 | - Component Absorption System
113 | - Documentation Enforcer
114 | - System Health Monitor
115 | 
116 | ## Notes
117 | - Each phase includes unit testing
118 | - Daily integration testing required
119 | - Documentation updates needed daily
120 | - Regular horizon review checkpoints
121 | 
122 | ## Success Metrics
123 | - All integrations completed and tested
124 | - Documentation coverage > 95%
125 | - Health monitoring coverage 100%
126 | - Real-time update reliability > 99.9%
127 | 
128 | ## Tags
129 | #integration #visualization #documentation #health #monitoring #automation #real-time 
```

.cursor/tasks/next-integration-steps.mdc
```
1 | ---
2 | description: 
3 | globs: 
4 | alwaysApply: true
5 | ---
6 | # Next Integration Steps
7 | 
8 | ## Priority: P1
9 | Status: 🔴 Not Started
10 | Horizon: H1
11 | 
12 | ### 1. Visualization System Integration (Days 1-2)
13 | - [ ] Implement 3D Graph View for Misconception Patterns
14 |   - Create Three.js visualization component
15 |   - Implement pattern relationship rendering
16 |   - Add real-time pattern detection visualization
17 |   - Dependencies: Feature Visualization System, AI Misconception Tracking System
18 | 
19 | - [ ] Add Pattern Analysis Tools
20 |   - Implement filtering system
21 |   - Create pattern analysis dashboard
22 |   - Add pattern trend visualization
23 |   - Dependencies: Feature Visualization System
24 | 
25 | ### 2. Component Absorption Visualization (Days 3-4)
26 | - [ ] Create Component Relationship View
27 |   - Implement 3D component hierarchy visualization
28 |   - Add dependency relationship rendering
29 |   - Create component status indicators
30 |   - Dependencies: Feature Visualization System, Component Absorption System
31 | 
32 | - [ ] Add Real-time Status Updates
33 |   - Implement WebSocket connection for live updates
34 |   - Create status change animations
35 |   - Add progress indicators
36 |   - Dependencies: Feature Visualization System
37 | 
38 | ### 3. System Health Integration (Day 5)
39 | - [ ] Implement Health Dashboard
40 |   - Create health status visualization
41 |   - Add real-time monitoring view
42 |   - Implement alert system
43 |   - Dependencies: Feature Visualization System, System Health Monitor
44 | 
45 | ### Success Criteria
46 | 1. All visualization components render correctly
47 | 2. Real-time updates work without lag
48 | 3. Pattern analysis tools are functional
49 | 4. Component relationships are clearly visible
50 | 5. Health monitoring provides actionable insights
51 | 
52 | ### Risk Mitigation
53 | 1. Test each visualization component independently
54 | 2. Implement fallback rendering for complex views
55 | 3. Add error boundaries for visualization components
56 | 4. Monitor performance metrics
57 | 5. Keep backup of existing visualization code
58 | 
59 | ### Dependencies
60 | - Feature Visualization System
61 | - AI Misconception Tracking System
62 | - Component Absorption System
63 | - System Health Monitor
64 | - Three.js
65 | - WebSocket Server
66 | 
67 | ### Notes
68 | - Focus on core visualization features first
69 | - Implement progressive enhancement
70 | - Test with large datasets
71 | - Document all visualization components
72 | - Regular performance testing required
73 | 
74 | ### Tags
75 | #integration #visualization #3d #real-time #monitoring #patterns #components 
```

.cursor/tasks/rule-type-configuration.mdc
```
1 | ---
2 | description: 
3 | globs: 
4 | alwaysApply: true
5 | ---
6 | # Rule Type Configuration Implementation Plan
7 | 
8 | ## Overview
9 | This document outlines the implementation plan for updating rule types across the project to optimize AI agent collaboration and automation.
10 | 
11 | ## Implementation Strategy
12 | 
13 | ### Phase 1: Analysis & Mapping
14 | 🔄 Duration: 1 week
15 | 
16 | #### Codebase Scanning
17 | ```typescript
18 | interface RuleFileInfo {
19 |   path: string;
20 |   currentType: RuleType;
21 |   suggestedType: RuleType;
22 |   purpose: string;
23 |   dependencies: string[];
24 |   usagePatterns: UsagePattern[];
25 | }
26 | 
27 | enum RuleType {
28 |   MANUAL = 'manual',
29 |   AGENT_REQUESTED = 'agent_requested',
30 |   AUTO_APPLIED = 'auto_applied',
31 |   CONDITIONAL = 'conditional'
32 | }
33 | ```
34 | 
35 | #### Directory-Based Configuration Patterns
36 | - `/memory/*`: Default to AGENT_REQUESTED
37 | - `/rules/core/*`: Default to AUTO_APPLIED
38 | - `/rules/conditional/*`: Default to CONDITIONAL
39 | - `/user/custom/*`: Default to MANUAL
40 | 
41 | ### Phase 2: Implementation Framework
42 | 🔄 Duration: 2 weeks
43 | 
44 | #### Rule Type Manager
45 | ```typescript
46 | class RuleTypeManager {
47 |   async updateRuleType(file: string, type: RuleType): Promise<void>;
48 |   async validateConfiguration(file: string): Promise<ValidationResult>;
49 |   async applyBulkUpdates(updates: RuleUpdate[]): Promise<UpdateResult>;
50 |   async monitorPerformance(duration: number): Promise<PerformanceMetrics>;
51 | }
52 | ```
53 | 
54 | #### Error Prevention System
55 | ```typescript
56 | interface ErrorPreventionSystem {
57 |   preUpdateValidation(update: RuleUpdate): Promise<ValidationResult>;
58 |   postUpdateValidation(file: string): Promise<ValidationResult>;
59 |   rollbackCapability: RollbackStrategy;
60 |   conflictResolution: ConflictResolver;
61 | }
62 | ```
63 | 
64 | ### Phase 3: Automation Implementation
65 | 🔄 Duration: 1 week
66 | 
67 | #### Automated Update Process
68 | 1. Scan for rule files
69 | 2. Analyze current settings
70 | 3. Generate update proposals
71 | 4. Validate changes
72 | 5. Apply updates
73 | 6. Verify results
74 | 
75 | #### Integration Points
76 | - Knowledge Graph connection for context awareness
77 | - Context Router for rule application logic
78 | - Error Handler for zero-error operation
79 | - Monitoring System for performance tracking
80 | 
81 | ### Phase 4: Testing & Validation
82 | 🔄 Duration: 1 week
83 | 
84 | #### Test Scenarios
85 | 1. Basic rule type updates
86 | 2. Complex dependency chains
87 | 3. Conflict resolution
88 | 4. Error recovery
89 | 5. Performance impact
90 | 
91 | #### Success Metrics
92 | - Zero failed updates
93 | - No disruption to existing workflows
94 | - Improved agent interaction efficiency
95 | - Reduced manual intervention
96 | 
97 | ## Configuration Templates
98 | 
99 | ### Default Rule Type Settings
100 | ```yaml
101 | rule_types:
102 |   memory:
103 |     default: agent_requested
104 |     exceptions:
105 |       - path: "user-specific/*"
106 |         type: manual
107 |   
108 |   core_rules:
109 |     default: auto_applied
110 |     exceptions:
111 |       - path: "experimental/*"
112 |         type: conditional
113 |   
114 |   custom_rules:
115 |     default: manual
116 |     exceptions:
117 |       - path: "automated/*"
118 |         type: agent_requested
119 | ```
120 | 
121 | ### Error Prevention Rules
122 | ```yaml
123 | error_prevention:
124 |   pre_update_checks:
125 |     - dependency_validation
126 |     - conflict_detection
127 |     - backup_creation
128 |   
129 |   post_update_checks:
130 |     - configuration_validation
131 |     - integration_testing
132 |     - performance_monitoring
133 |   
134 |   rollback_triggers:
135 |     - update_failure
136 |     - performance_degradation
137 |     - integration_failure
138 | ```
139 | 
140 | ## Implementation Schedule
141 | 
142 | ### Week 1: Analysis
143 | - [ ] Complete codebase scan
144 | - [ ] Document current configurations
145 | - [ ] Design update patterns
146 | - [ ] Create validation rules
147 | 
148 | ### Week 2-3: Implementation
149 | - [ ] Build RuleTypeManager
150 | - [ ] Implement error prevention
151 | - [ ] Create automation scripts
152 | - [ ] Set up monitoring
153 | 
154 | ### Week 4: Testing
155 | - [ ] Run validation tests
156 | - [ ] Perform updates
157 | - [ ] Monitor results
158 | - [ ] Document outcomes
159 | 
160 | ## Success Criteria
161 | 1. All rule files properly configured
162 | 2. Zero errors in agent interactions
163 | 3. Improved automation efficiency
164 | 4. Documented configuration patterns
165 | 5. Reliable error prevention system
166 | 
167 | ## Monitoring & Maintenance
168 | - Daily automated checks
169 | - Weekly performance reviews
170 | - Monthly configuration audits
171 | - Quarterly optimization updates 
```

.cursor/tasks/self-evolving-workflow.mdc
```
1 | ---
2 | description: 
3 | globs: 
4 | alwaysApply: true
5 | ---
6 | # Self-Evolving Workflow Optimization System
7 | 
8 | ## Overview
9 | A system that continuously learns from user workflows and evolves to provide optimized patterns and automation opportunities.
10 | 
11 | ## Core Architecture
12 | 
13 | ### 1. Workflow Pattern Recognition Engine
14 | ```typescript
15 | interface WorkflowPattern {
16 |   id: string;
17 |   actions: Action[];
18 |   frequency: number;
19 |   context: WorkflowContext;
20 |   efficiency: EfficiencyMetrics;
21 |   optimizationPotential: number;
22 | }
23 | 
24 | class PatternRecognitionEngine {
25 |   async detectPatterns(userActions: Action[]): Promise<WorkflowPattern[]>;
26 |   async analyzeEfficiency(pattern: WorkflowPattern): Promise<EfficiencyMetrics>;
27 |   async suggestOptimizations(pattern: WorkflowPattern): Promise<OptimizationSuggestion[]>;
28 | }
29 | ```
30 | 
31 | ### 2. Self-Evolution Framework
32 | ```typescript
33 | interface EvolutionStrategy {
34 |   learnFromInteractions(interactions: UserInteraction[]): Promise<LearningResult>;
35 |   adaptWorkflows(patterns: WorkflowPattern[]): Promise<AdaptationResult>;
36 |   optimizePerformance(metrics: PerformanceMetrics): Promise<OptimizationResult>;
37 | }
38 | 
39 | class SelfEvolvingSystem {
40 |   private patternEngine: PatternRecognitionEngine;
41 |   private learningSystem: MachineLearningSystem;
42 |   private adaptationEngine: WorkflowAdaptationEngine;
43 | 
44 |   async evolve(data: EvolutionData): Promise<EvolutionResult> {
45 |     const patterns = await this.patternEngine.detectPatterns(data.actions);
46 |     const learningResult = await this.learningSystem.learn(patterns);
47 |     return this.adaptationEngine.adapt(learningResult);
48 |   }
49 | }
50 | ```
51 | 
52 | ### 3. Activity Monitoring System
53 | ```typescript
54 | interface ActivityMonitor {
55 |   trackUserActions(action: UserAction): void;
56 |   analyzeWorkflowEfficiency(): EfficiencyMetrics;
57 |   detectBottlenecks(): BottleneckReport;
58 |   suggestImprovements(): ImprovementSuggestions;
59 | }
60 | ```
61 | 
62 | ## Implementation Phases
63 | 
64 | ### Phase 1: Foundation (Week 1-2)
65 | - [ ] Set up activity monitoring infrastructure
66 | - [ ] Implement basic pattern recognition
67 | - [ ] Create initial learning algorithms
68 | - [ ] Design workflow storage system
69 | 
70 | ### Phase 2: Learning System (Week 3-4)
71 | - [ ] Implement machine learning models
72 | - [ ] Create pattern classification system
73 | - [ ] Build efficiency analysis tools
74 | - [ ] Develop optimization suggestions
75 | 
76 | ### Phase 3: Adaptation Engine (Week 5-6)
77 | - [ ] Build workflow adaptation system
78 | - [ ] Implement automated optimization
79 | - [ ] Create feedback collection system
80 | - [ ] Develop performance metrics
81 | 
82 | ### Phase 4: Integration (Week 7-8)
83 | - [ ] Connect with existing tools
84 | - [ ] Implement user feedback system
85 | - [ ] Create visualization dashboard
86 | - [ ] Set up monitoring and alerts
87 | 
88 | ## Key Components
89 | 
90 | ### 1. Pattern Recognition
91 | ```typescript
92 | interface PatternDetector {
93 |   minimumFrequency: number;
94 |   patternLength: Range;
95 |   contextAwareness: ContextSettings;
96 |   
97 |   detectPatterns(actions: Action[]): Pattern[];
98 |   validatePattern(pattern: Pattern): ValidationResult;
99 |   rankPatterns(patterns: Pattern[]): RankedPatterns;
100 | }
101 | ```
102 | 
103 | ### 2. Learning System
104 | ```typescript
105 | interface LearningSystem {
106 |   modelType: ModelType;
107 |   learningRate: number;
108 |   optimizationGoals: OptimizationGoal[];
109 |   
110 |   train(data: TrainingData): Promise<TrainingResult>;
111 |   predict(input: PredictionInput): Promise<PredictionResult>;
112 |   adapt(feedback: Feedback): Promise<AdaptationResult>;
113 | }
114 | ```
115 | 
116 | ### 3. Optimization Engine
117 | ```typescript
118 | interface OptimizationEngine {
119 |   strategies: OptimizationStrategy[];
120 |   constraints: OptimizationConstraint[];
121 |   metrics: PerformanceMetric[];
122 |   
123 |   optimizeWorkflow(workflow: Workflow): OptimizedWorkflow;
124 |   validateOptimization(optimization: Optimization): ValidationResult;
125 |   applyOptimization(optimization: Optimization): ApplicationResult;
126 | }
127 | ```
128 | 
129 | ## Integration Points
130 | 
131 | ### 1. IDE Integration
132 | ```typescript
133 | interface IDEIntegration {
134 |   trackEditorActions(): void;
135 |   monitorFileOperations(): void;
136 |   captureUserCommands(): void;
137 |   suggestOptimizations(): void;
138 | }
139 | ```
140 | 
141 | ### 2. Knowledge Graph Integration
142 | ```typescript
143 | interface KnowledgeGraphIntegration {
144 |   storePatterns(patterns: Pattern[]): void;
145 |   queryRelatedPatterns(context: Context): Pattern[];
146 |   updateEfficiencyMetrics(metrics: Metrics): void;
147 |   suggestConnections(workflow: Workflow): Suggestions;
148 | }
149 | ```
150 | 
151 | ## Optimization Strategies
152 | 
153 | ### 1. Command Optimization
154 | - Detect frequently used commands
155 | - Suggest shortcuts and aliases
156 | - Create command chains
157 | - Optimize parameter usage
158 | 
159 | ### 2. Workflow Optimization
160 | - Identify repetitive patterns
161 | - Suggest automation opportunities
162 | - Create workflow templates
163 | - Optimize task sequences
164 | 
165 | ### 3. Resource Optimization
166 | - Monitor resource usage
167 | - Optimize memory allocation
168 | - Improve cache utilization
169 | - Balance workload distribution
170 | 
171 | ## Success Metrics
172 | 
173 | ### 1. Efficiency Metrics
174 | - Time saved per optimization
175 | - Reduction in repetitive tasks
176 | - Improved workflow completion time
177 | - Resource utilization improvement
178 | 
179 | ### 2. Learning Metrics
180 | - Pattern recognition accuracy
181 | - Optimization success rate
182 | - Adaptation effectiveness
183 | - User satisfaction score
184 | 
185 | ## Monitoring & Maintenance
186 | 
187 | ### 1. Performance Monitoring
188 | ```typescript
189 | interface PerformanceMonitor {
190 |   metrics: MetricCollection;
191 |   thresholds: ThresholdSettings;
192 |   alerts: AlertConfiguration;
193 |   
194 |   trackMetrics(): void;
195 |   analyzePerformance(): Analysis;
196 |   generateReports(): Report;
197 |   triggerAlerts(): void;
198 | }
199 | ```
200 | 
201 | ### 2. Health Checks
202 | - Daily system validation
203 | - Weekly performance review
204 | - Monthly optimization audit
205 | - Quarterly strategy update
206 | 
207 | ## Documentation & Reporting
208 | 
209 | ### 1. Workflow Documentation
210 | - Pattern catalogs
211 | - Optimization guides
212 | - Best practices
213 | - User tutorials
214 | 
215 | ### 2. Performance Reports
216 | - Efficiency gains
217 | - Learning progress
218 | - Resource utilization
219 | - User adoption metrics
220 | 
221 | ## Future Enhancements
222 | 
223 | ### 1. Advanced Features
224 | - [ ] AI-powered optimization suggestions
225 | - [ ] Predictive workflow adaptation
226 | - [ ] Cross-project pattern learning
227 | - [ ] Collaborative optimization sharing
228 | 
229 | ### 2. Integration Expansions
230 | - [ ] Version control integration
231 | - [ ] CI/CD pipeline optimization
232 | - [ ] Team collaboration features
233 | - [ ] External tool integration 
```

.cursor/tasks/self-improving-model-integration.mdc
```
1 | ---
2 | description: 
3 | globs: 
4 | alwaysApply: true
5 | ---
6 | # Self-Improving Model Concept Integration Task
7 | 
8 | ## Overview
9 | 
10 | **Priority**: P1  
11 | **Status**: NOT STARTED  
12 | **Tags**: #integration #ai #learning #memory
13 | 
14 | This task focuses on implementing a comprehensive self-improving model system that leverages the existing TitanMemoryModel architecture while adding advanced learning capabilities and integration with the CLI engine.
15 | 
16 | ## Timeline
17 | 
18 | **Week 1**: Research and Architecture  
19 | **Week 2**: Core Implementation  
20 | **Week 3**: Integration and Testing
21 | 
22 | ## Detailed Description
23 | 
24 | The self-improving model system will enhance the Ollama ecosystem by implementing continuous learning capabilities, advanced memory management, and seamless integration with the CLI engine. The system will leverage existing components while adding new features for autonomous improvement.
25 | 
26 | ### Core Components
27 | 
28 | #### 1. Enhanced Memory Architecture
29 | 
30 | - **Hierarchical Memory System**
31 |   - Short-term memory for immediate context
32 |   - Long-term memory for persistent knowledge
33 |   - Meta-memory for learning patterns
34 |   - Adaptive memory pruning based on relevance
35 | 
36 | - **Advanced Attention Mechanisms**
37 |   - Rotary Position Embeddings (RoPE)
38 |   - Multi-Query Attention for efficiency
39 |   - Adaptive computation time
40 |   - Context-aware attention routing
41 | 
42 | #### 2. Learning System
43 | 
44 | - **Continuous Learning Pipeline**
45 |   - Automated data collection from interactions
46 |   - Quality filtering for training examples
47 |   - Contrastive learning for better representations
48 |   - Progressive knowledge distillation
49 | 
50 | - **Meta-Learning Framework**
51 |   - Dynamic learning rate adaptation
52 |   - Architecture optimization
53 |   - Hyperparameter tuning
54 |   - Performance monitoring and adjustment
55 | 
56 | #### 3. CLI Integration
57 | 
58 | - **Voice Interface**
59 |   - Speech-to-text processing
60 |   - Text-to-speech output
61 |   - Context-aware command processing
62 |   - Voice profile management
63 | 
64 | - **Memory Controls**
65 |   - CLI commands for memory inspection
66 |   - Knowledge base querying
67 |   - Context manipulation
68 |   - Learning rate adjustment
69 | 
70 | ## Implementation Plan
71 | 
72 | ### Week 1: Research and Architecture
73 | 
74 | - [ ] Research and evaluate memory architecture options
75 | - [ ] Design meta-learning framework
76 | - [ ] Plan CLI integration points
77 | - [ ] Create architecture diagrams
78 | - [ ] Define API contracts
79 | - [ ] Document integration patterns
80 | 
81 | ### Week 2: Core Implementation
82 | 
83 | - [ ] Implement enhanced memory architecture
84 |   - [ ] Hierarchical memory system
85 |   - [ ] Advanced attention mechanisms
86 |   - [ ] Memory pruning strategies
87 |   
88 | - [ ] Develop learning system
89 |   - [ ] Continuous learning pipeline
90 |   - [ ] Meta-learning framework
91 |   - [ ] Performance monitoring
92 |   
93 | - [ ] Create CLI extensions
94 |   - [ ] Voice command processing
95 |   - [ ] Memory control commands
96 |   - [ ] Knowledge base integration
97 | 
98 | ### Week 3: Integration and Testing
99 | 
100 | - [ ] Integrate with existing systems
101 | - [ ] Implement comprehensive testing
102 | - [ ] Add monitoring and logging
103 | - [ ] Create documentation
104 | - [ ] Perform performance optimization
105 | - [ ] Conduct user acceptance testing
106 | 
107 | ## Dependencies
108 | 
109 | - TitanMemoryModel
110 | - Context Router
111 | - Memory Service
112 | - Knowledge Graph MCP Server
113 | - CLI Engine
114 | - Voice Processing Libraries
115 | 
116 | ## Success Metrics
117 | 
118 | ### Learning Performance
119 | - Reduction in prediction error over time (>20%)
120 | - Improvement in context relevance scores (>15%)
121 | - Decrease in surprise metrics for similar inputs (>25%)
122 | - Increase in pattern recognition accuracy (>30%)
123 | 
124 | ### System Performance
125 | - Response latency under 100ms for cached operations
126 | - Memory usage within allocated limits
127 | - CPU utilization below 70%
128 | - Successful recovery from errors (>95%)
129 | 
130 | ### User Experience
131 | - Voice command accuracy >90%
132 | - Context retention across sessions >85%
133 | - Command completion time <2s
134 | - User satisfaction scores >4/5
135 | 
136 | ## Risk Mitigation
137 | 
138 | ### Technical Risks
139 | - **Memory Overflow**: Implement adaptive pruning and compression
140 | - **Performance Degradation**: Monitor and optimize resource usage
141 | - **Integration Conflicts**: Thorough testing and fallback mechanisms
142 | - **Data Quality**: Implement strict validation and filtering
143 | 
144 | ### Operational Risks
145 | - **Resource Constraints**: Use efficient algorithms and caching
146 | - **System Stability**: Implement graceful degradation
147 | - **User Adoption**: Provide comprehensive documentation and examples
148 | - **Privacy Concerns**: Ensure local processing and data protection
149 | 
150 | ## Research Notes
151 | 
152 | ### Memory Architecture Options
153 | 
154 | | Architecture | Pros | Cons | Integration Complexity |
155 | |--------------|------|------|----------------------|
156 | | Hierarchical | Better context retention | Higher memory usage | Medium |
157 | | Flat | Simple implementation | Limited context | Low |
158 | | Hybrid | Balanced approach | Complex management | High |
159 | 
160 | ### Learning Strategies
161 | 
162 | | Strategy | Application | Benefits | Challenges |
163 | |----------|-------------|----------|------------|
164 | | Contrastive | Representation learning | Better embeddings | Resource intensive |
165 | | Meta-learning | Architecture optimization | Automatic improvement | Complex implementation |
166 | | Progressive | Incremental learning | Stable improvements | Slower convergence |
167 | 
168 | ## Integration Points
169 | 
170 | ### CLI Command Structure
171 | 
172 | ```typescript
173 | program
174 |   .command('model')
175 |   .description('Self-improving model controls')
176 |   .option('-t, --train', 'Trigger training cycle')
177 |   .option('-s, --status', 'Get model status')
178 |   .option('-m, --memory [type]', 'Memory operations')
179 |   .option('-v, --voice', 'Voice interaction mode')
180 |   .option('--reset', 'Reset model state')
181 |   .action(async (options) => {
182 |     // Implementation
183 |   });
184 | ```
185 | 
186 | ### Memory Control Interface
187 | 
188 | ```typescript
189 | interface MemoryControl {
190 |   inspect(query: string): Promise<MemoryState>;
191 |   modify(operation: MemoryOperation): Promise<void>;
192 |   optimize(criteria: OptimizationCriteria): Promise<void>;
193 |   backup(path: string): Promise<void>;
194 | }
195 | ```
196 | 
197 | ### Learning Pipeline
198 | 
199 | ```typescript
200 | interface LearningPipeline {
201 |   collectData(interaction: Interaction): void;
202 |   evaluateQuality(example: TrainingExample): number;
203 |   updateModel(batch: TrainingBatch): Promise<TrainingMetrics>;
204 |   monitorPerformance(): PerformanceMetrics;
205 | }
206 | ```
207 | 
208 | ## References
209 | 
210 | - [TitanMemoryModel Documentation](mdc:OSPAiN2/OSPAiN2/OSPAiN2/OSPAiN2/OSPAiN2/OSPAiN2/mcp-knowledge-graph/docs/model-improvements.md)
211 | - [Voice Integration Guide](mdc:OSPAiN2/OSPAiN2/OSPAiN2/OSPAiN2/OSPAiN2/OSPAiN2/docs/voice_integration.md)
212 | - [CLI Integration Patterns](mdc:OSPAiN2/OSPAiN2/OSPAiN2/OSPAiN2/OSPAiN2/OSPAiN2/docs/cli_patterns.md)
213 | - [Learning System Architecture](mdc:OSPAiN2/OSPAiN2/OSPAiN2/OSPAiN2/OSPAiN2/OSPAiN2/docs/learning_system.md) 
```

.cursor/tasks/workflow-tracking-system.mdc
```
1 | ---
2 | description: 
3 | globs: 
4 | alwaysApply: true
5 | ---
6 | # Personal Workflow Tracking System
7 | 
8 | ## Overview
9 | 
10 | **Priority**: P1  
11 | **Status**: NOT STARTED  
12 | **Tags**: #integration #metrics #productivity #workflow
13 | 
14 | This task focuses on implementing a comprehensive system for recording, analyzing, and sharing development workflows within the Ollama ecosystem. The system will track user activities, extract meaningful metrics, and provide integration points for agents and other components.
15 | 
16 | ## Timeline
17 | 
18 | **Week 1**: Research and Architecture  
19 | **Week 2**: Core Implementation  
20 | **Week 3**: Integration and Testing
21 | 
22 | ## Detailed Description
23 | 
24 | The Personal Workflow Tracking System will enhance the Ollama ecosystem by providing detailed insights into development patterns, productivity metrics, and workflow optimization opportunities. The system will record user activities across the terminal, editor, and application interfaces while providing privacy controls and data filtering capabilities.
25 | 
26 | ### Core Components
27 | 
28 | #### 1. Activity Recording Engine
29 | 
30 | - **Command Tracking**
31 |   - Terminal command history with context
32 |   - Command execution results and status
33 |   - Execution environment details
34 |   - Command timing and performance metrics
35 | 
36 | - **Editor Activity Tracking**
37 |   - File open/close events
38 |   - Edit patterns and frequency
39 |   - Navigation patterns
40 |   - Clipboard operations
41 |   - Search and replace patterns
42 | 
43 | - **Application Usage Tracking**
44 |   - Application focus time
45 |   - Context switching frequency
46 |   - Feature usage patterns
47 |   - UI interaction flows
48 |   - Idle time analysis
49 | 
50 | #### 2. Metrics Analysis System
51 | 
52 | - **Productivity Metrics**
53 |   - Active coding time
54 |   - Command efficiency scores
55 |   - Context switching overhead
56 |   - Task completion velocity
57 |   - Feature usage optimization
58 | 
59 | - **Pattern Recognition**
60 |   - Workflow pattern detection
61 |   - Repetitive task identification
62 |   - Automation opportunity discovery
63 |   - Productivity bottleneck detection
64 |   - Best practice alignment
65 | 
66 | - **Comparative Analysis**
67 |   - Historical trend analysis
68 |   - Peer benchmarking (opt-in)
69 |   - Industry standard comparison
70 |   - Before/after optimization metrics
71 |   - Learning curve progression
72 | 
73 | #### 3. Integration and Sharing
74 | 
75 | - **Agent Integration**
76 |   - Context provision for AI agents
77 |   - Learning from efficient workflows
78 |   - Personalized suggestions
79 |   - Adaptive assistance based on workflow
80 |   - Context-aware tool recommendations
81 | 
82 | - **Sharing Mechanisms**
83 |   - Workflow export formats
84 |   - Team sharing capabilities
85 |   - Anonymized data aggregation
86 |   - Best practice libraries
87 |   - Workflow demonstration recordings
88 | 
89 | - **Privacy Controls**
90 |   - Granular data collection settings
91 |   - Sensitive data filtering
92 |   - Local-first storage
93 |   - Encryption for shared data
94 |   - Data retention policies
95 | 
96 | ## Implementation Plan
97 | 
98 | ### Week 1: Research and Architecture
99 | 
100 | - [ ] Research existing workflow tracking solutions
101 | - [ ] Define data collection scope and boundaries
102 | - [ ] Design privacy-first architecture
103 | - [ ] Create data models for activity tracking
104 | - [ ] Design metrics calculation framework
105 | - [ ] Plan integration points with existing systems
106 | - [ ] Create architecture diagrams and documentation
107 | - [ ] Design database schema for metrics storage
108 | - [ ] Define API contracts for system integration
109 | 
110 | ### Week 2: Core Implementation
111 | 
112 | - [ ] Implement terminal command tracking
113 |   - [ ] Command history recording
114 |   - [ ] Execution context capture
115 |   - [ ] Performance metrics collection
116 |   - [ ] Result status tracking
117 | 
118 | - [ ] Develop editor activity tracking
119 |   - [ ] File operation hooks
120 |   - [ ] Edit pattern recording
121 |   - [ ] Navigation tracking
122 |   - [ ] Timing and frequency analysis
123 | 
124 | - [ ] Create metrics analysis engine
125 |   - [ ] Raw data processing pipeline
126 |   - [ ] Pattern detection algorithms
127 |   - [ ] Productivity scoring system
128 |   - [ ] Trend analysis capabilities
129 |   - [ ] Visualization data preparation
130 | 
131 | - [ ] Implement data storage and management
132 |   - [ ] Local database implementation
133 |   - [ ] Data aggregation mechanisms
134 |   - [ ] Privacy filtering system
135 |   - [ ] Data export capabilities
136 |   - [ ] Backup and recovery processes
137 | 
138 | ### Week 3: Integration and Testing
139 | 
140 | - [ ] Integrate with existing systems
141 |   - [ ] CLI Engine integration
142 |   - [ ] Knowledge Graph connections
143 |   - [ ] Context Router hooks
144 |   - [ ] Agent awareness interfaces
145 |   - [ ] Visualization system integration
146 | 
147 | - [ ] Implement sharing mechanisms
148 |   - [ ] Team sharing protocols
149 |   - [ ] Export format generators
150 |   - [ ] Workflow replay capabilities
151 |   - [ ] Collaboration features
152 |   - [ ] Best practice libraries
153 | 
154 | - [ ] Create visualization and reporting
155 |   - [ ] Dashboard for personal metrics
156 |   - [ ] Workflow pattern visualizations
157 |   - [ ] Productivity trend charts
158 |   - [ ] Optimization opportunity displays
159 |   - [ ] Comparative analysis views
160 | 
161 | - [ ] Comprehensive testing
162 |   - [ ] Performance impact testing
163 |   - [ ] Privacy compliance verification
164 |   - [ ] Data accuracy validation
165 |   - [ ] Integration functionality testing
166 |   - [ ] User experience evaluation
167 | 
168 | ## Dependencies
169 | 
170 | - CLI Engine
171 | - Knowledge Graph
172 | - Context Router
173 | - TokenManager
174 | - Local Database System
175 | - Visualization Framework
176 | 
177 | ## Success Metrics
178 | 
179 | ### System Performance
180 | - Activity tracking with <5% performance impact
181 | - Data processing latency <100ms
182 | - Storage efficiency with <10MB per day
183 | - Query response time <50ms
184 | - Real-time metrics calculation
185 | 
186 | ### User Experience
187 | - Seamless integration with existing workflow
188 | - Intuitive metric visualizations
189 | - Easy sharing mechanisms
190 | - Clear privacy controls
191 | - Minimal setup requirements
192 | 
193 | ### Productivity Improvements
194 | - Measurable workflow optimization (>15%)
195 | - Reduction in repetitive tasks (>20%)
196 | - Improved context retention in agents (>30%)
197 | - Better collaboration through shared patterns
198 | - Accelerated onboarding for new team members
199 | 
200 | ## Risk Mitigation
201 | 
202 | ### Technical Risks
203 | - **Performance Impact**: Implement selective recording and sampling
204 | - **Data Security**: Use encryption and local-first storage
205 | - **Integration Complexity**: Create well-defined abstraction layers
206 | - **Accuracy Concerns**: Implement validation and calibration mechanisms
207 | 
208 | ### Operational Risks
209 | - **Privacy Concerns**: Provide granular opt-in controls and transparency
210 | - **Adoption Resistance**: Focus on immediate value and clear benefits
211 | - **Data Volume Management**: Implement intelligent aggregation and pruning
212 | - **Tool Overhead**: Ensure seamless integration with minimal friction
213 | 
214 | ## Research Notes
215 | 
216 | ### Activity Tracking Approaches
217 | 
218 | | Approach | Pros | Cons | Integration Complexity |
219 | |----------|------|------|----------------------|
220 | | Shell Hooks | Native integration | Limited scope | Low |
221 | | Editor Extensions | Comprehensive | Platform-specific | Medium |
222 | | System Monitoring | Complete coverage | Privacy concerns | High |
223 | | Hybrid Approach | Balanced coverage | Complex coordination | Medium-High |
224 | 
225 | ### Metrics Calculation Strategies
226 | 
227 | | Strategy | Application | Benefits | Challenges |
228 | |----------|-------------|----------|------------|
229 | | Real-time | Immediate feedback | Resource intensive | Complex implementation |
230 | | Batch Processing | Efficient resources | Delayed insights | Simpler architecture |
231 | | Hybrid Processing | Balanced approach | Complexity | Moderate resources |
232 | 
233 | ## Integration Points
234 | 
235 | ### CLI Tracking Integration
236 | 
237 | ```typescript
238 | interface CommandTracker {
239 |   recordCommand(command: string, context: CommandContext): void;
240 |   recordResult(result: CommandResult, metrics: ExecutionMetrics): void;
241 |   getCommandHistory(filters?: HistoryFilters): Promise<Command[]>;
242 |   analyzePatterns(timeframe: Timeframe): Promise<PatternAnalysis>;
243 | }
244 | 
245 | interface CommandContext {
246 |   workingDirectory: string;
247 |   environment: Record<string, string>;
248 |   shellType: string;
249 |   timestamp: Date;
250 |   sessionId: string;
251 | }
252 | ```
253 | 
254 | ### Editor Activity Interface
255 | 
256 | ```typescript
257 | interface EditorActivityTracker {
258 |   recordFileOperation(operation: FileOperation): void;
259 |   recordEditAction(action: EditAction): void;
260 |   recordNavigation(navigation: NavigationAction): void;
261 |   getActivitySummary(timeframe: Timeframe): Promise<ActivitySummary>;
262 |   detectPatterns(timeframe: Timeframe): Promise<EditorPatternAnalysis>;
263 | }
264 | 
265 | interface EditAction {
266 |   fileId: string;
267 |   position: Position;
268 |   type: 'insert' | 'delete' | 'replace' | 'format';
269 |   content?: string;
270 |   timestamp: Date;
271 |   duration?: number;
272 | }
273 | ```
274 | 
275 | ### Agent Integration Interface
276 | 
277 | ```typescript
278 | interface WorkflowContext {
279 |   recentCommands: Command[];
280 |   frequentPatterns: Pattern[];
281 |   currentFocus: FocusArea;
282 |   productivityMetrics: ProductivityMetrics;
283 |   recommendedTools: Tool[];
284 |   getContextualSuggestions(task: string): Promise<Suggestion[]>;
285 | }
286 | ```
287 | 
288 | ## References
289 | 
290 | - [CLI Engine Documentation](mdc:OSPAiN2/OSPAiN2/OSPAiN2/docs/cli_engine.md)
291 | - [Context Router Architecture](mdc:OSPAiN2/OSPAiN2/OSPAiN2/docs/context_router.md)
292 | - [Knowledge Graph Integration Guide](mdc:OSPAiN2/OSPAiN2/OSPAiN2/docs/knowledge_graph.md)
293 | - [Privacy Design Guidelines](mdc:OSPAiN2/OSPAiN2/OSPAiN2/docs/privacy_guidelines.md)
294 | - [Metrics Calculation Reference](mdc:OSPAiN2/OSPAiN2/OSPAiN2/docs/metrics_calculation.md) 
```

.cursor/memory/absorption-feature.mdc
```
1 | ---
2 | description: 
3 | globs: 
4 | alwaysApply: true
5 | ---
6 | # Absorption Feature System
7 | 
8 | ## Core Components
9 | 
10 | ### Component Detector
11 | ```typescript
12 | interface ComponentDetector {
13 |   detection: {
14 |     patterns: {
15 |       fileTypes: string[];
16 |       namingConventions: RegExp[];
17 |       structurePatterns: {
18 |         imports: RegExp[];
19 |         exports: RegExp[];
20 |         componentPatterns: RegExp[];
21 |       };
22 |     };
23 |     scanning: {
24 |       directories: string[];
25 |       excludePatterns: string[];
26 |       recursive: boolean;
27 |     };
28 |   };
29 |   analysis: {
30 |     static: {
31 |       dependencies: boolean;
32 |       interfaces: boolean;
33 |       types: boolean;
34 |     };
35 |     dynamic: {
36 |       runtime: boolean;
37 |       usage: boolean;
38 |       performance: boolean;
39 |     };
40 |   };
41 | }
42 | ```
43 | 
44 | ### Component Analyzer
45 | ```typescript
46 | interface ComponentAnalyzer {
47 |   analysis: {
48 |     structure: {
49 |       complexity: number;
50 |       dependencies: string[];
51 |       interfaces: string[];
52 |     };
53 |     quality: {
54 |       maintainability: number;
55 |       reusability: number;
56 |       testability: number;
57 |     };
58 |     integration: {
59 |       compatibility: string[];
60 |       conflicts: string[];
61 |       suggestions: string[];
62 |     };
63 |   };
64 |   insights: {
65 |     patterns: string[];
66 |     improvements: string[];
67 |     risks: string[];
68 |   };
69 | }
70 | ```
71 | 
72 | ### Component Indexer
73 | ```typescript
74 | interface ComponentIndexer {
75 |   indexing: {
76 |     metadata: {
77 |       name: string;
78 |       type: string;
79 |       location: string;
80 |       dependencies: string[];
81 |       lastModified: string;
82 |     };
83 |     content: {
84 |       source: string;
85 |       documentation: string;
86 |       tests: string[];
87 |     };
88 |     relationships: {
89 |       imports: string[];
90 |       exports: string[];
91 |       uses: string[];
92 |       usedBy: string[];
93 |     };
94 |   };
95 |   search: {
96 |     byType: (type: string) => Component[];
97 |     byDependency: (dependency: string) => Component[];
98 |     byPattern: (pattern: RegExp) => Component[];
99 |   };
100 | }
101 | ```
102 | 
103 | ### Component Processor
104 | ```typescript
105 | interface ComponentProcessor {
106 |   processing: {
107 |     validation: {
108 |       structure: boolean;
109 |       dependencies: boolean;
110 |       types: boolean;
111 |     };
112 |     optimization: {
113 |       performance: boolean;
114 |       size: boolean;
115 |       dependencies: boolean;
116 |     };
117 |     documentation: {
118 |       generate: boolean;
119 |       update: boolean;
120 |       validate: boolean;
121 |     };
122 |   };
123 |   actions: {
124 |     refactor: (component: Component) => Promise<void>;
125 |     optimize: (component: Component) => Promise<void>;
126 |     document: (component: Component) => Promise<void>;
127 |   };
128 | }
129 | ```
130 | 
131 | ### Integration System
132 | ```typescript
133 | interface IntegrationSystem {
134 |   integration: {
135 |     detection: {
136 |       autoDetect: boolean;
137 |       patterns: string[];
138 |       validation: boolean;
139 |     };
140 |     processing: {
141 |       analysis: boolean;
142 |       optimization: boolean;
143 |       documentation: boolean;
144 |     };
145 |     reporting: {
146 |       generate: boolean;
147 |       format: 'json' | 'markdown' | 'html';
148 |       notifications: boolean;
149 |     };
150 |   };
151 |   workflow: {
152 |     onDetection: (component: Component) => Promise<void>;
153 |     onAnalysis: (analysis: Analysis) => Promise<void>;
154 |     onIntegration: (component: Component) => Promise<void>;
155 |   };
156 | }
157 | ```
158 | 
159 | ## Usage Examples
160 | 
161 | ### Basic Component Detection
162 | ```typescript
163 | const detector = new ComponentDetector({
164 |   detection: {
165 |     patterns: {
166 |       fileTypes: ['.ts', '.tsx', '.js', '.jsx'],
167 |       namingConventions: [/^[A-Z][a-zA-Z]*\.(ts|tsx)$/],
168 |       structurePatterns: {
169 |         imports: [/^import\s+.*from\s+['"].*['"]/],
170 |         exports: [/^export\s+(default\s+)?(class|function|const)/],
171 |         componentPatterns: [/React\.(FC|Component)/]
172 |       }
173 |     }
174 |   }
175 | });
176 | 
177 | const components = await detector.scan('src/components');
178 | ```
179 | 
180 | ### Component Analysis
181 | ```typescript
182 | const analyzer = new ComponentAnalyzer();
183 | const analysis = await analyzer.analyze(component);
184 | 
185 | console.log('Complexity:', analysis.structure.complexity);
186 | console.log('Maintainability:', analysis.quality.maintainability);
187 | console.log('Integration Suggestions:', analysis.integration.suggestions);
188 | ```
189 | 
190 | ### Component Processing
191 | ```typescript
192 | const processor = new ComponentProcessor({
193 |   processing: {
194 |     validation: true,
195 |     optimization: true,
196 |     documentation: true
197 |   }
198 | });
199 | 
200 | await processor.process(component);
201 | ```
202 | 
203 | ## Version History
204 | - v1.0.0 - Initial absorption feature system
205 | - Current: v1.0.0
206 | 
207 | ## Last Update
208 | - Timestamp: ${new Date().toISOString()}
209 | - Type: System Creation
210 | - Changes: Created comprehensive component absorption system 
```

.cursor/memory/ai-misconception-tracker.mdc
```
1 | ---
2 | description: 
3 | globs: 
4 | alwaysApply: true
5 | ---
6 | # AI Misconception Tracking System
7 | 
8 | ## Memory Context
9 | - Creation Date: ${new Date().toISOString()}
10 | - Category: AI Quality Assurance
11 | - Priority: P1
12 | - Status: Active Development
13 | - Related Files: 
14 |   - master-todo.mdc
15 |   - component-absorption.mdc
16 |   - system-health.mdc
17 | 
18 | ## Core Components
19 | 
20 | ### Misconception Detection
21 | ```typescript
22 | interface MisconceptionDetector {
23 |   patterns: {
24 |     // Patterns that might indicate misconceptions
25 |     overconfidence: RegExp[];
26 |     inconsistency: RegExp[];
27 |     hallucination: RegExp[];
28 |     contextMisalignment: RegExp[];
29 |   };
30 |   analysis: {
31 |     // Analysis configuration
32 |     confidenceThreshold: number;
33 |     contextWindow: number;
34 |     maxHistoryDepth: number;
35 |   };
36 |   triggers: {
37 |     // Events that trigger detection
38 |     onResponse: boolean;
39 |     onError: boolean;
40 |     onContextSwitch: boolean;
41 |     onUserFeedback: boolean;
42 |   };
43 | }
44 | ```
45 | 
46 | ### Feedback Analysis
47 | ```typescript
48 | interface FeedbackAnalyzer {
49 |   metrics: {
50 |     accuracy: number;
51 |     consistency: number;
52 |     relevance: number;
53 |     contextAwareness: number;
54 |   };
55 |   categories: {
56 |     type: 'hallucination' | 'overconfidence' | 'inconsistency' | 'contextError';
57 |     severity: 'low' | 'medium' | 'high';
58 |     impact: 'minimal' | 'moderate' | 'significant';
59 |   };
60 |   learning: {
61 |     patterns: Map<string, number>;
62 |     corrections: Map<string, string>;
63 |     improvements: string[];
64 |   };
65 | }
66 | ```
67 | 
68 | ### Logging System
69 | ```typescript
70 | interface MisconceptionLogger {
71 |   entry: {
72 |     timestamp: Date;
73 |     type: string;
74 |     context: string;
75 |     trigger: string;
76 |     severity: string;
77 |     resolution: string;
78 |   };
79 |   storage: {
80 |     format: 'json' | 'markdown';
81 |     retention: number;
82 |     compression: boolean;
83 |   };
84 |   analytics: {
85 |     trends: TrendAnalysis;
86 |     patterns: PatternRecognition;
87 |     recommendations: string[];
88 |   };
89 | }
90 | ```
91 | 
92 | ## Implementation Progress
93 | 
94 | ### Completed Components
95 | - [ ] Detection Engine
96 | - [ ] Feedback Analyzer
97 | - [ ] Logging System
98 | - [ ] Analytics Dashboard
99 | 
100 | ### Active Work
101 | - [ ] Pattern Recognition
102 | - [ ] Real-time Monitoring
103 | - [ ] Integration Pipeline
104 | - [ ] Reporting System
105 | 
106 | ### Pending Tasks
107 | - [ ] Machine Learning Model
108 | - [ ] User Interface
109 | - [ ] API Integration
110 | - [ ] Documentation
111 | 
112 | ## Integration Points
113 | 
114 | ### Knowledge Graph
115 | - Connect to existing knowledge base
116 | - Track misconception patterns
117 | - Update learning rules
118 | - Share insights across system
119 | 
120 | ### System Health
121 | - Monitor detection accuracy
122 | - Track resolution rates
123 | - Measure system impact
124 | - Alert on critical issues
125 | 
126 | ### Documentation
127 | - Generate misconception reports
128 | - Update best practices
129 | - Document resolutions
130 | - Maintain knowledge base
131 | 
132 | ## Success Metrics
133 | 
134 | ### Detection Metrics
135 | - Accuracy: > 90%
136 | - False Positives: < 5%
137 | - Response Time: < 100ms
138 | 
139 | ### Analysis Metrics
140 | - Pattern Recognition: > 85%
141 | - Context Awareness: > 95%
142 | - Learning Rate: > 80%
143 | 
144 | ### Resolution Metrics
145 | - Time to Resolution: < 1h
146 | - Prevention Rate: > 70%
147 | - User Satisfaction: > 90%
148 | 
149 | ## Learning & Adaptation
150 | 
151 | ### Update Triggers
152 | - New misconception detected
153 | - Pattern identified
154 | - User feedback received
155 | - System performance change
156 | 
157 | ### Adaptation Rules
158 | - Pattern refinement
159 | - Threshold adjustment
160 | - Context enhancement
161 | - Resolution optimization
162 | 
163 | ## Version History
164 | - v1.0.0 - Initial system definition
165 | - Current: v1.0.0
166 | 
167 | ## Last Update
168 | - Timestamp: ${new Date().toISOString()}
169 | - Type: System Creation
170 | - Changes: Created comprehensive AI misconception tracking system 
```

.cursor/memory/component-absorption.mdc
```
1 | ---
2 | description: 
3 | globs: 
4 | alwaysApply: true
5 | ---
6 | # Component Absorption System
7 | 
8 | ## Memory Context
9 | - Creation Date: ${new Date().toISOString()}
10 | - Category: Component Management
11 | - Priority: P1
12 | - Status: Active Development
13 | - Related Files: 
14 |   - master-todo.mdc
15 |   - documentation-enforcer.mdc
16 |   - system-health.mdc
17 | 
18 | ## Core Components
19 | 
20 | ### Component Detection
21 | ```typescript
22 | interface ComponentDetector {
23 |   patterns: {
24 |     fileTypes: string[];
25 |     namingConventions: string[];
26 |     structurePatterns: string[];
27 |   };
28 |   monitoring: {
29 |     watchPaths: string[];
30 |     ignorePatterns: string[];
31 |     scanInterval: number;
32 |   };
33 |   classification: {
34 |     types: string[];
35 |     rules: ClassificationRule[];
36 |     confidence: number;
37 |   };
38 | }
39 | ```
40 | 
41 | ### Analysis Engine
42 | ```typescript
43 | interface ComponentAnalyzer {
44 |   analysis: {
45 |     dependencies: DependencyAnalysis;
46 |     quality: QualityMetrics;
47 |     documentation: DocCoverage;
48 |     security: SecurityScan;
49 |   };
50 |   metrics: {
51 |     complexity: number;
52 |     maintainability: number;
53 |     testability: number;
54 |     reusability: number;
55 |   };
56 |   recommendations: {
57 |     improvements: string[];
58 |     risks: string[];
59 |     opportunities: string[];
60 |   };
61 | }
62 | ```
63 | 
64 | ### Integration System
65 | ```typescript
66 | interface ComponentIntegrator {
67 |   workflow: {
68 |     validation: ValidationStep[];
69 |     testing: TestSuite[];
70 |     deployment: DeploymentConfig;
71 |   };
72 |   safety: {
73 |     rollback: RollbackConfig;
74 |     backup: BackupStrategy;
75 |     monitoring: HealthChecks;
76 |   };
77 |   reporting: {
78 |     format: 'json' | 'markdown' | 'html';
79 |     metrics: string[];
80 |     notifications: NotificationConfig[];
81 |   };
82 | }
83 | ```
84 | 
85 | ## Implementation Progress
86 | 
87 | ### Completed Components
88 | - [ ] Component Detection Server
89 | - [ ] Analysis Pipeline
90 | - [ ] Integration Workflow
91 | - [ ] Monitoring System
92 | 
93 | ### Active Work
94 | - [ ] Pattern Recognition Engine
95 | - [ ] Classification System
96 | - [ ] Quality Assessment
97 | - [ ] Documentation Generator
98 | 
99 | ### Pending Tasks
100 | - [ ] Automated Testing
101 | - [ ] Performance Optimization
102 | - [ ] Security Hardening
103 | - [ ] User Interface
104 | 
105 | ## Knowledge Graph Integration
106 | 
107 | ### Tags
108 | - #component-management
109 | - #automation
110 | - #integration
111 | - #analysis
112 | - #monitoring
113 | 
114 | ### Relationships
115 | - Depends on: Knowledge Graph, Documentation Enforcer, System Health
116 | - Enhances: Development Workflow, Code Quality, System Stability
117 | - Monitors: Component Health, Integration Status, System Performance
118 | 
119 | ## Success Metrics
120 | 
121 | ### Detection Metrics
122 | - Accuracy: > 95%
123 | - False Positives: < 5%
124 | - Detection Time: < 5s
125 | 
126 | ### Analysis Metrics
127 | - Completion Time: < 30s
128 | - Coverage: 100%
129 | - Quality Score: > 80%
130 | 
131 | ### Integration Metrics
132 | - Success Rate: > 98%
133 | - Rollback Time: < 10s
134 | - System Stability: > 99.9%
135 | 
136 | ## Learning & Adaptation
137 | 
138 | ### Update Triggers
139 | - New component detection
140 | - Analysis completion
141 | - Integration events
142 | - System health changes
143 | 
144 | ### Adaptation Rules
145 | - Pattern recognition updates
146 | - Classification refinement
147 | - Quality threshold adjustments
148 | - Integration workflow optimization
149 | 
150 | ## Version History
151 | - v1.0.0 - Initial component absorption system definition
152 | - Current: v1.0.0
153 | 
154 | ## Last Update
155 | - Timestamp: ${new Date().toISOString()}
156 | - Type: System Creation
157 | - Changes: Created comprehensive component absorption system definition 
```

.cursor/memory/documentation-enforcer.mdc
```
1 | ---
2 | description: 
3 | globs: 
4 | alwaysApply: true
5 | ---
6 | # Documentation Enforcer System
7 | 
8 | ## Core Components
9 | 
10 | ### Document Validator
11 | ```typescript
12 | interface DocumentValidator {
13 |   rules: {
14 |     structure: {
15 |       requiredSections: string[];
16 |       sectionOrder: string[];
17 |       minSectionLength: number;
18 |     };
19 |     content: {
20 |       requiredElements: string[];
21 |       prohibitedElements: string[];
22 |       formattingRules: {
23 |         headers: 'markdown' | 'html';
24 |         codeBlocks: 'fenced' | 'indented';
25 |         lists: 'consistent' | 'flexible';
26 |       };
27 |     };
28 |     metadata: {
29 |       required: string[];
30 |       format: {
31 |         version: 'semantic' | 'simple';
32 |         date: 'iso' | 'relative';
33 |         tags: 'required' | 'optional';
34 |       };
35 |     };
36 |   };
37 |   validation: {
38 |     strict: boolean;
39 |     autoFix: boolean;
40 |     reportFormat: 'json' | 'markdown' | 'html';
41 |   };
42 | }
43 | ```
44 | 
45 | ### Validation Rules
46 | 
47 | #### Markdown Documents
48 | ```typescript
49 | interface MarkdownRules {
50 |   structure: {
51 |     required: [
52 |       'Title',
53 |       'Description',
54 |       'Table of Contents',
55 |       'Main Content',
56 |       'Version History',
57 |       'Last Update'
58 |     ];
59 |     optional: [
60 |       'Prerequisites',
61 |       'Installation',
62 |       'Usage Examples',
63 |       'API Reference',
64 |       'Contributing',
65 |       'License'
66 |     ];
67 |   };
68 |   formatting: {
69 |     headers: {
70 |       maxLevel: 3;
71 |       format: '# ';
72 |       spacing: 'single';
73 |     };
74 |     codeBlocks: {
75 |       language: 'required';
76 |       fencing: '```';
77 |       indentation: 4;
78 |     };
79 |     lists: {
80 |       type: 'consistent';
81 |       indentation: 2;
82 |     };
83 |   };
84 |   content: {
85 |     maxLineLength: 100;
86 |     minSectionLength: 50;
87 |     requiredMetadata: [
88 |       'version',
89 |       'lastUpdate',
90 |       'author',
91 |       'status'
92 |     ];
93 |   };
94 | }
95 | ```
96 | 
97 | #### Technical Documentation
98 | ```typescript
99 | interface TechnicalDocRules {
100 |   structure: {
101 |     required: [
102 |       'Overview',
103 |       'Architecture',
104 |       'Components',
105 |       'Interfaces',
106 |       'Implementation',
107 |       'Testing',
108 |       'Deployment'
109 |     ];
110 |     optional: [
111 |       'Performance',
112 |       'Security',
113 |       'Monitoring',
114 |       'Troubleshooting'
115 |     ];
116 |   };
117 |   codeExamples: {
118 |     required: boolean;
119 |     format: 'typescript' | 'javascript';
120 |     testing: 'required' | 'optional';
121 |   };
122 |   diagrams: {
123 |     required: boolean;
124 |     format: 'mermaid' | 'plantuml';
125 |     minCount: 1;
126 |   };
127 | }
128 | ```
129 | 
130 | ### Validation Process
131 | 
132 | #### Pre-validation
133 | ```typescript
134 | interface PreValidation {
135 |   checks: [
136 |     'fileExists',
137 |     'fileType',
138 |     'fileSize',
139 |     'encoding',
140 |     'lineEndings'
141 |   ];
142 |   cleanup: [
143 |     'removeTrailingWhitespace',
144 |     'normalizeLineEndings',
145 |     'fixIndentation'
146 |   ];
147 | }
148 | ```
149 | 
150 | #### Main Validation
151 | ```typescript
152 | interface MainValidation {
153 |   structure: {
154 |     checkSections: boolean;
155 |     validateOrder: boolean;
156 |     checkLengths: boolean;
157 |   };
158 |   content: {
159 |     checkFormatting: boolean;
160 |     validateLinks: boolean;
161 |     checkCodeBlocks: boolean;
162 |   };
163 |   metadata: {
164 |     validateVersion: boolean;
165 |     checkDates: boolean;
166 |     validateTags: boolean;
167 |   };
168 | }
169 | ```
170 | 
171 | #### Post-validation
172 | ```typescript
173 | interface PostValidation {
174 |   reporting: {
175 |     generateReport: boolean;
176 |     format: 'json' | 'markdown' | 'html';
177 |     includeStats: boolean;
178 |   };
179 |   fixes: {
180 |     autoFix: boolean;
181 |     backupOriginal: boolean;
182 |     createPatch: boolean;
183 |   };
184 | }
185 | ```
186 | 
187 | ### Validation Report
188 | 
189 | #### Report Structure
190 | ```typescript
191 | interface ValidationReport {
192 |   document: {
193 |     name: string;
194 |     type: string;
195 |     size: number;
196 |     lastModified: string;
197 |   };
198 |   validation: {
199 |     status: 'pass' | 'fail' | 'partial';
200 |     score: number;
201 |     timestamp: string;
202 |   };
203 |   issues: {
204 |     critical: Issue[];
205 |     warnings: Issue[];
206 |     suggestions: Issue[];
207 |   };
208 |   metrics: {
209 |     sections: number;
210 |     codeBlocks: number;
211 |     diagrams: number;
212 |     links: number;
213 |   };
214 |   fixes: {
215 |     applied: Fix[];
216 |     suggested: Fix[];
217 |     failed: Fix[];
218 |   };
219 | }
220 | ```
221 | 
222 | ### Usage Examples
223 | 
224 | #### Basic Validation
225 | ```typescript
226 | // Example usage
227 | const validator = new DocumentValidator({
228 |   rules: markdownRules,
229 |   validation: {
230 |     strict: true,
231 |     autoFix: true,
232 |     reportFormat: 'markdown'
233 |   }
234 | });
235 | 
236 | const result = await validator.validate('path/to/document.md');
237 | console.log(result.report);
238 | ```
239 | 
240 | #### Custom Rules
241 | ```typescript
242 | // Custom rule example
243 | const customRules = {
244 |   ...markdownRules,
245 |   content: {
246 |     ...markdownRules.content,
247 |     customChecks: [
248 |       {
249 |         name: 'checkVersionFormat',
250 |         pattern: /^v\d+\.\d+\.\d+$/,
251 |         message: 'Version must follow semantic versioning'
252 |       }
253 |     ]
254 |   }
255 | };
256 | ```
257 | 
258 | ## Version History
259 | - v1.0.0 - Initial documentation enforcer system
260 | - Current: v1.0.0
261 | 
262 | ## Last Update
263 | - Timestamp: ${new Date().toISOString()}
264 | - Type: System Enhancement
265 | - Changes: Created comprehensive documentation validation system 
```

.cursor/memory/engineering-workflow-example.mdc
```
1 | ---
2 | description: Example of proper engineering workflow in text-cleanup.js tool development
3 | globs: text-cleanup.js,test/text-cleanup.test.js,.github/workflows/text-cleanup.yml
4 | alwaysApply: false
5 | ---
6 | # 🔧 Engineering Workflow Example: Text Cleanup Tool
7 | 
8 | This document records the development of the text-cleanup.js tool as an exemplary engineering workflow that follows proper development practices in the Ollama Ecosystem.
9 | 
10 | ## Initial Problem Statement
11 | 
12 | **Need**: A tool to maintain consistent naming across the codebase, particularly when migrating from `ollama-tag-cli` to `t2p`.
13 | 
14 | **Requirements**:
15 | - Context-aware text replacement
16 | - Support for different file types
17 | - Smart detection of code vs. documentation contexts
18 | - Batch processing capabilities
19 | - Report generation
20 | - Dry-run preview mode
21 | 
22 | ## Engineering Workflow Steps
23 | 
24 | ### 1. Initial Implementation
25 | 
26 | - Created core functionality with commander.js for CLI interface
27 | - Implemented file discovery with glob patterns
28 | - Added context analysis for pattern matching
29 | - Established report generation in Markdown
30 | 
31 | ### 2. Enhanced Context Detection
32 | 
33 | - Added sophisticated context detection patterns:
34 |   - Code contexts (functions, imports, classes, etc.)
35 |   - Documentation contexts (markdown, comments, etc.)
36 |   - Shell script contexts (npm, bash, etc.)
37 |   - Package.json contexts (dependencies, scripts)
38 |   - File path contexts (imports, requires)
39 |   - Capitalization contexts (sentence beginnings, all-caps)
40 | 
41 | ### 3. Test-Driven Development
42 | 
43 | - Created comprehensive test suite with Mocha
44 | - Implemented test cases for different file types and contexts
45 | - Added setup/teardown procedures for test environment
46 | - Created assertion tests for core functionality
47 | - Ensured coverage of edge cases
48 | 
49 | ### 4. CI/CD Integration
50 | 
51 | - Created GitHub Actions workflow
52 | - Configured multi-version Node.js testing
53 | - Added reporting and artifact generation
54 | - Implemented warning system for excessive inconsistencies
55 | - Added code coverage reporting
56 | 
57 | ### 5. Documentation
58 | 
59 | - Created comprehensive markdown documentation
60 | - Added examples for common use cases
61 | - Documented context detection patterns
62 | - Created integration guide for migration
63 | 
64 | ## Engineering Best Practices Demonstrated
65 | 
66 | 1. **Modular Design**: Separate functions for specific responsibilities
67 | 2. **Error Handling**: Comprehensive try/catch and error reporting
68 | 3. **Configuration Management**: CLI options with sensible defaults
69 | 4. **Testing**: Comprehensive test suite with various scenarios
70 | 5. **Documentation**: Complete user and developer documentation
71 | 6. **Progressive Enhancement**: Started with core functionality, then expanded
72 | 7. **CI/CD Integration**: Automated testing and reporting
73 | 8. **DRY Principle**: Reusable functions for common operations
74 | 9. **Context Awareness**: Smart decisions based on surrounding code
75 | 
76 | ## Code Quality Principles
77 | 
78 | 1. **Readable Code**: Clear variable names and comments
79 | 2. **Maintainable Structure**: Logical function organization
80 | 3. **Performance Considerations**: Optimized file processing
81 | 4. **Error Recovery**: Graceful handling of errors
82 | 5. **Input Validation**: Check for required parameters and valid inputs
83 | 
84 | ## Workflow Impact
85 | 
86 | The development of the text-cleanup.js tool demonstrates proper engineering workflows by:
87 | 
88 | 1. **Solving a Real Need**: Addressing the naming consistency challenge
89 | 2. **Progressive Implementation**: Starting with core functionality and expanding
90 | 3. **Comprehensive Testing**: Ensuring reliability across use cases
91 | 4. **Integration with Ecosystem**: Working with existing tools and workflows
92 | 5. **Documentation-Driven**: Complete documentation for users and developers
93 | 
94 | ## Key Files
95 | 
96 | - `text-cleanup.js`: Main implementation with context analysis
97 | - `test/text-cleanup.test.js`: Comprehensive test suite
98 | - `.github/workflows/text-cleanup.yml`: CI/CD configuration
99 | - `docs/text-cleanup.md`: User documentation
100 | - `t2p/docs/text-cleanup-integration.md`: Integration documentation
101 | 
102 | ## Lessons Learned
103 | 
104 | 1. Context-aware text replacement requires sophisticated pattern detection
105 | 2. Test-driven development ensures functionality across various scenarios
106 | 3. Command-line tools benefit from comprehensive option handling
107 | 4. Report generation enhances visibility and confidence in tool operation
108 | 5. Integration with existing workflows enhances adoption and utility
109 | 
110 | This example serves as a reference for future engineering tasks, demonstrating the proper application of the Engineering Mode principles in the Development Mode Framework. 
```

.cursor/memory/feature-visualization.mdc
```
1 | ---
2 | description: 
3 | globs: 
4 | alwaysApply: true
5 | ---
6 | # Feature Visualization System
7 | 
8 | ## System Overview
9 | - Name: Feature Visualization System
10 | - Category: Development Tools
11 | - Priority: P1
12 | - Status: 🟡 In Progress
13 | - Horizon: H1
14 | - Last Updated: ${new Date().toISOString()}
15 | - Version: 1.0.0
16 | 
17 | ## Core Components
18 | 
19 | ### Template Management
20 | ```typescript
21 | interface TemplateManager {
22 |   templates: {
23 |     name: string;
24 |     version: string;
25 |     category: string;
26 |     lastUpdated: string;
27 |     usage: number;
28 |     rating: number;
29 |   }[];
30 |   validation: {
31 |     required: string[];
32 |     optional: string[];
33 |     rules: ValidationRule[];
34 |   };
35 |   automation: {
36 |     generation: boolean;
37 |     validation: boolean;
38 |     updates: boolean;
39 |   };
40 | }
41 | ```
42 | 
43 | ### Visualization Engine
44 | ```typescript
45 | interface VisualizationEngine {
46 |   renderer: {
47 |     type: 'three.js' | 'babylon.js' | 'custom';
48 |     version: string;
49 |     features: string[];
50 |   };
51 |   views: {
52 |     architecture: ArchitectureView;
53 |     progress: ProgressView;
54 |     knowledge: KnowledgeView;
55 |   };
56 |   interactions: {
57 |     navigation: NavigationConfig;
58 |     selection: SelectionConfig;
59 |     editing: EditingConfig;
60 |   };
61 | }
62 | ```
63 | 
64 | ### Real-time Updates
65 | ```typescript
66 | interface UpdateSystem {
67 |   sources: {
68 |     git: GitIntegration;
69 |     jira: JiraIntegration;
70 |     slack: SlackIntegration;
71 |   };
72 |   triggers: {
73 |     commit: UpdateTrigger;
74 |     status: UpdateTrigger;
75 |     metric: UpdateTrigger;
76 |   };
77 |   notifications: {
78 |     type: 'email' | 'slack' | 'ui';
79 |     priority: 'low' | 'medium' | 'high';
80 |     content: string;
81 |   }[];
82 | }
83 | ```
84 | 
85 | ## Implementation Status
86 | 
87 | ### Core Implementation
88 | - [x] Template System
89 |   - [x] Base Template
90 |   - [x] Validation Rules
91 |   - [x] Automation Tools
92 | - [ ] Visualization Engine
93 |   - [ ] 3D Renderer
94 |   - [ ] View Types
95 |   - [ ] Interaction System
96 | - [ ] Update System
97 |   - [ ] Integration Points
98 |   - [ ] Real-time Updates
99 |   - [ ] Notifications
100 | 
101 | ### Integration
102 | - [ ] Version Control
103 |   - [ ] Git Integration
104 |   - [ ] Branch Tracking
105 |   - [ ] Change Detection
106 | - [ ] Project Management
107 |   - [ ] Jira Integration
108 |   - [ ] Task Tracking
109 |   - [ ] Timeline Sync
110 | - [ ] Communication
111 |   - [ ] Slack Integration
112 |   - [ ] Team Updates
113 |   - [ ] Notifications
114 | 
115 | ## 3D Visualization
116 | 
117 | ### View Types
118 | 1. System Architecture View
119 |    - Component relationships
120 |    - Data flow paths
121 |    - Integration points
122 |    - Status indicators
123 | 
124 | 2. Development Progress View
125 |    - Task completion
126 |    - Timeline visualization
127 |    - Resource allocation
128 |    - Blockers and dependencies
129 | 
130 | 3. Knowledge Graph View
131 |    - Feature relationships
132 |    - Context connections
133 |    - Learning outcomes
134 |    - Pattern recognition
135 | 
136 | ### Visualization Properties
137 | ```typescript
138 | interface VisualizationConfig {
139 |   view: {
140 |     type: 'architecture' | 'progress' | 'knowledge';
141 |     perspective: 'top' | 'front' | 'side' | 'isometric';
142 |     zoom: number;
143 |     rotation: [number, number, number];
144 |   };
145 |   elements: {
146 |     nodes: {
147 |       type: string;
148 |       position: [number, number, number];
149 |       scale: number;
150 |       color: string;
151 |       opacity: number;
152 |     }[];
153 |     edges: {
154 |       from: string;
155 |       to: string;
156 |       type: string;
157 |       color: string;
158 |       thickness: number;
159 |     }[];
160 |   };
161 |   interactions: {
162 |     hover: boolean;
163 |     click: boolean;
164 |     drag: boolean;
165 |     zoom: boolean;
166 |   };
167 | }
168 | ```
169 | 
170 | ## Success Metrics
171 | 
172 | ### Performance Metrics
173 | - Response Time: < 100ms
174 | - Resource Usage: < 500MB
175 | - Scalability: Support 1000+ nodes
176 | - Reliability: 99.9% uptime
177 | 
178 | ### Quality Metrics
179 | - Code Coverage: > 90%
180 | - Bug Rate: < 0.1%
181 | - User Satisfaction: > 4.5/5
182 | - Documentation Coverage: 100%
183 | 
184 | ## Integration Points
185 | 
186 | ### System Connections
187 | - [ ] Git
188 |   - Connection Type: API
189 |   - Status: Planned
190 |   - Dependencies: Git API
191 | - [ ] Jira
192 |   - Connection Type: API
193 |   - Status: Planned
194 |   - Dependencies: Jira API
195 | - [ ] Slack
196 |   - Connection Type: API
197 |   - Status: Planned
198 |   - Dependencies: Slack API
199 | 
200 | ### Data Flow
201 | - [ ] Input Sources
202 |   - Type: Git Events
203 |   - Format: JSON
204 |   - Validation: Planned
205 | - [ ] Output Destinations
206 |   - Type: UI Updates
207 |   - Format: WebSocket
208 |   - Validation: Planned
209 | 
210 | ## Development Timeline
211 | 
212 | ### Phase 1: Foundation
213 | - Start Date: ${new Date().toISOString()}
214 | - End Date: [TBD]
215 | - Milestones: [Template System, Basic Visualization]
216 | - Dependencies: [Three.js, React]
217 | 
218 | ### Phase 2: Core Development
219 | - Start Date: [TBD]
220 | - End Date: [TBD]
221 | - Milestones: [3D Views, Real-time Updates]
222 | - Dependencies: [WebSocket, Git API]
223 | 
224 | ### Phase 3: Integration
225 | - Start Date: [TBD]
226 | - End Date: [TBD]
227 | - Milestones: [External Systems, Notifications]
228 | - Dependencies: [Jira API, Slack API]
229 | 
230 | ## Learning & Adaptation
231 | 
232 | ### Update Triggers
233 | - [x] Technical Changes
234 | - [x] User Feedback
235 | - [x] Performance Issues
236 | - [x] Security Concerns
237 | 
238 | ### Adaptation Rules
239 | - [x] Pattern Recognition
240 | - [x] Performance Optimization
241 | - [x] Security Hardening
242 | - [x] User Experience
243 | 
244 | ## Documentation Requirements
245 | 
246 | ### Technical Documentation
247 | - [x] Architecture Overview
248 | - [x] API Documentation
249 | - [x] Data Models
250 | - [x] Integration Guide
251 | 
252 | ### User Documentation
253 | - [ ] User Guide
254 | - [ ] API Reference
255 | - [ ] Troubleshooting Guide
256 | - [ ] FAQ
257 | 
258 | ## Version History
259 | - v1.0.0 - Initial system documentation
260 | - Current: v1.0.0
261 | 
262 | ## Last Update
263 | - Timestamp: ${new Date().toISOString()}
264 | - Type: Initial Creation
265 | - Changes: Created comprehensive feature visualization system documentation
266 | 
267 | ## Tags
268 | #visualization #3d #template #documentation #tracking #development #integration #metrics #learning 
```

.cursor/memory/horizon-map.mdc
```
1 | ---
2 | description: 
3 | globs: 
4 | alwaysApply: true
5 | ---
6 | # Horizon Map
7 | 
8 | ## Current State Overview
9 | Last Updated: ${new Date().toISOString()}
10 | Status: Active Development
11 | Framework Version: 1.0.0
12 | 
13 | ## Horizon 1 (Now) - Active Implementation
14 | 
15 | ### Core Systems [H1]
16 | - 🟡 AI Misconception Tracking System
17 |   - Detection Engine
18 |   - Feedback Analysis
19 |   - Pattern Recognition
20 |   - Real-time Monitoring
21 |   - Status: In active development
22 |   - Timeline: 2-3 weeks
23 | 
24 | - 🔴 Self-Improving Model Integration
25 |   - Memory Architecture Enhancement
26 |   - Meta-Learning Framework
27 |   - CLI Voice Interface
28 |   - Continuous Learning Pipeline
29 |   - Status: Not Started
30 |   - Timeline: 3 weeks
31 |   - Dependencies: TitanMemoryModel, Context Router, Memory Service
32 | 
33 | - 🟡 VSCode/Cursor Extension
34 |   - Extension Foundation
35 |   - Core Features
36 |   - Integration Layer
37 |   - User Interface
38 |   - Status: Development started
39 |   - Timeline: 5-6 weeks
40 | 
41 | - 🔴 Budget Optimization Workarounds
42 |   - Cost reduction and resource optimization
43 |   - Caching and local alternatives
44 |   - Token usage optimization
45 |   - Monitoring and control systems
46 |   - Timeline: 3 weeks
47 |   - Dependencies: TokenManager, Knowledge Graph, Local Model System
48 | 
49 | - 🔴 Personal Workflow Tracking System
50 |   - Activity recording and metrics analysis
51 |   - Pattern recognition and optimization
52 |   - Integration with agents and sharing
53 |   - Privacy controls and data management
54 |   - Timeline: 3 weeks
55 |   - Dependencies: CLI Engine, Knowledge Graph, Context Router
56 | 
57 | ### Integration Tasks [H1]
58 | - 🟡 Knowledge Graph Integration
59 |   - Context Management
60 |   - Pattern Analysis
61 |   - Learning Rules
62 |   - Status: In progress
63 |   - Timeline: 1-2 weeks
64 | 
65 | - 🟡 System Health Monitoring
66 |   - Performance Metrics
67 |   - Health Checks
68 |   - Alert System
69 |   - Status: Active implementation
70 |   - Timeline: 1 week
71 | 
72 | ## Horizon 2 (Next) - Planning Phase
73 | 
74 | ### Enhancement Projects [H2]
75 | - 🔜 Advanced Pattern Recognition
76 |   - Machine Learning Models
77 |   - Pattern Library
78 |   - Automated Learning
79 |   - Expected Start: +3 weeks
80 | 
81 | - 🔜 Distributed Computing Support
82 |   - Resource Discovery
83 |   - Task Distribution
84 |   - Load Balancing
85 |   - Expected Start: +4 weeks
86 | 
87 | ### Integration Projects [H2]
88 | - 🔜 Multi-Model Support
89 |   - Model Integration Framework
90 |   - Adapter System
91 |   - Performance Optimization
92 |   - Expected Start: +5 weeks
93 | 
94 | - 🔜 Advanced Caching System
95 |   - Multi-level Cache
96 |   - Semantic Cache
97 |   - Cache Synchronization
98 |   - Expected Start: +6 weeks
99 | 
100 | ## Horizon 3 (Future) - Vision & Research
101 | 
102 | ### Research Initiatives [H3]
103 | - 🔮 Autonomous Learning System
104 |   - Self-improving Detection
105 |   - Adaptive Pattern Recognition
106 |   - Timeline: Q3-Q4
107 | 
108 | - 🔮 Cross-Project Intelligence
109 |   - Project Pattern Analysis
110 |   - Knowledge Transfer
111 |   - Timeline: Q4
112 | 
113 | ### Innovation Projects [H3]
114 | - 🔮 Natural Language Code Evolution
115 |   - Code Understanding
116 |   - Semantic Transformation
117 |   - Timeline: Future
118 | 
119 | - 🔮 Collaborative AI Development
120 |   - Multi-Agent Cooperation
121 |   - Shared Knowledge Base
122 |   - Timeline: Future
123 | 
124 | ## Horizon Transitions
125 | 
126 | ### Promotion Criteria
127 | 1. Technical Readiness
128 |    - Implementation plan complete
129 |    - Dependencies identified
130 |    - Resources available
131 |    - Risk assessment done
132 | 
133 | 2. Business Value
134 |    - Clear use cases
135 |    - Measurable benefits
136 |    - Resource requirements
137 |    - ROI assessment
138 | 
139 | 3. Integration Readiness
140 |    - System compatibility
141 |    - Data flow mapped
142 |    - API contracts defined
143 |    - Testing strategy ready
144 | 
145 | ### Transition Schedule
146 | - Weekly Review: Monday morning
147 | - Promotion Ceremony: Every 3 weeks
148 | - Horizon Assessment: Monthly
149 | - Strategic Review: Quarterly
150 | 
151 | ## Success Metrics
152 | 
153 | ### Horizon 1 Metrics
154 | - Implementation completion rate: > 90%
155 | - Quality metrics met: > 95%
156 | - Timeline adherence: +/- 1 week
157 | - Integration success rate: > 98%
158 | 
159 | ### Horizon 2 Metrics
160 | - Planning completion: > 85%
161 | - Resource allocation: 100%
162 | - Risk mitigation: > 90%
163 | - Readiness assessment: > 95%
164 | 
165 | ### Horizon 3 Metrics
166 | - Research progress: Quarterly review
167 | - Innovation potential: High
168 | - Resource investment: < 20%
169 | - Strategic alignment: 100%
170 | 
171 | ## Learning & Adaptation
172 | 
173 | ### Update Triggers
174 | - New technology emergence
175 | - Market changes
176 | - User feedback
177 | - Performance metrics
178 | - Resource availability
179 | 
180 | ### Adaptation Rules
181 | - Review horizons monthly
182 | - Adjust timelines as needed
183 | - Update success metrics
184 | - Realign with strategy
185 | - Incorporate learnings
186 | 
187 | ## Version History
188 | - v1.0.0 - Initial horizon map creation
189 | - Current: v1.0.0
190 | 
191 | ## Last Update
192 | - Timestamp: ${new Date().toISOString()}
193 | - Type: Initial Creation
194 | - Changes: Created comprehensive horizon map with current projects and future initiatives 
```

.cursor/memory/implementation-structure.mdc
```
1 | ---
2 | description: 
3 | globs: 
4 | alwaysApply: true
5 | ---
6 | # Implementation Structure Memory Entry
7 | 
8 | ## Memory Context
9 | - Created: ${new Date().toISOString()}
10 | - Category: Development & Architecture
11 | - Priority: P1
12 | - Status: Active Development
13 | - Related Files: 
14 |   - docs/implementation-structure.md
15 |   - master-todo.mdc
16 | 
17 | ## Core Components Memory Map
18 | 
19 | ### 1. Architecture System
20 | ```typescript
21 | type MemoryNode = {
22 |   component: 'ArchitectureSystem';
23 |   state: {
24 |     activeArchitectures: Map<string, ArchitectureState>;
25 |     architectureCache: LRUCache<string, Architecture>;
26 |     designPatterns: Map<string, DesignPattern>;
27 |   };
28 |   metrics: {
29 |     architectureStability: number;
30 |     patternEffectiveness: number;
31 |     adaptationRate: number;
32 |   };
33 | }
34 | ```
35 | 
36 | ### 2. Component Management
37 | ```typescript
38 | type MemoryNode = {
39 |   component: 'ComponentManager';
40 |   state: {
41 |     activeComponents: Map<string, ComponentState>;
42 |     componentCache: LRUCache<string, Component>;
43 |     dependencies: Map<string, Set<string>>;
44 |   };
45 |   metrics: {
46 |     componentReuse: number;
47 |     dependencyClarity: number;
48 |     integrationSuccess: number;
49 |   };
50 | }
51 | ```
52 | 
53 | ### 3. Implementation Pipeline
54 | ```typescript
55 | type MemoryNode = {
56 |   component: 'ImplementationPipeline';
57 |   state: {
58 |     activeImplementations: Map<string, ImplementationStatus>;
59 |     pipelineStages: Map<string, StageState>;
60 |     qualityGates: Map<string, QualityGate>;
61 |   };
62 |   metrics: {
63 |     pipelineEfficiency: number;
64 |     qualityCompliance: number;
65 |     deliverySpeed: number;
66 |   };
67 | }
68 | ```
69 | 
70 | ## Implementation Progress
71 | 
72 | ### Current State
73 | ```typescript
74 | interface ImplementationState {
75 |   phase: 'initial';
76 |   completedComponents: [
77 |     'ArchitectureValidator',
78 |     'ComponentRegistry'
79 |   ];
80 |   activeWork: [
81 |     'PipelineOptimization',
82 |     'QualityGates'
83 |   ];
84 |   pendingWork: [
85 |     'PatternLibrary',
86 |     'PerformanceOptimization',
87 |     'IntegrationTesting'
88 |   ];
89 | }
90 | ```
91 | 
92 | ### Next Actions
93 | 1. Implement pipeline optimization
94 | 2. Set up quality gates
95 | 3. Create pattern library
96 | 4. Configure performance monitoring
97 | 
98 | ## Knowledge Graph Integration
99 | 
100 | ### Tags
101 | - #architecture
102 | - #implementation
103 | - #components
104 | - #pipeline
105 | - #quality
106 | - #patterns
107 | 
108 | ### Relationships
109 | ```typescript
110 | interface KnowledgeGraphNode {
111 |   id: 'implementation-structure';
112 |   connections: [
113 |     { id: 'research-levels-framework', type: 'extends' },
114 |     { id: 'oacl', type: 'supports' },
115 |     { id: 'development-modes', type: 'enables' }
116 |   ];
117 |   context: {
118 |     purpose: 'structured-implementation';
119 |     scope: 'system-wide';
120 |     impact: 'development-efficiency';
121 |   };
122 | }
123 | ```
124 | 
125 | ## Success Metrics Tracking
126 | 
127 | ### Current Performance
128 | ```typescript
129 | interface MetricsState {
130 |   architectureMetrics: {
131 |     stability: null,      // Target: > 95%
132 |     adaptability: null,   // Target: > 90%
133 |     patternUsage: null    // Target: > 85%
134 |   };
135 |   componentMetrics: {
136 |     reuse: null,         // Target: > 80%
137 |     clarity: null,       // Target: > 90%
138 |     integration: null    // Target: > 95%
139 |   };
140 |   pipelineMetrics: {
141 |     efficiency: null,    // Target: > 90%
142 |     quality: null,       // Target: > 95%
143 |     speed: null         // Target: < 24h
144 |   };
145 | }
146 | ```
147 | 
148 | ## Learning & Adaptation
149 | 
150 | ### Observed Patterns
151 | ```typescript
152 | interface LearningState {
153 |   patterns: [];  // To be populated during implementation
154 |   optimizations: [];  // To be populated during implementation
155 |   challenges: [];  // To be populated during implementation
156 | }
157 | ```
158 | 
159 | ### Adaptation Rules
160 | 1. Refine architecture patterns based on stability metrics
161 | 2. Optimize component structure based on reuse rates
162 | 3. Adjust pipeline stages based on efficiency metrics
163 | 4. Update quality gates based on compliance rates
164 | 
165 | ## Memory Update Protocol
166 | 
167 | ### Update Triggers
168 | - New architecture pattern implementation
169 | - Component structure changes
170 | - Pipeline stage modifications
171 | - Quality gate updates
172 | - Pattern discovery
173 | - Learning outcome documentation
174 | 
175 | ### Update Process
176 | 1. Record change in appropriate section
177 | 2. Update metrics if applicable
178 | 3. Document new patterns or learnings
179 | 4. Adjust adaptation rules if needed
180 | 5. Update knowledge graph relationships
181 | 6. Record timestamp of update
182 | 
183 | ## Version History
184 | - v1.0.0 - Initial framework definition
185 | - Current: v1.0.0
186 | 
187 | ## Last Update
188 | - Timestamp: ${new Date().toISOString()}
189 | - Type: Initial Creation
190 | - Changes: Implementation Structure framework definition and memory structure setup 
```

.cursor/memory/index.mdc
```
1 | ---
2 | description: 
3 | globs: 
4 | alwaysApply: true
5 | ---
6 | # Memory System Index
7 | 
8 | ## Active Memory Entries
9 | 
10 | ### Research & Innovation
11 | - [Research Levels Framework](mdc:OSPAiN2/OSPAiN2/OSPAiN2/OSPAiN2/OSPAiN2/OSPAiN2/OSPAiN2/OSPAiN2/research-levels-framework.mdc)
12 |   - Status: Active Development
13 |   - Priority: P1
14 |   - Last Update: ${new Date().toISOString()}
15 |   - Tags: #research #automation #innovation #integration
16 | 
17 | ### Communication & Integration
18 | - [OACL](mdc:OSPAiN2/OSPAiN2/OSPAiN2/OSPAiN2/OSPAiN2/OSPAiN2/OSPAiN2/OSPAiN2/oacl.mdc)
19 |   - Status: Active Development
20 |   - Priority: P1
21 |   - Last Update: ${new Date().toISOString()}
22 |   - Tags: #communication #optimization #integration #context
23 | 
24 | ### Development & Architecture
25 | - [Implementation Structure](mdc:OSPAiN2/OSPAiN2/OSPAiN2/OSPAiN2/OSPAiN2/OSPAiN2/OSPAiN2/OSPAiN2/implementation-structure.mdc)
26 |   - Status: Active Development
27 |   - Priority: P1
28 |   - Last Update: ${new Date().toISOString()}
29 |   - Tags: #architecture #implementation #components #pipeline
30 | 
31 | ### System Health
32 | - [System Health Monitor](mdc:OSPAiN2/OSPAiN2/OSPAiN2/OSPAiN2/OSPAiN2/OSPAiN2/OSPAiN2/OSPAiN2/system-health.mdc)
33 |   - Status: Active Development
34 |   - Priority: P1
35 |   - Last Update: ${new Date().toISOString()}
36 |   - Tags: #monitoring #health #reliability #backup
37 | 
38 | ### Documentation
39 | - [Documentation Enforcer](mdc:OSPAiN2/OSPAiN2/OSPAiN2/OSPAiN2/OSPAiN2/OSPAiN2/OSPAiN2/OSPAiN2/documentation-enforcer.mdc)
40 |   - Status: Active Development
41 |   - Priority: P1
42 |   - Last Update: ${new Date().toISOString()}
43 |   - Tags: #documentation #validation #quality #standards
44 | 
45 | ### Component Management
46 | - [Absorption Feature](mdc:OSPAiN2/OSPAiN2/OSPAiN2/OSPAiN2/OSPAiN2/OSPAiN2/OSPAiN2/OSPAiN2/absorption-feature.mdc)
47 |   - Status: Active Development
48 |   - Priority: P1
49 |   - Last Update: ${new Date().toISOString()}
50 |   - Tags: #components #detection #analysis #integration
51 | - **Component Absorption System**
52 |   - Status: Active Development
53 |   - Priority: P1
54 |   - Last Update: ${new Date().toISOString()}
55 |   - Tags: #component-management #automation #integration #analysis #monitoring
56 |   - Related Files: 
57 |     - .cursor/memory/component-absorption.mdc
58 |     - master-todo.mdc
59 |     - documentation-enforcer.mdc
60 |     - system-health.mdc
61 | 
62 | ### AI Quality Assurance
63 | - **AI Misconception Tracking System**
64 |   - Status: Active Development
65 |   - Priority: P1
66 |   - Last Update: ${new Date().toISOString()}
67 |   - Tags: #ai-quality #misconceptions #monitoring #learning
68 |   - Related Files:
69 |     - .cursor/memory/ai-misconception-tracker.mdc
70 |     - master-todo.mdc
71 |     - component-absorption.mdc
72 |     - system-health.mdc
73 | 
74 | ### Project Management
75 | - **Horizon Map**
76 |   - Status: Active
77 |   - Priority: P1
78 |   - Last Update: ${new Date().toISOString()}
79 |   - Tags: #planning #roadmap #strategy #horizons
80 |   - Related Files:
81 |     - .cursor/memory/horizon-map.mdc
82 |     - master-todo.mdc
83 |     - ai-misconception-tracker.mdc
84 |     - extension-tasks.mdc
85 | 
86 | ## Memory Graph
87 | 
88 | ```typescript
89 | interface MemoryGraph {
90 |   nodes: {
91 |     'research-levels-framework': {
92 |       type: 'framework';
93 |       status: 'active';
94 |       dependencies: ['oacl', 'implementation-structure'];
95 |       consumers: ['development-modes'];
96 |     },
97 |     'oacl': {
98 |       type: 'system';
99 |       status: 'active';
100 |       dependencies: ['implementation-structure'];
101 |       consumers: ['research-levels-framework', 'development-modes'];
102 |     },
103 |     'implementation-structure': {
104 |       type: 'system';
105 |       status: 'active';
106 |       dependencies: ['oacl'];
107 |       consumers: ['research-levels-framework', 'development-modes'];
108 |     },
109 |     'system-health': {
110 |       type: 'monitor';
111 |       status: 'active';
112 |       dependencies: ['research-levels-framework', 'oacl', 'implementation-structure'];
113 |       consumers: ['all-systems'];
114 |     },
115 |     'documentation-enforcer': {
116 |       type: 'validator';
117 |       status: 'active';
118 |       dependencies: ['all-systems'];
119 |       consumers: ['all-systems'];
120 |     },
121 |     'absorption-feature': {
122 |       type: 'system';
123 |       status: 'active';
124 |       dependencies: ['all-systems'];
125 |       consumers: ['all-systems'];
126 |     },
127 |     'ai-misconception-tracker': {
128 |       type: 'monitor';
129 |       status: 'active';
130 |       dependencies: ['knowledge-graph', 'system-health', 'documentation-enforcer'];
131 |       consumers: ['all-systems'];
132 |     },
133 |     'horizon-map': {
134 |       type: 'framework';
135 |       status: 'active';
136 |       dependencies: ['all-systems'];
137 |       consumers: ['all-systems'];
138 |     }
139 |   };
140 |   edges: [
141 |     {
142 |       from: 'research-levels-framework';
143 |       to: 'oacl';
144 |       type: 'uses';
145 |     },
146 |     {
147 |       from: 'research-levels-framework';
148 |       to: 'implementation-structure';
149 |       type: 'extends';
150 |     },
151 |     {
152 |       from: 'oacl';
153 |       to: 'implementation-structure';
154 |       type: 'supports';
155 |     },
156 |     {
157 |       from: 'development-modes';
158 |       to: 'research-levels-framework';
159 |       type: 'integrates';
160 |     },
161 |     {
162 |       from: 'system-health';
163 |       to: 'research-levels-framework';
164 |       type: 'monitors';
165 |     },
166 |     {
167 |       from: 'system-health';
168 |       to: 'oacl';
169 |       type: 'monitors';
170 |     },
171 |     {
172 |       from: 'system-health';
173 |       to: 'implementation-structure';
174 |       type: 'monitors';
175 |     },
176 |     {
177 |       from: 'documentation-enforcer';
178 |       to: 'research-levels-framework';
179 |       type: 'validates';
180 |     },
181 |     {
182 |       from: 'documentation-enforcer';
183 |       to: 'oacl';
184 |       type: 'validates';
185 |     },
186 |     {
187 |       from: 'documentation-enforcer';
188 |       to: 'implementation-structure';
189 |       type: 'validates';
190 |     },
191 |     {
192 |       from: 'documentation-enforcer';
193 |       to: 'system-health';
194 |       type: 'validates';
195 |     },
196 |     {
197 |       from: 'absorption-feature';
198 |       to: 'research-levels-framework';
199 |       type: 'enhances';
200 |     },
201 |     {
202 |       from: 'absorption-feature';
203 |       to: 'oacl';
204 |       type: 'enhances';
205 |     },
206 |     {
207 |       from: 'absorption-feature';
208 |       to: 'implementation-structure';
209 |       type: 'enhances';
210 |     },
211 |     {
212 |       from: 'absorption-feature';
213 |       to: 'system-health';
214 |       type: 'enhances';
215 |     },
216 |     {
217 |       from: 'absorption-feature';
218 |       to: 'documentation-enforcer';
219 |       type: 'enhances';
220 |     },
221 |     {
222 |       from: 'ai-misconception-tracker';
223 |       to: 'research-levels-framework';
224 |       type: 'monitors';
225 |     },
226 |     {
227 |       from: 'ai-misconception-tracker';
228 |       to: 'oacl';
229 |       type: 'monitors';
230 |     },
231 |     {
232 |       from: 'ai-misconception-tracker';
233 |       to: 'implementation-structure';
234 |       type: 'monitors';
235 |     },
236 |     {
237 |       from: 'ai-misconception-tracker';
238 |       to: 'system-health';
239 |       type: 'monitors';
240 |     },
241 |     {
242 |       from: 'ai-misconception-tracker';
243 |       to: 'documentation-enforcer';
244 |       type: 'monitors';
245 |     },
246 |     {
247 |       from: 'horizon-map';
248 |       to: 'research-levels-framework';
249 |       type: 'integrates';
250 |     },
251 |     {
252 |       from: 'horizon-map';
253 |       to: 'oacl';
254 |       type: 'integrates';
255 |     },
256 |     {
257 |       from: 'horizon-map';
258 |       to: 'implementation-structure';
259 |       type: 'integrates';
260 |     },
261 |     {
262 |       from: 'horizon-map';
263 |       to: 'system-health';
264 |       type: 'integrates';
265 |     },
266 |     {
267 |       from: 'horizon-map';
268 |       to: 'documentation-enforcer';
269 |       type: 'integrates';
270 |     }
271 |   ];
272 | }
273 | ```
274 | 
275 | ## Memory Update Protocol
276 | 
277 | ### Update Process
278 | 1. Add new memory entries to this index
279 | 2. Update memory graph relationships
280 | 3. Maintain status and priority information
281 | 4. Track last update timestamps
282 | 5. Manage tags and categories
283 | 6. Monitor system health
284 | 7. Execute backup procedures
285 | 8. Validate documentation
286 | 9. Process component absorption
287 | 
288 | ### Memory Categories
289 | - Research & Innovation
290 | - Communication & Integration
291 | - Development & Architecture
292 | - Implementation Structure
293 | - Development Modes
294 | - Tools & Infrastructure
295 | - Knowledge Base
296 | - Learning Outcomes
297 | - System Health
298 | - Documentation
299 | - Component Management
300 | 
301 | ### Automated Update Triggers
302 | 
303 | #### File System Triggers
304 | ```typescript
305 | interface FileSystemTriggers {
306 |   onFileChange: {
307 |     pattern: '**/*.mdc';
308 |     actions: [
309 |       'updateLastModified',
310 |       'validateStructure',
311 |       'updateGraph',
312 |       'checkDependencies',
313 |       'verifyHealth',
314 |       'validateDocumentation',
315 |       'processComponent'
316 |     ];
317 |   };
318 |   onNewFile: {
319 |     pattern: '**/*.mdc';
320 |     actions: [
321 |       'addToIndex',
322 |       'initializeGraph',
323 |       'validateRelationships',
324 |       'updateCategories',
325 |       'initializeHealthCheck',
326 |       'validateNewDocument',
327 |       'detectComponent'
328 |     ];
329 |   };
330 |   onFileDelete: {
331 |     pattern: '**/*.mdc';
332 |     actions: [
333 |       'removeFromIndex',
334 |       'updateGraph',
335 |       'cleanupRelationships',
336 |       'backupBeforeDelete',
337 |       'archiveDocumentation',
338 |       'cleanupComponent'
339 |     ];
340 |   };
341 | }
342 | ```
343 | 
344 | #### Content Triggers
345 | ```typescript
346 | interface ContentTriggers {
347 |   onMetricUpdate: {
348 |     pattern: 'metrics:';
349 |     actions: [
350 |       'updateMetrics',
351 |       'checkThresholds',
352 |       'triggerAlerts',
353 |       'updateGraph',
354 |       'verifyHealth',
355 |       'validateDocumentation',
356 |       'analyzeComponent'
357 |     ];
358 |   };
359 |   onPatternDiscovery: {
360 |     pattern: 'patterns:';
361 |     actions: [
362 |       'recordPattern',
363 |       'updateRelationships',
364 |       'optimizeStructure',
365 |       'updateGraph',
366 |       'analyzeImpact',
367 |       'validateDocumentation',
368 |       'processComponentPattern'
369 |     ];
370 |   };
371 |   onLearningOutcome: {
372 |     pattern: 'learning:';
373 |     actions: [
374 |       'recordLearning',
375 |       'updateAdaptations',
376 |       'optimizeRules',
377 |       'updateGraph',
378 |       'evaluateEffectiveness',
379 |       'validateDocumentation',
380 |       'updateComponentKnowledge'
381 |     ];
382 |   };
383 |   onHealthAlert: {
384 |     pattern: 'health:';
385 |     actions: [
386 |       'triggerAlert',
387 |       'executeRecovery',
388 |       'updateStatus',
389 |       'notifyStakeholders',
390 |       'validateDocumentation',
391 |       'checkComponentHealth'
392 |     ];
393 |   };
394 |   onDocumentationUpdate: {
395 |     pattern: 'docs:';
396 |     actions: [
397 |       'validateDocumentation',
398 |       'checkCompliance',
399 |       'generateReport',
400 |       'applyFixes',
401 |       'updateIndex',
402 |       'updateComponentDocs'
403 |     ];
404 |   };
405 |   onComponentDetection: {
406 |     pattern: 'component:';
407 |     actions: [
408 |       'detectComponent',
409 |       'analyzeComponent',
410 |       'processComponent',
411 |       'updateIndex',
412 |       'notifyStakeholders'
413 |     ];
414 |   };
415 | }
416 | ```
417 | 
418 | #### Integration Triggers
419 | ```typescript
420 | interface IntegrationTriggers {
421 |   onSystemUpdate: {
422 |     pattern: 'system:';
423 |     actions: [
424 |       'updateDependencies',
425 |       'validateConnections',
426 |       'optimizePerformance',
427 |       'updateGraph',
428 |       'verifyHealth',
429 |       'validateDocumentation',
430 |       'updateComponentSystem'
431 |     ];
432 |   };
433 |   onComponentChange: {
434 |     pattern: 'component:';
435 |     actions: [
436 |       'updateComponent',
437 |       'validateInterfaces',
438 |       'checkDependencies',
439 |       'updateGraph',
440 |       'runHealthChecks',
441 |       'validateDocumentation',
442 |       'processComponentChange'
443 |     ];
444 |   };
445 |   onBackupTrigger: {
446 |     pattern: 'backup:';
447 |     actions: [
448 |       'createBackup',
449 |       'verifyBackup',
450 |       'cleanupOldBackups',
451 |       'updateBackupStatus',
452 |       'archiveDocumentation',
453 |       'backupComponentData'
454 |     ];
455 |   };
456 |   onDocumentationValidation: {
457 |     pattern: 'validate:';
458 |     actions: [
459 |       'runValidation',
460 |       'generateReport',
461 |       'applyFixes',
462 |       'updateIndex',
463 |       'notifyStakeholders',
464 |       'validateComponentDocs'
465 |     ];
466 |   };
467 |   onComponentIntegration: {
468 |     pattern: 'integrate:';
469 |     actions: [
470 |       'detectComponent',
471 |       'analyzeComponent',
472 |       'processComponent',
473 |       'updateIndex',
474 |       'notifyStakeholders',
475 |       'validateIntegration'
476 |     ];
477 |   };
478 | }
479 | ```
480 | 
481 | #### Misconception Triggers
482 | ```typescript
483 | interface MisconceptionTriggers {
484 |   onMisconceptionDetected: {
485 |     pattern: 'misconception:';
486 |     actions: [
487 |       'logMisconception',
488 |       'analyzePattern',
489 |       'updateLearningRules',
490 |       'notifyStakeholders',
491 |       'generateReport',
492 |       'updateDocumentation'
493 |     ];
494 |   };
495 | }
496 | ```
497 | 
498 | #### Horizon Triggers
499 | ```typescript
500 | interface HorizonTriggers {
501 |   onHorizonUpdate: {
502 |     pattern: 'horizon:';
503 |     actions: [
504 |       'updateHorizons',
505 |       'evaluatePromotions',
506 |       'updateTimelines',
507 |       'notifyStakeholders',
508 |       'updateDocumentation'
509 |     ];
510 |   };
511 | }
512 | ```
513 | 
514 | ## Version History
515 | - v1.0.0 - Initial index creation
516 | - v1.1.0 - Added OACL and Implementation Structure entries
517 | - v1.2.0 - Added automated update triggers
518 | - v1.3.0 - Added system health monitoring
519 | - v1.4.0 - Added documentation enforcer
520 | - v1.5.0 - Added absorption feature and component absorption system
521 | - v1.6.0 - Added AI Misconception Tracking System
522 | - v1.7.0 - Added Horizon Map
523 | - Current: v1.7.0
524 | 
525 | ## Last Update
526 | - Timestamp: ${new Date().toISOString()}
527 | - Type: System Enhancement
528 | - Changes: Added AI Misconception Tracking System, enhanced quality assurance capabilities, and added Horizon Map for project planning and management 
```

.cursor/memory/knowledge-index.mdc
```
1 | ---
2 | description: 
3 | globs: 
4 | alwaysApply: false
5 | ---
6 | ## Engineering Mode
7 | - [Text Cleanup Tool Development](mdc:.cursor/memory/engineering-workflow-example.mdc) - Example of proper engineering workflow showing context-aware text replacement tool development
8 | - [Text Cleanup System Integration](mdc:.cursor/memory/text-cleanup-system-integration.mdc) - Details how the text-cleanup tool integrates with other Ollama ecosystem components
9 | - [Text Cleanup Testing Strategy](mdc:.cursor/memory/text-cleanup-testing-strategy.mdc) - Comprehensive testing strategy for the text-cleanup.js tool
10 | - [Text Cleanup Technical Specification](mdc:.cursor/memory/text-cleanup-technical-specification.mdc) - Technical specification for the text-cleanup.js tool 
```

.cursor/memory/oacl.mdc
```
1 | ---
2 | description: 
3 | globs: 
4 | alwaysApply: true
5 | ---
6 | # OACL Memory Entry
7 | 
8 | ## Memory Context
9 | - Created: ${new Date().toISOString()}
10 | - Category: Communication & Integration
11 | - Priority: P1
12 | - Status: Active Development
13 | - Related Files: 
14 |   - docs/optimized-ai-language.md
15 |   - master-todo.mdc
16 | 
17 | ## Core Components Memory Map
18 | 
19 | ### 1. Command System
20 | ```typescript
21 | type MemoryNode = {
22 |   component: 'CommandSystem';
23 |   state: {
24 |     activeCommands: Map<string, CommandStatus>;
25 |     commandCache: LRUCache<string, CommandResult>;
26 |     commandPatterns: Map<string, CommandPattern>;
27 |   };
28 |   metrics: {
29 |     commandSuccessRate: number;
30 |     averageResponseTime: number;
31 |     patternRecognitionRate: number;
32 |   };
33 | }
34 | ```
35 | 
36 | ### 2. Context Management
37 | ```typescript
38 | type MemoryNode = {
39 |   component: 'ContextManager';
40 |   state: {
41 |     activeContexts: Map<string, ContextState>;
42 |     contextCache: LRUCache<string, Context>;
43 |     contextRelationships: Map<string, Set<string>>;
44 |   };
45 |   metrics: {
46 |     contextReuseRate: number;
47 |     contextAccuracy: number;
48 |     contextCompressionRatio: number;
49 |   };
50 | }
51 | ```
52 | 
53 | ### 3. Response System
54 | ```typescript
55 | type MemoryNode = {
56 |   component: 'ResponseSystem';
57 |   state: {
58 |     activeResponses: Map<string, ResponseStatus>;
59 |     responseTemplates: Map<string, ResponseTemplate>;
60 |     responsePatterns: Map<string, ResponsePattern>;
61 |   };
62 |   metrics: {
63 |     responseAccuracy: number;
64 |     responseTime: number;
65 |     templateEffectiveness: number;
66 |   };
67 | }
68 | ```
69 | 
70 | ## Implementation Progress
71 | 
72 | ### Current State
73 | ```typescript
74 | interface ImplementationState {
75 |   phase: 'initial';
76 |   completedComponents: [
77 |     'CommandParser',
78 |     'BasicContextManager'
79 |   ];
80 |   activeWork: [
81 |     'ResponseFormatter',
82 |     'ContextOptimization'
83 |   ];
84 |   pendingWork: [
85 |     'PatternRecognition',
86 |     'PerformanceOptimization',
87 |     'IntegrationTesting'
88 |   ];
89 | }
90 | ```
91 | 
92 | ### Next Actions
93 | 1. Implement response formatter
94 | 2. Optimize context management
95 | 3. Add pattern recognition
96 | 4. Set up performance monitoring
97 | 
98 | ## Knowledge Graph Integration
99 | 
100 | ### Tags
101 | - #communication
102 | - #optimization
103 | - #integration
104 | - #context
105 | - #patterns
106 | - #performance
107 | 
108 | ### Relationships
109 | ```typescript
110 | interface KnowledgeGraphNode {
111 |   id: 'oacl';
112 |   connections: [
113 |     { id: 'research-levels-framework', type: 'provides' },
114 |     { id: 'implementation-structure', type: 'supports' },
115 |     { id: 'development-modes', type: 'enables' }
116 |   ];
117 |   context: {
118 |     purpose: 'optimized-ai-communication';
119 |     scope: 'system-wide';
120 |     impact: 'performance-improvement';
121 |   };
122 | }
123 | ```
124 | 
125 | ## Success Metrics Tracking
126 | 
127 | ### Current Performance
128 | ```typescript
129 | interface MetricsState {
130 |   commandMetrics: {
131 |     successRate: null,    // Target: > 95%
132 |     responseTime: null,   // Target: < 100ms
133 |     patternMatch: null    // Target: > 90%
134 |   };
135 |   contextMetrics: {
136 |     reuseRate: null,      // Target: > 80%
137 |     accuracy: null,       // Target: > 95%
138 |     compression: null     // Target: > 70%
139 |   };
140 |   responseMetrics: {
141 |     accuracy: null,       // Target: > 95%
142 |     time: null,          // Target: < 50ms
143 |     effectiveness: null   // Target: > 90%
144 |   };
145 | }
146 | ```
147 | 
148 | ## Learning & Adaptation
149 | 
150 | ### Observed Patterns
151 | ```typescript
152 | interface LearningState {
153 |   patterns: [];  // To be populated during implementation
154 |   optimizations: [];  // To be populated during implementation
155 |   challenges: [];  // To be populated during implementation
156 | }
157 | ```
158 | 
159 | ### Adaptation Rules
160 | 1. Optimize command patterns based on usage frequency
161 | 2. Adjust context compression based on accuracy metrics
162 | 3. Refine response templates based on effectiveness
163 | 4. Update pattern recognition based on success rates
164 | 
165 | ## Memory Update Protocol
166 | 
167 | ### Update Triggers
168 | - New command pattern implementation
169 | - Context optimization changes
170 | - Response template updates
171 | - Performance metric changes
172 | - Pattern discovery
173 | - Learning outcome documentation
174 | 
175 | ### Update Process
176 | 1. Record change in appropriate section
177 | 2. Update metrics if applicable
178 | 3. Document new patterns or learnings
179 | 4. Adjust adaptation rules if needed
180 | 5. Update knowledge graph relationships
181 | 6. Record timestamp of update
182 | 
183 | ## Version History
184 | - v1.0.0 - Initial framework definition
185 | - Current: v1.0.0
186 | 
187 | ## Last Update
188 | - Timestamp: ${new Date().toISOString()}
189 | - Type: Initial Creation
190 | - Changes: OACL framework definition and memory structure setup 
```

.cursor/memory/research-levels-framework.mdc
```
1 | ---
2 | description: 
3 | globs: 
4 | alwaysApply: true
5 | ---
6 | # Research Levels Framework Memory Entry
7 | 
8 | ## Memory Context
9 | - Created: ${new Date().toISOString()}
10 | - Category: Research & Innovation
11 | - Priority: P1
12 | - Status: Active Development
13 | - Related Files: 
14 |   - docs/research-levels-framework.md
15 |   - master-todo.mdc
16 | 
17 | ## Core Components Memory Map
18 | 
19 | ### 1. Discovery System [Level 1]
20 | ```typescript
21 | type MemoryNode = {
22 |   component: 'AutomatedDiscovery';
23 |   state: {
24 |     activeSources: Set<string>;
25 |     activeFilters: Map<string, FilterConfig>;
26 |     discoveryCache: LRUCache<string, DiscoveryResult>;
27 |   };
28 |   metrics: {
29 |     discoveryRate: number;
30 |     falsePositiveRate: number;
31 |     averageDiscoveryTime: number;
32 |   };
33 | }
34 | ```
35 | 
36 | ### 2. Analysis System [Level 2]
37 | ```typescript
38 | type MemoryNode = {
39 |   component: 'DeepAnalysis';
40 |   state: {
41 |     activeAnalysis: Map<string, AnalysisStatus>;
42 |     analysisCache: LRUCache<string, DeepAnalysis>;
43 |     validationResults: Map<string, ValidationResult>;
44 |   };
45 |   metrics: {
46 |     analysisAccuracy: number;
47 |     feasibilityAccuracy: number;
48 |     resourceAccuracy: number;
49 |   };
50 | }
51 | ```
52 | 
53 | ### 3. Prototyping System [Level 3]
54 | ```typescript
55 | type MemoryNode = {
56 |   component: 'RapidPrototype';
57 |   state: {
58 |     activePrototypes: Map<string, PrototypeStatus>;
59 |     testResults: Map<string, TestResult[]>;
60 |     benchmarkData: Map<string, BenchmarkResult[]>;
61 |   };
62 |   metrics: {
63 |     prototypeSuccessRate: number;
64 |     averagePrototypeTime: number;
65 |     testCoverage: number;
66 |   };
67 | }
68 | ```
69 | 
70 | ### 4. Integration System [Level 4]
71 | ```typescript
72 | type MemoryNode = {
73 |   component: 'IntegrationPlan';
74 |   state: {
75 |     activePlans: Map<string, PlanStatus>;
76 |     deploymentHistory: Map<string, DeploymentResult>;
77 |     monitoringState: Map<string, MonitoringStatus>;
78 |   };
79 |   metrics: {
80 |     integrationSuccessRate: number;
81 |     averageDeploymentTime: number;
82 |     rollbackFrequency: number;
83 |   };
84 | }
85 | ```
86 | 
87 | ## Implementation Progress
88 | 
89 | ### Current State
90 | ```typescript
91 | interface ImplementationState {
92 |   phase: 'initial';
93 |   completedComponents: [];
94 |   activeWork: [
95 |     'AutomatedDiscovery',
96 |     'SourceAdapters'
97 |   ];
98 |   pendingWork: [
99 |     'AnalysisPipeline',
100 |     'IntegrationManager',
101 |     'ResearchModeIntegration'
102 |   ];
103 | }
104 | ```
105 | 
106 | ### Next Actions
107 | 1. Implement GitHub source adapter
108 | 2. Implement arXiv source adapter
109 | 3. Create basic analysis pipeline
110 | 4. Set up integration manager
111 | 
112 | ## Knowledge Graph Integration
113 | 
114 | ### Tags
115 | - #research
116 | - #automation
117 | - #innovation
118 | - #integration
119 | - #analysis
120 | - #prototyping
121 | 
122 | ### Relationships
123 | ```typescript
124 | interface KnowledgeGraphNode {
125 |   id: 'research-levels-framework';
126 |   connections: [
127 |     { id: 'oacl', type: 'uses' },
128 |     { id: 'implementation-structure', type: 'extends' },
129 |     { id: 'development-modes', type: 'integrates' }
130 |   ];
131 |   context: {
132 |     purpose: 'systematic-research-automation';
133 |     scope: 'ai-innovation-pipeline';
134 |     impact: 'development-acceleration';
135 |   };
136 | }
137 | ```
138 | 
139 | ## Success Metrics Tracking
140 | 
141 | ### Current Performance
142 | ```typescript
143 | interface MetricsState {
144 |   discoveryMetrics: {
145 |     detectionRate: null,  // Target: > 90%
146 |     falsePositiveRate: null,  // Target: < 5%
147 |     discoveryTime: null   // Target: < 6h
148 |   };
149 |   analysisMetrics: {
150 |     accuracy: null,       // Target: > 95%
151 |     feasibility: null,    // Target: > 90%
152 |     estimation: null      // Target: > 85%
153 |   };
154 |   integrationMetrics: {
155 |     prototypeTime: null,  // Target: < 72h
156 |     successRate: null,    // Target: > 80%
157 |     deploymentTime: null  // Target: < 1 week
158 |   };
159 | }
160 | ```
161 | 
162 | ## Learning & Adaptation
163 | 
164 | ### Observed Patterns
165 | ```typescript
166 | interface LearningState {
167 |   patterns: [];  // To be populated during implementation
168 |   optimizations: [];  // To be populated during implementation
169 |   challenges: [];  // To be populated during implementation
170 | }
171 | ```
172 | 
173 | ### Adaptation Rules
174 | 1. Update source adapters based on discovery effectiveness
175 | 2. Adjust analysis parameters based on accuracy metrics
176 | 3. Modify prototype templates based on success rates
177 | 4. Refine integration processes based on deployment metrics
178 | 
179 | ## Future Expansion
180 | 
181 | ### Planned Enhancements
182 | 1. AI-powered trend prediction
183 | 2. Automatic code adaptation
184 | 3. Impact simulation
185 | 4. Research team coordination
186 | 5. Knowledge sharing system
187 | 6. Cross-team implementation planning
188 | 7. Automated prototype generation
189 | 8. Self-optimizing research patterns
190 | 9. Predictive resource allocation
191 | 
192 | ## Memory Update Protocol
193 | 
194 | ### Update Triggers
195 | - New source adapter implementation
196 | - Analysis pipeline modification
197 | - Prototype template creation
198 | - Integration process refinement
199 | - Metric threshold changes
200 | - Pattern discovery
201 | - Learning outcome documentation
202 | 
203 | ### Update Process
204 | 1. Record change in appropriate section
205 | 2. Update metrics if applicable
206 | 3. Document new patterns or learnings
207 | 4. Adjust adaptation rules if needed
208 | 5. Update knowledge graph relationships
209 | 6. Record timestamp of update
210 | 
211 | ## Version History
212 | - v1.0.0 - Initial framework definition
213 | - Current: v1.0.0
214 | 
215 | ## Last Update
216 | - Timestamp: ${new Date().toISOString()}
217 | - Type: Initial Creation
218 | - Changes: Framework definition and memory structure setup 
```

.cursor/memory/system-health.mdc
```
1 | ---
2 | description: 
3 | globs: 
4 | alwaysApply: true
5 | ---
6 | # Memory System Health Monitor
7 | 
8 | ## Health Metrics
9 | 
10 | ### System Performance
11 | ```typescript
12 | interface SystemHealthMetrics {
13 |   memoryUsage: {
14 |     current: number;
15 |     peak: number;
16 |     threshold: number;
17 |   };
18 |   responseTime: {
19 |     average: number;
20 |     p95: number;
21 |     p99: number;
22 |   };
23 |   updateFrequency: {
24 |     daily: number;
25 |     weekly: number;
26 |     monthly: number;
27 |   };
28 |   errorRate: {
29 |     current: number;
30 |     threshold: number;
31 |     trend: 'increasing' | 'stable' | 'decreasing';
32 |   };
33 | }
34 | ```
35 | 
36 | ### Component Health
37 | ```typescript
38 | interface ComponentHealth {
39 |   status: 'healthy' | 'degraded' | 'critical';
40 |   lastCheck: string;
41 |   metrics: {
42 |     uptime: number;
43 |     errorCount: number;
44 |     warningCount: number;
45 |   };
46 |   dependencies: {
47 |     status: 'ok' | 'warning' | 'error';
48 |     details: string[];
49 |   };
50 | }
51 | ```
52 | 
53 | ### Memory Integrity
54 | ```typescript
55 | interface MemoryIntegrity {
56 |   consistency: {
57 |     graphConsistency: boolean;
58 |     relationshipValidity: boolean;
59 |     dataIntegrity: boolean;
60 |   };
61 |   completeness: {
62 |     requiredFields: number;
63 |     missingFields: number;
64 |     coverage: number;
65 |   };
66 |   freshness: {
67 |     lastUpdate: string;
68 |     updateFrequency: number;
69 |     staleness: number;
70 |   };
71 | }
72 | ```
73 | 
74 | ## Health Checks
75 | 
76 | ### Automated Checks
77 | ```typescript
78 | interface HealthChecks {
79 |   daily: [
80 |     'validateGraphConsistency',
81 |     'checkMemoryIntegrity',
82 |     'verifyRelationships',
83 |     'updateMetrics'
84 |   ];
85 |   weekly: [
86 |     'deepConsistencyCheck',
87 |     'performanceAnalysis',
88 |     'dependencyAudit',
89 |     'cleanupOrphanedData'
90 |   ];
91 |   monthly: [
92 |     'fullSystemAudit',
93 |     'optimizationAnalysis',
94 |     'capacityPlanning',
95 |     'backupVerification'
96 |   ];
97 | }
98 | ```
99 | 
100 | ### Alert System
101 | ```typescript
102 | interface AlertSystem {
103 |   thresholds: {
104 |     memoryUsage: 80;  // percentage
105 |     errorRate: 5;     // percentage
106 |     responseTime: 1000; // milliseconds
107 |     staleness: 7;     // days
108 |   };
109 |   notifications: {
110 |     channels: ['console', 'log', 'alert'];
111 |     severity: ['info', 'warning', 'error', 'critical'];
112 |     frequency: 'realtime' | 'daily' | 'weekly';
113 |   };
114 |   actions: {
115 |     onWarning: ['notify', 'log', 'analyze'];
116 |     onError: ['notify', 'log', 'analyze', 'backup'];
117 |     onCritical: ['notify', 'log', 'analyze', 'backup', 'recover'];
118 |   };
119 | }
120 | ```
121 | 
122 | ## Recovery Procedures
123 | 
124 | ### Backup Strategy
125 | ```typescript
126 | interface BackupStrategy {
127 |   frequency: {
128 |     incremental: 'daily';
129 |     full: 'weekly';
130 |     verification: 'monthly';
131 |   };
132 |   retention: {
133 |     incremental: '7d';
134 |     full: '30d';
135 |     verified: '90d';
136 |   };
137 |   locations: [
138 |     'local',
139 |     'remote',
140 |     'archive'
141 |   ];
142 | }
143 | ```
144 | 
145 | ### Recovery Process
146 | ```typescript
147 | interface RecoveryProcess {
148 |   steps: [
149 |     'validateBackup',
150 |     'stopServices',
151 |     'restoreData',
152 |     'verifyIntegrity',
153 |     'startServices',
154 |     'verifyHealth'
155 |   ];
156 |   rollback: {
157 |     enabled: true;
158 |     trigger: 'healthCheckFailed';
159 |     steps: [
160 |       'stopServices',
161 |       'restorePrevious',
162 |       'verifyIntegrity',
163 |       'startServices'
164 |     ];
165 |   };
166 | }
167 | ```
168 | 
169 | ## Version History
170 | - v1.0.0 - Initial health monitoring system
171 | - Current: v1.0.0
172 | 
173 | ## Last Update
174 | - Timestamp: ${new Date().toISOString()}
175 | - Type: System Enhancement
176 | - Changes: Added comprehensive health monitoring system 
```

.cursor/memory/text-cleanup-system-integration.mdc
```
1 | ---
2 | description: 
3 | globs: 
4 | alwaysApply: false
5 | ---
6 | ---
7 | description: System integration specifications for text-cleanup.js tool
8 | globs: text-cleanup.js,*/text-cleanup*
9 | alwaysApply: false
10 | ---
11 | # Text Cleanup Tool: System Integration
12 | 
13 | This document details how the text-cleanup.js tool integrates with other components in the Ollama Ecosystem.
14 | 
15 | ## Integration Architecture
16 | 
17 | ```mermaid
18 | graph TD
19 |     A[text-cleanup.js] --> B[T2P CLI]
20 |     A --> C[CI/CD Pipeline]
21 |     A --> D[Knowledge Graph]
22 |     E[Master Todo System] --> A
23 |     A --> F[Documentation System]
24 |     
25 |     subgraph "Core Components"
26 |         A
27 |     end
28 |     
29 |     subgraph "Integration Points"
30 |         B
31 |         C
32 |         D
33 |         E
34 |         F
35 |     end
36 | ```
37 | 
38 | ## T2P CLI Integration
39 | 
40 | The text-cleanup tool serves as a migration utility for the T2P CLI, providing:
41 | 
42 | - Consistent transformation of `ollama-tag-cli` references to `t2p`
43 | - Context-aware replacement based on surrounding code
44 | - Documentation updates for the migration process
45 | 
46 | **Integration Files:**
47 | - `t2p/docs/text-cleanup-integration.md` - Documentation for migration process
48 | - Updates to `t2p/README.md` - References to migration capabilities
49 | 
50 | **Usage Patterns:**
51 | ```bash
52 | # From T2P CLI scripts
53 | node ../text-cleanup.js --pattern "ollama-tag-cli" --smart --report "./migration-report.md"
54 | ```
55 | 
56 | ## CI/CD Pipeline Integration
57 | 
58 | The tool integrates with the CI/CD pipeline through GitHub Actions:
59 | 
60 | **Integration Points:**
61 | - `.github/workflows/text-cleanup.yml` - Workflow definition
62 | - Automated testing on multiple Node.js versions
63 | - Generation of consistency reports as artifacts
64 | - Warning thresholds for inconsistencies
65 | 
66 | **CI/CD Flow:**
67 | 1. Code push triggers workflow
68 | 2. Tests run against text-cleanup.js
69 | 3. Dry-run analysis generates reports
70 | 4. Reports are stored as artifacts
71 | 5. Warnings are triggered if inconsistencies exceed threshold
72 | 
73 | ## Knowledge Graph Integration
74 | 
75 | The text-cleanup tool is indexed in the project's knowledge graph:
76 | 
77 | **Integration Points:**
78 | - `.cursor/memory/engineering-workflow-example.mdc` - Workflow documentation
79 | - `.cursor/memory/knowledge-index.mdc` - Knowledge graph entry
80 | 
81 | **Metadata Stored:**
82 | - Tool capabilities
83 | - Implementation workflow
84 | - Engineering best practices
85 | - File locations
86 | - Integration documentation
87 | 
88 | ## Master Todo System Integration
89 | 
90 | The tool was tracked in the master todo system:
91 | 
92 | **Integration Points:**
93 | - `@master-todo.mdc` - Task tracking
94 | - Status updates for completed development milestones
95 | 
96 | **Task Records:**
97 | - Initial implementation
98 | - Enhanced context detection
99 | - Unit test development
100 | - CI/CD integration
101 | 
102 | ## Documentation System Integration
103 | 
104 | The tool is documented in the project's documentation system:
105 | 
106 | **Integration Points:**
107 | - `docs/text-cleanup.md` - Main documentation
108 | - `t2p/docs/text-cleanup-integration.md` - T2P integration guide
109 | - `text-cleanup-status-update.md` - Status report
110 | 
111 | **Documentation Standards:**
112 | - Consistent structure with other tools
113 | - Examples for common use cases
114 | - API documentation for options
115 | - Integration guides
116 | - Troubleshooting sections
117 | 
118 | ## Execution Model
119 | 
120 | The text-cleanup tool operates both as:
121 | 
122 | 1. **Standalone Utility:**
123 |    - Direct command-line usage
124 |    - Manual execution for targeted fixes
125 | 
126 | 2. **Integrated Component:**
127 |    - Used by other scripts/tools
128 |    - Executed as part of CI/CD pipeline
129 |    - Referenced in documentation
130 | 
131 | ## Data Flow
132 | 
133 | ```mermaid
134 | sequenceDiagram
135 |     participant User
136 |     participant TextCleanup
137 |     participant FileSystem
138 |     participant ReportGenerator
139 |     participant GithubActions
140 |     
141 |     User->>TextCleanup: Run with options
142 |     TextCleanup->>FileSystem: Search files
143 |     FileSystem->>TextCleanup: Return file contents
144 |     TextCleanup->>TextCleanup: Analyze context
145 |     TextCleanup->>FileSystem: Apply changes (if not dry run)
146 |     TextCleanup->>ReportGenerator: Generate report
147 |     ReportGenerator->>FileSystem: Save report
148 |     
149 |     alt CI/CD Pipeline
150 |         GithubActions->>TextCleanup: Run in dry-run mode
151 |         TextCleanup->>ReportGenerator: Generate report
152 |         ReportGenerator->>GithubActions: Save as artifact
153 |     end
154 | ```
155 | 
156 | ## Extension Points
157 | 
158 | The text-cleanup tool provides several extension points:
159 | 
160 | 1. **Context Analysis Function:**
161 |    - Add new context patterns in `analyzeContext` function
162 |    - Enhance detection for specific file types
163 | 
164 | 2. **Report Format:**
165 |    - Modify report generation for different formats
166 |    - Add custom sections to reports
167 | 
168 | 3. **File Processing:**
169 |    - Customize file discovery patterns
170 |    - Add specialized processing for specific file types
171 | 
172 | 4. **CI/CD Integration:**
173 |    - Add custom thresholds for warnings
174 |    - Integrate with other CI tools
175 | 
176 | ## Configuration Management
177 | 
178 | Configuration is managed through:
179 | 
180 | 1. **Command-line Options:**
181 |    - Runtime configuration through CLI flags
182 |    - Default values provided for common scenarios
183 | 
184 | 2. **GitHub Actions Workflow:**
185 |    - Configured through YAML definition
186 |    - Environment-specific settings
187 | 
188 | ## Future System Integration
189 | 
190 | Planned future integration points:
191 | 
192 | 1. **IDE Extensions:**
193 |    - Integration with VS Code extensions
194 |    - Inline replacement suggestions
195 | 
196 | 2. **Pre-commit Hook:**
197 |    - Automatic check before git commits
198 |    - Prevention of inconsistent naming
199 | 
200 | 3. **Automated Refactoring Pipeline:**
201 |    - Integration with larger refactoring workflows
202 |    - Chainable transformations
203 | 
204 | ## Integration Testing
205 | 
206 | System integration is tested through:
207 | 
208 | 1. **End-to-end Tests:**
209 |    - Full pipeline execution tests
210 |    - Integration with GitHub Actions
211 | 
212 | 2. **Module Interaction Tests:**
213 |    - Tests for interaction with other tools
214 |    - Verification of report consumption
215 | 
216 | 3. **Configuration Tests:**
217 |    - Validation of different configuration options
218 |    - Verification of extension point behaviors 
```

.cursor/memory/text-cleanup-technical-specification.mdc
```
1 | ---
2 | description: Technical specification for the text-cleanup.js tool
3 | globs: text-cleanup.js
4 | alwaysApply: false
5 | ---
6 | # Technical Specification: Text Cleanup Tool
7 | 
8 | ## 1. Overview
9 | 
10 | The Text Cleanup Tool is a Node.js utility designed to find and replace text patterns in codebases with context-aware intelligence. It analyzes the surrounding context of each match to determine the most appropriate replacement format, ensuring consistency across the project.
11 | 
12 | ## 2. System Architecture
13 | 
14 | ```mermaid
15 | graph TD
16 |     A[CLI Interface] --> B[File Discovery]
17 |     B --> C[File Processing]
18 |     C --> D[Context Analysis]
19 |     D --> E[Pattern Replacement]
20 |     E --> F[File Update]
21 |     C --> G[Report Generation]
22 |     
23 |     subgraph "Core Modules"
24 |         B
25 |         C
26 |         D
27 |         E
28 |         F
29 |         G
30 |     end
31 | ```
32 | 
33 | ### 2.1 Module Descriptions
34 | 
35 | | Module | Purpose | Key Functions |
36 | |--------|---------|---------------|
37 | | CLI Interface | Process command-line arguments | Parse options, Validate inputs |
38 | | File Discovery | Find files matching patterns | Pattern matching, Directory traversal |
39 | | File Processing | Read and process file contents | File I/O, Batch processing |
40 | | Context Analysis | Analyze text surrounding matches | Context detection, Pattern recognition |
41 | | Pattern Replacement | Replace text based on context | Smart replacement, String manipulation |
42 | | File Update | Write changes to files | File I/O, Backup management |
43 | | Report Generation | Generate reports of changes | Markdown formatting, Summary statistics |
44 | 
45 | ## 3. Dependencies
46 | 
47 | | Dependency | Version | Purpose |
48 | |------------|---------|---------|
49 | | commander | ^8.0.0 | Command-line argument parsing |
50 | | glob | ^8.0.3 | File pattern matching |
51 | | chalk | ^4.1.2 | Colored console output |
52 | | fs (Node.js) | Built-in | File system operations |
53 | | path (Node.js) | Built-in | Path manipulation |
54 | 
55 | ## 4. Functional Requirements
56 | 
57 | ### 4.1 Core Functionality
58 | 
59 | | ID | Requirement | Priority |
60 | |----|-------------|----------|
61 | | FR-1 | Find text patterns in files using regex | High |
62 | | FR-2 | Replace patterns with context-aware text | High |
63 | | FR-3 | Process multiple files in batch | High |
64 | | FR-4 | Generate detailed reports of changes | Medium |
65 | | FR-5 | Support dry-run mode for preview | Medium |
66 | | FR-6 | Include/exclude specific files and directories | Medium |
67 | | FR-7 | Analyze surrounding context for appropriate replacement | High |
68 | 
69 | ### 4.2 Context Detection Requirements
70 | 
71 | | ID | Context Type | Detection Method | Priority |
72 | |----|--------------|------------------|----------|
73 | | CD-1 | Code context | Identify code keywords, syntax patterns | High |
74 | | CD-2 | Documentation context | Identify markdown, headings, comments | High |
75 | | CD-3 | Shell script context | Identify commands, script patterns | Medium |
76 | | CD-4 | Package.json context | Identify JSON structure, dependencies | Medium |
77 | | CD-5 | File path context | Identify import/require statements | Medium |
78 | | CD-6 | Capitalization context | Analyze surrounding capitalization | Low |
79 | 
80 | ### 4.3 Performance Requirements
81 | 
82 | | ID | Requirement | Target |
83 | |----|-------------|--------|
84 | | PR-1 | Process large files efficiently | Files up to 10MB |
85 | | PR-2 | Handle large numbers of files | Up to 1000 files |
86 | | PR-3 | Memory usage during processing | <500MB peak |
87 | | PR-4 | Processing speed | >50 files/second |
88 | 
89 | ## 5. Technical Implementation
90 | 
91 | ### 5.1 Data Structures
92 | 
93 | #### 5.1.1 File Processing Data
94 | 
95 | ```javascript
96 | {
97 |   filePathsToProcess: string[],
98 |   filesProcessed: number,
99 |   totalMatches: number,
100 |   totalReplacements: number,
101 |   startTime: Date,
102 |   endTime: Date,
103 |   replacements: {
104 |     [filePath: string]: {
105 |       original: string,
106 |       replacement: string,
107 |       context: string,
108 |       line: number
109 |     }[]
110 |   }
111 | }
112 | ```
113 | 
114 | #### 5.1.2 Configuration Options
115 | 
116 | ```javascript
117 | {
118 |   pattern: string | RegExp,
119 |   replacement?: string,
120 |   directory: string,
121 |   include: string,
122 |   exclude: string[],
123 |   contextLines: number,
124 |   dryRun: boolean,
125 |   smart: boolean,
126 |   report: string
127 | }
128 | ```
129 | 
130 | ### 5.2 Algorithms
131 | 
132 | #### 5.2.1 Context Analysis Algorithm
133 | 
134 | ```javascript
135 | function analyzeContext(match, context) {
136 |   // 1. Convert context to lowercase for case-insensitive checks
137 |   const lowerContext = context.toLowerCase();
138 |   
139 |   // 2. Identify contextual clues
140 |   const hasCodeContext = containsCodeIndicators(lowerContext);
141 |   const hasDocContext = containsDocumentationIndicators(lowerContext);
142 |   const hasShellContext = containsShellIndicators(lowerContext);
143 |   const hasPackageContext = containsPackageIndicators(lowerContext);
144 |   const hasFilePathContext = containsFilePathIndicators(lowerContext);
145 |   
146 |   // 3. Determine replacement based on context priority
147 |   if (hasCodeContext) {
148 |     return generateCodeStyleReplacement(match);
149 |   } else if (hasDocContext) {
150 |     return generateDocumentationStyleReplacement(match);
151 |   } else if (hasShellContext) {
152 |     return generateShellStyleReplacement(match);
153 |   } else if (hasPackageContext) {
154 |     return generatePackageStyleReplacement(match);
155 |   } else if (hasFilePathContext) {
156 |     return generateFilePathStyleReplacement(match);
157 |   }
158 |   
159 |   // 4. Default replacement if no specific context detected
160 |   return generateDefaultReplacement(match);
161 | }
162 | ```
163 | 
164 | #### 5.2.2 File Processing Algorithm
165 | 
166 | ```javascript
167 | async function processFiles(patterns, options) {
168 |   // 1. Find files matching the include pattern
169 |   const filePaths = await findFiles(options.directory, options.include, options.exclude);
170 |   
171 |   // 2. Initialize results data structure
172 |   const results = initializeResults();
173 |   
174 |   // 3. Process each file sequentially
175 |   for (const filePath of filePaths) {
176 |     try {
177 |       const fileResults = await processFile(
178 |         filePath, 
179 |         options.pattern, 
180 |         options.dryRun, 
181 |         options.smart, 
182 |         options.contextLines
183 |       );
184 |       
185 |       // 4. Update global results
186 |       updateResults(results, fileResults);
187 |     } catch (error) {
188 |       handleError(error, filePath);
189 |     }
190 |   }
191 |   
192 |   // 5. Generate report
193 |   if (options.report) {
194 |     await generateReport(results, options);
195 |   }
196 |   
197 |   // 6. Return summary
198 |   return summarizeResults(results);
199 | }
200 | ```
201 | 
202 | ### 5.3 API
203 | 
204 | #### 5.3.1 Command-Line Interface
205 | 
206 | ```
207 | text-cleanup [options]
208 | 
209 | Options:
210 |   -p, --pattern <pattern>         Text pattern to search for (regex supported)
211 |   -r, --replacement <replacement> Text to replace matches with
212 |   -d, --directory <directory>     Root directory to search in (default: ".")
213 |   -i, --include <glob>            Glob pattern for files to include
214 |   -e, --exclude <dirs>            Directories to exclude
215 |   -c, --context-lines <number>    Number of context lines to analyze (default: 3)
216 |   --dry-run                       Show what would be changed without making changes
217 |   --smart                         Use smart replacement based on context
218 |   --report <file>                 Output report file
219 |   -h, --help                      Display help for command
220 | ```
221 | 
222 | #### 5.3.2 Programmatic API
223 | 
224 | ```javascript
225 | /**
226 |  * Process files to find and replace text patterns
227 |  * @param {Object} options - Configuration options
228 |  * @returns {Promise<Object>} - Results summary
229 |  */
230 | async function textCleanup(options) {
231 |   // Implementation
232 | }
233 | 
234 | // Example usage
235 | const results = await textCleanup({
236 |   pattern: 'ollama-tag-cli',
237 |   directory: './src',
238 |   smart: true,
239 |   dryRun: true,
240 |   report: './report.md'
241 | });
242 | ```
243 | 
244 | ## 6. File Formats
245 | 
246 | ### 6.1 Report Format
247 | 
248 | ```markdown
249 | # Text Cleanup Report
250 | 
251 | Generated: [TIMESTAMP]
252 | 
253 | ## Summary
254 | 
255 | - **Search Pattern:** `[PATTERN]`
256 | - **Replacement:** [REPLACEMENT]
257 | - **Files Scanned:** [FILES_SCANNED]
258 | - **Total Matches:** [TOTAL_MATCHES]
259 | - **Total Replacements:** [TOTAL_REPLACEMENTS]
260 | - **Mode:** [DRY_RUN/ACTUAL]
261 | - **Smart Replacement:** [YES/NO]
262 | 
263 | ## Replacements
264 | 
265 | ### [FILE_PATH]
266 | 
267 | | Original | Replacement | Context |
268 | |----------|-------------|---------|
269 | | `[ORIGINAL]` | `[REPLACEMENT]` | [CONTEXT] |
270 | ```
271 | 
272 | ## 7. Security & Privacy
273 | 
274 | ### 7.1 File System Access
275 | 
276 | - Read/write access to specified directories
277 | - No network access required
278 | - No data sent outside the local environment
279 | 
280 | ### 7.2 Security Considerations
281 | 
282 | | ID | Security Consideration | Mitigation |
283 | |----|------------------------|------------|
284 | | SC-1 | Unintended file modifications | Dry-run mode, explicit confirmation |
285 | | SC-2 | Access to sensitive files | Exclude patterns, directory restrictions |
286 | | SC-3 | Regex DoS | Input validation, timeout mechanisms |
287 | | SC-4 | File path manipulation | Path normalization, validation |
288 | 
289 | ## 8. Error Handling
290 | 
291 | ### 8.1 Error Categories
292 | 
293 | | Error Type | Handling Strategy |
294 | |------------|-------------------|
295 | | File not found | Log error, continue with next file |
296 | | Permission denied | Log error, continue with next file |
297 | | Invalid regex | Throw error with helpful message |
298 | | Read/write errors | Log error, attempt retry, then skip |
299 | | Memory limitations | Batch processing, streaming for large files |
300 | 
301 | ### 8.2 Error Messages
302 | 
303 | | Error Code | Message Template | Resolution Hint |
304 | |------------|------------------|-----------------|
305 | | E001 | Invalid regex pattern: ${details} | Check pattern syntax |
306 | | E002 | File not found: ${filePath} | Verify file path exists |
307 | | E003 | Permission denied: ${filePath} | Check file permissions |
308 | | E004 | Error reading file: ${filePath} - ${details} | Verify file is not locked |
309 | | E005 | Error writing file: ${filePath} - ${details} | Check write permissions |
310 | 
311 | ## 9. Performance Optimization
312 | 
313 | ### 9.1 Strategies
314 | 
315 | 1. **Batch Processing**: Process files in batches to manage memory usage
316 | 2. **Regex Optimization**: Compile regex patterns once and reuse
317 | 3. **Early Exit**: Skip files without matching patterns quickly
318 | 4. **Concurrent Processing**: Optional parallel processing for large codebases
319 | 5. **Stream Processing**: Use streams for very large files
320 | 
321 | ### 9.2 Benchmarks
322 | 
323 | | Scenario | Expected Performance |
324 | |----------|----------------------|
325 | | Small codebase (<100 files) | <1 second |
326 | | Medium codebase (100-1000 files) | 1-5 seconds |
327 | | Large codebase (>1000 files) | 5-30 seconds |
328 | | Single large file (>10MB) | <3 seconds |
329 | 
330 | ## 10. Future Extensions
331 | 
332 | ### 10.1 Planned Enhancements
333 | 
334 | | ID | Enhancement | Priority |
335 | |----|-------------|----------|
336 | | FE-1 | Multi-threading support for large codebases | Medium |
337 | | FE-2 | Interactive mode with confirmation per file | Low |
338 | | FE-3 | VCS integration (Git awareness) | Low |
339 | | FE-4 | Plugin system for custom context detection | Medium |
340 | | FE-5 | Visual diff UI for changes | Low |
341 | | FE-6 | Machine learning for context detection | Low |
342 | 
343 | ### 10.2 Extension Points
344 | 
345 | 1. **Context Detection**: Pluggable context detection modules
346 | 2. **Report Formats**: Alternative report format generators
347 | 3. **File Processing**: Custom file processors for special file types
348 | 4. **Replacement Logic**: Custom replacement strategy implementations
349 | 
350 | ## 11. Development Standards
351 | 
352 | ### 11.1 Coding Standards
353 | 
354 | - ES6+ JavaScript
355 | - JSDoc for all functions
356 | - Error handling for all I/O operations
357 | - Comprehensive logging
358 | 
359 | ### 11.2 Testing Requirements
360 | 
361 | - Unit tests for all core functions
362 | - Integration tests for file processing
363 | - Coverage targets: >85% statements, >90% branches
364 | - Performance tests for large files/codebases
365 | 
366 | ## 12. Deployment
367 | 
368 | ### 12.1 Installation
369 | 
370 | ```bash
371 | # As CLI tool
372 | npm install -g text-cleanup
373 | 
374 | # As project dependency
375 | npm install --save-dev text-cleanup
376 | ```
377 | 
378 | ### 12.2 Compatibility
379 | 
380 | - Node.js 16.x, 18.x, 20.x
381 | - Operating Systems: Windows, macOS, Linux
382 | - Dependencies: commander, glob, chalk 
```

.cursor/memory/text-cleanup-testing-strategy.mdc
```
1 | ---
2 | description: Comprehensive testing strategy for text-cleanup.js tool
3 | globs: test/text-cleanup.test.js,.github/workflows/text-cleanup.yml
4 | alwaysApply: false
5 | ---
6 | # Text Cleanup Tool: Testing Strategy
7 | 
8 | This document outlines the comprehensive testing strategy for the text-cleanup.js tool, ensuring reliability, maintainability, and correctness across various use cases.
9 | 
10 | ## Testing Objectives
11 | 
12 | 1. **Functionality Verification**: Ensure all features work as expected
13 | 2. **Edge Case Handling**: Verify behavior with unusual inputs and scenarios
14 | 3. **Regression Prevention**: Prevent previously fixed bugs from returning
15 | 4. **Integration Validation**: Confirm proper interaction with other components
16 | 5. **Performance Assessment**: Evaluate efficiency with various file sizes and quantities
17 | 6. **Usability Confirmation**: Ensure clear output and error messages
18 | 
19 | ## Testing Levels
20 | 
21 | ### 1. Unit Testing
22 | 
23 | - **Purpose**: Verify individual functions and components
24 | - **Tool**: Mocha with Node.js assert library
25 | - **Location**: `test/text-cleanup.test.js`
26 | 
27 | **Key Unit Tests:**
28 | 
29 | | Function/Component | Test Cases |
30 | |-------------------|------------|
31 | | `createSearchRegex()` | Valid regex patterns, Already-regex inputs, Invalid patterns |
32 | | `findFiles()` | Various glob patterns, Different exclude dirs, Non-existent paths |
33 | | `getContext()` | Start of file, End of file, Multi-line content |
34 | | `analyzeContext()` | All context types (code, docs, CLI, etc.), Edge cases |
35 | | `processFile()` | Various file types, With/without matches, Error cases |
36 | | `generateReport()` | Different report formats, Various match quantities |
37 | 
38 | **Example Test Structure:**
39 | 
40 | ```javascript
41 | describe('analyzeContext()', () => {
42 |   it('should detect code context correctly', () => {
43 |     // Test cases for code context
44 |   });
45 |   
46 |   it('should detect documentation context correctly', () => {
47 |     // Test cases for documentation context
48 |   });
49 |   
50 |   // Additional test cases...
51 | });
52 | ```
53 | 
54 | ### 2. Integration Testing
55 | 
56 | - **Purpose**: Verify components work together correctly
57 | - **Tool**: Mocha with file system operations
58 | - **Location**: Integration test sections in `test/text-cleanup.test.js`
59 | 
60 | **Key Integration Tests:**
61 | 
62 | | Integration Scenario | Test Cases |
63 | |----------------------|------------|
64 | | File Discovery + Processing | Various directory structures, Mixed file types |
65 | | Context Analysis + Replacement | Different context types across multiple files |
66 | | Report Generation + File System | Report saving, Structure verification |
67 | | CLI Arguments + Execution | Various command-line option combinations |
68 | 
69 | **Example Test Structure:**
70 | 
71 | ```javascript
72 | describe('End-to-end file processing', () => {
73 |   it('should process multiple files with mixed contexts', () => {
74 |     // Set up test files
75 |     // Run text-cleanup with options
76 |     // Verify correct replacements in all files
77 |   });
78 |   
79 |   // Additional test cases...
80 | });
81 | ```
82 | 
83 | ### 3. System Testing
84 | 
85 | - **Purpose**: Verify the tool works correctly in the target environment
86 | - **Tool**: GitHub Actions CI/CD workflow
87 | - **Location**: `.github/workflows/text-cleanup.yml`
88 | 
89 | **Key System Tests:**
90 | 
91 | | System Scenario | Test Cases |
92 | |-----------------|------------|
93 | | Cross-Platform Compatibility | Test on Ubuntu, Windows, macOS |
94 | | Node.js Version Compatibility | Test on Node.js 16.x, 18.x, 20.x |
95 | | Performance with Large Codebases | Test with many files, large files |
96 | | Integration with GitHub Actions | Report artifact generation, Warning thresholds |
97 | 
98 | **Example Workflow Configuration:**
99 | 
100 | ```yaml
101 | strategy:
102 |   matrix:
103 |     node-version: [16.x, 18.x, 20.x]
104 |     os: [ubuntu-latest, windows-latest, macos-latest]
105 | 
106 | steps:
107 |   - uses: actions/checkout@v3
108 |   - name: Use Node.js ${{ matrix.node-version }}
109 |     uses: actions/setup-node@v3
110 |     with:
111 |       node-version: ${{ matrix.node-version }}
112 | ```
113 | 
114 | ## Test Data Strategy
115 | 
116 | ### 1. Static Test Files
117 | 
118 | - **Purpose**: Consistent, predictable test inputs
119 | - **Location**: `test/fixtures/`
120 | - **Types**:
121 |   - Simple single-pattern files
122 |   - Complex multi-pattern files
123 |   - Edge case files
124 |   - Different file types (JS, TS, MD, etc.)
125 | 
126 | ### 2. Generated Test Files
127 | 
128 | - **Purpose**: Test a wide range of scenarios programmatically
129 | - **Method**: Create test files during test execution
130 | - **Approach**: Parametrized test generation
131 | 
132 | ```javascript
133 | function createTestFile(filename, content) {
134 |   const filePath = path.join(testDir, filename);
135 |   fs.writeFileSync(filePath, content, 'utf8');
136 |   return filePath;
137 | }
138 | 
139 | // Create different test cases programmatically
140 | for (const context of contexts) {
141 |   it(`should handle ${context.name} correctly`, () => {
142 |     const testFile = createTestFile(`${context.name}.js`, context.content);
143 |     // Test with this file
144 |   });
145 | }
146 | ```
147 | 
148 | ### 3. Real-World Sample Data
149 | 
150 | - **Purpose**: Validate against real-world usage patterns
151 | - **Method**: Anonymized samples from actual codebase
152 | - **Approach**: Include representative examples of different contexts
153 | 
154 | ## Test Coverage Strategy
155 | 
156 | ### 1. Code Coverage
157 | 
158 | - **Target**: >85% line coverage, >90% branch coverage
159 | - **Tool**: nyc (Istanbul) with lcov reporting
160 | - **CI Integration**: Report coverage in GitHub Actions
161 | 
162 | ```yaml
163 | - name: Generate test coverage report
164 |   run: |
165 |     npm install -g nyc
166 |     nyc --reporter=text --reporter=lcov mocha test/text-cleanup.test.js
167 | ```
168 | 
169 | ### 2. Feature Coverage
170 | 
171 | - **Approach**: Test matrix mapping features to test cases
172 | - **Validation**: Checklist of features and their test coverage
173 | - **Tracking**: Documentation of covered vs. uncovered features
174 | 
175 | ### 3. Context Coverage
176 | 
177 | - **Approach**: Ensure all context patterns are tested
178 | - **Validation**: Matrix of context patterns and their test cases
179 | - **Assessment**: Regular review of new context patterns
180 | 
181 | ## Testing Frameworks & Tools
182 | 
183 | | Tool | Purpose |
184 | |------|---------|
185 | | Mocha | Test runner for JavaScript |
186 | | Node.js assert | Assertion library |
187 | | nyc (Istanbul) | Code coverage |
188 | | GitHub Actions | CI/CD testing |
189 | | lcov | Coverage reporting |
190 | 
191 | ## Testing Workflow
192 | 
193 | ### 1. Local Development Testing
194 | 
195 | ```mermaid
196 | graph TD
197 |     A[Write Code] --> B[Write Unit Tests]
198 |     B --> C[Run Unit Tests Locally]
199 |     C -->|Tests Pass| D[Commit Code]
200 |     C -->|Tests Fail| A
201 |     D --> E[Push to GitHub]
202 |     E --> F[GitHub Actions Run Tests]
203 |     F -->|Tests Pass| G[Merge Changes]
204 |     F -->|Tests Fail| A
205 | ```
206 | 
207 | ### 2. CI/CD Testing
208 | 
209 | ```mermaid
210 | sequenceDiagram
211 |     participant Dev as Developer
212 |     participant GH as GitHub
213 |     participant CI as CI/CD
214 |     participant Cov as Coverage Report
215 |     
216 |     Dev->>GH: Push Changes
217 |     GH->>CI: Trigger Workflow
218 |     CI->>CI: Run Unit Tests
219 |     CI->>CI: Run Integration Tests
220 |     CI->>Cov: Generate Coverage Report
221 |     CI->>CI: Analyze Codebase
222 |     CI->>GH: Report Results
223 |     GH->>Dev: Notify Status
224 | ```
225 | 
226 | ## Test Maintenance Strategy
227 | 
228 | ### 1. Regular Review
229 | 
230 | - **Frequency**: Monthly review of test coverage
231 | - **Process**: Identify gaps in coverage
232 | - **Action**: Add tests for uncovered features/scenarios
233 | 
234 | ### 2. Refactoring Support
235 | 
236 | - **Approach**: Tests as documentation and safety net
237 | - **Process**: Update tests alongside code changes
238 | - **Validation**: Maintain coverage during refactoring
239 | 
240 | ### 3. New Feature Testing
241 | 
242 | - **Process**: Write tests before implementing new features
243 | - **Validation**: No new feature without tests
244 | - **Coverage**: Ensure >85% coverage for new code
245 | 
246 | ## Issues & Debugging
247 | 
248 | ### 1. Test Failure Analysis
249 | 
250 | - **Process**: Systematic analysis of test failures
251 | - **Documentation**: Record failures and resolutions
252 | - **Prevention**: Add regression tests for fixed issues
253 | 
254 | ### 2. Flaky Test Handling
255 | 
256 | - **Detection**: Monitor for inconsistent test results
257 | - **Resolution**: Refactor tests to be deterministic
258 | - **Isolation**: Quarantine flaky tests until fixed
259 | 
260 | ## Performance Testing
261 | 
262 | ### 1. Large File Testing
263 | 
264 | - **Approach**: Test with progressively larger files
265 | - **Metrics**: Time to process, memory usage
266 | - **Thresholds**: Define acceptable performance limits
267 | 
268 | ### 2. Batch Processing Testing
269 | 
270 | - **Approach**: Test with increasing numbers of files
271 | - **Metrics**: Files per second, total processing time
272 | - **Optimization**: Identify bottlenecks for improvement
273 | 
274 | ## Security Testing
275 | 
276 | ### 1. Input Validation
277 | 
278 | - **Approach**: Test with malformed or malicious inputs
279 | - **Validation**: Ensure proper error handling
280 | - **Prevention**: Check for potential security issues
281 | 
282 | ### 2. File System Safety
283 | 
284 | - **Approach**: Test file system operations for safety
285 | - **Validation**: Ensure no unintended modifications
286 | - **Safeguards**: Verify dry-run mode effectiveness
287 | 
288 | ## Future Test Improvements
289 | 
290 | 1. **Property-Based Testing**: Implement generative tests for a wider range of inputs
291 | 2. **Snapshot Testing**: Add snapshot tests for report generation
292 | 3. **Benchmark Suite**: Create dedicated performance benchmarks
293 | 4. **Visual Regression**: Add visual comparison of reports
294 | 5. **Mutation Testing**: Ensure test quality through mutation testing 
```

tools/trash/.aider.chat.history.md
```
1 | 
2 | # aider chat started at 2025-03-21 12:28:16
3 | 
4 | > You can skip this check with --no-gitignore  
5 | > Add .aider* to .gitignore (recommended)? (Y)es/(N)o [Yes]: y  
6 | > Added .aider* to .gitignore  
7 | > C:\Users\comfy\.local\bin\aider  
8 | > You need to specify a --model and an --api-key to use.  
9 | > https://aider.chat/docs/troubleshooting/models-and-keys.html  
```

tools/trash/ollama_list.txt
```
1 | FULL NAME                                                                  STRIPPED NAME                                  ID              SIZE      MODIFIED
2 | akuldatta/mistral-nemo-instruct-12b:q5km                                   mistral-nemo-instruct-12b:q5km                c33a46d4c850    8.7 GB    2 weeks ago
3 | athene-v2:72b-q2_K                                                         athene-v2:72b-q2_K                            e566d713f2ce    29 GB     2 days ago
4 | deepscaler:1.5b-preview-q4_K_M                                             deepscaler:1.5b-preview-q4_K_M                305c4a53269d    1.1 GB    2 weeks ago
5 | deepseek-coder-v2:latest                                                   deepseek-coder-v2:latest                      63fb193b3a9b    8.9 GB    2 weeks ago
6 | deepseek-r1:14b                                                            deepseek-r1:14b                               ea35dfe18182    9.0 GB    7 weeks ago
7 | deepseek-r1:14b-qwen-distill-q4_K_M                                        deepseek-r1:14b-qwen-distill-q4_K_M           ea35dfe18182    9.0 GB    2 weeks ago
8 | deepseek-r1:1.5b                                                           deepseek-r1:1.5b                              a42b25d8c10a    1.1 GB    6 weeks ago
9 | deepseek-r1:32b-qwen-distill-q4_K_M                                        deepseek-r1:32b-qwen-distill-q4_K_M           38056bbcbb2d    19 GB     2 weeks ago
10 | deepseek-r1:latest                                                         deepseek-r1:latest                            0a8c26691023    4.7 GB    2 weeks ago
11 | dolphin3:latest                                                            dolphin3:latest                               d5ab9ae8e1f2    4.9 GB    2 weeks ago
12 | granite-embedding:latest                                                   granite-embedding:latest                      eb4c533ba6f7    62 MB     24 hours ago
13 | granite3.2-vision:latest                                                   granite3.2-vision:latest                      3be41a661804    2.4 GB    2 weeks ago
14 | HammerAI/mistral-nemo-uncensored:latest                                    mistral-nemo-uncensored:latest                011ab2c2afa5    7.1 GB    2 weeks ago
15 | hermes3:latest                                                             hermes3:latest                                4f6b83f30b62    4.7 GB    2 weeks ago
16 | hhao/openbmb-minicpm-llama3-v-2_5:latest                                   openbmb-minicpm-llama3-v-2_5:latest           13fe41ad413b    6.0 GB    2 weeks ago
17 | hhao/qwen2.5-coder-tools:1.5b                                              qwen2.5-coder-tools:1.5b                      e57b3dd6680f    1.6 GB    2 days ago
18 | huihui_ai/deephermes3-abliterated:latest                                   deephermes3-abliterated:latest                5e0dd34c75ce    4.9 GB    2 weeks ago
19 | huihui_ai/deepseek-r1-Fusion:latest                                        deepseek-r1-Fusion:latest                     e5f58fab5137    19 GB     2 days ago
20 | huihui_ai/phi4-abliterated:latest                                          phi4-abliterated:latest                       d3078cf67e11    9.1 GB    2 weeks ago
21 | llama3:8b                                                                  llama3:8b                                     365c0bd3c000    4.7 GB    2 weeks ago
22 | llama3.2:3b                                                                llama3.2:3b                                   a80c4f17acd5    2.0 GB    2 weeks ago
23 | llama3.2:latest                                                            llama3.2:latest                               a80c4f17acd5    2.0 GB    2 weeks ago
24 | MFDoom/deepseek-r1-tool-calling:latest                                     deepseek-r1-tool-calling:latest               9a3bad754abb    4.7 GB    2 weeks ago
25 | MHKetbi/LGAI_EXAONE-Deep-32B:q3_K_L                                        LGAI_EXAONE-Deep-32B:q3_K_L                   eaa862122330    16 GB     2 days ago
26 | MHKetbi/open-r1_OlympicCoder-32B:q2_K_L                                    open-r1_OlympicCoder-32B:q2_K_L               d372e698643c    13 GB     53 minutes ago
27 | mistral:latest                                                             mistral:latest                                f974a74358d6    4.1 GB    2 weeks ago
28 | nemotron-mini:latest                                                       nemotron-mini:latest                          ed76ab18784f    2.7 GB    2 weeks ago
29 | nezahatkorkmaz/deepseek-v3:latest                                          deepseek-v3:latest                            2ef1746094f1    2.0 GB    2 weeks ago
30 | nomic-embed-text:latest                                                    nomic-embed-text:latest                       0a109f422b47    274 MB    2 weeks ago
31 | phi4-mini:latest                                                           phi4-mini:latest                              78fad5d182a7    2.5 GB    2 weeks ago
32 | privacydied/NousResearch-DeepHermes-3-Llama-3-8B-Preview-GGUF-Q8:latest    DeepHermes-3-Llama-3-8B-Preview-GGUF-Q8:latest b84779c3c02c    8.5 GB    2 weeks ago
33 | qllama/bge-reranker-v2-m3:latest                                           bge-reranker-v2-m3:latest                     06e0e64a6f61    635 MB    2 days ago
34 | qwen2.5-coder:latest                                                       qwen2.5-coder:latest                          2b0496514337    4.7 GB    2 weeks ago
35 | qwen2.5:7b                                                                 qwen2.5:7b                                    845dbda0ea48    4.7 GB    2 weeks ago
36 | qwen2.5:latest                                                             qwen2.5:latest                                845dbda0ea48    4.7 GB    2 weeks ago
37 | rjmalagon/deephermes-3-llama-3:8b-bf16                                     deephermes-3-llama-3:8b-bf16                  685d964bc072    16 GB     2 weeks ago
38 | sam860/dolphin3-qwen2.5:3b-Q5_K_M                                          dolphin3-qwen2.5:3b-Q5_K_M                    83e3e2017f67    2.2 GB    2 weeks ago
39 | sikamikanikobg/OlympicCoder-7B:latest                                      OlympicCoder-7B:latest                        04ad160caf57    15 GB     2 days ago
40 | sjo/deepseek-r1-8b-llama-distill-abliterated-q8_0:latest                   deepseek-r1-8b-llama-distill-abliterated-q8_0:latest 96aac7391c27 8.5 GB  2 weeks ago
41 | smollm2:latest                                                             smollm2:latest                                cef4a1e09247    1.8 GB    2 days ago
42 | yasserrmd/Qwen2.5-7B-Instruct-1M:latest                                    Qwen2.5-7B-Instruct-1M:latest                 3817bcc73563    4.7 GB    2 weeks ago
```

tools/trash/sorted_models.txt
```
1 | STRIPPED NAME                                  ID              SIZE      MODIFIED       TYPE
2 | athene-v2:72b-q2_K                            e566d713f2ce    29 GB     2 days ago     Instruct
3 | bge-reranker-v2-m3:latest                     06e0e64a6f61    635 MB    2 days ago     Embedding
4 | deephermes-3-llama-3:8b-bf16                  685d964bc072    16 GB     2 weeks ago    Instruct
5 | deephermes3-abliterated:latest                5e0dd34c75ce    4.9 GB    2 weeks ago    Instruct
6 | DeepHermes-3-Llama-3-8B-Preview-GGUF-Q8:latest b84779c3c02c    8.5 GB    2 weeks ago    Instruct
7 | deepscaler:1.5b-preview-q4_K_M                305c4a53269d    1.1 GB    2 weeks ago    Instruct
8 | deepseek-coder-v2:latest                      63fb193b3a9b    8.9 GB    2 weeks ago    Code
9 | deepseek-r1:14b                               ea35dfe18182    9.0 GB    7 weeks ago    Instruct
10 | deepseek-r1:14b-qwen-distill-q4_K_M           ea35dfe18182    9.0 GB    2 weeks ago    Instruct
11 | deepseek-r1:1.5b                              a42b25d8c10a    1.1 GB    6 weeks ago    Instruct
12 | deepseek-r1:32b-qwen-distill-q4_K_M           38056bbcbb2d    19 GB     2 weeks ago    Instruct
13 | deepseek-r1:8b-llama-distill-abliterated-q8_0:latest 96aac7391c27 8.5 GB  2 weeks ago    Instruct
14 | deepseek-r1:latest                            0a8c26691023    4.7 GB    2 weeks ago    Instruct
15 | deepseek-r1-Fusion:latest                     e5f58fab5137    19 GB     2 days ago     Instruct
16 | deepseek-r1-tool-calling:latest               9a3bad754abb    4.7 GB    2 weeks ago    Tool Use
17 | deepseek-v3:latest                            2ef1746094f1    2.0 GB    2 weeks ago    Instruct
18 | dolphin3:latest                               d5ab9ae8e1f2    4.9 GB    2 weeks ago    Instruct
19 | dolphin3-qwen2.5:3b-Q5_K_M                    83e3e2017f67    2.2 GB    2 weeks ago    Instruct
20 | granite-embedding:latest                      eb4c533ba6f7    62 MB     24 hours ago   Embedding
21 | granite3.2-vision:latest                      3be41a661804    2.4 GB    2 weeks ago    Vision
22 | hermes3:latest                                4f6b83f30b62    4.7 GB    2 weeks ago    Instruct
23 | LGAI_EXAONE-Deep-32B:q3_K_L                   eaa862122330    16 GB     2 days ago     Instruct
24 | llama3:8b                                     365c0bd3c000    4.7 GB    2 weeks ago    Instruct
25 | llama3.2:3b                                   a80c4f17acd5    2.0 GB    2 weeks ago    Instruct
26 | llama3.2:latest                               a80c4f17acd5    2.0 GB    2 weeks ago    Instruct
27 | mistral:latest                                f974a74358d6    4.1 GB    2 weeks ago    Instruct
28 | mistral-nemo-instruct-12b:q5km                c33a46d4c850    8.7 GB    2 weeks ago    Instruct
29 | mistral-nemo-uncensored:latest                011ab2c2afa5    7.1 GB    2 weeks ago    Instruct
30 | nemotron-mini:latest                          ed76ab18784f    2.7 GB    2 weeks ago    Instruct
31 | nomic-embed-text:latest                       0a109f422b47    274 MB    2 weeks ago    Embedding
32 | OlympicCoder-7B:latest                        04ad160caf57    15 GB     2 days ago     Code
33 | open-r1_OlympicCoder-32B:q2_K_L               d372e698643c    13 GB     53 minutes ago Code
34 | openbmb-minicpm-llama3-v-2_5:latest           13fe41ad413b    6.0 GB    2 weeks ago    Instruct
35 | phi4-abliterated:latest                       d3078cf67e11    9.1 GB    2 weeks ago    Instruct
36 | phi4-mini:latest                              78fad5d182a7    2.5 GB    2 weeks ago    Instruct
37 | Qwen2.5-7B-Instruct-1M:latest                 3817bcc73563    4.7 GB    2 weeks ago    Instruct
38 | qwen2.5:7b                                    845dbda0ea48    4.7 GB    2 weeks ago    Instruct
39 | qwen2.5:latest                                845dbda0ea48    4.7 GB    2 weeks ago    Instruct
40 | qwen2.5-coder:latest                          2b0496514337    4.7 GB    2 weeks ago    Code
41 | qwen2.5-coder-tools:1.5b                      e57b3dd6680f    1.6 GB    2 days ago     Tool Use
42 | smollm2:latest                                cef4a1e09247    1.8 GB    2 days ago     Instruct
```

.cursor/mcp-servers/notion-integration/index.js
```
1 | #!/usr/bin/env node
2 | 
3 | const express = require('express');
4 | const cors = require('cors');
5 | const { Client } = require('@notionhq/client');
6 | const dotenv = require('dotenv');
7 | const path = require('path');
8 | 
9 | // Load environment variables
10 | dotenv.config({ path: path.join(__dirname, '.env') });
11 | 
12 | const app = express();
13 | const PORT = process.env.PORT || 8589;
14 | 
15 | // Setup middleware
16 | app.use(cors());
17 | app.use(express.json());
18 | 
19 | // Initialize Notion client
20 | const notion = new Client({
21 |   auth: process.env.NOTION_API_KEY,
22 | });
23 | 
24 | // Verify Notion database access
25 | const DATABASE_ID = process.env.NOTION_DATABASE_ID;
26 | 
27 | // Add database mappings
28 | const databaseMappings = {
29 |   title: process.env.DB_TITLE_PROPERTY || 'Name',
30 |   status: process.env.DB_STATUS_PROPERTY || 'Status',
31 |   priority: process.env.DB_PRIORITY_PROPERTY || 'Priority',
32 |   tags: process.env.DB_TAGS_PROPERTY || 'Tags',
33 |   content: process.env.DB_CONTENT_PROPERTY || 'Description',
34 |   dueDate: process.env.DB_DUE_DATE_PROPERTY || 'Due Date',
35 |   category: process.env.DB_CATEGORY_PROPERTY || 'Category'
36 | };
37 | 
38 | // SSE endpoint for Cursor
39 | app.get('/sse', (req, res) => {
40 |   res.setHeader('Content-Type', 'text/event-stream');
41 |   res.setHeader('Cache-Control', 'no-cache');
42 |   res.setHeader('Connection', 'keep-alive');
43 | 
44 |   // Send capabilities message
45 |   const capabilities = {
46 |     name: 'notion-integration',
47 |     description: 'Notion API Integration for accessing and utilizing notes',
48 |     version: '1.0.0',
49 |     commands: [
50 |       {
51 |         name: 'searchNotes',
52 |         description: 'Search notes in Notion database',
53 |         parameters: [
54 |           {
55 |             name: 'query',
56 |             type: 'string',
57 |             description: 'Search query'
58 |           },
59 |           {
60 |             name: 'limit',
61 |             type: 'number', 
62 |             description: 'Maximum number of results to return',
63 |             default: 10
64 |           }
65 |         ]
66 |       },
67 |       {
68 |         name: 'getNote',
69 |         description: 'Get a specific note by ID',
70 |         parameters: [
71 |           {
72 |             name: 'id',
73 |             type: 'string',
74 |             description: 'Notion page ID'
75 |           }
76 |         ]
77 |       },
78 |       {
79 |         name: 'createNote',
80 |         description: 'Create a new note in Notion',
81 |         parameters: [
82 |           {
83 |             name: 'title',
84 |             type: 'string',
85 |             description: 'Note title'
86 |           },
87 |           {
88 |             name: 'content',
89 |             type: 'string',
90 |             description: 'Note content'
91 |           },
92 |           {
93 |             name: 'tags',
94 |             type: 'array',
95 |             description: 'Array of tags',
96 |             default: []
97 |           }
98 |         ]
99 |       },
100 |       {
101 |         name: 'updateNote',
102 |         description: 'Update an existing note',
103 |         parameters: [
104 |           {
105 |             name: 'id',
106 |             type: 'string',
107 |             description: 'Notion page ID'
108 |           },
109 |           {
110 |             name: 'title',
111 |             type: 'string',
112 |             description: 'Note title',
113 |             optional: true
114 |           },
115 |           {
116 |             name: 'content',
117 |             type: 'string',
118 |             description: 'Note content',
119 |             optional: true
120 |           },
121 |           {
122 |             name: 'tags',
123 |             type: 'array',
124 |             description: 'Array of tags',
125 |             optional: true
126 |           }
127 |         ]
128 |       }
129 |     ]
130 |   };
131 | 
132 |   res.write(`data: ${JSON.stringify(capabilities)}\n\n`);
133 | 
134 |   // Handle client disconnect
135 |   req.on('close', () => {
136 |     console.log('Client disconnected');
137 |   });
138 | });
139 | 
140 | // API endpoints
141 | app.post('/api/search', async (req, res) => {
142 |   try {
143 |     const { query, limit = 10 } = req.body;
144 |     
145 |     // Search in the database
146 |     const response = await notion.databases.query({
147 |       database_id: DATABASE_ID,
148 |       filter: {
149 |         or: [
150 |           {
151 |             property: 'title',
152 |             rich_text: {
153 |               contains: query
154 |             }
155 |           },
156 |           {
157 |             property: 'content',
158 |             rich_text: {
159 |               contains: query
160 |             }
161 |           },
162 |           {
163 |             property: 'tags',
164 |             multi_select: {
165 |               contains: query
166 |             }
167 |           }
168 |         ]
169 |       },
170 |       page_size: limit
171 |     });
172 |     
173 |     res.json({
174 |       success: true,
175 |       results: response.results
176 |     });
177 |   } catch (error) {
178 |     console.error('Search error:', error);
179 |     res.status(500).json({
180 |       success: false,
181 |       error: error.message
182 |     });
183 |   }
184 | });
185 | 
186 | app.get('/api/note/:id', async (req, res) => {
187 |   try {
188 |     const { id } = req.params;
189 |     
190 |     // Get page content
191 |     const page = await notion.pages.retrieve({ page_id: id });
192 |     const blocks = await notion.blocks.children.list({ block_id: id });
193 |     
194 |     res.json({
195 |       success: true,
196 |       page,
197 |       blocks: blocks.results
198 |     });
199 |   } catch (error) {
200 |     console.error('Get note error:', error);
201 |     res.status(500).json({
202 |       success: false,
203 |       error: error.message
204 |     });
205 |   }
206 | });
207 | 
208 | app.post('/api/note', async (req, res) => {
209 |   try {
210 |     const { title, content, tags = [] } = req.body;
211 |     
212 |     // Create a new page
213 |     const response = await notion.pages.create({
214 |       parent: {
215 |         database_id: DATABASE_ID
216 |       },
217 |       properties: {
218 |         title: {
219 |           title: [
220 |             {
221 |               text: {
222 |                 content: title
223 |               }
224 |             }
225 |           ]
226 |         },
227 |         tags: {
228 |           multi_select: tags.map(tag => ({ name: tag }))
229 |         }
230 |       },
231 |       children: [
232 |         {
233 |           object: 'block',
234 |           type: 'paragraph',
235 |           paragraph: {
236 |             rich_text: [
237 |               {
238 |                 type: 'text',
239 |                 text: {
240 |                   content: content
241 |                 }
242 |               }
243 |             ]
244 |           }
245 |         }
246 |       ]
247 |     });
248 |     
249 |     res.json({
250 |       success: true,
251 |       page: response
252 |     });
253 |   } catch (error) {
254 |     console.error('Create note error:', error);
255 |     res.status(500).json({
256 |       success: false,
257 |       error: error.message
258 |     });
259 |   }
260 | });
261 | 
262 | app.patch('/api/note/:id', async (req, res) => {
263 |   try {
264 |     const { id } = req.params;
265 |     const { title, content, tags } = req.body;
266 |     
267 |     // Update properties if provided
268 |     const properties = {};
269 |     
270 |     if (title) {
271 |       properties.title = {
272 |         title: [
273 |           {
274 |             text: {
275 |               content: title
276 |             }
277 |           }
278 |         ]
279 |       };
280 |     }
281 |     
282 |     if (tags) {
283 |       properties.tags = {
284 |         multi_select: tags.map(tag => ({ name: tag }))
285 |       };
286 |     }
287 |     
288 |     // Update page properties
289 |     const page = await notion.pages.update({
290 |       page_id: id,
291 |       properties
292 |     });
293 |     
294 |     // Update content if provided
295 |     if (content) {
296 |       // First clear existing content
297 |       const blocks = await notion.blocks.children.list({ block_id: id });
298 |       for (const block of blocks.results) {
299 |         await notion.blocks.delete({ block_id: block.id });
300 |       }
301 |       
302 |       // Add new content
303 |       await notion.blocks.children.append({
304 |         block_id: id,
305 |         children: [
306 |           {
307 |             object: 'block',
308 |             type: 'paragraph',
309 |             paragraph: {
310 |               rich_text: [
311 |                 {
312 |                   type: 'text',
313 |                   text: {
314 |                     content: content
315 |                   }
316 |                 }
317 |               ]
318 |             }
319 |           }
320 |         ]
321 |       });
322 |     }
323 |     
324 |     res.json({
325 |       success: true,
326 |       page
327 |     });
328 |   } catch (error) {
329 |     console.error('Update note error:', error);
330 |     res.status(500).json({
331 |       success: false,
332 |       error: error.message
333 |     });
334 |   }
335 | });
336 | 
337 | // Command handler for SSE
338 | app.post('/command', async (req, res) => {
339 |   try {
340 |     const { command, parameters } = req.body;
341 |     
342 |     let result;
343 |     
344 |     switch (command) {
345 |       case 'searchNotes':
346 |         const { query, limit } = parameters;
347 |         const searchResponse = await notion.databases.query({
348 |           database_id: DATABASE_ID,
349 |           filter: {
350 |             or: [
351 |               {
352 |                 property: 'title',
353 |                 rich_text: {
354 |                   contains: query
355 |                 }
356 |               },
357 |               {
358 |                 property: 'content',
359 |                 rich_text: {
360 |                   contains: query
361 |                 }
362 |               },
363 |               {
364 |                 property: 'tags',
365 |                 multi_select: {
366 |                   contains: query
367 |                 }
368 |               }
369 |             ]
370 |           },
371 |           page_size: limit || 10
372 |         });
373 |         result = searchResponse.results;
374 |         break;
375 |         
376 |       case 'getNote':
377 |         const { id } = parameters;
378 |         const page = await notion.pages.retrieve({ page_id: id });
379 |         const blocks = await notion.blocks.children.list({ block_id: id });
380 |         result = { page, blocks: blocks.results };
381 |         break;
382 |         
383 |       case 'createNote':
384 |         const { title, content, tags = [] } = parameters;
385 |         const createResponse = await notion.pages.create({
386 |           parent: {
387 |             database_id: DATABASE_ID
388 |           },
389 |           properties: {
390 |             title: {
391 |               title: [
392 |                 {
393 |                   text: {
394 |                     content: title
395 |                   }
396 |                 }
397 |               ]
398 |             },
399 |             tags: {
400 |               multi_select: tags.map(tag => ({ name: tag }))
401 |             }
402 |           },
403 |           children: [
404 |             {
405 |               object: 'block',
406 |               type: 'paragraph',
407 |               paragraph: {
408 |                 rich_text: [
409 |                   {
410 |                     type: 'text',
411 |                     text: {
412 |                       content: content
413 |                     }
414 |                   }
415 |                 ]
416 |               }
417 |             }
418 |           ]
419 |         });
420 |         result = createResponse;
421 |         break;
422 |         
423 |       case 'updateNote':
424 |         const updateParams = parameters;
425 |         const updateProperties = {};
426 |         
427 |         if (updateParams.title) {
428 |           updateProperties.title = {
429 |             title: [
430 |               {
431 |                 text: {
432 |                   content: updateParams.title
433 |                 }
434 |               }
435 |             ]
436 |           };
437 |         }
438 |         
439 |         if (updateParams.tags) {
440 |           updateProperties.tags = {
441 |             multi_select: updateParams.tags.map(tag => ({ name: tag }))
442 |           };
443 |         }
444 |         
445 |         // Update page properties
446 |         const updatedPage = await notion.pages.update({
447 |           page_id: updateParams.id,
448 |           properties: updateProperties
449 |         });
450 |         
451 |         // Update content if provided
452 |         if (updateParams.content) {
453 |           // First clear existing content
454 |           const existingBlocks = await notion.blocks.children.list({ block_id: updateParams.id });
455 |           for (const block of existingBlocks.results) {
456 |             await notion.blocks.delete({ block_id: block.id });
457 |           }
458 |           
459 |           // Add new content
460 |           await notion.blocks.children.append({
461 |             block_id: updateParams.id,
462 |             children: [
463 |               {
464 |                 object: 'block',
465 |                 type: 'paragraph',
466 |                 paragraph: {
467 |                   rich_text: [
468 |                     {
469 |                       type: 'text',
470 |                       text: {
471 |                         content: updateParams.content
472 |                       }
473 |                     }
474 |                   ]
475 |                 }
476 |               }
477 |             ]
478 |           });
479 |         }
480 |         
481 |         result = updatedPage;
482 |         break;
483 |         
484 |       default:
485 |         throw new Error(`Unknown command: ${command}`);
486 |     }
487 |     
488 |     res.json({
489 |       success: true,
490 |       result
491 |     });
492 |   } catch (error) {
493 |     console.error(`Command error (${req.body.command}):`, error);
494 |     res.status(500).json({
495 |       success: false,
496 |       error: error.message
497 |     });
498 |   }
499 | });
500 | 
501 | // Task management endpoints
502 | app.get('/api/tasks', async (req, res) => {
503 |   try {
504 |     if (!notion || !DATABASE_ID) {
505 |       return res.status(400).json({
506 |         success: false,
507 |         error: 'Notion API or database ID not configured',
508 |       });
509 |     }
510 | 
511 |     const tasks = await fetchAllTasks();
512 |     return res.json(tasks);
513 |   } catch (error) {
514 |     console.error('Error fetching tasks:', error);
515 |     return res.status(500).json({
516 |       success: false,
517 |       error: error.message || 'Failed to fetch tasks',
518 |     });
519 |   }
520 | });
521 | 
522 | app.get('/api/tasks/:id', async (req, res) => {
523 |   try {
524 |     const { id } = req.params;
525 |     
526 |     if (!notion || !DATABASE_ID) {
527 |       return res.status(400).json({
528 |         success: false,
529 |         error: 'Notion API or database ID not configured',
530 |       });
531 |     }
532 | 
533 |     const task = await notion.pages.retrieve({ page_id: id });
534 |     const formattedTask = formatNotionTask(task);
535 |     
536 |     return res.json(formattedTask);
537 |   } catch (error) {
538 |     console.error(`Error fetching task ${req.params.id}:`, error);
539 |     return res.status(500).json({
540 |       success: false,
541 |       error: error.message || 'Failed to fetch task',
542 |     });
543 |   }
544 | });
545 | 
546 | app.post('/api/tasks', async (req, res) => {
547 |   try {
548 |     const { task } = req.body;
549 |     
550 |     if (!notion || !DATABASE_ID) {
551 |       return res.status(400).json({
552 |         success: false,
553 |         error: 'Notion API or database ID not configured',
554 |       });
555 |     }
556 | 
557 |     if (!task || !task.title) {
558 |       return res.status(400).json({
559 |         success: false,
560 |         error: 'Task title is required',
561 |       });
562 |     }
563 | 
564 |     const notionTask = await createNotionTask(task);
565 |     const formattedTask = formatNotionTask(notionTask);
566 |     
567 |     return res.json(formattedTask);
568 |   } catch (error) {
569 |     console.error('Error creating task:', error);
570 |     return res.status(500).json({
571 |       success: false,
572 |       error: error.message || 'Failed to create task',
573 |     });
574 |   }
575 | });
576 | 
577 | app.put('/api/tasks/:id', async (req, res) => {
578 |   try {
579 |     const { id } = req.params;
580 |     const { updates } = req.body;
581 |     
582 |     if (!notion || !DATABASE_ID) {
583 |       return res.status(400).json({
584 |         success: false,
585 |         error: 'Notion API or database ID not configured',
586 |       });
587 |     }
588 | 
589 |     if (!updates) {
590 |       return res.status(400).json({
591 |         success: false,
592 |         error: 'Task updates are required',
593 |       });
594 |     }
595 | 
596 |     const notionTask = await updateNotionTask(id, updates);
597 |     const formattedTask = formatNotionTask(notionTask);
598 |     
599 |     return res.json(formattedTask);
600 |   } catch (error) {
601 |     console.error(`Error updating task ${req.params.id}:`, error);
602 |     return res.status(500).json({
603 |       success: false,
604 |       error: error.message || 'Failed to update task',
605 |     });
606 |   }
607 | });
608 | 
609 | app.delete('/api/tasks/:id', async (req, res) => {
610 |   try {
611 |     const { id } = req.params;
612 |     
613 |     if (!notion || !DATABASE_ID) {
614 |       return res.status(400).json({
615 |         success: false,
616 |         error: 'Notion API or database ID not configured',
617 |       });
618 |     }
619 | 
620 |     await notion.pages.update({
621 |       page_id: id,
622 |       archived: true,
623 |     });
624 |     
625 |     return res.json({
626 |       success: true,
627 |       message: 'Task archived successfully',
628 |     });
629 |   } catch (error) {
630 |     console.error(`Error deleting task ${req.params.id}:`, error);
631 |     return res.status(500).json({
632 |       success: false,
633 |       error: error.message || 'Failed to delete task',
634 |     });
635 |   }
636 | });
637 | 
638 | app.post('/api/sync', async (req, res) => {
639 |   try {
640 |     const { tasks } = req.body;
641 |     
642 |     if (!notion || !DATABASE_ID) {
643 |       return res.status(400).json({
644 |         success: false,
645 |         error: 'Notion API or database ID not configured',
646 |       });
647 |     }
648 | 
649 |     if (!Array.isArray(tasks)) {
650 |       return res.status(400).json({
651 |         success: false,
652 |         error: 'Tasks must be an array',
653 |       });
654 |     }
655 | 
656 |     // Get current tasks from Notion
657 |     const notionTasks = await fetchAllTasks();
658 |     const notionTaskMap = new Map(notionTasks.map(task => [task.id, task]));
659 |     
660 |     // Track sync results
661 |     const results = {
662 |       created: 0,
663 |       updated: 0,
664 |       skipped: 0,
665 |       failed: 0,
666 |     };
667 | 
668 |     // Process each task
669 |     for (const task of tasks) {
670 |       try {
671 |         // Skip tasks without necessary data
672 |         if (!task.title) {
673 |           results.skipped++;
674 |           continue;
675 |         }
676 | 
677 |         // Check if task already exists in Notion
678 |         if (task.id && task.id.startsWith('notion-') && notionTaskMap.has(task.id)) {
679 |           // Update existing task
680 |           await updateNotionTask(task.id, task);
681 |           results.updated++;
682 |         } else {
683 |           // Create new task
684 |           await createNotionTask(task);
685 |           results.created++;
686 |         }
687 |       } catch (error) {
688 |         console.error(`Error syncing task ${task.id || 'new task'}:`, error);
689 |         results.failed++;
690 |       }
691 |     }
692 | 
693 |     return res.json({
694 |       success: true,
695 |       syncedCount: results.created + results.updated,
696 |       results,
697 |     });
698 |   } catch (error) {
699 |     console.error('Error syncing tasks:', error);
700 |     return res.status(500).json({
701 |       success: false,
702 |       error: error.message || 'Failed to sync tasks',
703 |     });
704 |   }
705 | });
706 | 
707 | // Helper functions for Notion task operations
708 | 
709 | /**
710 |  * Fetch all tasks from Notion database
711 |  */
712 | async function fetchAllTasks() {
713 |   // Get database schema to determine property mappings
714 |   const database = await notion.databases.retrieve({ database_id: DATABASE_ID });
715 |   const propertyNames = Object.entries(database.properties).reduce((acc, [key, value]) => {
716 |     acc[value.type] = key;
717 |     return acc;
718 |   }, {});
719 | 
720 |   // Query the database for tasks
721 |   const response = await notion.databases.query({
722 |     database_id: DATABASE_ID,
723 |     sorts: [
724 |       {
725 |         property: propertyNames.title || propertyNames.rich_text || 'Title',
726 |         direction: 'ascending',
727 |       },
728 |     ],
729 |     page_size: 100,
730 |   });
731 | 
732 |   // Transform Notion pages to task format
733 |   return response.results.map(page => formatNotionTask(page));
734 | }
735 | 
736 | /**
737 |  * Format a Notion page as a task
738 |  */
739 | function formatNotionTask(page) {
740 |   // Get property mappings from storage or use defaults
741 |   const mappings = {
742 |     title: 'Name',
743 |     status: 'Status',
744 |     priority: 'Priority',
745 |     tags: 'Tags',
746 |     content: 'Description',
747 |     dueDate: 'Due Date',
748 |     category: 'Category',
749 |     ...databaseMappings,
750 |   };
751 | 
752 |   const properties = page.properties;
753 |   
754 |   // Extract data based on property type
755 |   const getPropertyValue = (propertyName) => {
756 |     const prop = properties[propertyName];
757 |     if (!prop) return null;
758 | 
759 |     switch (prop.type) {
760 |       case 'title':
761 |         return prop.title.map(t => t.plain_text).join('');
762 |       case 'rich_text':
763 |         return prop.rich_text.map(t => t.plain_text).join('');
764 |       case 'select':
765 |         return prop.select?.name;
766 |       case 'multi_select':
767 |         return prop.multi_select.map(s => s.name);
768 |       case 'date':
769 |         return prop.date?.start ? new Date(prop.date.start) : null;
770 |       case 'checkbox':
771 |         return prop.checkbox;
772 |       case 'number':
773 |         return prop.number;
774 |       default:
775 |         return null;
776 |     }
777 |   };
778 | 
779 |   // Build task object from Notion page
780 |   return {
781 |     id: page.id,
782 |     title: getPropertyValue(mappings.title) || 'Untitled',
783 |     content: getPropertyValue(mappings.content) || '',
784 |     status: getPropertyValue(mappings.status) || 'not-started',
785 |     priority: getPropertyValue(mappings.priority) || 3,
786 |     tags: getPropertyValue(mappings.tags) || [],
787 |     lastUpdated: new Date(page.last_edited_time),
788 |     url: page.url,
789 |     dueDate: getPropertyValue(mappings.dueDate),
790 |     category: getPropertyValue(mappings.category) || 'General',
791 |   };
792 | }
793 | 
794 | /**
795 |  * Create a new task in Notion
796 |  */
797 | async function createNotionTask(task) {
798 |   // Get property mappings from storage or use defaults
799 |   const mappings = {
800 |     title: 'Name',
801 |     status: 'Status',
802 |     priority: 'Priority',
803 |     tags: 'Tags',
804 |     content: 'Description',
805 |     dueDate: 'Due Date',
806 |     category: 'Category',
807 |     ...databaseMappings,
808 |   };
809 | 
810 |   // Get database schema to determine property types
811 |   const database = await notion.databases.retrieve({ database_id: DATABASE_ID });
812 |   const propertyTypes = {};
813 |   
814 |   for (const [key, value] of Object.entries(database.properties)) {
815 |     propertyTypes[key] = value.type;
816 |   }
817 | 
818 |   // Build properties object based on database schema
819 |   const properties = {};
820 | 
821 |   // Set title property (required for Notion pages)
822 |   const titleProp = mappings.title;
823 |   if (titleProp && propertyTypes[titleProp] === 'title') {
824 |     properties[titleProp] = {
825 |       title: [{ type: 'text', text: { content: task.title || 'Untitled' } }],
826 |     };
827 |   }
828 | 
829 |   // Set content/description property
830 |   const contentProp = mappings.content;
831 |   if (contentProp && task.description && propertyTypes[contentProp] === 'rich_text') {
832 |     properties[contentProp] = {
833 |       rich_text: [{ type: 'text', text: { content: task.description } }],
834 |     };
835 |   }
836 | 
837 |   // Set status property
838 |   const statusProp = mappings.status;
839 |   if (statusProp && task.status && propertyTypes[statusProp] === 'select') {
840 |     properties[statusProp] = {
841 |       select: { name: task.status },
842 |     };
843 |   }
844 | 
845 |   // Set priority property
846 |   const priorityProp = mappings.priority;
847 |   if (priorityProp && task.priority !== undefined) {
848 |     if (propertyTypes[priorityProp] === 'number') {
849 |       properties[priorityProp] = {
850 |         number: task.priority,
851 |       };
852 |     } else if (propertyTypes[priorityProp] === 'select') {
853 |       properties[priorityProp] = {
854 |         select: { name: `P${task.priority}` },
855 |       };
856 |     }
857 |   }
858 | 
859 |   // Set tags property
860 |   const tagsProp = mappings.tags;
861 |   if (tagsProp && Array.isArray(task.tags) && propertyTypes[tagsProp] === 'multi_select') {
862 |     properties[tagsProp] = {
863 |       multi_select: task.tags.map(tag => ({ name: tag })),
864 |     };
865 |   }
866 | 
867 |   // Set due date property
868 |   const dueDateProp = mappings.dueDate;
869 |   if (dueDateProp && task.dueDate && propertyTypes[dueDateProp] === 'date') {
870 |     const date = new Date(task.dueDate);
871 |     properties[dueDateProp] = {
872 |       date: { start: date.toISOString().split('T')[0] },
873 |     };
874 |   }
875 | 
876 |   // Set category property
877 |   const categoryProp = mappings.category;
878 |   if (categoryProp && task.category) {
879 |     if (propertyTypes[categoryProp] === 'select') {
880 |       properties[categoryProp] = {
881 |         select: { name: task.category },
882 |       };
883 |     } else if (propertyTypes[categoryProp] === 'rich_text') {
884 |       properties[categoryProp] = {
885 |         rich_text: [{ type: 'text', text: { content: task.category } }],
886 |       };
887 |     }
888 |   }
889 | 
890 |   // Create the page in Notion
891 |   return await notion.pages.create({
892 |     parent: { database_id: DATABASE_ID },
893 |     properties,
894 |   });
895 | }
896 | 
897 | /**
898 |  * Update an existing task in Notion
899 |  */
900 | async function updateNotionTask(pageId, updates) {
901 |   // Get property mappings from storage or use defaults
902 |   const mappings = {
903 |     title: 'Name',
904 |     status: 'Status',
905 |     priority: 'Priority',
906 |     tags: 'Tags',
907 |     content: 'Description',
908 |     dueDate: 'Due Date',
909 |     category: 'Category',
910 |     ...databaseMappings,
911 |   };
912 | 
913 |   // Get database schema to determine property types
914 |   const database = await notion.databases.retrieve({ database_id: DATABASE_ID });
915 |   const propertyTypes = {};
916 |   
917 |   for (const [key, value] of Object.entries(database.properties)) {
918 |     propertyTypes[key] = value.type;
919 |   }
920 | 
921 |   // Build properties object based on database schema
922 |   const properties = {};
923 | 
924 |   // Update title property
925 |   if (updates.title && mappings.title && propertyTypes[mappings.title] === 'title') {
926 |     properties[mappings.title] = {
927 |       title: [{ type: 'text', text: { content: updates.title } }],
928 |     };
929 |   }
930 | 
931 |   // Update content/description property
932 |   if (updates.description && mappings.content && propertyTypes[mappings.content] === 'rich_text') {
933 |     properties[mappings.content] = {
934 |       rich_text: [{ type: 'text', text: { content: updates.description } }],
935 |     };
936 |   }
937 | 
938 |   // Update status property
939 |   if (updates.status && mappings.status && propertyTypes[mappings.status] === 'select') {
940 |     properties[mappings.status] = {
941 |       select: { name: updates.status },
942 |     };
943 |   }
944 | 
945 |   // Update priority property
946 |   if (updates.priority !== undefined && mappings.priority) {
947 |     if (propertyTypes[mappings.priority] === 'number') {
948 |       properties[mappings.priority] = {
949 |         number: updates.priority,
950 |       };
951 |     } else if (propertyTypes[mappings.priority] === 'select') {
952 |       properties[mappings.priority] = {
953 |         select: { name: `P${updates.priority}` },
954 |       };
955 |     }
956 |   }
957 | 
958 |   // Update tags property
959 |   if (Array.isArray(updates.tags) && mappings.tags && propertyTypes[mappings.tags] === 'multi_select') {
960 |     properties[mappings.tags] = {
961 |       multi_select: updates.tags.map(tag => ({ name: tag })),
962 |     };
963 |   }
964 | 
965 |   // Update due date property
966 |   if (updates.dueDate && mappings.dueDate && propertyTypes[mappings.dueDate] === 'date') {
967 |     const date = new Date(updates.dueDate);
968 |     properties[mappings.dueDate] = {
969 |       date: { start: date.toISOString().split('T')[0] },
970 |     };
971 |   }
972 | 
973 |   // Update category property
974 |   if (updates.category && mappings.category) {
975 |     if (propertyTypes[mappings.category] === 'select') {
976 |       properties[mappings.category] = {
977 |         select: { name: updates.category },
978 |       };
979 |     } else if (propertyTypes[mappings.category] === 'rich_text') {
980 |       properties[mappings.category] = {
981 |         rich_text: [{ type: 'text', text: { content: updates.category } }],
982 |       };
983 |     }
984 |   }
985 | 
986 |   // Update the page in Notion
987 |   return await notion.pages.update({
988 |     page_id: pageId,
989 |     properties,
990 |   });
991 | }
992 | 
993 | // Start server
994 | if (process.env.NODE_ENV !== 'test') {
995 |   app.listen(PORT, () => {
996 |     console.log(`Notion Integration MCP Server running on port ${PORT}`);
997 |     console.log(`SSE endpoint available at: http://localhost:${PORT}/sse`);
998 |   });
999 | }
1000 | 
1001 | // Export the app for testing
1002 | module.exports = app; 
```

.cursor/mcp-servers/notion-integration/index.test.js
```
1 | const request = require('supertest');
2 | 
3 | // Mock environment variables
4 | process.env.NOTION_API_KEY = 'test-api-key';
5 | process.env.NOTION_DATABASE_ID = 'test-database-id';
6 | process.env.PORT = '8589';
7 | process.env.NODE_ENV = 'test';
8 | 
9 | // Mock Notion client
10 | jest.mock('@notionhq/client', () => {
11 |   const mockClient = {
12 |     databases: {
13 |       query: jest.fn().mockResolvedValue({ results: [] }),
14 |       retrieve: jest.fn().mockResolvedValue({
15 |         properties: {
16 |           'Name': { type: 'title' },
17 |           'Status': { type: 'select' },
18 |           'Priority': { type: 'number' },
19 |           'Tags': { type: 'multi_select' },
20 |           'Description': { type: 'rich_text' },
21 |           'Due Date': { type: 'date' },
22 |           'Category': { type: 'select' }
23 |         }
24 |       })
25 |     },
26 |     pages: {
27 |       create: jest.fn().mockResolvedValue({ id: 'new-page-id' }),
28 |       update: jest.fn().mockResolvedValue({ id: 'updated-page-id' }),
29 |       retrieve: jest.fn().mockResolvedValue({
30 |         id: 'test-page-id',
31 |         properties: {
32 |           'Name': { 
33 |             type: 'title',
34 |             title: [{ plain_text: 'Test Task' }]
35 |           },
36 |           'Status': {
37 |             type: 'select',
38 |             select: { name: 'In Progress' }
39 |           }
40 |         },
41 |         last_edited_time: new Date().toISOString(),
42 |         url: 'https://notion.so/test-page'
43 |       })
44 |     },
45 |     blocks: {
46 |       children: {
47 |         list: jest.fn().mockResolvedValue({ results: [] }),
48 |         append: jest.fn().mockResolvedValue({})
49 |       },
50 |       delete: jest.fn().mockResolvedValue({})
51 |     }
52 |   };
53 |   
54 |   return {
55 |     Client: jest.fn(() => mockClient)
56 |   };
57 | });
58 | 
59 | // Mock dotenv
60 | jest.mock('dotenv', () => ({
61 |   config: jest.fn()
62 | }));
63 | 
64 | // Create test suite
65 | describe('Notion Integration Tests', () => {
66 |   let app;
67 |   
68 |   beforeEach(() => {
69 |     jest.resetModules();
70 |     // Import the app after setting up mocks
71 |     app = require('./index');
72 |   });
73 | 
74 |   afterEach(() => {
75 |     jest.clearAllMocks();
76 |   });
77 | 
78 |   // Test SSE endpoint
79 |   describe('SSE Endpoint', () => {
80 |     test('should return capabilities', async () => {
81 |       const res = await request(app)
82 |         .get('/sse')
83 |         .set('Accept', 'text/event-stream');
84 |       
85 |       expect(res.status).toBe(200);
86 |       expect(res.headers['content-type']).toBe('text/event-stream');
87 |       expect(res.text).toContain('notion-integration');
88 |       expect(res.text).toContain('searchNotes');
89 |       expect(res.text).toContain('getNote');
90 |       expect(res.text).toContain('createNote');
91 |       expect(res.text).toContain('updateNote');
92 |     });
93 |   });
94 | 
95 |   // Test API endpoints
96 |   describe('Note API Endpoints', () => {
97 |     test('should search notes', async () => {
98 |       const res = await request(app)
99 |         .post('/api/search')
100 |         .send({ query: 'test', limit: 5 });
101 |       
102 |       expect(res.status).toBe(200);
103 |       expect(res.body.success).toBe(true);
104 |     });
105 |     
106 |     test('should get a note by ID', async () => {
107 |       const res = await request(app)
108 |         .get('/api/note/test-note-id');
109 |       
110 |       expect(res.status).toBe(200);
111 |       expect(res.body.success).toBe(true);
112 |     });
113 |     
114 |     test('should create a new note', async () => {
115 |       const res = await request(app)
116 |         .post('/api/note')
117 |         .send({
118 |           title: 'New Test Note',
119 |           content: 'This is a test note',
120 |           tags: ['test', 'note']
121 |         });
122 |       
123 |       expect(res.status).toBe(200);
124 |       expect(res.body.success).toBe(true);
125 |     });
126 |     
127 |     test('should update an existing note', async () => {
128 |       const res = await request(app)
129 |         .patch('/api/note/test-note-id')
130 |         .send({
131 |           title: 'Updated Note',
132 |           tags: ['updated']
133 |         });
134 |       
135 |       expect(res.status).toBe(200);
136 |       expect(res.body.success).toBe(true);
137 |     });
138 |   });
139 | 
140 |   // Test Command Handler
141 |   describe('Command Handler', () => {
142 |     test('should handle searchNotes command', async () => {
143 |       const res = await request(app)
144 |         .post('/command')
145 |         .send({
146 |           command: 'searchNotes',
147 |           parameters: { query: 'test', limit: 5 }
148 |         });
149 |       
150 |       expect(res.status).toBe(200);
151 |       expect(res.body.success).toBe(true);
152 |     });
153 |     
154 |     test('should handle getNote command', async () => {
155 |       const res = await request(app)
156 |         .post('/command')
157 |         .send({
158 |           command: 'getNote',
159 |           parameters: { id: 'test-note-id' }
160 |         });
161 |       
162 |       expect(res.status).toBe(200);
163 |       expect(res.body.success).toBe(true);
164 |     });
165 |     
166 |     test('should handle createNote command', async () => {
167 |       const res = await request(app)
168 |         .post('/command')
169 |         .send({
170 |           command: 'createNote',
171 |           parameters: {
172 |             title: 'New Note',
173 |             content: 'Content',
174 |             tags: ['tag1']
175 |           }
176 |         });
177 |       
178 |       expect(res.status).toBe(200);
179 |       expect(res.body.success).toBe(true);
180 |     });
181 |     
182 |     test('should handle updateNote command', async () => {
183 |       const res = await request(app)
184 |         .post('/command')
185 |         .send({
186 |           command: 'updateNote',
187 |           parameters: {
188 |             id: 'test-note-id',
189 |             title: 'Updated Title'
190 |           }
191 |         });
192 |       
193 |       expect(res.status).toBe(200);
194 |       expect(res.body.success).toBe(true);
195 |     });
196 |   });
197 | 
198 |   // Test Task Management Endpoints
199 |   describe('Task Management Endpoints', () => {
200 |     test('should fetch all tasks', async () => {
201 |       const res = await request(app)
202 |         .get('/api/tasks');
203 |       
204 |       expect(res.status).toBe(200);
205 |     });
206 |     
207 |     test('should fetch a single task by ID', async () => {
208 |       const res = await request(app)
209 |         .get('/api/tasks/test-task-id');
210 |       
211 |       expect(res.status).toBe(200);
212 |     });
213 |     
214 |     test('should create a new task', async () => {
215 |       const res = await request(app)
216 |         .post('/api/tasks')
217 |         .send({
218 |           task: {
219 |             title: 'New Task',
220 |             priority: 1,
221 |             tags: ['important']
222 |           }
223 |         });
224 |       
225 |       expect(res.status).toBe(200);
226 |     });
227 |     
228 |     test('should update an existing task', async () => {
229 |       const res = await request(app)
230 |         .put('/api/tasks/test-task-id')
231 |         .send({
232 |           updates: {
233 |             title: 'Updated Task',
234 |             status: 'completed'
235 |           }
236 |         });
237 |       
238 |       expect(res.status).toBe(200);
239 |     });
240 |     
241 |     test('should delete (archive) a task', async () => {
242 |       const res = await request(app)
243 |         .delete('/api/tasks/test-task-id');
244 |       
245 |       expect(res.status).toBe(200);
246 |       expect(res.body.success).toBe(true);
247 |     });
248 |     
249 |     test('should sync tasks', async () => {
250 |       const res = await request(app)
251 |         .post('/api/sync')
252 |         .send({
253 |           tasks: [
254 |             { id: 'notion-task-1', title: 'Updated Task' },
255 |             { title: 'New Task' }
256 |           ]
257 |         });
258 |       
259 |       expect(res.status).toBe(200);
260 |       expect(res.body.success).toBe(true);
261 |     });
262 |   });
263 | }); 
```

.cursor/mcp-servers/notion-integration/package.json
```
1 | {
2 |   "name": "notion-integration-mcp",
3 |   "version": "1.0.0",
4 |   "description": "MCP server for Notion API integration",
5 |   "main": "index.js",
6 |   "scripts": {
7 |     "start": "node index.js",
8 |     "test": "jest"
9 |   },
10 |   "dependencies": {
11 |     "@notionhq/client": "^2.2.14",
12 |     "cors": "^2.8.5",
13 |     "dotenv": "^16.3.1",
14 |     "express": "^4.18.2"
15 |   },
16 |   "devDependencies": {
17 |     "jest": "^29.7.0",
18 |     "supertest": "^6.3.3"
19 |   },
20 |   "engines": {
21 |     "node": ">=14.0.0"
22 |   },
23 |   "author": "",
24 |   "license": "MIT"
25 | } 
```

.cursor/mcp-servers/web-search-optimizer/package.json
```
1 | {
2 |   "name": "web-search-optimizer",
3 |   "version": "1.0.0",
4 |   "description": "Web Search Optimizer MCP server with caching and rate limiting",
5 |   "main": "web-search-optimizer.js",
6 |   "scripts": {
7 |     "start": "node web-search-optimizer.js",
8 |     "test": "node test-queries.js"
9 |   },
10 |   "dependencies": {
11 |     "axios": "^1.6.0",
12 |     "uuid": "^9.0.1",
13 |     "express": "^4.18.2",
14 |     "cors": "^2.8.5",
15 |     "body-parser": "^1.20.2"
16 |   },
17 |   "engines": {
18 |     "node": ">=14.0.0"
19 |   },
20 |   "author": "",
21 |   "license": "MIT"
22 | } 
```

.cursor/mcp-servers/web-search-optimizer/test-queries.js
```
1 | #!/usr/bin/env node
2 | 
3 | /**
4 |  * Web Search Optimizer Test Script
5 |  * 
6 |  * This script tests the Web Search Optimizer MCP server with various query types
7 |  * to verify caching, DevDocs.io integration, and knowledge graph storage.
8 |  * 
9 |  * Usage: node test-queries.js
10 |  */
11 | 
12 | const http = require('http');
13 | const { v4: uuidv4 } = require('uuid');
14 | 
15 | // Configuration
16 | const MCP_SERVER_URL = 'http://localhost:8588'; // Update with your MCP server port
17 | const TEST_QUERIES = [
18 |   {
19 |     name: 'Basic Search',
20 |     query: 'TypeScript interface examples',
21 |     params: { count: 3 }
22 |   },
23 |   {
24 |     name: 'Documentation Search',
25 |     query: 'JavaScript Promise API',
26 |     params: { count: 3, queryType: 'documentation' }
27 |   },
28 |   {
29 |     name: 'News Search',
30 |     query: 'latest technology announcements',
31 |     params: { count: 3, queryType: 'news' }
32 |   },
33 |   {
34 |     name: 'Cache Test (First Call)',
35 |     query: 'React hooks tutorial',
36 |     params: { count: 3 }
37 |   },
38 |   {
39 |     name: 'Cache Test (Second Call)',
40 |     query: 'React hooks tutorial',
41 |     params: { count: 3 }
42 |   },
43 |   {
44 |     name: 'Force Refresh',
45 |     query: 'React hooks tutorial',
46 |     params: { count: 3, forceRefresh: true }
47 |   },
48 |   {
49 |     name: 'DevDocs.io Test',
50 |     query: 'HTML canvas documentation',
51 |     params: { count: 3, queryType: 'documentation' }
52 |   }
53 | ];
54 | 
55 | // Helper to make MCP calls
56 | async function callMCP(method, params) {
57 |   return new Promise((resolve, reject) => {
58 |     const requestId = uuidv4();
59 |     const data = JSON.stringify({
60 |       jsonrpc: '2.0',
61 |       id: requestId,
62 |       method,
63 |       params
64 |     });
65 |     
66 |     const options = {
67 |       hostname: 'localhost',
68 |       port: MCP_SERVER_URL.split(':')[2],
69 |       path: '/',
70 |       method: 'POST',
71 |       headers: {
72 |         'Content-Type': 'application/json',
73 |         'Content-Length': data.length
74 |       }
75 |     };
76 |     
77 |     const req = http.request(options, (res) => {
78 |       let responseData = '';
79 |       
80 |       res.on('data', (chunk) => {
81 |         responseData += chunk;
82 |       });
83 |       
84 |       res.on('end', () => {
85 |         try {
86 |           const parsedData = JSON.parse(responseData);
87 |           if (parsedData.error) {
88 |             reject(new Error(`MCP Error: ${JSON.stringify(parsedData.error)}`));
89 |           } else {
90 |             resolve(parsedData.result);
91 |           }
92 |         } catch (err) {
93 |           reject(new Error(`Failed to parse MCP response: ${err.message}`));
94 |         }
95 |       });
96 |     });
97 |     
98 |     req.on('error', (err) => {
99 |       reject(new Error(`Request error: ${err.message}`));
100 |     });
101 |     
102 |     req.write(data);
103 |     req.end();
104 |   });
105 | }
106 | 
107 | // Run tests
108 | async function runTests() {
109 |   console.log('Starting Web Search Optimizer Tests...\n');
110 |   
111 |   try {
112 |     // Clear cache before tests
113 |     console.log('Clearing cache for clean test run...');
114 |     await callMCP('clear_search_cache', { all: true });
115 |     console.log('Cache cleared.\n');
116 |     
117 |     // Get initial stats
118 |     console.log('Getting initial stats...');
119 |     const initialStats = await callMCP('get_search_stats', {});
120 |     console.log('Initial stats:', JSON.stringify(initialStats, null, 2), '\n');
121 |     
122 |     // Run each test query
123 |     for (const test of TEST_QUERIES) {
124 |       console.log(`\n===== Test: ${test.name} =====`);
125 |       console.log(`Query: "${test.query}"`);
126 |       console.log(`Parameters: ${JSON.stringify(test.params)}`);
127 |       
128 |       try {
129 |         console.time('Query Time');
130 |         const result = await callMCP('optimized_search', {
131 |           query: test.query,
132 |           ...test.params
133 |         });
134 |         console.timeEnd('Query Time');
135 |         
136 |         console.log(`Source: ${result.source}`);
137 |         console.log(`Results Count: ${result.results.length}`);
138 |         
139 |         if (result.results.length > 0) {
140 |           console.log('First result:');
141 |           console.log(`  - Title: ${result.results[0].title}`);
142 |           console.log(`  - URL: ${result.results[0].url}`);
143 |           console.log(`  - Description: ${result.results[0].description.substring(0, 100)}...`);
144 |         }
145 |       } catch (err) {
146 |         console.error(`Test failed: ${err.message}`);
147 |       }
148 |     }
149 |     
150 |     // Get final stats
151 |     console.log('\nGetting final stats...');
152 |     const finalStats = await callMCP('get_search_stats', {});
153 |     console.log('Final stats:', JSON.stringify(finalStats, null, 2));
154 |     
155 |     // Show cache performance
156 |     console.log('\nCache Performance:');
157 |     console.log(`Hits: ${finalStats.cache.hits}`);
158 |     console.log(`Misses: ${finalStats.cache.misses}`);
159 |     console.log(`Hit Rate: ${finalStats.cache.hits + finalStats.cache.misses === 0 ? 
160 |       'N/A' : 
161 |       `${Math.round((finalStats.cache.hits / (finalStats.cache.hits + finalStats.cache.misses)) * 100)}%`}`);
162 |     
163 |   } catch (err) {
164 |     console.error('Test runner error:', err.message);
165 |   }
166 |   
167 |   console.log('\nTests completed.');
168 | }
169 | 
170 | // Run the tests
171 | runTests(); 
```

.cursor/mcp-servers/web-search-optimizer/web-search-optimizer.js
```
1 | #!/usr/bin/env node
2 | 
3 | /**
4 |  * Web Search Optimizer MCP Server
5 |  * 
6 |  * This server provides optimized web search capabilities with:
7 |  * - Caching of results to minimize API usage
8 |  * - Integration with Knowledge Graph for persistent storage
9 |  * - Intelligent query reformulation for better results
10 |  * - Rate limiting to prevent excessive API calls
11 |  */
12 | 
13 | const { MCPServer } = require('@modelcontextprotocol/server');
14 | const axios = require('axios');
15 | const fs = require('fs');
16 | const path = require('path');
17 | const crypto = require('crypto');
18 | 
19 | // Configuration
20 | const config = {
21 |   cacheDir: path.join(__dirname, 'cache'),
22 |   cacheLifetime: {
23 |     default: 7 * 24 * 60 * 60 * 1000, // 7 days
24 |     documentation: 30 * 24 * 60 * 60 * 1000, // 30 days
25 |     news: 1 * 24 * 60 * 60 * 1000, // 1 day
26 |   },
27 |   rateLimits: {
28 |     perMinute: 10,
29 |     perHour: 50,
30 |     perDay: 200,
31 |   },
32 |   searchEngines: {
33 |     brave: {
34 |       enabled: true,
35 |       apiKey: process.env.BRAVE_API_KEY,
36 |       endpoint: 'https://api.search.brave.com/res/v1/web/search',
37 |     },
38 |     ddg: {
39 |       enabled: true,
40 |       endpoint: 'https://api.duckduckgo.com/',
41 |     }
42 |   },
43 |   defaultEngine: 'brave',
44 |   knowledgeGraphEnabled: true,
45 | };
46 | 
47 | // Ensure cache directory exists
48 | if (!fs.existsSync(config.cacheDir)) {
49 |   fs.mkdirSync(config.cacheDir, { recursive: true });
50 | }
51 | 
52 | // Usage tracking
53 | const usage = {
54 |   requests: {
55 |     lastMinute: 0,
56 |     lastHour: 0,
57 |     lastDay: 0,
58 |   },
59 |   lastReset: {
60 |     minute: Date.now(),
61 |     hour: Date.now(),
62 |     day: Date.now(),
63 |   },
64 |   cache: {
65 |     hits: 0,
66 |     misses: 0,
67 |   }
68 | };
69 | 
70 | // Reset usage counters
71 | function resetUsageCounters() {
72 |   const now = Date.now();
73 |   
74 |   // Reset minute counter if needed
75 |   if (now - usage.lastReset.minute > 60 * 1000) {
76 |     usage.requests.lastMinute = 0;
77 |     usage.lastReset.minute = now;
78 |   }
79 |   
80 |   // Reset hour counter if needed
81 |   if (now - usage.lastReset.hour > 60 * 60 * 1000) {
82 |     usage.requests.lastHour = 0;
83 |     usage.lastReset.hour = now;
84 |   }
85 |   
86 |   // Reset day counter if needed
87 |   if (now - usage.lastReset.day > 24 * 60 * 60 * 1000) {
88 |     usage.requests.lastDay = 0;
89 |     usage.lastReset.day = now;
90 |   }
91 | }
92 | 
93 | // Check if we can make a request based on rate limits
94 | function canMakeRequest() {
95 |   resetUsageCounters();
96 |   
97 |   return (
98 |     usage.requests.lastMinute < config.rateLimits.perMinute &&
99 |     usage.requests.lastHour < config.rateLimits.perHour &&
100 |     usage.requests.lastDay < config.rateLimits.perDay
101 |   );
102 | }
103 | 
104 | // Track a new request
105 | function trackRequest() {
106 |   resetUsageCounters();
107 |   
108 |   usage.requests.lastMinute++;
109 |   usage.requests.lastHour++;
110 |   usage.requests.lastDay++;
111 | }
112 | 
113 | // Generate a cache key from the search query and parameters
114 | function generateCacheKey(query, params) {
115 |   const dataToHash = JSON.stringify({
116 |     query,
117 |     params,
118 |   });
119 |   
120 |   return crypto.createHash('md5').update(dataToHash).digest('hex');
121 | }
122 | 
123 | // Get cache file path for a key
124 | function getCacheFilePath(cacheKey) {
125 |   return path.join(config.cacheDir, `${cacheKey}.json`);
126 | }
127 | 
128 | // Check if a cached result exists and is valid
129 | function getCachedResult(cacheKey) {
130 |   const cachePath = getCacheFilePath(cacheKey);
131 |   
132 |   if (!fs.existsSync(cachePath)) {
133 |     return null;
134 |   }
135 |   
136 |   try {
137 |     const cacheData = JSON.parse(fs.readFileSync(cachePath, 'utf8'));
138 |     const now = Date.now();
139 |     const cacheAge = now - cacheData.timestamp;
140 |     const cacheType = cacheData.type || 'default';
141 |     const maxAge = config.cacheLifetime[cacheType] || config.cacheLifetime.default;
142 |     
143 |     // Check if cache is still valid
144 |     if (cacheAge < maxAge) {
145 |       usage.cache.hits++;
146 |       console.log(`Cache hit for key: ${cacheKey}`);
147 |       return cacheData.results;
148 |     }
149 |   } catch (err) {
150 |     console.error(`Error reading cache: ${err.message}`);
151 |   }
152 |   
153 |   usage.cache.misses++;
154 |   console.log(`Cache miss for key: ${cacheKey}`);
155 |   return null;
156 | }
157 | 
158 | // Save results to cache
159 | function saveToCache(cacheKey, results, type = 'default') {
160 |   const cachePath = getCacheFilePath(cacheKey);
161 |   const cacheData = {
162 |     timestamp: Date.now(),
163 |     type,
164 |     results,
165 |   };
166 |   
167 |   try {
168 |     fs.writeFileSync(cachePath, JSON.stringify(cacheData, null, 2));
169 |     console.log(`Saved to cache: ${cacheKey}`);
170 |   } catch (err) {
171 |     console.error(`Error writing to cache: ${err.message}`);
172 |   }
173 | }
174 | 
175 | // Determine query type for cache lifetime
176 | function determineQueryType(query) {
177 |   const lowercaseQuery = query.toLowerCase();
178 |   
179 |   if (lowercaseQuery.includes('docs') || 
180 |       lowercaseQuery.includes('documentation') || 
181 |       lowercaseQuery.includes('tutorial') ||
182 |       lowercaseQuery.includes('guide') ||
183 |       lowercaseQuery.includes('reference')) {
184 |     return 'documentation';
185 |   }
186 |   
187 |   if (lowercaseQuery.includes('news') || 
188 |       lowercaseQuery.includes('latest') || 
189 |       lowercaseQuery.includes('update') ||
190 |       lowercaseQuery.includes('release') ||
191 |       /\b20(2[3-5])\b/.test(lowercaseQuery)) { // Contains 2023-2025
192 |     return 'news';
193 |   }
194 |   
195 |   return 'default';
196 | }
197 | 
198 | // Optimize the search query
199 | function optimizeQuery(query) {
200 |   // Add current year for freshness if looking for latest info
201 |   if (query.includes('latest') || query.includes('recent') || query.includes('new')) {
202 |     const currentYear = new Date().getFullYear();
203 |     if (!query.includes(currentYear.toString())) {
204 |       query = `${query} ${currentYear}`;
205 |     }
206 |   }
207 |   
208 |   // Add "devdocs.io" for documentation searches
209 |   if ((query.includes('docs') || query.includes('documentation')) && 
210 |       !query.includes('devdocs.io')) {
211 |     query = `${query} devdocs.io`;
212 |   }
213 |   
214 |   return query;
215 | }
216 | 
217 | // Perform search with Brave Search API
218 | async function searchWithBrave(query, count = 5) {
219 |   if (!config.searchEngines.brave.enabled || !config.searchEngines.brave.apiKey) {
220 |     throw new Error('Brave Search API is not configured');
221 |   }
222 |   
223 |   try {
224 |     const response = await axios.get(config.searchEngines.brave.endpoint, {
225 |       headers: {
226 |         'Accept': 'application/json',
227 |         'X-Subscription-Token': config.searchEngines.brave.apiKey
228 |       },
229 |       params: {
230 |         q: query,
231 |         count: count,
232 |         search_lang: 'en'
233 |       }
234 |     });
235 |     
236 |     return response.data.web?.results || [];
237 |   } catch (error) {
238 |     console.error(`Brave Search API error: ${error.message}`);
239 |     throw new Error(`Search engine error: ${error.message}`);
240 |   }
241 | }
242 | 
243 | // Create the MCP server
244 | const server = new MCPServer({
245 |   name: 'Web Search Optimizer',
246 |   description: 'Optimized web search with caching and rate limiting',
247 |   version: '1.0.0',
248 | });
249 | 
250 | // Register the primary optimized search tool
251 | server.addTool({
252 |   name: 'optimized_search',
253 |   description: 'Performs a web search with caching and optimizations to conserve API usage',
254 |   parameters: {
255 |     type: 'object',
256 |     properties: {
257 |       query: {
258 |         type: 'string',
259 |         description: 'The search query',
260 |       },
261 |       count: {
262 |         type: 'number',
263 |         description: 'Number of results to return',
264 |         default: 5,
265 |       },
266 |       forceRefresh: {
267 |         type: 'boolean',
268 |         description: 'Ignore cache and force a new search',
269 |         default: false,
270 |       },
271 |       queryType: {
272 |         type: 'string',
273 |         description: 'Type of query for cache management (default, documentation, news)',
274 |       },
275 |     },
276 |     required: ['query'],
277 |   },
278 |   handler: async ({ query, count = 5, forceRefresh = false, queryType }) => {
279 |     // Optimize the query
280 |     const optimizedQuery = optimizeQuery(query);
281 |     
282 |     // Determine query type if not provided
283 |     const determinedType = queryType || determineQueryType(query);
284 |     
285 |     // Generate cache key
286 |     const cacheKey = generateCacheKey(optimizedQuery, { count });
287 |     
288 |     // Check cache if not forcing refresh
289 |     if (!forceRefresh) {
290 |       const cachedResults = getCachedResult(cacheKey);
291 |       if (cachedResults) {
292 |         return {
293 |           results: cachedResults,
294 |           source: 'cache',
295 |           query: optimizedQuery,
296 |           timestamp: Date.now(),
297 |         };
298 |       }
299 |     }
300 |     
301 |     // Check if we can make a request
302 |     if (!canMakeRequest()) {
303 |       throw new Error('Rate limit exceeded. Try again later.');
304 |     }
305 |     
306 |     // Track the request
307 |     trackRequest();
308 |     
309 |     // Perform the search
310 |     let results;
311 |     if (config.defaultEngine === 'brave') {
312 |       results = await searchWithBrave(optimizedQuery, count);
313 |     } else {
314 |       throw new Error(`Unsupported search engine: ${config.defaultEngine}`);
315 |     }
316 |     
317 |     // Save to cache
318 |     saveToCache(cacheKey, results, determinedType);
319 |     
320 |     return {
321 |       results,
322 |       source: config.defaultEngine,
323 |       query: optimizedQuery,
324 |       timestamp: Date.now(),
325 |     };
326 |   },
327 | });
328 | 
329 | // Register a tool to get cache stats
330 | server.addTool({
331 |   name: 'get_search_stats',
332 |   description: 'Get statistics about search usage and cache performance',
333 |   parameters: {
334 |     type: 'object',
335 |     properties: {},
336 |   },
337 |   handler: async () => {
338 |     resetUsageCounters();
339 |     
340 |     return {
341 |       usage,
342 |       config: {
343 |         engines: Object.keys(config.searchEngines).map(name => ({
344 |           name,
345 |           enabled: config.searchEngines[name].enabled,
346 |         })),
347 |         defaultEngine: config.defaultEngine,
348 |         cacheEnabled: true,
349 |         cacheLifetimes: config.cacheLifetime,
350 |       },
351 |     };
352 |   },
353 | });
354 | 
355 | // Register a tool to clear the cache
356 | server.addTool({
357 |   name: 'clear_search_cache',
358 |   description: 'Clear the search cache',
359 |   parameters: {
360 |     type: 'object',
361 |     properties: {
362 |       all: {
363 |         type: 'boolean',
364 |         description: 'Clear all cache entries',
365 |         default: false,
366 |       },
367 |       olderThan: {
368 |         type: 'number',
369 |         description: 'Clear entries older than this many days',
370 |       },
371 |       query: {
372 |         type: 'string',
373 |         description: 'Clear entries matching this query',
374 |       },
375 |     },
376 |   },
377 |   handler: async ({ all = false, olderThan, query }) => {
378 |     if (!fs.existsSync(config.cacheDir)) {
379 |       return { cleared: 0 };
380 |     }
381 |     
382 |     let cleared = 0;
383 |     const files = fs.readdirSync(config.cacheDir);
384 |     
385 |     for (const file of files) {
386 |       if (!file.endsWith('.json')) {
387 |         continue;
388 |       }
389 |       
390 |       const filePath = path.join(config.cacheDir, file);
391 |       
392 |       try {
393 |         // Read cache entry for filtering
394 |         const cacheData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
395 |         
396 |         // Clear if all flag is set
397 |         if (all) {
398 |           fs.unlinkSync(filePath);
399 |           cleared++;
400 |           continue;
401 |         }
402 |         
403 |         // Clear based on age
404 |         if (olderThan) {
405 |           const ageInDays = (Date.now() - cacheData.timestamp) / (24 * 60 * 60 * 1000);
406 |           if (ageInDays > olderThan) {
407 |             fs.unlinkSync(filePath);
408 |             cleared++;
409 |             continue;
410 |           }
411 |         }
412 |         
413 |         // Clear based on query
414 |         if (query && cacheData.query && cacheData.query.includes(query)) {
415 |           fs.unlinkSync(filePath);
416 |           cleared++;
417 |           continue;
418 |         }
419 |       } catch (err) {
420 |         console.error(`Error processing cache file ${file}: ${err.message}`);
421 |       }
422 |     }
423 |     
424 |     return { cleared };
425 |   },
426 | });
427 | 
428 | // Start the server
429 | server.start();
430 | console.log('Web Search Optimizer MCP server started'); 
```

.cursor/mcp-servers/clear-thought/config.json
```
1 | {
2 |   "server": {
3 |     "name": "WaldzellAI Clear-Thought",
4 |     "version": "1.0.0",
5 |     "description": "Advanced problem-solving capabilities through systematic thinking"
6 |   },
7 |   "mental_models": {
8 |     "enabled": true,
9 |     "default_models": [
10 |       "first_principles",
11 |       "second_order",
12 |       "inversion",
13 |       "systems_thinking",
14 |       "decision_matrix",
15 |       "feedback_loops",
16 |       "probabilistic",
17 |       "opportunity_costs"
18 |     ],
19 |     "custom_models_path": "./mental_models"
20 |   },
21 |   "sequential_thinking": {
22 |     "max_thoughts": 10,
23 |     "allow_revisions": true,
24 |     "allow_branching": true,
25 |     "track_uncertainty": true,
26 |     "verification_required": true
27 |   },
28 |   "integration": {
29 |     "knowledge_graph": {
30 |       "enabled": true,
31 |       "sync_interval": 300
32 |     },
33 |     "token_manager": {
34 |       "enabled": true,
35 |       "optimize_prompts": true
36 |     },
37 |     "agent_forge": {
38 |       "enabled": true,
39 |       "workflow_integration": true
40 |     }
41 |   },
42 |   "templates": {
43 |     "path": "./templates",
44 |     "auto_select": true,
45 |     "default_template": "problem_decomposition"
46 |   },
47 |   "logging": {
48 |     "level": "info",
49 |     "file": "clear-thought.log",
50 |     "include_timestamps": true
51 |   },
52 |   "debug": {
53 |     "enabled": false,
54 |     "verbose": false,
55 |     "save_thought_process": true
56 |   }
57 | }
```

.cursor/mcp-servers/clear-thought/templates/problem_decomposition.md
```
1 | # Problem Decomposition Template
2 | 
3 | ## Problem Statement
4 | 
5 | {{problem_statement}}
6 | 
7 | ## First Principles Analysis
8 | 
9 | 1. Core Components:
10 | 
11 |    - What are the fundamental elements?
12 |    - What are the essential requirements?
13 |    - What constraints exist?
14 | 
15 | 2. Assumptions Identification:
16 | 
17 |    - What assumptions are we making?
18 |    - Which can be challenged?
19 |    - What evidence supports each?
20 | 
21 | 3. Dependencies Map:
22 |    - What are the key relationships?
23 |    - What are the critical paths?
24 |    - What are the potential bottlenecks?
25 | 
26 | ## Systems Thinking Analysis
27 | 
28 | 1. Boundaries:
29 | 
30 |    - What's in scope?
31 |    - What's out of scope?
32 |    - What are the interfaces?
33 | 
34 | 2. Feedback Loops:
35 | 
36 |    - What reinforcing loops exist?
37 |    - What balancing loops exist?
38 |    - How do they interact?
39 | 
40 | 3. Time Dynamics:
41 |    - What are the short-term effects?
42 |    - What are the long-term implications?
43 |    - What delays might occur?
44 | 
45 | ## Solution Space Exploration
46 | 
47 | 1. Direct Approaches:
48 | 
49 |    - What are the obvious solutions?
50 |    - What are their trade-offs?
51 |    - What are their requirements?
52 | 
53 | 2. Inverse Thinking:
54 | 
55 |    - What would make the problem worse?
56 |    - What should we avoid?
57 |    - What are the anti-patterns?
58 | 
59 | 3. Lateral Approaches:
60 |    - What analogous problems exist?
61 |    - What solutions from other domains apply?
62 |    - What creative combinations are possible?
63 | 
64 | ## Risk Assessment
65 | 
66 | 1. Technical Risks:
67 | 
68 |    - What could fail?
69 |    - What are the dependencies?
70 |    - What are the unknowns?
71 | 
72 | 2. Implementation Risks:
73 | 
74 |    - What resources are needed?
75 |    - What skills are required?
76 |    - What timeline constraints exist?
77 | 
78 | 3. Integration Risks:
79 |    - How does this affect other systems?
80 |    - What are the compatibility issues?
81 |    - What are the migration challenges?
82 | 
83 | ## Decision Framework
84 | 
85 | 1. Evaluation Criteria:
86 | 
87 |    - What metrics matter?
88 |    - What constraints must be met?
89 |    - What trade-offs are acceptable?
90 | 
91 | 2. Options Analysis:
92 | 
93 |    - What are the viable approaches?
94 |    - How do they compare?
95 |    - What are their relative strengths?
96 | 
97 | 3. Implementation Strategy:
98 |    - What are the key steps?
99 |    - What is the optimal sequence?
100 |    - What are the dependencies?
101 | 
102 | ## Validation Approach
103 | 
104 | 1. Success Criteria:
105 | 
106 |    - How do we measure success?
107 |    - What are the key indicators?
108 |    - What are the acceptance criteria?
109 | 
110 | 2. Testing Strategy:
111 | 
112 |    - How do we validate the solution?
113 |    - What test cases are needed?
114 |    - What edge cases exist?
115 | 
116 | 3. Feedback Mechanisms:
117 |    - How do we gather feedback?
118 |    - How do we measure impact?
119 |    - How do we iterate?
120 | 
121 | ## Next Steps
122 | 
123 | 1. Immediate Actions:
124 | 
125 |    - What can we start now?
126 |    - What blockers exist?
127 |    - What dependencies need resolution?
128 | 
129 | 2. Resource Needs:
130 | 
131 |    - What team members are needed?
132 |    - What tools are required?
133 |    - What information is missing?
134 | 
135 | 3. Timeline:
136 |    - What are the key milestones?
137 |    - What are the critical paths?
138 |    - What are the dependencies?
139 | 
140 | ## Notes
141 | 
142 | {{notes}}
143 | 
144 | ## References
145 | 
146 | {{references}}
```

</current_codebase>
