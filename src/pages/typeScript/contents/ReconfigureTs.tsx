const ReconfigureTs = () => {
    return (
        <>
            <div>
            <h2 className="title">6. Reconfiguring tsconfig.json & updating package.json</h2>
            <p>Update the configuration as shown below:</p>
            <ul>
                <li className="mt-6">Reconfigure tsconfig.json <code className="code-block fw-600">"noEmitOnError": true</code> on <code className="code-block fw-600">compilerOptions</code></li>
                <li className="mt-6">Update package.json to add script to build & watch build. In the scripts section, add:
                    <ul>
                        <li><code className="code-block fw-600">"build": "tsc"</code></li>
                        <li><code className="code-block fw-600">"dev": "tsc --watch"</code></li>
                    </ul>
                </li>
            </ul>
        </div>
        </>
    )
}

export default ReconfigureTs;

