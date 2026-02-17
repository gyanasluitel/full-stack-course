// Write about React Redux Tutorial
import ListItem from 'src/common/ListItem';
import CodeBlock from 'src/common/CodeBlock';
import NavButton from 'src/common/NavButton';

const ReactReduxTutorial = () => {
    return (
        <div className="container">
            <NavButton to="/react-state-management" text="React State Management" />

            <h1>React Redux Tutorial</h1>
            <p>In this section, we will learn about Redux, a popular state management library for React applications, and how to use it effectively in your React applications.</p>

            <div>
                <p>Redux is a predictable state container for JavaScript applications. It helps you manage the state of your application in a more organized and predictable way. Redux is often used in larger applications where managing state can become complex and difficult to maintain.</p>

                <p>In the next sections, we will explore the core concepts of Redux, such as actions, reducers, and the store, and learn how to implement them in our Budget Tracker app to manage state more effectively across the entire application.</p>
            </div>

            <div>
                <h2>Core Concepts of Redux</h2>

                <ul>
                    <ListItem><span className="stress">Actions</span>: Actions are plain JavaScript objects that represent an intention to change the state. They must have a type property that indicates the type of action being performed.</ListItem>
                    <ListItem><span className="stress">Reducers</span>: Reducers are pure functions that take the current state and an action as arguments and return a new state. They specify how the application's state changes in response to actions sent to the store.</ListItem>
                    <ListItem><span className="stress">Store</span>: The store is an object that holds the application's state. It provides methods to access the state, dispatch actions, and register listeners.</ListItem>
                </ul>

                <p>For example, let's say we want to create a simple counter using Redux. We can define our actions, reducers, and store as follows:</p>
                <CodeBlock code={`// Actions
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const increment = () => ({ type: INCREMENT });
const decrement = () => ({ type: DECREMENT });

// Reducer
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

// Store
import { createStore } from 'redux';
const store = createStore(counterReducer);
`} />
            </div>

            <div>
                <p>In the next sections, we will learn how to connect our React components to the Redux store using the React-Redux library and how to manage state effectively in our Budget Tracker app using Redux.</p>
            </div>
        </div>
    );
};

export default ReactReduxTutorial;