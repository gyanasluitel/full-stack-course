import "./CodeStep.css";

const CodeStep = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="code-step">
            {children}
        </div>
    )
}

export default CodeStep;