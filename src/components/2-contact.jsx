import React, {useContext}from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Context } from '../context/context';
function Contact() {
    const {contactOpen} =useContext(Context)
  return (
    <div className={contactOpen}>
      <FontAwesomeIcon icon={faEnvelope} />  {"wolfsteve1993(at)gmail.com"}
    </div>
  )
}

export default Contact