import { storiesOf } from "@storybook/react";
import React from "react";
import {Box, BoxGroup} from "../components/box";
import Layout from "../components/layout";

const stories = storiesOf("Box", module);

stories.add("Box", () => (
  <Layout style={{ height: "100vh" }}>
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

    <Box fitted spaced>
      <span>Fitted spaced box</span>
    </Box>
  </Layout>
));

stories.add("Box Group", () => (
    <Layout style={{height: "100vh"}}>
        <BoxGroup style={{marginTop: "20px"}}>
            <Box>
                <span>Box</span>
            </Box>
            <Box>
                <span>Box</span>
            </Box>
            <Box>
                <span>Box</span>
            </Box>
        </BoxGroup>
    </Layout>
));
