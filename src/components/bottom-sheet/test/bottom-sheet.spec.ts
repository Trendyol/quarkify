import { mount } from "enzyme";
import BottomSheet from "../bottom-sheet";
import sinon from "sinon";

describe("modal specs", () => {
  const sandbox = sinon.createSandbox();

  afterEach(() => {
    sandbox.verifyAndRestore();
  });

  it("should render modal component", () => {
    const wrapper = mount(<BottomSheet show={true}/>);
    expect(wrapper.exists(".q-modal-main")).toEqual(true);
  });
});
