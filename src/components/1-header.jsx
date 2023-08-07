import React, { useContext } from "react";
import { Context } from "../context/context";

function Header() {
  const { setAboutOpen, setSkillsOpen, setContactOpen } = useContext(Context);
  return (
    <header>
      <nav id="nav" className="flex-col">
        <ul className="flex-row nav-list">
          <li
            className="nav-item"
            onClick={() => {
              setAboutOpen("open");
              setSkillsOpen("close");
              setContactOpen("close");
            }}
          >
            About
          </li>
          <li
            className="nav-item"
            onClick={() => {
              setAboutOpen("close");
              setSkillsOpen("open");
              setContactOpen("close");
            }}
          >
            Skills
          </li>
          <li
            className="nav-item"
            onClick={() => {
              setAboutOpen("close");
              setSkillsOpen("close");
              setContactOpen("open");
            }}
          >
            Contact
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
