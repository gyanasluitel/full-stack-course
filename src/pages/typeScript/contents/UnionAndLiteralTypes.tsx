import CodeBlock from "../../../common/CodeBlock"

const UnionAndLiteralTypes = () => {
    return (
        <div className="mt-40">
            <h2 className="title">12. Union, Type Narrowing and Literal Types</h2>

            <div>
                <UnionTypes />
                
                <TypeNarrowing />

                <LiteralTypes />
            </div>
        </div>
    )
}

const UnionTypes = () => {
    return (
        <div>
            <h3 className="title">a. Union Types</h3>
                <ul>
                    <li>Value can be one of several types.</li>
                    <li>Union types allow a variable to hold more than one type.</li>
                    <li>You can use the pipe symbol <code className="code-block fw-600">"|"</code>to construct a union type.</li>
                    <li className="mt-6"><span className="stress">Example:</span>

                    <CodeBlock code={`let id: number | string;

id = 101;
console.log("ID as number: " + id);

id = "202A";
console.log("ID as string: " + id);`} />
                    </li>
                </ul>
        </div>
    )
};

const TypeNarrowing = () => {
    return (
        <div className="mt-30">
            <h3 className="title">b. Type Narrowing</h3>
                <ul>
                    <li>Type narrowing is the process of refining a union type to a more specific type.</li>
                    <li>This is typically done using conditional statements to check the type of a variable at runtime.</li>
                    <li className="mt-6"><span className="stress">Example:</span>

                    <CodeBlock code={`function printId(id: number | string) {
    if (typeof id === "string") {
        console.log(id.toUpperCase())
    } else {
        console.log(id);
    }
}

printId("abc123");

printId(456);
`} />
                    </li>
                </ul>
        </div>
    )
}

const LiteralTypes = () => {
    return (
        <div className="mt-30">
            <h3 className="title">c. Literal Types</h3>
                <ul>
                    <li>Literal types allow you to specify exact values a variable can hold.</li>
                    <li>This is useful for defining variables that should only accept specific string or numeric values.</li>
                    <li className="mt-6"><span className="stress">Example:</span>

                    <CodeBlock code={`type Direction = "up" | "down" | "left" | "right";

function move(direction: Direction) {
    console.log("Moving " + direction);
}

move("up"); // Valid

move("down"); // Valid

move("forward"); // Error: Argument of type '"forward"' is not assignable to parameter of type 'Direction'.`} />
                    </li>
                </ul>
        </div>
    )
}

export default UnionAndLiteralTypes;