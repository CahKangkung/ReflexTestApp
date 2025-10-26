function Waitmsg({ clickColor, eventClick }) {
    return (
        <>
        <div className="waitBody" onClick={eventClick} style={{ 
            backgroundColor: clickColor,
            height: "100vh",
            width: "100vw",
            padding: 0,
            margin: 0,
            top: 0,
            left: 0,
            position: "fixed",
            overflow: "hidden" }}>
            
            <h1 style={{
                color: "white",
                textAlign: "center",
                fontSize: "50px",
                padding: "10px",
                margin: "10px",
                marginTop: "5%",
                // display: waitText,
                display: "block"
            }}>Wait Till Green Color</h1>

        </div>
        </>
    )
}

export default Waitmsg;