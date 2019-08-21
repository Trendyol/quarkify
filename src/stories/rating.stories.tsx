import { storiesOf } from "@storybook/react";
import React from "react";
import Rating from "../components/rating";

const stories = storiesOf("Rating", module);

stories.add("Default", () => (
  <div>
    <Rating value={4} size="large"/>
    <span>7</span>
  </div>
));
