import React, { useState } from 'react';
import logo from '../Images/logo.png';
import SignIn from "./SignIn";

function Login() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginScreen">
      <div className="loginScreen_background">
        <img className="sign-In" src={logo} alt="logo" />
        {!signIn ? (<button className="sign_in" type="button" onClick={()=>setSignIn(true)}>
         Sign In 
        </button>)
         : ""}

        <div className="loginScreen_gradient"></div>
      </div>

      <div className="loginScreen_body">
        {signIn ? ( <SignIn /> ) : (
          <>
            <h1>Unlimited movies, TV shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h2>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h2>

            <div className="loginScreen_Input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button onClick={()=>setSignIn(true)}>Get Started </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
