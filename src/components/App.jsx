import React from "react";
import Login from "./Login";

//let userIsRegistered = true;
let userIsRegistered = false;

function App() {
  return (
    <div className="container">
     <Login isRegistered={userIsRegistered}/>
    </div>
  );
}

export default App;
