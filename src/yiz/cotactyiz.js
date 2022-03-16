
import React from "react";
import {
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import Contact from "./contact";

function ContactYiz(props) {
  let audio = new Audio("/click2.wav");
  let stop = true;

  const start = () => {
    // stop? audio.play():stop = false;   // must chheck!!!!!!!!!!1
    // stop = false
    audio.play();
  };
  return (
    <div id="contactid" className="container-fluid">
      <h1
        className="text-center m-5
            p-3"
      >
        More contact info
      </h1>
      {/* <Contact/> */}
      <div className=" ">
      
<div  className="text-center  ">
     
        <FaGithub id="FaGithub2id" className="icon " data-tip=" My Github" /><a href="https://github.com/yizfar/"> github.com/yizfar</a>
      
      
        <FaLinkedin
          id="FaLinkedin2id"
          className="icon ps-2"
          data-tip="My Linkedin"
        /><a  href="https://www.linkedin.com/feed/">linkedin.com/feed/</a>
     

      
       
        <FaPhone id="FaPhone2id" className="icon ps-2" data-tip="Call Phone" /><a href="+972548463456">(+972) 054-8463456</a>
     
  
      
        <FaWhatsapp
          id="FaWhatsapp2id"
          className="icon ps-2"
          data-tip="My Whatsapp"
        /><a a className="" href="https://wa.me/972548463456">(+972) 054-8463456 </a>
     

      
        <FaEnvelope
          id="FaLinkedin2id"
          className="icon ps-2"
          data-tip="My Linkedin"
        /><a className="" href="yizfar@gmail.com">Yizfar@gmail.com</a>
      
      </div>
     
      </div>
    </div>
  );
}

export default ContactYiz;
