import '../Result.css';

function Result({ userReaction }) {
    const calcSeconds = userReaction / 1000;
    const convertSeconds = calcSeconds.toFixed(3);
    return (
        <>
            <div id="container">
                <div className="resultText">
                    {}
                    <h6>Your Reaction Speed</h6>
                    <h1>{userReaction} ms</h1>
                    <h6>{convertSeconds} Seconds</h6>
                </div>
                <div className="resultButton">
                    <a href="/main" className="retryButton">Retry</a>
                    <a href="/" className="exitButton">Exit</a>
                </div>
            </div>
        </>
    );
}

export default Result;