import { storiesOf } from "@storybook/react";
import faker from "faker";
import React from "react";
import { Box } from "../components/box";
import Button from "../components/button";
import Loader from "../components/loader";

const stories = storiesOf("Loader", module);
const onClick = () => alert("This should not pop up!");
const hugeContent = faker.lorem.lines(300);

stories.add("Loader over Box", () => (
  <div>
    <Box spaced>
      <Loader active />
      <h1>Content 1</h1>
      <Button onClick={onClick}>Button</Button>
      <p>{faker.lorem.lines(20)}</p>
    </Box>
    <Box spaced>
      <Loader active />
      <h1>Content 2</h1>
      <p>{faker.lorem.lines(20)}</p>
    </Box>
    <Box spaced>
      <Loader active />
      <h1>Content 3</h1>
      <p>{faker.lorem.lines(20)}</p>
    </Box>
  </div>
));

stories.add("Fixed loader", () => {
  const [loader, setLoader] = React.useState(false);
  const toggle = () => setLoader(!loader);

  return (
    <div>
      <Box style={{ zIndex: 1100 }} spaced>
        <h1>This loader fixed but still scrollable</h1>
        <p>PS: This loader will be fixed to document body not to parent</p>
        <Button onClick={toggle}>Toggle Loader</Button>
      </Box>

      <Box spaced>
        <Loader active={loader} fixed />
        <p>{hugeContent}</p>
      </Box>
    </div>
  );
});

stories.add("Fixed loader with disabled scroll for body", () => {
  const [loader, setLoader] = React.useState(false);
  const toggle = () => setLoader(!loader);

  return (
    <div>
      <Box style={{ zIndex: 1100 }} spaced>
        <h1>This loader fixed and body not scrollable</h1>
        <p>PS: This loader will be fixed to document body not to parent</p>
        <Button onClick={toggle}>Toggle Loader</Button>
      </Box>

      <Box spaced>
        <Loader active={loader} fixed disableScroll />
        <p>{hugeContent}</p>
      </Box>
    </div>
  );
});
