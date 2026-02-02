import ClassActivity from "src/common/ClassActivity";
import CodeBlock from "src/common/CodeBlock";
import ListItem from "src/common/ListItem";
import NavButton from "src/common/NavButton";
import QuestionBox from "src/common/QuestionBox";
import RepoLink from "src/common/RepoLink";
import SummaryBox from "src/common/SummaryBox";

const FirstReactApp = () => {
    return (
        <div className="container">
            <NavButton to="/react-tutorial" text="React Tutorial" />
            <h1>Building your First React App: Simple Counter App</h1>

            <p>Let's build a simple counter app using React.</p>

            <ul>
                <ListItem>Create a new React project using Vite build tool: <code className="code-block fw-600">npm create vite@latest simple-counter -- --template react-ts</code></ListItem>
                <ListItem>Navigate to the project directory: <code className="code-block fw-600">cd simple-counter</code></ListItem>
                <ListItem>Open the repository in <code className="code-block fw-600">VS Code</code></ListItem>
                <ListItem>Run the server: <code className="code-block fw-600">npm run dev</code></ListItem>
            </ul>

            <p>Now, I will modify the existing files to implement the counter functionality.</p>
            <ul>
                <ListItem>First thing I will do is create a <code className="code-block fw-600">reset.css</code> file and add the following code to it:
                    <CodeBlock code={`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}`} />                
                </ListItem>
                <ListItem>Import the reset.css in the <code className="code-block fw-600">main.tsx</code> file.</ListItem>
                <ListItem>What <code className="code-block fw-600">reset.css</code> does and why it's important:
                    <ul>
                        <ListItem>reset.css is used to reset the default styling provided by browsers. Different browsers have different default styles for HTML elements, which can lead to inconsistencies in the appearance of a web page across different browsers.</ListItem>
                        <ListItem> By using a reset.css file, we can ensure that all browsers start with the same baseline styles, making it easier to apply our own custom styles consistently.</ListItem>
                    </ul>
                </ListItem>

                <ListItem>I will update the index.css file:
                    <CodeBlock code={`:root {
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color: rgba(255, 255, 255, 0.87);

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}
`} />
                </ListItem>

                <ListItem>Now, I will modify the <code className="code-block fw-600">App.tsx</code> file to implement the counter functionality:
                    <ul>
                        <ListItem>First, remove everything in the <code className="code-block fw-600">App.tsx</code> file and start from scratch.</ListItem>

                        <ListItem>Implement a counter using React's useState hook.
                        <CodeBlock code={`import { useState } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className='counter-container'>
        <p>Count: {count}</p>
    </div>
  )
}

export default App;
`} /></ListItem>
                    </ul>
                </ListItem>
            </ul>

            <div>
                <h2>State</h2>

                <ul>
                    <ListItem>State is a way to <span className="stress">store and manage data that can change over time in a React component.</span></ListItem>
                    <ListItem>When <span className="stress">state changes</span>, the <span className="stress">component re-renders</span> to reflect the new state.</ListItem>
                    <ListItem>What is <span className="stress">useState</span>?
                        <ul>
                            <ListItem><span className="code-block fw-600">useState</span> is a built-in React hook that allows you to add state to functional components.</ListItem>
                            <ListItem>It returns an array with two elements: <span className="stress">the current state value</span> and a <span className="stress">function to update that state</span>.</ListItem>
                        </ul>
                    </ListItem>
                    <ListItem>In our counter example, we used <span className="stress">useState</span> to create a state variable called count and a function called setCount to update it.</ListItem>
                    <ListItem>Initially, count is set to 0. When we want to change the count (for example, when a button is clicked), we call setCount with the new value, and React updates the UI accordingly.</ListItem>
                </ul>
            </div>

            <div>
                <p className="stress">Let's update the code a little bit.</p>
                <ul>
                    <ListItem>Create a component called <code className="code-block fw-600">Counter</code> to encapsulate the counter UI.</ListItem>
                    <ListItem>In the <code className="code-block">src</code>, create a folder called <code className="code-block fw-600">components</code> directory, create a new file called <code className="code-block fw-600">Counter.tsx</code>.</ListItem>

                    <ListItem>The <span className="stress">Counter.tsx</span> will have the following code:
                        <CodeBlock code={`interface CounterProps {
    count: number;
}

// This is a stateless functional component that displays the current count
const Counter = ({ count }: CounterProps) => {
    return (
        <div className="counter">
            <h1 className="counter-title">Counter</h1>
            <p className={"counter-display " +  (count % 2 === 0 ? 'counter-display__even' : 'counter-display__odd')}>{count}</p>
        </div>
    )
}

export default Counter;`}  />
                    </ListItem>

                    <ListItem>In the above code, I used conditional class names to style the count differently based on whether it is even or odd.</ListItem>

                    <ListItem>Now, update the <code className="code-block fw-600">App.tsx</code> file to use the <code className="code-block fw-600">Counter</code> component and manage the state there.
                            <CodeBlock code={`import { useState } from 'react';
import './App.css'
import Counter from './components/Counter';

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className='counter-container'>
      <Counter count={count} />
    </div>
  )
}

export default App;
`}  />
                    </ListItem>

                    <ListItem>I will also update the <span className="stress">App.css</span> file to style the counter component.
                        <CodeBlock code={`#root {
  max-width: 1280px;
  margin: 0 auto;
}

.counter-container {
  display: flex;
  flex-direction: column;
  place-items: center;
  border: 2px solid #000000;
  padding: 20px 80px 20px 80px;
  border-radius: 20px;  
  background-color: rgb(44, 103, 179);
}

.counter {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
}

.counter-title {
  color: #fff;
  font-size: 3rem;
}

.counter-display {
  font-size: 5rem;
  color: rgb(225, 181, 70);
}

.counter-display__even {
  color: #00ff00;
}

.counter-display__odd {
  color: #ff0000;
}

.counter-buttons{
  margin-top: 40px;
}

.button {
  font-size: 2 rem;
  padding: 10px 20px;
  margin: 0 10px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background-color: #fff;
}`} />
                    </ListItem>
                </ul>
            </div>
            
            <div>
                <h2>Props</h2>             
                <ul>
                    <ListItem>Props (short for "properties") are a way to pass data from a parent component to a child component in React.</ListItem>
                    <ListItem>Props are read-only, meaning that a child component cannot modify the props it receives from its parent.</ListItem>
                    <ListItem>In our example, we created a <span className="stress">Counter</span> component that takes a prop called <span className="code-block fw-600">count</span>.</ListItem>
                    <ListItem>The parent component (<span className="stress">App</span>) passes the current value of the count state to the <span className="stress">Counter</span> component via props.</ListItem>
                    <ListItem>This allows the <span className="stress">Counter</span> component to display the current count without managing its own state.</ListItem>
                </ul>
            </div>

            <div>
                <h2>State vs Props</h2>
                <table className="comparison-table">
                    <thead>
                        <tr>
                            <th>Aspect</th>
                            <th>State</th>
                            <th>Props</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Definition</td>
                            <td>State is a built-in React object used to manage data that can change over time within a component.</td>
                            <td>Props are custom attributes passed from a parent component to a child component to provide data or configuration.</td>
                        </tr>
                        <tr>
                            <td>Mutability</td>
                            <td>State is mutable and can be changed using the setState function or the updater function returned by useState.</td>
                            <td>Props are immutable and cannot be changed by the child component receiving them.</td>
                        </tr>
                        <tr>
                            <td>Purpose</td>
                            <td>State is used to manage dynamic data that affects the component's rendering and behavior.</td>
                            <td>Props are used to pass data and configuration from parent to child components.</td>
                        </tr>
                        <tr>
                            <td>Component Type</td>
                            <td>State is typically used in class components and functional components with hooks.</td>
                            <td>Props are used in both class components and functional components.</td>
                        </tr>
                        <tr>
                            <td>Re-rendering</td>
                            <td>When state changes, the component re-renders to reflect the new state.</td>
                            <td>When props change (due to a parent re-rendering), the child component re-renders to reflect the new props.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div>
                <h2>Stateful Components</h2>
                <ul>
                    <ListItem>A stateful component is a React component that manages its own state using the useState hook (in functional components) or this.state (in class components).</ListItem>
                    <ListItem>Stateful components can update their state in response to user interactions, API calls, or other events, causing the component to re-render and reflect the updated state in the UI.</ListItem>
                    <ListItem>In our example, the <span className="stress">App</span> component is a stateful component because it uses the <span className="code-block fw-600">useState</span> hook to manage the <span className="code-block fw-600">count</span> state.</ListItem>
                </ul>
            </div>

            <div>
                <h2>Stateless Components</h2>
                <ul>
                    <ListItem>A stateless component is a React component that does not manage its own state and relies solely on props for data.</ListItem>
                    <ListItem>Stateless components are typically functional components that receive data and callbacks via props and render UI accordingly.</ListItem>
                    <ListItem>In our example, the <span className="stress">Counter</span> component is a stateless component because it receives the <span className="code-block fw-600">count</span> value as a prop and does not manage any state internally.</ListItem>
                </ul>
            </div>

            <div>
                <h2>Stateful vs Stateless Components</h2>
                <table className="comparison-table">
                    <thead>
                        <tr>
                            <th>Aspect</th>
                            <th>Stateful Components</th>
                            <th>Stateless Components</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Definition</td>
                            <td>Stateful components manage their own state using useState or this.state.</td>
                            <td>Stateless components do not manage state and rely solely on props.</td>
                        </tr>
                        <tr>
                            <td>State Management</td>
                            <td>Can update and manage internal state.</td>
                            <td>Cannot manage state; they only render based on props.</td>
                        </tr>
                        <tr>
                            <td>Re-rendering</td>
                            <td>Re-renders when their state changes.</td>
                            <td>Re-renders when their props change.</td>
                        </tr>
                        <tr>
                            <td>Complexity</td>
                            <td>Typically more complex due to state management.</td>
                            <td>Generally simpler and easier to test.</td>
                        </tr>
                        <tr>
                            <td>Use Cases</td>
                            <td>Used for components that need to manage dynamic data or user interactions.</td>
                            <td>Used for presentational components that simply display data.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div>
                <h2 className="stress">Continue coding example...</h2>
                <p className="stress">Now let's focus on adding some buttons to update the counter.</p>

                <p>Add a button that will increase the counter value by double. Update the <code className="code-block fw-600">App.tsx</code> file:
                            <CodeBlock code={`import { useState } from 'react';
import './App.css'
import Counter from './components/Counter';

function App() {
  const [count, setCount] = useState<number>(0);

  const handleDoubleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
  }

  return (
    <div className='counter-container'>
      <Counter count={count} />

      <div className="counter-buttons">
        <button className='button' onClick={handleDoubleClick}>Add Twice (++)</button>
      </div>
    </div>
  )
}

export default App;`} />
                    </p>

                    <QuestionBox>
                        <p className="stress">Question: What will be the value of the count?</p>
                        <p><span className="stress">Answer:</span> The value of count will increase by 1 only once, not twice as expected. This is because React batches state updates for performance optimization. When <code className="code-block fw-600">setCount</code> is called multiple times in the same event handler, React only applies the last update.</p>
                    </QuestionBox>

                <p className="stress">To fix this and ensure that the count increases by 2, we can use the functional form of the state updater function:</p>
                <CodeBlock code={`import { useState } from 'react';
import './App.css'
import Counter from './components/Counter';

function App() {
  const [count, setCount] = useState<number>(0);

  const handleDoubleClick = () => {
    setCount(count => count + 1);
    setCount(count => count + 1);
  }

  return (
    <div className='counter-container'>
      <Counter count={count} />

      <div className="counter-buttons">
        <button className='button' onClick={handleDoubleClick}>Add Twice (++)</button>
      </div>
    </div>
  )
}

export default App;`} />

                <ul>
                    <ListItem>In the updated code, the functional form of the state updater is used to ensure each update is based on the most recent state.</ListItem>
                    <ListItem>It takes a function as an argument, which receives the previous state and returns the new state.</ListItem>
                    <ListItem>This way, when the button is clicked, the count will correctly increase by 2.</ListItem>
                </ul>
                <p>By using the <span className="stress">functional form of the state updater</span>, each update correctly increments the count based on its most recent value, ensuring the <span className="stress">count increases by 2</span> as expected.</p>
                
                <ul>
                    <ListItem>When react applies batch updates, it combines multiple state updates into a single re-render for performance optimization. </ListItem>
                    <ListItem>In the previous example (the buggy one), React only applied the last state update, so the count only increased by 1 instead of 2. </ListItem>
                    <ListItem>In the correct example, using the functional form of the state updater ensures each update is applied based on the most recent state, resulting in the count increasing by 2 as expected.</ListItem>
                </ul>

                <SummaryBox>
                    <p><span className="stress">To summarize,</span> when updating state multiple times in a single event handler, using the functional form of the state updater ensures that each update is based on the most recent state value. This prevents issues with batched updates and ensures that all intended state changes are applied correctly.</p>
                </SummaryBox>

                <p>Now I want to create a button component similar to the Counter component.</p>
                <ul>
                    <ListItem>Create a new file called <span className="stress">Button.tsx</span> in the components directory.
                    <CodeBlock code={`interface ButtonProps {
    text: string;
    onClick: () => void;
}

const Button = ({ text, onClick } : ButtonProps) => {
    return (
        <button className="button" onClick={onClick}>
            {text}
        </button>
    )
}

export default Button;`}  />
                    </ListItem>    
                    <ListItem>Update the <span className="stress">App.tsx</span> file to use the new Button component:
                    <CodeBlock code={`import { useState } from 'react';
import './App.css'
import Counter from './components/Counter';
import Button from './components/Button';

function App() {
  const [count, setCount] = useState<number>(0);

  const handleDoubleClick = () => {
    setCount(count => count + 1);
    setCount(count => count + 1);
  }

  return (
    <div className='counter-container'>
      <Counter count={count} />

      <div className="counter-buttons">
        <Button text="Add Twice (++)" onClick={handleDoubleClick} />
      </div>
    </div>
  )
}

export default App;`}  />
                    </ListItem>

                    <ListItem>The Button component is a reusable component that takes in text and onClick props to display a button with the specified text and handle click events.</ListItem>
                    <ListItem>Using the Button component in the App component helps keep the code organized and promotes reusability.</ListItem>
                    <ListItem>This is an <span className="stress">example of lifting state up</span>. Here, the <span className="stress">state is managed in the parent component (App)</span> and passed down to child components (<span className="stress">Counter</span> and <span className="stress">Button</span>) as props. When you click the <span className="stress">Button</span> component, it calls the <span className="stress">onClick</span> function prop, which updates the <span className="stress">parent's state</span> from within the child. This demonstrates how a child component can trigger updates to its parent's state via a callback prop.</ListItem>
                </ul>
            </div>

            <div>
                <h2>Lifting State Up</h2>
                <ul>
                    <ListItem>
                        <span className="stress">Lifting state up</span> is a React pattern where shared state is managed in the closest common ancestor of components that need to access or update it.
                    </ListItem>
                    <ListItem>
                        In this example, <span className="stress">App</span> manages the <span className="stress">count</span> state and passes it down to <span className="stress">Counter</span> and <span className="stress">Button</span> as props. When you interact with the <span className="stress">Button</span>, it calls the <span className="stress">onClick</span> prop, which updates the parent's state. This keeps all related components in sync and ensures a clear, predictable data flow.
                    </ListItem>
                </ul>
            </div>

            <RepoLink link="https://github.com/gyanasluitel/simple-counter-codes" name="simple-counter-codes" />

            <ClassActivity>            
                <p>Create a counter app that increments and decrements a number.</p>
                <p className="stress">Requirements:</p>
                <ul>
                    <li>Create a TypeScript react-app using the Vite build tool. Use the command <code className="code-block fw-600">npm create vite@latest your-app-name -- --template react-ts</code></li>
                    <li>Implement a counter component with increment and decrement buttons.</li>
                    <li>It should have a reusable <span className="stress">Button</span> component that takes in a text and onClick props.</li>
                    <li>Use the Button component to handle increment and decrement actions.</li>
                    <li>The app should be structured such that the state is lifted up to a common ancestor component.</li>
                </ul>

                <p className="stress">Bonus: The decrement button should be disabled when the count is zero.</p>

                <p className="stress">Do not focus very much on the styling. Focus on functionality first, then styling.</p>

                <p className="stress">You have about 10 minutes to complete this.</p>
            </ClassActivity>
        </div>
    )
};

export default FirstReactApp;