import CodeBlock from "src/common/CodeBlock";
import ListItem from "src/common/ListItem";

const WritingJsx = () => {
    return (
        <div>
            <h2>Writing JSX</h2>

            <p>So, the previous code where we wrote React components using <code className="code-block fw-600">React.createElement</code> calls can be simplified using JSX. The previous code was difficult, hard to read and write. But we can write it much simpler using JSX.</p>

            <p className="stress">JSX is a syntax extension for JavaScript that looks similar to HTML. It allows you to write HTML-like code within your JavaScript files, which React then transforms into JavaScript objects.</p>

            <p>In TypeScript, we call it TSX, which is then compiled to JavaScript.</p>

            <div>
                <p className="stress">Let's rewrite the previous example using JSX.</p>

                <p>Let's first install necessary things</p>
                <ul>
                    <ListItem>Install a build tool called Vite
                        <ul>
                            <ListItem>Vite is a modern build tool that provides a fast development environment for building web applications, including React apps.</ListItem>
                            <ListItem>It offers features like hot module replacement (HMR) for quick feedback during development, optimized builds for production, and support for various frontend frameworks.</ListItem>

                            <ListItem><code className="code-block fw-600">npm install -D vite @vitejs/plugin-react</code></ListItem>
                        </ul>
                    </ListItem>

                    <ListItem>Create a vite.config.ts file in the root of your project and add the following configuration:
                        <CodeBlock code={`import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});`} />
                    </ListItem>

                    <ListItem>Install React, with <code className="code-block fw-600">npm install react react-dom</code></ListItem>
                    <ListItem>Install TypeScript types for React with <code className="code-block fw-600">npm install --save-dev @types/react @types/react-dom</code></ListItem>

                    <ListItem>Update the <code className="code-block fw-600">package.json</code> to add a dev script:
                        <CodeBlock code={`"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}`} />
                    </ListItem>

                    <ListItem>Also add <code className="code-block fw-600">{`"type": "module"`}</code> to package.json as Common.js deprecated.</ListItem>

                    <p>package.json should look like: </p>

                    <CodeBlock code={`{
  "devDependencies": {
    "@types/react": "^19.2.10",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^5.1.2",
    "vite": "^7.3.1"
  },
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^19.2.4",
    "react-dom": "^19.2.4"
  },
  "type": "module"
}
`} />

                    <ListItem>Create a tsconfig.json file in the root of your project and add the following configuration:
                        <CodeBlock code={`{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "jsx": "react-jsx",
    "moduleResolution": "Node",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["./**/*"]
}
`} />
                    </ListItem>

                    <ListItem>Create an empty <code className="code-block fw-600">App.tsx</code> file in the root of your project.</ListItem>

                    <ListItem>In the index.html file, comment the scripts code and add the following line to include the App.tsx file: <code className="code-block fw-600">{`<script type="module" src="./App.tsx"></script>`}</code></ListItem>

                    <ListItem>Now, in the <code className="code-block fw-600">App.tsx</code> file, add the following code:
                        <CodeBlock code={`import { createRoot } from "react-dom/client";
import Momo from "./Momo";

const App = () => {
    return (
        <div>
            <Momo meat="Pork" description="Tasty and Juicy Pork Momo" />
            <Momo meat="Chicken" description="Spicy and Crunchy Chicken Momo" />
            <Momo meat="Veggie" description="Healthy and Flavorful Veggie Momo" />
        </div>
    );
}

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
root.render(<App />);`} />
                    </ListItem>

                    <ListItem>Create a new file called <code className="code-block fw-600">Momo.tsx</code> in the root of your project and add the following code:
                    
                        <CodeBlock code={`interface MomoProps {
    meat: string;
    description: string;
}

const Momo = (props: MomoProps) => {
    return (
        <div className="momo-bg">
            <h1>Delicious {props.meat} Momo!</h1>
            <p>{props.description}</p>
        </div>
    )
}

export default Momo;`} />
                    </ListItem>
                </ul>
            </div>
        </div>
    )
}

export default WritingJsx;