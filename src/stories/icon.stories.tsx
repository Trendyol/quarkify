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
    <Icon name="checkmark-full" color="green"/>
    <br/>
    <br/>
    <Icon name="search" size="small"/>
    <Icon name="search" disabled size="medium"/>
    <Icon name="checkmark-full" size="large"/>
    <Icon name="search" size="xlarge"/>
    <br/>
    <br/>
    <Icon name="search" sizePixel={100}/>
    <Icon name="search" sizePixel={50}/>
  </Layout>
));
stories.add("Circular", () => (
  <Layout style={{height: "100vh"}}>
      <Icon color="green" name="cargo-box" size="small" circular/>
      <Icon color="green" name="alarm" circular/>
      <Icon color="red" name="heart" size="large" circular/>
      <Icon color="primary" name="discount-shape" size="large" circular/>
  </Layout>
));
