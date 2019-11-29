import React from 'react';
import { Box } from "quarkify/components/box";
import EmbeddedGist from "../partials/EmbeddedGist";
import QScrollToTop from "quarkify/components/scroll-to-top";
import renderTable from "../partials/Table";

const props = [
  {
    name: "duration",
    type: "number",
    default: "500",
    description: "Time of the scroll animation"
  },
  {
    name: "showUnder",
    type: "number",
    default: "0",
    description: "PageYOffset of the window to show the component"
  },
  {
    name: "smooth",
    type: "boolean",
    default: "true",
    description: "Enable or disable the animation"
  },
];

function ScrollToTop() {
  return (
    <>
      <section id="dashboards" className="doc-section">
        <h2 className="section-title">Scroll To Top</h2>
        <div className="section-block">
          <p>This component scrolls the user to the top of the page. No matter where you place this component, it will always render in the bottom right of the page. It appears whenever the user scrolls down in the page first and then scrolls to up little bit.</p>
        </div>

        <h2 className="section-title">Usage</h2>
        <div className="section-block">
          <p>Scroll down in the page then scroll up a bit.</p>
          <Box>
            {Array.from({ length: 50 }, (_, i) => <p>Down {i + 16}</p>)}
            <QScrollToTop />
          </Box>
          <EmbeddedGist gist="yavuzkoca/0799a50199b0b49626abc457f2384879" file="scroll-to-top_1.jsx"/>
        </div>

        <h2 className="section-title">Examples</h2>
        <div className="section-block">
          <h4 className="subsection-title">Duration</h4>
          <p>Duration changes the time of the scroll animation. For example, when its set to 5000, it will take 5 seconds to reach up the top of the page.</p>
          <Box>
            {/*<QScrollToTop duration={1000}/>*/}
          </Box>
          <EmbeddedGist gist="yavuzkoca/ff86e9e0df98c1da7e1653ca73f9239c" file="scroll-to-top_2.jsx"/>
        </div>

        <div className="section-block">
          <h4 className="subsection-title">Show Under</h4>
          <p>This prop sets the page Y offset of the window. In other words, it will not appear unless not scrolling down to determined number. For example, when it is set 1000, the user has to scroll down 1000 pixels.</p>
          <Box>
            {/*<QScrollToTop showUnder={1000}/>*/}
          </Box>
          <EmbeddedGist gist="yavuzkoca/0faca709f85c0105966c6d9f9a2cc2e3" file="scroll-to-top_3.jsx"/>
        </div>

        <div className="section-block">
          <h4 className="subsection-title">Smooth</h4>
          <p>To remove the animation, smooth prop can be set to false.</p>
          <Box>
            {/*<QScrollToTop smooth={false}/>*/}
          </Box>
          <EmbeddedGist gist="yavuzkoca/f47d0cc476cd5512ee731243c1dabedc" file="scroll-to-top_4.jsx"/>
        </div>

        {renderTable(props)}

      </section>
    </>
  );
}

export default ScrollToTop;
