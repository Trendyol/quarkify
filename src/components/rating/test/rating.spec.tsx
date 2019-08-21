import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import faker from "faker";
import React from "react";
import sinon from "sinon";
import Rating from "../rating";

Enzyme.configure({ adapter: new Adapter() });

describe("radio specs", () => {
  const sandbox = sinon.createSandbox();

  afterEach(() => {
    sandbox.verifyAndRestore();
  });

  it("should render rating component with 5 stars", () => {
    const wrapper = mount(<Rating />);
    expect(wrapper.find(".q-icon")).toHaveLength(10); // 5 empty, 5 colorfull
  });

  it("should render rating component with x stars", () => {
    const stars = faker.random.number({
      max: 10,
      min: 1,
    });
    const wrapper = mount(<Rating stars={stars} />);
    expect(wrapper.find(".q-icon")).toHaveLength(stars * 2);
  });

  it("should have half amount of stars filled", () => {
    const wrapper = mount(<Rating value={2.5} />);
    expect(wrapper.find(".q-rating-full").props().style).toHaveProperty("width", "50%");
  });

  it("should have full amount of stars filled", () => {
    const wrapper = mount(<Rating value={5} />);
    expect(wrapper.find(".q-rating-full").props().style).toHaveProperty("width", "100%");
  });

  it("should have full amount of stars filled in x stars", () => {
    const stars = faker.random.number({
      max: 10,
      min: 1,
    });
    const wrapper = mount(<Rating value={stars} stars={stars} />);
    expect(wrapper.find(".q-rating-full").props().style).toHaveProperty("width", "100%");
  });

  it("should receive proper size prop", () => {
    const wrapper = mount(<Rating size="large" />);
    expect(wrapper.find(".q-rating-large")).toHaveLength(1);
  });

  it("should receive proper color prop", () => {
    const wrapper = mount(<Rating size="large" color={"red"}/>);
    expect(wrapper.find(".q-icon.red")).toHaveLength(5);
  });

  it("should receive proper margin prop", () => {
    const margin = faker.random.number({
      max: 50,
      min: 1,
    });
    const wrapper = mount(<Rating size="large" margin={margin} />);
    expect(wrapper.find(".q-icon").first().props().style).toHaveProperty("marginRight", `${margin}px`);
  });
});
