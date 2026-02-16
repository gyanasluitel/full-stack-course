import CodeBlock from "src/common/CodeBlock";
import CodeStep from "src/common/CodeStep";
import ListItem from "src/common/ListItem";

import ListImage from "../../../../assets/budgetTacker/budgetTrackerList.png";

const BudgetTrackerList = () => {
    return (
        <div className="mt-40">
            <CodeStep>
                <h3>Step 5: Creating a List component</h3>
            </CodeStep>
            
            <p>We will now create a list component that will display the list of budget items.</p>

            <p>For now, we will create a static list of budget items that we will render.</p>

            <p>Install react-icons using the command <code className="code-block fw-600">npm install react-icons</code></p>

            <p>We will create a component that will have the logic to render the list of budget items & a form to add the budget items.</p>

            <ul>
                {/* Budget Tracker component: */}
                <ListItem>Create a new file called <span className="stress">BudgetTracker.tsx</span> and add the following code to it:
                    <CodeBlock code={`import './BudgetTracker.css';
import { useState } from 'react';
import BudgetList from './components/BudgetList';

export type Category = "Income" | "Expense";

export interface BudgetItem {
    id: string;
    description: string;
    amount: number;
    date: string;
    category: Category;
}

const INITIAL_BUDGET_ITEMS: BudgetItem[] = [
    {
        id: '1',
        description: 'Salary',
        amount: 5000,
        date: '2024-01-01',
        category: 'Income'
    },
    {
        id: '2',
        description: 'Groceries',
        amount: 200,
        date: '2024-01-05',
        category: 'Expense'
    },
    {
        id: '3',
        description: 'Freelance Project',
        amount: 1500,
        date: '2024-01-10',
        category: 'Income'}
]

const BudgetTracker = () => {
    const [budgetItems, setBudgetItems] = useState<BudgetItem[]>(INITIAL_BUDGET_ITEMS);

    const handleDelete = (id: string) => {
        setBudgetItems(prevItems => prevItems.filter(item => item.id !== id));
    }
    
    return (
        <div className='budget-tracker'>
            <div>
                <h1>Form place holder</h1>
            </div>

            <BudgetList budgetItems={budgetItems} handleDelete={handleDelete} />
        </div>
    )
}

export default BudgetTracker;`} />
                </ListItem>

                <ListItem>To add the CSS for the component, create a new file called <span className="stress">BudgetTracker.css</span> and add styles:
                    <CodeBlock code={`.budget-tracker {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}`} />
                </ListItem>

                {/* Budget List component: */}
                <ListItem>Now, create a new file called <span className="stress">BudgetList.tsx</span> inside <span className="stress">src/components</span> folder and add the following code:
                    <CodeBlock code={`import type { BudgetItem } from "../BudgetTracker";
import Budget from "./Budget";

interface Props {
    budgetItems: BudgetItem[];
    handleDelete: (id: string) => void;
}

const BudgetList = ({ budgetItems, handleDelete }: Props) => {
    if (budgetItems.length === 0) {
        return <div>
            <p className="budget-item-list budget-item-list__empty">No budget items found. Please add some.</p>
        </div>
    }

    return (
        <div className="budget-item-list" style={{width:'100%'}}>
            {budgetItems.map(item => (
                <Budget key={item.id} item={item} handleDelete={handleDelete} />
            ))}
        </div>
    )
}

export default BudgetList;`} />
                </ListItem>

                <ListItem>Add Css for the BudgetList component by creating a new file called <span className="stress">BudgetList.css</span> and adding the following styles:
                    <CodeBlock code={`.budget-item-list {
    margin-top: 2.5rem;
    padding: 2.5rem 0 2.5rem 0;
    width: 100%;
    max-width: none;
    margin-left: 0;
    margin-right: 0;
}

.budget-item-list__empty {
    text-align: center;
    color: #b0b3c6;
    font-style: italic;
    margin-top: 2.5rem;
    font-size: 1.1rem;
    letter-spacing: 0.02em;
    border-radius: 10px;
    padding: 1.2rem 0.5rem;
    background: #f4f7fd;
    box-shadow: 0 1px 4px rgba(80,112,255,0.04);
}`} />
                </ListItem>


                {/* Budget item component: */}
                <ListItem>Now, create a new file called <span className="stress">Budget.tsx</span> inside <span className="stress">src/components</span> folder and add the following code:
                    <CodeBlock code={`import { BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import type { BudgetItem } from "../BudgetList";

interface BudgetProps {
    item: BudgetItem;
    handleDelete: (id: string) => void;
}

const Budget = ({item, handleDelete}: BudgetProps) => {
    return (
        <div className="budget-item">
            <div className="budget-item__info" style={{ cursor: "pointer", width: '100%' }} onClick={() => handleDelete(item.id)}>
                <div className="budget-item__title-group">
                    <h3 className="budget-item__title" style={{marginBottom:'0.5rem'}}>{item.description}</h3>
                    <span>{item.category === "Income" ? <BiUpArrowAlt color="green" size={30} /> : <BiDownArrowAlt color="red" size={30} /> }</span>
                </div>
                <p className="budget-item__amount" style={{marginBottom:'0.5rem'}}>Amount: {item.amount}</p>
                <p className="budget-item__date" style={{marginBottom:'0.5rem'}}>Date: {item.date}</p>
            </div>
            <button className="budget-item__delete" onClick={() => handleDelete(item.id)}><MdDelete color="red" /></button>
        </div>
    )
}

export default Budget;`} />
                </ListItem>

                <ListItem>
                    Now, you can import and use the BudgetList component in your <span className="stress">App.tsx</span> file:
                    <CodeBlock code={`import './App.css'
import BudgetList from './BudgetList'
import Header from './components/Header'

function App() {
  return (
    <>
      <Header title='Budget Tracker App' description='Manage your budget effectively' />

      <div className='container'>
        <BudgetList />
      </div>
    </>
  )
}

export default App
`} />
                </ListItem>
            </ul>

            <p className="stress">This is what the App should look like till now:</p>
            <img src={ListImage} alt="Budget Tracker List" />
        </div>
    )
}

export default BudgetTrackerList;