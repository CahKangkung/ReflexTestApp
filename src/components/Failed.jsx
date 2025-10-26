import '../Failed.css';

function Failed() {
    return (
        <>
        <body className="mainBody" style={{ backgroundColor: "red" }}>
            <div id="failedContainer">
                <div className="failedText">
                    <h1>FAILED</h1>
                    <h4>Don't click any area in the red background</h4>
                </div>
                <div className="failedButton">
                    <a href="/main" className="failedRetryButton">Retry</a>
                    <a href="/" className="failedExitButton">Exit</a>
                </div>
            </div>
        </body>
        </>
    )
}

export default Failed;