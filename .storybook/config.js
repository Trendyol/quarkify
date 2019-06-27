import { configure } from "@storybook/react";

const req = require.context("../stories", true, /.stories.jsx$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);