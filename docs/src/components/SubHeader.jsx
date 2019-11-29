import React from 'react';
import { Box } from "quarkify/components/box";
import EmbeddedGist from "../partials/EmbeddedGist";
import renderTable from "../partials/Table";
import faker from "faker";
import QSubHeader from "quarkify/components/subheader"

const props = [
  {
    name: "duration",
    type: "number",
    default: "500",
    description: "Time of the scroll animation"
  },
];

function SubHeader() {
  return (
    <>
      <section id="dashboards" className="doc-section">
        <h2 className="section-title">Sub Header</h2>
        <div className="section-block">
          <p>SubHeader is a wrapper component with a set style.</p>
        </div>

        <h2 className="section-title">Usage</h2>
        <div className="section-block">
          <p>Here is the simple usage of sub header component</p>
          <Box>
            <QSubHeader title={faker.lorem.words(2)} subTitle={faker.lorem.words(10)} leftIcon="back-button" />
          </Box>
          <EmbeddedGist gist="yavuzkoca/aff1ecc88c6aaf29c67a4ab12d414735" file="subheader_1.jsx"/>
        </div>

        <h2 className="section-title">Examples</h2>
        <div className="section-block">
          <h4 className="subsection-title">Left Icon | Right Icon</h4>
          <p>Left icon and right icon can be changed using the proper props.</p>
          <Box>
            <QSubHeader title={faker.lorem.words(2)} leftIcon="back-button" rightIcon="close" />
          </Box>
          <EmbeddedGist gist="yavuzkoca/1cc3ef55daf1b353b3afe03f5f05f462" file="subheader_2.jsx"/>
        </div>

        <div className="section-block">
          <h4 className="subsection-title">Left Icon On Click | Right Icon On Click</h4>
          <p>Defining a function for the icons is also possible by setting the props.</p>
          <Box>
            <QSubHeader title={faker.lorem.words(2)} leftIcon="back-button" leftIconOnClick={() => alert("left icon clicked")} />
          </Box>
          <EmbeddedGist gist="yavuzkoca/6d99ec2d4d6c521699c51669b99e7962" file="subheader_3.jsx"/>
        </div>

        <div className="section-block">
          <h4 className="subsection-title">Sub Title</h4>
          <p>It is possible to give a sub title to the subheader component</p>
          <Box>
            <QSubHeader title={faker.lorem.words(2)} subTitle={faker.lorem.words(7)} />
          </Box>
          <EmbeddedGist gist="yavuzkoca/2c0d0119ac8e26d2136e0152e2194e81" file="subheader_4.jsx"/>
        </div>

        {renderTable(props)}

      </section>
    </>
  );
}

export default SubHeader;
