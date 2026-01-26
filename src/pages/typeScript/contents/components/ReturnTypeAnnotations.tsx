import LineBreak from "../../../../components/LineBreak";

const ReturnTypeAnnotations = () => {
    return (
        <div className="mt-30">
            <h3>b. Return Type Annotations</h3>
            <ul>
                <li>In TypeScript, you can specify the return type of a function to ensure it returns the expected type.</li>
                <li className="mt-6"><span className="stress">Example 1:</span>
                <pre><code className="code-block">{`function greet(name: string): string {
    return ("Hello, " + name + "!");
}

const greetingMessage = greet("Harry Potter");
console.log(greetingMessage);`}</code></pre>
                </li>

                <p>This ensures that the <span className="stress">function always returns a string</span>, and any <span className="stress">deviation</span> will result in a <span className="stress">TypeScript error</span>.</p>

                <LineBreak />
                <li className="mt-20"><span className="stress">Example 2:</span>
                <pre><code className="code-block">{`function greet(name: string): number {
    return ("Hello, " + name + "!");
} `}</code></pre>

                </li>

                <p>Here, TypeScript will throw an <span className="stress">error</span> because the function is <span className="stress">expected to return a number, but it actually returns a string.</span></p>
            </ul>
        </div>
    )
}

export default ReturnTypeAnnotations;