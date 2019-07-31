import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import faker from "faker";
import React from "react";
import sinon, { SinonStub } from "sinon";
import ScrollToTop from "../scroll-to-top";

Enzyme.configure({ adapter: new Adapter() });

let scrollToStub: SinonStub;
let requestAnimationFrameStub: SinonStub;

describe("scroll to top specs", () => {
  const sandbox = sinon.createSandbox();

  beforeEach(() => {
    window.pageYOffset = 500;
    scrollToStub = sandbox.stub(window, "scrollTo");
    requestAnimationFrameStub = sandbox.stub(window, "requestAnimationFrame").returns(faker.random.number());
  });

  afterEach(() => {
    sandbox.verifyAndRestore();
  });

  it("should not be visible on initial rendering", () => {
    const wrapper = shallow(<ScrollToTop/>);

    expect(wrapper.find(".hide")).toHaveLength(1);
  });

  it("should be displayed when scrolling up", () => {
    const wrapper = shallow(<ScrollToTop/>);
    wrapper.instance().lastScrollPosition = 800;
    const event = new Event("scroll");

    window.document.dispatchEvent(event);

    expect(wrapper.find(".hide").exists()).toBe(false);
  });

  it("should not be displayed when scrolling down", () => {
    const wrapper = shallow(<ScrollToTop/>);
    wrapper.instance().lastScrollPosition = 300;
    const event = new Event("scroll");

    window.document.dispatchEvent(event);

    expect(wrapper.find(".hide").exists()).toBe(true);
  });

  it("should call scrollTo when clicked", () => {
    const wrapper = shallow(<ScrollToTop/>);

    wrapper.find(".q-scroll-to-top").simulate("click");
    requestAnimationFrameStub.callArgWith(0, [Date.now()]);

    expect(scrollToStub.called).toBe(true);
  });

  it("should render correct icon name", () => {
    const wrapper = shallow(<ScrollToTop/>);

    expect(wrapper.find("Icon").prop("name")).toBe("arrow-top");
  });

  it("should remove event listeners when unmounted", () => {
    const wrapper = mount(<ScrollToTop/>);
    const removeEventListenerStub = sandbox.stub(window, "removeEventListener");

    wrapper.unmount();

    expect(removeEventListenerStub.called).toBe(true);
  });

  it("should stop scrolling if page Y offset is 0", () => {
    const wrapper = shallow(<ScrollToTop/>);
    const stopScrollingStub = sandbox.spy(wrapper.instance(), "stopScrolling");
    window.pageYOffset = 0;

    wrapper.find(".q-scroll-to-top").simulate("click");
    requestAnimationFrameStub.callArgWith(0, [Date.now()]);

    expect(stopScrollingStub.called).toBe(true);
  });

  it("should scroll without animation if smooth prop is false", () => {
    const wrapper = shallow(<ScrollToTop smooth={false}/>);

    wrapper.find(".q-scroll-to-top").simulate("click");

    expect(requestAnimationFrameStub.called).toBe(false);
  });

});
