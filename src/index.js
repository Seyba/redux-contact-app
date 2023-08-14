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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 ...">  
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <Navbar/>
          <App />
        </Router>
      </Provider>
    </React.StrictMode>
  </div>
);
