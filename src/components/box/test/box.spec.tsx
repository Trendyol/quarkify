import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import faker from "faker";
import React from "react";
import sinon from "sinon";
import Box from "../box";

Enzyme.configure({ adapter: new Adapter() });

describe("Box specs", () => {
  const sandbox = sinon.createSandbox();

  afterEach(() => {
    sandbox.verifyAndRestore();
  });

  it("should render box component", () => {
    const text = faker.random.word();
    const wrapper = shallow(<Box>{text}</Box>);

    expect(wrapper.text()).toEqual(text);
  });

  it("should have spaced className when spaced prop is given", () => {
    const wrapper = shallow(<Box spaced />);

    expect(wrapper.hasClass("q-spaced")).toBe(true);
  });

  it("should have left-aligned className by default", () => {
    const wrapper = shallow(<Box />);

    expect(wrapper.hasClass("q-left-aligned")).toBe(true);
  });

  it("should have right-aligned className when textAlign prop is equal to right", () => {
    const wrapper = shallow(<Box textAlign="right" />);

    expect(wrapper.hasClass("q-right-aligned")).toBe(true);
  });

  it("should have right-aligned className when textAlign prop is equal to center", () => {
    const wrapper = shallow(<Box textAlign="center" />);

    expect(wrapper.hasClass("q-center-aligned")).toBe(true);
  });

  it("should have justify-aligned className when textAlign prop is equal to justify", () => {
    const wrapper = shallow(<Box textAlign="justify" />);

    expect(wrapper.hasClass("q-justify-aligned")).toBe(true);
  });

  it("should accept additional classNames", () => {
    const fakeClass = faker.lorem.word();
    const wrapper = shallow(<Box className={fakeClass}/>);

    expect(wrapper.hasClass(fakeClass)).toBe(true);
  });
});
