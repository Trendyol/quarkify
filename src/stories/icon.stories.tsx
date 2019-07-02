import { storiesOf } from "@storybook/react";
import React from "react";
import Icon from "../components/icon";

const stories = storiesOf("Icon", module);

stories.add("Icons", () => (
  <div>
    <Icon name="search" size=""/>
    <Icon name="spinner" size=""/>
    <Icon name="shopping-cart" size=""/>
    <Icon name="shopping-cart" disabled size=""/>
  </div>
));
