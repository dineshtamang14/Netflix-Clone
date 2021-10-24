import React from "react";
import "./LoginScreen.css";

function LoginScreen(){
    return (
        <div className="loginScreen">
            <div className="loginScreen__background">
                <img 
                className="loginScreen__logo"
                src="https://netflix-clone-asset.s3.ap-south-1.amazonaws.com/asset/logo.png" 
                alt="Netflix-logo"
                />
                <button 
                className="loginScreen__button">
                Sign In
                </button>
            </div>
        </div>
    )
}

export default LoginScreen;
