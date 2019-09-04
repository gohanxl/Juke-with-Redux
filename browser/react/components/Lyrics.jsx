import React from "react";
export default function(props) {
  const artistChange = event => {
    props.setArtist(event.target.value);
  };
  const songChange = event => {
    props.setSong(event.target.value);
  };
  return (
    <div id="lyrics">
      <form onSubmit={props.handleSubmit}>
        <div>
          <input
            type="text"
            value={props.artistQuery}
            placeholder="Artist"
            onChange={artistChange}
          />
          <input
            type="text"
            value={props.songQuery}
            placeholder="Song"
            onChange={songChange}
          />
        </div>
        <pre>{props.text || "Search above!"}</pre>
        <button type="submit">Search for Lyrics</button>
      </form>
    </div>
  );
}
