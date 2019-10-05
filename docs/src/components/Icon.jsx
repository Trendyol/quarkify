import React from "react";
import EmbeddedGist from "../partials/EmbeddedGist";
import { Box as QBox } from "quarkify/components/box";
import QIcon from "quarkify/components/icon";
import renderTable from "../partials/Table";

const props = [
  {
    name: "name",
    type: "string",
    default: "",
    description: "Sets the content of the icon"
  },
  {
    name: "size",
    type: "enum: ['small', 'medium', 'large', 'xlarge']",
    default: "'medium'",
    description: "Specifies a pre-defined font size for the icon."
  },

];

function Icon() {
  return (
    <>
      <section id="dashboards" className="doc-section">
        <h2 className="section-title">Icon</h2>
        <div className="section-block">
          <p>Icon component uses icomoon library to render icon elements. Of course it is possible to overwrite the icons by giving appropriate class names to the Icon component. In that purpose, it is required to import icomoon library in the root css file.</p>
          <EmbeddedGist gist="yavuzkoca/70509992ef40cd9a8dcc50192a08f135" file="icon_1.css"/>
          <div className="callout-block callout-info">
            <div className="icon-holder">
              <i className="fas fa-bullhorn"></i>
            </div>
            <div className="content">
              <h4 className="callout-title">Note</h4>
              <p>It is also possible to import other icon fonts but remember, name prop that icon components takes is actually a class name that starts with: icon-[name]</p>
            </div>
          </div>
        </div>

        <h2 className="section-title">Usage</h2>
        <div className="section-block">
          <p>Icon component requires name prop as string. This prop looks css class names that has icon-name</p>
          <QBox>
            <QIcon name="heart"/>
          </QBox>
          <EmbeddedGist gist="yavuzkoca/0337925550eb39f508f668c94011b82d" file="icon_2.jsx"/>
          <p>Here you can see the css class name for the heart icon.</p>
          <EmbeddedGist gist="yavuzkoca/deca1ae8622f369390d27d8c6182db02" file="icon_3.css"/>
        </div>

        <h2 className="section-title">Examples</h2>
        <div className="section-block">
          <h4 className="subsection-title">Size</h4>
          <p>Icons come in four different sizes (small, medium (default), large, and xlarge).</p>
          <QBox>
            <QIcon name="hamburger-menu-with-text" size="small" style={{marginRight: "10px"}}/>
            <QIcon name="info" size="medium" style={{marginRight: "10px"}}/>
            <QIcon name="checkmark-full" size="large" style={{marginRight: "10px"}}/>
            <QIcon name="sms" size="xlarge" style={{marginRight: "10px"}}/>
          </QBox>
          <EmbeddedGist gist="yavuzkoca/bca6ff0523af3693b97b3b723f78bb0f" file="icon_4.jsx"/>
        </div>

        {renderTable(props)}

      </section>
    </>
  );
}

export default Icon;
