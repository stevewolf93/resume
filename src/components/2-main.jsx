import React from "react";
import About from "./2-about";
import Skills from "./2-skills";
import Contact from "./2-contact";
function Main() {
  return (
    <main className="flex-col">
      <About></About>
      <Skills></Skills>
      <Contact></Contact>
    </main>
  );
}

export default Main;
