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
           <img src="https://picsum.photos/200/300"/>
           <p>1</p>
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
