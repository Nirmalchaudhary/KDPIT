import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const subTitle = "Testimonials";
const title = "What People Say";
const absTitle = "Testimonials";

const clientSliderList = [
  {
    imgUrl: "assets1/img/testimonial/testimonial-4.webp",
    imgAlt: "education thumb rajibraj91 rajibraj",
    iconNane: "icofont-quote-left",
    desc: " I had joined a very early batch of BEIT program in 2002, still in the nascent stage worrying about how this new institute will fare among all other older and experienced ones. Surprisingly, with well equipped Computer workshops and very young and dynamic teaching staff, we were at par and sometimes better than most of the well established institutions in Gujarat.",
    name: "Thomas Mathews",
    degi: "Manager Sales,Paytm ",
  },
  {
    imgUrl: "assets1/img/testimonial/testimonial-1.webp",
    imgAlt: "education thumb rajibraj91 rajibraj",
    iconNane: "icofont-quote-left",
    desc: " Charusat by providing various facilities to the students has proved that it is not only being study oriented university. The counselling batches assigned to the respective faculties has been an initiative that has helped the students at various points in their college life. Along with the platforms that it provides to enhance the co-curricular skills is pretty good.",
    name: "Ila Poker",
    degi: "Parent Of Jenisha Poker",
  },
  {
    imgUrl: "assets1/img/testimonial/testimonial-5.webp",
    imgAlt: "education thumb rajibraj91 rajibraj",
    iconNane: "icofont-quote-left",
    desc: " It was a great experience interacting with faculty members. I have learned so much during my bachelor's studies at CSPIT that it was an honor for me to be able to contribute as an alumnus.",
    name: "Jimmy Dani",
    degi: "13IT019",
  },
  {
    imgUrl: "assets1/img/testimonial/testimonial-2.webp",
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
          <span className="subtitle ">{subTitle}</span>
          <h2 className="title">{title}</h2>
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
                        <div className="client-info">
                          <h6 className="client-name">{val.name}</h6>
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
