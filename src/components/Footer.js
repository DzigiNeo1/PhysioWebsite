import React from "react";
import { SocialIcon } from "react-social-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Footer.css";
import { useEffect } from "react";
const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <footer className="text-center text-white">
      <div className="d-flex justify-content-center footer p-0 m-0">
        <section className="container ">
          <SocialIcon
            className="insta"
            url="https://instagram.com/ljubica.simmic"
            style={{ height: 50, width: 50 }}
            role="button"
          />
          <SocialIcon
            className="linkedin mx-2"
            url="https://linkedin.com/in/ljubicasimic"
            style={{ height: 50, width: 50 }}
          />
          <SocialIcon
            className="email"
            url="mailto:ljubicasimic771@gmail.com"
            style={{ height: 50, width: 50 }}
          />
        </section>
      </div>

      <div className="text-center p-2  copyright">
        © 2023 Copyright:
        <a className=" text-white copyright2" href="/">
          Ljubica Simic
        </a>
      </div>
    </footer>
  );
};

export default Footer;
