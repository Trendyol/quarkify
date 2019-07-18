import { storiesOf } from "@storybook/react";
import React from "react";
import Button from "../components/button";
import Item from "../components/item";
import List from "../components/list";

const stories = storiesOf("List", module);

stories.add("Default", () => (
  <List>
    <Item>15 gün içerisinde ücretsiz iade. Detaylı bilgi için.Tıklayın.</Item>
    <Item>24 saatte kargoda fırsatı iş günlerinde geçerlidir.</Item>
    <Item>Modelin Ölçüleri: Boy: 1.75, Göğüs: 80, Bel: 60, Kalça: 88</Item>
    <Item>Mankenin üzerindeki ürün S/36 bedendir.</Item>
  </List>
));

stories.add("Icon", () => (
  <List>
    <Item icon={"search"} dotted={false}>15 gün içerisinde ücretsiz iade. Detaylı bilgi için  </Item>
    <Item icon={"search"} dotted={false}>24 saatte kargoda fırsatı iş günlerinde geçerlidir.</Item>
    <Item icon={"search"} dotted={false}>Modelin Ölçüleri: Boy: 1.75, Göğüs: 80, Bel: 60, Kalça: 88</Item>
    <Item icon={"search"} dotted={false}>Mankenin üzerindeki ürün S/36 bedendir.</Item>
  </List>
));
