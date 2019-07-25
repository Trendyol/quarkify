import { storiesOf } from "@storybook/react";
import React from "react";
import Icon from "../components/icon";

const stories = storiesOf("Icon", module);

stories.add("Icons", () => (
  <div>
    <Icon name="search" color={"rgba(0,0,0,1)"} style={{ backgroundColor: "red" }}/>
    <Icon name="search" disabled/>
    <Icon name="checkmark-full" variant={"primary"}/>
    <br/>
    <Icon name={"heart"} size="small" circular/>
    <Icon name={"heart"} circular/>
    <Icon name={"heart"} size="large" circular/>
    <Icon name={"heart"} size="xlarge" circular/>
  </div>
));
