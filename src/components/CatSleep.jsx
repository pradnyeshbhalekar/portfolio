import React from "react";
import FrameAnimator from "./FrameAnimator";

import c0 from "../assets/sleepcat/cat00.png";
import c1 from "../assets/sleepcat/cat01.png";
import c2 from "../assets/sleepcat/cat02.png";
import c3 from "../assets/sleepcat/cat03.png";
import c4 from "../assets/sleepcat/cat04.png";
import c5 from "../assets/sleepcat/cat05.png";
import c6 from "../assets/sleepcat/cat06.png";
import c7 from "../assets/sleepcat/cat07.png";
import c8 from "../assets/sleepcat/cat08.png";
import c9 from "../assets/sleepcat/cat09.png";
import c10 from "../assets/sleepcat/cat10.png";



export default function CatSleep() {
  const catFrames = [c0, c1, c2,c3,c4,c5,c6,c7,c8,c9,c10];

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
