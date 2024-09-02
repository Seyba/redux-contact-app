import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// React Router
import { BrowserRouter as Router } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import store from "./redux/store";
import { Navbar } from "./components/Navbar";
import { Panel } from "./components/Panel";
import { HeroSection } from "./components/HeroSection";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div >  
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          {/* <Navbar/> */}
          <App /> 
          {/*<HeroSection/>*/}
        </Router>
      </Provider>
    </React.StrictMode>
  </div>
);
