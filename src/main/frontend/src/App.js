
import './App.css';
import NavBar from "./components/layout/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import Home from "./components/pages/Home.js"
import About from "./components/pages/About.js"
import Footer from './components/layout/Footer.js';
function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <div className='container'></div>
          <Switch>
            <Route exact path='/' component = {Home}  />
            <Route exact path='/about' component={About} />
            <Route exact path='/cart'  />
          </Switch>
          <Footer/>
        <projectFetch />
      </div>
    </Router>
  );
}

export default App;
