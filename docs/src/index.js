import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Index from "./pages/Index";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Button from "./components/Button.jsx";
import Navbar from "./partials/Navbar";
import Footer from "./partials/Footer";
import CheckBox from "./components/CheckBox.jsx";
import SideMenu from "./partials/SideMenu";
import Accordion from "./components/Accordion";
import Box from "./components/Box";
import Modal from "./components/Modal";
import Loader from "./components/Loader";
import List from "./components/List";
import Layout from "./components/Layout";
import Input from "./components/Input";
import Icon from "./components/Icon";
import Popup from "./components/Popup";
import ProductSlider from "./components/ProductSlider";
import Radio from "./components/Radio";

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
                <Route path="/accordion" component={Accordion} />
                <Route path="/box" component={Box} />
                <Route path="/button" component={Button} />
                <Route path="/checkbox" component={CheckBox} />
                <Route path="/icon" component={Icon} />
                <Route path="/input" component={Input} />
                <Route path="/layout" component={Layout} />
                <Route path="/list" component={List} />
                <Route path="/loader" component={Loader} />
                <Route path="/modal" component={Modal} />
                <Route path="/popup" component={Popup} />
                <Route path="/product-slider" component={ProductSlider} />
                <Route path="/radio" component={Radio} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
