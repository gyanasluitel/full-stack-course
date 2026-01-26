import LineBreak from "../../../../components/LineBreak";

const OptionalParameters = () => {
    return (
        <div className="mt-40">
            <h3 className="title">c. Optional Parameters</h3>

            <ul>
                <li>In TypeScript, you can mark parameters as optional by adding a question mark (?) after the parameter name.</li>
                <li>This indicates that the parameter may or may not be provided when the function is called.</li>
                <li className="mt-6"><span className="stress">Example 1:</span>
                <pre><code className="code-block">{`function greet(name: string, greeting?: string): string {
    if (greeting) {
        return \`\${greeting}, \${name}!\`;
    } else {
        return \`Hello, \${name}!\`;
    }
}

console.log(greet("Ram")); // Output: "Hello, Ram!"
console.log(greet("Sita", "Good morning")); // Output: "Good morning, Sita!"`}</code></pre>
                </li>

                <LineBreak />

                <li className="mt-6"><span className="stress">Example 2:</span>
                <pre><code className="code-block">{`function log(message: string, userId?: string) {
    console.log(message, userId ?? "");
}

log("User logged in");
log("User logged in", "user123");`}</code></pre></li>
            </ul>
        </div>
    )
}

export default OptionalParameters;