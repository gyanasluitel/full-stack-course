const DefaultParameters = () => {
    return (
        <div className="mt-40">
            <h3 className="title">d. Default Parameters</h3>
            <ul>
                <li>Default parameters allow you to specify a default value for a parameter in case it is not provided when the function is called.</li>
                <li className="mt-6"><span className="stress">Example:</span>
                <pre><code className="code-block">{`function greet(name: string, greeting: string = "Hello"): string {
    return \`\${greeting}, \${name}!\`;
}

console.log(greet("Ram")); // Output: "Hello, Ram!"
console.log(greet("Sita", "Good morning")); // Output: "Good morning, Sita!"`}</code></pre>
                </li>
            </ul>
        </div>
    )
}

export default DefaultParameters;