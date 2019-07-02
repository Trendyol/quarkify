import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import faker from "faker";
import React from "react";
import sinon from "sinon";
import Popup from "../index";

Enzyme.configure({ adapter: new Adapter() });

// tslint:disable-next-line:no-empty
const closePopup = () => {
};

describe("popup specs", () => {
  const sandbox = sinon.createSandbox();

  afterEach(() => {
    sandbox.verifyAndRestore();
  });

  it("should render popup component", () => {
    const wrapper = shallow(<Popup onClose={closePopup} show={true} />);
    expect(wrapper.exists(".popup-main")).toEqual(true);
  });

  it("should not render popup component", () => {
    const wrapper = shallow(<Popup onClose={closePopup} show={false} />);
    expect(wrapper.exists(".popup-main")).toEqual(false);
  });

  it("should render close icon", () => {
    const wrapper = shallow(<Popup onClose={closePopup} show={true} />);
    expect(wrapper.childAt(0).exists(".icon-close")).toEqual(true);
  });

  it("should close popup when close icon is clicked", () => {
    const spy = sandbox.spy();
    const wrapper = mount(<Popup onClose={spy} show={true} />);
    wrapper.find(".icon-close").simulate("click");
    expect(spy.calledOnce).toEqual(true);
  });
});
