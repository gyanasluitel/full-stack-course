import CodeBlock from "src/common/CodeBlock";
import ListItem from "src/common/ListItem";

const WritingPureReact = () => {
    return (
        <div>
            <h2>Let's take a look at writing pure React code</h2>
            
            <p>Let's write some pure React code! We will create a simple React app from scratch using JS without using any build tools or frameworks.</p>

            <ul>
                <ListItem>Create a new directory called <code className="code-block fw-600">momo-maker</code></ListItem>
                <ListItem>Create an <code className="code-block fw-600">index.html</code> file inside the <code className="code-block fw-600">momo-maker</code> directory</ListItem>
                
                <CodeBlock code={`<!DOCTYPE html> 
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="app.css">
        <title>Momo Maker</title>
    </head>

    <body>
        <div id="root">Not Rendered</div>
        <script src="https://unpkg.com/react@18.3.1/umd/react.development.js"></script>
        <script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js"></script>
        <script src="./App.js"></script>
    </body>
</html>`} />

                <ListItem>Create a <code className="code-block fw-600">app.css</code> file inside the <code className="code-block fw-600">momo-maker</code> directory and add the following code:</ListItem>

                <CodeBlock code={`body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    font-size: 40px;
}


.momo-bg {
    background-color: #ffcc00;
    color: #333333;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin: 10px;
}`} />

                <ListItem>Create an <code className="code-block fw-600">App.js</code> file inside the <code className="code-block fw-600">momo-maker</code> directory</ListItem>
                <ListItem>Run the program using <code className="code-block fw-600">live server</code>, or any other way (e.g., <code className="code-block fw-600">npx serve</code>) and open <code className="code-block fw-600">http://localhost:3000</code> in your browser</ListItem>

                <ListItem>In the <code className="code-block fw-600">App.js</code>, add the following code:
                    <CodeBlock code={`const App = () => {
    return React.createElement(
        "div", 
        {}, 
        React.createElement("h1", {}, "Delicious Pork Momo!")
    );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));`} />
                </ListItem>
            </ul>

            <p>This is the simplest React app you can build.</p>
            <ul>
                <ListItem>We created a React component called <code className="code-block fw-600">App</code> using the <code className="code-block fw-600">React.createElement</code> method.
                    <ul>
                        <ListItem>React is all about creating reusable components and efficiently updating the UI.</ListItem>
                    </ul>
                </ListItem>
                <ListItem>We then rendered the <code className="code-block fw-600">App</code> component inside the HTML element with the id <code className="code-block fw-600">root</code> using <code className="code-block fw-600">ReactDOM.createRoot</code> and <code className="code-block fw-600">root.render</code>.</ListItem>
            </ul>

            <ul>
                <ListItem><code className="code-block fw-600">React.createElement</code> creates one instance of some component. Whatever string you pass, it will create a DOM tag with the passed string.
                        <ul>
                            <ListItem>We used <code className="code-block fw-600">h1</code> and <code className="code-block fw-600">div</code>, so if we inspect the page, we will see those tags in the DOM.</ListItem>
                            <ListItem>The second argument is for attributes/props, we passed an empty object here as we don't have any attributes to pass.</ListItem>
                            <ListItem>The third argument is for children, we passed the text "Delicious Pork Momo!" as the child of the <code className="code-block fw-600">h1</code> tag.</ListItem>   
                        </ul>
                </ListItem>

                <ListItem>We used <code className="code-block fw-600">document.getElementById</code> to grab an existing div out of the HTML document. We then passed the element to <code className="code-block fw-600">ReactDOM.createRoot</code> to create a root for our React app.
                        <ul>
                            <ListItem>This is how we signal to React that we want to render our app.</ListItem>
                        </ul>
                </ListItem>

                <ListItem>
                    We called <code className="code-block fw-600">root.render</code> with our <code className="code-block fw-600">App</code> component wrapped in a <code className="code-block fw-600">React.createElement</code> call.
                    <ul>
                        <ListItem>This tells React to render our <code className="code-block fw-600">App</code> component inside the root we created earlier.</ListItem>
                        <ListItem>React will take care of creating the necessary DOM elements and updating them as needed.</ListItem>
                    </ul>
                </ListItem>
            </ul>

            <p>When you <span className="stress">open the app in the browser</span>, you should see <span className="stress">"Delicious Pork Momo!"</span> displayed on the page. Let's inspect and see what our DOM looks like.</p>

            <p className="stress"></p>

            <div>
                <p className="stress">Let's modify the App.js to below and see the DOM again.</p>

                <CodeBlock code={`const Momo = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {}, "Delicious Pork Momo!"),
            React.createElement("p", {}, "Tasty and Juicy Momo"),
        ]
    )
}

const App = () => {
    return React.createElement(
        "div", 
        {}, 
        [
            React.createElement("h1", {}, "Delicious Pork Momo!"),
            React.createElement(Momo),
            React.createElement(Momo),
            React.createElement(Momo),
        ]
    );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));`} />
            </div>

            <div>
                <p>We have multiple Momo components rendered on the page. But it's not a useful because all Momo components display the same content.</p>

                <p className="stress">Let's modify the Momo component to accept props and display different content based on the props passed.</p>

                <CodeBlock code={`const Momo = (props) => {
    return React.createElement(
        "div",
        {className: "momo-bg"},
        [
            React.createElement("h1", {}, "Delicious " + props.meat + " Momo!"),
            React.createElement("p", {}, props.description)
        ]
    )
}

const App = () => {
    return React.createElement(
        "div", 
        {}, 
        [
            React.createElement(Momo, {meat: "Pork", description: "Tasty and Juicy Pork Momo"}),
            React.createElement(Momo, {meat: "Chicken", description: "Spicy and Crunchy Chicken Momo"}),
            React.createElement(Momo, {meat: "Veggie", description: "Healthy and Flavorful Veggie Momo"}),
        ]
    );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));`} />

                    <ul>
                        <ListItem>Now each Momo component displays different content based on the <span className="stress">props</span> passed to it.</ListItem>
                        <ListItem>Props are variables that a parent <span className="stress">(App)</span> passes to its children <span className="stress">(the different instances of Momo)</span> to customize their behavior and appearance.</ListItem>
                        <ListItem>This is the power of React: building reusable and customizable components that can be composed to create complex UIs.</ListItem>
                        <ListItem>We build component on top of component on top of component.</ListItem>
                    </ul>

            </div>

        </div>
    )
}

export default WritingPureReact;