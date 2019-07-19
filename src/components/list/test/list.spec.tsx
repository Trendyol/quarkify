import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import faker from "faker";
import React from "react";
import sinon from "sinon";
import List from "../list";
import ListItem from "../listItem";

Enzyme.configure({ adapter: new Adapter() });

describe("list specs", () => {
  const sandbox = sinon.createSandbox();

  afterEach(() => {
    sandbox.verifyAndRestore();
  });

  it("should render list component", () => {
    const wrapper = shallow(<List/>);

    expect(wrapper.find(".q-list")).toHaveLength(1);
  });

  it("should render list item component", () => {
    const wrapper = shallow(<ListItem/>);

    expect(wrapper.find(".q-list-item")).toHaveLength(1);
  });

  it("should render list item component with no dots", () => {
    const text = faker.random.word();
    const wrapper = shallow(<List noDot><ListItem>{text}</ListItem></List>);

    expect(wrapper.find(".q-no-dot")).toHaveLength(1);
  });

  it("should render item component with icon", () => {
    const wrapper = mount(<ListItem icon={"search"}/>);

    expect(wrapper.exists(".icon-search")).toEqual(true);
  });
});
