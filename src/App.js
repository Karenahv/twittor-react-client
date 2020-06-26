import React, { useState } from "react";
import { Button } from "react-bootstrap";
import SignInSignUp from "./page/SignInSignUp";
import { ToastContainer } from "react-toastify";

export default function App() {
  const [user, setUser] = useState({ name: "karen" });

  return (
    <div>
      {user ? (
        <div>
          <SignInSignUp></SignInSignUp>
        </div>
      ) : (
        <h1>No estás logueado</h1>
      )}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      />
    </div>
  );
}
