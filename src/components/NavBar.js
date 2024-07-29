import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";

const NavBar = () => {
  const [user] = useAuthState(auth);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider).catch(error => {
      console.error("Error signing in with Google:", error);
    });
  };

  const signOut = () => {
    auth.signOut().catch(error => {
      console.error("Error signing out:", error);
    });
  };

  return (
    <nav className="nav-bar">
      <h1>Quick Chat</h1>
      {user ? (
        <button onClick={signOut} className="sign-out" type="button">
          Sign Out
        </button>
      ) : (
        <button className="sign-in" onClick={googleSignIn}>
          <img
            src={GoogleSignin}
            alt="Sign in with Google"
            type="button"
          />
        </button>
      )}
    </nav>
  );
};

export default NavBar;
