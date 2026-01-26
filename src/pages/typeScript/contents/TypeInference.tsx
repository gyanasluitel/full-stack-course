const TypeInference = () => {
    return (
        <>
            <div>
                <h2 className="title">8. Type Inference (Let TS Work for You)</h2>
                <p>TypeScript can often infer the type of a variable based on its initial value, so you don't always need to explicitly annotate types.</p>
                <ul>
                    <li><code className="code-block">let count = 10;</code> // inferred as number</li>
                    <li><code className="code-block">count = "hi"</code> // error</li>
                </ul>
            </div>
        </>
    )
}

export default TypeInference;