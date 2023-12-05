import React from "react";

import { Link } from "react-router-dom";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../assets/images/clients/1.webp"
import img2 from "../assets/images/clients/2.webp"
import img3 from "../assets/images/clients/3.webp"
import img4 from "../assets/images/clients/4.webp"
import img5 from "../assets/images/clients/5.webp"
import img6 from "../assets/images/clients/6.webp"
import img7 from "../assets/images/clients/7.webp"
import img8 from "../assets/images/clients/8.webp"
import img9 from "../assets/images/clients/9.webp"
import img10 from "../assets/images/clients/10.webp"
import img11 from "../assets/images/clients/11.webp"
import img12 from "../assets/images/clients/12.webp"
import img13 from "../assets/images/clients/13.webp"
import img14 from "../assets/images/clients/14.webp"
import img15 from "../assets/images/clients/15.webp"
import img16 from "../assets/images/clients/16.webp"
import img17 from "../assets/images/clients/17.webp"
import img18 from "../assets/images/clients/18.webp"
import img19 from "../assets/images/clients/19.webp"
const subTitle = "Why Choose Us";
const title = "Recruiters ";

const instructorTopList = [
  {
    imgUrl: "assets/images/instructor/09.jpg",
    imgAlt: "instructor rajibraj91 rajibraj",
    name: "Emilee Logan",
    degi: "Lead Instructor",
    infoList: [
      {
        iconName: "icofont-envelope",
        text: "info@prof.mail.com",
      },
      {
        iconName: "icofont-youtube-play",
        text: "www.youtube.com/prof.ls",
      },
    ],
    socialList: [
      {
        iconName: "icofont-facebook",
        className: "facebook",
        siteLink: "#",
      },
      {
        iconName: "icofont-twitter",
        className: "twitter",
        siteLink: "#",
      },
      {
        iconName: "icofont-linkedin",
        className: "linkedin",
        siteLink: "#",
      },
    ],
  },
  {
    imgUrl: "assets/images/instructor/10.jpg",
    imgAlt: "instructor rajibraj91 rajibraj",
    name: "Angel Mili",
    degi: "Lead Instructor",
    infoList: [
      {
        iconName: "icofont-envelope",
        text: "info@prof.mail.com",
      },
      {
        iconName: "icofont-youtube-play",
        text: "www.youtube.com/prof.ls",
      },
    ],
    socialList: [
      {
        iconName: "icofont-facebook",
        className: "facebook",
        siteLink: "#",
      },
      {
        iconName: "icofont-twitter",
        className: "twitter",
        siteLink: "#",
      },
      {
        iconName: "icofont-linkedin",
        className: "linkedin",
        siteLink: "#",
      },
    ],
  },
];

const instructorBottomList = [
  {
    imgUrl: img1,
    imgAlt: "instructor rajibraj91 rajibraj",
    name: "AICTE",
  },
  {
    imgUrl: img2,
    imgAlt: "instructor rajibraj91 rajibraj",
    name: "AIMST University",
  },
  {
    imgUrl: img3,
    imgAlt: "instructor rajibraj91 rajibraj",
    name: "BHABHA ATOMIC",
  },
  {
    imgUrl: img4,
    imgAlt: "instructor rajibraj91 rajibraj",
    name: "Centre of Envi Education",
  },
  {
    imgUrl: img5,
    imgAlt: "instructor rajibraj91 rajibraj",
    name: "Defence Research Development",
  },
  {
    imgUrl: img6,
    imgAlt: "instructor rajibraj91 rajibraj",
    name: "Dept of BioTech",
  },
  {
    imgUrl: img7,
    imgAlt: "instructor rajibraj91 rajibraj",
    name: "GESIA",
  },
  {
    imgUrl: img8,
    imgAlt: "instructor rajibraj91 rajibraj",
    name: "GUJARAT INST OF DISASTER MGMT",
  },
  {
    imgUrl: img9,
    imgAlt: "instructor rajibraj91 rajibraj",
    name: "GUJCOST",
  },
  {
    imgUrl: img10,
    imgAlt: "instructor rajibraj91 rajibraj",
    name: "HARRISBURG University",
  },
  {
    imgUrl: img11,
    imgAlt: "instructor rajibraj91 rajibraj",
    name: "INESCTEC",
  },
  {
    imgUrl: img12,
    imgAlt: "instructor rajibraj91 rajibraj",
    name: "INST OF PLASMA",
  },
  {
    imgUrl: img13,
    imgAlt: "instructor rajibraj91 rajibraj",
    name: "ISRO",
  },
  {
    imgUrl: img14,
    imgAlt: "instructor rajibraj91 rajibraj",
    name: "KIU",
  },
  {
    imgUrl: img15,
    imgAlt: "instructor rajibraj91 rajibraj",
    name: "L&T PTI",
  },
  {
    imgUrl: img16,
    imgAlt: "instructor rajibraj91 rajibraj",
    name: "MINISTRY OF SCIENCE AND TECH",
  },
  {
    imgUrl: img17,
    imgAlt: "instructor rajibraj91 rajibraj",
    name: "MOTOROLA SOLUTIONS",
  },
  {
    imgUrl: img18,
    imgAlt: "instructor rajibraj91 rajibraj",
    name: "NRS",
  },
  {
    imgUrl: img19,
    imgAlt: "instructor rajibraj91 rajibraj",
    name: "RAE",
  }
];

export default function collaboration() {
  return (
    <div>
      <div className="instructor-section style-3  padding-tb  section-bg-ash mt-5 mb-5">
        <div className="container">
          <div className="section-header text-center">
            {/* <span className="subtitle">University</span> */}
            <h1 className="title">{title}</h1>
          </div>
          <div className="section-wrapper colab">
            {/* <div className="instructor-top">
                        <div className="row g-4 justify-content-center row-cols-1 row-cols-lg-2">
                            {instructorTopList.map((val, i) => (
                                <div className="col" key={i}>
                                    <div className="instructor-item style-2">
                                        <div className="instructor-inner">
                                            <div className="instructor-thumb">
                                                <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                            </div>
                                            <div className="instructor-content">
                                                <Link to="/team-single"><h4>{val.name}</h4></Link>
                                                <span className="d-block">{val.degi}</span>
                                                <ul className="lab-ul ins-info">
                                                    {val.infoList.map((val, i) => (
                                                        <li key={i}><i className={val.iconName}></i> {val.text}</li>
                                                    ))}
                                                </ul>
                                                <ul className="lab-ul social-icons">
                                                    {val.socialList.map((val, i) => (
                                                        <li key={i}>
                                                            <a href={val.siteLink} className={val.className}><i className={val.iconName}></i></a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div> */}
            <div className="instructor-bottom">
              <div className="instructor-slider overflow-hidden">
                <div className="instructor-navi instructor-slider-next">
                  <i className="icofont-rounded-double-right"></i>
                </div>
                <div className="instructor-navi instructor-slider-prev">
                  <i className="icofont-rounded-double-left"></i>
                </div>
                <Swiper
                  spaceBetween={0}
                  slidesPerView={2}
                  loop={"true"}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  navigation={{
                    prevEl: ".instructor-slider-prev",
                    nextEl: ".instructor-slider-next",
                  }}
                  modules={[Autoplay, Navigation]}
                  breakpoints={{
                    0: {
                      width: 0,
                      slidesPerView: 1,
                    },
                    768: {
                      width: 768,
                      slidesPerView: 3,
                    },
                    1200: {
                      width: 1200,
                      slidesPerView: 5,
                    },
                  }}
                >
                  {instructorBottomList.map((val, i) => (
                    <SwiperSlide key={i}>
                      <div className="instructor-item">
                        <div className="instructor-inner">
                          <div className="instructor-thumb">
                            <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                          </div>
                          {/* <div className="instructor-content">
                                                    <Link to="/team-single"><h5>{val.name}</h5></Link>
                                                    <span className="d-block">{val.degi}</span>
                                                </div> */}
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
