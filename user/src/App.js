import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Global Styles & Helpers
import { GlobalStyle } from "./components/common/styles/global.js";
import ScrollToTop from "./helper/ScrollToTop";

// Pages
import Home from "./Home";
import About from "./pages/about/About";
import Course from "./pages/courses/CourseGrid";
import CourseDetails from "./pages/courses/CourseDetails";
import InstructorDetails from "./pages/instructor/InstructorDetails";
import Facilities from "./pages/blog/Facilities";
import FacilitiesDetails from "./pages/blog/FacilitiesDetails";
import Hospital from "./pages/hospital/Hospital";
import Gallery from "./pages/gallery/Gallery";
import GalleryDetails from "./pages/gallery/GalleryDetails";
import Events from "./pages/events/Events";
import EventDetails from "./pages/events/EventsDetails";
import Login from "./pages/account/Login";
import Register from "./pages/account/Register";
import Contact from "./pages/contact/Contact";
import Faq from "./pages/faq/Faq";

function App() {
  const base = process.env.PUBLIC_URL;

  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Switch>

        {/* Home */}
        <Route exact path={`${base}/`} component={Home} />

        {/* Static Pages */}
        <Route path={`${base}/about`} component={About} />
        <Route path={`${base}/hospital`} component={Hospital} />
        <Route path={`${base}/gallery`} component={Gallery} />
        <Route path={`${base}/events`} component={Events} />
        <Route path={`${base}/event-details`} component={EventDetails} />
        <Route path={`${base}/login`} component={Login} />
        <Route path={`${base}/registration`} component={Register} />
        <Route path={`${base}/contact`} component={Contact} />
        <Route path={`${base}/faq`} component={Faq} />

        {/* Courses */}
        <Route path={`${base}/courses`} component={Course} />
        <Route path={`${base}/course-details/:id`} component={CourseDetails} />

        {/* Instructors */}
        <Route path={`${base}/instructor-details/:id`} component={InstructorDetails} />

        {/* Facilities */}
        <Route path={`${base}/facilities`} component={Facilities} />
        <Route path={`${base}/facilities-details/:id`} component={FacilitiesDetails} />

        {/* Gallery Details */}
        <Route path={`${base}/gallery-details/:id`} component={GalleryDetails} />

      </Switch>
    </Router>
  );
}

export default App;
