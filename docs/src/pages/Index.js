import React from 'react';
import { Link, Route } from "react-router-dom";
import List from "quarkify/components/list";
import ListItem from "quarkify/components/list/listItem";
import Typography from "quarkify/components/typography";

function Index() {
  return (
    <>
      <div className="page-wrapper">
        <section className="cards-section text-center">
          <div className="container">
            <img src="./assets/images/quarkify_logo.png" alt="Logo" width="200" height="200" style={{maxWidth: "100%"}} />
            <Typography variant="paragraph" bold>An awesome lightweight React UI Component library</Typography>
            <div className="intro" style={{ marginTop: "30px" }}>
              <p style={{textAlign: "left"}}>There are many great UI libraries for react available but almost all of them are highly customizable and full of boilerplate code, so we decided to create our own lightweight React Component library and you should give it a try. Here's why:
                <List>
                  <ListItem>Your time will be spent doing actual work instead of creating simple components.</ListItem>
                  <ListItem>You will not worry about consistency across your components.</ListItem>
                  <ListItem>Each component is implemented with accessibility in mind.</ListItem>
                  <ListItem>You may also suggest changes by forking this repo and creating a pull request or opening an issue with the tag.</ListItem>
                </List>
              </p>
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
                  <p className="intro">Get started with Quarkify for building amazing apps</p>
                  <a className="link" href="/getting-started"><span></span></a>
                </div>
              </div>
              <div className="item item-pink item-2 col-lg-4 col-6">
                <div className="item-inner">
                  <div className="icon-holder">
                    <span aria-hidden="true" className="icon icon_puzzle_alt"></span>
                  </div>
                  <h3 className="title">Components</h3>
                  <p className="intro">Quickly search for and navigate all of the components</p>
                  <a className="link" href="components.html"><span></span></a>
                </div>
              </div>
              <div className="item item-blue col-lg-4 col-6">
                <div className="item-inner">
                  <div className="icon-holder">
                    <span aria-hidden="true" className="icon icon_datareport_alt"></span>
                  </div>
                  <h3 className="title">Github</h3>
                  <p className="intro">Check out the source code and contribute!</p>
                  <a className="link" href="https://github.com/Trendyol/quarkify"><span></span></a>
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
