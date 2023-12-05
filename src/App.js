import { BrowserRouter, Routes, Route } from "react-router-dom";
import "swiper/css";

import ScrollToTop from "./Components/ScrollToTop";
// import ErrorPage from "./Page/404";
import Home from "./Pages/Home";

import Header from "./Components/header";
// import UndergraduateCourses from "./page/undergraduateCourses";
// import PostgraduateCourses from "./page/postgraduateCourses";
// import Footer from "./component/layout/footer-3";
// import Transport from "./page/transport";
// import IPR from "./page/ipr";
// import Wincell from "./page/wincell";
// import CSRTC from "./page/csrtc";
// import Hostels from "./page/hostels";
// import Admission_Reprentatives from "./page/admission_reprentatives";

// import Certification_Courses from "./page/certification_courses";
// import Campus_Map from "./page/campus-map";
// import Careers from "./page/careers";
// import Convocations from "./page/convocations";
// import CodeOfConduct from "./page/code-of-conduct";
// import PoliciesTerms from "./page/policiesTerms";
// import Library from "./page/library";
// import Placement from "./page/placement";
// import Donation from "./page/donation";
// import Scholarship from "./page/Scholarship";
// import AnnualReport from "./page/annual-report";
/*
import HomeTwo from "./page/home-2";
import HomeThree from "./page/home-3";
import HomeFour from "./page/home-4";
import HomeFive from "./page/home-5";
import HomeSix from "./page/home-6";
import HomeSeven from "./page/home-7";
import InstructorPage from "./page/instructor";
import LoginPage from "./page/login";
import SearchNone from "./page/search-none";
import SearchPage from "./page/search-page";
import ShopPage from "./page/shop";
import ShopDetails from "./page/shop-single";
import SignupPage from "./page/signup";
import TeamPage from "./page/team";
import TeamSingle from "./page/team-single";
*/

// import Home_Final from "./page/home";
// import About_us from "./page/About_us";
// import UndergraduateCourses from "./page/undergraduateCourses";
// import PostgraduateCourses from "./page/postgraduateCourses";
import Footer from "./Components/footer";
// import Transport from "./page/transport";
// import AboutUs from "./page/About_us";
// import ProvostDesk from "./page/Provost-desk";
// import PresidentDesk from "./page/President-desk";
// import People from "./page/People";
// // import Footer from "./component/layout/footer-3";
// import CDPC from "./page/cdpc";
// import Ethics from "./page/ethics";
// import Accreditation from "./page/Accreditation";
// import ResearchPage from "./page/research";
// import ContactUs from "./page/contact_us";
// import SDI from "./page/SDI";
// import WellnessProgram from "./page/wellnessProgram";
// import Course from "./page/course-single";
// import Announcements from "./page/announcements";
// import UpcomingEvents from "./page/upcoming-events";
// import ComingSoon from "./page/ComingSoon";
// import Edic from "./page/edic";
// import StudentCorner from "./page/student-corner";
// import PhDPrograms from "./page/ph-d-programs";
// import AnnualReport from "./page/annual-report";

import { Helmet } from "react-helmet";

// import UIIC from "./page/UIIC";

// import AntiRagging from "./page/AntiRagging";
// import GRC from "./page/GRC";
// import CREDP from "./page/CREDP";
// import HRDC from "./page/HRDC";
// import CPSH from "./page/CPSH";

// import ECC from "./page/ECC";
// import EOC from "./page/EOC";
// import WDC from "./page/WDC";
// import DvvClarifications from "./page/dvv_clarifications";
// import IEC from "./page/IEC";
// import VisionMission from "./component/section/Vision_Mission";
// import Torchbearers from "./component/section/Torchbearers";

function App() {
  // const basename = document.querySelector('base')?.getAttribute('href') ?? '/'    ;

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
