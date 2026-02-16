import Assignment from "src/common/Assignment";
import CodeBlock from "src/common/CodeBlock";
import ListItem from "src/common/ListItem";
import RepoLink from "src/common/RepoLink";

const ReactHooks = () => {
    return (
        <div className="container">
            <h1>React Hooks</h1>

            <div>
                <ul>
                    <ListItem>React Hooks are functions that let you use state and other React features without writing a class. They were introduced in React 16.8 and have become an essential part of modern React development.</ListItem>

                    <ListItem>There are several built-in hooks in React, including <span className="stress">useState</span>, <span className="stress">useEffect</span>, <span className="stress">useContext</span>, and more. Each hook serves a specific purpose and can be used to manage state, side effects, context, and other aspects of a React component.</ListItem>

                    <ListItem>In addition to the built-in hooks, you can also create your own custom hooks to encapsulate reusable logic and share it across multiple components.</ListItem>

                    <ListItem>When creating custom hooks, always start with the word <span className="stress">use</span>, and they must be called at the top level of your components as we <span className="stress">cannot call hooks conditionally.</span></ListItem>

                    <ListItem>To learn more about React Hooks and how to use them effectively, you can refer to the official React documentation: <a href="https://react.dev/reference/react/hooks" target="_blank" rel="noopener noreferrer">https://react.dev/reference/react/hooks</a></ListItem>
                </ul>
            </div>

            <UseEffectHook />

            <CustomHooks />

            <p className="stress">For other React hooks, you can explore the official documentation.</p>

            <Assignment>
                <p>Create a simple timer (It should show the current date in the UI & it should update each second) - using setInterval (for initializing dates, use new Date() function of JS)</p>
            </Assignment>

            <Assignment>
                <p>Create a complex timer (stopwatch). Minimum Requirements:</p>
                <ul>
                    <ListItem>Start button to start the timer</ListItem>
                    <ListItem>Stop button to stop the timer</ListItem>
                    <ListItem>Reset button to reset the timer to 0</ListItem>
                </ul>
            </Assignment>

            <Assignment>
                <p>Create an app that should fetch data from the website: https://jsonplaceholder.typicode.com/ </p>

                <p>The app should have the following features: </p>

                <ul>
                    <ListItem>Call the https://jsonplaceholder.typicode.com/posts endpoint to fetch the posts</ListItem>
                    <ListItem>There should be a loading state and the app should show a loading UI when the data is being fetched by calling the API</ListItem>
                    <ListItem>The fetched posts should be displayed in the UI</ListItem>
                </ul>
            </Assignment>
        </div>
    )
}

const UseEffectHook = () => {
    return (
                    <div>
                <h2>useEffect hook</h2>

                <ul>
                    <ListItem>The <span className="stress">useEffect</span> hook is used to perform side effects in function components. It takes a function as an argument and runs it after the component renders. You can also specify dependencies for the effect, which will determine when the effect should be re-run.</ListItem>

                    <ListItem>Common use cases for useEffect include:
                        <ul>
                            <ListItem>Fetching data from an API</ListItem>
                            <ListItem>Subscribing to events</ListItem>
                            <ListItem>Updating the DOM</ListItem>
                            <ListItem>Setting timers</ListItem>
                        </ul>
                    </ListItem>

                    <ListItem>useEffect runs after the component renders or re-renders</ListItem>

                    <ListItem>The useEffect has something called as <span className="stress">dependency array</span>, which allows you to control when the effect should run.
                        <ul>
                            <ListItem>If you pass an empty array, the effect will only run once when the component mounts.</ListItem>
                            <ListItem>If you pass an array with dependencies, the effect will run whenever any of the dependencies change.</ListItem>
                            <ListItem>If you don't pass a dependency array, the effect will run after every render.</ListItem>
                        </ul>
                    </ListItem>

                    <ListItem>It's important to clean up any side effects in useEffect to prevent memory leaks. You can return a cleanup function from the effect that will be called when the component unmounts or before the effect runs again.</ListItem>

                    <ListItem>For example, if you set up an event listener in useEffect, you should clean it up in the cleanup function:
                        <CodeBlock code={`useEffect(() => {
    const handleScroll = () => {
        console.log('User scrolled');
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);`} />
                    </ListItem>

                    <ListItem>In this example, we set up a scroll event listener in the useEffect hook and clean it up in the returned function to prevent memory leaks when the component unmounts.</ListItem>

                    <ListItem>For example, you can use the useEffect hook to fetch data from an API when a component mounts:
                        <CodeBlock code={`import { useEffect, useState } from 'react';

function DataFetchingComponent() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://api.example.com/data')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <div>
            {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
        </div>
    );
}`} />
                    </ListItem>

                    <ListItem>In this example, the useEffect hook is used to fetch data from an API when the component mounts. The empty dependency array ensures that the effect runs only once, similar to componentDidMount in class components.</ListItem>
                </ul>

                <RepoLink link="https://github.com/gyanasluitel/simple-counter-app" name="Building a Simple Automatic Counter App" codeText="Example of building a simple automatic counter app with useEffect" />

                <RepoLink link="https://github.com/gyanasluitel/student-list-api" name="Fetching external data from an API" codeText="Example of fetching data with useEffect" />
            </div>
    )
};


const CustomHooks = () => {
    return (
                    <div>
                <h2>Custom Hooks</h2>

                <ul>
                    <ListItem>Custom hooks are a powerful way to reuse logic across multiple components. They allow you to extract component logic into reusable functions. For example, you can create a custom hook to manage form state:
                        <CodeBlock code={`import { useState } from 'react';

function useForm(initialValues) {
    const [values, setValues] = useState(initialValues);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues(prevValues => ({ ...prevValues, [name]: value }));
    };

    return [values, handleChange];
}`} />
                    </ListItem>

                    <ListItem   >In this example, the useForm custom hook manages form state. It initializes the state with the provided initial values and returns the current values along with a handleChange function to update the state when form inputs change.</ListItem>

                    <ListItem>You can then use this custom hook in any component that needs form state management:
                        <CodeBlock code={`function MyForm() {
    const [formValues, handleInputChange] = useForm({ name: '', email: '' });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted with values:', formValues);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={formValues.name}
                onChange={handleInputChange}
                placeholder="Name"
            />
            <input
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleInputChange}
                placeholder="Email"
            />
            <button type="submit">Submit</button>
        </form>
    );
}`} />
                    </ListItem>
                </ul>
            </div>
    )
}

export default ReactHooks;