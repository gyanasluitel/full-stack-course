import CodeBlock from "src/common/CodeBlock";
import ListItem from "src/common/ListItem";
import RepoLink from "src/common/RepoLink";

const BudgetTrackerCustomHook = () => {
    return (
        <div className="container">
            <h1>Budget Tracker App - Custom Hook</h1>

            <p>In this lesson, we will be refactoring the budget tracker app to use a custom hook for managing state and logic.</p>

            <ul>
                <ListItem>First, create a file called <span className="stress">useBudgetTracker.ts</span> to define the custom hook. Hooks should be inside the <span className="stress">src/hooks</span> directory. Code:
                    <CodeBlock code={`import { useEffect, useState } from "react";
import type { BudgetItem } from "../BudgetTracker";

const useBudgetTracker = () => {
    const [budgetItems, setBudgetItems] = useState<BudgetItem[]>(() => {
        try {
            console.log("Retrieving items from localStorage...");
            const items = localStorage.getItem("budgetItems");
            return items ? JSON.parse(items) : [];
        }
        catch (error) {
            console.log("Error: ", error);
            return [];
        }
    });

    const handleDelete = (id: string) => {
        const newArray = budgetItems.filter(item => item.id !== id);
        setBudgetItems(newArray);
    }

    const handleSubmit = (item: BudgetItem) => {
        setBudgetItems(prevItems => [...prevItems, item]);
    }

    useEffect(() => {
        localStorage.setItem("budgetItems", JSON.stringify(budgetItems));
    }, [budgetItems]);

    return {
        budgetItems, setBudgetItems, handleDelete, handleSubmit
    }
}

export default useBudgetTracker;`} />
                
                </ListItem>


                <ListItem>Refactor the <span className="stress">BudgetTracker.tsx</span> file to use the <span className="stress">useBudgetTracker</span> hook for managing the state and logic of the budget tracker. Code: 
                    <CodeBlock code={`import './BudgetTracker.css';
import BudgetList from './components/BudgetList';
import BudgetForm from './components/BudgetForm';
import useBudgetTracker from './hooks/useBudgetTracker';

export type Category = "Income" | "Expense";

export interface BudgetItem {
    id: string;
    description: string;
    amount: number;
    date: string;
    category: Category;
}

const BudgetTracker = () => {
    const { budgetItems, handleDelete, handleSubmit } = useBudgetTracker();

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

            <p>The app should now be fully functional with the custom hook managing the state and logic.</p>

            <RepoLink link="https://github.com/gyanasluitel/budget-tracker/tree/05-customHook" name="Budget Tracker Custom Hook" />
        </div>
    )
}

export default BudgetTrackerCustomHook;