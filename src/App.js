
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
import Footer from "./Footer";
import About from "./About";
import Home from "./Home";
import Topics from "./Topics";




function App() {
  
  return (

    
    <div className="App">
      <Head />
      <Router>
      <div className="content">
        <ul className="menu">
          <li className='menu-item'>
            <Link to="/">Home</Link>
          </li>
          <li className="menu-item">
            <Link to="/about">About</Link>
          </li>
          <li className="menu-item">
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
        

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">
            <Topics/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
    <Footer />
    

    </div>
  );
}

export default App;
