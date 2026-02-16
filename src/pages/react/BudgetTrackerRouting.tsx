import ListItem from "src/common/ListItem";

import BudgetTrackerHome from "../../assets/budgetTacker/budgetTrackerHome.png";
import BudgetTrackerAdd from "../../assets/budgetTacker/budgetTrackerAdd.png";
import BudgetTrackerListPage from "../../assets/budgetTacker/budgetTrackerListPage.png";
import BudgetTrackerDetail from "../../assets/budgetTacker/budgetTrackerDetail.png";
import BudgetTrackerEdit from "../../assets/budgetTacker/budgetTrackerEdit.png"; 
import RepoLink from "src/common/RepoLink";
import NavButton from "src/common/NavButton";

const BudgetTrackerRouting = () => {
    return (
        <div className="container">
            <NavButton to="/react-tutorial" text="React Tutorial" />

            <h1>Budget Tracker App - Routing</h1>
            <p>In this section, we will learn how to implement routing in our Budget Tracker app using React Router.</p>

            <div>
                <h2>Let's first visualize how our App should look like: </h2>

                <div>
                    <p className="stress">1. This is our Home Page:</p>
                    <img src={BudgetTrackerHome} alt="Budget Tracker Home Page" className="budget-tracker-image" />
                </div>

                <div className="mt-40">
                    <p className="stress">2. This is our Add Page:</p>
                    <img src={BudgetTrackerAdd} alt="Budget Tracker Add Page" className="budget-tracker-image" />
                </div>

                <div className="mt-40">
                    <p className="stress">3. This is our List Page:</p>
                    <img src={BudgetTrackerListPage} alt="Budget Tracker List Page" className="budget-tracker-image" />
                </div>

                <div className="mt-40">
                    <p className="stress">4. This is our Detail Page:</p>
                    <img src={BudgetTrackerDetail} alt="Budget Tracker Detail Page" className="budget-tracker-image" />
                </div>

                <div className="mt-40">
                    <p className="stress">5. This is our Edit Page:</p>
                    <img src={BudgetTrackerEdit} alt="Budget Tracker Edit Page" className="budget-tracker-image" />
                </div>
            </div>

            <div>
                <h2>Setting up React Router in the app</h2>
                <ul>
                    <ListItem>Let's install React Router using the following command: <code className="code-block fw-600">npm install react-router</code></ListItem>
                </ul>

                <RepoLink link="https://github.com/gyanasluitel/budget-tracker/tree/06-routing" name="Routing setup in the Budget Tracker app" />
            </div>
        </div>
    )
}

export default BudgetTrackerRouting;