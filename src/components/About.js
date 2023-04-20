import React from "react";
import "./About.css";
import "aos/dist/aos.css";
import photoSvg from "../assets/undraw_coffee_time_mwfm.svg";
import travelSvg from "../assets/travel.svg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
const About = () => {
  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 },
  };
  const boxVariant1 = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 },
  };

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="about-me"
        id="about"
      >
        <h1 className="d-flex justify-content-center row p-5">So, who am I?</h1>
        <div className="row d-flex container-wrap">
          <div className="col-md-3 d-flex div-wrapper-h4 justify-content-center girl ">
            <motion.img
              src={photoSvg}
              ref={ref}
              variants={boxVariant}
              initial="hidden"
              animate={control}
            />
          </div>
          <div className="col-md-6 d-flex">
            <p className="center-text div-wrapper-h4 ">
              <strong>Positive,</strong> <strong>energetic</strong> induvidual
              who loves helping other people and making the world a better
              place.That's why choosing this job as a massage therapist is
              perfect match for me. Highly proffesionall in the workflow and
              also in the communication and understanding the problems and
              needs, and giving the proper advice. Loves to go to the nature on
              sunny day, enjoys traveling(who doesen't?) and on the rainy day
              loves to cook food and watch <em className="netflix">Netflix.</em>{" "}
            </p>
          </div>
          <div className="col-md-3 d-flex div-wrapper-h4 justify-content-center bike">
            <motion.img
              src={travelSvg}
              ref={ref}
              variants={boxVariant1}
              initial="hidden"
              animate={control}
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default About;
