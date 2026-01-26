const FirstTsFile = () => {
    return (
        <>
        <div>
            <h2 className="title">5. Your First TypeScript File</h2>

            <p>Let's take the example of the below JS code to add two numbers</p>
            <ul>
                <li>Create <code className="code-block fw-600">src</code> file</li>
                <li>Create a <code className="code-block fw-600">add.js</code> file in src</li>
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
            
            <code>------------------------------------------------</code>
            <p className="stress">Question: What is the output of the above code?</p>

            <p className="mt-20">Now let's convert this code to TypeScript by adding types to the function parameters</p>
            <ul>
                <li> Now create a <code className="code-block fw-600">add.ts</code> file in src</li>
                <li>Write the same code in add.ts but with types</li>
                <li>The TS should show an error</li>
                <li>Try compiling the code using the command <code className="code-block fw-600">tsc</code></li>
                <li className="stress">Question: Will it compile or not?</li>
            </ul>

            <span>Note: We can use <code className="code-block fw-600">tsc --watch</code> to actively look for changes in TS file and compile automatically.</span>
        </div>        
        </>
    )
}

export default FirstTsFile;