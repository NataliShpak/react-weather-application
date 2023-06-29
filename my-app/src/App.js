import logo from './logo.svg';
import './App.css';
import WeatherSearch from "./WeatherSearch";



function App() {
  return (
    <div className="App">
      <h1>
        React weather application
      </h1>
       <WeatherSearch />
       <small>
        <a href="https://github.com/seheichenko-anna/weather-react.git">
          Open-source code
        </a>
      </small>
      <footer>
        <a href='https://github.com/NataliShpak/react-weather-application' target='_blank'>Open-source code on GitHub</a> by Nataliia Shpak
      </footer>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
