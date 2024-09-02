import React from "react";
function qn3(){
  let age = 18; 
  let name = "kiran"; 
  let setStatus = false; 
  let userDefault = undefined;
  let responseValue = null;
  console.log(age);
  console.log(age);
  console.log(name);  
  console.log(setStatus);
  console.log(userDefault);
  console.log(responseValue);
  
  let oldage=age;
  age =25;
  let status =setStatus;
  setStatus=true;
  console.log(oldage);
  console.log(age);
  console.log(status);
  console.log(setStatus);

  alert("Check the console output");
}
const Greeting = () => {
    return(
        <div>
            <button onClick={qn3}>Click3</button>
        </div>
    )
}
export default Greeting;
