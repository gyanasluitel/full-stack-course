const SettingUpTs = () => {
    return (
        <>
            <h2 className="title">4. Setting up TS and working with TS</h2>

            <div>
                <p>Pre-requisite:</p>
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
                    <li>Install TypeScript globally - <code className="code-block fw-600">npm install -g typescript</code>. 
                    <br /><span className="stress">Might need to run it with administrator privileges depending on your system (use sudo on macOS/Linux). In Windows, run the command prompt as an administrator.</span></li>

                    <li className="mt-6">Create a directory locally for your TypeScript project.</li>
                    <li className="mt-6">Open the directory in VS Code.</li>
                    <li className="mt-6">Discuss VS Code tools to make development easier</li>
                    <li className="mt-6">Initialize git so you can track changes, using <code className="code-block fw-600">git init -b main</code></li>
                    <li className="mt-6">Initialize TypeScript
                        <ul>
                            <li><code className="code-block fw-600">npm init</code> (Use npm init -y to do with all default configurations)</li>
                            <li><code className="code-block fw-600">npm install typescript --save-dev</code>
                                <ul>
                                    <li>This command installs TypeScript as a <span className="stress">development dependency</span> in your project. It means TypeScript will only be required during development and not included in the production build.</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>Add .gitignore
                        <ul>
                            <li>Create a .gitignore file to exclude node_modules and other unnecessary files from your git repository.</li>
                            <li>Add <code>node_modules/</code> to the .gitignore file to prevent it from being tracked by git.</li>
                            <li>Add <code>dist/</code> to the .gitignore file to prevent compiled output from being tracked by git.</li>
                        </ul>
                    </li>
                    <li className="mt-6">Configure tsconfig.json
                        <ul>
                            <li>Run <code className="code-block fw-600">tsc --init</code> to create a basic tsconfig.json file in your project root.</li>
                        </ul>
                    <li className="mt-6">Update tsconfig.json to match the following configuration:</li>
                    <pre><code className="code-block fw-600">{`
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

        </>
    )
}

export default SettingUpTs;