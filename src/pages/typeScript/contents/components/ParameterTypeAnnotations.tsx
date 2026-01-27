import CodeBlock from "../../../../components/CodeBlock";

const ParameterTypeAnnotations = () => {
    return (
        <div className="mt-20">
            <h3>a. Parameter Type Annotations</h3>
            <ul>
                <li>When you define a function, you can specify the types of its parameters.</li>
                <li>This helps ensure that the function is called with the correct type of arguments.</li>
                <li className="mt-6"><span className="stress">Example:</span>
                <CodeBlock code={`function greet(name: string) {
    console.log('Hello, ' + name + '!');
}

greet("Harry Potter");`} />
                </li>
            </ul>
        </div>
    )
}

export default ParameterTypeAnnotations;