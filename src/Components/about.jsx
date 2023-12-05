import Iframe from "react-iframe";
import { Link } from "react-router-dom";
import img1 from "../assets/images/about/icon/01.jpg"
import img2 from "../assets/images/about/icon/02.jpg"
import img3 from "../assets/images/about/icon/03.jpg"
import img4 from "../assets/images/about/faculty.jpg"

const subTitle = "Smt. Kundanben Dinsha Patel Department of Information Technology";
const title = "|| अमृतं तु विद्या ||";
const desc =
  "CHARUSAT offers various programs, viz., UG, PG, Doctoral, Post-Doctoral, Diploma, Value-added and Executive Development Programs under the tutelage of 9 Institutes, 6 Faculties, and various Centers / Cells.";
//  An employee strength of 600, student strength of more than 8000 and a Capital Outlay of INR 150 Crores are the scalar dimensions of CHARUSAT. The programs are offered in the allied disciplines of Technology & Engineering, Pharmacy, Computer Applications, Management Studies, Applied Sciences, Nursing, Physiotherapy, and other Paramedical Sciences."
// "The Iron Man of India, Sardar Vallabhbhai Patel believed, “Education without character is futile”. CHARUSAT proudly follows this spirit. It also follows founding High Moral Values like Honesty, Integrity, Transparency, Fairness, Equity, and Accountability.";

const desc2 =
  "CHARUSAT offers various programs, viz., UG, PG, Doctoral, Post-Doctoral, Diploma, Value-added and Executive Development Programs under the tutelage of 9 Institutes, 6 Faculties, and various Centers / Cells. An employee strength of 600, student strength of more than 8000 and a Capital Outlay of INR 150 Crores are the scalar dimensions of CHARUSAT. The programs are offered in the allied disciplines of Technology & Engineering, Pharmacy, Computer Applications, Management Studies, Applied Sciences, Nursing, Physiotherapy, and other Paramedical Sciences.";

const aboutList = [
  {
    imgUrl: img1,
    imgAlt: "about icon rajibraj91 rajibraj",
    title: "Skilled Instructors",
    desc: "Experienced Faculties",
  },
  {
    imgUrl: img2,
    imgAlt: "about icon rajibraj91 rajibraj",
    title: "Get Certificate",
    desc: "Continuous Evaluation and Collaborative Learning Environment",
  },
  {
    imgUrl: img3,
    imgAlt: "about icon rajibraj91 rajibraj",
    title: "Online Classes",
    desc: "Academic Engagement Through MOOC Coursera, Nptel.",
  },
  {
    imgUrl: img2,
    imgAlt: "about icon rajibraj91 rajibraj",
    title: "Get Certificate",
    desc: "Excellent Placement Pecord and Pre-Placement Orientation Activity",
  },
  {
    imgUrl: img3,
    imgAlt: "about icon rajibraj91 rajibraj",
    title: "Online Classes",
    desc: "Intense Use Of Learning Management Software",
  },
];

const About = () => {
  return (
    <div className="about-section ">
      <br />
      <br />
      <div className="container">
        <p
          className="text-center subtitle "
          style={{ fontSize: "1rem", color: "#f16126" }}
        >
          {title}
        </p>
        <h2 className="title text-center">
          {subTitle}&nbsp; {"   "}
          {/* <i style={{ color: "#f16126" }}>NAAC A+</i> */}
        </h2>

        <div className="row justify-content-center row-cols-xl-2 row-cols-1 align-items-end flex-row-reverse">
          <div className="col">
            <div className="about-right ">
              <div className="section-header">
                {/* <span className="subtitle" style={{fontWeight:'bold'}}>{subTitle}</span> */}

                {/* <h2 className="title">{title}</h2> */}

                {/* <p >{desc}</p> */}

                {/* <br />
                <br />
                <p style={{fontWeight:'bold'}}>{desc2}</p> */}
              </div>
              <div className="section-wrapper">
                <ul className="lab-ul">
                  {aboutList.map((val, i) => (
                    <li key={i}>
                      <div className="sr-left">
                        <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                      </div>
                      <div className="sr-right">
                        <h5>{val.desc}</h5>

                        {/* <p>{val.desc}</p> */}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="about-left">
              <div className="about-thumb">
                <img src={img4} alt="about" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      {/*  */}
      <div className="student-feedbak-section padding-tb shape-img video1">
        <div className="container video-header">

          <div className="section-header text-center">
            <span className="subtitle">&nbsp;</span>
            <div className="shape1"></div>

            <h2 className="title title1">CSPIT IT</h2>
          </div>
          <div className="section-wrapper">
            <div className="row justify-content-center">
              <div className="col">
                
                <div className="sf-left">
                  <div className="sfl-thumb video-main" style={{ overflow: "hidden" }}>
                    <Iframe
                    className="videoit"
                      overflow="hidden"
                      styles={{
                        aspectRatio: "16/9",
                        width: "100%",
                      }}
                      src="https://www.youtube.com/embed/GF2gsufQ1yk"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default About;
