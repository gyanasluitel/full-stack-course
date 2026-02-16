import CodeStep from "src/common/CodeStep";
import ListItem from "src/common/ListItem";

const ProjectSetup = () => {
    return (
        <div className="mt-40">
            <CodeStep>
                <h3>Step 2: Set up a new React project</h3>
            </CodeStep>

            <ul>
                <ListItem>Create a new React project using Vite build tool: <code className="code-block fw-600">npm create vite@latest budget-tracker-app -- --template react-ts</code></ListItem>
                <ListItem>Navigate to the project directory: <code className="code-block fw-600">cd budget-tracker-app</code></ListItem>
                <ListItem>Open the repository in <code className="code-block fw-600">VS Code</code></ListItem>
                <ListItem>Run the server: <code className="code-block fw-600">npm run dev</code></ListItem>
            </ul>
        </div>
    )
}


export default ProjectSetup;