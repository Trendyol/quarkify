import React from 'react';
import code from "../partials/Code"
import List from "quarkify/components/list";
import ListItem from "quarkify/components/list/listItem";

function GettingStarted() {
  return (
    <>
      <div className="page-wrapper">
        <section className="cards-section">
          <div className="container">
            <h2 className="">React Install</h2>
            <p>To install Quarkify into a React project you need to add the package:</p>
            {code("yarn add quarkify")}
            or
            {code("npm install quarkify --save")}
          </div>
          <div className="container">
            <h2 className="mt-5">Usage</h2>
            <p>All components in the quarkify can used by importing</p>
            {code("import SomeComponentName from \"quarkify/components/some-component-name\"")}
            <p>For example, to import Button:</p>
            {code("import Button from \"quarkify/components/button\"")}
            <p>or</p>
            {code("import QButton from \"quarkify/components/button\"")}
            <p>can be used since all components are exported as default.</p>
          </div>
          <div className="container">
            <h2 className="mt-5">Contributing</h2>
            <p>Any contributions you make are <b>greatly appreciated.</b></p>
            <List>
              <ListItem>Fork the Project</ListItem>
              <ListItem>Create your Feature Branch {code("git checkout -b feature/AmazingFeature")}</ListItem>
              <ListItem>Commit your Changes {code("git commit -m 'Add some AmazingFeature'")}</ListItem>
              <ListItem>Push to the Branch {code("git push origin feature/AmazingFeature")}</ListItem>
              <ListItem>Open a Pull Request</ListItem>
            </List>
          </div>
        </section>
      </div>
    </>
  );
}

export default GettingStarted;
