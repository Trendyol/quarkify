import React from 'react';
import Footer from "../partials/Footer";
import { Link, Route } from "react-router-dom";

function Index() {
  return (
    <>
      <div className="page-wrapper">
        <section className="cards-section text-center">
          <div className="container">
            <h2 className="title">Getting started is easy!</h2>
            <div className="intro">
              <p>Welcome to prettyDocs. This landing page is an example of how you can use a card view to present
                segments of your documentation. You can customise the icon fonts based on your needs.</p>
              <div className="cta-container">
                <Link className="btn btn-primary btn-cta" to="/button">Explore Docs</Link>
              </div>
            </div>
            <div id="cards-wrapper" className="cards-wrapper row">
              <div className="item item-green col-lg-4 col-6">
                <div className="item-inner">
                  <div className="icon-holder">
                    <i className="icon fa fa-paper-plane"></i>
                  </div>
                  <h3 className="title">Quick Start</h3>
                  <p className="intro">Demo example, consectetuer adipiscing elit</p>
                  <a className="link" href="start.html"><span></span></a>
                </div>
              </div>
              <div className="item item-pink item-2 col-lg-4 col-6">
                <div className="item-inner">
                  <div className="icon-holder">
                    <span aria-hidden="true" className="icon icon_puzzle_alt"></span>
                  </div>
                  <h3 className="title">Components</h3>
                  <p className="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
                  <a className="link" href="components.html"><span></span></a>
                </div>
              </div>
              <div className="item item-blue col-lg-4 col-6">
                <div className="item-inner">
                  <div className="icon-holder">
                    <span aria-hidden="true" className="icon icon_datareport_alt"></span>
                  </div>
                  <h3 className="title">Charts</h3>
                  <p className="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
                  <a className="link" href="charts.html"><span></span></a>
                </div>
              </div>
              <div className="item item-purple col-lg-4 col-6">
                <div className="item-inner">
                  <div className="icon-holder">
                    <span aria-hidden="true" className="icon icon_lifesaver"></span>
                  </div>
                  <h3 className="title">FAQs</h3>
                  <p className="intro">Layout for FAQ page. Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
                  <a className="link" href="faqs.html"><span></span></a>
                </div>
              </div>
              <div className="item item-primary col-lg-4 col-6">
                <div className="item-inner">
                  <div className="icon-holder">
                    <span aria-hidden="true" className="icon icon_genius"></span>
                  </div>
                  <h3 className="title">Showcase</h3>
                  <p className="intro">Layout for showcase page. Lorem ipsum dolor sit amet, consectetuer adipiscing
                    elit </p>
                  <a className="link" href="showcase.html"><span></span></a>
                </div>
              </div>
              <div className="item item-orange col-lg-4 col-6">
                <div className="item-inner">
                  <div className="icon-holder">
                    <span aria-hidden="true" className="icon icon_gift"></span>
                  </div>
                  <h3 className="title">License &amp; Credits</h3>
                  <p className="intro">Layout for license &amp; credits page. Consectetuer adipiscing elit.</p>
                  <a className="link" href="license.html"><span></span></a>
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>
    </>
  );
}

export default Index;
