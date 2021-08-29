import React, { useState } from "react";
import "./App.css";

import Form from "./components/Form";
import Todolist from "./components/Todolist";
function App() {
  const [Auth, setAuth] = useState(false);
  const [Password, setPassword] = useState("");

  function AuthCheck() {
    if (Password === "1221") {
      setAuth(true);
    }
  }
  return (
    <div className="App">
      {Auth ? (
        <>
          <h1>Akash's Data</h1>
          <Form />
          <Todolist />
        </>
      ) : (
        <div className="Auth">
          <input onChange={(e) => setPassword(e.target.value)}></input>

          <button onClick={AuthCheck}> Submit </button>
        </div>
      )}
    </div>
  );
}

export default App;
