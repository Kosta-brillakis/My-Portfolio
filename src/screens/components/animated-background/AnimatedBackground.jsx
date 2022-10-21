import React from "react";
import "./AnimatedBackground.css";
import { ReactComponent as Battery } from "./svgs/battery.svg";
import { ReactComponent as Bike } from "./svgs/bike.svg";
import { ReactComponent as Cloud } from "./svgs/cloud.svg";
import { ReactComponent as Code } from "./svgs/code.svg";
import { ReactComponent as Coffee } from "./svgs/coffee.svg";
import { ReactComponent as Beaker } from "./svgs/beaker.svg";
import { ReactComponent as Game } from "./svgs/game.svg";
import { ReactComponent as Git } from "./svgs/git.svg";
import { ReactComponent as Heart } from "./svgs/heart.svg";
import { ReactComponent as Home } from "./svgs/home.svg";
import { ReactComponent as Html } from "./svgs/html.svg";
import { ReactComponent as Js } from "./svgs/js.svg";
import { ReactComponent as Keyboard } from "./svgs/keyboard.svg";
import { ReactComponent as Mic } from "./svgs/mic.svg";
import { ReactComponent as ReactSVG } from "./svgs/react.svg";
import { ReactComponent as Paper } from "./svgs/paper.svg";
import { ReactComponent as Gloves } from "./svgs/gloves.svg";
import { ReactComponent as Time } from "./svgs/time.svg";
import { ReactComponent as Web } from "./svgs/web.svg";
import { ReactComponent as Weight } from "./svgs/weight.svg";

function AnimatedBackground({ children }) {
  let arr = [];
  let qty = 15;

  for( let i = 0; i < qty; i++ ) {
    arr.push(i)
  }

  const layers = arr.map(i => {
    return (
      <div key={i} className="animated-row">
        <div>
          <Battery />
          <Bike />
          <Cloud />
          <Code />
          <Coffee />
          <Beaker />
          <Game />
          <Git />
          <Heart />
          <Home />
          <Html />
          <Js />
          <Keyboard />
          <Mic />
          <ReactSVG />
          <Paper />
          <Gloves />
          <Time />
          <Web />
          <Weight />
        </div>
        <div>
          <Battery />
          <Bike />
          <Cloud />
          <Code />
          <Coffee />
          <Beaker />
          <Game />
          <Git />
          <Heart />
          <Home />
          <Html />
          <Js />
          <Keyboard />
          <Mic />
          <ReactSVG />
          <Paper />
          <Gloves />
          <Time />
          <Web />
          <Weight />
        </div>
      </div>
    )
  })

  return (
    <section className="animated-section">
      {layers}
      {children}
    </section>)
}

export default AnimatedBackground;
