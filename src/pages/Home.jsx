import React from 'react';
import '../App.css';

function Home() {
    return (
        <>
        <body className="homeBody">
            <div className="container">
                <div className="Title">
                    <h1>REACTION</h1>
                    <h1>TEST</h1>
                </div>
                <div className="MenuLink">
                    <a href="/main" className="Button1">Start</a>
                    <a href="/guide" className="Button2">Guide</a>
                </div>
            </div>
        </body>
        </>
    );
}

export default Home;