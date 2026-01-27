import EventLoop from "../../assets/eventLoop.png";
import CodeBlock from "../../components/CodeBlock";

const AsyncProgramming = () => {
    return (
        <div className="container">
            <h1>Asynchronous Programming in JavaScript/TypeScript</h1>

            <div>
                <h2>1. What is Asynchronous Programming?</h2>

                <ul>
                    <li>Asynchronous programming allows long-running tasks to run in the background without blocking the main thread.</li>
                    <li>JavaScript & TypeScript are single-threaded, so async patterns are essential for handling things like I/O, timers, and network requests.</li>
                </ul>
            </div>

            <div>
                <h2>2. Why Async Programming Matters</h2>

                <ul>
                    <li>Real-world apps constantly wait for things:
                        <ul>
                            <li>Server responses</li>
                            <li>Database queries</li>
                            <li>File operations</li>
                            <li>User interactions</li>
                        </ul>
                    </li>

                    <li>Async programming keeps applications fast, responsive, and scalable.</li>
                </ul>
            </div>

            <div>
                <h2>3. Synchronous vs Asynchronous Code</h2>

                <ul>
                    <li>Synchronous:
                        <ul>
                            <li>Blocks execution until the current task completes</li>
                            <li>Tasks run one after another</li>
                        </ul>
                    </li>

                    <li>Asynchronous:
                        <ul>
                            <li>Long tasks run in background</li>
                            <li>Program continues execution</li>
                        </ul>
                    </li>

                    <li>Async behavior is managed using the <span className="stress">Event Loop.</span></li>
                </ul>
            </div>

            <div>
                <h2>4. The Event Loop</h2>

                <img src={EventLoop} alt="Event Loop Diagram" className="mt-20" />

                <ul>
                    <li>The Event Loop is the mechanism that enables async behavior in JavaScript.</li>

                    <li>
                        Core components:
                        <ul>
                            <li><span className="stress">Call Stack:</span> Where function calls are stacked and executed.</li>
                            <li><span className="stress">Web APIs/Node APIs:</span> Browser-provided APIs (like setTimeout, DOM events) that handle async tasks.</li>
                            <li><span className="stress">Callback (Task) Queue:</span> Holds completed async tasks waiting to be executed.</li>
                            <li><span className="stress">Microtask Queue:</span> Holds microtasks like Promise callbacks, which have higher priority than the Callback Queue.</li>
                            <li><span className="stress">Event Loop:</span> Continuously checks the Call Stack and Task Queue to push tasks onto the stack when it's empty.</li>
                        </ul>
                    </li>
                </ul>

                <div>
                    <p className="stress">a. Call Stack</p>
                    <ul>
                        <li>The Call Stack executes synchronous code.</li>
                        <li>Functions are pushed onto the stack when called & removed when execution completes.</li>
                        <li>If the stack is busy, nothing else can run.</li>
                    </ul>
                </div>

                <div>
                    <p className="stress">b. Web APIs/Node APIs</p>
                    <ul>
                        <li>Async operations are delegated to browser or Node.js APIs.</li>
                        <li>Examples: setTimeout, fetch/HTTP requests, DOM events</li>
                        <li>These APIs handle waiting without blocking the call stack.</li>
                    </ul>
                </div>

                <div>
                    <p className="stress">c. Callback (Task) Queue</p>
                    <ul>
                        <li>Holds callbacks from completed async operations.</li>
                        <li>When the Call Stack is empty, the Event Loop pushes tasks from this queue onto the stack.</li>
                        <li>Examples: setTimeout callbacks, setInterval callbacks</li>
                    </ul>
                </div>

                <div>
                    <p className="stress">d. Microtask Queue</p>
                    <ul>
                        <li>Holds microtasks like Promise callbacks.</li>
                        <li>Microtasks have higher priority than regular tasks in the Callback Queue.</li>
                        <li>After each task, the Event Loop processes all microtasks before moving to the next task.</li>
                    </ul>
                </div>

                <div>
                    <p className="stress">e. Event Loop</p>
                    <ul>
                        <li>The Event Loop continuously monitors the Call Stack and Task Queues.</li>
                        <li>When the Call Stack is empty, it pushes tasks from the Microtask Queue first, then from the Callback Queue.</li>
                        <li>This ensures that async operations are handled efficiently without blocking the main thread.</li>
                        <li>This cycle repeats continuously.</li>
                    </ul>
                </div>
            </div>
            
            <div>
                <h2>5. Callback Functions</h2>

                <ul>
                    <li>A callback is a function passed to another function to be executed later.</li>
                    <li>Callbacks are used to handle asynchronous operations.</li>
                    <li>Callbacks were the original async pattern in JavaScript.</li>
                </ul>

                <CodeBlock code={`setTimeout(() => {
    console.log("I am running")
}, 5000);`} />

                <p>In the above example, the callback function inside setTimeout is executed after a 5-second delay.</p>
            </div>

            <div>
                <h2>6. Callback Hell</h2>

                <ul>
                    <li>Callback Hell refers to deeply nested callbacks that make code hard to read and maintain.</li>
                    <li>Problems:
                        <ul>
                            <li>Code becomes difficult to read and maintain.</li>
                            <li>Errors are harder to handle.</li>
                            <li>Control flow becomes complex.</li>
                            <li>Debugging is challenging.</li>
                        </ul>
                    </li>
                    <li>Callback Hell is also called <span className="stress">Pyramid of Doom</span></li>
                </ul>

                <CodeBlock code={`setTimeout(() => {
    console.log("Step 1");
    setTimeout(() => {
        console.log("Step 2");
        setTimeout(() => {
            console.log("Step 3");
            setTimeout(() => {
                console.log("Step 4");
                setTimeout(() => {
                    console.log("Step 5");
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);`} />

                <p>In the above example, each setTimeout is nested inside the previous one, creating a "Pyramid of Doom" structure.</p>
                <p>How it is executed: </p>
                <ul>
                    <li>"Step 1" is logged after 1 second.</li>
                    <li>Then "Step 2" is logged after another second.</li>
                    <li>This continues until "Step 5" is logged after a total of 5 seconds.</li>
                </ul>

                <p>To avoid Callback Hell, we can use Promises and async/await for better readability and maintainability.</p>
            </div>

            <div>
                <h2>7. Promises</h2>

                <ul>
                    <li>A Promise represents a value that will be available later.</li>
                    <li>States of a Promise:
                        <ul>
                            <li><span className="stress">Pending:</span> Initial state, neither fulfilled nor rejected.</li>
                            <li><span className="stress">Fulfilled:</span> Operation completed successfully.</li>
                            <li><span className="stress">Rejected:</span> Operation failed.</li>
                        </ul>
                    </li>
                    <li>Promises provide methods like <code className="code-block fw-600">.then()</code>, <code className="code-block fw-600">.catch()</code>, and <code className="code-block fw-600">.finally()</code> for handling async results and errors.</li>
                    <li>Promises improves readability and maintainability compared to callbacks.</li>                
                </ul>

                <p className="stress">Promise example 1:</p>
                <CodeBlock code={`const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved!");
    }, 2000);
});

myPromise.then((message) => {
    console.log(message);
}).catch((error) => {
    console.error(error);
});`} />    
                <p>In the above example, a Promise is created that resolves after 2 seconds. The <code className="code-block fw-600">.then()</code> method is used to handle the resolved value.</p>

                <p className="stress">Promise example 2:</p>
                <CodeBlock code={`const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise rejected!");
    }, 2000);
});

myPromise.then((message) => {
    console.log(message);
}).catch((error) => {
    console.error(error);
});`} />    
                <p>In the above example, a Promise is created that rejects after 2 seconds. The <code className="code-block fw-600">.catch()</code> method is used to handle the error.</p>
            </div>

            <div>
                <h2>8. Chaining Promises</h2>

                <ul>
                    <li>Promises can be chained to run async tasks sequentially.</li>
                    <li>Each <span className="stress">.then()</span> returns a new Promise, allowing chaining.</li>
                    <li>This creates a clean and readable flow of asynchronous operations.</li>
                </ul>

                <p className="stress">Example 1 of chaining promises:</p>
                <CodeBlock code={`fetch("https:///jsonplaceholder.typicode.com/todos/1")
.then(response => response.json())
.then(data => console.log(data))
.catch(err => console.log("Error occurred:", err));`} />

                <p>In the above example, we fetch data from an API and chain <code className="code-block fw-600">.then()</code> calls to process the response and log the data.</p>

                <p className="stress">Example 2 of chaining promises:</p>
                <CodeBlock code={`const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("First promise resolved");
    }, 1000);
});

promise1.then((message) => {
    console.log(message);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Second promise resolved");
        }, 1000);
    });
}).then((message) => {
    console.log(message);
}).catch((error) => {
    console.error(error);
});`} />

                <p>In the above example, two promises are chained together. The second promise starts only after the first one resolves.</p>
            </div>
            
            <div>
                <h2>9. Fetch API</h2>
                <ul>
                    <li>The Fetch API provides a modern way to make network requests (HTTP requests).</li>
                    <li>It allows easy handling of responses and errors using promises.</li>
                    <li>It provides cleaner and easier to understand syntax compared to older methods like XMLHttpRequest.</li>
                    <li>Already built into modern browsers and Node.js</li>
                    <li><code className="code-block fw-600">{`fetch()`}</code> returns a Promise that resolves to the Response object representing the response to the request.</li>
                    <li><code className="code-block fw-600">{`fetch()`}</code> returns <code className="code-block fw-600">{`Promise<Response>`}</code></li>
                    <li>Supports various HTTP methods like GET, POST, PUT, DELETE, etc.</li>
                </ul>
            </div>

            <div>
                <h2>10. Async/Await</h2>

                <ul>
                    <li>Async/await is syntactic sugar built on top of Promises.</li>
                    <li>Makes asynchronous code look and behave like synchronous code.</li>
                    <li>Improves readability and maintainability.</li>
                    <li><span className="stress">async</span> keyword is used to declare an asynchronous function that returns a Promise.</li>
                    <li><span className="stress">await</span> keyword is used to pause execution until a Promise is resolved or rejected.</li>
                    <li>Easier error handling with try/catch</li>
                </ul>

                <p className="stress">Example of async/await:</p>
                <CodeBlock code={`async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error occurred: ", error);
    }
}

fetchData();`} />
            </div>

            <div>
                <h2>11. HTTP Requests</h2>

                <ul>
                    <li>HTTP requests are used to communicate with servers and APIs over the web.</li>
                    <li>Common HTTP methods include:
                        <ul>
                            <li><span className="stress">GET:</span> Retrieve data from a server.</li>
                            <li><span className="stress">POST:</span> Send data to a server to create a new resource.</li>
                            <li><span className="stress">PUT/PATCH:</span> Update an existing resource on the server.</li>
                            <li><span className="stress">DELETE:</span> Remove a resource from the server.</li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div>
                <h2>12. HTTP Status Codes</h2>

                <ul>
                    <li>HTTP status codes indicate the result of an HTTP request.</li>

                    <ul>
                        <li><span className="stress">1xx (Informational):</span> Request received, continuing process.</li>
                        <li><span className="stress">2xx (Success):</span> The request was successfully received, understood, and accepted. (e.g., 200 OK, 201 Created)</li>
                        <li><span className="stress">3xx (Redirection):</span> Further action needs to be taken to complete the request. (e.g., 301 Moved Permanently, 302 Found)</li>
                        <li><span className="stress">4xx (Client Error):</span> The request contains bad syntax or cannot be fulfilled. (e.g., 400 Bad Request, 401 Unauthorized, 404 Not Found)</li>
                        <li><span className="stress">5xx (Server Error):</span> The server failed to fulfill a valid request. (e.g., 500 Internal Server Error, 502 Bad Gateway)</li>
                    </ul>
                </ul>
            </div>

            <div>
                <h2>13. Using JSON data</h2>

                <ul>
                    <li>JSON (JavaScript Object Notation) is a lightweight data-interchange format.</li>
                    <li>Commonly used for transmitting data in web applications.</li>
                    <li>Can be easily parsed and generated by JavaScript/TypeScript.</li>
                    <li>TypeScript helps define JSON shapes using interfaces.</li>

                    <li><code className="stress code-block">{`JSON.parse()`}</code>converts string to object</li>
                    <li><code className="stress code-block">{`JSON.stringify()`}</code>converts object to string</li>

                    <li>Fetch API provides methods to work with JSON data, such as <code className="code-block fw-600">{`response.json()`}</code>.</li>
                </ul>
            </div>


            <div>
                <h2>14. Key Takeaways</h2>

                <ul>
                    <li><span className="stress">Asynchronous programming</span> is essential for building responsive web applications.</li>
                    <li><span className="stress">The Event Loop</span> is the core mechanism that enables async behavior in JavaScript/TypeScript.</li>
                    <li><span className="stress">Callbacks, Promises, and async/await</span> are key patterns for handling asynchronous operations.</li>
                    <li><span className="stress">The Fetch API</span> provides a modern way to make HTTP requests and handle responses.</li>
                    <li><span className="stress">Understanding HTTP methods and status codes</span> is crucial for working with web APIs.</li>
                    <li><span className="stress">JSON</span> is the standard format for data exchange in web applications.</li>
                </ul>
            </div>
        </div>
    )
}

export default AsyncProgramming;