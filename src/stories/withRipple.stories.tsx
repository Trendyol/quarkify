import { storiesOf } from "@storybook/react";
import React from "react";
import { Box } from "../components/box";
import Icon from "../components/icon";
import Layout from "../components/layout";
import withRipple from "../components/withRipple";

const stories = storiesOf("Ripple", module);

class TestComponent extends React.PureComponent<any> {
  public render() {
    return (
      <div onClick={this.props.onClick}>
        <img src="https://picsum.photos/350"/>
      </div>
    );
  }
}

const RippleBox = withRipple(Box);
const RippleIcon = withRipple(Icon);
const RippleTest = withRipple(TestComponent);

stories.add("Ripple", () => {
  return (
    <Layout>
      <RippleBox>
        <p>1</p>
        <p>2</p>
        <p>3</p>
      </RippleBox>
      <RippleTest/>
    </Layout>
  );
});
