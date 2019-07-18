import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import faker from "faker";
import React from "react";
import sinon from "sinon";
import Item from "../item";

Enzyme.configure({ adapter: new Adapter() });

describe("item specs", () => {
  const sandbox = sinon.createSandbox();

  afterEach(() => {
    sandbox.verifyAndRestore();
  });

  it("should render item component", () => {
    const wrapper = shallow(<Item/>);

    expect(wrapper.find(".q-item")).toHaveLength(1);
  });

  it("should render item component with dots", () => {
    const wrapper = shallow(<Item/>);

    expect(wrapper.find(".q-item-dotted")).toHaveLength(1);
  });

  it("should render item component without dots", () => {
    const wrapper = shallow(<Item dotted={false}/>);

    expect(wrapper.find(".q-item-dotted")).toHaveLength(0);
  });

  it("should render item component with icon", () => {
    const wrapper = mount(<Item dotted={false} icon={"search"}/>);

    expect(wrapper.exists(".icon-search")).toEqual(true);
  });
});
