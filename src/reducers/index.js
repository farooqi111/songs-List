import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "I want it that way", duration: "3:34" },
    { title: "beautiful", duration: "4:12" },
    { title: "I like it", duration: "5:20" },
    { title: "goals", duration: "2:11" }
  ];
};
const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
