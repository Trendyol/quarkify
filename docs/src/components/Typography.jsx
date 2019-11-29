import React from 'react';
import { Box } from "quarkify/components/box";
import EmbeddedGist from "../partials/EmbeddedGist";
import renderTable from "../partials/Table";
import QTypography from "quarkify/components/typography"
import List from "quarkify/components/list";
import ListItem from "quarkify/components/list/listItem";

const props = [
  {
    name: "duration",
    type: "number",
    default: "500",
    description: "Time of the scroll animation"
  },
];

const variants = [
  {
    name: "h1",
    fontSize: "32",
    lineHeight: "40"
  },
  {
    name: "h2",
    fontSize: "24",
    lineHeight: "30"
  },
  {
    name: "h3",
    fontSize: "18",
    lineHeight: "24"
  },
  {
    name: "body",
    fontSize: "16",
    lineHeight: "20"
  },
  {
    name: "paragraph",
    fontSize: "14",
    lineHeight: "18"
  },
  {
    name: "subtitle",
    fontSize: "13",
    lineHeight: "16"
  },
  {
    name: "smallParagraph",
    fontSize: "12",
    lineHeight: "16"
  }
];

function Typography() {
  return (
    <>
      <section id="dashboards" className="doc-section">
        <h2 className="section-title">Typography</h2>
        <div className="section-block">
          <p>Typography is a wrapper component used to control the styles and general structure of headers, paragraphs and texts.</p>
        </div>

        <h2 className="section-title">Usage</h2>
        <div className="section-block">
          <p>Here is the simple usage of typography component</p>
          <Box>
            <QTypography variant="body" component="span" color="primary" >Lorem ipsum dolor sit amet</QTypography>
          </Box>
          <EmbeddedGist gist="yavuzkoca/ed37feb568fc800375fbc4b08e464b4e" file="typography_1.jsx"/>
        </div>

        <h2 className="section-title">Examples</h2>
        <div className="section-block">
          <h4 className="subsection-title">Variant</h4>
          <p>Each variant type of the typography determines the font-size and line-height of the text. Here's the list of all possible variants and their values:</p>
          <div className="section-block">
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                <tr>
                  <th>Name</th>
                  <th>Font Size</th>
                  <th>Line Height</th>
                </tr>
                </thead>
                <tbody>
                {variants.map((value, index) => {
                  return (
                    <tr>
                      <th scope="row">{value.name}</th>
                      <td>{value.fontSize}</td>
                      <td>{value.lineHeight}</td>
                    </tr>
                  )
                })}
                </tbody>
              </table>
            </div>
          </div>
          <Box>
            <QTypography variant="h3">H3 variant text</QTypography>
            <QTypography variant="body">Body variant text</QTypography>
          </Box>
          <EmbeddedGist gist="yavuzkoca/ce758d9f764700a80e527c3341b8fcbf" file="typography_2.jsx"/>
        </div>

        <div className="section-block">
          <h4 className="subsection-title">Component</h4>
          <p>The component prop decides the component type. If component prop is used with variant prop, the component is rendered with component prop type but its styles is the one declared in variant prop.</p>
          <Box>
            <QTypography variant="h3" component="div">H3 variant text but component is rendered as div</QTypography>
            <QTypography variant="body" component="p">Body variant text but rendered as p</QTypography>
          </Box>
          <EmbeddedGist gist="yavuzkoca/49067dcfa491d55dda44c08602b72516" file="typography_3.jsx"/>
        </div>

        <div className="section-block">
          <h4 className="subsection-title">Bold</h4>
          <p>Gives font-weight of 600 to the component</p>
          <Box>
            <QTypography variant="smallParagraph" bold>This is so bold</QTypography>
          </Box>
          <EmbeddedGist gist="yavuzkoca/ae8cb5605f41a7b44cd73e0ee39b030f" file="typography_4.jsx"/>
        </div>

        <div className="section-block">
          <h4 className="subsection-title">Underline</h4>
          <Box>
            <QTypography variant="smallParagraph" underline>This is underlined</QTypography>
          </Box>
          <EmbeddedGist gist="yavuzkoca/1a5713283f75beae14f77317f7d652ed" file="typography_5.jsx"/>
        </div>

        <div className="section-block">
          <h4 className="subsection-title">No Wrap</h4>
          <p>Truncates the string when it doesn't fit</p>
          <Box>
            <QTypography variant="smallParagraph" noWrap>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi repudiandae sed voluptates? Accusantium alias blanditiis eligendi fuga, nemo officiis placeat quas quos recusandae! Est illum minima minus ratione. Mollitia, voluptatibus?</QTypography>
          </Box>
          <EmbeddedGist gist="yavuzkoca/8c6b9e60b40797ebc215bb288f3d0da0" file="typography_6.jsx"/>
        </div>

        <div className="section-block">
          <h4 className="subsection-title">Display</h4>
          <p>This prop changes the display type of the component. By default, its value set to initial.</p>
          <Box>
            <QTypography variant="smallParagraph" display="block">Block text</QTypography>
            <QTypography variant="smallParagraph" display="block">Block text 2</QTypography>
          </Box>
          <EmbeddedGist gist="yavuzkoca/26d5a6412482fe199e0261da0d86177b" file="typography_7.jsx"/>
        </div>

        <div className="section-block">
          <h4 className="subsection-title">Color</h4>
          <p>Changes the color of the component</p>
          <Box>
            <QTypography variant="smallParagraph" color="red">Red text</QTypography>
            <QTypography variant="smallParagraph" color="green">Green text</QTypography>
            <QTypography variant="smallParagraph" color="primary">Primary text</QTypography>
          </Box>
          <EmbeddedGist gist="yavuzkoca/ee1a1463edb5a661cd0d855c7bf06dfc" file="typography_8.jsx"/>
        </div>

        {renderTable(props)}

      </section>
    </>
  );
}

export default Typography;
