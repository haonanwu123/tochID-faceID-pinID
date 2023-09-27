import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

const randomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const SvgComponent = () => (
  <Svg height="100" width="100" viewBox="0 0 100 100">
    <Defs>
      <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor={randomColor()} />
        <Stop offset="100%" stopColor={randomColor()} />
      </LinearGradient>
    </Defs>
    <Path
      d="M10 80 Q 95 80 95 10"
      fill="transparent"
      stroke="url(#grad)"
      strokeWidth="5"
    />
  </Svg>
);

export default SvgComponent;
