import './AboutMe.css'
import imgUrl from './hero-img.jpeg'


function AboutMe() {
  return (
    <div id="aboutMe" className="aboutMe-container">
      <img src={imgUrl} alt="about me"/>
      <div>
        <h1>About Me</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit cupiditate obcaecati est voluptates libero eligendi voluptatem tenetur ad harum omnis nemo laudantium rem corrupti odit modi hic deserunt maxime officiis, non quo! Reprehenderit ad blanditiis quasi quod, esse atque nemo sapiente nulla inventore alias omnis necessitatibus accusantium facilis veritatis beatae.
        </p>
      </div>
    </div>
  )
}

export default AboutMe