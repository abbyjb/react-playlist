import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Playlist from "./Playlist";

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    playlistName: "Test Playlist",
    songs: [
      {
        id: 0,
        title: "As You Please", 
        artist: "Citizen",
        album: "As You Please"
      }
    ],
    deleteSong: jest.fn()
  };
  const wrapper = shallow(<Playlist {...props} />);

  return { props, wrapper };
}

describe("Playlist Component", () => {
  it("should render component", () => {
    const { wrapper } = setup();
    expect(wrapper.exists()).toBe(true);
  });

  it("should render the current songs", () => {
    const {props, wrapper} = setup();

    expect(wrapper.find('.playlist-name').text()).toEqual(props.playlistName);
    expect(wrapper.find('Song').length).toEqual(1);
    
    const songProps = wrapper.find('Song').props();

    expect(songProps.title).toEqual(props.songs[0].title);
    expect(songProps.artist).toEqual(props.songs[0].artist);
    expect(songProps.album).toEqual(props.songs[0].album);
    expect(songProps.id).toEqual(props.songs[0].id);
  });
});