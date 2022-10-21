import { AnimatedBackground, Typewriter } from "../components";
import "./Landing.css";

let msgArray = [
  "",
  "Software Engineer",
  "Fullstack web developer",
  "MERN expert",
  "Professional",
  "",
];

function Landing() {
  return (
    <AnimatedBackground>
      <div className="landing-type">
        <div>What am I?</div>
        <Typewriter data={msgArray} />
      </div>
      
    </AnimatedBackground>
  );
}

export default Landing;
