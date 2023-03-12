import React, { useRef, useState } from 'react';
import { auth } from '../firebase';

function SignIn() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [show, setShow] = useState(false);

  const hide = () => {
    setShow(true);
  };

  const Register =(e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then(() => {
      })
      .catch(error => {
        alert(error.message.slice(9, -22));
      });
  };

  const signIn = e => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then(() => {
      })
      .catch(error => {
        alert(error.message.slice(9, -22));
      });
  };

  return (
    <div className="signIn_Screen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email" required />
        <input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          required
        />
        <button onClick={signIn}>Sign In</button>
      </form>

      <h3 className="checker">
        <span>
          <input type="checkbox" />
          Remember me
        </span>
        <span>need help?</span>
      </h3>

      <h2>
        <span className="light">New to Netflix? </span>
        <span className="link" onClick={Register}>
          Sign up now.
        </span>
      </h2>

      <h1 className="top">
        <span className="light">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
        </span>
        {show ? (
          ''
        ) : (
          <span onClick={hide} className="blue">
            Learn more.
          </span>
        )}
      </h1>

      {show ? (
        <h1 className="below">
          <p className="light">
            The information collected by Google reCAPTCHA is subject to the
            Google
            <span className="blue"> Privacy Policy</span> and
            <span className="blue"> Terms of Service</span>, and is used for
            providing, maintaining, and improving the reCAPTCHA service and for
            general security purposes (it is not used for personalised
            advertising by Google).
          </p>
        </h1>
      ) : (
        ''
      )}
    </div>
  );
}

export default SignIn;
