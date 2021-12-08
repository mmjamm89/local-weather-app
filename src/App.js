import {useState, useEffect} from 'react';
import axios from 'axios';
import './styles/App.css';

const key = "";

const client = axios.create({
  baseURL: ""
});

const App = () => {

const [temp, setTemp] = useState(null);
const [weather, setWeather] = useState(null);
const [img, setImg] = useState(null)
const [background, setBackground] = useState(null);

// useEffect(() => {
//   client.get(key).then(response => {
//     setTemp(response.data)
//   })
// }, [])

  return (
    <div className="App">
     <Content />
    </div>
  );
}

const Content = () => {
  return(
    <div className="content">
      <h3 className="city">Buenos Aires</h3>
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
