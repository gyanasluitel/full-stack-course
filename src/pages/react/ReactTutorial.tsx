
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

                    <tr>
                        <td><NavLink to="todo-app">Todo App</NavLink></td>
                        <td>Build a Todo application to practice React concepts</td>
                    </tr>
                </tbody>                
            </table>
            <Outlet />
        </div>
    )
}

export default ReactTutorial;