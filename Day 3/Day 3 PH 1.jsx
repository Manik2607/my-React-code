const Goku=()=>{
    var value = 0
    
    function count(){
        if(value%3===0 && value!==0 &&document.getElementById("state").className==="kai"){
            console.log("test")
            document.getElementById("state").textContent="State   :   SuperSaiyan"
            document.getElementById("state").className="sai"
            value = 0
            return;
        }
        if(value%3===0 && value!==0 &&document.getElementById("state").className==="sai"){
            console.log("test")
            document.getElementById("state").textContent="State   :   Kaioken"
            document.getElementById("state").className="kai"
            value = 0
            return;
        }

        value = value+1;
    }
    return(<>
        <h1>Goku Transformation State</h1>
        <h2 id="state" className="kai">State  :  Kaioken</h2>
        <button onClick={count}>Transformation</button>
        </>
    )
}
export default Goku;