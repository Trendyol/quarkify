import { storiesOf } from "@storybook/react";
import React, { PureComponent } from "react";
import Countdown from "../components/countdown";

const stories = storiesOf("Countdown", module);

const threshold = 1000 * 60 * 60 * 24 * 2;

const til12Hours = new Date().getTime() + (43200000);
const til1Day12Hours = new Date().getTime() + (129600000);

stories.add("With days", () => (
  <div>
    <Countdown endDate={til1Day12Hours} gmt={0} threshold={threshold} />
  </div>
));

stories.add("With custom days", () => (
  <div>
    <Countdown endDate={til1Day12Hours} gmt={0} threshold={threshold} day={"day"}/>
  </div>
));

stories.add("With hours", () => (
  <div>
    <Countdown endDate={til12Hours} gmt={0} threshold={threshold} />
  </div>
));

stories.add("With custom hours", () => (
  <div>
    <Countdown endDate={til12Hours} gmt={0} threshold={threshold} hour={"hour"}/>
  </div>
));

stories.add("With GTM + 3", () => (
  <div>
    <Countdown endDate={til12Hours} gmt={3} threshold={threshold} />
  </div>
));

stories.add("With custom GTM + 3", () => (
  <div>
    <Countdown endDate={til12Hours} gmt={3} threshold={threshold} hour={"hour"} day={"day"} minute={"minute"}/>
  </div>
));
