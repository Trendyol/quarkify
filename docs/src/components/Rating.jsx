import React from 'react';
import { Box } from "quarkify/components/box";
import EmbeddedGist from "../partials/EmbeddedGist";
import QRating from "quarkify/components/rating";
import renderTable from "../partials/Table";

const props = [
  {
    name: "margin",
    type: "number",
    default: "3",
    description: "Adds margin to each icon"
  },
  {
    name: "value",
    type: "number",
    default: "0",
    description: "Fills the each icon"
  },
  {
    name: "stars",
    type: "number",
    default: "5",
    description: "Changes number of icons"
  },
  {
    name: "size",
    type: "enum: ['small', 'medium', 'large', 'xlarge']",
    default: "'medium'",
    description: "Specifies a pre-defined font size"
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Specifies a pre-defined font size"
  },
  {
    name: "color",
    type: "enum",
    default: "yellow",
    description: "Changes the color of filled icons"
  },
  {
    name: "icon",
    type: "enum",
    default: "star",
    description: "Changes the icon itself"
  },
];

function Rating() {
  return (
    <>
      <section id="dashboards" className="doc-section">
        <h2 className="section-title">Rating</h2>
        <div className="section-block">
          <p>Rating component can be used to show the rate status of a product or overall rating of the football players.</p>
        </div>

        <h2 className="section-title">Usage</h2>
        <div className="section-block">
          <p>Here you can see simple usage of the rating component.</p>
          <Box>
            <QRating margin={1} value={4.5} stars={6} size="large"/>
          </Box>
          <EmbeddedGist gist="yavuzkoca/c1b0900b885fa2716d7fee0460d3fbbe" file="rating_1.jsx"/>
        </div>

        <h2 className="section-title">Examples</h2>
        <div className="section-block">
          <h4 className="subsection-title">Margin</h4>
          <p>Margin prop of the rating component specifies the gap between each star icon.</p>
          <Box>
            <QRating value={4.5} stars={5} size="large"/><br/>
            <QRating margin={1} value={4.5} stars={5} size="large"/><br/>
            <QRating margin={5} value={4.5} stars={5} size="large"/><br/>
          </Box>
          <EmbeddedGist gist="yavuzkoca/41a885181312a0b4b96bdae7592908c2" file="rating_2.jsx"/>
        </div>

        <div className="section-block">
          <h4 className="subsection-title">Value</h4>
          <p>It fills the rating component with color according to this value prop. For example, giving this value as 4 out of 7 stars will fill 4 stars with yellow color.</p>
          <Box>
            <QRating margin={1} value={4} stars={7} size="large"/><br/>
            <QRating margin={1} value={4.5} stars={7} size="large"/><br/>
            <QRating margin={1} stars={7} size="large"/><br/>
          </Box>
          <EmbeddedGist gist="yavuzkoca/d202de6d7726fda0599fed46b948d71c" file="rating_3.jsx"/>
        </div>

        <div className="section-block">
          <h4 className="subsection-title">Stars</h4>
          <p>By default, the number of star icons are 5 but it is possible to change this by changing the prop.</p>
          <Box>
            <QRating value={4} size="large"/><br/>
            <QRating value={4} stars={10} size="large"/><br/>
          </Box>
          <EmbeddedGist gist="yavuzkoca/dfdb91f6852bd29fc2df7661d7935be1" file="rating_4.jsx"/>
        </div>

        <div className="section-block">
          <h4 className="subsection-title">Size</h4>
          <p>Size prop determines each icon's size.</p>
          <Box>
            <QRating value={4} size="small" /><br/>
            <QRating value={4} size="medium" /><br/>
            <QRating value={4} size="large" /><br/>
          </Box>
          <EmbeddedGist gist="yavuzkoca/e99ff090268f7d2bc1d804ddc4166a72" file="rating_5.jsx"/>
        </div>

        <div className="section-block">
          <h4 className="subsection-title">Disabled</h4>
          <p>Showing the stars as not clickable can be achieved by setting disabled prop to true.</p>
          <Box>
            <QRating value={4} size="large" disabled/><br/>
          </Box>
          <EmbeddedGist gist="yavuzkoca/2da6d1b9975b94c2e4052fe8e333fa12" file="rating_6.jsx"/>
        </div>

        <div className="section-block">
          <h4 className="subsection-title">Color</h4>
          <p>Similar to size prop, each icon component's color can be changed with color prop.</p>
          <Box>
            <QRating value={4} size="large" color="red"/><br/>
            <QRating value={4} size="large" color="yellow"/><br/>
            <QRating value={4} size="large" color="primary"/><br/>
          </Box>
          <EmbeddedGist gist="yavuzkoca/a65e36b3ec45f9c2504cb09ab63e0ad1" file="rating_7.jsx"/>
        </div>

        <div className="section-block">
          <h4 className="subsection-title">Icon</h4>
          <p>Icon prop of the rating component changes the shape of each icon.</p>
          <Box>
            <QRating value={4} size="large" icon="heart"/><br/>
            <QRating value={4} size="large" icon="search"/><br/>
          </Box>
          <EmbeddedGist gist="yavuzkoca/9a647b0dc1864bcc183fa4001934c4f2" file="rating_8.jsx"/>
        </div>

        {renderTable(props)}

      </section>
    </>
  );
}

export default Rating;
