import UiAsATree from "./components/UiAsATree";
import VirtualDOM from "./components/VirtualDOM";
import WhatIsReact from "./components/WhatIsReact";
import WritingJsx from "./components/WritingJsx";
import WritingPureReact from "./components/WritingPureReact";

const ReactTutorial = () => {
    return (
        <div className="container">
            <h1>React Tutorial</h1>

            <WhatIsReact />

            <WritingPureReact />

            <WritingJsx />

            <UiAsATree />

            <VirtualDOM />
        </div>
    )
}

export default ReactTutorial;