import { storiesOf } from "@storybook/react";
import React from "react";
import Icon from "../components/icon";

const stories = storiesOf("Icon", module);

stories.add("Icons", () => (
  <div>
    <Icon name="search" />
    <Icon name="search" disabled />
    <Icon name="search" size="small" />
    <Icon name="search" size="large" />
    <br />
    <Icon name="spinner" />
    <Icon name="shopping-cart" />
    <Icon name="like" />
    <Icon name="account" />
    <br />
    <Icon name="facebook" />
    <Icon name="twitter" />
    <Icon name="whatsapp" />
    <Icon name="checkmark-full" />
  </div>
));
