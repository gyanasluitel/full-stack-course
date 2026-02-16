import CodeStep from "src/common/CodeStep";
import BudgetTrackerVisualization from "../../../../assets/budgetTacker/budgetTrakcerVis.png";


const BudgetTrackerViz = () => {
    return (
        <div>
            <CodeStep>
                <h3>Step 1: Visualizing our Budget Tracker app</h3>    
            </CodeStep>

            <div className="mt-20">
                <p>Before we start building the app, let's visualize what our Budget Tracker will look like.</p>
                <p>It will have the following features:</p>
                <ul>
                    <li>A Header that will show the name & the description of the app</li>
                    <li>A Form component to add and display income and expenses</li>
                    <li>A List component section to show the items</li>
                </ul>
                <img src={BudgetTrackerVisualization} alt="Budget Tracker Visualization" className="responsive-img" />

            </div>
        </div>
    )
}

export default BudgetTrackerViz;