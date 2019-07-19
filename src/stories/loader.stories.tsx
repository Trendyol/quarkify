import { storiesOf } from "@storybook/react";
import faker from "faker";
import React from "react";
import Box from "../components/box";
import Button from "../components/button";
import Loader from "../components/loader";

const stories = storiesOf("Loader", module);
const onClick = () => alert("This should not pop up!");

stories.add("Loader over Box", () => (
  <div>
    <Box spaced>
      <Loader active/>
      <h1>Content 1</h1>
      <Button onClick={onClick}>Button</Button>
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
