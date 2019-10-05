import React from "react";
import EmbeddedGist from "../partials/EmbeddedGist";
import { Box as QBox } from "quarkify/components/box";
import renderTable from "../partials/Table";
import QList from "quarkify/components/list";

const props = [
  {
    name: "noDot",
    type: "boolean",
    default: "false",
    description: "Removes the dot that comes by default"
  },
  {
    name: "icon",
    type: "string",
    default: "",
    description: "Adds icon to the items"
  },
  {
    name: "iconColor",
    type: "enum: ['primary', 'green', 'red', 'black', 'dark-gray', 'light-gray', 'border-gray', 'white', 'yellow', 'zero']",
    default: "black",
    description: "Changes the color of the icon"
  },
];

function List() {
  return (
    <>
      <section id="dashboards" className="doc-section">
        <h2 className="section-title">List</h2>
        <div className="section-block">
          <p>Lists can be defined as continuous, vertical indexes of text or images.</p>
        </div>

        <h2 className="section-title">Usage</h2>
        <div className="section-block">
          <p>Lists are a continuous group of text or images. They are composed of items containing primary and supplemental actions, which are represented by icons and text.</p>
          <QBox>
            <QList>
              <QList.Item>
                  15 gün içerisinde ücretsiz iade. Detaylı bilgi için.Tıklayın.
                </QList.Item>
              <QList.Item>
                  24 saatte kargoda fırsatı iş günlerinde geçerlidir.
                </QList.Item>
              <QList.Item>
                  Modelin Ölçüleri: Boy: 1.75, Göğüs: 80, Bel: 60, Kalça: 88
                </QList.Item>
              <QList.Item>
                Mankenin üzerindeki ürün S/36 bedendir.
              </QList.Item>
            </QList>
          </QBox>
          <EmbeddedGist gist="yavuzkoca/b40ab922e4c6a0354df191f59f340657" file="list_1.jsx"/>
        </div>

        <h2 className="section-title">Examples</h2>

        <div className="section-block">
          <h4 className="subsection-title">No Dot</h4>
          <p>It is possible to use noDot prop to remove the dots that comes by default.</p>
          <QBox>
            <QList noDot>
              <QList.Item>
                15 gün içerisinde ücretsiz iade. Detaylı bilgi için.Tıklayın.
              </QList.Item>
              <QList.Item>
                24 saatte kargoda fırsatı iş günlerinde geçerlidir.
              </QList.Item>
              <QList.Item>
                Modelin Ölçüleri: Boy: 1.75, Göğüs: 80, Bel: 60, Kalça: 88
              </QList.Item>
              <QList.Item>
                Mankenin üzerindeki ürün S/36 bedendir.
              </QList.Item>
            </QList>
          </QBox>
          <EmbeddedGist gist="yavuzkoca/f74b5a767ffdc8952265b0762dca6fb5" file="list_2.jsx"/>
        </div>

        <div className="section-block">
          <h4 className="subsection-title">Icon</h4>
          <p>List items takes icon prop to change the icon at the beginning of the item.</p>
          <QBox>
            <QList noDot>
              <QList.Item icon="heart">
                15 gün içerisinde ücretsiz iade. Detaylı bilgi için.Tıklayın.
              </QList.Item>
              <QList.Item icon="heart">
                24 saatte kargoda fırsatı iş günlerinde geçerlidir.
              </QList.Item>
              <QList.Item icon="heart">
                Modelin Ölçüleri: Boy: 1.75, Göğüs: 80, Bel: 60, Kalça: 88
              </QList.Item>
              <QList.Item icon="heart">
                Mankenin üzerindeki ürün S/36 bedendir.
              </QList.Item>
            </QList>
          </QBox>
          <EmbeddedGist gist="yavuzkoca/28cd27f9e2b308d19f13d7d523cbbbfa" file="list_3.jsx"/>
        </div>

        <div className="section-block">
          <h4 className="subsection-title">Icon Color</h4>
          <p>Similarly, icon color changes the color of the icon in the items</p>
          <QBox>
            <QList noDot>
              <QList.Item icon="heart" iconColor="red">
                15 gün içerisinde ücretsiz iade. Detaylı bilgi için.Tıklayın.
              </QList.Item>
              <QList.Item icon="heart" iconColor="red">
                24 saatte kargoda fırsatı iş günlerinde geçerlidir.
              </QList.Item>
              <QList.Item icon="heart" iconColor="red">
                Modelin Ölçüleri: Boy: 1.75, Göğüs: 80, Bel: 60, Kalça: 88
              </QList.Item>
              <QList.Item icon="heart" iconColor="red">
                Mankenin üzerindeki ürün S/36 bedendir.
              </QList.Item>
            </QList>
          </QBox>
          <EmbeddedGist gist="yavuzkoca/6ad018d6be7b8ec5edd8a090aa3d2f8c" file="list_4.jsx"/>
        </div>

        {renderTable(props)}

      </section>
    </>
  );
}

export default List;
