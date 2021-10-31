import React from 'react'
import "./plansScreen.css";

function PlansScreen() {
    return (
        <div className="plansScreen">
            <p>Renewal data: 20/12/23</p>
            <div className="plansScreen__plan">
                <div className="plansScreen__info">
                    <h5>Premiub</h5>
                    <h6>4K + HDR</h6>
                </div> 
                <button>Subscribe</button>
                <div className="plansScreen__info">
                    <h5>Basic</h5>
                    <h6>720p</h6>
                </div> 
                <button>Subscribe</button>  
                <div className="plansScreen__info">
                    <h5>Standard</h5>
                    <h6>1080p</h6>
                </div> 
                <button className="plansScreen__plan--disabled">Current Package</button>           
            </div>
        </div>
        
    )
}

export default PlansScreen;
