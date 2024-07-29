import React from "react";
import React, { useState } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const SendMessage = () => {
  const [message, setMessage] = useState("");
    
  return (
    <form className="send-message">
      <input
        ...
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
};

const sendMessage = async (event) => {
  event.preventDefault();
  if (message.trim() === "") {
    alert("Enter valid message");
    return;
  }
  const { uid, displayName, photoURL } = auth.currentUser;
  await addDoc(collection(db, "messages"), {
    text: message,
    name: displayName,
    avatar: photoURL,
    createdAt: serverTimestamp(),
    uid,
  });
  setMessage("");
};

return (
  <form onSubmit={(event) => sendMessage(event)} className="send-message">
...
export default SendMessage;
