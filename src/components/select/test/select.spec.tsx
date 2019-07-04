import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import sinon from "sinon";
import Select from "../../select";

Enzyme.configure({ adapter: new Adapter() });

const items = [
  {
    name: "Car",
    value: 1,
    variant: "primary",
  },
  {
    disabled: true,
    name: "Bike",
    value: 2,
    variant: "primary",
  },
  {
    name: "Plane",
    selected: true,
    value: 3,
    variant: "secondary",
  },
];

describe("select specs", () => {
  const sandbox = sinon.createSandbox();

  afterEach(() => {
    sandbox.verifyAndRestore();
  });

  it("should render select component", () => {
    const wrapper = shallow(<Select items={items}/>);
    expect(wrapper.exists(".select-group")).toEqual(true);
  });

  it("should render 3 options", () => {
    const wrapper = shallow(<Select items={items}/>);
    expect(wrapper.render().find("select option")).toHaveLength(3);
  });

  it("should find selected item as 'Plane'", () => {
    const wrapper = shallow(<Select items={items}/>);
    expect(wrapper.render().find("select [selected]").text()).toEqual("Plane");
  });

  it("should find selected item's value as 3", () => {
    const wrapper = shallow(<Select items={items}/>);
    expect(wrapper.render().find("select [selected]").val()).toEqual("3");
  });

  it("should find selected item's class name as secondary", () => {
    const wrapper = shallow(<Select items={items}/>);
    expect(wrapper.render().find("select [selected]").hasClass("secondary")).toEqual(true);
  });

  it("should find disabled item as Bike", () => {
    const wrapper = shallow(<Select items={items}/>);
    expect(wrapper.render().find("select [disabled]").text()).toEqual("Bike");
  });

  it("should have className fluid when given fluid prop", () => {
    const wrapper = shallow(<Select items={items} fluid/>);
    const selectWrapper = wrapper.find(".select-wrapper");
    expect(selectWrapper.hasClass("fluid")).toBe(true);
  });
});
