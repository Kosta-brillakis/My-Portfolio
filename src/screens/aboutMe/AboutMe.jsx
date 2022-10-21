import "./AboutMe.css";
import imgUrl from "./hero-img.jpeg";

function AboutMe() {
  return (
    <div id="aboutMe" className="aboutMe-container">
      <img src={imgUrl} alt="about me" />
      <div>
        <h1>About Me</h1>
        <p>
          <span className="fancy">I am a full-stack software engineer with a passion for helping small
          businesses. Check out my work below, and contact me if you're hiring
          software engineers, need freelance work</span> done, have an interesting
          project, or just want to expand your network. Thanks!
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
