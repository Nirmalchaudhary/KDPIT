import { Component, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "../sidebar/rating";

const title = "PROGRAMS AND CLUBS";

const CourseData = [
  {
    imgUrl: "assets/images/institute/CSPIT.jpg",
    imgAlt: "CSPIT image",
    cate: "Bachelor Of Technology",
    title: "Smt. Kundanben Dinsha Patel Department of Information Technology (Estd. 2000) offers 120 seats in B. Tech. and 15 seats in PGDCS",
    link: "https://www.charusat.ac.in/cspit/",
    author: "assets/images/course/author/01.jpg",
    authorName: "William Smith",
    price: "$199.00",
    id: 1,
  },
  {
    imgUrl: "assets/images/institute/DEPSTAR.jpg",
    imgAlt: "Depstar image",
    cate: "PGDCS Program",
    title: "Post Graduate Diploma in Cyber Security is a one year program offered by CHARUSAT in association with EC-Council. Online based offered program designed by CHARUSAT gives you a full package of five courses included that help you not only grow your career in Cybersecurity but also provide knowledge that most of the experts and professionals have after experiencing the field.",
    link: "https://www.charusat.ac.in/depstar/",
    author: "assets/images/course/author/01.jpg",
    authorName: "William Smith",
    price: "$199.00",
    id: 2,
  },
  {
    imgUrl: "assets/images/institute/RPCP.jpg",
    imgAlt: "RPCP image",
    cate: "AWS Student Club",
    title: "Together as a Club ASC aims to provide a platform for the intellectuals to learn and explore the Cloud fundamentals of AWS. As a part of the club we assure that every individual gets something productive out of this club. ACS intends to bring developers under one roof to create a community to inspire many. The club will be channeled into propagating learning and teaching symbiotically.",
    link: "https://www.charusat.ac.in/rpcp/",
    author: "assets/images/course/author/02.jpg",
    authorName: "Angel Mili",
    price: "$199.00",
    id: 3,
  },
  {
    imgUrl: "assets/images/institute/CMPICA.jpg",
    imgAlt: "CMPICA image",
    cate: "Eager Beavers",
    title: "The Eager Beavers is an initiative for the students to brush their soft skills and make them feel bold and confident about themselves. This club intends to engage students into Insightful talks, Fun-filled competitions, Hands-On workshops and varied activities to create a small community of young enthusiast to accomplish their goals as an all rounder personality.",
    link: "https://www.charusat.ac.in/cmpica/",
    author: "assets/images/course/author/03.jpg",
    authorName: "Sajahan Sagor",
    price: "$199.00",
    id: 4,
  }
];

export default function Faculties() {
  const [items, setItems] = useState(CourseData);
  const filterItem = (categItem) => {
    const updateItems = CourseData.filter((curElem) => {
      return curElem.cate === categItem;
    });
    setItems(updateItems);
  };

  const imageStyle = {
    height: "200px",
    objectFit: "cover",
    width: "100%",
  };

  return (
    <div className="course-section style-3 padding-tb">
      <div className="course-shape one">
        <img src="assets/images/shape-img/icon/01.png" alt="education" />
      </div>
      <div className="course-shape two">
        <img src="assets/images/shape-img/icon/02.png" alt="education" />
      </div>
      <div className="container">
        <h2 className="title text-center mb-5">{title}</h2>
       
        <div className="section-wrapper">
          <div className="row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 course-filter">
            {items.map((elem) => {
              const {
                id,
                imgUrl,
                imgAlt,
                cate,
                title,
                link,
                author,
                authorName,
                price,
              } = elem;
              return (
                <a href={link} target="_blank">
                  <div className="col" key={id}>
                    <div className="course-item style-4">
                      <div className="course-inner">
                        <div className="course-thumb">
                          <img src={imgUrl} alt={imgAlt} style={imageStyle} />
                          <div className="course-category">
                            <div
                              className="course-cate"
                              style={{
                                height: "68px",
                              }}
                            >
                              <a href="#">{cate}</a>
                              
                            </div>
                            {/* <div className="course-reiew">
                                                        <Rating />
                                                    </div> */}
                          </div>
                        </div>
                        <div className="course-content">
                          <h8>{title}</h8>

                          {/* <div className="course-footer">
                                                    <div className="course-author">
                                                        <img src={author} alt={imgAlt} />
                                                        <Link to="/team-single" className="ca-name">{authorName}</Link>
                                                    </div>
                                                    <div className="course-price">{price}</div>
                                                </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
