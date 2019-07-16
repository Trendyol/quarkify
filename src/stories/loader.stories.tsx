import { storiesOf } from "@storybook/react";
import faker from "faker";
import React from "react";
import Box from "../components/box";
import Loader from "../components/loader";

const stories = storiesOf("Loader", module);

stories.add("Loader over Box", () => (
  <div>
    <Box spaced>
      <Loader active/>
      <h1>Content 1</h1>
      <p>{faker.lorem.lines(10)}</p>
    </Box>
    <Box spaced>
      <Loader active/>
      <h1>Content 2</h1>
      <p>{faker.lorem.lines(10)}</p>
    </Box>
    <Box spaced>
      <Loader active/>
      <h1>Content 3</h1>
      <p>{faker.lorem.lines(10)}</p>
    </Box>
  </div>
));
