import ManualSkyline from "./pages/ManualSkyline";
import AboutMe from "./pages/Aboutme";
import { useEffect } from "react";
import Lenis from "lenis";
import "./index.css";
import Projects from "./pages/Projects";


function App(){

  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth easing
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <div>
      <ManualSkyline  />
      <AboutMe/>
      <Projects/>
    </div>
  );
}
export default App;
