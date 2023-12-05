import { Fragment } from "react";
// import Footer from "../component/layout/footer-3";
import About from "../Components/about";
// import NewsFrontPage from "../component/section/newsFrontPage";
import Banner from "../Components/banner";
// import Sponsor from "../component/section/sponsor";
import AchievementThree from "../Components/achievement";
import ClientsThree from "../Components/clients";
import Faculties from "../Components/Faculties";
import Collaboration from "../Components/collaboration";
// import Goals from "../component/section/goals";
// import Messages from "../component/section/messages";
// import Intiatives from "../component/section/initiatives";
// import Placement from "../component/section/palcement";
// import Instructor from "../component/section/instructor";
// import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <Fragment>
      {/* <a href="https://eequeuestorage.blob.core.windows.net/staticfiles/charusat/ee-form-widget/form-2/charusatEnq.html"></a>

      <script src="https://eequeuestorage.blob.core.windows.net/staticfiles/charusat/ee-form-widget/form-2/widget.js"></script> */}
       <Banner />
      <About />
      {/* <NewsFrontPage /> */}
      {/* <Messages /> */}
       <Faculties />
      {/*<Intiatives /> */}
      {/* <Goals /> */}
      {/* <Instructor /> */}
       
      <AchievementThree />
      <Collaboration />
      {/* <Achievement2/> */}
      {/* <Event /> */}
      {/* <Publication/> */}
      {/* <Blog />            
            <Clients /> */}
      <ClientsThree />
      {/* <Feature />
            <Category />
            <Course />
            <CourseFour />
            <Instructor />
            <ClientsThree />
            <Student />
            <Achievement />
            <AboutTwo /> */}
      {/* <Placement/> */}
      {/* <Sponsor /> */}
      {/* <Contact/> */}
      {/* <Footer /> */}
    </Fragment>
  );
};

export default Home;
