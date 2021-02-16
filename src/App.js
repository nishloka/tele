import moment from "moment";
import "./App.css";

function App() {
  const date = moment().format('MM/DD/YYYY hh:mm');

  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome To Telestrations</p>
        <p>
          <div>by Nishloka and Aayush</div>
          <div>{date}</div>
          </p>

      </header>
    </div>
  );
}

export default App;
