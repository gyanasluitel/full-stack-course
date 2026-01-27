import CodeBlock from "../../../../components/CodeBlock";

const FunctionReturningPromises = () => {
    return (
        <div className="mt-30">
            <h3>e. Functions which return promises</h3>

            <ul>
                <li>Functions that perform asynchronous operations often return promises. You can specify the return type as a Promise with a specific type.</li>
                <li className="mt-6"><span className="stress">Example 1:</span>
                <CodeBlock code={`async function getNumber (): Promise<number> {
    return 42;
}

getNumber().then((num) => {
    console.log("The number is:", num);
});`} />
                </li>

                <li className="mt-6"><span className="stress">Example 2:</span>
                <CodeBlock code={`async function getString (): Promise<string> {
    return "Hello, TypeScript!";
}

getString().then((str) => {
    console.log("The string is:", str);
});`} />
                </li>
            </ul>
    </div>
    )
}

export default FunctionReturningPromises;