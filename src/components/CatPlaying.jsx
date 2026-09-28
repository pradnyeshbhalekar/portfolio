import React from "react";
import FrameAnimator from "./FrameAnimator";

import c1 from "../assets/cat_individual_frames_512/cat_frame2_01.png";
import c2 from "../assets/cat_individual_frames_512/cat_frame2_02.png";
import c3 from "../assets/cat_individual_frames_512/cat_frame2_03.png";
import c4 from "../assets/cat_individual_frames_512/cat_frame2_04.png";
import c5 from "../assets/cat_individual_frames_512/cat_frame2_05.png";
import c6 from "../assets/cat_individual_frames_512/cat_frame2_06.png";
import c7 from "../assets/cat_individual_frames_512/cat_frame2_07.png";
import c8 from "../assets/cat_individual_frames_512/cat_frame2_08.png";
import c9 from "../assets/cat_individual_frames_512/cat_frame2_09.png";

export default function CatPlaying({ fps = 8, loop = true, width = 100, height = 100 }) {
  const catFrames = [c1, c2, c3, c4, c5, c6, c7, c8, c9];

  return (
    <FrameAnimator
      frames={catFrames}
      fps={fps}
      loop={loop}
      width={width}
      height={height}
    />
  );
}
