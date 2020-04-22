import { storiesOf } from "@storybook/react";
import React, { PureComponent } from "react";
import StepProgressBar from "../components/step-progress-bar/step-progress-bar";

const stories = storiesOf("Step Progress Bar", module);

stories.add("Default", () => (
  <div>
    <StepProgressBar/>
  </div>
));
