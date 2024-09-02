

const Weather = ()=>{
    const apikey = "15f91b01768e9ec87ebc96b011818e9d";
    const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    

    async function checkWeather(city){
        const response = await fetch(apiurl+city+`&appid=${apikey}`);
        if(response.status === 404){
           console.log("404")

        }else{
        var data = await response.json();
        console.log(data);

        document.querySelector(".city").textContent = data.name;
        document.querySelector(".degree").textContent = Math.round(data.main.temp)+"°c";
        document.querySelector(".condition").textContent = data.weather[0].main;

    }
    }
    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const input = document.getElementById("input")
    
    const handleSearch=()=>{
        checkWeather(searchBox.value)
    }


    
    return (
        <>
        
        <div className="search">
            <h1>Weather Application</h1>
            <input type="text" placeholder="Enter new location" id="input"></input>
            <button onClick={handleSearch}>Update Location</button>
        </div>
        <div>
            <h2>Current Weather in <span className="city"> New York</span></h2>
            <p>Temperature: <span className="degree">20°c</span></p>
            <p >Condition: <span className="condition">Sunny</span></p>
        </div>
        </>
    )
}
export default Weather;