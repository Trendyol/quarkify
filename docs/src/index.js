import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Index from "./pages/Index";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Button from "./components/Button.jsx";
import Navbar from "./partials/Navbar";
import Footer from "./partials/Footer";
import CheckBox from "./components/CheckBox";
import SideMenu from "./partials/SideMenu";

const routing = (
  <Router>
    <Navbar/>
    <div>
      <Route exact path="/" component={Index} />
      <div className="doc-wrapper">
        <div className="container">
          <div className="doc-body row">
            <Route path="/:component" component={SideMenu}/>
            <div className="doc-content col-md-9 col-12 order-1">
              <div className="content-inner">
                <Route path="/button" component={Button} />
                <Route path="/checkbox" component={CheckBox} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
