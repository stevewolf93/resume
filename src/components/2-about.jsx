import React, {useContext} from "react";
import Typewriter from "typewriter-effect";
import { Context } from "../context/context";


function About() {
  const {aboutOpen} =useContext(Context)
  return (
    <article className={`${aboutOpen} about-container flex-col`}>
      <div id="profile-pic"></div>
      <h2 className="text-shadow-crt heading">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Welcome!")
              .pauseFor(2000)
              .deleteAll()
              .typeString("My name is Steve.")
              .start();
          }}
        />
      </h2>
      <p>
        I am a <strong>Full Stack Developer</strong> hailing from{" "}
        <strong>Germany</strong>, actively in pursuit of exciting new challenges
        in the realm of <strong>software development</strong>. My current
        endeavors revolve around the creation of innovative{" "}
        <strong>React projects</strong>, where I am passionately dedicated to
        enriching my understanding and mastery of this cutting-edge framework. I
        am eager to explore opportunities that enable me to leverage my{" "}
        expertise and contribute meaningfully to the success of
        esteemed projects.
      </p>
    </article>
  );
}

export default About;
