import { storiesOf } from "@storybook/react";
import React from "react";
import Badge from "../components/badge";

const stories = storiesOf("Badge", module);

stories.add("Badge", () => (
  <>
    <div style={{ display: "flex", alignItems: "center" }}>
      <Badge color="primary">Sepette %30 indirim</Badge>
      <Badge color="dark-gray" icon="cargo-box"/>
      <Badge color="dark-gray" icon="cargo-box">Kargo Bedava</Badge>
    </div>
  </>
));
