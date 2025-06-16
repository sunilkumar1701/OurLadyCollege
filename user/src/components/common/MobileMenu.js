import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Styles } from "./styles/mobileMenu.js";

function MobileMenu() {
    useEffect(() => {
        const hmBtn = document.getElementById("mb-sidebar-btn");

        if (hmBtn) {
            const mdSidebarOverlay = document.getElementById("mb-sidebar-overlay");
            const mdSidebarBody = document.getElementById("mb-sidebar-body");
            const mdSidebarExit = document.getElementById("close-mb-sidebar");

            hmBtn.addEventListener("click", function (e) {
                e.preventDefault();
                mdSidebarOverlay.classList.toggle("visible");
                mdSidebarBody.classList.toggle("opened");
            });

            mdSidebarOverlay.addEventListener("click", function (e) {
                e.preventDefault();
                mdSidebarOverlay.classList.remove("visible");
                mdSidebarBody.classList.remove("opened");
            });

            mdSidebarExit.addEventListener("click", function (e) {
                e.preventDefault();
                mdSidebarOverlay.classList.remove("visible");
                mdSidebarBody.classList.remove("opened");
            });
        }
    }, []);

    return (
        <Styles>
            <section className="mobile-menu-area">
                <Container>
                    <Row>
                        <Col md="0" sm="12">
                            <div className="mb-logo-area d-flex justify-content-between align-items-center">
                                <div className="hm-button">
                                    <a href={process.env.PUBLIC_URL + "/"} id="mb-sidebar-btn">
                                        <i className="las la-bars"></i>
                                    </a>
                                </div>
                                <div className="mb-logo">
                                    <Link to={process.env.PUBLIC_URL + "/"}>
                                        <img src={process.env.PUBLIC_URL + "/assets/images/f-logo.png"} alt="" />
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Sidebar */}
            <section className="mb-sidebar" id="mb-sidebar-body">
                <div className="mb-sidebar-heading d-flex justify-content-between">
                    <div><h5>Menu</h5></div>
                    <div><a href={process.env.PUBLIC_URL + "/"} id="close-mb-sidebar"><i className="las la-times"></i></a></div>
                </div>

                <div className="mb-sidebar-menu">
                    <div className="mb-menu-item">
                        <button className="mb-menu-button active">
                            <p><Link to={process.env.PUBLIC_URL + "/"}>Home</Link></p>
                        </button>
                    </div>
                    <div className="mb-menu-item">
                        <button className="mb-menu-button active">
                            <p><Link to={process.env.PUBLIC_URL + "/about"}>About Us</Link></p>
                        </button>
                    </div>
                    <div className="mb-menu-item">
                        <button className="mb-menu-button active">
                            <p><Link to={process.env.PUBLIC_URL + "/courses"}>Courses</Link></p>
                        </button>
                    </div>
                    <div className="mb-menu-item">
                        <button className="mb-menu-button active">
                            <p><Link to={process.env.PUBLIC_URL + "/facilities"}>Facilities</Link></p>
                        </button>
                    </div>
                    <div className="mb-menu-item">
                        <button className="mb-menu-button active">
                            <p><Link to={process.env.PUBLIC_URL + "/hospital"}>Hospitals</Link></p>
                        </button>
                    </div>
                    <div className="mb-menu-item">
                        <button className="mb-menu-button active">
                            <p><Link to={process.env.PUBLIC_URL + "/gallery"}>Gallery</Link></p>
                        </button>
                    </div>
                </div>
            </section>

            <div className="mb-sidebar-overlay" id="mb-sidebar-overlay"></div>
        </Styles>
    );
}

export default MobileMenu;
