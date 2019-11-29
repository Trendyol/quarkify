import React from 'react';
import { Box } from "quarkify/components/box";
import EmbeddedGist from "../partials/EmbeddedGist";
import renderTable from "../partials/Table";
import faker from "faker";
import QSwitch from "quarkify/components/switch"

const props = [
  {
    name: "duration",
    type: "number",
    default: "500",
    description: "Time of the scroll animation"
  },
];

function Switch() {
  return (
    <>
      <section id="dashboards" className="doc-section">
        <h2 className="section-title">Switch</h2>
        <div className="section-block">
          <p>Switch component is a different variation of checkbox and radio components. Instead of ticking and unticking the options, it changes with switch animation and appearance</p>
        </div>

        <h2 className="section-title">Usage</h2>
        <div className="section-block">
          <p>Here is the simple usage of switch component</p>
          <Box>
            <QSwitch type="radio" name={"car"} value={"car"} label={"Car"}/>
          </Box>
          <EmbeddedGist gist="yavuzkoca/9290882dc7207afa2297b7ef9a2b47f9" file="switch_1.jsx"/>
        </div>

        <h2 className="section-title">Examples</h2>
        <div className="section-block">
          <h4 className="subsection-title">Type</h4>
          <p>There are two types for the switch component which are radio and checkbox. </p>
          <Box>
            <p>As Radio</p>
            <QSwitch type="radio" name={"gender"} value={"female"} label={"Female"}/>
            <br/>
            <br/>
            <QSwitch type="radio" name={"gender"} value={"male"} label={"Male"}/>
          </Box>
          <Box>
            <p>As Checkbox</p>
            <QSwitch type="checkbox" name={"middle-earth"} value={"sauron"} label={"Sauron"}/>
            <br/>
            <br/>
            <QSwitch type="checkbox" name={"middle-earth"} value={"saruman"} label={"Saruman"}/>
          </Box>
          <EmbeddedGist gist="yavuzkoca/d8c19a5a1b38bee2ba9805af38adb579" file="switch_2.jsx"/>
        </div>

        <div className="section-block">
          <h4 className="subsection-title">Error</h4>
          <p>Adding error prop to switch changes the component's style to indicate an error has happened.</p>
          <Box>
            <QSwitch name={"tea"} value={"tea"} label={"Tea"} error />
          </Box>
          <EmbeddedGist gist="yavuzkoca/2855aae4ebbc2d57892908e302e2bf74" file="switch_3.jsx"/>
        </div>

        <div className="section-block">
          <h4 className="subsection-title">Disabled</h4>
          <p>Removes the ability to click or target the component with giving different background and font color.</p>
          <Box>
            <QSwitch name={"coffee"} value={"coffee"} label={"Coffee"} disabled />
          </Box>
          <EmbeddedGist gist="yavuzkoca/11c9deff9ba4e32b14262a3333fb3d80" file="switch_4.jsx"/>
        </div>

        <div className="section-block">
          <h4 className="subsection-title">Checked</h4>
          <p>Selecting an option by default can be achieved by setting checked prop to true.</p>
          <Box>
            <QSwitch name={"success"} value={"success"} label={"Success"} checked />
          </Box>
          <EmbeddedGist gist="yavuzkoca/7fec87bcf7ba9762a80cbcd1a3860fc3" file="switch_5.jsx"/>
        </div>

        {renderTable(props)}

      </section>
    </>
  );
}

export default Switch;
