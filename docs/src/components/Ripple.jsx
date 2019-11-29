import React from 'react';
import { Box } from "quarkify/components/box";
import EmbeddedGist from "../partials/EmbeddedGist";
import QRipple from "quarkify/components/ripple";
import renderTable from "../partials/Table";

const props = [
  {
    name: "active",
    type: "boolean",
    default: "true",
    description: "Activeness of ripple effect"
  },
  {
    name: "during",
    type: "number",
    default: "550",
    description: "Transition time of the animation"
  },
  {
    name: "display",
    type: "string",
    default: "inline-flex",
    description: "Changes the display type"
  },
  {
    name: "color",
    type: "string",
    default: "rgba(0, 0, 0, 0.3)",
    description: "Applies specified background color"
  },
];

function Ripple() {
  return (
    <>
      <section id="dashboards" className="doc-section">
        <h2 className="section-title">Ripple</h2>
        <div className="section-block">
          <p>Ripple component gives the ripple effect to all children components. If there is and click events in the children components, first the ripple effect will run then the other click functions.</p>
        </div>

        <h2 className="section-title">Usage</h2>
        <div className="section-block">
          <p>Here you can see simple usage of the ripple component.</p>
          <Box>
            <QRipple>
              <Box>
                <p>All components inside the ripple component will be affected.</p>
                <img src="https://picsum.photos/200/300"/>
                <p>Lorem ipsum dolor sit amet</p>
              </Box>
            </QRipple>
          </Box>
          <EmbeddedGist gist="yavuzkoca/a7999c6e6d065bf0a15592b66cb560b7" file="ripple_1.tsx"/>
        </div>

        <h2 className="section-title">Examples</h2>
        <div className="section-block">
          <h4 className="subsection-title">Active</h4>
          <p>When active prop is set to false, ripple effect will not work.</p>
          <Box>
            <QRipple active={false}>
              <Box onClick={() => alert("here")}>
                <p>This is disabled ripple.</p>
                <img src="https://picsum.photos/200/300"/>
                <p>Although, this area still is clickable.</p>
              </Box>
            </QRipple>
          </Box>
          <EmbeddedGist gist="yavuzkoca/718374240ab69beb9be1374cee32f89a" file="ripple_2.tsx"/>
        </div>

        <div className="section-block">
          <h4 className="subsection-title">During</h4>
          <p>During prop sets the transition time of the animation in milliseconds.</p>
          <Box>
            <QRipple during={3000}>
              <Box>
                <p>Very slow ripple</p>
                <img src="https://picsum.photos/200/300"/>
              </Box>
            </QRipple>
            <QRipple during={200}>
              <Box>
                <p>Very fast ripple</p>
                <img src="https://picsum.photos/200/300"/>
              </Box>
            </QRipple>
          </Box>
          <EmbeddedGist gist="yavuzkoca/e1d61ab91247dca25258ce22a4cbbcc1" file="ripple_3.tsx"/>
        </div>

        <div className="section-block">
          <h4 className="subsection-title">Display</h4>
          <p>This prop changes the display type of the component. By default, its value set to inline-flex.</p>
          <Box>
            <QRipple display="block">
              <Box>
                <p>Each ripple will take whole row since their display type's set to block.</p>
                <img src="https://picsum.photos/200/300"/>
              </Box>
            </QRipple>
            <QRipple display="block">
              <Box>
                <p>Each ripple will take whole row since their display type's set to block.</p>
                <img src="https://picsum.photos/200/300"/>
              </Box>
            </QRipple>
          </Box>
          <EmbeddedGist gist="yavuzkoca/55b91f2f0bb3011ae41c2aed0d5ced43" file="ripple_4.tsx"/>
        </div>

        <div className="section-block">
          <h4 className="subsection-title">Color</h4>
          <p>Applies specified color to the ripple effect - it can only be css color (#033 or rgba(0, 0, 0, 0.3)) for now.</p>
          <Box>
            <QRipple color="rgb(255, 0, 0)">
              <Box>
                <p>Red background</p>
                <img src="https://picsum.photos/200/300"/>
              </Box>
            </QRipple>
            <QRipple color="rgb(0, 255, 0)">
              <Box>
                <p>Green background</p>
                <img src="https://picsum.photos/200/300"/>
              </Box>
            </QRipple>
          </Box>
          <EmbeddedGist gist="yavuzkoca/4a92881a51dac1579265248c1d456abe" file="ripple_5.tsx"/>
        </div>

        {renderTable(props)}

      </section>
    </>
  );
}

export default Ripple;
