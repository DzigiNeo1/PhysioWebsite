import React from "react";
import photo7 from "../../assets/madero/photo7.webp";
import photo8 from "../../assets/madero/photo8.jpg";
import photo9 from "../../assets/madero/photo9.jpg";
import AnimatedCursor from "../AnimatedCursor";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const Maderotherapy = () => {
  const navigate = useNavigate();
  return (
    <>
      <AnimatedCursor />
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] }}
        className="d-flex row main"
      >
        <button
          onClick={() => navigate(-1)}
          className="btn btn-warning go-back-button m-1"
        >
          Go back
        </button>
        <div className="row first-row">
          <img
            className="col-lg-6 justify-content-center photos"
            src={photo7}
          />
          <div className="col-lg-6 align-self-center d-flex justify-content-center text-div">
            Madero Therapy is a holistic massage technique that uses
            anatomically designed wooden tools to improve the body’s size and
            proportions while improving overall health. These instruments allow
            highly targeted pressure to be applied to problem areas (such as
            thighs, buttocks, love handles and abdomen). Pressure intensifies
            the breakdown of fat deposits and fibrous cellulite so that it can
            be eliminated naturally with other toxins.
          </div>
        </div>
        <div className="row second-photo">
          <div className="col-lg-6 align-self-center d-flex justify-content-center text-div">
            The technique involves repetitive movements using different wooden
            instruments to manipulate targeted areas of muscle, fat and
            cellulite, stimulating the lymphatic drainage system to remove
            unnecessary water, fat and toxins from the body. What makes this
            treatment unique, comparing to other alternatives such as laser,
            ultrasound cellulite removal or liposuction, is that it stimulates
            the production of elastin and collagen and eliminates cellulite at
            its root, with no downtime!
          </div>
          <img className=" d-flex col-lg-6 photos " src={photo8} />
        </div>
        <div className="row">
          <img className="col-lg-6 photos" src={photo9} />
          <div className=" col-lg-6 align-self-center d-flex justify-content-center text-div">
            Madero Therapy has been practiced for centuries in the oriental
            countries, but it took the wave of popularity in the 90’ in
            Colombia. The word Madero in Spanish means ‘’wood’’ therefore, it’s
            been called a Wooden Treatment’’or Body Sculpting Treatment.
          </div>
        </div>
        <h1 className="d-flex justify-content-center mt-4 mb-4 ">
          Frequently asked questions
        </h1>
        <div className="d-flex main2 ">
          <div className="accordion w-50 accordion-flush" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button text-black"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Does Madero Therapy / Wood Therapy Work?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  This is one of the most common Questions about Madero Therapy
                  that one comes around. To answer this, you have to understand
                  that this therapy works differently for everyone. There are
                  many factors that come into play to make this therapy a
                  success. Some of these factors are age, weight, and frequency
                  of treatment. While your body might respond to it at its own
                  pace, one thing that is assured in this wood therapy is that
                  it is very relaxing. overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed text-black"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Is Wood Therapy painful?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  The answer is yes. As this therapy is performed using wooden
                  instruments and tools, the therapy hurts. Usually, people find
                  the first few sessions tough and then find Madero Therapy more
                  relaxing than painful. Remember, it is going to take much more
                  pressure to break cellulite for the parts of your body where
                  you have the most of it which tend to hurt, but afterward, the
                  feeling is quite relaxing.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed text-black"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  How long do the results of wood therapy last?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Another very common question about wood therapy is that for
                  how long will the results last? The answer is very simple and
                  obvious. The more regular you are with these wood therapies,
                  the longer is the effects of the therapy. In general, the
                  results will last for around 3 months after your last session.
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Maderotherapy;
