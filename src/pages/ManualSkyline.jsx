// src/components/ManualSkyline.jsx
import React, { useEffect, useMemo, useState } from "react";
import CatIdle from "../components/CatIdle";
import HumanIdle from "../components/HumanIdle";
import moon from "../assets/first/moon.png";
import Navbar from "../components/navbar"; 

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


// stars
import star1 from "../assets/stars/star1.png";
import star2 from "../assets/stars/star2.png";
import star3 from "../assets/stars/star3.png";


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


const stars = [
  // near navbar
  { img: star2, left: "6%",  top: "4%",  size: 4 },
  { img: star3, left: "18%", top: "6%",  size: 4 },
  { img: star1, left: "34%", top: "3%",  size: 5 },
  { img: star2, left: "52%", top: "5%",  size: 4 },
  { img: star3, left: "74%", top: "4%",  size: 4 },
  { img: star1, left: "88%", top: "6%",  size: 5 },

  // upper sky
  { img: star1, left: "9%",  top: "14%", size: 6 },
  { img: star2, left: "21%", top: "18%", size: 4 },
  { img: star3, left: "29%", top: "11%", size: 4 },
  { img: star1, left: "41%", top: "16%", size: 6 },
  { img: star2, left: "57%", top: "19%", size: 4 },
  { img: star3, left: "69%", top: "12%", size: 4 },
  { img: star1, left: "82%", top: "17%", size: 6 },

  // mid sky
  { img: star2, left: "5%",  top: "30%", size: 4 },
  { img: star3, left: "14%", top: "26%", size: 4 },
  { img: star1, left: "26%", top: "34%", size: 6 },
  { img: star2, left: "38%", top: "28%", size: 4 },
  { img: star3, left: "47%", top: "35%", size: 4 },
  { img: star1, left: "60%", top: "29%", size: 6 },
  { img: star2, left: "71%", top: "33%", size: 4 },
  { img: star3, left: "84%", top: "27%", size: 4 },

  // near buildings (still sky)
  { img: star1, left: "8%",  top: "46%", size: 6 },
  { img: star2, left: "19%", top: "52%", size: 4 },
  { img: star3, left: "33%", top: "48%", size: 4 },
  { img: star1, left: "46%", top: "54%", size: 6 },
  { img: star2, left: "59%", top: "49%", size: 4 },
  { img: star3, left: "72%", top: "53%", size: 4 },
  { img: star1, left: "86%", top: "47%", size: 6 },

  // extra fill — between existing clusters
  { img: star3, left: "2%",   top: "9%",  size: 3 },
  { img: star2, left: "12%",  top: "2%",  size: 3 },
  { img: star1, left: "25%",  top: "7%",  size: 3 },
  { img: star3, left: "44%",  top: "2%",  size: 3 },
  { img: star2, left: "63%",  top: "7%",  size: 3 },
  { img: star1, left: "79%",  top: "3%",  size: 3 },
  { img: star3, left: "93%",  top: "5%",  size: 3 },
  { img: star2, left: "96%",  top: "14%", size: 3 },

  { img: star1, left: "15%",  top: "22%", size: 3 },
  { img: star3, left: "35%",  top: "20%", size: 3 },
  { img: star2, left: "49%",  top: "24%", size: 3 },
  { img: star1, left: "63%",  top: "22%", size: 4 },
  { img: star3, left: "77%",  top: "25%", size: 3 },
  { img: star2, left: "91%",  top: "20%", size: 3 },

  { img: star3, left: "3%",   top: "38%", size: 3 },
  { img: star1, left: "20%",  top: "40%", size: 4 },
  { img: star2, left: "43%",  top: "38%", size: 3 },
  { img: star3, left: "55%",  top: "42%", size: 3 },
  { img: star1, left: "78%",  top: "39%", size: 4 },
  { img: star2, left: "92%",  top: "36%", size: 3 },

  { img: star3, left: "25%",  top: "57%", size: 3 },
  { img: star1, left: "40%",  top: "60%", size: 3 },
  { img: star2, left: "66%",  top: "56%", size: 3 },
  { img: star3, left: "80%",  top: "58%", size: 3 },
  { img: star1, left: "95%",  top: "55%", size: 3 },
];



  const balconyCount = useMemo(() => Math.ceil(DESIGN_WIDTH / 20), []);
  const humanDesignWidthPx = Math.round(0.24 * DESIGN_WIDTH);
  const humanDesignHeightPx = Math.round(0.55 * DESIGN_HEIGHT);
  const catDesignWidthPx = Math.round(0.14 * DESIGN_WIDTH);
  const catDesignHeightPx = Math.round(0.375 * DESIGN_HEIGHT);
  const liftPct = vw < 420 ? -42 : vw < 640 ? -32 : vw < 768 ? -18 : vw < 1024 ? -8 : -1;

  const innerStyle = {
    width: `${DESIGN_WIDTH}px`,
    height: `${DESIGN_HEIGHT}px`,
    transform: `translate(-50%, ${liftPct}%) scale(${scale})`,
    transformOrigin: "center bottom"
  };

  return (
    <>
    <Navbar /> 
<div className="w-full h-screen overflow-hidden relative pt-20" style={{ background: "radial-gradient(ellipse at 70% 0%, #1e2060 0%, #1a1a4e 40%, #13132e 100%)" }}>


{/* stars */}
<div
  className="absolute top-0 left-0 right-0 h-[100%] sm:h-[100%] lg:h-[80%] z-1 pointer-events-none"
  style={{
    maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
    WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
  }}
>
  {stars.map((star, i) => (
    <img
      key={i}
      src={star.img}
      alt=""
      draggable={false}
      className="absolute pixel-perfect select-none"
      style={{
        left: star.left,
        top: star.top,
        width: `${star.size}px`,
        height: `${star.size}px`,
        animation: i % 3 === 0
          ? `twinkle ${2.2 + (i % 7) * 0.4}s ease-in-out ${(i * 0.37) % 3}s infinite`
          : i % 3 === 1
          ? `twinkle-slow ${3 + (i % 5) * 0.5}s ease-in-out ${(i * 0.53) % 4}s infinite`
          : `twinkle ${1.8 + (i % 4) * 0.6}s ease-in-out ${(i * 0.29) % 2.5}s infinite`,
      }}
    />
  ))}

  {/* shooting stars — wrapper is rotated so translateX moves diagonally */}
  <div
    className="absolute pointer-events-none overflow-visible"
    style={{ left: "10%", top: "12%", transform: "rotate(22deg)", transformOrigin: "left center" }}
  >
    <div
      className="shooting-star-1 pointer-events-none"
      style={{
        width: "130px",
        height: "2px",
        background: "linear-gradient(to left, rgba(255,255,255,0.95) 0%, rgba(180,210,255,0.5) 50%, transparent 100%)",
        borderRadius: "9999px",
        boxShadow: "0 0 6px 2px rgba(200,220,255,0.4)",
      }}
    />
  </div>
  <div
    className="absolute pointer-events-none overflow-visible"
    style={{ left: "48%", top: "7%", transform: "rotate(18deg)", transformOrigin: "left center" }}
  >
    <div
      className="shooting-star-2 pointer-events-none"
      style={{
        width: "100px",
        height: "1.5px",
        background: "linear-gradient(to left, rgba(255,255,255,0.9) 0%, rgba(200,225,255,0.4) 50%, transparent 100%)",
        borderRadius: "9999px",
        boxShadow: "0 0 5px 1px rgba(200,220,255,0.35)",
      }}
    />
  </div>
</div>


        <style>{`
          @keyframes moon-pulse {
            0%, 100% { transform: scale(1); opacity: 0.96; }
            50% { transform: scale(1.03); opacity: 1; }
          }
          @keyframes moon-halo {
            0%, 100% { transform: scale(1); opacity: 0.78; }
            50% { transform: scale(1.02); opacity: 1; }
          }
          @keyframes twinkle {
            0%, 100% { opacity: 0.9; transform: scale(1); }
            50% { opacity: 0.3; transform: scale(0.7); }
          }
          @keyframes twinkle-slow {
            0%, 100% { opacity: 0.8; transform: scale(1); }
            50% { opacity: 0.2; transform: scale(0.6); }
          }
          @keyframes shoot-across {
            0%     { transform: translateX(-180px); opacity: 0; }
            3%     { opacity: 1; }
            13%    { transform: translateX(900px); opacity: 0; }
            13.5%  { transform: translateX(-180px); opacity: 0; }
            100%   { transform: translateX(-180px); opacity: 0; }
          }
          @keyframes shoot-across-2 {
            0%     { transform: translateX(-140px); opacity: 0; }
            3%     { opacity: 0.9; }
            12%    { transform: translateX(700px); opacity: 0; }
            12.5%  { transform: translateX(-140px); opacity: 0; }
            100%   { transform: translateX(-140px); opacity: 0; }
          }
          .shooting-star-1 {
            animation: shoot-across 9s linear 2s infinite both;
            will-change: transform, opacity;
          }
          .shooting-star-2 {
            animation: shoot-across-2 9s linear 7s infinite both;
            will-change: transform, opacity;
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
        <div className="absolute bottom-8 left-1/2 pointer-events-none" style={innerStyle} aria-hidden="true">
          {/* buildings */}
          {buildings.map((building, idx) => {
            const hideClass = building.hideOnSmall ? "hidden sm:block" : "";
            return (
              <img
                key={idx}
                src={building.img}
                alt=""
                draggable={false}
                className={`absolute ${building.classes} ${building.z} w-auto pixel-perfect bottom-44 sm:bottom-4 md:bottom-4 lg:bottom-2 select-none pointer-events-none sm:w-[12%] ${hideClass}`}
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


          <div
            className="absolute left-[60%] bottom-[-38%] sm:bottom-[-45%] md:bottom-[-35%]  md:left-[55%] z-[60] scale-[2.5] sm:scale-[2.5] md:scale-[2] lg:scale-[1.8] lg:bottom-[-28%] lg:left-[52%]"
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