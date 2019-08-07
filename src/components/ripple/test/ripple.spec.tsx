import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import faker from "faker";
import React from "react";
import sinon from "sinon";
import Ripple from "../ripple";

Enzyme.configure({ adapter: new Adapter() });

const createMockDiv = (width: number, height: number) => {
  const div = document.createElement("div");
  Object.assign(div.style, {
    height: height + "px",
    width: width + "px",
  });

  div.getBoundingClientRect = () => ({
    bottom: height,
    height,
    left: 0,
    right: width,
    top: 0,
    width,
  });
  return div;
};

describe("ripple specs", () => {
  const sandbox = sinon.createSandbox();
  jest.useFakeTimers();

  afterEach(() => {
    sandbox.verifyAndRestore();
  });

  it("should wrap the children", () => {
    const wrapper = shallow(<Ripple/>);

    expect(wrapper.find(".q-ripple")).toHaveLength(1);
  });

  it("should return the wrapped component as is if active prop is false", () => {
    const wrapper = shallow(<Ripple active={false}/>);

    expect(wrapper.find(".q-ripple")).toHaveLength(0);
  });

  it("should accept additional classNames", () => {
    const fakeClass = faker.lorem.word();
    const wrapper = shallow(<Ripple className={fakeClass}/>);

    expect(wrapper.hasClass(fakeClass)).toBe(true);
  });

  it("should extend onClick", () => {
    const stub = sandbox.stub();
    const event = {
      currentTarget: createMockDiv(faker.random.number(), faker.random.number()),
      stopPropagation: sandbox.stub(),
    };
    const wrapper = shallow(<Ripple onClick={stub}/>);
    wrapper.find(".q-ripple").simulate("click", event);

    expect(stub.calledOnce).toBe(true);
  });

  it("should not propagate the event", () => {
    const event = {
      currentTarget: createMockDiv(faker.random.number(), faker.random.number()),
      stopPropagation: sandbox.stub(),
    };
    const wrapper = shallow(<Ripple/>);
    wrapper.find(".q-ripple").simulate("click", event);

    expect(event.stopPropagation.calledOnce).toBe(true);
  });

  it("should disappear after animation ends", () => {
    const event = {
      currentTarget: createMockDiv(faker.random.number(), faker.random.number()),
      stopPropagation: sandbox.stub(),
    };
    const wrapper = shallow(<Ripple/>);

    wrapper.find(".q-ripple").simulate("click", event);
    jest.runAllTimers();
    const rippleStyle: {opacity: number} = wrapper.state("rippleStyle");
    expect(rippleStyle.opacity).toBe(0);
  });

});
