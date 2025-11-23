// src/components/HumanIdle.jsx
import React from "react";
import FrameAnimator from "./FrameAnimator";
import h0 from "../assets/pradnyesh_idle/human_idle_0.png";
import h1 from "../assets/pradnyesh_idle/human_idle_1.png";
import h2 from "../assets/pradnyesh_idle/human_idle_2.png";
import h3 from "../assets/pradnyesh_idle/human_idle_3.png";
import h4 from "../assets/pradnyesh_idle/human_idle_4.png";
import h5 from "../assets/pradnyesh_idle/human_idle_5.png";
import h6 from "../assets/pradnyesh_idle/human_idle_6.png";

export default function HumanIdle({
  fps = 8,
  loop = true,
  playing = true,
  width = 200,
  height = 240,
  style = {}
}) {
  const frames = [h0, h1, h2, h3, h4, h5, h6];

  return (
    <FrameAnimator
      frames={frames}
      fps={fps}
      loop={loop}
      playing={playing}
      width={width}
      height={height}
      style={style}
    />
  );
}
