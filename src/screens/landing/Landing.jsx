import { AnimatedBackground, Typewriter } from "../components";
import "./Landing.css";

let msgArray = [
  "",
  "What am I?",
  "I am a...",
  "Software Engineer",
  "Fullstack web developer",
  "MERN expert",
  "Professional"
];

function Landing() {
  return (
    <AnimatedBackground>
      <div className="landing-type">
        <div>Welcome</div>
        <Typewriter data={msgArray} />
      </div>
      
    </AnimatedBackground>
  );
}

export default Landing;
