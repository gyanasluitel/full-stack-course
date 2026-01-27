import CodeBlock from "../../../../components/CodeBlock"
import TypeVsInterface from "./TypeVsInterface"

const ObjectAndTypeAliases = () => {
    return (
        <div className="mt-40">
            <h2 className="title">10. Objects and Type Aliases</h2>

            <p>Besides the primitive types, one of the most common type of data in TypeScript is the <span className="stress">object</span>. Objects allow you to group related data and functions together.</p>
            <p>There are different ways to define objects and type aliases in TypeScript:</p>

            <InlineObjectTypes />

            <TypeAlias />
            
            <Interface />
            
            <TypeVsInterface />
        </div>
    )
}

const InlineObjectTypes = () => {
    return (
        <div>
            <h3 className="title">a. Inline Object Types</h3>
                <p>You can define the shape of an object using an inline type annotation.</p>
                <p className="stress">Example:</p>

                <CodeBlock code={`const printUser = (user: { name: string; age: number, isTeacher?: boolean}) => {
    console.log('My name is ' + user.name);

    console.log('I am ' + user.age + ' years old');

    console.log('I am a ' + (user.isTeacher ? "teacher" : "student"));
}

printUser({ name: "Gyanas", age: 50});`}/>
        </div>
    )
}

const TypeAlias = () => {
    return (
        <div className="mt-30">
            <h3 className="title">b. Type Aliases</h3>
            <p>Type aliases allow you to create a new name for a type, making your code more readable and reusable. Doing this allows us to use the same type more than once and refer to it by a single name.</p>
            <p className="stress">Example:</p>

            <CodeBlock code={`type User = {
    name: string;
    age: number;
    isTeacher?: boolean;
}

const printUser = (user: User) => {
    console.log("My name is " + user.name);

    console.log("I am " + user.age + " years old");

    console.log("I am a " + (user.isTeacher ? "teacher" : "student"));
}

printUser({ name: "Gyanas", age: 50, isTeacher: true });`} />
        </div>
    )
}

const Interface = () => {
    return (
        <div className="mt-30">
            <h3 className="title">c. Interfaces</h3>
            <p>Interfaces are another way to define the shape of an object in TypeScript. They are similar to type aliases but have some additional features, such as the ability to extend other interfaces.</p>
            <p className="stress">Example:</p>

            <CodeBlock code={`interface User {
    name: string;
    age: number;
    isTeacher?: boolean;
}

const printUser = (user: User) => {
    console.log("My name is " + user.name);

    console.log("I am " + user.age + " years old");

    console.log("I am a " + (user.isTeacher ? "teacher" : "student"));
}

printUser({ name: "Gyanas", age: 50, isTeacher: true });`} />
        </div>
    )
}

export default ObjectAndTypeAliases;