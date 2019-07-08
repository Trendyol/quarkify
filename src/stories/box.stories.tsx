import { storiesOf } from "@storybook/react";
import React from "react";
import Box from "../components/box";

const stories = storiesOf("Box", module);

stories.add("Box", () => (
  <div style={{ backgroundColor: "#f5f5f5", height: "100vh" }}>
    <Box>
      <span>Box</span>
    </Box>
    <Box spaced>
      <span>Spaced Box</span>
    </Box>

    <Box spaced textAlign="right">
      <span>Right aligned spaced Box</span>
    </Box>

    <Box spaced textAlign="center">
      <span>Center aligned spaced Box</span>
    </Box>

    <Box spaced textAlign="justify">
      <span>Justify spaced Box Justify spaced Box Justify spaced Box</span>
    </Box>
  </div>
));
