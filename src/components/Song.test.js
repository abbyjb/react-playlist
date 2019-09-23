import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Song from "./Song";

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    title: "Out of It",
    artist: "The Story So Far",
    album: "Proper Dose",
    onClick: jest.fn()
  };
  const wrapper = shallow(<Song {...props} />);

  return { props, wrapper };
}

describe("Song Component", () => {
  it("should render the component", () => {
    const { wrapper } = setup();
    expect(wrapper.exists()).toBe(true);
  });

  it("should display song information", () => {
    const { props, wrapper } = setup();
    expect(wrapper.find(".title").text()).toEqual(props.title);
    expect(wrapper.find(".artist").text()).toEqual(props.artist);
    expect(wrapper.find(".album").text()).toEqual(props.album);
  });

  it("should call the onClick function when the delte button is clicked", () => {
    const { props, wrapper } = setup();
    const input = wrapper.find("button");

    input.props().onClick();

    expect(props.onClick.mock.calls.length).toEqual(1);
  });
});
