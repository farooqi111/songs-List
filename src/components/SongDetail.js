import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Select a song</div>;
  }
  console.log(song);
  return (
    <div>
      <h3>Details for:</h3>
      <p>Title: {song.title}</p>
      <br />
      <p>Duration: {song.duration}</p>
    </div>
  );
};

const mapStateToProp = state => {
  return { song: state.selectedSong };
};
export default connect(mapStateToProp)(SongDetail);
