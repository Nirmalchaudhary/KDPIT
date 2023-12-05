import React, { useEffect, useState } from "react";
import { HashRouter, Link, NavLink, Redirect } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.css";
import "../assets/css/navigation.css";
import Dropdown from "react-bootstrap/Dropdown";
import Scroll from "react-scroll";
import logo from "../assets/images/KDPIT_OFF_LOGO.webp";
const ScrollLink = Scroll.ScrollLink;

const Header = () => {
  const [activeLink, setActiveLink] = useState("");

  return (
    <>
      <div className="bg-white">
        <header
          className="container"
          style={{
            shadow: "none",
          }}
        >
          <nav className="nav">
            <div className="logo">
              <Link to="./home" className="charusat-main">
                <img
                  src={logo}
                  alt="CHARUSAT"
                  style={{
                    width: "12rem",
                  }}
                />
              </Link>
            </div>
            <div className="nav-links">
              <ul className={`links `}>
                <li
                  className={`link green-text`}
                  onMouseOver={() => {
                    document.getElementById("Academics").style.display = "grid";
                    setActiveLink("Academics");
                  }}
                  onMouseOut={() => {
                    document.getElementById("Academics").style.display = "none";
                  }}
                >
                  <Link
                    to=""
                    className={`${
                      activeLink === "Academics" ? "green-text" : "green"
                    }`}
                  >
                    ACADEMICS
                  </Link>
                </li>
                <li
                  className="link"
                  onMouseOver={() => {
                    document.getElementById("Admission").style.display = "grid";
                    setActiveLink("Admission");
                  }}
                  onMouseOut={() => {
                    document.getElementById("Admission").style.display = "none";
                  }}
                >
                  <Link
                    to=""
                    className={`${
                      activeLink === "Admission" ? "green-text" : "green"
                    }`}
                  >
                    STUDENT CORNER
                  </Link>
                </li>

                <li
                  className="link"
                  onMouseOver={() => {
                    document.getElementById("Research").style.display = "grid";
                    setActiveLink("Research");
                  }}
                  onMouseOut={() => {
                    document.getElementById("Research").style.display = "none";
                  }}
                >
                  <Link
                    id="Research-link"
                    to=""
                    className={`${
                      activeLink === "Research" ? "green-text" : "green"
                    }`}
                  >
                    STUDENT ANNOUNCEMENT
                  </Link>
                </li>

                <li
                  className="link"
                 
                 
                >
                  <Link
                    id="KnowCHARUSAT-link"
                    to=""
                    className={`${
                      activeLink === "KnowCHARUSAT" ? "green-text" : "green"
                    }`}
                  >
                    ADMISSION
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <div
            className="menu-4"
            id="Academics"
            onMouseOver={() => {
              document.getElementById("Academics").style.display = "grid";
              setActiveLink("Academics");
            }}
            onMouseOut={() => {
              document.getElementById("Academics").style.display = "none";
              setActiveLink("");
            }}
          >
            <div className="menu-div">
              <div className="menu-d border-b">
                <h5 className="menu-head">Course Module</h5>
                <div className="menu-items">
                  <h6>Semester 2</h6>
                  <Link
                   to="forms/Course Module/Sem-2/IT143 FUNDAMENTALS OF COMPUTER PROGRAMMING.html"
                    target="_blank"
                    className="menu-link"
                  >
                    IT143 FUNDAMENTALS OF COMPUTER PROGRAMMING
                  </Link>
                  <Link
                    to="forms/Course Module/Sem-2/CE144 OBJECT ORIENTED PROGRAMMING WITH C++.html"
                    target="_blank"
                    className="menu-link"
                  >
                    CE144 OBJECT ORIENTED PROGRAMMING WITH C++
                  </Link>
                </div>
                <div className="menu-items">
                  <h6>Semester 4</h6>

                  <Link
                    to="http://172.16.11.116/LocalGuru/"
                    target="_blank"
                    className="menu-link"
                  >
                    IT254 COMPUTER ARCHITECTURE & MICROPROCESSOR INTERFACING
                  </Link>
                  <Link
                    to="http://172.16.11.116/LocalGuru/"
                    target="_blank"
                    className="menu-link"
                  >
                    IT256 DATA STRUCTURES AND ALGORITHMS
                  </Link>
                  <Link
                    to="http://172.16.11.116/LocalGuru/"
                    target="_blank"
                    className="menu-link"
                  >
                    IT2S7 DATABASE MANAGEMENT SYSTEM
                  </Link>
                  <Link
                    to="http://172.16.11.116/LocalGuru/"
                    target="_blank"
                    className="menu-link"
                  >
                    IT255 Web Technologies
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <div className="menu-items mt-5">
                <h6>Semester 6</h6>
                <Link
                  to="http://172.16.11.116/LocalGuru/"
                  target="_blank"
                  className="menu-link"
                >
                  IT348 CRYPTOGRAPHY & NETWORK SECURITY
                </Link>
                <Link
                  to="http://172.16.11.116/LocalGuru/"
                  target="_blank"
                  className="menu-link"
                >
                  IT354 MACHINE LEARNING
                </Link>
                <Link
                  to="http://172.16.11.116/LocalGuru/"
                  target="_blank"
                  className="menu-link"
                >
                  IT355 SOFTWARE ENGINEERING
                </Link>
                <Link
                  to="http://172.16.11.116/LocalGuru/"
                  target="_blank"
                  className="menu-link"
                >
                  IT380 CYBER SECURITY
                </Link>
                <Link
                  to="http://172.16.11.116/LocalGuru/"
                  target="_blank"
                  className="menu-link"
                >
                  IT379 COMPUTER VISION
                </Link>
                <Link
                  to="http://172.16.11.116/LocalGuru/"
                  target="_blank"
                  className="menu-link"
                >
                  IT349 WIRELESS COMMUNICATION & MOBILE COMPUTING.html
                </Link>
              </div>
            </div>
            <Link
              to="http://172.16.11.116/LocalGuru/"
              target="_blank"
              className="menu-link"
            >
              <h5 className="menu-head">Syllabus</h5>
            </Link>
          </div>

          <div
            className="menu"
            id="Admission"
          >
            <div className="menu-div">
              <h5 className="menu-head">Research Labs</h5>
              <h5 className="menu-head">Academic Calendar</h5>
              <h5 className="menu-head">E-Covernance</h5>
              <h5 className="menu-head">BTech Booklet</h5>
              <h5 className="menu-head">Exam Result</h5>
            </div>
          </div>
          <div
          // className="menu"
          // id="IQAC"
          // onMouseOver={() => {
          //   document.getElementById("IQAC").style.display = "grid";
          // }}
          // onMouseOut={() => {
          //   document.getElementById("IQAC").style.display = "none";
          // }}
          >
            {/* <div className="menu-div">
              <div className="menu-d border-b">
                <h5 className="menu-head">Academic Calendars</h5>
                <div className="menu-items">
                  <Link to="" className="menu-link">
                    2021-22
                  </Link>
                  <Link to="" className="menu-link">
                    2020-21
                  </Link>
                  <Link to="" className="menu-link">
                    2019-20
                  </Link>
                </div>
              </div>

              <div className="menu-d">
                <h5 className="menu-head">Academic & Administrative Audit</h5>
                <div className="menu-items">
                  <Link to="" className="menu-link">
                    AAA Process
                  </Link>
                </div>
              </div>
            </div>
            <div className="menu-div border-left">
              <h5 className="menu-head">Undergraduate Studies</h5>
              <div className="menu-items">
                <Link to="" className="menu-link">
                  17th IQAC Meeting Minutes
                </Link>
                <Link to="" className="menu-link">
                  16th IQAC Meeting Minutes
                </Link>
                <Link to="" className="menu-link">
                  15th IQAC Meeting Minutes
                </Link>
                <Link to="" className="menu-link">
                  14th IQAC Meeting Minutes
                </Link>
                <Link to="" className="menu-link">
                  13th IQAC Meeting Minutes
                </Link>
                <Link to="" className="menu-link">
                  12th IQAC Meeting Minutes
                </Link>
                <Link to="" className="menu-link">
                  11th IQAC Meeting Minutes
                </Link>
                <Link to="" className="menu-link">
                  10th IQAC Meeting Minutes
                </Link>
                <Link to="" className="menu-link">
                  9th IQAC Meeting Minutes
                </Link>
                <Link to="" className="menu-link">
                  8th IQAC Meeting Minutes
                </Link>
              </div>
            </div>

            <div className="menu-div border-left">
              <div className="menu-d border-b">
                <h5 className="menu-head">Accreditation & Ranking</h5>
                <div className="menu-items"></div>
              </div>
              <div className="menu-d border-b">
                <h5 className="menu-head">Best Practices</h5>
                <div className="menu-items"></div>
              </div>
              <div className="menu-d border-b">
                <h5 className="menu-head">Institutional Distinctiveness</h5>
                <div className="menu-items"></div>
              </div>

              <div className="menu-d border-b">
                <h5 className="menu-head">Feedback on Curriculum</h5>
                <div className="menu-items"></div>
              </div>

              <div className="menu-d">
                <h5 className="menu-head">Student Satisfaction Survey</h5>
                <div className="menu-items">
                  <Link to="" className="menu-link">
                    SSS Poster
                  </Link>
                  <Link to="" className="menu-link">
                    SSS Analysis
                  </Link>
                </div>
              </div>
            </div> */}
          </div>
          {/* <div
            className="menu"
            id="CampusLife"
            onMouseOver={() => {
              document.getElementById("CampusLife").style.display = "grid";
            }}
            onMouseOut={() => {
              document.getElementById("CampusLife").style.display = "none";
            }}
          >
            <div className="menu-div">
              <h5 className="menu-head">Activity & Events</h5>
              <div className="menu-items">
                <Link to="./coming-soon" className="menu-link">
                  Student Activities & Events
                </Link>
                <Link to="./coming-soon" className="menu-link">
                  Student Clubs
                </Link>
              </div>
            </div>
            <div className="menu-div border-left">
              <h5 className="menu-head">Residencies & Amenities</h5>
              <div className="menu-items">
                <Link to="./coming-soon" className="menu-link">
                  Boy's Hostel
                </Link>
                <Link to="./coming-soon" className="menu-link">
                  Staff Quarters
                </Link>
                <Link to="./coming-soon" className="menu-link">
                  Food / Canteen
                </Link>
                <Link to="./coming-soon" className="menu-link">
                  Transportation
                </Link>
                <Link to="./coming-soon" className="menu-link">
                  Recreation
                </Link>
              </div>
            </div>
            <div className="menu-div border-left">
              <h5 className="menu-head">Student Helpline</h5>
              <div className="menu-items">
                <Link to="./coming-soon" className="menu-link">
                  Helpline Contacts
                </Link>
              </div>
            </div>
          </div> */}

          <div
            className="menu11"
            id="Research"
            onMouseOver={() => {
              document.getElementById("Research").style.display = "grid";
              setActiveLink("Research");
            }}
            onMouseOut={() => {
              document.getElementById("Research").style.display = "none";
              setActiveLink("");
            }}
          >
            <div className="menu-div">
              <h5 className="menu-head">unit Test Time-table</h5>
              
            </div>
            
            
          </div>
            
          <nav className="mobile-nav"></nav>
        </header>

        {/* <Navbar bg="white" expand="lg" className="nav">
          <Container>
            <Navbar.Brand to="#home">
              <Link to="./" class="charusat">
                CHARUSAT
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link to="#home">Home</Nav.Link>
                <Nav.Link to="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item to="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item to="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item to="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item to="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar> */}
        <Navbar bg="white" expand="lg" className="nav">
          <Container>
            <Navbar.Brand to="#home">
              <Link to="./" className="charusat">
                <img
                  src={logo}
                  alt="CHARUSAT"
                  style={{
                    width: "15rem",
                  }}
                />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown title="Academics" id="basic-nav-dropdown">
                  <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown">
                    Course Module
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item to="https://charuvidya.charusat.ac.in/">
                        
                      </Dropdown.Item>
                      {/* <Dropdown.Item to="http://172.16.11.116/LocalGuru/">
                        NPTEL Resources (Intranet)
                      </Dropdown.Item> */}
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown">
                      Other Programmes
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item to="./certification-courses">
                        Certification & Audit Courses
                      </Dropdown.Item>
                      <Dropdown.Item to="./course-single#GNM">
                        General Nursing & Midwifery (GNM)
                      </Dropdown.Item>
                      <Dropdown.Item to="./course-single#6303">
                        Post Graduation Diploma in Clinical Hypnosis (PGDCH)
                      </Dropdown.Item>
                      <Dropdown.Item to="./course-single#6304">
                        Post Graduation Diploma in Cyber Security (PGDCS)
                      </Dropdown.Item>
                      <Dropdown.Item to="./course-single#PGDMLT">
                        Post Graduation Diploma in Medical Laboratory Technology
                        (PGDMLT)
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown">
                      Undergraduate Studies
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item to="./course-single#1406">
                        B.Tech
                      </Dropdown.Item>
                      <Dropdown.Item to="./course-single#2401">
                        BCA
                      </Dropdown.Item>
                      <Dropdown.Item to="./course-single#2402">
                        B.Sc(IT)
                      </Dropdown.Item>
                      <Dropdown.Item to="./course-single#3401">
                        B.Pharm (Bachelor of Pharmacy)
                      </Dropdown.Item>
                      <Dropdown.Item to="./course-single#4401">
                        BBA
                      </Dropdown.Item>
                      <Dropdown.Item to="./course-single#5401">
                        B.Sc(Biology)
                      </Dropdown.Item>
                      <Dropdown.Item to="./course-single#6401">
                        BPT(Bachelor of Physiotherapy)
                      </Dropdown.Item>
                      <Dropdown.Item to="./course-single#6402">
                        B.Sc(Nursing)
                      </Dropdown.Item>
                      <Dropdown.Item to="./course-single#6405">
                        Bachelor of Optometry (B.Optom)
                      </Dropdown.Item>
                      <Dropdown.Item to="./course-single#6403">
                        B.Sc (Imaging Technology)
                      </Dropdown.Item>
                      <Dropdown.Item to="./course-single#6406">
                        B.Sc (Medical Technnology)
                      </Dropdown.Item>
                      <Dropdown.Item to="./course-single#6404">
                        B.Sc (Operation Theatre & Anesthesia Technology)
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown">
                      Postgraduate Studies
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item to="./course-single#1406">
                        M.Tech
                      </Dropdown.Item>
                      <Dropdown.Item to="./course-single#2501">
                        MCA
                      </Dropdown.Item>
                      <Dropdown.Item to="./course-single#2502">
                        M.Sc(IT)
                      </Dropdown.Item>
                      <Dropdown.Item to="./course-single#3501">
                        M.Pharm
                      </Dropdown.Item>
                      <Dropdown.Item to="./course-single#4501">
                        MBA
                      </Dropdown.Item>
                      <Dropdown.Item to="./course-single#5505">
                        M.Sc (Advanced Organic Chemistry)
                      </Dropdown.Item>
                      <Dropdown.Item to="./course-single#5502">
                        M.Sc (Biochemistry)
                      </Dropdown.Item>
                      <Dropdown.Item to="./course-single#5501">
                        M.Sc (Biotechnology)
                      </Dropdown.Item>
                      <Dropdown.Item to="./course-single#5503">
                        M.Sc (Microbiology)
                      </Dropdown.Item>
                      <Dropdown.Item to="./course-single#5506">
                        M.Sc (Physics)
                      </Dropdown.Item>
                      <Dropdown.Item to="./course-single#6501">
                        MPT (Master of Physiotherapy)
                      </Dropdown.Item>
                      <Dropdown.Item to="./course-single#6510">
                        M.Sc (Nursing)
                      </Dropdown.Item>
                      <Dropdown.Item to="./course-single#6403">
                        M.Sc (Medical Imaging Technology)
                      </Dropdown.Item>
                      <Dropdown.Item to="./course-single#6511">
                        M.Sc (Medical Laboratory Technology)
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown">
                      Ph D Programs
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item to="ph-d-programs">
                        General Information
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown">
                      Information You May Need
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item to="https://charusat.ac.in/Downloads/Academic%20Calenders/">
                        Academic Calender
                      </Dropdown.Item>
                      <Dropdown.Item to="./student-corner">
                        Students' Corner
                      </Dropdown.Item>
                      <Dropdown.Item to="./cdpc">
                        Career Development and Placements
                      </Dropdown.Item>
                      <Dropdown.Item to="./edic">
                        Entrepreneurship and Innovations
                      </Dropdown.Item>
                      <Dropdown.Item to="./student-development-initiatives">
                        Initiatives
                      </Dropdown.Item>
                      <Dropdown.Item to="./library">
                        Knowledge Resource Center
                      </Dropdown.Item>
                      <Dropdown.Item to="./code-of-conduct">
                        Code of Conduct
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </NavDropdown>
                {/*  */}
                <NavDropdown title="Admission" id="basic-nav-dropdown">
                  <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown">
                      National
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item to="https://admission2023.charusat.ac.in/">
                        Apply Now
                      </Dropdown.Item>
                      <Dropdown.Item>
                        Eligibility criteria
                      </Dropdown.Item>
                      <Dropdown.Item to="https://drive.google.com/file/d/1zzlAVorLJXqcde1JAKHlMyBc8sJuvUov/view">
                        Fees
                      </Dropdown.Item>
                      <Dropdown.Item>+91 8905500500</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown">
                      International
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item to="https://admission2023.charusat.ac.in/">
                        Apply Now
                      </Dropdown.Item>
                      <Dropdown.Item >
                        Eligibility criteria
                      </Dropdown.Item>
                      <Dropdown.Item>
                        Fees
                      </Dropdown.Item>
                      <Dropdown.Item>+91 917370164</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown">
                      Other
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item to="https://admission2023.charusat.ac.in/">
                        Admission Login
                      </Dropdown.Item>
                      <Dropdown.Item to="./admission-reprentatives">
                        Have a query? Contact Admission Representative
                      </Dropdown.Item>
                      <Dropdown.Item to="https://charusat.ac.in/files/UGSF%20Application%20form.pdf">
                        Undergraduate Student Fellowship
                      </Dropdown.Item>
                      <Dropdown.Item to="https://charusat.ac.in/documents/pdfs/research/PGSF.pdf">
                        Postgraduate Student Fellowship
                      </Dropdown.Item>
                      <Dropdown.Item to="https://charusat.ac.in/documents/pdfs/research/PDF%20Policy%20CHARUSAT.pdf">
                        Ph. D. Scholars’ Fellowship
                      </Dropdown.Item>
                      <Dropdown.Item to="https://charusat.ac.in/documents/pdfs/research/PDF%20Policy%20CHARUSAT.pdf">
                        Post Doctoral Fellowship Programme
                      </Dropdown.Item>
                      {/* <Dropdown.Item to="https://charusat.ac.in/files/UGSF%20Application%20form.pdf">
                        Need Personal Guidance!!! Talk To us
                      </Dropdown.Item>
                      <Dropdown.Item to="https://charusat.ac.in/documents/pdfs/research/PGSF.pdf">
                        Fellowship
                      </Dropdown.Item> */}
                      <Dropdown.Item to="https://www.charusat.ac.in/admission/scholarship.html">
                        Scholarship
                      </Dropdown.Item>
                      <Dropdown.Item to="./hostels">Hostels</Dropdown.Item>
                      <Dropdown.Item to="./transport">
                        Transportation
                      </Dropdown.Item>
                      {/* <Dropdown.Item to="https://www.charusat.ac.in/admission/scholarship.html">
                        Frequently Asked Questions (FAQs)
                      </Dropdown.Item> */}
                    </Dropdown.Menu>
                  </Dropdown>
                </NavDropdown>

                {/*  */}
                {/* <NavDropdown title="Campus Life" id="basic-nav-dropdown">
                  <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown">
                      Activity & Events
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item to="#/action-2">
                        NCC@CHARUSAT
                      </Dropdown.Item>
                      <Dropdown.Item to="#/action-3">
                        NSS@CHARUSAT
                      </Dropdown.Item>
                      <Dropdown.Item to="#/action-3">
                        Sports & Gym
                      </Dropdown.Item>
                      <Dropdown.Item to="#/action-3">
                        Student Activities & Events
                      </Dropdown.Item>
                      <Dropdown.Item to="#/action-3">
                        Student Clubs
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown">
                      Residences & Amenities
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item to="#/action-2">
                        Girl's Hostel
                      </Dropdown.Item>
                      <Dropdown.Item to="#/action-3">
                        Boy's Hostel
                      </Dropdown.Item>
                      <Dropdown.Item to="#/action-3">
                        Staff Quarters
                      </Dropdown.Item>
                      <Dropdown.Item to="#/action-3">Food</Dropdown.Item>
                      <Dropdown.Item to="#/action-3">
                        Transportation
                      </Dropdown.Item>
                      <Dropdown.Item to="#/action-3">
                        Recreation
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown">
                      Student Helpline
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item to="#/action-2">
                        Helpline Contacts
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </NavDropdown> */}
                {/*  */}
                <NavDropdown title="Research" id="basic-nav-dropdown">
                  <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown">
                      Initiatives
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item to="https://youtu.be/Og4NMqI3q5M">
                        Laboratories
                      </Dropdown.Item>
                      <Dropdown.Item to="https://charusat.ac.in/charusatjournal/">
                        CHARUSAT Journal
                      </Dropdown.Item>
                      <Dropdown.Item to="./edic">
                        Enterpreneurship Development & Incubation Cell (EDIC)
                      </Dropdown.Item>
                      <Dropdown.Item to="http://kradle.charusat.ac.in/">
                        Dr. K. C. Patel Research and Development Centre (KRADLE)
                      </Dropdown.Item>
                      <Dropdown.Item to="https://charusat.irins.org/faculty/index/International+Centre+for+Cosmology+ICC">
                        International Center for Cosmology (ICC)
                      </Dropdown.Item>
                      <Dropdown.Item to="./ipr">IPR Cell</Dropdown.Item>
                      <Dropdown.Item to="./research">
                        Research Facilitation
                      </Dropdown.Item>
                      <Dropdown.Item to="./csrtc">
                        CHARUSAT Space Research Center
                      </Dropdown.Item>
                      <Dropdown.Item to="./IEC">
                        Research Ethics Committee
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown">
                      Policies
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item to="https://charusat.ac.in/documents/pdfs/research/PDF%20Policy%20CHARUSAT.pdf">
                        Post Doctoral Fellowship Programme
                      </Dropdown.Item>
                      <Dropdown.Item to="https://charusat.ac.in/documents/pdfs/research/CPSF.pdf">
                        Ph. D. Scholars’ Fellowship (CPSF)
                      </Dropdown.Item>
                      <Dropdown.Item to="https://charusat.ac.in/documents/pdfs/research/CVSRI.pdf">
                        Visitor Student Research Internship (CVSRI)
                      </Dropdown.Item>
                      <Dropdown.Item to="https://charusat.ac.in/documents/pdfs/research/PGSF.pdf">
                        Postgraduate Student Fellowship (PGSF)
                      </Dropdown.Item>
                      <Dropdown.Item to="https://charusat.ac.in/documents/pdfs/research/PGSF.pdf">
                        SEED Grant for Research
                      </Dropdown.Item>
                      <Dropdown.Item to="https://charusat.ac.in/documents/pdfs/research/1.%20CHARUSAT%20Research%20Policy.pdf">
                        Research
                      </Dropdown.Item>
                      <Dropdown.Item to="https://charusat.ac.in/documents/pdfs/research/8.%20Research%20Paper%20Award%20Policy%202018.pdf">
                        Research Paper Award
                      </Dropdown.Item>
                      <Dropdown.Item to="https://charusat.ac.in/documents/pdfs/research/06.Plagiarism%20Policy.pdf">
                        Plagiarism
                      </Dropdown.Item>
                      <Dropdown.Item to="https://charusat.ac.in/documents/pdfs/research/05.INTELLECTUAL%20PROPERTY%20POLICY.pdf">
                        Patent, IPR and Royalty Sharing
                      </Dropdown.Item>
                      <Dropdown.Item to="https://drive.google.com/file/d/1CzmhA6azuxlWGMwdaJPd6DNIv5e5Vyc9/view?usp=sharing">
                        Consultancy
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown">
                      Outcomes
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item to="./coming-soon">
                        Publications
                      </Dropdown.Item>
                      <Dropdown.Item to="./coming-soon">
                        Project Grants
                      </Dropdown.Item>
                      <Dropdown.Item to="./coming-soon">
                        Patents
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </NavDropdown>
                <NavDropdown title="IQAC" id="basic-nav-dropdown">
                  <Dropdown to="https://iqac.charusat.ac.in/0">IQAC</Dropdown>
                </NavDropdown>
                {/*  */}
                <NavDropdown title="Know CHARUSAT" id="basic-nav-dropdown">
                  <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown">
                      About University
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item to="./mission-vision">
                        Vision
                      </Dropdown.Item>
                      <Dropdown.Item to="./mission-vision">
                        Mission
                      </Dropdown.Item>
                      <Dropdown.Item to="./torchbearers">
                        Torchbearers
                      </Dropdown.Item>
                      <Dropdown.Item to="./about">About</Dropdown.Item>
                      <Dropdown.Item to="./president-desk">
                        From President's Desk
                      </Dropdown.Item>
                      <Dropdown.Item to="./provost-desk">
                        From Provost's Desk
                      </Dropdown.Item>
                      <Dropdown.Item to="./convocations">
                        Convocations
                      </Dropdown.Item>
                      <Dropdown.Item to="./associates">
                        Governing Body
                      </Dropdown.Item>
                      <Dropdown.Item to="./associates">
                        Board of Management
                      </Dropdown.Item>
                      <Dropdown.Item to="./associates">
                        Deans, Principals & Heads
                      </Dropdown.Item>
                      <Dropdown.Item to="./associates">
                        University Officers
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown">
                      Centers & Cells
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item to="./anti-ragging">
                        Anti-Ragging Committee
                      </Dropdown.Item>
                      <Dropdown.Item to="./eoc">
                        Equal Opportunity Cell
                      </Dropdown.Item>
                      {/* <Dropdown.Item to="./ecc">
                        Energy Conservation Cell
                      </Dropdown.Item> */}
                      <Dropdown.Item to="./GRC">
                        Grievance Redressal Cell
                      </Dropdown.Item>
                      <Dropdown.Item to="/edic">
                        Enterpreneurship Development & Incubation Cell
                      </Dropdown.Item>
                      <Dropdown.Item to="./university-industry-interaction-cell">
                        University Industry Interaction Cell
                      </Dropdown.Item>
                      <Dropdown.Item to="./wdc">
                        Womens' Development Cell
                      </Dropdown.Item>
                      <Dropdown.Item to="./hrdc">
                        Pri. B I Patel Human Resource Development Center
                      </Dropdown.Item>
                      <Dropdown.Item to="https://isc.charusat.ac.in/">
                        International Students' Cell
                      </Dropdown.Item>
                      <Dropdown.Item to="./cpsh">
                        Cell for Prevention of Sexual Harassment
                      </Dropdown.Item>
                      <Dropdown.Item to="./CREDP">
                        Charusat Rural Education Development Program
                      </Dropdown.Item>
                      <Dropdown.Item to="./student-wellness-program">
                        Student Wellness Programme
                      </Dropdown.Item>
                      <Dropdown.Item to="./wincell">
                        Data Center @ CHARUSAT - WINCELL
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown">
                      Infrastructure & Resources
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item to="https://youtu.be/Og4NMqI3q5M">
                        Laboratories
                      </Dropdown.Item>
                      <Dropdown.Item to="https://scpit.new.knimbus.com/user#/home">
                        Knowledge Resource Center
                      </Dropdown.Item>
                      <Dropdown.Item to="./coming-soon">
                        Herbal Garden
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown">
                      Others
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item to="./donation">
                        Give & Support
                      </Dropdown.Item>
                      <Dropdown.Item to="https://www.charusat.ac.in/documents-access/">
                        Finance Reports
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link to="./annual-report">Annual Reports</Link>
                      </Dropdown.Item>
                      <Dropdown.Item to="https://charusat.ac.in/Downloads/">
                        Downloads
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
