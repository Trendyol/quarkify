import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Index from "./pages/Index";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Button from "./components/Button";
import Navbar from "./partials/Navbar";
import Footer from "./partials/Footer";

let currentLocation = window.location.pathname;


const routing = (
  <Router>
    <Navbar location={currentLocation}/>
    <div>
      <Route exact path="/" component={Index} />
      <Route path="/button" component={Button} />
    </div>
    <Footer/>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
