import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <>
        <header id="header" className="header">
          <div className="container">
            <div className="branding">
              <h1 className="logo">
                <a href="index.html">
                  <span aria-hidden="true" className="icon_documents_alt icon"/>
                  <span className="text-highlight">Pretty</span><span className="text-bold">Docs</span>
                </a>
              </h1>
            </div>
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="index.html">Home</a></li>
              <li className="breadcrumb-item active">Components</li>
            </ol>
            <div className="top-search-box">
              <form className="form-inline search-form justify-content-center" action="" method="get">

                <input type="text" placeholder="Search..." name="search" className="form-control search-input"/>

                <button type="submit" className="btn search-btn" value="Search"><i className="fas fa-search"></i>
                </button>

              </form>
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default Navbar;
