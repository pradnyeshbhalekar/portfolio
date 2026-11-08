import { useEffect, useRef } from "react";

// Live cover for the Finlyt project card. The coin mascot and "finlyt" wordmark are the
// same SVG as on the Finlyt website (finlyt-web/src/components/Logo.jsx), in the website's
// light-theme colours on a white background. On show it plays the website's intro: the coin
// pops in and dances while blinking, the letters bounce in one by one, then a happy hop.
// After that it idles (blinks, hops now and then) and hops whenever anything clickable on
// the card is pressed. With reduced motion everything stays still.
//
// Every size is in cqw (percent of the card's width) so it scales with the card.

const COLORS = {
  bg: "#FFFFFF",
  face: "#3355FF",
  edge: "#2440E6",
  ring: "#AEBBFF",
  eyes: "#FFFFFF",
  text: "#0B1033",
  dot: "#3355FF",
};

const LETTERS = [
  { d: "M29.44 -40.22H21.18V-42.39C21.18 -45.44 22.32 -46.62 25.44 -46.62H29.44V-56.75H22.13C12.57 -56.75 8.04 -52.86 8.04 -44.67V-40.22H0.72V-30.09H8.04V0H21.18V-30.09H29.44Z" },
  {
    d: "M34.62 0H47.72V-40.22H34.62Z",
    dot: "M41.13 -44.14C45.36 -44.14 48.37 -46.92 48.37 -50.77C48.37 -54.62 45.36 -57.36 41.13 -57.36C36.94 -57.36 33.93 -54.62 33.93 -50.77C33.93 -46.92 36.94 -44.14 41.13 -44.14Z",
  },
  { d: "M66.64 -21.86C66.64 -27.35 69.3 -29.9 73.45 -29.9C77.6 -29.9 80 -27.31 80 -22.55V0H93.11V-25.29C93.11 -35.19 88 -41.09 79.28 -41.09C73.22 -41.09 69.15 -38.31 66.48 -33.71V-40.22H53.53V0H66.64Z" },
  { d: "M112.02 -56.75H98.92V0H112.02Z" },
  { d: "M119.09 15.92H127.89C134.63 15.92 138.47 12.95 141.22 5.67L158.55 -40.22H144.99L138.93 -21.71C138.06 -18.93 137.22 -16.11 136.46 -13.29C135.66 -16.11 134.86 -18.93 133.98 -21.71L128.04 -40.22H114.33L129.79 -0.08L129.11 1.75C128.15 4.68 127.39 5.75 124.65 5.75H119.09Z" },
  { d: "M186.22 -40.22H177.96V-51.19H164.82V-40.22H157.96V-30.09H164.82V-11.31C164.82 -3.5 169.16 0 178.79 0H186.22V-10.13H181.69C178.75 -10.13 177.96 -10.93 177.96 -13.52V-30.09H186.22Z" },
];

// Animations, copied from the website's Logo.jsx and Splash.jsx.
const POP = [
  { transform: "scale(0)", opacity: 0 },
  { transform: "scale(1.15)", opacity: 1, offset: 0.6 },
  { transform: "scale(0.95)", opacity: 1, offset: 0.8 },
  { transform: "scale(1)", opacity: 1 },
];
const DANCE = [
  { transform: "translateY(0) rotate(0) scale(1, 1)" },
  { transform: "translateY(0) rotate(-12deg) scale(1.06, 0.94)", offset: 0.14 },
  { transform: "translateY(-16%) rotate(-4deg) scale(0.95, 1.06)", offset: 0.28 },
  { transform: "translateY(0) rotate(12deg) scale(1.06, 0.94)", offset: 0.42 },
  { transform: "translateY(-16%) rotate(4deg) scale(0.95, 1.06)", offset: 0.56 },
  { transform: "translateY(0) rotate(-10deg) scale(1.06, 0.94)", offset: 0.7 },
  { transform: "translateY(-24%) rotate(0) scale(0.92, 1.1)", offset: 0.85 },
  { transform: "translateY(0) rotate(0) scale(1, 1)" },
];
const BLINK = [
  { transform: "scaleY(1)" },
  { transform: "scaleY(1)", offset: 0.32 },
  { transform: "scaleY(0.1)", offset: 0.37 },
  { transform: "scaleY(1)", offset: 0.42 },
  { transform: "scaleY(1)" },
];
const LETTER_IN = [
  { opacity: 0, transform: "translateY(50%) scale(0.4)" },
  { opacity: 1, transform: "translateY(-15%) scale(1.1)", offset: 0.6 },
  { opacity: 1, transform: "translateY(0) scale(1)" },
];
const HAPPY_HOP = [
  { transform: "translateY(0) scale(1, 1)" },
  { transform: "translateY(4%) scale(1.1, 0.9)", offset: 0.2 },
  { transform: "translateY(-22%) scale(0.94, 1.08)", offset: 0.5 },
  { transform: "translateY(0) scale(1.06, 0.94)", offset: 0.8 },
  { transform: "translateY(0) scale(1, 1)" },
];
// Crouch, jump with a stretch, land with a squash, a smaller second hop, settle.
const HOP = [
  { transform: "translateY(0) scale(1, 1) rotate(0)" },
  { transform: "translateY(4%) scale(1.14, 0.86) rotate(0)", offset: 0.12 },
  { transform: "translateY(-30%) scale(0.9, 1.12) rotate(-7deg)", offset: 0.34 },
  { transform: "translateY(0) scale(1.12, 0.88) rotate(0)", offset: 0.54 },
  { transform: "translateY(-13%) scale(0.96, 1.05) rotate(6deg)", offset: 0.72 },
  { transform: "translateY(0) scale(1.04, 0.96) rotate(0)", offset: 0.88 },
  { transform: "translateY(0) scale(1, 1) rotate(0)" },
];

const DANCE_AT = 350;
const LETTERS_AT = 900;
const LETTER_GAP = 80;
const LETTER_MS = 420;
const LANDED_AT = LETTERS_AT + (LETTERS.length - 1) * LETTER_GAP + LETTER_MS;

const reducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function Mark({ markRef, eyesRef }) {
  return (
    <svg
      ref={markRef}
      viewBox="18 12 64 76"
      aria-hidden="true"
      className="block h-full w-auto overflow-visible"
      style={{ aspectRatio: "64 / 76", transformOrigin: "50% 100%" }}
    >
      <g transform="translate(-1.48 -1.74) rotate(-10 50 52)">
        <path d="M47 21H56A26 31 0 0 1 56 83H47Z" fill={COLORS.edge} />
        <ellipse cx="47" cy="52" rx="26" ry="31" fill={COLORS.face} />
        <ellipse cx="47" cy="52" rx="20" ry="25" fill="none" strokeWidth="3" stroke={COLORS.ring} />
        <g ref={eyesRef} fill={COLORS.eyes} style={{ transformBox: "fill-box", transformOrigin: "center" }}>
          <ellipse cx="40.5" cy="51" rx="5" ry="7.6" />
          <ellipse cx="53.5" cy="51" rx="5" ry="7.6" />
        </g>
      </g>
    </svg>
  );
}

function Wordmark({ letterRefs, hidden }) {
  return (
    <svg
      viewBox="-17 -58.11 205 76"
      aria-hidden="true"
      className="block h-full w-auto overflow-visible"
      style={{ aspectRatio: "205 / 76" }}
    >
      {LETTERS.map((l, i) => (
        <g
          key={i}
          ref={(el) => (letterRefs.current[i] = el)}
          style={{ opacity: hidden ? 0 : 1, transformBox: "fill-box", transformOrigin: "50% 100%" }}
        >
          <path d={l.d} fill={COLORS.text} />
          {l.dot && <path d={l.dot} fill={COLORS.dot} />}
        </g>
      ))}
    </svg>
  );
}

function Widget({ src, className, style }) {
  return (
    <div
      className={`finlyt-float overflow-hidden bg-white border border-[#E7E8EE] shadow-[0_1.5cqw_4cqw_rgba(11,16,51,0.12)] ${className}`}
      style={{ borderRadius: "2.2cqw", ...style }}
    >
      <img src={src} alt="" draggable="false" className="block w-full" />
    </div>
  );
}

export default function FinlytCover() {
  const rootRef = useRef(null);
  const popRef = useRef(null);
  const markRef = useRef(null);
  const eyesRef = useRef(null);
  const letterRefs = useRef([]);
  const still = reducedMotion();

  useEffect(() => {
    if (still) return;
    const anims = [];
    const timers = [];
    const play = (el, frames, options) => {
      if (!el) return null;
      const a = el.animate(frames, options);
      anims.push(a);
      return a;
    };

    // Intro, as on the website, played once the card is actually on screen.
    const intro = () => {
      play(popRef.current, POP, { duration: 450, easing: "ease-out", fill: "both" });
      play(markRef.current, DANCE, { delay: DANCE_AT, duration: 1000, easing: "ease-in-out" });
      play(eyesRef.current, BLINK, { delay: DANCE_AT, duration: 1000 });
      letterRefs.current.forEach((el, i) =>
        play(el, LETTER_IN, { delay: LETTERS_AT + i * LETTER_GAP, duration: LETTER_MS, easing: "ease-out", fill: "both" })
      );
      play(markRef.current, HAPPY_HOP, { delay: LANDED_AT, duration: 480, easing: "ease-out" });

      // Idle: blink every few seconds, hop now and then.
      let tick = 0;
      timers.push(
        setInterval(() => {
          tick += 1;
          play(eyesRef.current, BLINK, { duration: 900 });
          if (tick % 2 === 0) play(markRef.current, HOP, { duration: 720, easing: "ease-out" });
        }, 2600)
      );
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        intro();
      },
      { threshold: 0.5 }
    );
    observer.observe(rootRef.current);

    // Like the website: pressing the card (or its buttons) makes the coin hop.
    const card = rootRef.current?.closest("[data-finlyt-card]") ?? rootRef.current;
    const hop = () => play(markRef.current, HOP, { duration: 720, easing: "ease-out" });
    card?.addEventListener("pointerdown", hop, { passive: true });

    return () => {
      observer.disconnect();
      timers.forEach(clearInterval);
      anims.forEach((a) => a.cancel());
      card?.removeEventListener("pointerdown", hop);
    };
  }, [still]);

  return (
    <div
      ref={rootRef}
      role="img"
      aria-label="Finlyt"
      className="absolute inset-0 select-none overflow-hidden"
      style={{ background: COLORS.bg, containerType: "inline-size" }}
    >
      {/* soft light behind the logo */}
      <div
        className="absolute rounded-full"
        style={{
          left: "-8cqw",
          top: "-12cqw",
          width: "55cqw",
          height: "55cqw",
          background: "radial-gradient(circle, rgba(174,187,255,0.28), transparent 65%)",
        }}
      />

      {/* LEFT: live logo + tagline */}
      <div className="absolute" style={{ left: "6cqw", top: "7cqw", width: "44cqw" }}>
        <div className="flex items-end" style={{ height: "11cqw" }}>
          <span ref={popRef} className="block h-full" style={{ opacity: still ? 1 : 0 }}>
            <Mark markRef={markRef} eyesRef={eyesRef} />
          </span>
          <Wordmark letterRefs={letterRefs} hidden={!still} />
        </div>
        <p
          className="font-semibold"
          style={{ color: COLORS.text, marginTop: "3cqw", fontSize: "3.6cqw", lineHeight: 1.1, letterSpacing: "-0.05cqw" }}
        >
          Never forget an expense again.
        </p>
      </div>

      {/* RIGHT: home-screen widgets from the app */}
      <div className="absolute" style={{ right: "5cqw", top: "4cqw", width: "38cqw" }}>
        <Widget src="/projects/finlyt/week.png" style={{ transform: "rotate(-2deg)", animationDelay: "0s" }} />
        <div className="flex justify-between" style={{ marginTop: "-2.5cqw" }}>
          <Widget
            src="/projects/finlyt/today.png"
            style={{ width: "18cqw", transform: "rotate(3deg)", animationDelay: "-1.3s" }}
          />
          <Widget
            src="/projects/finlyt/checkin.png"
            style={{ width: "18cqw", transform: "rotate(-1deg)", animationDelay: "-2.6s" }}
          />
        </div>
      </div>
    </div>
  );
}
