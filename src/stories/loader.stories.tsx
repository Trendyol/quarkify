import { storiesOf } from "@storybook/react";
import React from "react";
import Loader from "../components/loader";

const stories = storiesOf("Loader", module);

stories.add("Default", () => (
  <Loader active/>
));
