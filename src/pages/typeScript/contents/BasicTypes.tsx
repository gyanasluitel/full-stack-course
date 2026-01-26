const BasicTypes = () => {
    return (
        <>
            <div>
                <h2 className="title">7. Basic Types</h2>

                <div className="mt-20">
                    <h3>a. Primitive Types</h3>
                    <ul>
                        <li>JS has primitive types, like <code className="code-block fw-600">string</code>, <code className="code-block fw-600">number</code>, <code className="code-block fw-600">boolean</code>, <code className="code-block fw-600">null</code>, and <code className="code-block fw-600">undefined</code>.</li>
                        <li className="mt-6">In TS, we can explicitly declare variable types using type annotations.</li>
                        <li className="mt-6"><span className="stress">Example:</span>
                            <pre>
                                <code className="code-block">{`let name: string = "Gyanas";
let age: number = 50;
let isStudent: boolean = false;`}
                                </code>
                                </pre>
                        </li>
                    </ul>
                </div>

                <div className="mt-20">
                    <h3>b. Arrays</h3>
                    <ul>
                        <li className="mt-6"><code className="code-block">let scores: number[] = [90, 85, 88];</code></li>
                        <li className="mt-6"><code className="code-block">let names: string[] = ["Asmin", "Umesh", "Priti"];</code></li>
                    </ul>
                </div>

                <div className="mt-20">
                    <h3>c. Any (Avoid This)</h3>
                    <ul>
                        <li className="mt-6"><code className="code-block">let value: any = 42;</code></li>
                        <li className="mt-6"><code className="code-block">value = "Now I'm a string";</code> </li>
                    </ul>
                    <p><code className="code-block fw-600">any</code> disables TypeScript. Allowed, but don't do this. This will exactly be like JS, which we want to avoid.</p>
                </div>
            </div>
        </>
    )
}

export default BasicTypes;