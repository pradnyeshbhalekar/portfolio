// src/components/FrameAnimator.jsx
import React, { useEffect, useState } from "react";

export default function FrameAnimator({
  frames: externalFrames,
  fps = 8,
  loop = true,
  playing = true,
  width,
  height,
  style = {}
}) {
  const internalFrames = [
    "src/assets/pradnyesh_idle/human_idle_0.png",
    "src/assets/pradnyesh_idle/human_idle_1.png",
    "src/assets/pradnyesh_idle/human_idle_2.png",
    "src/assets/pradnyesh_idle/human_idle_3.png",
    "src/assets/pradnyesh_idle/human_idle_4.png",
    "src/assets/pradnyesh_idle/human_idle_5.png",
    "src/assets/pradnyesh_idle/human_idle_6.png"

  ];

  // if the caller passed frames prop, use it; otherwise use internalFrames
  const frames = (externalFrames && externalFrames.length > 0) ? externalFrames : internalFrames;

  const [index, setIndex] = useState(0);

  // preload frames to avoid flicker
  useEffect(() => {
    frames.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, [frames]);

  // animation loop
  useEffect(() => {
    if (!playing || frames.length === 0) return;

    const interval = setInterval(() => {
      setIndex(prev => {
        const next = prev + 1;
        if (next >= frames.length) {
          return loop ? 0 : prev;
        }
        return next;
      });
    }, 15000 / Math.max(1, fps));

    return () => clearInterval(interval);
  }, [frames, fps, loop, playing]);

  if (!frames || frames.length === 0) return null;

  return (
    <img
      src={frames[index]}
      alt={`frame-${index}`}
      draggable={false}
      style={{
        width: width ? `${width}px` : "auto",
        height: height ? `${height}px` : "auto",
        imageRendering: "pixelated",
        userSelect: "none",
        pointerEvents: "none",
        ...style
      }}
    />
  );
}
