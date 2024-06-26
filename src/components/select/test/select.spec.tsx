import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import { faker } from '@faker-js/faker';
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

const customItems = [
  {
    id: 1,
    variant: "primary",
    vehicle: "Car",
  },
  {
    disabled: true,
    id: 2,
    variant: "primary",
    vehicle: "Bike",
  },
  {
    id: 3,
    selected: true,
    variant: "secondary",
    vehicle: "Plane",
  },
];

describe("select specs", () => {
  const sandbox = sinon.createSandbox();

  afterEach(() => {
    sandbox.verifyAndRestore();
  });

  it("should render select component", () => {
    const wrapper = shallow(<Select items={items}/>);
    expect(wrapper.exists(".q-select-wrapper")).toEqual(true);
  });

  it("should render 3 options", () => {
    const wrapper = shallow(<Select items={items}/>);
    expect(wrapper.render().find("select option")).toHaveLength(3);
  });

  it("should find selected item as 'Plane'", () => {
    const wrapper = shallow(<Select items={items} value={"3"}/>);
    expect(
      wrapper
        .render()
        .find("select option:selected")
        .text(),
    ).toEqual("Plane");
  });

  it("should find selected item's value as 3", () => {
    const wrapper = shallow(<Select items={items} value={"3"}/>);
    expect(
      wrapper
        .render()
        .find("select")
        .val(),
    ).toEqual("3");
  });

  it("should find selected item's class name as secondary", () => {
    const wrapper = shallow(<Select items={items} value={"3"}/>);
    expect(
      wrapper
        .render()
        .find("select option:selected")
        .hasClass("q-secondary"),
    ).toEqual(true);
  });

  it("should find disabled item as Bike", () => {
    const wrapper = shallow(<Select items={items}/>);
    expect(
      wrapper
        .render()
        .find("select [disabled]")
        .text(),
    ).toEqual("Bike");
  });

  it("should have className fluid when given fluid prop", () => {
    const wrapper = shallow(<Select items={items} fluid/>);
    const selectWrapper = wrapper.find(".q-select-wrapper");
    expect(selectWrapper.hasClass("q-fluid")).toBe(true);
  });

  it("should set values and names properly", () => {
    const wrapper = shallow(
      <Select items={customItems} valueKey={"id"} name={"vehicle"} fluid value={"3"}/>,
    );
    expect(
      wrapper
        .render()
        .find("select")
        .val(),
    ).toEqual("3");
    expect(
      wrapper
        .render()
        .find("select option:selected")
        .text(),
    ).toEqual("Plane");
  });

  it("should have a left icon if leftIcon prop is given", () => {
    const wrapper = mount(<Select items={customItems} leftIcon={"close"}/>);

    expect(wrapper.find(".q-select-wrapper").find(".q-select-icon-left")).toHaveLength(2);
  });

  it("should have a right icon if leftIcon prop is given", () => {
    const wrapper = mount(<Select items={customItems} rightIcon={"close"}/>);

    expect(wrapper.find(".q-select-wrapper").find(".q-select-icon-right")).toHaveLength(2);
  });

  it("should accept additional classNames", () => {
    const fakeClass = faker.lorem.word();
    const wrapper = mount(<Select className={fakeClass} items={customItems}/>);

    expect(wrapper.hasClass(fakeClass)).toBe(true);
  });

  it("should have q-error className if error prop is passed", () => {
    const wrapper = mount(<Select error items={customItems}/>);

    expect(wrapper.find(".q-error")).toHaveLength(1);
  });
});
