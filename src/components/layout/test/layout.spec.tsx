import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import faker from "faker";
import React from "react";
import sinon from "sinon";
import Layout from "../layout";

Enzyme.configure({ adapter: new Adapter() });

describe("layout specs", () => {
  const sandbox = sinon.createSandbox();

  afterEach(() => {
    sandbox.verifyAndRestore();
  });

  it("should render layout component", () => {
    const wrapper = shallow(<Layout/>);
    expect(wrapper.find(".q-layout")).toHaveLength(1);
  });

  it("should have className fitted when given fitted prop", () => {
    const wrapper = shallow(<Layout fitted/>);
    expect(wrapper.hasClass("q-fitted")).toBe(true);
  });

  it("should accept additional classNames", () => {
    const fakeClass = faker.lorem.word();
    const wrapper = shallow(<Layout className={fakeClass}/>);

    expect(wrapper.hasClass(fakeClass)).toBe(true);
  });
});
