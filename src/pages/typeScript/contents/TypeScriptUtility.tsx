import CodeBlock from "../../../common/CodeBlock";

const Partial = () => {
    return (
        <div>
            <h3 className="title">a. Partial</h3>
            <p>{<code className="code-block fw-600">Partial{`<Type>`}</code>} makes all elements of the interface optional, so you can omit any elements freely.</p>
            
            <div>
                <CodeBlock code={`interface User {
    name: string;
    age: number;
}

const partialUser: Partial<User> = {
    name: "Gyanas"
}`} />
            <p>In the above example, the Partial utility type makes all properties of the User interface optional, allowing you to create an object with only some of the properties defined.</p>
            </div>
        </div>
    )
}


const Required = () => {
    return (
        <div>
            <h3 className="title">b. Required</h3>
            <p>{<code className="code-block fw-600">Required{`<Type>`}</code>} makes all elements of the interface required, so you must provide values for all elements.</p>

            <div>
                <CodeBlock code={`interface User {
    name: string;
    age: number;
    role?: string;
}

const requiredUser : Required<User> = {
    name: "Gyanas",
    age: 50,
    role: "student"
}

console.log(requiredUser);`} />

                <p>In the above example, the Required utility type makes all properties of the User interface required, so you must provide values for all properties when creating an object.</p>
            </div>
        </div>
    )
}

const Readonly = () => {
    return (
        <div>
            <h3 className="title">c. Readonly</h3>
            <p>{<code className="code-block fw-600">Readonly{`<Type>`}</code>} makes all elements of the interface read-only, so you cannot modify their values after initialization.</p>

            <div>
                <CodeBlock code={`interface Book {
    title: string;
    pages: number;
}

const bookOne: Readonly<Book> = {
    title: "Physics",
    pages: 250
}

bookOne.title = "Chemistry"; // Error: Cannot assign to 'title' because it is a read-only property.`} />

                <p>In the above example, the Readonly utility type makes all properties of the Book interface read-only, so you cannot modify their values after initialization.</p>
            </div>
        </div>
)}

const Record = () => {
    return (
        <div>
            <h3 className="title">d. Record</h3>
            <p>{<code className="code-block fw-600">Record{`<Keys, Type>`}</code>} constructs an object type whose property keys are Keys and whose property values are Type.</p>

            <div>
                <CodeBlock code={`type VehicleType = "car" | "bike";

interface VehicleData {
    name: string;
    type: VehicleType;
}

type User = "Rijan" | "Umesh";

const vehicles: Record<User, VehicleData> = {
    Rijan: {
        name: "i20",
        type: "car"
    },
    Umesh: {
        name: "Honda",
        type: "bike"
    }
}


console.log(vehicles);
`} />

                <p>In the above example, the Record utility type creates an object type where the keys are User and the values are of type VehicleData.</p>
            </div>
        </div>
    )
}

const Omit = () => {
    return (
        <div>
            <h3 className="title">e. Omit</h3>
            <p>{<code className="code-block fw-600">Omit{`<Type, Keys>`}</code>} constructs a type by removing the properties Keys (string literal or union of string literals) from Type.</p>

            <div>
                <CodeBlock code={`interface Person {
    name: string;
    age: number;
    role: string;
}

const omitRoleUser: Omit<Person, "role"> = {
    name: "Umesh",
    age: 16
}

console.log(omitRoleUser);
`} />
                <p>In the above example, the Omit utility type creates a new type by excluding the role property from the Person interface.</p>
            </div>
            </div>
    )
}

const Pick = () => {
    return (
        <div>
            <h3 className="title">e. Pick</h3>
            <p>{<code className="code-block fw-600">Pick{`<Type, Keys>`}</code>} constructs a type by picking the set of properties Keys (string literal or union of string literals) from Type.</p>
            <div>
                <CodeBlock code={`interface Person {
    name: string;
    age: number;
    role: string;
}

const pickedUser: Pick<Person, "name" | "age"> = {
    name: "Gyanas",
    age: 50
}

console.log(pickedUser);

const pickedUser2: Pick<Person, "name" | "role"> = {
    name: "Rijan",
    role: "admin",
    age: 22 // Error: Object literal may only specify known properties, and 'age' does not exist in type 'Pick<Person, "name" | "role">'.
}

`} />
            <p>In the above example, the Pick utility type creates a new type by selecting only the name and age properties from the Person interface.</p>
            </div>
            </div>
    )
}

const TypeScriptUtilities = () => {
    return (
        <div>
            <h2 className="title">15. Typescript Utilities</h2>

            <Partial />

            <Required />

            <Readonly />

            <Record />

            <Omit />

            <Pick />
        </div>
    )
}

export default TypeScriptUtilities;