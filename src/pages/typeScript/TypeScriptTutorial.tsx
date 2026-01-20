const TypeScriptTutorial = () => {
    return (
        <div className="container">
            <h1 className="title">TypeScript Tutorial</h1>

            <div>
                <h2 className="title">Why TypeScript?</h2>

                <h3>1. The Problem with JavaScript at Scale</h3>

                <div>
                    <ul>
                        <li>JavaScript is dynamically typed - meaning types are determined at runtime and type of a variable can change depending on the value the variable holds.</li>
                            <ul>
                                <li>If you've done C programming, you know variables have fixed types. Example, <code className="code-block">int age = 25;</code></li>
                                <li>In JavaScript, you declare variable by simply doing <code className="code-block">let age = 25;</code></li>
                                <li>Let's say in our codebase we have the following code:
                                    <pre>
                                        <code className="code-block">{`let age = 25;
age = "Hello"`}</code>
                                    </pre>
                                </li>
                            </ul>

                        <li className="mt-6">JS allows <span className="stress">flexibility</span>, but leads to <span className="stress">unexpected bugs</span>. Increase in runtime errors - hard to debug.</li>
                        <li className="mt-6">As applications grow, <span className="stress">maintaining and understanding code</span> becomes challenging without strict typing.</li>
                        <li className="mt-6">Lack of type safety can lead to bugs that are <span className="stress">only caught during execution</span>, making development slower and more error-prone.</li>

                        <li className="mt-8"><span className="stress">Common JS issues:</span>
                            <ul>
                                <li><code className="code-block">undefined / null</code> runtime crashes</li>
                                <li>Wrong function arguments</li>
                                <li>Object shape mismatches</li>
                                <li>Refactoring can be a problem - you fear refactoring because you don't know what each value type is and how it works</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <h3 className="mt-40">2. What TypeScript Adds</h3>

                <div>
                    <ul>
                        <li>TypeScript is <span className="stress">JavaScript + Types</span></li>
                        <li className="mt-6">Alternative to JS (superset of JavaScript). Extends JS by providing new features & syntax. With TS, you get:
                            <ul>
                                <li>Static type checking (before runtime)
                                    <ul>
                                        <li>Once a type of variable is declared, cannot change it later. Example, <code className="code-block">let age: number = 25;</code>cannot be changed to a string later.</li>
                                        <li>Error checking & debugging is easier. Forces to write clean code</li>
                                        <li>Helps catch errors early during development rather than at runtime.</li>
                                    </ul>
                                </li>
                                <li>Better IDE Support (autocomplete, refactoring)</li>
                                <li>Self documenting code</li>
                                <li>Safer refactors</li>
                                <li>We can use modern features (like arrow functions, let, const) that may not be directly supported in all browsers by compiling down to compatible JavaScript (older JS that browser understand)
                                    <ul>
                                        <li>It is similar to Babel compiler that allows us to use modern JS features</li>
                                    </ul>
                                </li>
                                <li>Supports extra features (like generics, interfaces, generics) which we will explore later</li>
                            </ul>
                        </li>
                        <li className="mt-6">The key mindset you need to have is <span className="stress">TypeScript helps you catch bugs earlier, not write more code</span></li>
                        <li className="mt-6"><span className="stress">Thing to Note:</span> Browser do not understand TypeScript directly, so it needs to be compiled to JavaScript before running in the browser.</li>
                    </ul>
                </div>
                
                <h3 className="mt-40">3. TypeScript is JavaScript</h3>

                <div>Important rule: Every valid JS file is valid TS - TypeScript compiles down to JavaScript - Browsers <span className="stress">do not run TypeScript directly</span></div>

                <h3 className="mt-40">4. Setting up TS and working with TS</h3>

                <div>
                    <span>Pre-requisite:</span>
                    <ul>
                        <li className="mt-6">You should have basic knowledge of JavaScript, stuff like arrow functions, async operations</li>
                        <li className="mt-6">You should have node installed in your machine
                            <ul>
                                <li>Need it to install TypeScript and other tools.<span> Download it from <a href="https://nodejs.org" target="_blank" className="external-link">nodeJs.org</a> and install it.</span>
                                </li>
                            </ul>
                        </li>
                        <li className="mt-6">Need to install TypeScript compiler in our computer to convert it into regular JavaScript</li>
                        <li className="mt-6">Need a code editor like VS Code for writing TypeScript code</li>
                    </ul>

                    <p className="stress">Please install the necessary tools before proceeding. Install Node & VS Code in your machine.</p>

                    <p className="stress">Once installation is done,</p>
                    <ul>
                        <li>Install TypeScript globally - <code className="code-block">npm install -g typescript</code>. 
                        <br />Might need to run it with administrator privileges depending on your system (use sudo on macOS/Linux). In Windows, run the command prompt as an administrator.</li>

                        <li className="mt-6">Create a directory locally for your TypeScript project.</li>
                        <li className="mt-6">Open the directory in VS Code.</li>
                        <li className="mt-6">Discuss VS Code tools to make development easier</li>
                        <li className="mt-6">Initialize git so you can track changes, using <code className="code-block">git init -b main</code></li>
                        <li className="mt-6">Initialize TypeScript
                            <ul>
                                <li><code className="code-block">npm init</code> (Use npm init -y to do with all default configurations)</li>
                                <li><code className="code-block">npm install typescript --save-dev</code>
                                    <ul>
                                        <li>This command installs TypeScript as a <span className="stress">development dependency</span> in your project. It means TypeScript will only be required during development and not included in the production build.</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="mt-6">Configure tsconfig.json
                    <pre><code className="code-block">{`
{
    "compilerOptions": {
        "rootDir": "src",
        "outDir": "dist",
        "target": "ES2019",
        "module": "CommonJS",
        "strict": true
    },
    "include": ["src/**/*"]
}
`}</code></pre>
                        </li>
                        <ul>
                            <li><b>rootDir</b>: The main folder where your TypeScript source files are located (here, <code>src</code>).</li>
                            <li><b>outDir</b>: The folder where the compiled JavaScript files will be placed (here, <code>dist</code>).</li>
                            <li><b>target</b>: The version of JavaScript to compile to (here, <code>ES2019</code>).</li>
                            <li><b>module</b>: The module system to use in the output files (here, <code>CommonJS</code>, which is used by Node.js).</li>
                            <li><b>strict</b>: Enables strict type-checking options for safer code.</li>
                        </ul>
                    </ul>
                </div>

                <div>
                    <h3 className="mt-40">5. Your First TypeScript File</h3>

                    <p>Let's take the example of the below JS code to add two numbers</p>
                    <ul>
                        <li>Create <code className="code-block">src</code> file</li>
                        <li>Create a <code className="code-block">add.js</code> file in src</li>
                    </ul>
                    <pre>
                        <code className="code-block">
                            {`// Function to add two numbers
    const add = (a, b) => {
        return a + b;
    }

    console.log(add(2, "3"));`}
                    </code>
                    </pre>
                    
                    <p className="stress">What is the output?</p>

                    <p className="mt-20">Now let's convert this code to TypeScript by adding types to the function parameters</p>
                    <ul>
                        <li> Now create a <code className="code-block">add.ts</code> file in src</li>
                        <li>Write the same code in add.ts but with types</li>
                        <li>The TS should show an error</li>
                        <li>Try compiling the code using the command <code className="code-block">tsc</code></li>
                        <li className="stress">Will it compile or not?</li>

                    </ul>
                </div>

                <div className="mt-40">
                    <h3>6. Reconfiguring tsconfig.json & updating package.json</h3>
                    <p>Update the configuration as shown below:</p>
                    <ul>
                        <li className="mt-6">Reconfigure tsconfig.json <code className="code-block">"noEmitOnError": true</code> on <code className="code-block">compilerOptions</code></li>
                        <li className="mt-6">Update package.json to add script to build & watch build. In the scripts section, add:
                            <ul>
                                <li><code className="code-block">"build": "tsc"</code></li>
                                <li><code className="code-block">"dev": "tsc --watch"</code></li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className="mt-40">
                    <h3>7. Basic Types</h3>

                    <div className="mt-20">
                        <h4>Primitive Types</h4>
                        <ul>
                            <li>JS has primitive types, like <code className="code-block">string</code>, <code className="code-block">number</code>, <code className="code-block">boolean</code>, <code className="code-block">null</code>, and <code className="code-block">undefined</code>.</li>
                            <li className="mt-6">In TS, we can explicitly declare variable types using type annotations.</li>
                            <li className="mt-6"><span className="stress">Example:</span>
                                <pre>
                                    <code className="code-block code-block__light">{`let name: string = "Gyanas";
let age: number = 50;
let isStudent: boolean = false;`}
                                    </code>
                                    </pre>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-20">
                        <h4>Arrays</h4>
                        <ul>
                            <li className="mt-6"><code className="code-block code-block__light">let scores: number[] = [90, 85, 88];</code></li>
                            <li className="mt-6"><code className="code-block code-block__light">let names: string[] = ["Asmin", "Umesh", "Priti"];</code></li>
                        </ul>
                    </div>

                    <div className="mt-20">
                        <h4>Any (Avoid This)</h4>
                        <ul>
                            <li className="mt-6"><code className="code-block code-block__light">let value: any = 42;</code></li>
                            <li className="mt-6"><code className="code-block code-block__light">value = "Now I'm a string";</code> 
                                <ul>
                                    <li><code className="code-block">any</code> disables TypeScript. Allowed, but don't do this. This will exactly be like JS, which we want to avoid.</li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-20">
                        <h4>Type Inference (Let TS Work for You)</h4>
                        <p>TypeScript can often infer the type of a variable based on its initial value, so you don't always need to explicitly annotate types.</p>
                        <ul>
                            <li><code className="code-block code-block__light">let count = 10;</code> // inferred as number</li>
                            <li><code className="code-block code-block__light">count = "hi"</code> // error</li>
                        </ul>
                    </div>

                    <div>Hello</div>

                </div>
            </div>
        </div>
    )
}

export default TypeScriptTutorial;