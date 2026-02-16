import CodeBlock from "src/common/CodeBlock";
import ListItem from "src/common/ListItem";
import NavButton from "src/common/NavButton";
import RepoLink from "src/common/RepoLink";

const BudgetTrackerAppLocalStorage = () => {
    return (
        <div className="container">
            <NavButton to="/react-tutorial" text="React Tutorial" />

            <h1>Budget Tracker App - Local Storage</h1>

            <p>In this lesson, we will be working on the budget tracker app to read and write data to the browser's local storage.</p>

            <ul>
                <ListItem>Update the <span className="stress">BudgetTracker.tsx</span> file to read and write data to local storage. Code:
                    <CodeBlock code={`import './BudgetTracker.css';
import { useEffect, useState } from 'react';
import BudgetList from './components/BudgetList';
import BudgetForm from './components/BudgetForm';

export type Category = "Income" | "Expense";

export interface BudgetItem {
    id: string;
    description: string;
    amount: number;
    date: string;
    category: Category;
}

const BudgetTracker = () => {
    // State for budget items, initialized from localStorage
    // Lazy initialization to avoid parsing localStorage on every render
    const [budgetItems, setBudgetItems] = useState<BudgetItem []>(() => {
        try {
            const items = localStorage.getItem("budgetItems");
            return items ? JSON.parse(items) : [];
        } catch (error) {
            console.error("Error parsing budget items from localStorage:", error);
            return [];
        }
    });

    // Sync budget items to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem("budgetItems", JSON.stringify(budgetItems));
    }, [budgetItems]);

    const handleDelete = (id: string) => {
        setBudgetItems(prevItems => prevItems.filter(item => item.id !== id));
    }

    const handleSubmit = (item: BudgetItem) => {
        setBudgetItems(prevItems => [...prevItems, item]);
    }

    return (
        <div className='budget-tracker'>

            <BudgetForm handleSubmit={handleSubmit} />

            <BudgetList budgetItems={budgetItems} handleDelete={handleDelete} />
        </div>
    )
}

export default BudgetTracker;`} />
                </ListItem>
            </ul>

            <RepoLink link="https://github.com/gyanasluitel/budget-tracker/tree/04-localStorage" name="Read/write to browser local storage" />
        </div>
    )
}

export default BudgetTrackerAppLocalStorage;