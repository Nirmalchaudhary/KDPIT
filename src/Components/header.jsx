import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import "../assets/css/blink-text.css";
import "../assets/css/header.css";

import {
  Nav,
  Navbar,
  Container,
  Button,
  Image,
  Dropdown,
  NavDropdown,
  Col,
  Row,
} from "react-bootstrap";

const HeaderThree = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFiexd, setHeaderFiexd] = useState(false);
  const [searchTrigger, setSearchTrigger] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setHeaderFiexd(true);
    } else {
      setHeaderFiexd(false);
    }
  });

  return (
    // <Fragment>
    <header
      className={`header-section style-3 ${
        headerFiexd ? "header-fixed fadeInUp" : ""
      }`}
    >
      <div
        className={`header-top ${socialToggle ? "open" : ""}`}
        style={{
          backgroundColor: "#0066b3",
          // backgroundImage:
          //  "linear-gradient(to right,#642b73 0%,#c6426e 51%,#642b73 100%)",
          color: "white",
          fontSize: "0.8rem",
        }}
      >
        <div
          className="container"
          style={{
            margin: "0 auto",
          }}
        >
          <div className="header-top-area" style={{ position: "relative" }}>
            {/* <div className="header-top-contact  ">
              <a href="https://admission2023.charusat.ac.in" className="blink">
                Apply for Admission
              </a>
            </div> */}
            <div className="header-top-reglog ">
            <div className="link_container">

              <Link to="/accreditation-and-ranking" className="login">
                Accreditation & Ranking
              </Link></div>
              <div className="link_container">
              <a
                href="https://charusatalumni.org"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Alumni
              </a></div>
              <div className="link_container">

              <Link to="/careers" className="login">
                Careers
              </Link></div>
              <div className="link_container">

              <Link to="./accreditation-and-ranking">NIRF</Link></div>
              <div className="link_container">

              <Link to="./placement">Placement</Link></div>
              <div className="link_container">

              <a href="./scholarship">
                Scholarships
              </a></div>
              <div className="link_container">

              <a href="./scholarship">
                Samaj Scholarships
              </a></div>
              <div className="link_container">

              <Link to="./student-corner">Student Corner</Link></div>

              {/* <Link to="/signup" className="signup">
                Students' Corner
              </Link> */}
              <div className="link_container">

              <a
                href="https://charusat.edu.in:912/UniExamResult/"
                className="login"
                target="_blank"
              >
                Exam Result
              </a></div>
              <div className="link_container">

              <a
                href="https://charusat.edu.in:912/FeesPaymentApp/"
                className="signup"
                target="_blank"
              >
                Pay Fees
              </a></div>
              <div className="link_container">

              <Link to="/contact-us" className="signup">
                Contact Us
              </Link></div>
              <div className="link_container L1">

              <Link to="/donation">
                <span className="support-btn">Support KDPIT</span>
              </Link></div>
            </div>
          </div>
        </div>
      </div>

      <Navigation />
    </header>
    // </Fragment>
  );
};

export default HeaderThree;
