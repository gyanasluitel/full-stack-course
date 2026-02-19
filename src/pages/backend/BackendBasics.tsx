import ListItem from "src/common/ListItem";
import EventLoop from "../../assets/async/eventLoop.png";
import CodeBlock from "src/common/CodeBlock";

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
                <h2>Creating our First Server</h2>
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
    "module": "nodenext",
    "target": "esnext",
    "types": [],
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
}
`} />
                    <ul>
                        <ListItem><span className="stress">outDir: </span>Specifies the output directory for compiled JavaScript files.</ListItem>
                        <ListItem><span className="stress">rootDir: </span>Specifies the root directory of your TypeScript source files.</ListItem>
                        <ListItem><span className="stress">strict: </span>Enables strict type-checking options for better code quality and error detection.</ListItem>
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
    "ts-node": "^10.9.2",
    "ts-node-dev": "^2.0.0",
    "typescript": "^5.9.3"
  }
}`} />
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
                </ListItem>
            </div>
        </div>
    )
}

export default BackendBasics;