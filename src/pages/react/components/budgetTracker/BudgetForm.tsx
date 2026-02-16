import CodeBlock from "src/common/CodeBlock";
import CodeStep from "src/common/CodeStep";
import ListItem from "src/common/ListItem";

import BudgetFormImg from "../../../../assets/budgetTacker/budgetForm.png";

const BudgetForm = () => {
    return (
        <div className="mt-40">
            <CodeStep>
                <h3>Step 6: Creating a Form component</h3>
            </CodeStep>


            <p>Now, we will create a form component that will have the logic to add new budget items to our list.</p>

            <ul>
                <ListItem>Create a <span className="font-bold">BudgetForm.tsx</span> file in the components folder. Add the following code: 
                    <CodeBlock code={`import { useState } from "react";
import type { BudgetItem, Category } from "../BudgetTracker";
import "./BudgetForm.css";

interface Props {
    handleSubmit: (item: BudgetItem) => void;
}

const BudgetForm = ({ handleSubmit }: Props) => {
    // Form state
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState<number>(0);
    const [date, setDate] = useState("");
    const [category, setCategory] = useState<Category>("Expense");

     const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (description.trim() === "") {
            alert("Description is required");
            console.log("Description is required");
            return;
        }

        if (amount === undefined || isNaN(amount) || amount <= 0) {
            console.log("Amount must be a positive number");
            alert("Amount must be a positive number");
            return;
        }

        const itemToAdd: BudgetItem = {
            id: crypto.randomUUID(),
            description,
            amount: amount,
            date: date,
            category: category
        }

        handleSubmit(itemToAdd);

        setDescription("");
        setAmount(0);
        setDate("");
        setCategory("Expense");
    }

    return (
        <div>
            <form className="budget-tracker-form" onSubmit={handleFormSubmit}>
                <div className="budget-tracker-form__group">
                    <label className="budget-tracker-form__label">Description</label>
                    <input
                        className="budget-tracker-form__input"
                        type="text"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        required
                        style={{width:'100%'}}
                    />                
                </div>
                <div className="budget-tracker-form__group">
                    <label className="budget-tracker-form__label">Amount</label>
                    <input
                        className="budget-tracker-form__input"
                        type="number"
                        value={amount}
                        onChange={e => setAmount(Number(e.target.value))}
                        required
                        min="0.01"
                        step="0.01"
                        style={{width:'100%'}}
                    />
                </div>
                <div className="budget-tracker-form__group">
                    <label className="budget-tracker-form__label">Date</label>
                    <input
                        className="budget-tracker-form__input"
                        type="date"
                        value={date}
                        onChange={e => setDate(e.target.value)}
                        required
                        style={{width:'100%'}}
                    />
                </div>
                <div className="budget-tracker-form__group">
                    <label className="budget-tracker-form__label">Category</label>
                    <select
                        className="budget-tracker-form__select"
                        value={category}
                        onChange={e => setCategory(e.target.value as Category)}
                        style={{width:'100%'}}
                    >
                        <option value="Income">Income</option>
                        <option value="Expense">Expense</option>
                    </select>
                </div>

                <button type="submit" className="budget-tracker-form__submit">Submit</button>
            </form>
        </div>
    )
}

export default BudgetForm;`} />
                </ListItem>

                <ListItem>To add the CSS for the component, create a new file called <span className="stress">BudgetForm.css</span> and add styles:
                    <CodeBlock code={`.budget-tracker-form {
  background: #f9fafb;
  border-radius: 18px;
  box-shadow: 0 4px 32px 0 rgba(80, 112, 255, 0.10), 0 1.5px 0 0 #e3e7ef;
  margin: 2.5rem 0;
  padding: 2.5rem 4vw 2.5rem 4vw;
  border: 1.5px solid #e3e7ef;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.budget-tracker-form__group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.budget-tracker-form__label {
  font-size: 1.04rem;
  font-weight: 600;
  color: #2d3a4a;
  margin-bottom: 0.1rem;
  letter-spacing: 0.01em;
}

.budget-tracker-form__input, .budget-tracker-form__select {
  padding: 0.7rem 1rem;
  border: 1.5px solid #e3e7ef;
  border-radius: 8px;
  font-size: 1.08rem;
  background: #fff;
  color: #2d3a4a;
  transition: border-color 0.2s, box-shadow 0.2s;
  box-shadow: 0 1px 2px rgba(80,112,255,0.03);
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}
.budget-tracker-form__input:focus, .budget-tracker-form__select:focus {
  border-color: #506fff;
  outline: none;
  box-shadow: 0 0 0 2px #e3e7ef;
}

.budget-tracker-form__submit {
  margin-top: 0.5rem;
  padding: 0.85rem 0;
  background: linear-gradient(90deg, #506fff 0%, #7f9cf5 100%);
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1.13rem;
  font-weight: 700;
  cursor: pointer;
  letter-spacing: 0.03em;
  box-shadow: 0 2px 8px rgba(80,112,255,0.10);
  transition: background 0.2s, box-shadow 0.2s;
}
.budget-tracker-form__submit:hover {
  background: linear-gradient(90deg, #3b5bdb 0%, #506fff 100%);
  box-shadow: 0 4px 16px rgba(80,112,255,0.16);
}

.budget-tracker-form__input[type="date"]::-webkit-calendar-picker-indicator {
  filter: invert(0.5);
}`} />
                </ListItem>

                <ListItem>After creating the form component, we can now import it in our <span className="stress">BudgetTracker.tsx</span> file and use it inside the return statement of the component. We will also need to create a function that will handle the submission of the form and add the new budget item to our list.</ListItem>

                <ListItem>Update the <span className="stress">BudgetTracker.tsx</span> file to include the new form component and handle form submissions. Code: 
                    <CodeBlock code={`import './BudgetTracker.css';
import { useState } from 'react';
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
    const [budgetItems, setBudgetItems] = useState<BudgetItem[]>([]);

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

            <p>With this, we have completed the form component for our budget tracker app. You can now add new budget items using the form and they will be displayed in the list.</p>

            <p className="stress">This is what the App should look like till now:</p>
            <img src={BudgetFormImg} alt="Budget Form" className="rounded-lg shadow-md border" />
        </div>
    )
}

export default BudgetForm;