import React from "react";
import photo1 from "../../assets/classic/photo1.jpg";
import photo2 from "../../assets/classic/photo2.jpg";
import photo3 from "../../assets/classic/photo3.jpg";
import AnimatedCursor from "../AnimatedCursor";
import { motion } from "framer-motion";
import "./ClassicMassage.css";
import { useNavigate } from "react-router-dom";
const ClassicMassage = () => {
  const navigate = useNavigate();

  return (
    <>
      <AnimatedCursor />
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] }}
        className="d-flex row main"
        id="ClassicMassage"
      >
        <button
          onClick={() => navigate(-1)}
          className="btn btn-warning go-back-button m-1"
        >
          Go back
        </button>
        <div className="row first-row">
          <img
            className="col-lg-6 justify-content-center d-flex photos"
            src={photo1}
          />
          <div className="col-lg-6 align-self-center d-flex justify-content-center text-div">
            Classic massage is used to prevent and treat diseases. And of course
            it also works as a pure wellness treatment. The term “classical
            massage” means a mechanical, mostly manual influence on the skin,
            the deeper tissue and the musculature. The classical massage is
            mainly used for prevention and treatment of diseases of the
            musculoskeletal system, but can also be used as wellness treatment.
            It is offered as a partial as well as a full body treatment.
          </div>
        </div>
        <div className="row second-photo">
          <div className="col-lg-6 align-self-center d-flex justify-content-center text-div">
            In a classical massage, pressure and tension stimuli are exerted on
            the muscles and their surrounding tissue. The effect takes place
            locally, by stretching and relaxing the muscles, and stimulating
            blood circulation and cell metabolism. Thus pain in the affected
            area is alleviated.
          </div>
          <img className=" d-flex col-lg-6 d-flex photos " src={photo2} />
        </div>
        <div className="row">
          <img className="col-lg-6 d-flex photos" src={photo3} />
          <div className=" col-lg-6 align-self-center d-flex justify-content-center text-div">
            The classical massage has a generally positive effect on the entire
            organism and promotes the well-being and relaxation of the patient.
            In detail, skin and cell metabolism, blood and lymph flow, as well
            as the blood circulation of the musculature and the formation of
            joint fluid are stimulated. The elasticity of ligaments and tendons
            is improved and muscular imbalance is harmonized. This leads to
            relief of pain, reduction of heart rate and blood pressure as well
            as deep breathing and thus to psychological relaxation.
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
                  How will a massage feel?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>Every massage is as unique as you are!</strong>{" "}
                  Massage typically begins with long flowing strokes designed to
                  apply oil and being your relaxation, while warming up your
                  skin and muscles. Make sure to communicate with your therapist
                  about pressure during your service. Massage should be relaxing
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
                  What Benefits Can I Expect?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Relieving muscle tension, cramps, and spasms Loosening and
                  stretching the joints and connective tissues Increasing blood
                  flow and circulation, Lower blood pressure, Calming the
                  central nervous system, Faster healing after injuries or
                  surgeries, Better lymphatic drainage of lactic acid and other
                  wastes, Improved sleep, Reduced feelings of stress, anxiety,
                  and depression Relief from pain and inflammation
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
                  How will I feel after the massage therapy treatment?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>Most people feel very relaxed.</strong>Some experience
                  freedom from long-term aches and pains developed from stress,
                  tension or repetitive activity injuries. After an initial
                  period of feeling pleasantly tired, many people often
                  experience increased energy, heightened awareness, and greater
                  productivity which can last for days or weeks.
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ClassicMassage;
