import React from 'react';
import { Link } from "react-router-dom";

class SideMenu extends React.Component {
  render() {
    return (
      <>
        <div className="doc-sidebar col-md-3 col-12 order-0 d-none d-md-flex">
          <div id="doc-nav" className="doc-nav">
            <nav id="doc-menu" className="nav doc-menu flex-column sticky">
              <Link className="nav-link" href="#dashboards">Dashboards</Link>
              <a className="nav-link" href="#app-components">App Components</a>
              <nav className="doc-sub-menu nav flex-column">
                <Link className="nav-link" to="/accordion">Accordion</Link>
                <Link className="nav-link" to="/box">Box</Link>
                <Link className="nav-link" to="/button">Button</Link>
                <Link className="nav-link" to="/checkbox">Checkbox</Link>
                <a className="nav-link" href="#members">Members</a>
                <a className="nav-link" href="#account">User Account</a>
                <a className="nav-link" href="#others">Others</a>
              </nav>
              <a className="nav-link scrollto" href="#ui-components">UI Components</a>
            </nav>
          </div>
        </div>
      </>
    );
  }
}

export default SideMenu;
