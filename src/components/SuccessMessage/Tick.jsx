import React from "react";

export default class Tick extends React.Component {
  render() {
    return (
      <svg
        version="1.1"
        id="tick"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 37 37"
        style={{ "enable-background": "new 0 0 37 37" }}
      >
        <path
          className="circ path"
          style={{
            fill: "none",
            stroke: "#3dad55",
            "stroke-width": 3,
            "stroke-linejoin": "round",
            "stroke-miterlimit": 10
          }}
          d="
	M30.5,6.5L30.5,6.5c6.6,6.6,6.6,17.4,0,24l0,0c-6.6,6.6-17.4,6.6-24,0l0,0c-6.6-6.6-6.6-17.4,0-24l0,0C13.1-0.2,23.9-0.2,30.5,6.5z"
        />
        <polyline
          className="tick path"
          style={{
            fill: "none",
            stroke: "#3dad55",
            "stroke-width": 3,
            "stroke-linejoin": "round",
            "stroke-miterlimit": 10
          }}
          points="
	11.6,20 15.9,24.2 26.4,13.8 "
        />
      </svg>
    );
  }
}
