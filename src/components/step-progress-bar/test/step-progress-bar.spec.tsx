import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import faker from "faker";
import React from "react";
import sinon from "sinon";
import StepProgressBar from "../step-progress-bar";

Enzyme.configure({ adapter: new Adapter() });

describe("step progress bar specs", () => {
  const sandbox = sinon.createSandbox();

  afterEach(() => {
    sandbox.verifyAndRestore();
  });

  it("should render step progress bar", () => {
    const wrapper = mount(<StepProgressBar />);
    expect(wrapper.find(".q-spb")).toHaveLength(1);
  });

});
