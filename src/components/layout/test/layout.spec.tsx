import Enzyme, { shallow } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import { faker } from '@faker-js/faker';
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

  it("should have className fullscreen when fullScreen prop is given", () => {
    const wrapper = shallow(<Layout fullScreen/>);
    expect(wrapper.hasClass("q-fullscreen")).toBe(true);
  });

  it("should accept additional classNames", () => {
    const fakeClass = faker.lorem.word();
    const wrapper = shallow(<Layout className={fakeClass}/>);

    expect(wrapper.hasClass(fakeClass)).toBe(true);
  });
});
