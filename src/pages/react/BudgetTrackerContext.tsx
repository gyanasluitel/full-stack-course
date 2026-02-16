import NavButton from "src/common/NavButton";
import RepoLink from "src/common/RepoLink";

const BudgetTrackerContext = () => {
  return (
    <div className="container">
      <NavButton to="/react-tutorial" text="React Tutorial" />

      <h1>Budget Tracker Context</h1>
      <p>In this section, we will be setting up the context for our Budget Tracker app & persisting data across different components.</p>

      <RepoLink link="https://github.com/gyanasluitel/budget-tracker/tree/07-context" name="Setting up React Context in BudgetTracker" />
    </div>
  );
}

export default BudgetTrackerContext;