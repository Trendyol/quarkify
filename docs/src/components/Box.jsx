import React from "react";
import { Box as QBox, BoxGroup as QBoxGroup} from "quarkify/components/box";
import EmbeddedGist from "../partials/EmbeddedGist";
import renderTable from "../partials/Table";

const props = [
  {
    name: "textAlign",
    type: "enum: ['left', 'right', 'center', 'justify']",
    default: "left''",
    description: "Alignment of the text"
  },
  {
    name: "fitted",
    type: "boolean",
    default: "false",
    description: "Removes the padding when set to true"
  },
  {
    name: "spaced",
    type: "boolean",
    default: "false",
    description: "Adds additional space to the component"
  }
];

function Box() {
  return (
    <>
      <section id="dashboards" className="doc-section">
        <h2 className="section-title">Box</h2>
        <div className="section-block">
          <p>Box is a wrapper component used to display elements in a set style.</p>
        </div>

        <h2 className="section-title">Usage</h2>
        <div className="section-block">
          <p>Box component gives some padding from all edges by default.</p>
          <QBox>
            As you can see here.
          </QBox>
          <EmbeddedGist gist="yavuzkoca/a3952f8639c6fbcff93ff27f8fc547a4" file="box_1.jsx"/>
        </div>

        <h2 className="section-title">Examples</h2>
        <div className="section-block">
          <h4 className="subsection-title">Text Align</h4>
          <p>It is possible to change alignment of the text using textAlign prop.</p>
          <QBox textAlign="right">
            <span>Right aligned spaced Box</span>
          </QBox>
          <QBox textAlign="center">
            <span>Center aligned spaced Box</span>
          </QBox>
          <QBox textAlign="justify">
            <span>Justify spaced Box Justify spaced Box Justify spaced Box</span>
          </QBox>
          <EmbeddedGist gist="yavuzkoca/08c2a8c7bcdbb0a21286f71fe09f8a58" file="box_2.jsx"/>
        </div>

        <div className="section-block">
          <h4 className="subsection-title">Fitted</h4>
          <p>Fitted prop can be used to remove padding that is given by default.</p>
          <QBox fitted>
            <span>Fitted Box</span>
          </QBox>
          <QBox>
            <span>Normal Box</span>
          </QBox>
          <EmbeddedGist gist="yavuzkoca/69e9cb32a251ce5452f0931c196a70a7" file="box_3.jsx"/>
        </div>

        <div className="section-block">
          <h4 className="subsection-title">Box Group</h4>
          <p>Box Group component is a wrapper component for multiple box components.</p>
          <QBoxGroup fitted>
            <QBox>
              <span>Box</span>
            </QBox>
            <QBox>
              <span>Box</span>
            </QBox>
            <QBox>
              <span>Box</span>
            </QBox>
          </QBoxGroup>
          <EmbeddedGist gist="yavuzkoca/f59962c8a8f7f869312fce590430e968" file="box_4.jsx"/>
          <div className="callout-block callout-info">
            <div className="icon-holder">
              <i className="fas fa-bullhorn"></i>
            </div>
            <div className="content">
              <h4 className="callout-title">Note</h4>
              <p>If you look careful, when multiple box components used adjacent to each other without box group, their borders will concatenate. However, box group component prevents it from happening.</p>
            </div>
          </div>
        </div>

        <div className="section-block">
          <h4 className="subsection-title">Spaced</h4>
          <p>Spaced prop can be used to add some margin to the component.</p>
          <QBox spaced>
            <span>Spaced Box</span>
          </QBox>
          <EmbeddedGist gist="yavuzkoca/56accbc1ce408f46fb0f047206c8381e" file="box_5.jsx"/>
        </div>

        {renderTable(props)}
      </section>
    </>
  );
}

export default Box;
