import React from 'react';
import { Link } from "react-router-dom";

class SideMenu extends React.Component {
  render() {
    return (
      <>
        <div className="doc-sidebar col-md-3 col-12 order-0 d-none d-md-flex">
          <div id="doc-nav" className="doc-nav">
            <nav id="doc-menu" className="nav doc-menu flex-column sticky">
              <Link className="nav-link" to="getting-started">Getting Started</Link>
              <a className="nav-link" href="#app-components">App Components</a>
              <nav className="doc-sub-menu nav flex-column">
                <Link className="nav-link" to="/accordion">Accordion</Link>
                <Link className="nav-link" to="/box">Box</Link>
                <Link className="nav-link" to="/button">Button</Link>
                <Link className="nav-link" to="/checkbox">Checkbox</Link>
                <Link className="nav-link" to="/icon">Icon</Link>
                <Link className="nav-link" to="/input">Input</Link>
                <Link className="nav-link" to="/layout">Layout</Link>
                <Link className="nav-link" to="/list">List</Link>
                <Link className="nav-link" to="/loader">Loader</Link>
                <Link className="nav-link" to="/modal">Modal</Link>
                <Link className="nav-link" to="/popup">Popup</Link>
                <Link className="nav-link" to="/product-slider">Product Slider</Link>
                <Link className="nav-link" to="/radio">Radio</Link>
                <Link className="nav-link" to="/rating">Rating</Link>
                <Link className="nav-link" to="/ripple">Ripple</Link>
                <Link className="nav-link" to="/scroll-to-top">Scroll To Top</Link>
                <Link className="nav-link" to="/select">Select</Link>
                <Link className="nav-link" to="/sub-header">Sub Header</Link>
                <Link className="nav-link" to="/switch">Switch</Link>
                <Link className="nav-link" to="/typography">Typography</Link>
              </nav>
            </nav>
          </div>
        </div>
      </>
    );
  }
}

export default SideMenu;
