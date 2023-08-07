import React, { useContext } from "react";
import { Context } from "../context/context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faPython,
  faDocker,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
function Skills() {
  const { skillsOpen } = useContext(Context);
  return (
    <div className={`${skillsOpen} skill-container`}>
      <div class="prog-container">
        <div class="skills html flex-row text-shadow-crt">
          {" "}
          <h4 className="">
            {" "}
            <FontAwesomeIcon icon={faHtml5} /> HTML 5
          </h4>
          95%
        </div>
      </div>

      <div class="prog-container">
        <div class="skills css flex-row text-shadow-crt">
          <h4>
            {" "}
            <FontAwesomeIcon icon={faCss3Alt} /> CSS 3
          </h4>
          90%
        </div>
      </div>
      <div class="prog-container">
        <div class="skills js flex-row text-shadow-crt"> <h4>
        {" "}
        <FontAwesomeIcon icon={faJs} /> JavaScript
      </h4>88%</div>
      </div>
      
      <div class="prog-container">
        <div class="skills react flex-row text-shadow-crt"><h4>
        {" "}
        <FontAwesomeIcon icon={faReact} /> React
      </h4>95%</div>
      </div>
     
      <div class="prog-container">
        <div class="skills python flex-row text-shadow-crt"> <h4>
        {" "}
        <FontAwesomeIcon icon={faPython} /> Python
      </h4>75%</div>
      </div>
      
      <div class="prog-container">
        <div class="skills docker flex-row text-shadow-crt"><h4>
        {" "}
        <FontAwesomeIcon icon={faDocker} /> Docker
      </h4>50%</div>
      </div>
      
      <div class="prog-container">
        <div class="skills mysql flex-row text-shadow-crt"><h4>
        {" "}
        <FontAwesomeIcon icon={faDatabase} /> MySQL
      </h4>50%</div>
      </div>
      
      <div class="prog-container">
        <div class="skills git flex-row text-shadow-crt"><h4>
        {" "}
        <FontAwesomeIcon icon={faGitAlt} /> Git
      </h4>80%</div>
      </div>
    </div>
  );
}

export default Skills;
