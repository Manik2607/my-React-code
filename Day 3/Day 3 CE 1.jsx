const Toggle = ()=>{

    function greeting(){
        var button = document.getElementById('button')
        if(button.className==="show"){
            button.textContent="Show Component"
            console.log("Test")
            button.className="hide"
             document.getElementById('greet').innerHTML=""
            return;
        }

        var value = document.getElementById('greet')
        
        document.getElementById('greet').innerHTML="Hi! How are You!!!"
        document.getElementById('button').textContent="Hide Component"
        button.className="show"
    }
    return(
        <>
        <button onClick={greeting} id="button" className="hide">Show Component</button>
        <p id="greet"></p>
        </>
    )
}
export default Toggle;