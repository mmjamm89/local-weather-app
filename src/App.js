import {useState, useEffect} from 'react';
import axios from 'axios';
import './styles/App.css';

const api = {
  key: "d3d157f5f2911c66ec500fac83b25c7e",
  base: "https://api.openweathermap.org/data/2.5/"
}


// const key = "";

// const client = axios.create({
//   baseURL: ""
// });

const App = () => {

const [city, setCity] = useState('Buenos Aires');
const [temp, setTemp] = useState(null);
const [weather, setWeather] = useState(null);
const [img, setImg] = useState(null)
const [background, setBackground] = useState(null);

fetch(`${api.base}weather?q=${city}&units=metrics&APPID=${api.key}`)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    setWeather('');
    
  })
  

// useEffect(() => {
//   client.get(key).then(response => {
//     setTemp(response.data)
//   })
// }, [])

  return (
    <div className="App">
     <Content city={city}/>
    </div>
  );
}

const Content = ({city}) => {
  return(
    <div className="content">
      <h3 className="city">{city}</h3>
      <h1 className="temp">22</h1>
      <h3 className="current-weather">Cloudy</h3>
      <div className="current-img">
        <i className="fas fa-cloud-moon-rain" id="weather-img"></i>
      </div>
      <button className="degree-changer">C/F</button>
    </div>
  )
}

export default App;
