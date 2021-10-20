import React from 'react'
import "./Banner.css"

function Banner() {
    return (
        <header className="banner"
            style = {{
                backgroundSize: "cover",
                backgroundImage: `url("https://netflix-clone-asset.s3.ap-south-1.amazonaws.com/asset/banner.jpeg")`,
                backgroundPosition: "center center",
            }}
        >
            
        <div className="banner__contents">
            <h1 className="banner__title">Movie Name</h1>
            <div className="banner__buttons">
                <button className="banner__button">Play</button>
                <button className="banner__button">My List</button>
            </div>
            <h1 className="banner__description">this is the test description</h1>
        </div>
        <div className="banner--fadeBottom" />
        </header>
    )
}

export default Banner;
