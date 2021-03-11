
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import "./App.css";
import Head from "./Head/Head";

function App() {
  
  return (

    
    <div className="App">
      <Head />
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/about">
            <div>About</div>
          </Route>
          <Route path="/topics">
            <div>Topics</div>
          </Route>
          <Route path="/">
            <div>Home page</div>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
