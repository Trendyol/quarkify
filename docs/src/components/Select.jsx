import React from 'react';
import { Box } from "quarkify/components/box";
import EmbeddedGist from "../partials/EmbeddedGist";
import QSelect from "quarkify/components/select";
import renderTable from "../partials/Table";
import List from "quarkify/components/list";
import ListItem from "quarkify/components/list/listItem";

const props = [
  {
    name: "duration",
    type: "number",
    default: "500",
    description: "Time of the scroll animation"
  },
];

const vehicles = [
  {
    name: "Car",
  },
  {
    name: "Bike",
  },
  {
    name: "Plane",
  },
];

const items = [
  {
    id: 1,
    name: "Car",
  },
  {
    id: 2,
    name: "Bike",
  },
  {
    id: 3,
    name: "Plane",
  },
];

const customValues = [
  {
    my_new_value: 1,
    name: "Car",
  },
  {
    my_new_value: 2,
    name: "Bike",
  },
  {
    my_new_value: 3,
    name: "Plane",
  },
];

const customNames = [
  {
    id: 1,
    my_new_name: "Car",
  },
  {
    id: 2,
    my_new_name: "Bike",
  },
  {
    id: 3,
    my_new_name: "Plane",
  },
];

function Select() {
  return (
    <>
      <section id="dashboards" className="doc-section">
        <h2 className="section-title">Select</h2>
        <div className="section-block">
          <p>Select component allows a user to select an option from drop-down list.</p>
        </div>

        <h2 className="section-title">Usage</h2>
        <div className="section-block">
          <p>Here is the simple usage of select component</p>
          <Box>
            <QSelect items={items} value={"id"} selected={"3"}/>
          </Box>
          <EmbeddedGist gist="yavuzkoca/39dbf94fc5f14f89a3b067f94df2f722" file="select_1.jsx"/>
        </div>

        <h2 className="section-title">Examples</h2>
        <div className="section-block">
          <h4 className="subsection-title">Items</h4>
          <p>Select component has one required property which is items. Items takes an array of JSON objects which keys of each object has to be:</p>
          <List>
            <ListItem>name: string</ListItem>
            <ListItem>selected: boolean</ListItem>
            <ListItem>value: any</ListItem>
            <ListItem>disabled: boolean</ListItem>
          </List>
          <p>Name and value keys of the JSON object are not mandatory though. These keys can bu customized by setting value and name props to select component. Detailed explanation is below there.</p>
          <Box>
            <QSelect items={vehicles} />
          </Box>
          <EmbeddedGist gist="yavuzkoca/504cd59415976c2578a50f05d8838990" file="select_2.jsx"/>
        </div>

        <div className="section-block">
          <h4 className="subsection-title">Fluid</h4>
          <p>Fluid selects extend the full available width.</p>
          <Box>
            <QSelect items={vehicles} fluid/>
          </Box>
          <EmbeddedGist gist="yavuzkoca/82dfd4a760c268d811f18c2de4feec61" file="select_3.jsx"/>
        </div>

        <div className="section-block">
          <h4 className="subsection-title">Value</h4>
          <p>The value of each option of the select component can be changed with value key. If its given, it will take the given key in the array of JSON objects. Else, it will search the key named as 'value'. Please go ahead and inspect the values of each option in the select components.</p>
          <Box>
            <QSelect items={customValues} value="my_new_value"/>
            <QSelect items={items} /> {/* There is no key named 'value' in the items array. So, value of each option will be empty */}
            <QSelect items={items} value="id"/>
          </Box>
          <EmbeddedGist gist="yavuzkoca/1ce1ee3c5a30181307e2a769b038b6d6" file="select_4.jsx"/>
        </div>

        <div className="section-block">
          <h4 className="subsection-title">Name</h4>
          <p>Similar to value, the name of each option of the select component can be changed with name key. If its given, it will take the given key in the array of JSON objects. Else, it will search the key named as 'name'.</p>
          <Box>
            <QSelect items={customNames} name="my_new_name"/>
            <QSelect items={items} />
          </Box>
          <EmbeddedGist gist="yavuzkoca/63a7a567cf9a0c808a99153343a201d5" file="select_5.jsx"/>
        </div>

        <div className="section-block">
          <h4 className="subsection-title">Error</h4>
          <p>Error prop gives an animation to select component with red border that scales up and down. Please, refresh the page to see the animation.</p>
          <Box>
            <QSelect items={items} error />
          </Box>
          <EmbeddedGist gist="yavuzkoca/34f698c6bd1cb8aa8ec0fedd3597ded4" file="select_6.jsx"/>
        </div>

        <div className="section-block">
          <h4 className="subsection-title">Right Icon | Left Icon</h4>
          <p>Gives a right icon to the component</p>
          <Box>
            <QSelect items={items} rightIcon="filter" /> &nbsp;
            <QSelect items={items} leftIcon="close" />
          </Box>
          <EmbeddedGist gist="yavuzkoca/20ca1b932f7d63f68736642523c55f99" file="select_7.jsx"/>
        </div>

        <div className="section-block">
          <h4 className="subsection-title">Right Icon Color | Left Icon Color</h4>
          <p>Changes the color of the icons</p>
          <Box>
            <QSelect items={items} rightIcon="filter" rightIconColor="primary" /> &nbsp;
            <QSelect items={items} leftIcon="close" leftIconColor="red" />
          </Box>
          <EmbeddedGist gist="yavuzkoca/d08b32eb38713f34180801173d10ed90" file="select_8.jsx"/>
        </div>

        <div className="section-block">
          <h4 className="subsection-title">Selected</h4>
          <p>To select other options by default, try to give the selected prop. This selected prop has to be one of the value of the options </p>
          <Box>
            <QSelect items={items} selected={3} value="id" /> &nbsp;
            <QSelect items={items} selected={1} value="id" /> &nbsp;
          </Box>
          <EmbeddedGist gist="yavuzkoca/82edb40b5a1ad14e09251ab846c039ed" file="select_9.jsx"/>
        </div>

        {renderTable(props)}

      </section>
    </>
  );
}

export default Select;
