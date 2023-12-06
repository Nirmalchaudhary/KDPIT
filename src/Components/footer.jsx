import { Link } from "react-router-dom";
import GoogleMap from "./googlemap";

const title = "Contact Us";
//const desc =  "Eduaid theme numb  er one world class university in the world There are student are studing always in this university for all time.";
// const courseTitle = "Courses";
const quickTitle = "Quick Links";
const googleMapTitle = "Map";
// const tweetTitle = "Recent Tweets";
const year = new Date().getFullYear();

const addressList = [
  {
    iconName: "icofont-google-map",
    text: "Smt. Kundanben Dinsha Patel Department of Information Technology Charotar University of Science and Technology,CHARUSAT Campus, Changa Taluka: Petlad, Dist: Anand Gujarat (India) 388 421",
  },
  {
    iconName: "icofont-phone",
    text: "+91 2697 265011/12",
  },
  {
    iconName: "icofont-envelope",
    text: "info@charusat.ac.in",
  },
];

const socialList = [
  {
    iconName: "icofont-facebook",
    siteLink: "https://www.facebook.com/thecharusat/",
    className: "facebook",
  },
  {
    iconName: "icofont-twitter",
    siteLink: "https://twitter.com/thecharusat?lang=en",
    className: "twitter",
  },
  {
    iconName: "icofont-linkedin",
    siteLink:
      "https://www.linkedin.com/school/charotar-university-of-science-&-technology-charusat-",
    className: "linkedin",
  },
  {
    iconName: "icofont-instagram",
    siteLink: "https://www.instagram.com/thecharusat/?hl=en",
    className: "instagram",
  },
  // {
  //     iconName: 'icofont-pinterest',
  //     siteLink: '#',
  //     className: 'pinterest',
  // },
];

// const courseList = [
//   {
//     text: "All Courses",
//     link: "#",
//   },
//   {
//     text: "Forms and Admision materials",
//     link: "#",
//   },
//   {
//     text: "Professional Courses",
//     link: "#",
//   },
//   {
//     text: "Course Outline",
//     link: "#",
//   },
//   {
//     text: "Policy",
//     link: "#",
//   },
//   {
//     text: "FAQs",
//     link: "#",
//   },
//   {
//     text: "Online Course",
//     link: "#",
//   },
// ];
const quickList = [
  {
    text: "Exam Result",
    link: "https://charusat.edu.in:912/Uniexamresult/",
  },
  {
    text: "Pay Fees",
    link: "https://charusat.edu.in:912/FeesPaymentApp/",
  },
  {
    text: "Admissions",
    link: "https://charusat.ac.in/admission/",
  },
  {
    text: "Downloads",
    link: "https://charusat.ac.in/Downloads/",
  },
  {
    text: "Careers",
    link: "./careers",
  },
  {
    text: "Alumni Portal",
    link: "https://charusatalumni.org/",
  },
  {
    text: "Donations",
    link: "./donation",
  },
  {
    text: "The Act & First Statutes",
  }
];

const policies = [
  {
    text: "Policies and Procedures - Support Facilities",
    link: "./policies_terms",
  },
  {
    text: "Code of Conduct",
    link: "./code-of-conduct",
  }
]

const footerbottomList = [
  {
    text: "Last Updated:",
    link: "#",
  },
];

const FooterThree = () => {
  return (
    <>
      <div className="news-footer-wrap grdnt-bg-custom">
        {/* <div className="fs-shape">
          <img
            src="assets/images/shape-img/03.png"
            alt="fst"
            className="fst-1"
          />
          <img
            src="assets/images/shape-img/04.png"
            alt="fst"
            className="fst-2"
          />
        </div> */}

        <footer className="style-2 mt-5">
          <div className="footer-top  padding-tb" style={{padding: "auto"}}>
            <div className="container">
              <div className="row g-4 row-cols-xl-3 row-cols-sm-2 row-cols-1 justify-content-center">
                <div className="col">
                  <div className="footer-item our-address w-5">
                    <div className="footer-inner">
                    
                      <div className="footer-content">
                      <div className="title footer-title" style={{marginBottom: "20px"}}>
                          <h4 style={{ color: "#fff", marginLeft: "3.6rem"}}>{title}</h4>
                        </div>
                        <div className="content">
                          {/* <p>{desc}</p> */}
                          <ul className="lab-ul office-address" style={{marginTop: "2rem", textAlign: "justify" }}>
                            {addressList.map((val, i) => (
                              <li key={i} style={{ color: "#fff"}}>
                                {val.iconName === 'icofont-phone' ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-telephone phone" viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" style={{paddingRight: "1px"}} />
</svg> : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="mail bi bi-envelope-at" viewBox="0 0 16 16">
  <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z"/>
  <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/>
</svg>}<i
                                  className={val.iconName}
                                  style={{ color: "#fff" }}
                                ></i>
                                {val.text}
                              </li>
                            ))}
                          </ul>
                          <ul className="lab-ul social-icons">
                            {socialList.map((val, i) => (
                              <li key={i}>
                                <a
                                  href={val.siteLink}
                                  className={val.className}
                                >
                                  <i className={val.iconName}></i>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="footer-item quick_links">
                    <div className="footer-inner">
                      <div className="footer-content">
                        <div className="title">
                          <h4 style={{ color: "#fff" }}>{quickTitle}</h4>
                        </div>
                        <div className="content">
                          <ul className="lab-ul">
                            {quickList.map((val, i) => (
                              <li key={i}>
                                <a href={val.link} style={{ color: "#fff" }}>
                                  {val.text}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="footer-item twitter-post">
                    <div className="footer-inner">
                      <div className="footer-content googlemap">
                        <div className="title">
                          <h4 style={{ color: "#fff" }}>{googleMapTitle}</h4>
                        </div>
                        <div
                          className="content"
                          style={{ width: "80px !important;" }}
                        >
                          <ul className="lab-ul">
                          <GoogleMap />
                          <br />
                          <br />
                          {
                            policies.map((val, i) => {
                              return (
                                <li key={i}>
                                  <a href={val.link} style={{ color: "#fff" }}>
                                    {val.text}
                                  </a>
                                </li>
                              )
                            })
                          }
                          </ul>
                        </div>
                      </div>
                    </div>
                    <ul className="lab-ul">
                    <li style={{ color: "#fff", fontSize:"15px"}}>
                              NAD/ABC Videos --
                              <br />
                              <a
                                href="https://charusat-aqar.s3.ap-south-1.amazonaws.com/charusat/nad/1.mp4"
                                target="_blank"
                                style={{ color: "#fff" }}
                              >
                                1
                              </a>{" "}
                              <a
                                href="https://charusat-aqar.s3.ap-south-1.amazonaws.com/charusat/nad/2.mp4"
                                target="_blank"
                                style={{ color: "#fff" }}
                              >
                                2
                              </a>{" "}
                              <a
                                href="https://charusat-aqar.s3.ap-south-1.amazonaws.com/charusat/nad/3.mp4"
                                target="_blank"
                                style={{ color: "#fff" }}
                              >
                                3
                              </a>{" "}
                              <a
                                href="https://charusat-aqar.s3.ap-south-1.amazonaws.com/charusat/nad/4.mp4"
                                target="_blank"
                                style={{ color: "#fff" }}
                              >
                                4
                              </a>{" "}
                            </li>
                            </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="section-wrapper">
                <p className="text-center">
                <Link to="/">K D P I T</Link> &copy; {year}. All Rights Received. {" "}
                </p>
                {/* <div className="footer-bottom-list">
                  {footerbottomList.map((val, i) => (
                    <a href={val.link} key={i} target="_blank" rel="noreferrer">
                      {val.text}
                    </a>
                  ))}
                </div> */}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default FooterThree;
