import NavButton from "src/common/NavButton";
import UiAsATree from "./components/UiAsATree";
import VirtualDOM from "./components/VirtualDOM";
import WhatIsReact from "./components/WhatIsReact";
import WritingJsx from "./components/WritingJsx";
import WritingPureReact from "./components/WritingPureReact";

const ReactBasics = () => {
    return (
        <div className="container">
            <NavButton to="/react-tutorial" text="React Tutorial" />
            <WhatIsReact />
            <WritingPureReact />
            <WritingJsx />
            <UiAsATree />
            <VirtualDOM />
        </div>
    )
}

export default ReactBasics;