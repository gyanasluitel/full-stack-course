
import { NavLink, Outlet } from "react-router-dom";
import NavButton from "src/common/NavButton";


const ReactTutorial = () => {
    return (
        <div className="container">
            <NavButton to="/" text="Home" />
            <h1>React Tutorial</h1>

            <table className="table-contents">
                <thead>
                    <tr>
                        <th>Topic</th>
                        <th>Description</th>
                    </tr>
                </thead>    

                <tbody>
                    <tr>
                        <td><NavLink to="basics">React Basics</NavLink></td>
                        <td>Learn the basics of React and how it works</td>
                    </tr>

                    <tr>
                        <td><NavLink to="first-react-app">First React App: Counter App</NavLink></td>
                        <td>Build your first React application (a simple counter app)</td>
                    </tr>

                    {/* <tr>
                        <td><NavLink to="todo-app">Todo App</NavLink></td>
                        <td>Build a Todo application to practice React concepts</td>
                    </tr> */}

                    <tr>
                        <td><NavLink to="budget-tracker-app">Budget Tracker App</NavLink></td>
                        <td>Build a simple budget tracker app to manage your finances</td>
                    </tr>

                    <tr>
                        <td><NavLink to="react-hooks">React Hooks</NavLink></td>
                        <td>Learn about React Hooks and how to use them</td>
                    </tr>

                    <tr>
                        <td><NavLink to="budget-tracker-app-localStorage">Budget Tracker App - store data in localStorage</NavLink></td>
                        <td>Learn how to store and fetch data from localStorage</td>
                    </tr>

                    <tr>
                        <td><NavLink to="budget-tracker-app-customHooks">Budget Tracker App - customHooks</NavLink></td>
                        <td>Use custom hook in the app to centralize logic and state management</td>
                    </tr>

                    <tr>
                        <td><NavLink to="routing">Routing</NavLink></td>
                        <td>Learn about React Router and how to implement routing in your React applications</td>
                    </tr>

                    <tr>
                        <td><NavLink to="budget-tracker-routing">Budget Tracker App - Routing</NavLink></td>
                        <td>Learn how to implement routing in the Budget Tracker app using React Router</td>
                    </tr>

                    <tr>
                        <td><NavLink to="react-state-management">React State Management</NavLink></td>
                        <td>Learn about state management in React and how to manage state effectively in your React applications</td>
                    </tr>

                    <tr>
                        <td><NavLink to="budget-tracker-context">Budget Tracker App - Context API</NavLink></td>
                        <td>Learn how to use Context API in the Budget Tracker app to manage state more effectively across the entire application</td>
                    </tr>

                    <tr>
                        <td><NavLink to="react-redux-tutorial">React Redux Tutorial</NavLink></td>
                        <td>Learn about Redux, a popular state management library for React applications, and how to use it effectively in your React applications</td>
                    </tr>
                </tbody>                
            </table>
            <Outlet />
        </div>
    )
}

export default ReactTutorial;