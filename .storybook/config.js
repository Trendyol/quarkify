import { configure } from "@storybook/react";
import '../src/styles/_globals.scss';
import '../src/styles/_icon-url.scss';
import '../src/styles/_font.scss';

const req = require.context("../src/stories", true, /.stories.tsx$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
