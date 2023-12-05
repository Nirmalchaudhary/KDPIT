import { Component, useState } from "react";
import img1 from "../assets/images/awsc.webp"
import img2 from "../assets/images/btech.webp"
import img3 from "../assets/images/eb corelone.webp"
import img4 from "../assets/images/pgdcs.webp"
const title = "PROGRAMS AND CLUBS";

const CourseData = [
  {
    imgUrl: img2,
    imgAlt: "CSPIT image",
    cate: "Bachelor Of Technology",
    title:
      "Smt. Kundanben Dinsha Patel Department of Information Technology (Estd. 2000) offers 120 seats in B. Tech. and 15 seats in PGDCS",
    link: "https://www.charusat.ac.in/cspit/",
    author: "assets/images/course/author/01.jpg",
    authorName: "William Smith",
    price: "$199.00",
    id: 1,
  },
  {
    imgUrl: img4,
    imgAlt: "PGDCS image",
    cate: "PGDCS Program",
    title:
      "Post Graduate Diploma in Cyber Security is a one year program offered by CHARUSAT in association with EC-Council. Online based offered program designed by CHARUSAT gives you a full package of five courses included that help you not only grow your career in Cybersecurity but also provide knowledge that most of the experts and professionals have after experiencing the field.",
    link: "https://www.charusat.ac.in/depstar/",
    author: "assets/images/course/author/01.jpg",
    authorName: "William Smith",
    price: "$199.00",
    id: 2,
  },
  {
    imgUrl: img1,
    imgAlt: "AWS image",
    cate: "AWS Student Club",
    title:
      "Together as a Club ASC aims to provide a platform for the intellectuals to learn and explore the Cloud fundamentals of AWS. As a part of the club we assure that every individual gets something productive out of this club. ACS intends to bring developers under one roof to create a community to inspire many. The club will be channeled into propagating learning and teaching symbiotically.",
    link: "https://www.charusat.ac.in/rpcp/",
    author: "assets/images/course/author/02.jpg",
    authorName: "Angel Mili",
    price: "$199.00",
    id: 3,
  },
  {
    imgUrl:img3,
    imgAlt: "EB image",
    cate: "Eager Beavers",
    title:
      "The Eager Beavers is an initiative for the students to brush their soft skills and make them feel bold and confident about themselves. This club intends to engage students into Insightful talks, Fun-filled competitions, Hands-On workshops and varied activities to create a small community of young enthusiast to accomplish their goals as an all rounder personality.",
    link: "https://www.charusat.ac.in/cmpica/",
    author: "assets/images/course/author/03.jpg",
    authorName: "Sajahan Sagor",
    price: "$199.00",
    id: 4,
  },
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
      <div className="container">
        <h2 className="title text-center mb-5 mt-5">{title}</h2>

        <div className="section-wrapper">
          <div className="card-main">
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
                
                  <div class="card" key={id}>
                    <div className="img-container">
                    <img class="card-img-top" src={imgUrl} alt={imgAlt} />
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">{cate}</h5>
                      <p class="card-text">
                       {title}
                      </p>
                    </div>
                  </div>
              
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
