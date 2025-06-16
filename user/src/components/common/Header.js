import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Search from './Search.js';
import StickyMenu from './StickyMenu.js';
import MobileMenu from './MobileMenu.js';
import { Styles } from "./styles/header.js";

class HeaderTwo extends Component {
    render() {
        return (
            <Styles>
                {/* Logo Area 2 */}
                <section className="logo-area2">
                    <Container>
                        <Row>
                            <Col md="3">
                                <div className="logo">
                                    <Link to={process.env.PUBLIC_URL + "/"}><img src={process.env.PUBLIC_URL + "/assets/images/logo.png"} alt="" /></Link>
                                </div>
                            </Col>
                            <Col md="9">
                                <div className="menu-box d-flex justify-content-end">
                                    <ul className="nav menu-nav">
                                        <li className="nav-item">
                                            <Link className="nav-link" to={process.env.PUBLIC_URL + "/"} data-toggle="dropdown">Home </Link>
                                        </li>
                                        <li className="nav-item dropdown active">
                                            <Link className="nav-link" to={process.env.PUBLIC_URL + "/about"}>About Us </Link>
                                        </li>
                                        <li className="nav-item dropdown active">
                                            <Link className="nav-link" to={process.env.PUBLIC_URL + "/courses"}>Courses </Link>
                                        </li>
                                        <li className="nav-item dropdown active">
                                            <Link className="nav-link" to={process.env.PUBLIC_URL + "/facilities"}>Facilities</Link>
                                        </li>
                                        <li className="nav-item dropdown active">
                                            <Link className="nav-link" to={process.env.PUBLIC_URL + "/hospital"}>Hospitals</Link>
                                        </li>
                                        <li className="nav-item dropdown active">
                                            <Link className="nav-link" to={process.env.PUBLIC_URL + "/gallery"}>Gallery</Link>
                                        </li>
                                        
                                    </ul>
                                    <div className="search-box">
                                        <Search />
                                    </div>
                                    <div className="apply-btn">
                                        <Link to={process.env.PUBLIC_URL + "/registration"}><i className="las la-clipboard-list"></i>Apply Now</Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                {/* Sticky Menu */}
                <StickyMenu />

                {/* Mobile Menu */}
                <MobileMenu />
            </Styles>
        )
    }
}

export default HeaderTwo
