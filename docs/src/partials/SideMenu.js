import React from 'react';

class SideMenu extends React.Component {
  render() {
    return (
      <>
        <div className="doc-sidebar col-md-3 col-12 order-0 d-none d-md-flex">
          <div id="doc-nav" className="doc-nav">
            <nav id="doc-menu" className="nav doc-menu flex-column sticky">
              <a className="nav-link scrollto" href="#dashboards">Dashboards</a>
              <a className="nav-link scrollto" href="#app-components">App Components</a>
              <nav className="doc-sub-menu nav flex-column">
                <a className="nav-link scrollto" href="#projects">Projects</a>
                <a className="nav-link scrollto" href="#discussions">Discussions</a>
                <a className="nav-link scrollto" href="#members">Members</a>
                <a className="nav-link scrollto" href="#account">User Account</a>
                <a className="nav-link scrollto" href="#others">Others</a>
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
