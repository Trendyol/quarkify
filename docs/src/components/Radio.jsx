import React from 'react';
import { Box } from "quarkify/components/box";
import EmbeddedGist from "../partials/EmbeddedGist";
import QRadio from "quarkify/components/radio";
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
    description: "Shows the radio in error color palette."
  },
];

function Radio() {
  return (
    <>
      <section id="dashboards" className="doc-section">
        <h2 className="section-title">Radio</h2>
        <div className="section-block">
          <p>Radio element is quite similar to checkbox component where the difference is radio element is not multi selectable</p>
        </div>

        <h2 className="section-title">Usage</h2>
        <div className="section-block">
          <p>Here you can see simple usage of the radio component.</p>
          <Box>
            <QRadio name={"gender"} value={"female"} label={"Female"}/>
          </Box>
          <EmbeddedGist gist="yavuzkoca/93c921a264043a196badcbbd40d1d979" file="radio_1.jsx"/>
        </div>

        <h2 className="section-title">Examples</h2>
        <div className="section-block">
          <h4 className="subsection-title">Label</h4>
          <p>Label prop can be useful to use to notify user about the purpose of the radio although it is optional</p>
          <Box>
            <QRadio name={"bike"} value={"bike"}/>
            <QRadio name={"bike"} value={"Car"} label={"I have a car"}/>
          </Box>
          <EmbeddedGist gist="yavuzkoca/ac1921af6eb8c556ddd0b9034a0ca245" file="radio_2.jsx"/>
        </div>

        <div className="section-block">
          <h4 className="subsection-title">Label Variant</h4>
          <p>When it is needed to change the text type in the label, labelVariant can be used for this purpose. You can check <Link to="/typography">Typography</Link> section to get more information.</p>
          <Box>
            <QRadio name={"typography"} value={"typography"} labelVariant="smallParagraph" label={"small Paragraph"}/>
            <QRadio name={"typography"} value={"typography2"} labelVariant="paragraph" label={"paragraph"}/>
            <QRadio name={"typography"} value={"typography3"} labelVariant="h1" label={"H1"}/>
            <QRadio name={"typography"} value={"typography4"} labelVariant="h2" label={"H2"}/>
            <QRadio name={"typography"} value={"typography5"} labelVariant="h3" label={"H3"}/>
          </Box>
          <EmbeddedGist gist="yavuzkoca/89e8f662e51aa955879b8acdf5fa35e7" file="radio_3.jsx"/>
        </div>

        <div className="section-block">
          <h4 className="subsection-title">Label Color</h4>
          <p>Similarly, labelColor changes the color of the label. You can check <Link to="/typography">Typography</Link> section to get more information.</p>
          <Box>
            <QRadio name={"red"} value={"red"} label={"Red"} labelColor={"red"}/>
            <QRadio name={"red"} value={"yellow"} label={"Yellow"} labelColor={"yellow"}/>
          </Box>
          <EmbeddedGist gist="yavuzkoca/f23c5b31821365b75fa2931a6dc4fd71" file="radio_4.jsx"/>
        </div>

        <div className="section-block">
          <h4 className="subsection-title">Error</h4>
          <p>Adding error prop to radio element changes the component's style to indicate an error has happened.</p>
          <Box>
            <QRadio name={"error"} value={"error"} error label={"Error"}/>
          </Box>
          <EmbeddedGist gist="yavuzkoca/18dc289ba37f33331fc82902be107ed6" file="radio_5.jsx"/>
        </div>

        {renderTable(props)}

      </section>
    </>
  );
}

export default Radio;
