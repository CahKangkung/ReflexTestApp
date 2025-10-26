import React from 'react';
import { useState, useEffect, useRef } from 'react';
import Waitmsg from '../components/Waitmsg';
import Clickmsg from '../components/Clickmsg';
import Failed from '../components/Failed';

function Main() {
    const [bgColor, setBgColor] = useState("black");
    const [textStart, setTextStart] = useState("block");
    const [backButton, setBackButton] = useState("block");
    // const [displayWait, setDisplayWait] = useState("block");

    const [textWait, setTextWait] = useState(false);
    const [textClick, setTextClick] = useState(false);
    const [click, setClick] = useState(false);
    const [falseClick, setFalseClick] = useState(false);

    const startTime = useRef(null);
    const randomNum = Math.floor((Math.random() * 5) + 2);
    const randomMs = randomNum * 1000;
    const [stopWatch, setStopWatch] = useState(null);

    const handleColor = () => {
        if (click === true) return;
        setClick(true);
        setBgColor("red");
        setTextStart("none");
        setTextWait(true);      
    };

    useEffect(() => {
        if (textWait === true && bgColor === "red" && falseClick === false) {
            startTime.current = setTimeout(() => {
                setBgColor("Green");
                setTextWait(false);
                setTextClick(true);
                setBackButton("none");
                setStopWatch(Date.now());

            }, randomMs);
        }
        return () => clearTimeout(startTime.current);
    }, [textWait, bgColor, falseClick]);

    const handleFailed = () => {
        setFalseClick(true);
        setTextWait(false);
        clearTimeout(startTime.current);
        setBackButton("none");
    }

    return (
        <>
            <div id="prevPage" style={{ display: backButton }}>
                <a href='/' className="prevButton">Back</a>
            </div>
            <body className="mainBody" onClick={handleColor} style={{ backgroundColor: bgColor }}>
                <div className="container">

                    {/* Failed Condition */}
                    {falseClick && <Failed />}

                    {/* Wait Condition */}
                    {textWait && !falseClick && <Waitmsg clickColor={bgColor} eventClick={handleFailed}/>}
                    
                    {/* Success Condition */}
                    {textClick && !falseClick && <Clickmsg clickColor={ bgColor } startCount={stopWatch}/>}

                    <div id="mainContent" style={{ display: textStart }}>
                        <h1>Click Any Area to Start</h1>
                    </div>
                </div>
            </body>
        </>
    )
}

export default Main;