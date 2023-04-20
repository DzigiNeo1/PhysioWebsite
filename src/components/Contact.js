import React, { useState, useReducer, useRef, useEffect } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import svgphoto from "../assets/massage-spa-svgrepo-com.svg";
import reducer from "./formreducer";
const initialState = {
  name: "",
  lastName: "",
  email: "",
  subject: "",
  description: "",
};
const Contact = () => {
  const [submited, setSubmited] = useState(false);
  const form = useRef();
  const [reducerState, dispatch] = useReducer(reducer, initialState);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_MY_ID
    );

    setSubmited(true);
    reducerState.name = "";
    reducerState.lastName = "";
    reducerState.email = "";
    reducerState.subject = "";
    reducerState.description = "";
    setTimeout(() => {
      setSubmited(false);
    }, 3000);
  };

  return (
    <div className="top-container" id="contact">
      <img
        src={svgphoto}
        width={150}
        className="d-flex justify-content-center align-items-center svg-photo"
      />
      <div className="container w-50">
        <h1 className="d-flex justify-content-center pt-5">Contact Me</h1>
        <h4 className="d-flex justify-content-center">
          Fulfill the form below
        </h4>
        <form className="row g-4 " ref={form} onSubmit={sendEmail}>
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">
              First Name
            </label>
            <input
              value={reducerState.name}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE",
                  value: e.target.value,
                  key: "name",
                })
              }
              autoComplete="off"
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your name"
              required
              name="user_name"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              onChange={(e) =>
                dispatch({
                  type: "UPDATE",
                  value: e.target.value,
                  key: "lastName",
                })
              }
              value={reducerState.lastName}
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Enter your lastname"
              required
              name="user_lastname"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="subject" className="form-label">
              Subject
            </label>
            <input
              onChange={(e) =>
                dispatch({
                  type: "UPDATE",
                  value: e.target.value,
                  key: "subject",
                })
              }
              value={reducerState.subject}
              type="text"
              className="form-control"
              id="subject"
              placeholder="Enter your Subject"
              required
              name="subject"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">
              E-mail
            </label>
            <input
              onChange={(e) =>
                dispatch({
                  type: "UPDATE",
                  value: e.target.value,
                  key: "email",
                })
              }
              value={reducerState.email}
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your E-mail"
              required
              name="email"
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="description" className="form-label">
              Description/Question
            </label>
            <textarea
              onChange={(e) =>
                dispatch({
                  type: "UPDATE",
                  value: e.target.value,
                  key: "description",
                })
              }
              value={reducerState.description}
              rows="4"
              type="e-mail"
              className="form-control"
              id="description"
              placeholder="Enter your Description/Question"
              required
              name="description"
            ></textarea>
          </div>
          <div className="col-md-12">
            <button className="btn contact-form-btn" type="submit">
              Submit
            </button>
            {submited && (
              <h1 className="d-flex justify-content-center align-content-center formsuccess">
                You have succesfully subbmited the form!
              </h1>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
