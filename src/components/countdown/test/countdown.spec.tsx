import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import faker from "faker";
import React from "react";
import Countdown from "../countdown";

Enzyme.configure({ adapter: new Adapter() });

function getHour(hour: any) {
  return 1000 * 60 * 60 * hour;
}

function getMinute(minute: any) {
  return 1000 * 60 * minute;
}

const gmt = 3;
const threshold = 1000 * 60 * 60 * 24 * 2;

function createBoutiqueEndDate() {
  return new Date().getTime() + threshold;
}

describe("countdown specs", () => {

  it("should not visible if end date is bigger than countdown threshold", () => {

    const wrapper = mount(<Countdown endDate={createBoutiqueEndDate() + getHour(6)} gmt={gmt} threshold={threshold} />);

    wrapper.update();

    expect(wrapper.find(".countdown").length).toEqual(0);

    wrapper.unmount();
  });

  it("should display 'gün' word if remaining day count is greater than zero", () => {

    const wrapper = mount(<Countdown
      endDate={createBoutiqueEndDate() - getHour(18)}
      gmt={gmt}
      threshold={threshold}
    />);

    wrapper.update();

    const html = wrapper.html();

    expect(html).toContain("gün");

    wrapper.unmount();
  });

  it("should display 'saat' word if remaining day count is zero", () => {

    const wrapper = mount(<Countdown
      endDate={createBoutiqueEndDate() - getHour(40)}
      gmt={gmt}
      threshold={threshold}
    />);

    wrapper.update();

    const html = wrapper.html();

    expect(html).toContain("saat");

    wrapper.unmount();
  });

  it("should display 'minute' word if remaining hours count is zero", () => {
    const wrapper = mount(<Countdown endDate={Date.now() + getMinute(30)} threshold={threshold} />);
    wrapper.update();
    const html = wrapper.html();
    expect(html).toContain("dakika");
    wrapper.unmount();
  });

  it("should receive 'minute' prop", () => {
    const minute = faker.random.word();
    const wrapper = mount(<Countdown endDate={Date.now() + getMinute(30)} threshold={threshold} minute={minute} />);
    wrapper.update();
    const html = wrapper.html();
    expect(html).toContain(minute);
    wrapper.unmount();
  });

  it("should receive 'day' prop", () => {
    const day = faker.random.word();
    const wrapper = mount(<Countdown
      endDate={createBoutiqueEndDate() - getHour(18)}
      gmt={gmt}
      threshold={threshold}
      day={day}
    />);
    wrapper.update();
    const html = wrapper.html();
    expect(html).toContain(day);
    wrapper.unmount();
  });

  it("should receive 'hour' prop", () => {
    const hour = faker.random.word();
    const wrapper = mount(<Countdown
      endDate={createBoutiqueEndDate() - getHour(40)}
      gmt={gmt}
      threshold={threshold}
      hour={hour}
    />);

    wrapper.update();

    const html = wrapper.html();

    expect(html).toContain(hour);

    wrapper.unmount();
  });

});
