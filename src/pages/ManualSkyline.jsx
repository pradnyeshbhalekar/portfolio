// src/components/ManualSkyline.jsx
import React, { useEffect, useMemo, useState } from "react";
import CatIdle from "../components/CatIdle";
import HumanIdle from "../components/HumanIdle";
import moon from "../assets/first/moon.png";
import Navbar from "../components/navbar"; // <- added

// buildings
import b1  from "../assets/buildings/building1.png";
import b2  from "../assets/buildings/building2.png";
import b3  from "../assets/buildings/building3.png";
import b4  from "../assets/buildings/building4.png";
import b5  from "../assets/buildings/building5.png";
import b6  from "../assets/buildings/building6.png";
import b7  from "../assets/buildings/building7.png";
import b8  from "../assets/buildings/building8.png";
import b9  from "../assets/buildings/building9.png";
import b10 from "../assets/buildings/building10.png";
import b11 from "../assets/buildings/building11.png";
import b12 from "../assets/buildings/building12.png";
import b13 from "../assets/buildings/building13.png";

import balcony from "../assets/first/balcony-ledge.png";

export default function ManualSkyline() {
  const DESIGN_WIDTH = 1400;
  const DESIGN_HEIGHT = 640;

  const [scale, setScale] = useState(1);
  const [vw, setVw] = useState(typeof window !== "undefined" ? window.innerWidth : DESIGN_WIDTH);
  const [vh, setVh] = useState(typeof window !== "undefined" ? window.innerHeight : DESIGN_HEIGHT);

  useEffect(() => {
    function update() {
      const W = window.innerWidth;
      const H = window.innerHeight;
      setVw(W);
      setVh(H);

      const scaleByWidth = W / DESIGN_WIDTH;
      let targetPortion = 0.25;
      if (W < 420) targetPortion = 0.32;
      const scaleByHeightTarget = (H * targetPortion) / DESIGN_HEIGHT;
      const finalScale = Math.max(scaleByWidth, scaleByHeightTarget);
      const clamped = Math.max(0.3, Math.min(finalScale, 3));
      setScale(clamped);
    }

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const buildings = useMemo(() => [
    { img: b7, classes: "left-[1.4%] bottom-[6.25%] h-[31.25%]", z: "z-10", hideOnSmall: true },
    { img: b5, classes: "left-[12.86%] bottom-[4.69%] h-[34.38%]", z: "z-10", hideOnSmall: true },
    { img: b9, classes: "left-[24.29%] bottom-[7.81%] h-[32.81%]", z: "z-10", hideOnSmall: true },
    { img: b2, classes: "left-[37.14%] bottom-[7.03%] h-[35.94%]", z: "z-10", hideOnSmall: true },
    { img: b8, classes: "left-[50%] bottom-[9.38%] h-[31.25%]", z: "z-10", hideOnSmall: true },
    { img: b6, classes: "left-[62.86%] bottom-[4.69%] h-[37.5%]", z: "z-10", hideOnSmall: true },
    { img: b10, classes: "left-[75%] bottom-[6.25%] h-[32.81%]", z: "z-10", hideOnSmall: true },
    { img: b13, classes: "left-[75%] bottom-[6.25%] h-[32.81%]", z: "z-10", hideOnSmall: true },

    { img: b1, classes: "left-[9.29%] bottom-[3.13%] h-[46.88%]", z: "z-20", hideOnSmall: true },
    { img: b4, classes: "left-[21.43%] bottom-[3.13%] h-[50%]", z: "z-20", hideOnSmall: true },
    { img: b7, classes: "left-[34.29%] bottom-[2.34%] h-[48.44%]", z: "z-20", hideOnSmall: true },
    { img: b11, classes: "left-[46.43%] bottom-[3.91%] h-[51.56%]", z: "z-20", hideOnSmall: true },
    { img: b12, classes: "left-[59.29%] bottom-[2.34%] h-[49.22%]", z: "z-20", hideOnSmall: true },
    { img: b9, classes: "left-[71.43%] bottom-[3.13%] h-[51.56%]", z: "z-20", hideOnSmall: true },
    { img: b3, classes: "left-[84.29%] bottom-[4.69%] h-[48.44%]", z: "z-20", hideOnSmall: true },

    { img: b5, classes: "left-0 bottom-0 h-[65.63%]", z: "z-30" },
    { img: b1, classes: "left-[14.29%] bottom-0 h-[70.31%]", z: "z-30" },
    { img: b2, classes: "left-[27.14%] bottom-[-0.78%] h-[68.75%]", z: "z-30" },
    { img: b8, classes: "left-[40%] bottom-[-0.78%] h-[73.44%]", z: "z-30" },
    { img: b10, classes: "left-[52.86%] bottom-[-0.78%] h-[70.31%]", z: "z-30" },
    { img: b6, classes: "left-[65.71%] bottom-[-0.78%] h-[75%]", z: "z-30" },
    { img: b7, classes: "left-[78.57%] bottom-0 h-[65.63%]", z: "z-30" },

    { img: b3, classes: "left-[7.14%] bottom-[-3.13%] h-[101.56%]", z: "z-40" },
    { img: b11, classes: "left-[24.29%] bottom-[-3.91%] h-[96.88%]", z: "z-40" },
    { img: b12, classes: "left-[41.43%] bottom-[-3.13%] h-[100%]", z: "z-40" },
    { img: b4, classes: "left-[58.57%] bottom-[-4.69%] h-[95.31%]", z: "z-40" },
    { img: b9, classes: "left-[75.71%] bottom-[-3.91%] h-[93.75%]", z: "z-40" },

    { img: b3, classes: "left-[17.86%] bottom-[-6.25%] h-[112.5%]", z: "z-50" },
    { img: b1, classes: "left-[64.29%] bottom-[-6.25%] h-[109.38%]", z: "z-50" },
    { img: b6, classes: "left-[96.43%] bottom-[-6.25%] h-[115.63%]", z: "z-50" },
  ], []);

  const balconyCount = useMemo(() => Math.ceil(DESIGN_WIDTH / 20), []);
  const humanDesignWidthPx = Math.round(0.24 * DESIGN_WIDTH);
  const humanDesignHeightPx = Math.round(0.55 * DESIGN_HEIGHT);
  const catDesignWidthPx = Math.round(0.14 * DESIGN_WIDTH);
  const catDesignHeightPx = Math.round(0.375 * DESIGN_HEIGHT);
  const liftPct = vw < 420 ? -4 : vw < 640 ? -3 : -1;

  const innerStyle = {
    width: `${DESIGN_WIDTH}px`,
    height: `${DESIGN_HEIGHT}px`,
    transform: `translate(-50%, ${liftPct}%) scale(${scale})`,
    transformOrigin: "center bottom"
  };

  return (
    <>
      <Navbar /> {/* <- rendered here (fixed) */}
      <div className="w-full h-screen overflow-hidden bg-[#272757] relative pt-20"> {/* pt-20 prevents overlap with fixed navbar */}
        <style>{`
          @keyframes moon-pulse {
            0%, 100% { transform: scale(1); opacity: 0.96; }
            50% { transform: scale(1.03); opacity: 1; }
          }
          @keyframes moon-halo {
            0%, 100% { transform: scale(1); opacity: 0.78; }
            50% { transform: scale(1.02); opacity: 1; }
          }
          .pixel-perfect {
            image-rendering: pixelated;
            image-rendering: -moz-crisp-edges;
            image-rendering: crisp-edges;
          }
        `}</style>

        {/* moon */}
        <div className="absolute right-[6%] top-[3.5%] w-24 h-24 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52">
          <div
            className="absolute inset-0 w-[144%] h-[144%] -left-[22%] -top-[22%] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle at center, rgba(255,250,230,0.35) 0%, rgba(255,250,230,0.08) 40%, rgba(255,250,230,0) 70%)",
              filter: "blur(18px)",
              animation: "moon-halo 6s ease-in-out infinite"
            }}
          />
          <img
            src={moon}
            alt="moon"
            draggable={false}
            className="absolute inset-0 w-full h-full pixel-perfect select-none pointer-events-none opacity-98 mix-blend-screen"
            style={{
              animation: "moon-pulse 4s ease-in-out infinite",
              filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.45))"
            }}
          />
        </div>

        {/* inner design container */}
        <div className="absolute bottom-4 left-1/2 pointer-events-none" style={innerStyle} aria-hidden="true">
          {/* buildings */}
          {buildings.map((building, idx) => {
            const hideClass = building.hideOnSmall ? "hidden sm:block" : "";
            return (
              <img
                key={idx}
                src={building.img}
                alt=""
                draggable={false}
                className={`absolute ${building.classes} ${building.z} w-auto pixel-perfect bottom-5 select-none pointer-events-none sm:w-[12%] ${hideClass}`}
              />
            );
          })}

          {/* balcony */}
<div className="
  absolute 
  bottom-[-180px]           /* raised from -260px → -180px on mobile */
  sm:bottom-[-170px] 
  md:bottom-[-160px] 
  lg:bottom-[-120px] 
  left-0 right-0 
  h-[460px]                 /* increased from 420px → 460px on mobile */
  sm:h-[440px] 
  md:h-[360px] 
  lg:h-[360px] 
  z-[55] 
  overflow-hidden 
  pointer-events-none
">
  <div className="flex h-full w-full">
    {Array.from({ length: balconyCount }).map((_, i) => (
      <img
        key={i}
        src={balcony}
        alt=""
        draggable={false}
        className="
          h-full 
          scale-[2]          /* bigger on mobile */
          sm:scale-100 
          md:scale-[1.4] 
          lg:scale-[1.2] 
          pixel-perfect 
          select-none 
          pointer-events-none 
          flex-shrink-0
        "
      />
    ))}
  </div>
</div>


          {/* Human - responsive with Tailwind scale */}
          <div
            className="
              absolute left-[28%] bottom-[-14%] sm:bottom-[-4.84%] z-[60]
              scale-[1.25]
              sm:scale-1
              md:scale-[1]
              lg:scale-[0.8]
            "
            style={{
              width: `${0.24 * DESIGN_WIDTH}px`,
              height: `${0.55 * DESIGN_HEIGHT}px`,
              transformOrigin: "center bottom",
            }}
          >
            <HumanIdle fps={8} loop width={humanDesignWidthPx} height={humanDesignHeightPx} />
          </div>

          {/* Cat - responsive with Tailwind scale */}
          <div
            className="absolute left-[60%] bottom-[-32%] sm:bottom-[-32%] md:bottom-[-28%] md:left-[52%] z-[60] scale-[2.5] sm:scale-[2] md:scale-[1.7]  lg:scale-[1.5] lg:bottom-[-20%] lg:left-[50%]"
            style={{
              width: `${0.14 * DESIGN_WIDTH}px`,
              height: `${0.375 * DESIGN_HEIGHT}px`,
              transformOrigin: "center bottom"
            }}
          >
            <CatIdle fps={8} loop width={catDesignWidthPx} height={catDesignHeightPx} />
          </div>
        </div>
      </div>
    </>
  );
}
