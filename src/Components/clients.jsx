import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from '../assets/images/testimonial-1.webp'
import img2 from '../assets/images/testimonial-2.webp'
import img3 from '../assets/images/testimonial-4.webp'
import img4 from '../assets/images/testimonial-5.webp'

const subTitle = "Testimonials";
const title = "What People Say";
const absTitle = "Testimonials";

const clientSliderList = [
  {
    imgUrl: img3,
    imgAlt: "education thumb rajibraj91 rajibraj",
    iconNane: "icofont-quote-left",
    desc: " I had joined a very early batch of BEIT program in 2002, still in the nascent stage worrying about how this new institute will fare among all other older and experienced ones. Surprisingly, with well equipped Computer workshops and very young and dynamic teaching staff, we were at par and sometimes better than most of the well established institutions in Gujarat.",
    name: "Thomas Mathews",
    degi: "Manager Sales,Paytm ",
  },
  {
    imgUrl: img1,
    imgAlt: "education thumb rajibraj91 rajibraj",
    iconNane: "icofont-quote-left",
    desc: " Charusat by providing various facilities to the students has proved that it is not only being study oriented university. The counselling batches assigned to the respective faculties has been an initiative that has helped the students at various points in their college life. Along with the platforms that it provides to enhance the co-curricular skills is pretty good.",
    name: "Ila Poker",
    degi: "Parent Of Jenisha Poker",
  },
  {
    imgUrl: img4,
    imgAlt: "education thumb rajibraj91 rajibraj",
    iconNane: "icofont-quote-left",
    desc: " It was a great experience interacting with faculty members. I have learned so much during my bachelor's studies at CSPIT that it was an honor for me to be able to contribute as an alumnus.",
    name: "Jimmy Dani",
    degi: "13IT019",
  },
  {
    imgUrl: img2,
    imgAlt: "education thumb rajibraj91 rajibraj",
    iconNane: "icofont-quote-left",
    desc: "IT Department provides perfect platform for the students to scan, search and work over their ideas with the best support and guidance provided by the faculty members. Students are also acknowledged with all the upcoming technologies used and are also taught to use them which trains them for their challenging and bright future.",
    name: "Meet Shah",
    degi: "15IT126",
  },
];

const ClientsThree = () => {
  return (
    <div className="clients-section style-3 padding-tb">
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle sub-test">{subTitle}</span>
          <h2 className="title mt-3">{title}</h2>
          {/* <h2 className="abs-title">{absTitle}</h2> */}
        </div>
        <div className="section-wrapper">
          <div className="clients-slider2 overflow-hidden">
            <Swiper
              loop={"true"}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              navigation={{
                prevEl: ".clients-slider2-prev",
                nextEl: ".clients-slider2-next",
              }}
              modules={[Autoplay, Navigation]}
            >
              {clientSliderList.map((val, i) => (
                <SwiperSlide key={i}>
                  <div className="client-item">
                    <div className="client-inner">
                      <div className="_client-thumb">
                        <img
                          style={{ height: "250px", borderRadius: "100%" }}
                          src={`${val.imgUrl}`}
                          alt={`${val.imgAlt}`}
                        />
                        <div className="quote">
                          <i className={val.iconNane}></i>
                        </div>
                      </div>
                      <div className="client-content">
                        <p>{val.desc}</p>
                      </div>
                      <div className="client-info">
                        <div className="client-in">
                          <h5 className="client-name">{val.name}</h5>
                          <span className="client-degi">{val.degi}</span>
                        </div>
                        </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="clients-slider-nav clients-slider2-next">
              <i className="icofont-double-left"></i>
            </div>
            <div className="clients-slider-nav clients-slider2-prev">
              <i className="icofont-double-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsThree;
