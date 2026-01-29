import UITree from "src/assets/react/uiTree.png";


const UiAsATree = () => {
    return (
        <div>
            <h2>UI As a Tree</h2>

            <p>As you build your React app, many components will be nested within each other. <span className="stress">How does React keep track of your app's component structure?</span></p>

            <p>React represents your UI as a tree of components. Each component is a node in this tree, and the tree structure reflects the hierarchy of your UI.</p>

            <img src={UITree} alt="UI as a Tree" />
        </div>
    )    
}

export default UiAsATree;