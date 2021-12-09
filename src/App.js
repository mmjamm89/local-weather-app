import {useState, useEffect} from 'react';
import './styles/App.css';

const api = {
  key: "d3d157f5f2911c66ec500fac83b25c7e",
  base: "https://api.openweathermap.org/data/2.5/"
}

const App = () => {

const [query, setQuery] = useState('');
const [weather, setWeather] = useState(null);
const [city, setCity] = useState('');

const search = (e) =>{
  if(e.key === "Enter"){
    fetch(`${api.base}weather?q=${query}&units=metrics&APPID=${api.key}`)
  .then(response => response.json())
  .then(data => { 
    setWeather(data);
    setQuery('');
    setCity(query);
    })
  }
}

console.log(weather);

  return (
    <div className="App">
      <div className="content">
      <div className="search">
        <input 
          type="text"
          className="search-box"
          placeholder='Search...'
          onChange={e => setQuery(e.target.value)}
          onKeyPress={search}
          value={query}
          />
      </div>
      <h3 className="city">{city}</h3>
      <h1 className="temp">22</h1>
      <h3 className="current-weather">Cloudy</h3>
      <div className="current-img">
        <i className="fas fa-cloud-moon-rain" id="weather-img"></i>
      </div>
      <button className="degree-changer">C/F</button>
    </div>
    </div>
  );
}

export default App;
