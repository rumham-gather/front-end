import React, { Component } from 'react';
import gatherVideo from './Video/gather.mp4';
import ScrollMenu from '../Burger/Scrollmenu.js';
import '../Burger/scroll.css';

export default class Home extends Component {
    render() {
        return (
           <div>
            <main>
                <div className="homepage">
                    <div className="video">
                    <video autoPlay loop muted
                    style={{
                        position: "absolute",
                        width: "100%",
                        left: "50%",
                        top: "25%",
                        height: "90%",
                        objectFit: "cover",
                        transform: "translate(-50%, -50%)",
                        zIndex: "-1",
                    }}>
                    <source src={gatherVideo} type="video/mp4"/>
                    </video>
                    </div>
                    <div className="content">
                        <h3>Save Lives By Staying</h3>
                        <h1>Home for the Holidays</h1>
                        <h3>Gather is the ultimate collaborative food resource for the home cook, with daily kitchen tips, and, oh yeah, over 5000+recipes all at your fingertips.</h3>
                    </div>
                    <div className="mid-list">
                         <span className="mid-content-left">
                             <img src="./mock-up.png" width="250" height="250" alt="mock"/>
                            <h3>Expert cooks. Essential recipes.</h3>
                            <p>Unlimited digital access to 5,000+ recipes tested and curated by the experts at Gather, available on every device.</p>
                         </span>
                         <span className="mid-content-right">
                            <img src="./recipe-mock.png" width="250" height="250" alt="recipe"/>
                            <h3>The only Recipe Box you’ll ever need.</h3>
                            <p>Build and organize your personal Recipe Box so all your culinary inspirations are in one place. Including recipes from outside Gather.</p>
                         </span>
                    </div>
                    <div className="scroll-bar">
                        <h1>Our Newest Recipes</h1>
                            <ScrollMenu/>
                    </div>
                </div>
            </main>
            </div> 
        )
    }
}
