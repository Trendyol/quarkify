import { storiesOf } from "@storybook/react";
import React from "react";
import Icon from "../components/icon";

const stories = storiesOf("Icon", module);

stories.add("Icons", () => (
  <div>
    <Icon name="search" color={"rgba(0,0,0,1)"} style={{backgroundColor: "red"}}/>
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
    <Icon name="whatsapp" variant={"gray"}/>
    <Icon name="checkmark-full" variant={"primary"}/>
  </div>
));
