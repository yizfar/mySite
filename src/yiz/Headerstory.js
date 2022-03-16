import React from "react";
import { ArrowRight,ThreeDotsVertical } from 'react-bootstrap-icons';
import { FaDownload,FaGithub,FaLinkedin,FaEnvelope,FaPhone,FaWhatsapp,FaBars } from "react-icons/fa";

function Headerstory(props) {

  let audio = new Audio("/click2.wav")
  let stop = true;
  
 
  const start = () => {
   
      // stop? audio.play():stop = false;   // must chheck!!!!!!!!!!1
      // stop = false
      audio.play()
  }
  return (
    <div>
      <div id="id_header" className=" d-flex justify-content-around container ">
        <div id="id_logo" className="ml-5">
          <a href="#">
            {" "}
            <img src="yizlogo.png" height="150" />
          </a>
        </div>
        <div>
          <nav className="d-flex justify-content-end p-4 container">
            <div className="p-4" onMouseOver={start}>
              <a href="#"> Home</a>
            </div>
            <div className="p-4 link" onMouseOver={start}>
              <a href="#helloid"> story</a>
              <ThreeDotsVertical className="pb-1" />
              <div className="pop_up p-2 ">
                <a href="#skillid">skils</a>
              </div>
            </div>
            <div className="p-4  " onMouseOver={start}>
              <a href="#workid"> Works</a>
            </div>
            <div className="p-4 link" onMouseOver={start}>
              <a href="#contactid">Contact</a>

              <ThreeDotsVertical className="pb-1" />

              <div className="pop_up p-2 ">
                <a href="#sendid">Say Hi</a>
                <a href="#contactid">Links</a>
                <a href="#donateid">Donate</a>
              </div>
            </div>
          </nav>
        </div>
        <div></div>
      </div>
      <main className="container p-5">
        <div className="row">
          <div className="col-lg-8">
            <h1>
              {" "}
              <span id="helloid">Hi</span> my name is Yizhak Farber
            </h1>
            <h3>I’m a full stack developer.</h3>
            <h4>
              I am fullstack progreming created thinking a researcher and a book
              reader researcher I grew up in Givatayim and have always loved
              technology. On her regular route between Cleveland and the
              Michigan cities of Detroit, Escanaba, and Marquette, she carried
              coal upbound and iron ore downbound. In foggy conditions on July
              11, 1998, Choctaw was on Lake Huron upbound for Marquette when she
              was rammed east of Presque Isle Light by the downbound Canadian
              canaller Wahcondah. Although Choctaw sank in only 17 minutes, her
              crew of 22 escaped, and was picked up
            </h4>
          </div>

          <div className="col-lg-4  p-4">
            <div>
              <img id="yizimg" src="picyiz.jpeg" height="200" />
            </div>
            <hr />
            <div className="m-2 " data-tip="Tap to download ">
              Download
              <a href="YizCV.docx" target="_blank" rel="noopener noreferrer">
                <FaDownload id="fadwon" />
              </a>
              Resume
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Headerstory;
