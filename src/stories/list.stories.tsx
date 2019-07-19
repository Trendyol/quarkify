import { storiesOf } from "@storybook/react";
import React from "react";
import List from "../components/list";
import ListItem from "../components/list/listItem";

const stories = storiesOf("List", module);

stories.add("Default", () => (
  <List>
    <ListItem>15 gün içerisinde ücretsiz iade. Detaylı bilgi için.Tıklayın.</ListItem>
    <ListItem>24 saatte kargoda fırsatı iş günlerinde geçerlidir.</ListItem>
    <ListItem>Modelin Ölçüleri: Boy: 1.75, Göğüs: 80, Bel: 60, Kalça: 88</ListItem>
    <ListItem>Mankenin üzerindeki ürün S/36 bedendir.</ListItem>
  </List>
));

stories.add("No Dot", () => (
  <List noDot>
    <ListItem>15 gün içerisinde ücretsiz iade. Detaylı bilgi için.Tıklayın.</ListItem>
    <ListItem>24 saatte kargoda fırsatı iş günlerinde geçerlidir.</ListItem>
    <ListItem>Modelin Ölçüleri: Boy: 1.75, Göğüs: 80, Bel: 60, Kalça: 88</ListItem>
    <ListItem>Mankenin üzerindeki ürün S/36 bedendir.</ListItem>
  </List>
));

stories.add("Icon", () => (
  <List noDot>
    <ListItem icon={"search"}>15 gün içerisinde ücretsiz iade. Detaylı bilgi için  </ListItem>
    <ListItem icon={"search"}>24 saatte kargoda fırsatı iş günlerinde geçerlidir.</ListItem>
    <ListItem icon={"search"}>Modelin Ölçüleri: Boy: 1.75, Göğüs: 80, Bel: 60, Kalça: 88</ListItem>
    <ListItem icon={"search"}>Mankenin üzerindeki ürün S/36 bedendir.</ListItem>
  </List>
));
