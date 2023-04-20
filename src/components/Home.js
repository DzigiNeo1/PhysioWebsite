import React from "react";
import "./Home.css";

import photo from "../assets/Ljubicaphoto.jpg";
import { motion } from "framer-motion";

const Home = () => {
  const handleClickScroll = () => {
    const element = document.getElementById("contact");

    element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] }}
        className="header-wrapper row"
        id="home"
      >
        <div className="col-md-7 justify-content-center align-items-center d-flex">
          <div className="header-one-div row d-flex p-5 m-0">
            <h1 className="row d-flex align-self-center">
              Stress, headache, anxiety, toxins, pain, depression, muscle aches.
              Let it all go with massage
            </h1>
            <h4 className="py-4">
              Your body knows better. Schedule a massage.
            </h4>
            <div className="col group-buttons btn-block">
              <button
                type="button"
                className="btn btn-warning mx-1 warning "
                onClick={handleClickScroll}
              >
                Contact Me
              </button>

              <a
                href="/resume/ResumeLjubicaSimic.pdf"
                className="btn btn-danger warning"
                download
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-5 photo-container  justify-content-center align-items-center d-flex blobsvg">
          <motion.div
            className="box"
            initial={{ opacity: 0, scale: 0.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 1,
              delay: 0.2,
              ease: [0, 1.71, 0.5, 1.01],
            }}
          >
            <img
              alt="me"
              src={photo}
              className="rounded my-photo"
              width="300px"
            />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Home;
