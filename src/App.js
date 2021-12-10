import React, { useState } from 'react';
import './styles/App.css';

const api = {
  key: "d3d157f5f2911c66ec500fac83b25c7e",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }

  console.log(weather.main.temp)

  return (
    <div className={(typeof weather.main != "undefined")
    ? ((weather.main.temp > 16)
    ? 'App warm'
    : 'App')
    : 'App'}>
      <div className="content">
        <div className="search">
          <input 
            type="text"
            className="search-box"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.main != "undefined") ? (
        <div className="data">          
            <h3 className="city">{weather.name}, {weather.sys.country}</h3>            
            <h1 className="temp">
              {Math.round(weather.main.temp)}°c
            </h1>
            <h3 className="current-weather">{weather.weather[0].main}</h3>
            <div className="current-img">
              <i className="fas fa-cloud-moon-rain" id="weather-img"></i>
            </div>
        </div>
        ) : ('')}
      </div>
    </div>
  );
}

export default App;
