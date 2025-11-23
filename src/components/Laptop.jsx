import React from "react";
import FrameAnimator from "./FrameAnimator";

import laptop_0 from "../assets/pradnyesh_laptop/laptop_0.png";
import laptop_1 from "../assets/pradnyesh_laptop/laptop_1.png";
import laptop_2 from "../assets/pradnyesh_laptop/laptop_2.png";
import laptop_3 from "../assets/pradnyesh_laptop/laptop_3.png";



export default function Laptop() {
  const LaptopFrames = [laptop_0, laptop_1, laptop_2,laptop_3];

  return (
    <FrameAnimator
      frames={LaptopFrames}
      fps={8}
      loop={true}
      width={100}
      height={100}
    />
  );
}
