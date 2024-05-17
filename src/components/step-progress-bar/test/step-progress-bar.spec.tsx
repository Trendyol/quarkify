import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import { faker } from '@faker-js/faker';
import React from "react";
import sinon from "sinon";
import Step from "../step";
import StepProgressBar from "../step-progress-bar";

Enzyme.configure({ adapter: new Adapter() });

const { lorem: { word }, number } = faker;

describe("step progress bar specs", () => {
  const sandbox = sinon.createSandbox();

  afterEach(() => {
    sandbox.verifyAndRestore();
  });

  it("should render step progress bar", () => {
    const wrapper = shallow(
      <StepProgressBar>
        <Step name={word()} />
      </StepProgressBar>,
    );
    expect(wrapper.find(".q-spb")).toHaveLength(1);
  });

  it("should render additional steps", () => {
    const steps = Array.from({ length: number.int({max: 100}) }, () => word());

    const wrapper = mount(
      <StepProgressBar>
        {steps.map((step) => <Step name={step} key={name} />)}
      </StepProgressBar>,
    );
    expect(wrapper.find(".q-spb")).toHaveLength(1);
    expect(wrapper.find(".q-spb-step")).toHaveLength(steps.length);
  });

  it("should steps get active", () => {
    const wrapper = mount(
      <StepProgressBar>
        <Step name={word()} active />
        <Step name={word()} active />
        <Step name={word()} />
      </StepProgressBar>,
    );
    expect(wrapper.find(".q-spb")).toHaveLength(1);
    expect(wrapper.find(".active")).toHaveLength(2);
  });

  it("should steps have given color prop", () => {
    const wrapper = shallow(
      <StepProgressBar color={"red"}>
        <Step name={word()} />
      </StepProgressBar>,
    );
    expect(wrapper.find(".q-spb.red")).toHaveLength(1);
  });

  it("should accept additional classNames", () => {
    const fakeClass = word();
    const wrapper = shallow(
      <StepProgressBar className={fakeClass}>
        <Step name={word()} />
      </StepProgressBar>,
    );

    expect(wrapper.hasClass(fakeClass)).toBe(true);
  });

});
