import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import faker from "faker";
import React from "react";
import sinon from "sinon";
import Icon from "../icon";

Enzyme.configure({ adapter: new Adapter() });

describe("icon specs", () => {
  const sandbox = sinon.createSandbox();

  afterEach(() => {
    sandbox.verifyAndRestore();
  });

  it("should render icon component", () => {
    const text = faker.lorem.word();
    const wrapper = shallow(<Icon name={text}/>);
    expect(wrapper.find(".icon-" + text)).toHaveLength(1);
  });

  it("should be rendered with given large size prop", () => {
    const wrapper = shallow(<Icon name="search" size="large"/>);

    expect(wrapper.exists(".q-large")).toEqual(true);
  });

  it("should have q-circular className when circular prop is passed", () => {
    const wrapper = shallow(<Icon name="search" circular/>);

    expect(wrapper.exists(".q-circular")).toEqual(true);
  });

  it("should call function when close icon is clicked", () => {
    const spy = sandbox.spy();
    const wrapper = shallow(<Icon onClick={spy} name="search"/>);
    wrapper.find(".icon-search").simulate("click");
    expect(spy.calledOnce).toEqual(true);
  });

  it("should have the given color prop as the className", () => {
    const fakeIconName = faker.lorem.word();
    const wrapper = shallow(<Icon name={fakeIconName} color="red"/>);

    expect(wrapper.exists(".red")).toBe(true);
  });

  it("should accept additional classNames", () => {
    const fakeClass = faker.lorem.word();
    const wrapper = shallow(<Icon name="search" className={fakeClass}/>);

    expect(wrapper.hasClass(fakeClass)).toBe(true);
  });
});
