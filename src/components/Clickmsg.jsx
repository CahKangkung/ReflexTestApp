import React from 'react';
import { useState } from 'react';
import Result from './Result';

function Clickmsg({ clickColor, startCount }) {

    const [clicked, setClicked] = useState(false);
    const [clickText, setClickText] = useState("block");
    const [resultBg, setResultBg] = useState(clickColor);
    const [reflexTime, setReflexTime] = useState(null);

    const reactClick = () => {
        if (clicked) return;
        setClicked(true);
        setClickText("none");
        setResultBg("rgb(184, 83, 0)");

        const clickTime = Date.now()
        setReflexTime(clickTime - startCount)


    }
    
    return (
        <>
        {/* <body className="mainBody" onClick={reactClick} style={{ backgroundColor: resultBg }}> */}
        <div className="mainBody" onClick={reactClick} style={{ 
            backgroundColor: resultBg, 
            height: "100vh", 
            width: "100vw",
            overflow: "hidden",
            margin: 0,
            padding: 0,
            top: 0,
            left: 0,
            position: "fixed" }}>
            <h1 style={{
                textAlign: 'center',
                color: 'white',
                fontSize: '100px',
                padding: '10%',
                margin: '9%',
                display: clickText,
                fontFamily: 'Inter, sans-serif',
            }}>CLICK</h1>
            {clicked && <Result userReaction={reflexTime}/>}
        </div>
        {/* </body> */}
        </>
    )
}

export default Clickmsg;