import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './helper/ScrollToTop';
import { GlobalStyle } from "./components/common/styles/global.js";
import Home from './Home.js';
import Hospital from './pages/hospital/Hospital.js';
import About from './pages/about/About';
import Course from './pages/courses/CourseGrid.js';
import CourseDetails from './pages/courses/CourseDetails';
import InstructorDetails from './pages/instructor/InstructorDetails';
import Gallery from './pages/gallery/Gallery';
import Events from './pages/events/Events';
import EventDetails from './pages/events/EventsDetails';
import Login from './pages/account/Login';
import Register from './pages/account/Register';
import Contact from './pages/contact/Contact';
import Faq from './pages/faq/Faq';
import Facilities from './pages/blog/Facilities.js';
import FacilitiesDetails from './pages/blog/FacilitiesDetails.js';

function App() {
    return (
        <Router>
            <GlobalStyle />
            <ScrollToTop />
            <Switch>
                <Route exact path={`${process.env.PUBLIC_URL + "/"}`} component={Home} />
                <Route path={`${process.env.PUBLIC_URL + "/about"}`} component={About} />
                <Route path={`${process.env.PUBLIC_URL + "/course"}`} component={Course} />
                <Route path={`${process.env.PUBLIC_URL + "/course-details"}`} component={CourseDetails} />
                <Route path={`${process.env.PUBLIC_URL + "/instructor-details"}`} component={InstructorDetails} />
                <Route path={`${process.env.PUBLIC_URL + "/facilites"}`} component={Facilities} />
                <Route path={`${process.env.PUBLIC_URL + "/facilities-details"}`} component={FacilitiesDetails} />
                <Route path={`${process.env.PUBLIC_URL + "/hospital"}`} component={Hospital} />
                <Route path={`${process.env.PUBLIC_URL + "/gallery"}`} component={Gallery} />
                <Route path={`${process.env.PUBLIC_URL + "/events"}`} component={Events} />
                <Route path={`${process.env.PUBLIC_URL + "/event-details"}`} component={EventDetails} />
                <Route path={`${process.env.PUBLIC_URL + "/login"}`} component={Login} />
                <Route path={`${process.env.PUBLIC_URL + "/registration"}`} component={Register} />
                <Route path={`${process.env.PUBLIC_URL + "/contact"}`} component={Contact} />
                <Route path={`${process.env.PUBLIC_URL + "/faq"}`} component={Faq} />
            </Switch>
        </Router>
    )
}

export default App;