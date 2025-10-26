import React from 'react';
import black_img from '../assets/black_img.png';
import red_img from '../assets/red_img.png';
import green_img from '../assets/green_img.png';

function Guide() {
    return (
        <>  <body className="guideBody">
                <div className="containerGuide">
                    <div className="backPage">
                        <a href='/' className="BackButton">Back</a>
                    </div>
                    <div className="guideHeader">
                        <h1 className="guideTitle">Your Guide to the Reflex Test</h1>
                    </div>
                    <div id="guideContent">
                        <div className="article1">
                            <h2 style={{textAlign: 'center'}}>1</h2>
                            <img src={black_img} alt="blackBg"/>
                            <p>
                                Pressing the "Start" button will take you to another page with black background.
                                Click any area in the black background to start the reaction test.
                            </p>
                        </div>
                        <div className="article2">
                            <h2 style={{textAlign: 'center'}}>2</h2>
                            <img src={red_img} alt="redBg"/>
                            <p>
                                After clicking the black background, it will change into red color.
                                Don't click any area in the red background or you will failed the test
                            </p>
                        </div>
                        <div className="article3">
                            <h2 style={{textAlign: 'center'}}>3</h2>
                            <img src={green_img} alt="greenBg"/>
                            <p>
                                Once the background changed into green color, click the background as fast as you can.
                                It will start to count your reaction time.
                            </p>
                        </div>
                    </div>
                </div>
            </body>
        </>
    )
}

export default Guide;