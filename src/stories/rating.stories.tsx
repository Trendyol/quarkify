import { storiesOf } from "@storybook/react";
import React from "react";
import Rating from "../components/rating";

const stories = storiesOf("Rating", module);

stories.add("Default", () => (
  <div>
    <Rating margin={1} value={4.5} stars={6} size="large"/>
    <span>7</span><br/>
    <Rating margin={1} size="large"/><br/>
    <Rating margin={1} size="small" color={"red"} value={3}/><br/>
  </div>
));
