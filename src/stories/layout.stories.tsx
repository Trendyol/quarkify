import { storiesOf } from "@storybook/react";
import faker from "faker";
import React from "react";
import Box from "../components/box";
import Layout from "../components/layout";

const stories = storiesOf("Layout", module);

stories.add("Default", () => (
  <Layout>
    <Box>
      <p>{faker.lorem.lines(10)}</p>
    </Box>
  </Layout>
));

stories.add("Fluid", () => (
  <Layout fitted>
    <Box>
      <p>{faker.lorem.lines(10)}</p>
    </Box>
  </Layout>
));
