import CodeBlock from "../../../components/CodeBlock";

const FirstElementOfArray = () => {
    return (
            <div>

                {/* Write different functions to get the first element of an array of different types (number or string) */}
                <div>                    
                    <p className="stress">Let's consider the following example where we need to get the first element of an array of number:</p>

                    <CodeBlock code={`const getFirstElementOfTheArray = (arr: number[]) => {
    return arr[0];
}

const numbers = [10, 20, 30];
const firstNumber = getFirstElementOfTheArray(numbers);
console.log(firstNumber); // Output: 10`} />

                <p className="stress">Now, what if we want to get the first element of an array of strings?</p>

                <CodeBlock code={`const strings = ['A', 'B', 'C'];
const firstString = getFirstElementOfTheArray(strings); // Error - we cannot assign string array to number array parameter`} />


            <p className="stress">Question: Should we write separate functions for different data types? Should we then again write, the following code to get the first element of the string array</p>
            
            <CodeBlock code={`const getFirstElementOfArrayString = (arr: string[]) => {
    return arr[0];
}

const firstStringWorking = getFirstElementOfArrayString(strings);
console.log(firstStringWorking); // Output: A`} />

            <p className="stress">Not an ideal approach because we are repeating the same code logic.</p>
                </div>
                
                {/* Combine using Union Type */}
                <div>
                    <p>Now let's combine the types into a single function using a <span className="stress">union type</span>.</p>

                    <CodeBlock code={`const getFirstElement = (arr: (string | number) []) => {
    return arr[0];
}

const newNumbers = [10, 20, 30];
const newStrings = ['A', 'B', 'C'];

const firstNum = getFirstElement(newNumbers); // Return type is string | number. We know it should be "number" as we passed number[]
const firstStr = getFirstElement(newStrings); // Return type is string | number. We know it should be "string" as we passed string[]

console.log(firstNum); // Output: 10
console.log(firstStr); // Output: A`} />

                    <p>The problem with the above approach is that we know when we pass array of number, it should return number and when we pass array of string, it should return string. 
                        But the return type is <code className="code-block fw-600">string | number</code> in both cases.
                    </p>
                </div>

                {/* Combine using any */}
                <div>
                    <p>Now let's use <code className="code-block fw-600">any</code> to combine it into a single function.</p>

                    <CodeBlock code={`const getFirstElement = (arr: any[]) => {
    return arr[0];
}

const newNumbers = [10, 20, 30];
const newStrings = ['A', 'B', 'C'];

const firstNum = getFirstElement(newNumbers); // Return type is any
const firstStr = getFirstElement(newStrings); // Return type is any

console.log(firstNum); // Output: 10
console.log(firstStr); // Output: A`} />

                    <p>But the problem with using <code className="code-block fw-600">any</code> is that we lose type safety. The return type is <code className="code-block fw-600">any</code>, and we don't get the benefits of TypeScript's type checking.</p>

                </div>

                <p>So what is a good approach? <span className="stress">Using Generics</span></p>
            </div>
    )
}

const GenericFunction = () => {
    return (
        <div>
            <h2 className="title">a. Generic & Generic Function</h2>

            <p>Solving the above problem using generics:</p>

            <CodeBlock code={`const getFirstElement = <T>(arr: T[]) => {
    return arr[0];
}

const numbers = [10, 20, 30]; // This is an array of numbers
const firstNumber = getFirstElement(numbers); // If you hover over the function, you'll see that TypeScript infers T as number

console.log(firstNumber); // Output: 10

const strings = ['A', 'B', 'C'];
const firstString = getFirstElement(strings); // If you hover over the function, you'll see that TypeScript infers T as string

console.log(firstString); // Output: A`} />

            <div>
                <p>TS can <span className="stress">infer the return type</span> based on what you pass to the function. But you can also <span className="stress">explicitly specify the type</span> if needed or TS fails to infer.</p>
                
                <div>
                    <p className="stress">Example 1: Consider the updated code example:</p>
                    <CodeBlock code={`const getFirstElement = <T>(arr: T[]) => {
    return arr[0];
}

const numbers = [10, 20, 30]; // This is an array of numbers
const firstNumber = getFirstElement<number>(numbers);

console.log(firstNumber); // Output: 10

const strings = ['A', 'B', 'C'];
const firstString = getFirstElement<string>(strings);

console.log(firstString); // Output: A`} />
                
                    <p>In the above code, we wrote <code className="code-block fw-600">{`<number>`} </code>or <code className="code-block fw-600">{`<string>`} </code>to explicitly specify the type parameter.</p>
                </div>

                <div>
                    <p className="stress">Example 2 - Example of explicitly specifying the generic type:</p>

                    <CodeBlock code={`const input = document.querySelector(".input");
input?.value; // Property 'value' does not exist on type 'Element'`} />

                    <p>But we know that it is an <span className="stress">input</span> element, so we can specify the type explicitly:</p>

                    <CodeBlock code={`const input = document.querySelector<HTMLInputElement>(".input");
input?.value; // No error. This will work`} />


                    <p className="stress">Example 3 - Type assertion using <code className="code-block fw-600">as</code> keyword</p>

                    <p>Instead of explicitly specifying the generic type here, we can also use the <code className="code-block fw-600">as</code> keyword for type assertion.</p>
                    <CodeBlock code={`const input = document.querySelector(".input") as HTMLInputElement;
input?.value; // No error. This will work`} />
            </div>
            </div>
        </div>
    )
}

const GenericsExampleWithArrayMapFunction = () => {
    return (
            <div>
                <p className="stress">Example 4 - Generics in array map</p>

                <CodeBlock code={`const a = [10, 20 , 30];

// If you hover over the map function, you'll see that it takes in number and returns numbers
a.map((x) => {
    return x * 100; 
})`} />
            </div>
    )
}

const GenericsExampleWithMapDataStructure = () => {
    return (
        <div>
            <p className="stress">Example 5 - Generics Example with Map</p>
            <CodeBlock code={`const map = new Map<string, number>();

map.set("One", 1);
map.set("Two", 2);

const mapStudentIdWithSubjectAndGrade = new Map<number, { subject: string, grade: string} []>();
mapStudentIdWithSubjectAndGrade.set(101, [{ subject: "Math", grade: "A" }, { subject: "Science", grade: "B+" }]);
mapStudentIdWithSubjectAndGrade.set(102, [{ subject: "Math", grade: "B" }, { subject: "Science", grade: "A-" }]);


console.log(mapStudentIdWithSubjectAndGrade);`} />

            <p className="stress">Now check the output in the console to visualize the data structure.</p>
        </div>
    )
}

const GenericTypeAndInterface = () => {
    return (
        <div>
            <h2 className="title">b. Generic Interface/Type</h2>

            <p>Generics can also be used with interfaces and types to create reusable data structures.</p>

            <p>Consider the following example of an <span className="stress">API response interface:</span></p>

            <div>
                <CodeBlock code={`interface ApiResponse {
    data: any;
    status: number;
    isError?: boolean;
}

const response : ApiResponse = {
    data: {
        name: "Gyanas",
        age: 50
    },
    status: 200,
}
`}  />
                <p>The above example is modeled after a API response with three properties: <code className="code-block fw-600">data</code>, <code className="code-block fw-600">status</code>, and <code className="code-block fw-600">isError</code>.</p>
                <p className="But there is a problem. What?"></p>
                <p>The problem with the above interface is that <span className="stress">the data is of any type.</span> However, We want data to be of specific type because different API responses will have different but specific data types.</p>

                <div>
                    <p>To solve this problem, we can make the interface generic by introducing a type parameter <code className="code-block fw-600">T</code> that represents the type of the data property.</p>

                    <CodeBlock code={`interface ApiResponse<T> {
    data: T;
    statusCode: number;
    isError?: boolean;
}

interface UserData {
    name: string;
    age: number;
}

const userResponse: ApiResponse<UserData> = {
    data : {
        name: "Gyanas",
        age: 50
    },
    statusCode: 200,
}

console.log(userResponse);`} />

                    <p>The above code demonstrates how we can use generics to create a flexible and type-safe API response interface. In the above example, the <code className="code-block fw-600">ApiResponse</code> interface is generic, and we specify the type of the <code className="code-block fw-600">data</code> property when we use the interface.</p>
                    <p>The above code shows an example of UserResponse when an API may return a user data. Let's expand this further to model an API Response of an API that may return us some vehicle data.
                         <span className="stress"> Add the following code after the above:</span>
                    </p>

                    <CodeBlock code={`type VehicleType = "car" | "bike";

interface VehicleData {
    name: string;
    type: VehicleType;
}

const vehicleResponse: ApiResponse<VehicleData> = {
    data: {
        name: "Rijan's i20",
        type: "car"
    },
    statusCode: 200,
}
`} />
                </div>

            </div>

            {/* Default type in generics */}
            <div>
                <h3 className="title">Default Type in Generics</h3>

                <p>You can also provide a default type for the generic type parameter. This default type will be used if no specific type is provided when the interface/type is used.</p>

                <CodeBlock code={`interface ApiResponse<T = {name: string}> {
    data: T,
    status: number,
    isError?: boolean
}

const defaultResponse : ApiResponse = {
    data: {
        name: "Gyanas",
        age: 50
    },
    status: 200 
}


const responseWithAge: ApiResponse<{ name: string; age: number }> = {
    data: {
        name: "Gyanas",
        age: 50
    },
    status: 200
}
`} />

            </div>
        </div>
    )
}

const GenericsTypeAdherence = () => {
    return (
        <div>
            <h2 className="title">c. Generic Type Adherence</h2>

            <ul>
                <li>Type adherence in TypeScript generic ensures that placeholder types (<code className="code-block fw-600">{`<T>`}</code>) conform to specific structures, constraints, or expected types at compile time, maintaining type safety in reusable code</li>
                <li>Constraints are enforced using the <code className="code-block fw-600">extends</code> keyword, (e.g., <code className="code-block fw-600">{`<T extends { id: number }>`}</code>), allowing, for example, functions to require specific properties while retaining flexibility.</li>
            </ul>

            <div>
                <p className="stress">Example - Generic Type Adherence using <code className="code-block fw-600">extends</code> keyword</p>

                <CodeBlock code={`interface ApiResponse<Data extends object> {
    data: Data,
    statusCode: number,
    isError?: boolean
}

const userResponse: ApiResponse<{name: string; age: number; type: string; wheels: number}> = {
    data: {
        name: "Gyanas",
        age: 50,
        type: "Human",
        wheels: 0
    },
    statusCode: 200
}

console.log(userResponse);

const stringResponse: ApiResponse<string> = { // This will give error as string is not extending object
    data: "This is a simple string response",
    statusCode: 200
}
`} />

                <p>In the above code, the <code className="code-block fw-600">ApiResponse</code> interface uses a generic type parameter <code className="code-block fw-600">Data</code> that extends <code className="code-block fw-600">object</code>. This means that any type used as <code className="code-block fw-600">Data</code> must be an object type.</p>
                <p> The <code className="code-block fw-600">userResponse</code> variable correctly uses an object type for <code className="code-block fw-600">Data</code>, while the <code className="code-block fw-600">stringResponse</code> variable causes a TypeScript error because <code className="code-block fw-600">string</code> is not an object type.</p>
            </div>
            
        </div>
    )
}

const Generics = () => {
    return (
        <div>
            <h2 className="title">14. Generics in TypeScript</h2>

            <div>
                <ul>
                    <li>Generics allows us to write reusable blocks of code that can be used with different types.</li>
                    <li>They provide a way to create components that work with a variety of data types while maintaining type safety.</li>
                    <li>Generics are defined using angle brackets <code className="code-block fw-600">&lt;&gt;</code>.</li>
                </ul>
            </div>

            {/* Get first element of an array example. */}
            <FirstElementOfArray />

            {/* Generic Function Example */}
            <GenericFunction />

            {/* Generics Example with Array map function */}
            <GenericsExampleWithArrayMapFunction />

            {/* Generics Example with Map Data Structure */}
            <GenericsExampleWithMapDataStructure />

            {/* Generic Interface/Type */}
            <GenericTypeAndInterface />

            <GenericsTypeAdherence />

            </div>
    )
}



export default Generics;