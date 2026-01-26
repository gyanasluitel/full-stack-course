const TypeScriptBenefits = () => {
    return (
        <>
            <h2 className="title">2. What TypeScript Adds</h2>
            <div>
                <ul>
                    <li>TypeScript is <span className="stress">JavaScript + Types</span></li>
                    <li className="mt-6">Alternative to JS (superset of JavaScript). Extends JS by providing new features & syntax. With TS, you get:
                        <ul>
                            <li>Static type checking (before runtime)
                                <ul>
                                    <li>Once a type of variable is declared, cannot change it later. Example, <code className="code-block fw-600">let age: number = 25;</code>cannot be changed to a string later.</li>
                                    <li>Error checking & debugging is easier. Forces to write clean code</li>
                                    <li>Helps catch errors early during development rather than at runtime.</li>
                                </ul>
                            </li>
                            <li>Better IDE Support (autocomplete, refactoring)</li>
                            <li>Self documenting code</li>
                            <li>Safer refactors</li>
                            <li>We can use modern features (like arrow functions, let, const) that may not be directly supported in all browsers by compiling down to compatible JavaScript (older JS that browser understand)
                                <ul>
                                    <li>It is similar to Babel compiler that allows us to use modern JS features</li>
                                </ul>
                            </li>
                            <li>Supports extra features (like generics, interfaces, generics) which we will explore later</li>
                        </ul>
                    </li>
                    <li className="mt-6">The key mindset you need to have is <span className="stress">TypeScript helps you catch bugs earlier, not write more code</span></li>
                    <li className="mt-6"><span className="stress">Thing to Note:</span> Browser do not understand TypeScript directly, so it needs to be compiled to JavaScript before running in the browser.</li>
                </ul>
            </div>
            

        </>
    )
};

export default TypeScriptBenefits;