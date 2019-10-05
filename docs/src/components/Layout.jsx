import React from "react";
import EmbeddedGist from "../partials/EmbeddedGist";
import { Box as QBox } from "quarkify/components/box";
import QLayout from "quarkify/components/layout";
import { Link } from "react-router-dom";
import renderTable from "../partials/Table";
import QButton from "quarkify/components/button";
import QInput from "quarkify/components/input";

const props = [
  {
    name: "fitted",
    type: "boolean",
    default: "false",
    description: "Removes the padding from the component"
  },
];

function Layout() {
  return (
    <>
      <section id="dashboards" className="doc-section">
        <h2 className="section-title">Layout</h2>
        <div className="section-block">
          <p>Layout is a wrapper component used to display elements in a set style.</p>
        </div>

        <h2 className="section-title">Usage</h2>
        <div className="section-block">
          <p>Since using the layout component without using any other component inside of it, some other components have been added. With careful eyes, its possible to see the color difference of the layout component.</p>
          <QBox>
            <QLayout>
              <QInput label="Email" subtext="Enter your email"/>
              <QButton>Some Button</QButton>
            </QLayout>
          </QBox>
          <EmbeddedGist gist="yavuzkoca/831fabb31bd688f74e93a0113216a427" file="layout_1.jsx"/>
        </div>

        <h2 className="section-title">Examples</h2>

        <div className="section-block">
          <h4 className="subsection-title">Fitted</h4>
          <p>Layout component has some padding by default. It is possible to remove it with using the fitted prop.</p>
          <QBox>
            <QLayout fitted>
              <QInput label="Email" subtext="Enter your email"/>
              <QButton>Some Button</QButton>
            </QLayout>
          </QBox>
          <EmbeddedGist gist="yavuzkoca/6356705be005ae8c1bf1c4f87ac0e037" file="layout_2.jsx"/>
        </div>

        {renderTable(props)}

      </section>
    </>
  );
}

export default Layout;
