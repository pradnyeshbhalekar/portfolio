import ManualSkyline from "./pages/ManualSkyline";
import AboutMe from "./pages/Aboutme";
import { useEffect } from "react";
import Lenis from "lenis";
import "./index.css";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import SkillsTicker from "./components/SkillsTicker";



function App() {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);
  return (
    <div>
      <ManualSkyline />
      <AboutMe />
      <Projects />
      <SkillsTicker />
      <Experience />

    </div>
  );
}
export default App;
