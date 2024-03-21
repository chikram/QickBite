import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faFacebook,
  faXTwitter,
  faInstagram,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-center" id="footer">
        <div className="container p-4">
          <section className="">
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h4 className="fw-bold text-danger">QuickBite.</h4>

                <p className="text-center text-white">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit hic
                  mollitia quo ducimus tempore animi architecto aliquam deleniti
                  ab, atque ea excepturi, commodi rerum neque delectus possimus
                  ullam reprehenderit omnis.
                </p>
              </div>

              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="fw-bold text-white">COMPANY</h5>

                <ul className="list-unstyled">
                  <li>
                    <a className="text-body text-decoration-none" href="#!">
                      <span className="text-white fw-bold">Home</span>
                    </a>
                  </li>
                  <li>
                    <a className="text-body text-decoration-none" href="#!">
                      <span className="text-white fw-bold"> About Us</span>
                    </a>
                  </li>
                  <li>
                    <a className="text-body text-decoration-none" href="#!">
                      <span className="text-white fw-bold">Delivery</span>
                    </a>
                  </li>
                  <li>
                    <a className="text-body text-decoration-none " href="#!">
                      <span className="text-white fw-bold">Privacy Policy</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="fw-bold text-white ">GET IN TOUCH</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a className="text-body text-decoration-none" href="#!">
                      <span className="text-white fw-bold">
                        +92-300-8195498
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="text-body text-decoration-none" href="#!">
                      <span className="text-white fw-bold">
                        ikramaslam1020@gmail.com
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section className="mb-4 d-flex flex-wrap justify-content-center justify-content-md-center icon mx-3">
            <a
              className="btn m-1 border-2 border-danger"
              href="#!"
              role="button"
              style={{ borderRadius: "60%" }}
            >
              <FontAwesomeIcon icon={faXTwitter} style={{ color: "gray" }} />
            </a>

            <a
              className="btn m-1 border-2 border-danger"
              href="#!"
              role="button"
              style={{ borderRadius: "60%" }}
            >
              <FontAwesomeIcon icon={faGoogle} style={{ color: "red" }} />
            </a>

            <a
              className="btn m-1 border-2 border-danger"
              href="#!"
              role="button"
              style={{ borderRadius: "60%" }}
            >
              <FontAwesomeIcon icon={faInstagram} style={{ color: "red" }} />
            </a>
            <a
              className="btn m-1 border-2 border-danger"
              href="#!"
              role="button"
              style={{ borderRadius: "60%" }}
            >
              <FontAwesomeIcon icon={faFacebook} style={{ color: "#3124e5" }} />
            </a>
            <a
              className="btn m-1 border-2 border-danger"
              href="#!"
              role="button"
              style={{ borderRadius: "60%" }}
            >
              <FontAwesomeIcon icon={faLinkedinIn} style={{ color: "blue" }} />
            </a>
          </section>
        </div>

        <div
          className="text-center p-3 text-white"
          style={{ backgroundColor: "black" }}
        >
          © 2022 Copyright
          <span className="text-danger fw-bold fs-5 px-2">QuickBite</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
