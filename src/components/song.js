
import { React } from "react";
import { AiFillStar } from "react-icons/ai";
import { useState } from "react";
const colors = {
  yellow: "#FFDF00",
  grey: "#808080",
};
function Song(props) {
  const stars = Array(5).fill(0);
  const [currentValue, setcurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  console.log(stars);
  const handleClick = (value) => {
    setcurrentValue(value);
  };

  const handleMouseOver = (value) => {
    setHoverValue(value);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  return (
    <div>
      <div id="songsname">
        <div id="imgset">
          <img class="img12" src={props.Artwork} alt="img12"></img>
        </div>
        <div id="song-set">{props.song}</div>
        <div id="song-set">{props.dateOfRelease}</div>
        <div id="song-set">{props.Artist}</div>
        <div class="starset">
          {stars.map((_, index) => {
            return (
              <AiFillStar
                key={index}
                color={
                  (hoverValue || currentValue) > index
                    ? colors.yellow
                    : colors.grey
                }
                onClick={() => handleClick(index + 1)}
                onMouseOver={() => handleMouseOver(index + 1)}
                onMouseLeave={handleMouseLeave}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Song;