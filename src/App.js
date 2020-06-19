import React, { useState } from "react";
import { Button } from "react-bootstrap";
import SignInSignUp from "./page/SignInSignUp";
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
    </div>
  );
}
