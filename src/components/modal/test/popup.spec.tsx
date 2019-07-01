import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import faker from "faker";
import sinon from "sinon";
import Popup from "../index";

Enzyme.configure({ adapter: new Adapter() });

describe("modal specs", () => {
  const sandbox = sinon.createSandbox();

  afterEach(() => {
    sandbox.verifyAndRestore();
  });

  it("should render modal component", () => {
    const wrapper = shallow(<Popup show={true} />);
  });
});
