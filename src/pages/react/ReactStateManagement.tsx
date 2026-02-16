import ListItem from "src/common/ListItem";
import RepoLink from "src/common/RepoLink";

const ReactStateManagement = () => {
    return (
        <div className="container">
            <h1>React State Management</h1>
            <p>In this section, we will learn about state management in React and how to manage state effectively in your React applications.</p>

            <div>
                <p>The problem in our <span className="stress">Budget Tracker App</span> till now is that we have been managing state locally within each component. This approach works for small applications, but as our application grows, it becomes difficult to manage and share state between components.</p>

                <p>We built a <span className="stress">customHook</span> called <span className="stress">useBudgetTracker</span> to centralize the state management and logic, making it easier to share state between components and keep our application organized.</p>
                <p> However, the <span className="stress">state management is still limited to the components that use the custom hook</span>. For example, each component fetches data from local storage when we go to a certain URL path in the application. To manage state more effectively across the entire application, we need a more robust state management solution.</p>
            </div>

            <div>
                <p>In the next sections, we will explore different state management solutions in React, such as Context API and Redux, and learn how to implement them in our Budget Tracker app to manage state more effectively across the entire application.</p>
                <p>This is what we call <span className="stress">global state management</span>.</p>
            </div>

            <div>
                <h2>What is Context API?</h2>
                <ul>
                    <ListItem>Context API is a built-in feature in React that allows you to <span className="stress">create global state</span> and share it across your entire application <span className="stress">without having to pass props down manually at every level</span>.</ListItem>
                    <ListItem>It provides a way to <span className="stress">create a context</span> that can be accessed by any component in your application, making it easier to manage and share state across your application.</ListItem>
                     <ListItem>Context API is useful for managing state that needs to be accessed by many components at different levels of the component tree, making it ideal for managing global state, for example,
                        <ul>
                            <ListItem>User authentication status</ListItem>
                            <ListItem>Theme settings</ListItem>
                            <ListItem>User settings</ListItem>
                            <ListItem>Language preferences</ListItem>
                            <ListItem>In our case, the budget data</ListItem>
                        </ul>
                    </ListItem>
                </ul>
            </div>

            <div>
                <h2>Components of Context API</h2>

                <ul>
                    <ListItem><span className="stress">React.createContext()</span>: This function is used to create a new context. It returns an object with two components: <span className="stress">Provider</span> and <span className="stress">Consumer</span>.</ListItem>
                    <ListItem><span className="stress">Provider</span>: This component is used to provide the context value to its child components. It accepts a prop called <span className="stress">value</span>, which is the data that you want to share across your application.</ListItem>
                    <ListItem><span className="stress">Consumer</span>: This component is used to consume the context value provided by the Provider. It uses a render prop pattern to access the context value and render the appropriate UI based on that value.</ListItem>
                </ul>
            </div>
            
            <div>
                <h2>How to use Context API</h2>
                <p>To use Context API in your React application, you need to follow these steps:</p>
                <ul>
                    <ListItem>Create a context using <span className="stress">React.createContext()</span> and export it.</ListItem>
                    <ListItem>Wrap your application with the <span className="stress">Provider</span> component and pass the context value as a prop.</ListItem>
                    <ListItem>Use the <span className="stress">Consumer</span> component or the <span className="stress">useContext</span> hook to consume the context value in your child components.</ListItem>
                </ul>
            </div>

            <RepoLink link="https://github.com/gyanasluitel/theme-context" name="Theme Context Switching App" codeText="You can see the repo here for ThemeContext" />
        </div>
    )
}

export default ReactStateManagement;