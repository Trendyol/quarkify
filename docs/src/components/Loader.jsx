import React from "react";
import EmbeddedGist from "../partials/EmbeddedGist";
import { Box as QBox } from "quarkify/components/box";
import renderTable from "../partials/Table";
import QLoader from "quarkify/components/loader";
import faker from "faker";
import QButton from "quarkify/components/button";

const props = [
  {
    name: "active",
    type: "boolean",
    default: "false",
    description: "Determines whether the loader is active or not."
  }
];

const onClick = () => alert("This should not pop up!");

function Loader() {
  return (
    <>
      <section id="dashboards" className="doc-section">
        <h2 className="section-title">Loader</h2>
        <div className="section-block">
          <p>A loader is a component to display loading status. It can be used when the application needs to indicate to the user that there are running requests and the user should wait. This component's position is absolute and the parent wrapper component must have a relative position.</p>
        </div>

        <h2 className="section-title">Usage</h2>
        <div className="section-block">
          <p>Loaders are either active or disabled. When their active prop set to true, all the sibling components that shares the same parent will take the effect.</p>
          <QBox>
            <QLoader active/>
            <h1>Content 3</h1>
            <p>{faker.lorem.lines(10)}</p>
            <QButton onClick={onClick}>Button</QButton>
          </QBox>
          <EmbeddedGist gist="yavuzkoca/5066e193e691a666380a1e6708489888" file="loader_1.jsx"/>
        </div>

        {renderTable(props)}

      </section>
    </>
  );
}

export default Loader;
