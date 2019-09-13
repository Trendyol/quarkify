import React, { PureComponent, useState } from "react";
import renderTable from "../partials/Table";
import { Box } from "quarkify/components/box";
import QButton from "quarkify/components/button";
import EmbeddedGist from "../partials/EmbeddedGist";
import { Accordion as QAccordion } from "quarkify/components/accordion";

const props = [
  {
    name: "expanded",
    type: "boolean",
    default: "false",
    description: "Determines the expand status"
  },
  {
    name: "onChange",
    type: "function",
    default: "",
    description: "Function to be called on change of the expand status"
  }
];

function Accordion() {
  const [expanded, setExpanded] = useState(true);

  const handleChange = () => {
    setExpanded(!expanded);
  };

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <section id="dashboards" className="doc-section">
        <h2 className="section-title">Accordion</h2>
        <div className="section-block">
          <p>Accordion component hides and reveals its contents depending on user action. By default accordion holds an expanded state set to false. But you can implement your own state to control accordion component.</p>
        </div>

        <h2 className="section-title">Usage</h2>
        <div className="section-block">
          <p>By default, accordion component expects two different sub components called Accordion.Header and Accordion.Content</p>
          <Box>
            <QAccordion>
              <QAccordion.Header>
                Accordion 1
              </QAccordion.Header>
              <QAccordion.Content>
                <div>Some content</div>
                <div>Some content</div>
                <div>Some content</div>
                <div>Some content</div>
                <div>Some content</div>
                <QButton>Button</QButton>
              </QAccordion.Content>
            </QAccordion>
          </Box>
          <EmbeddedGist gist="yavuzkoca/7ba1f2bfdb0720fb72c67e701172cc5a" file="accordion_1.jsx"/>
        </div>

        <h2 className="section-title">Examples</h2>
        <div className="section-block">
          <h4 className="subsection-title">Expanded & On Change</h4>
          <p>Variant prop changes the color and background color of the button component.</p>
          <Box>
            <QAccordion expanded={expanded} onChange={handleChange}>
              <QAccordion.Header>
                Accordion 1
              </QAccordion.Header>
              <QAccordion.Content>
                <div>Some content</div>
                <div>Some content</div>
                <div>Some content</div>
                <div>Some content</div>
                <div>Some content</div>
                <QButton>Button</QButton>
              </QAccordion.Content>
            </QAccordion>
            <QButton onClick={handleClick}>Toggle Accordion</QButton>
          </Box>
          <EmbeddedGist gist="yavuzkoca/a60d69b1fb1e314186d693ebf5452a42" file="accordion_2.jsx"/>
        </div>

        {renderTable(props)}
      </section>
    </>
  )
}

export default Accordion;
