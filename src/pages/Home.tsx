import { NavLink } from "react-router";

const Home = () => {
    return (
        <div className="container">
            <h1>Full Stack Web Development with MERN Stack</h1>    
            <p>Welcome to the Full Stack Web Development Course using the MERN stack (MongoDB, Express.js, React, Node.js)!</p>

            <div>
                <h2>Table of Contents</h2>

                <table className="table-contents">
                    <thead>
                        <tr>
                            <th>Topic</th>
                            <th>Description</th>
                        </tr>
                    </thead>    

                    <tbody>
                        <tr>
                            <td><NavLink to="git-github">Git & GitHub Workflow</NavLink></td>
                            <td>Learn version control and collaboration using Git and GitHub.</td>
                        </tr>

                        <tr>
                            <td><NavLink to="git-revise-branching">Git Revise & Branching</NavLink></td>
                            <td>Recap on yesterday's Git concepts and exploring branching in deep.</td>
                        </tr>

                        <tr>
                            <td><NavLink to="type-script-tutorial">TypeScript Tutorial</NavLink></td>
                            <td>Introduction to TypeScript, its features, and benefits over JavaScript.</td>
                        </tr>

                        <tr>
                            <td><NavLink to="type-script-tutorial-2">TypeScript Tutorial Continue</NavLink></td>
                            <td>Continuation of TypeScript concepts and advanced topics.</td>
                        </tr>

                        <tr>
                            <td><NavLink to="async-programming">Asynchronous Programming</NavLink></td>
                            <td>Understanding asynchronous programming in JavaScript/TypeScript.</td>
                        </tr>

                        <tr>
                            <td>
                                <NavLink to="react-tutorial">React</NavLink>
                            </td>
                            <td>Build user interfaces using React library.</td>
                        </tr>
                    </tbody>                
                </table>
            </div>
        </div>
    )
}

export default Home;