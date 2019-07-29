import { storiesOf } from "@storybook/react";
import React from "react";
import Icon from "../components/icon";
import Layout from "../components/layout";

const stories = storiesOf("Icon", module);

stories.add("Icons", () => (
  <Layout style={{height: "100vh"}}>
    <Icon name="search"/>
    <Icon name="search" disabled/>
    <Icon name="checkmark-full"/>
    <br/>
    <Icon color="green" name="cargo-box"  size="small" circular/>
    <Icon color="green" name="alarm" circular/>
    <Icon color="red" name="heart" size="large" circular/>
    <Icon color="primary" name="discount-shape" size="xlarge" circular/>
  </Layout>
));
