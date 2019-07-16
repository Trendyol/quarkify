import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import Loader from "../loader";

Enzyme.configure({ adapter: new Adapter() });

describe("loader specs", () => {
  it("should render correctly if active prop is true", () => {
    const wrapper = shallow(<Loader active={true}/>);
    expect(wrapper.find(".q-loader")).toHaveLength(1);
  });

  it("should not render if active prop is false", () => {
    const wrapper = shallow(<Loader active={false}/>);
    expect(wrapper.type()).toBeFalsy();
  });
});
