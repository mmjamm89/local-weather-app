import './styles/App.css';

const App = () => {
  return (
    <div className="App">
     <Content />
    </div>
  );
}

const Content = () => {
  return(
    <div className="content">
      <h3 class="city">Buenos Aires</h3>
      <h1 className="temp">22</h1>
      <h3 className="current-weather">Cloudy</h3>
      <div className="current-img">
        <i class="fas fa-cloud-moon-rain" id="weather-img"></i>
      </div>
      <button className="degree-changer">C/F</button>
    </div>
  )
}

export default App;
