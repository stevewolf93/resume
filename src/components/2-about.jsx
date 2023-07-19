import React from "react";
import Typewriter from "typewriter-effect";

function About() {
  return (
    <article className="about-container flex-col open">
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
        I am a Full Stack Developer hailing from Germany, actively in pursuit of
        exciting new challenges in the realm of software development. My current
        endeavors revolve around the creation of innovative React projects,
        where I am passionately dedicated to enriching my understanding and
        mastery of this cutting-edge framework. I am eager to explore
        opportunities that enable me to leverage my expertise and contribute
        meaningfully to the success of esteemed projects.
      </p>
    </article>
  );
}

export default About;
