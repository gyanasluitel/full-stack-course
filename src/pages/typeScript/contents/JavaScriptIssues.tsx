const JavaScriptIssues = () => {
    return (
        <>
            <h2 className="title">1. The Problem with JavaScript at Scale</h2>

            <div>
                <ul>
                    <li>JavaScript is dynamically typed - meaning types are determined at runtime and type of a variable can change depending on the value the variable holds.</li>
                        <ul>
                            <li>If you've done C programming, you know variables have fixed types. Example, <code className="code-block fw-600">int age = 25;</code></li>
                            <li>In JavaScript, you declare variable by simply doing <code className="code-block fw-600">let age = 25;</code></li>
                            <li>Let's say in our codebase we have the following code:
                                <pre>
                                    <code className="code-block fw-600">{`let age = 25;
age = "Hello"`}</code>
                                </pre>
                            </li>
                        </ul>

                    <li className="mt-6">JS allows <span className="stress">flexibility</span>, but leads to <span className="stress">unexpected bugs</span>. Increase in runtime errors - hard to debug.</li>
                    <li className="mt-6">As applications grow, <span className="stress">maintaining and understanding code</span> becomes challenging without strict typing.</li>
                    <li className="mt-6">Lack of type safety can lead to bugs that are <span className="stress">only caught during execution</span>, making development slower and more error-prone.</li>

                    <li className="mt-8"><span className="stress">Common JS issues:</span>
                        <ul>
                            <li><code className="code-block stress">undefined / null</code> runtime crashes</li>
                            <li>Wrong function arguments</li>
                            <li>Object shape mismatches</li>
                            <li>Refactoring can be a problem - you fear refactoring because you don't know what each value type is and how it works</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default JavaScriptIssues;