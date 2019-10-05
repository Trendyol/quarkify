import React from "react";
import EmbeddedGist from "../partials/EmbeddedGist";
import { Box as QBox } from "quarkify/components/box";
import QInput from "quarkify/components/input";
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
    name: "subText",
    type: "string",
    default: "",
    description: "Adds sub text next to the component"
  },
  {
    name: "fluid",
    type: "boolean",
    default: "false",
    description: "Expands the button to 100% of available space."
  },
  {
    name: "error",
    type: "boolean",
    default: "false",
    description: "Shows the input in error color palette."
  },
  {
    name: "errorMessage",
    type: "string",
    default: "",
    description: "Specifies the error message when error is true"
  },
];

function Input() {
  return (
    <>
      <section id="dashboards" className="doc-section">
        <h2 className="section-title">Input</h2>
        <div className="section-block">
          <p>Custom input styles in numerous elements can be found here. For <Link to="/checkbox">checkbox</Link> and <Link to="/radio">radio</Link> types, please check our separate components aimed to use their own purposes.</p>
        </div>

        <h2 className="section-title">Usage</h2>
        <div className="section-block">
          <p>You can directly use the input component without giving any props.</p>
          <QBox>
            <QInput/>
          </QBox>
          <EmbeddedGist gist="yavuzkoca/183e8ec813a7fdf109672e2577e92506" file="input_2.jsx"/>
        </div>

        <h2 className="section-title">Examples</h2>

        <div className="section-block">
          <h4 className="subsection-title">Label</h4>
          <p>Label prop can be useful to use to notify user about the purpose of the input although it is optional.</p>
          <QBox>
            <QInput label="Email:"/>
          </QBox>
          <EmbeddedGist gist="yavuzkoca/84c105b5413d1f981a5eb0a98067c496" file="input_3.jsx"/>
        </div>

        <div className="section-block">
          <h4 className="subsection-title">Sub Text</h4>
          <p>Sometimes extra information might be required to specify the purpose of the input. SubText prop can be used for this kind of goals.</p>
          <QBox>
            <QInput label="Email:" subtext="Please enter your email!"/>
          </QBox>
          <EmbeddedGist gist="yavuzkoca/350997ffcdb09db006d96f1a43007082" file="input_4.jsx"/>
        </div>

        <div className="section-block">
          <h4 className="subsection-title">Fluid</h4>
          <p>Fluid inputs extend the full available width.</p>
          <QBox>
            <QInput label="Email:" subtext="Please enter your email!" fluid/>
          </QBox>
          <EmbeddedGist gist="yavuzkoca/efeffdf622434b81ce529a466016f3ab" file="input_5.jsx"/>
        </div>

        <div className="section-block">
          <h4 className="subsection-title">Error</h4>
          <p>Adding error prop to input element changes the component's style to indicate an error has happened.</p>
          <QBox>
            <QInput label="Email:" subtext="Please enter your email!" error/>
          </QBox>
          <EmbeddedGist gist="yavuzkoca/a619126938628defdbd933aeb910aa0c" file="input_6.jsx"/>
        </div>

        <div className="section-block">
          <h4 className="subsection-title">Error</h4>
          <p>Adding error prop to input element changes the component's style to indicate an error has happened.</p>
          <QBox>
            <QInput label="Email:" subtext="Please enter your email!" error/>
          </QBox>
          <EmbeddedGist gist="yavuzkoca/393f7f6a75fb6ec7af73aaead0f873a4" file="input_7.jsx"/>
        </div>

        <div className="section-block">
          <h4 className="subsection-title">Error Message</h4>
          <p>Error message only gets rendered when error prop is true in the component.</p>
          <QBox>
            <QInput label="Email:" subtext="Please enter your email!" error errorMessage="Your email does not match with our records!"/>
          </QBox>
          <EmbeddedGist gist="yavuzkoca/6cb4a7f9f147fa0b3f749b0e93f4180c" file="input_8.jsx"/>
        </div>

        {renderTable(props)}

      </section>
    </>
  );
}

export default Input;
