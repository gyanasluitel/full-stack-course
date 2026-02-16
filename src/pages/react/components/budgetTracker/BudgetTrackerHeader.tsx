import CodeBlock from "src/common/CodeBlock";
import CodeStep from "src/common/CodeStep";
import ListItem from "src/common/ListItem";

import BudgetTrackerAppWithHeader from "../../../../assets/budgetTacker/budget-tacker-header.png";

const BudgetTrackerHeader = () => {
    return (
        <div className="mt-40">
            <CodeStep>
                <h3>Step 4: Creating a Header component</h3>
            </CodeStep>

            <p>First thing we need to do is create a Header component that will display the name and description of our app.</p>

            <ul>
                <ListItem>Create a new file called <span className="stress">Header.tsx</span> inside the <span className="stress">src/components</span> folder and add the following code to it:
                <CodeBlock code={`import "./Header.css";

interface HeaderProps {
    title: string;
    description: string;
}

const Header = ({title, description} : HeaderProps) => {
    return (
        <header className="header">
            <div className="header__left">
                    <h1 className="header__title">{title}</h1>
                <p className="header__description">{description}</p>
            </div>
        </header>
    )
}

export default Header;`} />
                </ListItem>

                <ListItem>Create a new file called <span className="stress">Header.css</span> inside the <span className="stress">src/components</span> folder and add the following code to it:
                <CodeBlock code={`/* Header navigation links styling */
.header__right {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    margin-left: auto;
}

.header__navlink {
    color: #fff;
    background: #1976d2;
    padding: 0.5em 1.2em;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.05rem;
    transition: background 0.2s, color 0.2s, box-shadow 0.2s;
    box-shadow: 0 2px 8px rgba(25, 118, 210, 0.10);
}
.header__navlink:hover, .header__navlink:focus {
    background: #fff;
    color: #1976d2;
    outline: none;
    box-shadow: 0 4px 16px rgba(25, 118, 210, 0.18);
    text-decoration: underline;
}

.header {
    color: #506fff;
    background: #fff;
    padding: 32px 4vw 24px 4vw;
    box-shadow: 0 4px 32px 0 rgba(80, 112, 255, 0.10);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border-bottom: 2px solid #e3e7ef;
    letter-spacing: 0.5px;
    position: sticky;
    top: 0;
}

.header_left {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.header__title {
    font-size: 2.2rem;
    font-weight: 900;
    letter-spacing: 1px;
    text-shadow: none;
    margin-bottom: 0.2em;
    text-decoration: none;
    color: #506fff;
}

.header__description {
    font-size: 1.08rem;
    margin-top: 0.5rem;
    font-style: italic;
    color: #7f9cf5;
    text-shadow: none;
}
/* Header navigation links styling */
.header__right {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    margin-left: auto;
}

.header__navlink {
    color: #fff;
    background: #1976d2;
    padding: 0.5em 1.2em;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.05rem;
    transition: background 0.2s, color 0.2s, box-shadow 0.2s;
    box-shadow: 0 2px 8px rgba(25, 118, 210, 0.10);
}

.header__navlink:hover, .header__navlink:focus {
    background: #fff;
    color: #1976d2;
    outline: none;
    box-shadow: 0 4px 16px rgba(25, 118, 210, 0.18);
    text-decoration: underline;
}

.header {
    color: #fff;
    background: linear-gradient(90deg, #0a2540 0%, #2196f3 100%);
    padding: 28px 32px 24px 32px;
    box-shadow: 0 4px 16px 0 rgba(0,0,0,0.10), 0 1.5px 0 0 #1976d2;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border-bottom: 3px solid #1976d2;
    letter-spacing: 0.5px;
    position: sticky;
    top: 0;
    z-index: 100;
}

.header_left {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.header__title {
    font-size: 2.2rem;
    font-weight: 800;
    letter-spacing: 1px;
    text-shadow: 0 2px 8px rgba(0,0,0,0.18);
    margin-bottom: 0.2em;
    text-decoration: none;
    color: #fff;
}

.header__description {
    font-size: 1.08rem;
    margin-top: 0.5rem;
    font-style: italic;
    color: #e3f2fd;
    text-shadow: 0 1px 4px rgba(0,0,0,0.10);
}`} />
                </ListItem>

                <ListItem>Now, you can import and use the Header component in your <span className="stress">App.tsx</span> file:
                <CodeBlock code={`import './App.css'
import Header from './components/Header'

function App() {
  return (
    <>
      <Header title='Budget Tracker App' description='Manage your budget effectively' />
    </>
  )
}

export default App
`}  />
                </ListItem>

                <ListItem>Also update the <span className="stress">App.css</span> file to include any necessary styles for the application:
                <CodeBlock code={`
.container {
  width: 100%;
  max-width: none;
  margin: 0;
  padding: 40px;
  display: block;
  box-sizing: border-box;
}`} />
                </ListItem>
            </ul>

            <p className="stress">This is how the App should look like till now.</p>

            <img src={BudgetTrackerAppWithHeader} alt="Budget Tracker App with Header" className="responsive-img" />
        </div>
    )
}

export default BudgetTrackerHeader;