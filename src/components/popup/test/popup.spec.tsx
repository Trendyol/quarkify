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
    const wrapper = shallow(<Popup onChange={closePopup} show={true} />);
    expect(wrapper.exists(".q-popup-main")).toEqual(true);
  });

  it("should take additional style and remove", () => {
    const wrapper = mount(<Popup onChange={closePopup} show={false} />);
    wrapper.setProps({ show: true });
    const body = (global as any).window.document.querySelector("body");
    expect(body.style.overflow).toEqual("hidden");
    wrapper.setProps({ show: false });
    expect(body.style.overflow).toEqual("");
  });

  it("should not render popup component when show prop is false", () => {
    const wrapper = mount(<Popup onChange={closePopup} show={false} />);
    expect(wrapper.exists(".q-popup-main")).toEqual(false);
  });

  it("should render close icon", () => {
    const wrapper = shallow(<Popup onChange={closePopup} show={true} />);
    expect(wrapper.childAt(0).exists(".icon-close")).toEqual(true);
  });

  it("should close popup when close icon is clicked", () => {
    const spy = sandbox.spy();
    const wrapper = shallow(<Popup onChange={spy} show={true} />);
    wrapper.find(".icon-close").simulate("click");
    expect(spy.calledOnce).toEqual(true);
  });

  it("should call onChange when overlay is clicked", () => {
    const onChange = sandbox.spy();
    const wrapper = shallow(<Popup onChange={onChange} show={true} />);
    wrapper.find(".q-popup-overlay").simulate("click");
    expect(onChange.calledOnce).toEqual(true);
  });

  it("should not call onChange when overlay is clicked and closeOnOverlayClick is false", () => {
    const onChange = sandbox.spy();
    const wrapper = shallow(
      <Popup onChange={onChange} show={true} closeOnOverlayClick={false} />,
    );
    wrapper.find(".q-popup-overlay").simulate("click");
    expect(onChange.calledOnce).toEqual(false);
  });

  it("should not call onChange when popup is clicked", () => {
    const onChange = sandbox.spy();
    const wrapper = shallow(
      <Popup onChange={onChange} show={true} closeOnOverlayClick={false} />,
    );
    const event = { stopPropagation: () => null };
    wrapper.find(".q-popup-main").simulate("click", event);
    expect(onChange.calledOnce).toEqual(false);
  });

  it("should call onChange when show prop is changed", () => {
    const onChange = sandbox.spy();
    const wrapper = mount(
      <Popup onChange={onChange} show={false} />,
    );
    wrapper.setProps({ show: true });

    expect(onChange.calledOnce).toBe(true);
  });

  it("should show icon on left when leftIcon prop is passed", () => {
    const onChange = sandbox.spy();
    const wrapper = shallow(<Popup onChange={onChange} show={true} iconLeft />);

    expect(wrapper.find(".q-popup-icon-left")).toHaveLength(1);
  });

  it("should accept additional classNames", () => {
    const fakeClass = faker.lorem.word();
    const onChange = sandbox.spy();
    const wrapper = mount(<Popup show={false} onChange={onChange} className={fakeClass} />);

    expect(wrapper.hasClass(fakeClass)).toBe(true);
  });

  it("should accept additional classNames for popup content", () => {
    const fakeClass = faker.lorem.word();
    const onChange = sandbox.spy();
    const wrapper = mount(<Popup show={true} onChange={onChange} contentClassName={fakeClass} />);
    expect(wrapper.find(`.${fakeClass}`)).toHaveLength(1);
  });

  it("should not render q-popup-header when there is no icon and title", () => {
    const onChange = sandbox.spy();
    const wrapper = mount(<Popup show={true} noIcon onChange={onChange} />);
    expect(wrapper.find(`.q-popup-header`).exists()).toEqual(false);
    expect(wrapper.find(`.q-popup-header-text`).exists()).toEqual(false);
  });

  it("should render q-popup-header when there is icon and not title", () => {
    const onChange = sandbox.spy();
    const wrapper = mount(<Popup show={true} onChange={onChange} />);
    expect(wrapper.find(`.q-popup-header`).exists()).toEqual(true);
  });

  it("should render q-popup-header when there is title and not icon", () => {
    const onChange = sandbox.spy();
    const wrapper = mount(<Popup show={true} onChange={onChange} title={faker.lorem.word()} noIcon />);
    expect(wrapper.find(`.q-popup-header`).exists()).toEqual(true);
    expect(wrapper.find(`.q-popup-header-text`).exists()).toEqual(true);
  });

  it("should render header with border underline", () => {
    const onChange = sandbox.spy();
    const wrapper = shallow(<Popup show={true} onChange={onChange} title={faker.lorem.word()} withTitleBorder />);
    expect(wrapper.find(`.q-popup-header.with-border`).exists()).toEqual(true);
    expect(wrapper.find(`.q-popup-header-text`).exists()).toEqual(true);
  });
});
