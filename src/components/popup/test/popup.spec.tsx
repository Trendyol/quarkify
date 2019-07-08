import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import sinon from "sinon";
import Popup from "../index";

Enzyme.configure({ adapter: new Adapter() });

// tslint:disable-next-line:no-empty
const closePopup = () => {};

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
    const wrapper = mount(<Popup onClose={closePopup} show={false} />);
    expect(wrapper.exists(".popup-main")).toEqual(false);
  });

  it("should render close icon", () => {
    const wrapper = shallow(<Popup onClose={closePopup} show={true} />);
    expect(wrapper.childAt(0).exists(".icon-close")).toEqual(true);
  });

  it("should close popup when close icon is clicked", () => {
    const spy = sandbox.spy();
    const wrapper = shallow(<Popup onClose={spy} show={true} />);
    wrapper.find(".icon-close").simulate("click");
    expect(spy.calledOnce).toEqual(true);
  });

  it("should call onClose when overlay is clicked", () => {
    const onClose = sandbox.spy();
    const wrapper = shallow(<Popup onClose={onClose} show={true} />);
    wrapper.find(".popup-overlay").simulate("click");
    expect(onClose.calledOnce).toEqual(true);
  });

  it("should not call onClose when overlay is clicked and closeOnOverlayClick is false", () => {
    const onClose = sandbox.spy();
    const wrapper = shallow(
      <Popup onClose={onClose} show={true} closeOnOverlayClick={false} />,
    );
    wrapper.find(".popup-overlay").simulate("click");
    expect(onClose.calledOnce).toEqual(false);
  });

  it("should not call onClose when popup is clicked", () => {
    const onClose = sandbox.spy();
    const wrapper = shallow(
      <Popup onClose={onClose} show={true} closeOnOverlayClick={false} />,
    );
    const event = { stopPropagation: () => null };
    wrapper.find(".popup-main").simulate("click", event);
    expect(onClose.calledOnce).toEqual(false);
  });

  it("should add disable-scroll class when popup is shown", () => {
    const onClose = sandbox.spy();
    const wrapper = mount(<Popup onClose={onClose} show={true} />);
    expect(document.body.classList.contains("disable-scroll")).toBe(true);
  });

  it("should remove disable-scroll class when popup is unmounted", () => {
    const onClose = sandbox.spy();
    const wrapper = mount(<Popup onClose={onClose} show={true} />);
    wrapper.unmount();
    expect(document.body.classList.contains("disable-scroll")).toBe(false);
  });
});
