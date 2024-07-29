import React from 'react';
import GoogleSignin from '../img/btn_google_signin_dark_pressed_web.png';
import { auth } from '../firebase';
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider)
    .catch(error => {
      console.error('Error signing in with Google:', error);
      // Handle the error appropriately
    });
};

const Welcome = () => {
  return (
    <main className="welcome">
      <h2>Welcome to Quick Chat.</h2>
      <img src="/logo512.png" alt="ReactJs logo" width={50} height={50} />
      <p>Sign in with Google to chat with everyone.</p>
      <button className="sign-in" onClick={signInWithGoogle}>
        <img
          src={GoogleSignin}
          alt="sign in with google"
          type="button"
        />
      </button>
    </main>
  );
};

export default Welcome;
