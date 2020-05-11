import { storiesOf } from "@storybook/react";
import React from "react";
import { Box } from "../components/box";
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

stories.add("With other components", () => (
  <Box spaced>
    <StepProgressBar>
      <Step name="First Step" active/>
      <Step name="Second Step" active/>
      <Step name="Third Step" active/>
      <Step name="Fourth Step"/>
    </StepProgressBar>
  </Box>
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
