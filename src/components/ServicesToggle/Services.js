import "./Services.css";
import photo9 from "../../assets/madero/photo9.jpg";
import photo4 from "../../assets/lymph/photo4.webp";
import photo3 from "../../assets/classic/photo3.jpg";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const Services = () => {
  const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  };
  return (
    <div id="services" className="services-container">
      <h1 className="justify-content-center d-flex py-5">Services</h1>
      <div className="row d-flex row-for-photos">
        <div className="col-md-4 justify-content-center d-flex ">
          <img
            src={photo3}
            className="justify-content-center services-photos d-flex"
          />
        </div>
        <div className="col-md-4 justify-content-center d-flex">
          <img
            src={photo9}
            className="justify-content-center services-photos d-flex"
          />
        </div>
        <div className="col-md-4 justify-content-center d-flex">
          <img
            src={photo4}
            className="justify-content-center services-photos d-flex"
          />
        </div>
      </div>
      <div className="row d-flex p-3 row-for-text">
        <div className="col-md-4 justify-content-center d-flex">
          <Link
            to="/ClassicMassage"
            onClick={ScrollToTop}
            className="text-dark"
          >
            <h4>Classic Massage</h4>
          </Link>
        </div>
        <div className="col-md-4 justify-content-center d-flex">
          <Link to="/Maderotherapy" onClick={ScrollToTop} className="text-dark">
            <h4>Maderotherapy</h4>
          </Link>
        </div>
        <div className="col-md-4 justify-content-center d-flex ">
          <Link to="/Lymphdrainage" onClick={ScrollToTop} className="text-dark">
            <h4>Lymphatic drainage</h4>
          </Link>
        </div>
      </div>
      <div className="row d-flex p-5 row-for-text">
        <div className="col-md-4 justify-content-center d-flex texts">
          Classic massage is used to prevent and treat diseases. And of course
          it also works as a pure wellness treatment. The term “classical
          massage” means a mechanical, mostly manual influence on the skin, the
          deeper tissue and the musculature. The classical massage is mainly
          used for prevention and treatment of diseases of the musculoskeletal
          system, but can also be used as wellness treatment. It is offered as a
          partial as well as a full body treatment.
        </div>
        <div className="col-md-4 justify-content-center d-flex texts">
          Madero Therapy is a holistic massage technique that uses anatomically
          designed wooden tools to improve the body’s size and proportions while
          improving overall health. These instruments allow highly targeted
          pressure to be applied to problem areas (such as thighs, buttocks,
          love handles and abdomen). Pressure intensifies the breakdown of fat
          deposits and fibrous cellulite so that it can be eliminated naturally
          with other toxins.
        </div>
        <div className="col-md-4 justify-content-center d-flex texts">
          Lymphatic drainage massage, also known as manual lymphatic drainage,
          relieves swelling that happens when medical treatment or illness
          blocks your lymphatic system. Lymphatic drainage massage involves
          gently manipulating specific areas of your body to help lymph move to
          an area with working lymph vessels.
        </div>
      </div>
    </div>
  );
};

export default Services;
