import ListItem from "src/common/ListItem";
import EventLoop from "../../assets/async/eventLoop.png";
import CodeBlock from "src/common/CodeBlock";
import RepoLink from "src/common/RepoLink";

const BackendBasics = () => {
    return (
        <div className="container">
            <h1>What is Backend?</h1>

            <ul>
                <ListItem>Backend is used to handle server-side logic, manage databases, and provide APIs for frontend applications.</ListItem>
                <ListItem>It is responsible for processing requests, performing operations, and sending responses to the client.</ListItem>
                <ListItem>Backend development involves working with server-side programming languages, frameworks, and databases to create robust and scalable applications.</ListItem>
                <ListItem>Some popular backend technologies include <span className="stress">Node.js</span>, <span className="stress">Django</span>, <span className="stress">Ruby on Rails</span>, and <span className="stress">Spring Boot</span>.</ListItem>
            </ul>

            <div>
                <h2>Frontend vs Backend</h2>
                <table className="comparison-table">
                    <thead>
                        <tr>
                            <th>Frontend</th>
                            <th>Backend</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Focuses on the user interface and user experience.</td>
                            <td>Focuses on server-side logic, databases, and APIs.</td>
                        </tr>
                        <tr>
                            <td>Built using HTML, CSS, and JavaScript.</td>
                            <td>Built using server-side programming languages like Node.js, Python, Ruby, etc.</td>
                        </tr>
                        <tr>
                            <td>Runs in the user's browser.</td>
                            <td>Runs on the server.</td>
                        </tr>
                        <tr>
                            <td>Handles user interactions and displays data.</td>
                            <td>Processes requests, manages data, and sends responses to the frontend.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div>
                <h2>What is Backend responsible for?</h2>
                <ul>
                    <ListItem>Business logic and data processing</ListItem>
                    <ListItem>Database management and interactions</ListItem>
                    <ListItem>Authentication and authorization</ListItem>
                    <ListItem>Security</ListItem>
                    <ListItem>Performance optimization and scalability</ListItem>
                </ul>
            </div>

            <div>
                <h2>How does the frontend communicate with the backend?</h2>

                <ul>
                    <ListItem>Client or Frontend (Browser or App) --&gt; Server --&gt; Database</ListItem>
                    <ListItem>The frontend communicates with the backend through APIs (Application Programming Interfaces)</ListItem>
                    <ListItem>The frontend sends HTTP requests to the backend, which processes the requests (maybe interacts with the database) and sends back responses through API.</ListItem>
                    <ListItem>This communication allows the frontend to fetch data, submit forms, and perform various operations that require server-side processing.</ListItem>
                    <ListItem>APIs can be RESTful, GraphQL, or use other communication protocols.</ListItem>
                </ul>

                <p className="stress">Flow: </p>
                <code className="code-block">Browser --&gt; API --&gt; Database --&gt; API --&gt; Browser</code>
                <p><span className="stress">Note: </span>Backend never talks directly to the UI - it talks via HTTP requests</p>
            </div>

            <div>
                <h2>What is Node.js?</h2>
                <ul>
                    <ListItem>Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.</ListItem>
                    <ListItem>It allows developers to execute JavaScript code outside of a browser environment.</ListItem>
                    <ListItem>It allows developers to run JavaScript on the server-side, enabling full-stack development with a single programming language.</ListItem>
                    <ListItem>Node.js is designed for building scalable and high-performance applications, particularly for real-time applications and APIs.</ListItem>
                    <ListItem>It uses an event-driven, non-blocking I/O model, making it efficient for handling concurrent requests.</ListItem>
                    <ListItem>Node.js has a rich ecosystem of libraries and frameworks, such as Express.js, that simplify backend development.</ListItem>
                </ul>

                <h3>Key Features</h3>
                <ul>
                    <ListItem><span className="stress">Event-driven: </span>Responds to event as they occur.</ListItem>
                    <ListItem><span className="stress">Non-blocking I/O: </span>Handles multiple operations simultaneously (concurrently) efficiently without blocking execution.</ListItem>
                    <ListItem><span className="stress">Single-threaded: </span>Uses a single thread to handle multiple requests, relying on asynchronous programming to manage concurrency.</ListItem>
                    <ListItem><span className="stress">Highly scalable: </span>Can handle a large number of concurrent connections efficiently.</ListItem>
                </ul>

                <div>
                    <img src={EventLoop} alt="Event Loop" className="event-loop-image" />
                    <p className="stress">Event Loop</p>
                </div>

                <h3 className="mt-40">Where is Node.js Used?</h3>
                <ul>
                    <ListItem><span className="stress">Backend APIs: </span>Building robust and scalable APIs for web and mobile applications</ListItem>
                    <ListItem><span className="stress">Real-time applications: </span>Especially real-time applications like chat apps, live updates</ListItem>
                    <ListItem>Command-line tools and utilities</ListItem>
                    <ListItem>APIs and microservices</ListItem>
                    <ListItem><span className="stress">Serverless: </span>Building serverless applications and functions.
                        <ul>
                            <ListItem>Serverless architecture allows developers to build and run applications without managing servers.</ListItem>
                            <ListItem>In a serverless architecture, the cloud provider automatically manages the infrastructure, scaling, and maintenance of the application.</ListItem>
                            <ListItem>Developers can focus on writing code and deploying functions without worrying about server management.</ListItem>
                        </ul>
                    </ListItem>
                    <ListItem>Server-side rendering (SSR) for React and other frontend frameworks</ListItem>
                </ul>
            </div>

            <div>
                <h2>Installing Node.js</h2>
                <p>You can download and install Node.js from the official website: <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">https://nodejs.org/</a></p>
            </div>

            <div>
                <h2>Writing a simple Hello World application with Node.js</h2>

                <ul>
                    <ListItem>Create a new directory for your project: 
                        <CodeBlock code="mkdir my-first-node-app" />
                    </ListItem>
                    <ListItem>Initialize a new Node.js project using 
                        <CodeBlock code="npm init -y" />
                    </ListItem>
                    <ListItem>Install dependencies for your application:
                        <CodeBlock code={`npm install --save-dev typescript @types/node ts-node`} />
                    </ListItem>
                    <ListItem>Generate config file for TypeScript:
                        <CodeBlock code={`npx tsc --init`} />
                    </ListItem>
                    <ListItem>
                        Add the following configurations:
                        <CodeBlock code={`{
  // Visit https://aka.ms/tsconfig to read more about this file
  "compilerOptions": {
    // File Layout
    "rootDir": "./src",
    "outDir": "./dist",

    // Environment Settings
    // See also https://aka.ms/tsconfig/module
    "module": "commonjs",
    "target": "es2022",
    "types": ["node"],
    // For nodejs:
    // "lib": ["esnext"],
    // "types": ["node"],
    // and npm install -D @types/node

    // Other Outputs
    "sourceMap": true,
    "declaration": true,
    "declarationMap": true,

    // Stricter Typechecking Options
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,

    // Style Options
    // "noImplicitReturns": true,
    // "noImplicitOverride": true,
    // "noUnusedLocals": true,
    // "noUnusedParameters": true,
    // "noFallthroughCasesInSwitch": true,
    // "noPropertyAccessFromIndexSignature": true,

    // Recommended Options
    "strict": true,
    "jsx": "react-jsx",
    "verbatimModuleSyntax": false,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "isolatedModules": true,
    "noUncheckedSideEffectImports": true,
    "moduleDetection": "force",
    "skipLibCheck": true,
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules", "dist"]
}`} />
                    </ListItem>
                    <ListItem>Create a src folder and index.ts file and add the following code:
                        <CodeBlock code={`console.log("Hello, World!")`} />
                    </ListItem>
                    <ListItem>Run the application using 
                        <CodeBlock code={`npx ts-node src/index.ts`} />
                        <ul>
                            <ListItem>This command runs the TypeScript file directly without needing to compile it to JavaScript first.</ListItem>
                        </ul>
                    </ListItem>

                    <ListItem>
                        You should see "Hello, World!" printed in the console, indicating that your Node.js application is running successfully.
                    </ListItem>

                    <ListItem>Another thing we can do is, create a build first & then run the compiled JavaScript file:
                        <CodeBlock code={`npm run build`} />
                        <CodeBlock code={`node dist/index.js`} />
                    </ListItem>
                </ul>
            </div>

            {/* Modules in Node.js */}
            <div>
                <h2>Modules in Node.js</h2>

                <p>Modules are reusable pieces of code that can be imported and exported between different files in a Node.js application.</p>

                <ul>
                    <ListItem>Modules help in organizing code, promoting code reusability, and maintaining a clean and modular codebase.</ListItem>
                    <ListItem><span className="stress">fs (File System) module: </span>Provides an API for interacting with the file system, allowing you to read, write, and manipulate files.</ListItem>
                    <ListItem><span className="stress">path module: </span>Provides utilities for working with file and directory paths, making it easier to handle file paths across different operating systems.</ListItem>
                    <ListItem><span className="stress">http module: </span>Allows you to create HTTP servers and handle HTTP requests and responses, enabling you to build web applications and APIs.</ListItem>
                </ul>

                <ul>
                    <ListItem>We have third party libraries that we can install and use in our applications:</ListItem>
                    <ListItem><span className="stress">express: </span>A minimal and flexible Node.js web application framework.</ListItem>
                    <ListItem><span className="stress">mongoose: </span>An ODM (Object Data Modeling) library for MongoDB and Node.js.</ListItem>
                    <ListItem><span className="stress">chalk: </span>A library for styling console output with colors and styles.</ListItem>

                    <ListItem>We can use NPM (Node Package Manager) to install and manage third-party libraries in our Node.js applications.</ListItem>
                </ul>

                <RepoLink link="https://github.com/gyanasluitel/node-modules-ops" name="Working with node modules" codeText="You can see working with different modules in: " />
            </div>

            {/* Creating First Server App */}
            <div>
                <h2>Creating our First Express Server</h2>
                <ul>
                    <ListItem>Create a new directory for your project:
                        <CodeBlock code="mkdir my-first-server" />
                    </ListItem>
                    <ListItem>Navigate to the project directory:
                        <CodeBlock code="cd my-first-server" />
                    </ListItem>
                    <ListItem>Initialize a new Node.js project:
                        <CodeBlock code="npm init -y" />
                    </ListItem>
                    <ListItem>Install express for your application:
                        <CodeBlock code="npm install express" />
                        <ul>
                            <ListItem>Express is a web framework for Node.js that simplifies building web applications and APIs.</ListItem>
                        </ul>
                    </ListItem>
                    <ListItem>Install typescript for your application as a development dependency:
                        <CodeBlock code="npm install --save-dev typescript @types/express @types/node ts-node-dev" />
                        <ul>
                            <ListItem><span className="stress">typescript: </span>The TypeScript compiler</ListItem>
                            <ListItem><span className="stress">@types/express: </span>Type definitions for Express</ListItem>
                            <ListItem><span className="stress">@types/node: </span>Type definitions for Node.js</ListItem>
                            <ListItem><span className="stress">ts-node-dev: </span>A development tool for running TypeScript files in development mode</ListItem>
                        </ul>
                    </ListItem>
                    <ListItem>Configure TypeScript by creating a tsconfig.json file:
                        <CodeBlock code={`npx tsc --init`} />
                        <p>This will generate a tsconfig.json file in your project directory with default TypeScript configuration options.</p>
                    </ListItem>
                    <ListItem>Modify the generated tsconfig.json file to suit your project needs.
                        <CodeBlock code={`{
  // Visit https://aka.ms/tsconfig to read more about this file
  "compilerOptions": {
    // File Layout
    "rootDir": "./src",
    "outDir": "./dist",

    // Environment Settings
    // See also https://aka.ms/tsconfig/module
    "module": "commonjs",
    "target": "es2022",
    "types": ["node"],
    // For nodejs:
    // "lib": ["esnext"],
    // "types": ["node"],
    // and npm install -D @types/node

    // Other Outputs
    "sourceMap": true,
    "declaration": true,
    "declarationMap": true,

    // Stricter Typechecking Options
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,

    // Style Options
    // "noImplicitReturns": true,
    // "noImplicitOverride": true,
    // "noUnusedLocals": true,
    // "noUnusedParameters": true,
    // "noFallthroughCasesInSwitch": true,
    // "noPropertyAccessFromIndexSignature": true,

    // Recommended Options
    "strict": true,
    "jsx": "react-jsx",
    "verbatimModuleSyntax": false,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "isolatedModules": true,
    "noUncheckedSideEffectImports": true,
    "moduleDetection": "force",
    "skipLibCheck": true,
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules", "dist"]
}`} />
                    <ul>
                        <ListItem><span className="stress">outDir: </span>Specifies the output directory for compiled JavaScript files.</ListItem>
                        <ListItem><span className="stress">rootDir: </span>Specifies the root directory of your TypeScript source files.</ListItem>
                        <ListItem><span className="stress">strict: </span>Enables strict type-checking options for better code quality and error detection.</ListItem>
                        <ListItem><span className="stress">include: </span>Specifies which files to include in the compilation process.</ListItem>
                        <ListItem><span className="stress">exclude: </span>Specifies which files to exclude from the compilation process.</ListItem>
                    </ul>
                    </ListItem>

                    <ListItem>
                        Update package.json:
                        <CodeBlock code={`{
  "name": "first-app",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "tsc --build",
    "clean": "tsc --build --clean",
    "start": "npm run build && node dist/index.js",
    "dev": "ts-node-dev --respawn src/index.ts"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^5.2.1"
  },
  "devDependencies": {
    "@types/express": "^5.0.6",
    "@types/node": "^25.3.0",
    "ts-node-dev": "^2.0.0",
    "typescript": "^5.9.3"
  }
}`} />
                    <ul>
                        <ListItem><span className="stress">build: </span>Compiles TypeScript files to JavaScript using the TypeScript compiler.</ListItem>
                        <ListItem><span className="stress">clean: </span>Removes the compiled JavaScript files from the output directory.</ListItem>
                        <ListItem><span className="stress">start: </span>Builds the project and then runs the compiled JavaScript file using Node.js.</ListItem>
                        <ListItem><span className="stress">dev: </span>Runs the TypeScript files directly in development mode using ts-node-dev, which automatically restarts the server on file changes.</ListItem>
                    </ul>
                    </ListItem>
                </ul>

                <ListItem>Create a src folder and index.ts file inside it:
                    <CodeBlock code={`import express from "express";

const app = express();

// NEVER USE MAGIC NUMBERS IN YOUR CODE
const PORT = 4000;

app.listen(PORT, () => {
    console.log("Server is running on port: ", PORT);
})

export default app;`} />

                    <ul>
                        <ListItem>This code sets up a basic Express server that listens on port 4000 and logs a message when the server is running.</ListItem>
                    </ul>
                </ListItem>
            </div>

            {/* REST API */}
            <div>
                <h2>REST API</h2>

                <ul>
                    <ListItem>REST (Representational State Transfer) is an architectural style for designing networked applications.</ListItem>
                    <ListItem>It allows clients (frontend/mobile apps) to communicate with servers using HTTP.</ListItem>
                </ul>

                <div>
                    <h3>REST Principles</h3>
                    
                    <div>
                        <h4>Client-Server Architecture</h4>

                        <ul>
                            <ListItem>Client sends request</ListItem>
                            <ListItem>Server responds response</ListItem>
                            <ListItem>Separation of concerns</ListItem>
                            <ListItem>Example:
                                <ul>
                                    <ListItem>React app --&gt; Client</ListItem>
                                    <ListItem>Node/Express --&gt; Server</ListItem>
                                </ul>
                            </ListItem>
                        </ul>
                    </div>

                    <div>
                        <h4>Statelessness</h4>
                        <ul>
                            <ListItem>Each request must contain all information needed to process it.</ListItem>
                            <ListItem>The server does <span className="stress">NOT</span> remember previous requests.</ListItem>
                            <ListItem><span className="stress">Example:</span>If authentication is required --&gt; token must be sent in every request.</ListItem>
                        </ul>
                    </div>

                    <div>
                        <h4>Resource-Based URLs</h4>

                        <ul>
                            <ListItem>Everything is a <span className="stress">resource.</span></ListItem>
                            <ListItem>Bad example:
                                <CodeBlock code={`/getAllUsers`} />
                            </ListItem>
                            <ListItem>Good example:
                                <CodeBlock code={`/users`} />
                            </ListItem>
                        </ul>
                    </div>

                    <div>
                        <h4>HTTP Methods Define Actions</h4>
                        <table className="comparison-table">
                            <thead>
                                <tr>
                                    <th>Method</th>
                                    <th>Purpose</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>GET</td>
                                    <td>Read data</td>
                                </tr>

                                <tr>
                                    <td>POST</td>
                                    <td>Create data</td>
                                </tr>

                                <tr>
                                    <td>PUT</td>
                                    <td>Update data</td>
                                </tr>

                                <tr>
                                    <td>PATCH</td>
                                    <td>Update data</td>
                                </tr>

                                <tr>
                                    <td>DELETE</td>
                                    <td>Remove data</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* HTTP Methods */}
            <div>
                <h2>HTTP Methods</h2>

                {/* GET Method */}
                <div>
                    <h3>GET</h3>

                    <ul>
                        <ListItem>Used to retrieve data.</ListItem>

                        <ListItem>Example:
                            <CodeBlock code={`app.get('/users', (req, res) => {
  res.json(users)
})`} />
                        </ListItem>
                        <ListItem>No body</ListItem>
                        <ListItem>Data usually sent via query or params</ListItem>
                    </ul>
                </div>

                {/* POST Method */}
                <div>
                    <h3>POST</h3>
                    <ul>
                        <ListItem>Used to create new resource.</ListItem>
                        <ListItem>Example:
                            <CodeBlock code={`app.post('/users', (req, res) => {
  const newUser = req.body
  users.push(newUser)
  res.json(newUser)
})`} />
                        </ListItem>
                        <ListItem>Data sent in the request body</ListItem>
                    </ul>
                </div>

                {/* PUT Method */}
                <div>
                    <h3>PUT</h3>
                    <ul>
                        <ListItem>Used to update the entire resource</ListItem>
                        <ListItem>Example:
                            <CodeBlock code={`app.put('/users/:id', (req, res) => {
  // update logic
})`} />
                        </ListItem>
                        <ListItem>Usually includes ID in request params</ListItem>
                        <ListItem>Daa in body</ListItem>
                    </ul>
                </div>

                {/* PATCH Method */}
                <div>
                    <h3>PATCH</h3>
                    <ul>
                        <ListItem>Used to update specific resource</ListItem>
                        <ListItem>Example:
                            <CodeBlock code={`app.patch('/users/:id', (req, res) => {
  // update logic
})`} />
                        </ListItem>
                        <ListItem>Usually includes ID in request params</ListItem>
                        <ListItem>Data in body</ListItem>
                    </ul>
                </div>

                {/* DELETE Method */}
                <div>
                    <h3>DELETE</h3>
                    <ul>
                        <ListItem>Removes resources</ListItem>
                        <ListItem>Example:
                            <CodeBlock code={`app.delete('/users/:id', (req, res) => {
  // delete logic
})`} />
                        </ListItem>
                    </ul>
                </div>
            </div>

            {/* Request Lifecycle */}
            <div>
                <h2>Request Lifecycle</h2>

                <ul>
                    <ListItem>Client --&gt; Server --&gt; Controller --&gt; Logic --&gt; Response --&gt; Client</ListItem>
                </ul>

                <p className="stress">Step-by-Step Flow:</p>
                <ol>
                    <ListItem>Client sends HTTP request</ListItem>
                    <ListItem>Express matches route</ListItem>
                    <ListItem>Middleware runs</ListItem>
                    <ListItem>Controller function executes</ListItem>
                    <ListItem>Response sent back</ListItem>
                </ol>

                <p className="stress">Example: </p>
                <ul>
                    <ListItem>Code:
                        <CodeBlock code={`app.get('/users/:id', (req, res) => {
  const id = req.params.id
  const user = users.find(u => u.id == id)
  res.json(user)
})`} />
                    </ListItem>
                    <ul>
                        <ListItem>URL hit → <code className="code-block fw-600">/users/1</code></ListItem>
                        <ListItem>Express matches route</ListItem>
                        <ListItem><code className="code-block fw-600">req.params.id</code> extracted</ListItem>
                        <ListItem>Data searched</ListItem>
                        <ListItem>Response returned</ListItem>
                    </ul>
                </ul>
            </div>

            {/* Request Object */}
            <div>
                <h2>Request Object</h2>
                <ul>
                    <ListItem>In express, <CodeBlock code={`app.get('/', (req, res) => {})`} /></ListItem>
                    <ListItem><span className="stress">req</span> contains all client information</ListItem>
                </ul>

                <div>
                    <h3>req.params</h3>
                    <ul>
                        <ListItem>Used for URL variables</ListItem>
                        <ListItem>Example: <CodeBlock code={`GET /users/10`} /></ListItem>
                        <ListItem>Route: <CodeBlock code={`app.get('/users/:id', (req, res) => {
  console.log(req.params.id)
})`} /></ListItem>
                        <ListItem>Output: 10</ListItem>
                        <ListItem>Used when:
                            <ul>
                                <ListItem>Identifying specific resource</ListItem>
                                <ListItem>ID-based routes</ListItem>
                            </ul>
                        </ListItem>
                    </ul>
                </div>

                <div>
                    <h3>req.query</h3>
                    <ul>
                        <ListItem>Used for filtering, searching, pagination</ListItem>
                        <ListItem>Example: <CodeBlock code={`GET /users?age=25&city=ktm`} /></ListItem>
                        <ListItem>Route: <CodeBlock code={`app.get('/users', (req, res) => {
  console.log(req.query)
})`} /></ListItem>
                        <ListItem>Output: <CodeBlock code={`{ age: "25", city: "ktm" }`} /></ListItem>
                        <ListItem>Used when:
                            <ul>
                                <ListItem>Filtering</ListItem>
                                <ListItem>Sorting</ListItem>
                                <ListItem>Pagination</ListItem>
                                <ListItem>Optional values</ListItem>
                            </ul>
                        </ListItem>
                    </ul>
                </div>

                <div>
                    <h3>req.body</h3>
                    <ul>
                        <ListItem>Used to send data in POST/PUT/PATCH requests.</ListItem>
                        <ListItem>It requires middleware to run: <CodeBlock code={`app.use(express.json())`}></CodeBlock></ListItem>
                        <ListItem>Example: <CodeBlock code={`POST /users
{
  "name": "Ram",
  "age": 25
}`} /></ListItem>
                        <ListItem>Route: <CodeBlock code={`app.post('/users', (req, res) => {
  console.log(req.body)
})`} /></ListItem>
                    </ul>
                </div>

                <div>
                    <h3>req.headers</h3>
                    <ul>
                        <ListItem>Contains metadata</ListItem>
                        <ListItem>Example: <CodeBlock code={`console.log(req.headers.authorization)`} /></ListItem>
                        <ListItem>Used for:
                            <ul>
                                <ListItem>Authentication tokens</ListItem>
                                <ListItem>Content type</ListItem>
                                <ListItem>API Keys</ListItem>
                            </ul>
                        </ListItem>
                    </ul>
                </div>


            </div>

            {/* Middleware */}
            <div>
                <h2>Middleware</h2>

                <div>
                    <h3>What is Middleware?</h3>

                    <p>Middleware is a function that has access to:</p>
                    <ul>
                        <ListItem>req (request object)</ListItem>
                        <ListItem>res (response object)</ListItem>
                        <ListItem>next (function to pass control)</ListItem>
                    </ul>
                    <p>It runs <span className="stress">between receiving a request and sending a response.</span></p>
                </div>

                <div>
                    <h3>Visualizing Middleware in Request Lifecycle</h3>

                    <p>Client --&gt; Middleware --&gt; Route Handler --&gt; Response</p>
                    <p>Or mote accurately: </p>
                    <p>Client --&gt; Middleware 1 --&gt; Middleware 2 --&gt; Middleware 3 --&gt; Route --&gt; Response</p>
                </div>

                <div>
                    <h3>Basic Middleware Structure</h3>
                    <CodeBlock code={`function middlewareName(req, res, next) {
  // logic
  next()
}`} />
                    <CodeBlock code={`app.use((req, res, next) => {
  console.log("Middleware executed")
  next()
})`} />
                </div>

                <div>
                    <h3>How Middleware Works Internally</h3>
                    <p>When a request comes:
                        <ListItem>Express checks all registered middleware</ListItem>
                        <ListItem>Executes them in order</ListItem>
                        <ListItem>If <code className="code-block fw-600">next()</code> is called → goes to next middleware</ListItem>
                        <ListItem>If response is sent → cycle ends</ListItem>
                    </p>
                </div>

                <div>
                    <h3>The next() Function</h3>
                    <p>next() is a function that tells Express: <span className="stress">“Move to the next middleware in the stack.”</span></p>
                    <p>If you <span className="stress">do not call next()</span>, the request will hang (unless you send a response).</p>

                    <div>
                        <h4>Example 1: Without next()</h4>
                        <CodeBlock code={`app.use((req, res, next) => {
  console.log("Hello")
})`} />
                        <p>❌ Request will hang because no next() and no response sent.</p>
                    </div>
                    
                    <div>
                        <h4>Example 2: With next()</h4>
                        <CodeBlock code={`app.use((req, res, next) => {
  console.log("Hello")
  next()
})`} />
                        <p>✔️ Request continues.</p>
                    </div>

                    <div>
                        <h3>Example 3: Ending Response (No next needed)</h3>
                        <CodeBlock code={`app.use((req, res, next) => {
  res.send("Stopped here")
})`} />
                        <p>Here next() is NOT needed because response is sent.</p>
                    </div>
                </div>

                <div>
                    <h3>Types of Middleware in Express</h3>
                    <p>Express supports several types:</p>
                    <ol>
                        <ListItem>Application-level middleware</ListItem>
                        <ListItem>Router-level middlewares</ListItem>
                        <ListItem>Built-in middleware</ListItem>
                        <ListItem>Third-party middleware</ListItem>
                        <ListItem>Error-handling middleware</ListItem>
                    </ol>
                </div>

                <div>
                    <h3>Application-Level Middleware</h3>

                    <p>Registered using: <CodeBlock code={`app.use()`} /></p>

                    <p>Example: <CodeBlock code={`app.use((req, res, next) => {
  console.log("Time:", new Date())
  next()
})`} /></p>
                    <p>This runs for <span className="stress">every request.</span></p>

                    <div>
                        <h4>Middleware for Specific Route</h4>

                        <CodeBlock code={`app.use('/users', (req, res, next) => {
  console.log("Users route accessed")
  next()
})`}  />
                    <p className="stress">Only runs for routes starting with /users.</p>
                    </div>
                </div>

                <div>
                    <h3>Built-in Middleware</h3>
                    <p>Express provides built-in middleware.</p>

                    <div>
                        <h4>express.json()</h4>
                        <p>Parses JSON body.</p>
                        <CodeBlock code={`app.use(express.json())`} />
                        <p>Without this:
                            <CodeBlock code={`req.body // undefined`} />
                        </p>
                    </div>

                    <div>
                        <h4>express.urlencoded()</h4>
                        <p>Parses form data.</p>
                        <CodeBlock code={`app.use(express.urlencoded({ extended: true }))`} />
                    </div>

                    <div>
                        <h4>express.static()</h4>
                        <p>Serves static files.</p>
                        <CodeBlock code={`app.use(express.static('public'))`} />
                        <p>If public folder contains:</p>
                        <CodeBlock code={`public/index.html`} />
                        <p>Accessible at:</p>
                        <CodeBlock code={`http://localhost:3000/index.html`} />
                    </div>
                </div>

                <div>
                    <h3>Custom Middleware</h3>
                </div>
            </div>
        </div>
    )
}

export default BackendBasics;