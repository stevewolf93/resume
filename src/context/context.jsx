import { createContext, useState } from "react";

const Context = createContext();

function ContextProvider(props) {
  const [aboutOpen, setAboutOpen] = useState("open");
  const [skillsOpen, setSkillsOpen] = useState("close");
  const [contactOpen, setContactOpen] = useState("close");
  return (
    <Context.Provider
      value={{
        aboutOpen,
        setAboutOpen,
        skillsOpen,
        setSkillsOpen,
        contactOpen,
        setContactOpen,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
