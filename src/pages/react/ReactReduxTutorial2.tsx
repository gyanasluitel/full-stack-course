import ListItem from "src/common/ListItem";
import NavButton from "src/common/NavButton";
import ReduxVisualization from "../../assets/reduxViz.gif";
import CodeBlock from "src/common/CodeBlock";
import RepoLink from "src/common/RepoLink";

const ReactReduxTutorial2 = () => {
    return (
        <div className="container">
            <NavButton to="/react-tutorial" text="React Tutorial" />
            <h1>State Management with Redux</h1>

            <div>
                <h2>What is Redux?</h2>
                <ul>
                    <ListItem>Redux is a state management library for JavaScript applications.</ListItem>
                    <ListItem>It helps you manage and centralize application state in one place.</ListItem>
                    <ListItem>Think of it as a <span className="stress">single source of truth</span> for your application's state.</ListItem>
                </ul>
            </div>

            <div>
                <h2>Why Redux?</h2>
                <ul>
                    <ListItem>State scattered across many components can be hard to manage.</ListItem>
                    <ListItem>Props drilling (passing props through many levels) can become cumbersome.</ListItem>
                    <ListItem>Redux helps you manage complex state in large applications.</ListItem>
                    <ListItem>It makes state predictable and easier to debug.</ListItem>
                    <ListItem>Redux allows you to centralize state management, making it easier to share state across components.</ListItem>
                    <ListItem>Useful for medium to large apps with complex state flows</ListItem>
                    <ListItem>Works well with React, Vue, Angular or plan JS</ListItem>
                </ul>
            </div>

            <div>
                <h2>Core Concepts of Redux</h2>
                <table className="comparison-table">
                    <thead>
                        <tr>
                            <th>Concept</th>
                            <th>Description</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Store</td>
                            <td>The single source of truth that holds the entire state of your application (a single JS object).</td>
                        </tr>
                        <tr>
                            <td>Actions</td>
                            <td>Plain JavaScript objects that describe what happened in the application.</td>
                        </tr>
                        <tr>
                            <td>Reducers</td>
                            <td>Pure functions that take the current state and an action, and return a new state.</td>
                        </tr>
                        <tr>
                            <td>Dispatch</td>
                            <td>A function that sends an action to the store to update the state.</td>
                        </tr>
                        <tr>
                            <td>Selectors</td>
                            <td>Functions that extract/reads specific pieces of state from the store.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div>
                <h2>Redux Workflow</h2>
                <p>In a typical Redux workflow, the following steps occur:</p>
                <ol>
                    <li>A user interacts with the UI, triggering an event (e.g., button click).</li>
                    <li>An action is created to describe the event (e.g., {`{ type: 'DEPOSIT' }`}).</li>
                    <li>The action is dispatched to the Redux store.</li>
                    <li>The store calls the reducer function with the current state and the dispatched action.</li>
                    <li>The reducer processes the action and returns a new state.</li>
                    <li>The store updates its state with the new state returned by the reducer.</li>
                    <li>The UI components that are subscribed to the store are re-rendered with the updated state.</li>
                </ol>

                <p>This unidirectional data flow makes it easier to understand how data changes in your application and helps you manage complex state more effectively.</p>

                <img src={ReduxVisualization} alt="Redux Visualization" style={{ maxWidth: '100%', margin: '2rem 0' }} />
            </div>

            <div>
                <h2>Creating a Counter App with Redux</h2>
                
                <p>Let's create a simple counter app using Redux to see how it works in practice.</p>

                <ul>
                    <ListItem>First, setup a new repository with the command <code className="code-block fw-600">npm create vite@latest counter-app-redux -- --template react-ts</code></ListItem>
                    <ListItem>Then install the necessary dependencies:
                        <ul>
                            <ListItem><code className="code-block fw-600">npm install @reduxjs/toolkit react-redux</code></ListItem>
                        </ul>
                    </ListItem>
                </ul>

                <p>Next, we will create a Redux store, define actions and reducers, and connect our React components to the Redux store to manage the counter state.</p>

                <ul>
                    <ListItem>First, let's create the store. Create a <code className="code-block fw-600">store.ts</code> file in the <code className="code-block fw-600">src/store</code> directory. Code:
                        <CodeBlock code={`// Redux store setup
// This file configures the Redux store and adds all slice reducers
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

`} />
                    <ul>
                        <ListItem><code className="code-block fw-600">configureStore</code> is a function from Redux Toolkit that simplifies the store setup process. It automatically sets up the Redux DevTools extension and includes some default middleware.</ListItem>
                        <ListItem>We import our counter reducer <span className="stress">(need to create one)</span> and add it to the store under the key <code className="code-block fw-600">counter</code>. This means that the state managed by this reducer will be available under <code className="code-block fw-600">state.counter</code>.</ListItem>
                    </ul>
                    </ListItem>

                    <ListItem>Next, let's create a slice for our counter. Create a <code className="code-block fw-600">counterSlice.ts</code> file in the <code className="code-block fw-600">src/store/slices</code> directory. Code:
                        <CodeBlock code={`
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = { value: 0 };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
`} />
                    <ul>
                        <ListItem>We define the initial state of our counter with a value of 0.</ListItem>
                        <ListItem>We create a slice using <code className="code-block fw-600">createSlice</code>, which automatically generates action creators and action types based on the reducers we define.</ListItem>
                        <ListItem>Our reducers handle three actions: <code className="code-block fw-600">increment</code>, <code className="code-block fw-600">decrement</code>, and <code className="code-block fw-600">incrementByAmount</code>. Each reducer updates the state based on the action dispatched.</ListItem>
                    </ul>
                    </ListItem>

                    <ListItem>Create a hooks file. Create a <code className="code-block fw-600">hooks.ts</code> file in the <code className="code-block fw-600">src/hooks</code> directory. Code:
                        <CodeBlock code={`import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store/store";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export const useAppSelector = useSelector.withTypes<RootState>();`} />

                        <ul>
                            <ListItem>These custom hooks are typed versions of the standard <code className="code-block fw-600">useDispatch</code> and <code className="code-block fw-600">useSelector</code> hooks from React Redux. They provide type safety when dispatching actions and selecting state from the store.</ListItem>
                        </ul>
                    </ListItem>

                    <ListItem>Now, let's wrap the App component with the Redux <code className="code-block fw-600">Provider</code> to make the store available to all components. Update your <code className="code-block fw-600">main.tsx</code> file:
                        <CodeBlock code={`import { Provider } from "react-redux";
import Counter from './Counter';
import { store } from "./store/store";

// Step 3: Wrap the app with Provider to give Redux store access
function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
`}/>
                    <ul>
                        <ListItem>The <code className="code-block fw-600">Provider</code> component from React Redux makes the Redux store available to any nested components that need to access the Redux state.</ListItem>
                    </ul>
                    </ListItem>

                    <ListItem>Finally, let's create the Counter component. Create a <code className="code-block fw-600">Counter.tsx</code> file in the <code className="code-block fw-600">src</code> directory. Code:
                        <CodeBlock code={`
import { increment, decrement, incrementByAmount } from './store/slices/counterSlice';
import { useAppDispatch, useAppSelector } from './hooks/hooks';

function Counter() {

const count = useAppSelector(state => state.counter.value);
const dispatch = useAppDispatch();


  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h1>Redux Toolkit Counter</h1>
      <p>Current Value: <strong>{count}</strong></p>

      {/* Increment and Decrement buttons */}
      <button onClick={() => dispatch(increment())}>Increment +1</button>
      <button onClick={() => dispatch(decrement())} style={{ marginLeft: '10px' }}>Decrement -1</button>

      {/* Input for custom increment amount */}
      <div style={{ marginTop: '20px' }}>
        <button
          onClick={() => dispatch(incrementByAmount(100))}
          style={{ marginLeft: '10px' }}
        >
          Increment by Amount
        </button>
      </div>
    </div>
  );
}

export default Counter;`} />
                    <ul>
                        <ListItem>In this component, we use the <code className="code-block fw-600">useAppSelector</code> hook to access the current counter value from the Redux store, and the <code className="code-block fw-600">useAppDispatch</code> hook to dispatch actions to update the state.</ListItem>
                    </ul>
                    </ListItem>
                </ul>

                <p>In summary, we have created a Redux store, defined a counter slice with actions and reducers, and connected our React components to the Redux store using typed hooks. This setup provides a scalable and type-safe way to manage state in a React application.</p>
                            
                <RepoLink link="https://github.com/gyanasluitel/counter-redux-app" name="Counter app using Redux" />
            </div>
        </div>
    )
}

export default ReactReduxTutorial2;