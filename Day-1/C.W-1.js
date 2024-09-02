import React from "react";
function qn1(){
  alert("Message from Javascript Alert!");
  console.log("Message to developer");
}
const Greeting = () => {
    return(
        <div>
            <h1>Let we see the output of JAVASCRIPT</h1>
            <button onClick={qn1}>Click1</button>
        </div>
    )
}
export default Greeting;
