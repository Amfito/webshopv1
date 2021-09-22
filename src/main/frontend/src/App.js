import "./App.css";
import NavBar from "./components/layout/NavBar";
import {
	BrowserRouter as Router,
	Route,
	Switch,
} from "react-router-dom";

import GlobalStateProvider from "./components/Context/GlobalStateProvider";

import Home from "./components/pages/Home.js";
import About from "./components/pages/About.js";
import Footer from "./components/layout/Footer.js";
import ProductInfo from "./components/pages/ProductInfo";
import Cart from "./components/pages/Cart";
import Register from "./components/pages/Register";

import PcParts from "./components/pages/PcParts";
import HomeTech from "./components/pages/HomeTech";
import Gaming from "./components/pages/Gaming";

import AddProduct from "./components/Services/AddProduct";

import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";

function App() {
	return (
		<GlobalStateProvider>
			<Router>
				<div className="App">
					<NavBar />
					<div className="container"></div>
					<NotificationContainer />
					<Switch>
						<Route
							exact
							path="/"
							component={Home}
						/>
						<Route
							exact
							path="/about"
							component={About}
						/>
						<Route
							exact
							path="/product/:prductId"
							component={ProductInfo}
						/>
						<Route
							exact
							path="/cart"
							component={Cart}
						/>
						<Route
							exact
							path="/products/pcParts"
							component={PcParts}
						/>
						<Route
							exact
							path="/products/homeTech"
							component={HomeTech}
						/>
						<Route
							exact
							path="/products/gaming"
							component={Gaming}
						/>
						<Route
							exact
							path="/register"
							component={Register}
						/>
						<Route
							exact
							path="/addproduct"
							component={AddProduct}
						/>
					</Switch>
					<Footer />
					<projectFetch />
				</div>
			</Router>
		</GlobalStateProvider>
	);
}

export default App;
