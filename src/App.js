import moment from "moment";
import { useState } from "react";
import "./App.css";

function App() {
  const date = moment().format('MM/DD/YYYY hh:mm:ss');
  const [now, setNow] = useState(date);

  setTimeout( ()=> {
    const date = moment().format('MM/DD/YYYY hh:mm:ss');
    setNow(date);
  }, 1000)

  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome To Telestrations</p>
        <p>
          <div>by Nishloka and Aayush</div>
          <div>{now}</div>
          </p>

      </header>
    </div>
  );
}

export default App;
