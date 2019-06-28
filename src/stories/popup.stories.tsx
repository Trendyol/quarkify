import { storiesOf } from "@storybook/react";
import React from "react";
import Popup from "../components/popup";

const stories = storiesOf("Popup", module);

stories.add("Default", () => <Popup />);
