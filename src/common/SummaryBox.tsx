const SummaryBox = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="summary-box">
            <p className="summary-title">Summary</p>
            {children}
        </div>
    )
}

export default SummaryBox;