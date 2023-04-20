import React from "react";
import photo4 from "../../assets/lymph/photo4.webp";
import photo5 from "../../assets/lymph/photo5.jpg";
import photo6 from "../../assets/lymph/photo6.jpg";
import AnimatedCursor from "../AnimatedCursor";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Lymphdrainage = () => {
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
          className="btn btn-warning  m-1 go-back-button"
        >
          Go back
        </button>
        <div className="row first-row">
          <img className="col-lg-6 justify-content-center photos" src={photo4} />
          <div className="col-lg-6 align-self-center d-flex justify-content-center text-div">
            Lymphatic drainage massage, also known as manual lymphatic drainage,
            relieves swelling that happens when medical treatment or illness
            blocks your lymphatic system. Lymphatic drainage massage involves
            gently manipulating specific areas of your body to help lymph move
            to an area with working lymph vessels.
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 align-self-center d-flex justify-content-center text-div">
            The lymphatic system plays a key role in the body’s immune defenses.
            Lymphatic fluid flows through lymph vessels, which connect lymph
            nodes. As it passes through the lymph nodes, white blood cells trap
            and destroy harmful particles, such as bacteria.
          </div>
          <img className=" d-flex col-lg-6 photos" src={photo5} />
        </div>
        <div className="row">
          <img className="col-lg-6 photos" src={photo6} />
          <div className=" col-lg-6 align-self-center d-flex justify-content-center text-div">
            How do you know if lymphatic drainage massage is effective? “Your
            lymphedema should not get worse if you regularly practice lymphatic
            massage.” Also, drink water. Well-hydrated tissue helps moves out
            waste materials.
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
                  Is a lymph drainage painful?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>No.</strong> You perceive the lymph drainage as slight
                  pressure waves that run from the tips of your soles or ankles
                  over your lower legs, thighs and hips. These wave-like
                  contractions increase the pressure in any lymphatic drainage
                  treatment. Regardless of whether you choose lymphatic drainage
                  for your legs or your arms.
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
                  How often should I perform a lymph drainage treatment?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  It How often you should take advantage of this treatment will
                  be discussed with you in detail during a consultation. This
                  also depends on the type of treatment. The intervals are from
                  experience between 1-2 times a week.
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
                  What possibilities does lymph drainage offer for your
                  well-being and your body?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>
                    For heavy legs, as a detox treatment or to refine your skin
                    texture, a lymph drainage treatment is ideal.
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Lymphdrainage;
