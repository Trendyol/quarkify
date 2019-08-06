import { storiesOf } from "@storybook/react";
import React from "react";
import { Box } from "../components/box";
import Layout from "../components/layout";
import Ripple from "../components/ripple";

const stories = storiesOf("Ripple", module);

class TestComponent extends React.PureComponent<any> {
  public render() {
    return (
        <Box>
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
        </Box>
    );
  }
}

stories.add("Ripple", () => {
  return (
    <Layout>
      <Ripple display={"block"}>
        <TestComponent/>
      </Ripple>
    </Layout>
  );
});
