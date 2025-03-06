import React, { Component } from 'react';
import HeroSlider from './components/Home/components/HeroSlider';
import IconBox from './components/IconBox';
import AboutUs from './components/AboutUs';
import TestimonialSlider from './components/Home/components/TestimonialSlider';
import TeamSlider from './components/Home/components/TeamSlider';
import HelpArea from './components/Home/components/HelpArea';
import HomeBlog from './components/Home/components/HomeBlog';
import CampusTour from './components/Home/components/CampusTour';
import NewsletterForm from './components/Home/components/NewsletterForm';
import Footer from './components/Footer';
import HeaderTwo from './components/common/Header';

export default class Home extends Component {
    render() {
        return (
            <div className="main-wrapper" >

                {/* Header */}
                <HeaderTwo />

                {/* Hero Slider */}
                < HeroSlider />

                {/* Icon Box */}
                < IconBox />

                {/* About Area */}
                < AboutUs />

                {/* Blog Area */}
                < HomeBlog />

                {/* Testimonial Slider */}
                < TestimonialSlider />

                {/* Team Slider */}
                < TeamSlider />

                {/* Help Area */}
                < HelpArea />       

                {/* Campus Tour */}
                < CampusTour />

                {/* Newsletter Form */}
                < NewsletterForm />

                {/* Footer */}
                < Footer />

            </div>
        )
    }
}
