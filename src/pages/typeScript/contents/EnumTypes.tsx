import LineBreak from "../../../components/LineBreak";

const EnumTypes = () => {
    return (
        <div className="mt-40">
            <h2 className="title">13. Enum Types</h2>

            <ul>
                <li>Enums (short for Enumerations) are a way to define a set of named constants.</li>
                <li>They provide a way to group related values together and give them meaningful names.</li>
                <li className="mt-6"><span className="stress">Example 1 (Numberic Enum):</span>
                <pre><code className="code-block">{`enum Direction {
    Up,
    Down,
    Left,
    Right
}

let move: Direction = Direction.Up;
console.log("Move Direction: " + move); // 0
move = Direction.Left;
console.log("Move Direction: " + move); // 2`}</code></pre>
                </li>

                <LineBreak />
                <li className="mt-6"><span className="stress">Example 2 (String Enum):</span>
                <pre><code className="code-block">{`enum Role {
    Admin = "admin",
    Student = "student"
}

let userRole: Role;
userRole = Role.Admin;
console.log("User Role: " + userRole); // "admin"

userRole = Role.Student;
console.log("User Role: " + userRole); // "student"

// userRole = "guest"; // This will cause a TypeScript error`}</code></pre></li>

                <li className="mt-20"><span className="stress">Pros of Enums:</span></li>
                <ul>
                    <li>Provide a clear and descriptive way to represent a set of related values.</li>
                    <li>Can be useful when interacting with non-TS code</li>
                </ul>

                <li className="mt-8"><span className="stress">Cons of Enums:</span></li>
                <ul>
                    <li>Enums add extra code to your JavaScript output, which can increase the size of your codebase.</li>
                    <li>Runtime performance can be affected due to the additional code.</li>
                    <li>Can behave unexpectedly when transpiled to JavaScript.</li>
                    <li>Less flexible compared to other alternatives like union types.</li>
                </ul>
            </ul>

            <p className="stress">Unlike other types, enums are a feature added by TypeScript and do not exist in plain JavaScript. This is not a type-level addition to JS but something added to the language and runtime.</p>
        </div>
    )
}

export default EnumTypes;