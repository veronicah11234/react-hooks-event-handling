import React from "react";

function Clickable({ onClick }) {
    return <button onClick={onClick}>Click Me</button>;
  }
  
  function App() {
    function handleClick() {
      console.log("click");
    }
  
    return <Clickable onClick={handleClick} />;
  }
