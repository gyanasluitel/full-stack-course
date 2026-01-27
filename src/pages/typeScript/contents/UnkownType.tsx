import CodeBlock from "../../../components/CodeBlock";

const UnknownType = () => {
    return (
        <div className="mt-40">
            <h2 className="title">13. Unknown Type</h2>

            <ul>
                <li>The <span className="stress">unknown</span> type is a type-safe counterpart of <span className="stress">any</span>.</li>
                <li><code className="code-block fw-600">any</code> turns TypeScript off</li>
                <li><code className="code-block fw-600">unknown</code> keeps TypeScript honest & forces you to perform type checks</li>
                <li><code className="code-block fw-600">unknown</code> represents a value that could be of any type, but unlike <span className="stress">any</span>, you cannot perform operations on an <span className="stress">unknown</span> type without first performing some type of checking or assertion.</li>
                <li className="mt-20"><span className="stress">Example with</span><code className="code-block fw-600"> any:</code>
                
                <CodeBlock code={`let value: any;

value.message(); // No compile-time error, but may cause a runtime error if value is not an object with a message method

value = "Hello, World!";
console.log(value.length); // No compile-time error, works fine at runtime
console.log(value.toUpperCase()); // No compile-time error, works fine at runtime

value = 42;
console.log(value.toUpperCase()); // No compile-time error, but runtime error: value.toUpperCase is not a function`} />
                
                </li>
                <li className="mt-20">
                    <span className="stress">Example with</span><code className="code-block fw-600"> unknown:</code>

                    <CodeBlock code={`let value: unknown;

value = "Hello, World!";

console.log(value.toUpperCase());

value = 456;
console.log(value.toFixed(2));`} />

                    <ul>
                        <li>This will cause a compile-time error because you cannot directly call methods on an <span className="stress">unknown</span> type without first performing type checks or assertions.</li>
                        <li className="stress">To safely use the value, you need to perform type checks:</li>

                        <CodeBlock code={`let value: unknown;

value = "Hello, World!";

if (typeof value === "string") {
    console.log(value.toUpperCase());
}

value = 456;

if (typeof value === "number") {
    console.log(value.toFixed(2));
}`} />
                    </ul>
                </li>



                <li className="mt-20">The main advantage of using <span className="stress">unknown</span> over <span className="stress">any</span> is that it forces you to perform type checks before using the value, which helps catch potential errors at compile time and improves code safety.</li>
            </ul>
        </div>
    )
}

export default UnknownType;