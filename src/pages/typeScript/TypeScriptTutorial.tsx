import BasicTypes from "./contents/BasicTypes";
import ObjectAndTypeAliases from "./contents/components/ObjectsAndTypeAliases";
import EnumTypes from "./contents/EnumTypes";
import FirstTsFile from "./contents/FirstTsFile";
import FunctionsInDepth from "./contents/FunctionsInDepth";
import JavaScriptIssues from "./contents/JavaScriptIssues";
import ReconfigureTs from "./contents/ReconfigureTs";
import SettingUpTs from "./contents/SettingUpTs";
import TsIsJs from "./contents/TsIsJs";
import TypeInference from "./contents/TypeInference";
import TypeScriptBenefits from "./contents/TypeScriptBenefits";
import UnionAndLiteralTypes from "./contents/UnionAndLiteralTypes";
import UnknownType from "./contents/UnkownType";

const TypeScriptTutorial = () => {
    return (
        <div className="container">
            <h1>Why TypeScript?</h1>

            <JavaScriptIssues />

            <TypeScriptBenefits />

            <TsIsJs />

            <SettingUpTs />
            
            <FirstTsFile />

            <ReconfigureTs />

            <BasicTypes />

            <TypeInference />

            <FunctionsInDepth />

            <ObjectAndTypeAliases />

            <UnionAndLiteralTypes />

            <EnumTypes />

            <UnknownType />

            {/* <Generics /> */}
        </div>
    )
}

export default TypeScriptTutorial;