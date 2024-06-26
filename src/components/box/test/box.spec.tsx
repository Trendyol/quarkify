import Enzyme, { shallow } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import { faker } from '@faker-js/faker';
import React from "react";
import sinon from "sinon";

import {Box, BoxGroup} from "../index";

Enzyme.configure({ adapter: new Adapter() });

describe("Box specs", () => {
  const sandbox = sinon.createSandbox();

  afterEach(() => {
    sandbox.verifyAndRestore();
  });

  it("should render box component", () => {
    const text = faker.lorem.word();
    const wrapper = shallow(<Box>{text}</Box>);

    expect(wrapper.text()).toEqual(text);
  });

  it("should have spaced className when spaced prop is given", () => {
    const wrapper = shallow(<Box spaced/>);

    expect(wrapper.hasClass("q-spaced")).toBe(true);
  });

  it("should have fitted className when fitted prop is given", () => {
    const wrapper = shallow(<Box fitted/>);

    expect(wrapper.hasClass("q-fitted")).toBe(true);
  });

  it("should have left-aligned className by default", () => {
    const wrapper = shallow(<Box/>);

    expect(wrapper.hasClass("q-left-aligned")).toBe(true);
  });

  it("should have right-aligned className when textAlign prop is equal to right", () => {
    const wrapper = shallow(<Box textAlign="right"/>);

    expect(wrapper.hasClass("q-right-aligned")).toBe(true);
  });

  it("should have right-aligned className when textAlign prop is equal to center", () => {
    const wrapper = shallow(<Box textAlign="center"/>);

    expect(wrapper.hasClass("q-center-aligned")).toBe(true);
  });

  it("should have justify-aligned className when textAlign prop is equal to justify", () => {
    const wrapper = shallow(<Box textAlign="justify"/>);

    expect(wrapper.hasClass("q-justify-aligned")).toBe(true);
  });

  it("should have box-group className", () => {
    const wrapper = shallow(<BoxGroup/>);

    expect(wrapper.hasClass("q-box-group")).toBe(true);
  });

  it("should accept additional classNames", () => {
    const fakeClass = faker.lorem.word();
    const wrapperBox = shallow(<Box className={fakeClass}/>);
    const wrapperBoxGroup = shallow(<BoxGroup className={fakeClass}/>);

    expect(wrapperBox.hasClass(fakeClass)).toBe(true);
    expect(wrapperBoxGroup.hasClass(fakeClass)).toBe(true);
  });
});
