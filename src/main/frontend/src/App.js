
import './App.css';
import NavBar from "./components/layout/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./components/pages/Home.js"
import Footer from './components/layout/Footer.js';
function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <div className='container'></div>
        <AnimatePresence exitBeforeEnter>
          <Switch>
            <Route exact path='/' component = {Home}  />
            <Route exact path='/about'  />
            <Route exact path='/cart'  />
          </Switch>
          <Footer/>
        </AnimatePresence>
        <projectFetch />
      </div>
    </Router>
  );
}

export default App;
