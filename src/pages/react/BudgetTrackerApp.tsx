import RepoLink from "src/common/RepoLink";
import BudgetTrackerHeader from "./components/budgetTracker/BudgetTrackerHeader";
import BudgetTrackerList from "./components/budgetTracker/BudgetTrackerList";
import BudgetTrackerViz from "./components/budgetTracker/BudgetTrackerViz";
import ProjectSetup from "./components/budgetTracker/ProjectSetup";
import ResetBudgetTrackerStyling from "./components/budgetTracker/ResetBudgetTrackerStyling";
import BudgetForm from "./components/budgetTracker/BudgetForm";
import NavButton from "src/common/NavButton";

const BudgetTrackerApp = () => {
    return (
        <div className="container">
            <NavButton to="/react-tutorial" text="React Tutorial" />
        
            <div>
                <h1>Budget Tracker App</h1>
                <p>This is a simple budget tracker app built with React. It allows you to track your income and expenses, and see your current balance.</p>
            </div>

            <div>
                <p>Let's start building the <span className="stress">Budget Tracker</span> app step by step.</p>
            </div>

            {/* Visualizing our Budget Tracker app */}
            <BudgetTrackerViz />

            {/* Setting up a new React project */}
            <ProjectSetup />

            {/* Resetting the CSS properties of the app */}
            <ResetBudgetTrackerStyling />

            {/* Creating a Header component */}
            <BudgetTrackerHeader />

            <RepoLink link="https://github.com/gyanasluitel/budget-tracker/tree/01-header" name="Adding Header to the app" />

            {/* Budget Tracker List */}
            <BudgetTrackerList />

            <RepoLink link="https://github.com/gyanasluitel/budget-tracker/tree/02-render-list" name="Add Budget Tracker List" />

            <BudgetForm />

            <RepoLink link="https://github.com/gyanasluitel/budget-tracker/tree/03-add-form" name="Add form to the app" />
        </div>
    )
}

export default BudgetTrackerApp;