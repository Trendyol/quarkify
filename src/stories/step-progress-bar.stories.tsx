import { storiesOf } from "@storybook/react";
import React from "react";
import Step from "../components/step-progress-bar/step";
import StepProgressBar from "../components/step-progress-bar/step-progress-bar";

const stories = storiesOf("Step Progress Bar", module);

stories.add("Default", () => (
  <div>
    <StepProgressBar>
      <Step name="First Step" active/>
      <Step name="Second Step" active/>
      <Step name="Third Step" active/>
      <Step name="Fourth Step"/>
    </StepProgressBar>
  </div>
));

stories.add("Colors", () => (
  <div>
    <StepProgressBar>
      <Step name="First Step" active/>
      <Step name="Second Step" active/>
      <Step name="Third Step"/>
    </StepProgressBar>
    <br/>
    <br/>
    <StepProgressBar color="red">
      <Step name="First Step" active/>
      <Step name="Second Step" active/>
      <Step name="Third Step"/>
    </StepProgressBar>
  </div>
));
