import { storiesOf } from "@storybook/react";
import React from "react";
import List from "../components/list";

const stories = storiesOf("List", module);

stories.add("Default", () => (
  <List>
    <List.Item>
      15 gün içerisinde ücretsiz iade. Detaylı bilgi için.Tıklayın.
    </List.Item>
    <List.Item>
      24 saatte kargoda fırsatı iş günlerinde geçerlidir.
    </List.Item>
    <List.Item>
      Modelin Ölçüleri: Boy: 1.75, Göğüs: 80, Bel: 60, Kalça: 88
    </List.Item>
    <List.Item>
      Mankenin üzerindeki ürün S/36 bedendir.
    </List.Item>
  </List>
));

stories.add("No Dot", () => (
  <List noDot>
    <List.Item>
      15 gün içerisinde ücretsiz iade. Detaylı bilgi için.Tıklayın.
    </List.Item>
    <List.Item>
      24 saatte kargoda fırsatı iş günlerinde geçerlidir.
    </List.Item>
    <List.Item>
      Modelin Ölçüleri: Boy: 1.75, Göğüs: 80, Bel: 60, Kalça: 88
    </List.Item>
    <List.Item>
      Mankenin üzerindeki ürün S/36 bedendir.
    </List.Item>
  </List>
));

stories.add("Icon", () => (
  <div>
    <List noDot>
      <List.Item icon={"search"}>
        15 gün içerisinde ücretsiz iade. Detaylı bilgi için
      </List.Item>
      <List.Item icon={"search"}>
        24 saatte kargoda fırsatı iş günlerinde geçerlidir.
      </List.Item>
      <List.Item icon={"search"}>
        Modelin Ölçüleri: Boy: 1.75, Göğüs: 80, Bel: 60, Kalça: 88
      </List.Item>
      <List.Item icon={"search"}>
        Mankenin üzerindeki ürün S/36 bedendir.
      </List.Item>
    </List>
    <br/>
    <br/>
    <List noDot>
      <List.Item icon={"search"} iconColor={"red"}>
        15 gün içerisinde ücretsiz iade. Detaylı bilgi için
      </List.Item>
      <List.Item icon={"search"} iconColor={"primary"}>
        24 saatte kargoda fırsatı iş günlerinde geçerlidir.
      </List.Item>
      <List.Item icon={"search"} iconColor={"green"}>
        Modelin Ölçüleri: Boy: 1.75, Göğüs: 80, Bel: 60, Kalça: 88
      </List.Item>
      <List.Item icon={"search"} iconColor={"black"}>
        Mankenin üzerindeki ürün S/36 bedendir.
      </List.Item>
    </List>
  </div>
));
