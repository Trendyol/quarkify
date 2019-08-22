import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import faker from "faker";
import React from "react";
import sinon from "sinon";
import Typography from "../index";

Enzyme.configure({ adapter: new Adapter() });

describe("typography specs", () => {

  const sandbox = sinon.createSandbox();

  afterEach(() => {
    sandbox.verifyAndRestore();
  });

  it("should render product slider correctly", () => {
    const wrapper = shallow(<Typography variant={"h1"}/>);

    expect(wrapper.find(".q-typography")).toHaveLength(1);
  });

  it("should be of type h1 if given h1 variant", () => {
    const wrapper = shallow(<Typography variant={"h1"}/>);
    expect(wrapper.type()).toBe("h1");
  });

  it("should be of type h2 if given h2 variant", () => {
    const wrapper = shallow(<Typography variant={"h2"}/>);
    expect(wrapper.type()).toBe("h2");
  });

  it("should be of type h3 if given h3 variant", () => {
    const wrapper = shallow(<Typography variant={"h3"}/>);
    expect(wrapper.type()).toBe("h3");
  });

  it("should be of type p if given paragraph variant", () => {
    const wrapper = shallow(<Typography variant={"paragraph"}/>);
    expect(wrapper.type()).toBe("p");
  });

  it("should be of type p if given smallParagraph variant", () => {
    const wrapper = shallow(<Typography variant={"smallParagraph"}/>);
    expect(wrapper.type()).toBe("p");
  });

  it("should be of type p if given subtitle variant", () => {
    const wrapper = shallow(<Typography variant={"subtitle"}/>);
    expect(wrapper.type()).toBe("p");
  });

  it("should have className underline when given underline prop", () => {
    const wrapper = shallow(<Typography variant={"h1"} underline/>);

    expect(wrapper.exists(".underline")).toEqual(true);
  });

  it("should have className bold when given bold prop", () => {
    const wrapper = shallow(<Typography variant={"h1"} bold/>);

    expect(wrapper.exists(".bold")).toEqual(true);
  });

  it("should have className ellipsis when given noWrap prop", () => {
    const wrapper = shallow(<Typography variant={"h1"} noWrap/>);

    expect(wrapper.exists(".ellipsis")).toEqual(true);
  });

  it("should have the given color prop as the className", () => {
    const wrapper = shallow(<Typography variant={"h1"} color="red"/>);

    expect(wrapper.exists(".red")).toBe(true);
  });

  it("should accept additional classNames", () => {
    const fakeClass = faker.lorem.word();
    const wrapper = shallow(<Typography variant={"h1"} className={fakeClass}/>);

    expect(wrapper.hasClass(fakeClass)).toBe(true);
  });

});
