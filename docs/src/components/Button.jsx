import React, { PureComponent } from "react";
import QButton from "quarkify/components/button"
import EmbeddedGist from "../partials/EmbeddedGist"
import { Box } from "quarkify/components/box";
import { Link } from "react-router-dom";
import renderTable from "../partials/Table";

const props = [
  {
    name: "variant",
    type: "enum: ['primary', 'secondary', 'gray']",
    default: "'primary'",
    description: "Changes the color theme."
  },
  {
    name: "ripple",
    type: "boolean",
    default: "true",
    description: "Ripple effect on click."
  },
  {
    name: "size",
    type: "enum: ['small', 'medium', 'large']",
    default: "'medium'",
    description: "Changes the height and font-size."
  },
  {
    name: "fluid",
    type: "boolean",
    default: "false",
    description: "Expands the button to 100% of available space."
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Removes the ability to click or target the component."
  },
  {
    name: "icon",
    type: "string",
    default: "",
    description: "Designates the button as icon."
  },
  {
    name: "round",
    type: "boolean",
    default: "false",
    description: "Applies a large border radius on the button."
  },
  {
    name: "circular",
    type: "boolean",
    default: "false",
    description: "Applies 50% border radius on the button."
  },
  {
    name: "loading",
    type: "boolean",
    default: "false",
    description: "Adds a loading icon animation."
  }
];

class LoadingWrapper extends PureComponent<any, any> {
  constructor(props: IProps) {
    super(props);
    this.state = { loading: false };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <QButton variant="secondary" loading={this.state.loading} onClick={this.handleClick}>Add to Basket</QButton>
    );
  }

  handleClick = () => {
    this.setState({ loading: true });
    setTimeout(() => this.setState({ loading: false }), 1000);
  }
}

function Button() {
  return (
    <>
      <section id="dashboards" className="doc-section">
        <h2 className="section-title">Button</h2>
        <div className="section-block">
          <p>The Button component is replaced with the standard HTML button with more styled version.</p>
        </div>

        <h2 className="section-title">Usage</h2>
        <div className="section-block">
          <p>Without giving any props, button will be rendered with primary variant which gives orange color, ripple effect on click and a slight elevation.</p>
          <Box>
            <QButton>Hello World</QButton>
          </Box>
          <EmbeddedGist gist="yavuzkoca/d0e19dbabbde6e9f932906965cb11573" file="button_1.jsx"/>
        </div>

        <h2 className="section-title">Examples</h2>
        <div className="section-block">
          <h4 className="subsection-title">Variant</h4>
          <p>Variant prop changes the color and background color of the button component.</p>
          <Box>
            <QButton variant="primary" style={{ marginRight: "10px" }}>Primary</QButton>
            <QButton variant="secondary" style={{ marginRight: "10px" }}>Secondary</QButton>
            <QButton variant="gray">Gray</QButton>
          </Box>
          <EmbeddedGist gist="yavuzkoca/a64c73bd820e2856b9e3df76dc2abd65" file="button_2.jsx"/>
        </div>

        <div className="section-block">
          <h4 className="subsection-title">Size</h4>
          <p>3 different sizes exist in button component which are: large, medium and small.</p>
          <Box>
            <QButton size="small" style={{ marginRight: "10px" }}>Small</QButton>
            <QButton size="medium" style={{ marginRight: "10px" }}>Medium</QButton>
            <QButton size="large">Large</QButton>
          </Box>
          <EmbeddedGist gist="yavuzkoca/ed9962bfb103c773d006f4cdb93c18f1" file="button_3.jsx"/>
        </div>

        <div className="section-block">
          <h4 className="subsection-title">Fluid</h4>
          <p>Fluid buttons extend the full available width.</p>
          <Box>
            <QButton fluid>Fluid Button</QButton>
          </Box>
          <EmbeddedGist gist="yavuzkoca/b7882847991014b48c1390e8f15902df" file="button_4.jsx"/>
        </div>

        <div className="section-block">
          <h4 className="subsection-title">Disabled</h4>
          <p>Removes the ability to click or target the component with giving different background and font color.</p>
          <Box>
            <QButton disabled>Disabled Button</QButton>
          </Box>
          <EmbeddedGist gist="yavuzkoca/ff4d4075808cb553f6b52d1fe0c6363c" file="button_5.jsx"/>
        </div>

        <div className="section-block">
          <h4 className="subsection-title">Icon</h4>
          <p>Icons can be used for the primary content of a button. You can check <Link to="/icon">Icon</Link> section to gather further information.</p>
          <Box>
            <QButton icon="star" style={{ marginRight: "10px" }}/>
            <QButton icon="like" style={{ marginRight: "10px" }}/>
            <QButton icon="basket" style={{ marginRight: "10px" }}>Button with icon</QButton>
          </Box>
          <EmbeddedGist gist="yavuzkoca/26cb1f6bfa14d80229869a65d59009f0" file="button_6.jsx"/>
        </div>

        <div className="section-block">
          <h4 className="subsection-title">Round</h4>
          <p>Rounded buttons behave the same as regular buttons but have rounded edges.</p>
          <Box>
            <QButton round style={{ marginRight: "10px" }}>Rounded button</QButton>
          </Box>
          <EmbeddedGist gist="yavuzkoca/88c7a62642f9f11f583a07b6e617516e" file="button_7.jsx"/>
        </div>

        <div className="section-block">
          <h4 className="subsection-title">Circular</h4>
          <p>Circular buttons are rounded and usually contain an icon.</p>
          <Box>
            <QButton circular icon="heart" style={{ marginRight: "10px" }}/>
            <QButton circular icon="search" variant="secondary" style={{ marginRight: "10px" }}/>
            <QButton circular icon="star" variant="gray" style={{ marginRight: "10px" }}/>
          </Box>
          <EmbeddedGist gist="yavuzkoca/1233ed8cb881974d6c5d8b030dbe041e" file="button_8.jsx"/>
        </div>

        <div className="section-block">
          <h4 className="subsection-title">Loading</h4>
          <p>When button sends a request to the API, it would be nice to notify the end user about that.</p>
          <Box>
            <LoadingWrapper/>
          </Box>
          <EmbeddedGist gist="yavuzkoca/fd5920333bc506776c8a5ad8c7e6a1b3" file="button_9.jsx"/>
        </div>

        <div className="section-block">
          <h4 className="subsection-title">Ripple</h4>
          <p>When button sends a request to the API, it would be nice to notify the end user about that.</p>
          <Box>
            <QButton ripple={false}>Without Ripple</QButton>
          </Box>
          <EmbeddedGist gist="yavuzkoca/35fe912b51a3d80bef640fd1e76e4412" file="button_10.jsx"/>
        </div>

        {renderTable(props)}
      </section>
    </>
  );
}

export default Button;
