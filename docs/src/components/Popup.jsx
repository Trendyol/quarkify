import React, { PureComponent } from "react";
import EmbeddedGist from "../partials/EmbeddedGist";
import { Box as QBox } from "quarkify/components/box";
import renderTable from "../partials/Table";
import QButton from "quarkify/components/button";
import QList from "quarkify/components/list";
import QPopup from "quarkify/components/popup";

const props = [
  {
    name: "show",
    type: "boolean",
    default: "false",
    description: "Open status of popup component."
  },
  {
    name: "iconLeft",
    type: "boolean",
    default: "false",
    description: "Moves the close icon to the left."
  },
  {
    name: "noIcon",
    type: "boolean",
    default: "false",
    description: "Removes the close icon."
  },
  {
    name: "closeOnOverlayClick",
    type: "boolean",
    default: "true",
    description: "Closes the popup on click of outside of the box"
  }
];

class PopupWrapper extends PureComponent<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      show: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <>
        {Array.from({ length: 15 }, (_, i) => <p>Down {i}</p>)}
        <QButton onClick={this.handleClick}>Toggle Me</QButton>
        {Array.from({ length: 15 }, (_, i) => <p>Down {i + 16}</p>)}
        <QPopup
          show={this.state.show}
          onChange={this.handleChange}
        >
          {Array.from({ length: 30 }, (_, i) => <p>Line {i}</p>)}
        </QPopup>
      </>
    );
  }

  handleClick() {
    this.setState({
      show: true,
    });
  }

  handleChange(status: boolean) {
    this.setState({
      show: status,
    });
  }
}

function Popup() {
  return (
    <>
      <section id="dashboards" className="doc-section">
        <h2 className="section-title">Popup</h2>
        <div className="section-block">
          <p>Popups are predefined styled components which covers predetermined width and height of the page.</p>
        </div>

        <h2 className="section-title">Usage</h2>
        <div className="section-block">
          <p>Here is the simple usage of the popup component:</p>
          <QBox>
            <PopupWrapper/>
          </QBox>
          <EmbeddedGist gist="yavuzkoca/48de805039d87b8d538a868f4c2d42b4" file="popup_1.jsx"/>
        </div>

        <h2 className="section-title">Examples</h2>

        <div className="section-block">
          <h4 className="subsection-title">Icon Left</h4>
          <p>Popup takes some additional props for icons. One them is left icon which appears on the left side of the popup. Setting this prop to false will remove the icon. In this example, it is set to close the popup on click of the left icon.</p>
          <QBox>
            <PopupWrapper iconLeft={false}/> <br/>
          </QBox>
          <EmbeddedGist gist="yavuzkoca/0a9c84249ab6c91ca43f066e363627b0" file="popup_2.jsx"/>
        </div>

        <div className="section-block">
          <h4 className="subsection-title">No Icon</h4>
          <p>Similarly, it is possible to remove close icon from the popup.</p>
          <QBox>
            <PopupWrapper noIcon={true}/> <br/>
          </QBox>
          <EmbeddedGist gist="yavuzkoca/8de36c6f69d80f12c1d17bfba71052f2" file="popup_3.jsx"/>
        </div>

        <div className="callout-block callout-info">
          <div className="icon-holder">
            <i className="fas fa-bullhorn"></i>
          </div>
          <div className="content">
            <h4 className="callout-title">Note</h4>
            <p>The functions of clicking the icons is set in the PopupWrapper component. Check out the first gist for the example usage.</p>
          </div>
        </div>

        {renderTable(props)}

      </section>
    </>
  );
}

export default Popup;
