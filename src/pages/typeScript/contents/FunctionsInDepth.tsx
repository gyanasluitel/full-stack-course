import DefaultParameters from "./components/DefaultParameters";
import FunctionReturningPromises from "./components/FunctionReturningPromises";
import OptionalParameters from "./components/OptionalParameters";
import ParameterTypeAnnotations from "./components/ParameterTypeAnnotations";
import ReturnTypeAnnotations from "./components/ReturnTypeAnnotations";

const FunctionsInDepth = () => {
    return(
        <div>
            <h2 className="title">9. Functions In Depth</h2>

            <ParameterTypeAnnotations />

            <ReturnTypeAnnotations />

            <OptionalParameters />

            <DefaultParameters />

            <FunctionReturningPromises />
        </div>
    )
}

export default FunctionsInDepth;