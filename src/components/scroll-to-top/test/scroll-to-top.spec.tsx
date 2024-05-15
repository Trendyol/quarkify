import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import React from "react";
import sinon, { SinonStub } from "sinon";
import ScrollToTop from "../scroll-to-top";
import { MockInstance } from "vitest";
import { faker } from "@faker-js/faker";

Enzyme.configure({ adapter: new Adapter() });

let requestAnimationFrameSpy: MockInstance<
  [callback: FrameRequestCallback],
  number
>;

describe("scroll to top specs", () => {
  const sandbox = sinon.createSandbox();

  beforeEach(() => {
    window.pageYOffset = 500;
    let frameCount = 0;

    requestAnimationFrameSpy = vi
      .spyOn(window, "requestAnimationFrame")
      .mockImplementation((callback: (p: number) => any) => {
        frameCount += 1;
        if (frameCount === 3) {
          return;
        }
        return callback(faker.number.int());
      });

    Object.defineProperty(window, "scrollTo", {
      writable: true,
      value: vi.fn(),
    });
  });

  afterEach(() => {
    sandbox.verifyAndRestore();
    requestAnimationFrameSpy.mockRestore();
  });

  it("should not be visible on initial rendering", () => {
    const wrapper = shallow(<ScrollToTop />);

    expect(wrapper.find(".hide")).toHaveLength(1);
  });

  it("should be displayed when scrolling up", () => {
    const wrapper = shallow(<ScrollToTop />);
    wrapper.instance().lastScrollPosition = 800;
    const event = new Event("scroll");

    window.document.dispatchEvent(event);

    expect(wrapper.find(".hide").exists()).toBe(false);
  });

  it("should not be displayed when scrolling down", () => {
    const wrapper = shallow(<ScrollToTop />);
    wrapper.instance().lastScrollPosition = 300;
    const event = new Event("scroll");

    window.document.dispatchEvent(event);

    expect(wrapper.find(".hide").exists()).toBe(true);
  });

  it("should call scrollTo when clicked", () => {
    const scrollToSpy = vi.spyOn(window, "scrollTo");

    const wrapper = shallow(<ScrollToTop smooth={false} />);

    wrapper.find(".q-scroll-to-top").simulate("click");

    setTimeout(() => {
      expect(scrollToSpy).toHaveBeenCalled();
    }, 0);
  });

  it("should render correct icon name", () => {
    const wrapper = shallow(<ScrollToTop />);

    expect(wrapper.find("Icon").prop("name")).toBe("arrow-top");
  });

  it("should remove event listeners when unmounted", () => {
    const wrapper = mount(<ScrollToTop />);
    const removeEventListenerStub = sandbox.stub(
      window.document,
      "removeEventListener",
    );

    wrapper.unmount();

    expect(removeEventListenerStub.called).toBe(true);
  });

  it("should stop scrolling if page Y offset is 0", () => {
    const wrapper = shallow(<ScrollToTop smooth={true} />);
    const stopScrollingStub = sandbox.spy(wrapper.instance(), "stopScrolling");
    window.pageYOffset = 0;

    wrapper.find(".q-scroll-to-top").simulate("click");

    setTimeout(() => {
      expect(stopScrollingStub.called).toBe(true);
    }, 0);
  });

  it("should scroll step when smooth eq true", () => {
    const wrapper = shallow(<ScrollToTop smooth={true} />);
    const stopScrollingStub = sandbox.spy(wrapper.instance(), "stopScrolling");

    wrapper.find(".q-scroll-to-top").simulate("click");

    setTimeout(() => {
      expect(stopScrollingStub.called).toBe(false);
    }, 0);
  });
});
