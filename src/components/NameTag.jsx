// src/components/NameTag.jsx
import React from "react";

// Minecraft-style name tag that floats above a sprite while it's hovered.
// `box` is the visible sprite inside its image as [left, top, right, bottom]
// fractions, so the transparent padding around the sprite doesn't trigger it.
export default function NameTag({
  name,
  box = [0, 0, 1, 1],
  headX,
  fontSize = 13.5,
  children
}) {
  const [left, top, right, bottom] = box;
  const x = headX ?? (left + right) / 2;

  return (
    <div className="relative inline-flex">
      {children}

      <div
        className="peer absolute pointer-events-auto"
        style={{
          left: `${left * 100}%`,
          top: `${top * 100}%`,
          width: `${(right - left) * 100}%`,
          height: `${(bottom - top) * 100}%`
        }}
      />

      {/* Monocraft draws on a 9-unit em, so 1/9em is one font pixel */}
      <span
        className="absolute z-10 whitespace-nowrap font-minecraft text-white bg-black/40 opacity-0 peer-hover:opacity-100 pointer-events-none select-none"
        style={{
          left: `${x * 100}%`,
          top: `${top * 100}%`,
          transform: "translate(-50%, calc(-100% - 0.5em))",
          fontSize: `${fontSize}px`,
          lineHeight: 8 / 9,
          padding: `0 ${1 / 9}em ${1 / 9}em`
        }}
      >
        {name}
      </span>
    </div>
  );
}
