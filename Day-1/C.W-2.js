import React from "react";
function qn2(){
  let myobject={name:"Madras"};
  let newObject=myobject;
  myobject.name="Chennai";
  console.log(newObject);

  let myarray=["a","e","i","o","u"];
  let vowelArray=myarray;
  myarray.push("u");
  console.log(vowelArray);
  alert("Check the console output!");
}
const Greeting = () => {
    return(
        <div>
            <button onClick={qn2}>Click2</button>
        </div>
    )
}
export default Greeting;
