import React from "react";
import FrameAnimator from "./FrameAnimator";

import c0 from "../assets/idle cat/idle_cat0.png";
import c1 from "../assets/idle cat/idle_cat1.png";
import c2 from "../assets/idle cat/idle_cat2.png";
import c3 from "../assets/idle cat/idle_cat3.png";
import c4 from "../assets/idle cat/idle_cat4.png";
import c5 from "../assets/idle cat/idle_cat5.png";
import c6 from "../assets/idle cat/idle_cat6.png";

export default function CatIdle() {
  const catFrames = [c0, c1, c2, c3, c4, c5, c6];

  return (
    <FrameAnimator
      frames={catFrames}
      fps={8}
      loop={true}
      width={100}
      height={100}
    />
  );
}
