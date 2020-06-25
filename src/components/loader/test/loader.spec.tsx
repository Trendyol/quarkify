import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import Loader from "../loader";

Enzyme.configure({ adapter: new Adapter() });

describe("loader specs", () => {
  it("should render correctly if active prop is true", () => {
    const wrapper = shallow(<Loader active={true} />);
    expect(wrapper.find(".q-loader")).toHaveLength(1);
  });

  it("should not render if active prop is false", () => {
    const wrapper = shallow(<Loader active={false} />);
    expect(wrapper.type()).toBeFalsy();
  });

  it("should add class for fixed loader", () => {
    const wrapper = shallow(<Loader active fixed />);
    expect(wrapper.find(".q-loader.q-loader-fixed")).toHaveLength(1);
  });

  it("should not have a class for fixed=false", () => {
    const wrapper = shallow(<Loader fixed={false} active />);
    expect(wrapper.find(".q-loader.q-loader-fixed")).toHaveLength(0);
  });

  describe("loader scroll disable", () => {
    const disabledScrollClassname = "q-disable-loader-scroll";

    afterEach(() => {
      document.body.className = document.body.className.replace(disabledScrollClassname, "");
    });

    it("should add disable class to body", () => {
      const wrapper = shallow(<Loader disableScroll={false} active />);
      expect(document.body.classList.contains(disabledScrollClassname)).toStrictEqual(false);
      wrapper.setProps({ disableScroll: true });
      expect(document.body.classList.contains(disabledScrollClassname)).toStrictEqual(true);
    });

    it("should add disable class to body if loader is active", () => {
      const wrapper = shallow(<Loader active={false} disableScroll />);
      expect(document.body.classList.contains(disabledScrollClassname)).toStrictEqual(false);
      wrapper.setProps({ active: true });
      expect(document.body.classList.contains(disabledScrollClassname)).toStrictEqual(true);
    });

    it("should remove disabled scroll class if loader is no more active", () => {
      const wrapper = shallow(<Loader active disableScroll />);
      expect(document.body.classList.contains(disabledScrollClassname)).toStrictEqual(true);
      wrapper.setProps({ active: false });
      expect(document.body.classList.contains(disabledScrollClassname)).toStrictEqual(false);
    });

    it("should remove if scroll disable is no more active", () => {
      const wrapper = shallow(<Loader active disableScroll />);
      expect(document.body.classList.contains(disabledScrollClassname)).toStrictEqual(true);
      wrapper.setProps({ disableScroll: false });
      expect(document.body.classList.contains(disabledScrollClassname)).toStrictEqual(false);
    });

    it("should not change the state of disable if there is no changes for active or disable status", () => {
      const wrapper = shallow(<Loader active disableScroll />);
      expect(document.body.classList.contains(disabledScrollClassname)).toStrictEqual(true);
      wrapper.setProps({ someProps: "toAnotherValue" });
      expect(document.body.classList.contains(disabledScrollClassname)).toStrictEqual(true);
    });
  });
});
