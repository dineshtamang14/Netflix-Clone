import React, {useState} from "react";
import "./LoginScreen.css";

function LoginScreen(){
    const [sign, setSignIn] = useState(false);
    return (
        <div className="loginScreen">
            <div className="loginScreen__background">
                <img 
                className="loginScreen__logo"
                src="https://netflix-clone-asset.s3.ap-south-1.amazonaws.com/asset/logo.png" 
                alt="Netflix-logo"
                />
                <button 
                onClick={() => setSignIn(true)}
                className="loginScreen__button">
                Sign In
                </button>
                
                <div className="loginScreen__gradient" />
                
                <div className="loginScreen__body">
                    <h1>Unlimited movies, TV shows and 
                    more.</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <h3>
                    Ready to watch? Enter your email to 
                    create or restart your 
                    membership.
                    </h3>

                    <div className="loginScreen__input">
                        <form>
                            <input type="email" 
                            placeholder="Email Address" />
                            <button className="loginScreen__getStarted">
                                GET STARTED
                            </button>
                        </form>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default LoginScreen;
