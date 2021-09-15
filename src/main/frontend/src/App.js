
import './App.css';
import NavBar from "./components/layout/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import GlobalStateProvider from './components/Context/GlobalStateProvider';

import Home from "./components/pages/Home.js"
import About from "./components/pages/About.js"
import Footer from './components/layout/Footer.js';
import ProductInfo from './components/pages/ProductInfo';
import Cart from './components/pages/Cart';

function App() {
  return (
    <GlobalStateProvider>
      <Router>
        <div className='App'>
          <NavBar />
          <div className='container'></div>
            <Switch>
              <Route exact path='/' component = {Home}  />
              <Route exact path='/about' component={About} />
              <Route exact path='/product/:prductId' component={ProductInfo} />
              <Route exact path='/cart' component={Cart} />
            </Switch>
            <Footer/>
          <projectFetch />
        </div>
      </Router>
    </GlobalStateProvider>
  );
}

export default App;
