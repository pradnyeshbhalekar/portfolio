import React from "react";
import FrameAnimator from "./FrameAnimator";

import ps5_0 from "../assets/ps5/ps5_0.png";
import ps5_1 from "../assets/ps5/ps5_1.png";
import ps5_2 from "../assets/ps5/ps5_2.png";

// import ps5_0 from "../assets/ps5_2/ps51.png";
// import ps5_1 from "../assets/ps5_2/ps52.png";
// import ps5_2 from "../assets/ps5_2/ps53.png";
// import ps5_3 from "../assets/ps5_2/ps54.png";


export default function PS5() {
  const ps5Frames = [ps5_0, ps5_1, ps5_2];

  return (
    <FrameAnimator
      frames={ps5Frames}
      fps={8}
      loop={true}
      width={100}
      height={100}
    />
  );
}
