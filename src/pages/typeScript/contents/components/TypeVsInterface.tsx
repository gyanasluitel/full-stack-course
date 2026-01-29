import CodeBlock from "../../../../common/CodeBlock";

const TypeVsInterface = () => {
    return (
        <div className="mt-30">
            <h2 className="title">11. Type vs Interface</h2>
            <p>Both type aliases and interfaces can be used to define the shape of an object, but there are some differences between them:</p>
            <ul>
                <li><strong>Extensibility:</strong> Interfaces can be extended using the <code className="code-block code-block__light">extends</code> keyword, allowing you to create new interfaces based on existing ones. Type aliases cannot be extended in this way.
                    <ul>
                        <li className="mt-6"><span>Extending Interfaces: You can extend interfaces using the <span className="stress">extends</span> keyword.</span></li>
                        <li className="stress">Example: </li>
                        <CodeBlock code={`interface Vehicle {
    name: string;
}

interface Car extends Vehicle {
    wheels: number;
}

const myCar: Car = {
    name: "Toyota",
    wheels: 4
};

console.log("Vehicle Name: " + myCar.name);
console.log("Number of Wheels: " + myCar.wheels);`} />

                    <li className="mt-6"><span>Extending Types: We need to extend a type via <span className="stress">intersections (by using &)</span>.</span></li>
                    <li className="stress">Example: </li>

                    <CodeBlock code={`type Vehicle = {
    name: string;
}

type Car = Vehicle & {
    wheels: number;
}

const myCar: Car = {
    name: "Toyota",
    wheels: 4
};

console.log("Vehicle Name: " + myCar.name);
console.log("Number of Wheels: " + myCar.wheels);`} />
                    <pre><code className="code-block"></code></pre>
                    </ul>
                </li>
                <li><strong>Declaration Merging:</strong> Interfaces support declaration merging, meaning you can define the same interface multiple times, and TypeScript will merge them into a single interface. Type aliases do not support this feature.
                <ul>
                        <li className="mt-6">You can define the same interface multiple times, and TypeScript will merge them into a single interface.</li>
                        <li><span className="stress">Interface Declaration Merging Example: </span></li>

                        <CodeBlock code={`interface Vehicle {
    name: string;
}

interface Vehicle {
    wheels: number;
}

const myVehicle: Vehicle = {
    name: "Bike",
    wheels: 2
}

console.log("Vehicle Name: " + myVehicle.name);
console.log("Number of Wheels: " + myVehicle.wheels);`}/>


                <li><span className="stress">Type Merging Example:</span></li>
                <CodeBlock code={`type Vehicle = {
    name: string;
}

type Vehicle =  { // Duplicate identifier error
    wheels: number;
}`} />
                </ul>
                </li>
                

                <li><strong>Union and Intersection Types:</strong> Type aliases can represent union and intersection types, while interfaces cannot. (Will cover in section below)</li>
            </ul>
            <p><span className="stress">Note: </span>In general, use interfaces when you need to take advantage of their extensibility and declaration merging features. Use type aliases when you need to define complex types, such as union or intersection types.</p>
        </div>
    )
}

export default TypeVsInterface;
