import React from 'react';
import { Box } from "quarkify/components/box";
import EmbeddedGist from "../partials/EmbeddedGist";
import QCheckBox from "quarkify/components/checkbox";
import QButton from "quarkify/components/button";
import { Link } from "react-router-dom";
import renderTable from "../partials/Table";

const props = [
  {
    name: "label",
    type: "string",
    default: "",
    description: "Adds text next to the component"
  },
  {
    name: "labelVariant",
    type: "enum: ['h1', 'h2', 'h3', 'smallParagraph', 'paragraph', 'body', 'subtitle']",
    default: "body",
    description: "Adds text next to the component"
  },
  {
    name: "labelColor",
    type: "enum: ['primary', 'green', 'red', 'black', 'dark-gray', 'light-gray', 'border-gray', 'white', 'yellow', 'zero']",
    default: "black",
    description: "Changes the color of the label"
  },
  {
    name: "error",
    type: "boolean",
    default: "false",
    description: "Shows the checkbox in error color palette."
  },
];

function CheckBox() {
  return (
    <>
      <section id="dashboards" className="doc-section">
        <h2 className="section-title">Checkbox</h2>
        <div className="section-block">
          <p>Checkbox control component allow a user to check an option or not. These components must be used with different value prop as they work as normal HTML checkbox tag.</p>
        </div>

        <h2 className="section-title">Usage</h2>
        <div className="section-block">
          <p>Here you can see simple usage of the checkbox component.</p>
          <Box>
            <QCheckBox name={"vehicle1"} value={"Bike"} label={"I have a bike"}/>
          </Box>
          <EmbeddedGist gist="yavuzkoca/efafa2c2f4c310c03687288ace16a065" file="checkbox_1.jsx"/>
        </div>

        <h2 className="section-title">Examples</h2>
        <div className="section-block">
          <h4 className="subsection-title">Label</h4>
          <p>Label prop can be useful to use to notify user about the purpose of the checkbox although it is optional</p>
          <Box>
            <QCheckBox name={"bike"} value={"bike"}/>
            <QCheckBox name={"car"} value={"Car"} label={"I have a car"}/>
          </Box>
          <EmbeddedGist gist="yavuzkoca/1776756811174b8c64397d08efc8ab83" file="checkbox_2.jsx"/>
        </div>

        <div className="section-block">
          <h4 className="subsection-title">Label Variant</h4>
          <p>When it is needed to change the text type in the label, labelVariant can be used for this purpose. You can check <Link to="/typography">Typography</Link> section to get more information.</p>
          <Box>
            <QCheckBox name={"typography"} value={"typography"} labelVariant="smallParagraph" label={"small Paragraph"}/>
            <QCheckBox name={"typography2"} value={"typography2"} labelVariant="paragraph" label={"paragraph"}/>
            <QCheckBox name={"typography3"} value={"typography3"} labelVariant="h1" label={"H1"}/>
            <QCheckBox name={"typography4"} value={"typography4"} labelVariant="h2" label={"H2"}/>
            <QCheckBox name={"typography5"} value={"typography5"} labelVariant="h3" label={"H3"}/>
          </Box>
          <EmbeddedGist gist="yavuzkoca/7efe11ab36b815134c1f8f9bf95e05e3" file="checkbox_3.jsx"/>
        </div>

        <div className="section-block">
          <h4 className="subsection-title">Label Color</h4>
          <p>Similarly, labelColor changes the color of the label. You can check <Link to="/typography">Typography</Link> section to get more information.</p>
          <Box>
            <QCheckBox name={"red"} value={"red"} label={"Red"} labelColor={"red"}/>
            <QCheckBox name={"yellow"} value={"yellow"} label={"Yellow"} labelColor={"yellow"}/>
          </Box>
          <EmbeddedGist gist="yavuzkoca/7efe11ab36b815134c1f8f9bf95e05e3" file="checkbox_3.jsx"/>
        </div>

        <div className="section-block">
          <h4 className="subsection-title">Error</h4>
          <p>Adding error prop to checkbox element changes the component's style to indicate an error has happened.</p>
          <Box>
            <QCheckBox name={"error"} value={"error"} error label={"Error"}/>
          </Box>
          <EmbeddedGist gist="yavuzkoca/5a092281eb643cceb302441571fd1c19" file="checkbox_4.jsx"/>
        </div>

        {renderTable(props)}

      </section>
    </>
  );
}

export default CheckBox;
