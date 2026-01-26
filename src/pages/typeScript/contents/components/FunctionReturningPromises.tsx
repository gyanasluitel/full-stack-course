import LineBreak from "../../../../components/LineBreak";

const FunctionReturningPromises = () => {
    return (
        <div className="mt-30">
            <h3>e. Functions which return promises</h3>

            <ul>
                <li>Functions that perform asynchronous operations often return promises. You can specify the return type as a Promise with a specific type.</li>
                <li className="mt-6"><span className="stress">Example 1:</span>
                <pre><code className="code-block">{`async function getNumber (): Promise<number> {
    return 42;
}

getNumber().then((num) => {
    console.log("The number is:", num);
});`}</code></pre>
                </li>

                <LineBreak />

                <li className="mt-6"><span className="stress">Example 2:</span>
                <pre><code className="code-block">{`async function getString (): Promise<string> {
    return "Hello, TypeScript!";
}

getString().then((str) => {
    console.log("The string is:", str);
});`}</code></pre></li>
            </ul>
    </div>
    )
}

export default FunctionReturningPromises;