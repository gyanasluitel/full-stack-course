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
                    </tbody>                
                </table>
            </div>
        </div>
    )
}

export default Home;