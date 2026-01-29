import CodeBlock from "../../../../common/CodeBlock";

const OptionalParameters = () => {
    return (
        <div className="mt-40">
            <h3 className="title">c. Optional Parameters</h3>

            <ul>
                <li>In TypeScript, you can mark parameters as optional by adding a question mark (?) after the parameter name.</li>
                <li>This indicates that the parameter may or may not be provided when the function is called.</li>
                <li className="mt-6"><span className="stress">Example 1:</span>
                <CodeBlock code={`function greet(name: string, greeting?: string): string {
    if (greeting) {
        return \`\${greeting}, \${name}!\`;
    } else {
        return \`Hello, \${name}!\`;
    }
}

console.log(greet("Ram")); // Output: "Hello, Ram!"
console.log(greet("Sita", "Good morning")); // Output: "Good morning, Sita!"`} />
                </li>

                <li className="mt-6"><span className="stress">Example 2:</span>
                <CodeBlock code={`function log(message: string, userId?: string) {
    console.log(message, userId ?? "");
}

log("User logged in");
log("User logged in", "user123");`} />
                </li>
            </ul>
        </div>
    )
}

export default OptionalParameters;