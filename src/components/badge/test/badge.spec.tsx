import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import faker from "faker";
import React from "react";
import sinon from "sinon";
import Badge from "../badge";

Enzyme.configure({ adapter: new Adapter() });

describe("badge specs", () => {
  const sandbox = sinon.createSandbox();

  afterEach(() => {
    sandbox.verifyAndRestore();
  });

  it("should render badge component", () => {
    const text = faker.random.word();
    const wrapper = shallow(<Badge>{text}</Badge>);

    expect(wrapper.find(".q-badge")).toHaveLength(1);
  });

  it("should render badge component with search icon", () => {
    const text = faker.random.word();
    const wrapper = mount(<Badge icon="search">{text}</Badge>);

    expect(wrapper.exists(".icon-search")).toBe(true);
  });

  it("should have the given color prop as the className", () => {
    const wrapper = shallow(<Badge color="red"/>);

    expect(wrapper.exists(".red")).toBe(true);
  });
});
