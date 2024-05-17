import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import { faker } from '@faker-js/faker';
import React from "react";
import sinon from "sinon";
import List from "../list";

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
    const wrapper = shallow(<List.Item/>);

    expect(wrapper.find(".q-list-item")).toHaveLength(1);
  });

  it("should render list item component with no dots", () => {
    const text = faker.lorem.word();
    const wrapper = shallow(<List noDot><List.Item>{text}</List.Item></List>);

    expect(wrapper.find(".q-no-dot")).toHaveLength(1);
  });

  it("should render item component with icon", () => {
    const wrapper = mount(<List.Item icon={"search"}/>);

    expect(wrapper.exists(".icon-search")).toEqual(true);
  });

});
