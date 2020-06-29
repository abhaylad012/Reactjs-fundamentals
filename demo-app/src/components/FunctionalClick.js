import React from "react";

function FunctionalClick() {
  function clickMessage() {
    alert("Hello Abhay");
  }
  return (
    <div>
      <button onClick={clickMessage}>Click Functional</button>
    </div>
  );
}

export default FunctionalClick;
