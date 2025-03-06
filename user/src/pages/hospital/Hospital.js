import React, { Component } from 'react';
import HeaderTwo from '../../components/common/Header';
import HeroImage from './components/HeroImage';
import ServiceBox from './components/ServiceBox';
import AboutUsHospital from './components/AboutUsHospital';
import CourseSlider from './components/hospitalSlider';
import NumberCounter from './components/NumberCounter';
import ImageGallery from './components/ImageGallery';
import FooterTwo from '../../components/FooterTwo';

export default class Hospital extends Component {
    render() {
        return (
            <div className="main-wrapper">

                {/* Header 2 */}
                <HeaderTwo />

                {/* Hero Image */}
                <HeroImage />

                {/* Service Box */}
                <ServiceBox />

                {/* About Us 2 */}
                <AboutUsHospital />

                {/* Course Slider */}
                <CourseSlider />

                {/* Counter Area */}
                <NumberCounter />

                {/* Image Gallery Area */}
                <ImageGallery />

                {/* Footer 2 */}
                <FooterTwo />

            </div>
        )
    }
}
