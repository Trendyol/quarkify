import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import faker from "faker";
import React from "react";
import sinon from "sinon";
import List from "../list";

Enzyme.configure({ adapter: new Adapter() });

describe("list specs", () => {
  const sandbox = sinon.createSandbox();

  afterEach(() => {
    sandbox.verifyAndRestore();
  });

  it("should render list component", () => {
    const wrapper = shallow(<List/>);

    expect(wrapper.find(".q-list")).toHaveLength(1);
  });
});
