import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderTwo from '../../components/common/Header.js';
import { BreadcrumbBox } from '../../components/common/Breadcrumb.js';
import FooterTwo from '../../components/FooterTwo.js';
import { Styles } from './styles/facilities-details.js';

class FacilitiesDetails extends Component {
    render() {
        return (
            <Styles>
                {/* Main Wrapper */}
                <div className="main-wrapper blog-details-page">

                    {/* Header 2 */}
                    <HeaderTwo />

                    {/* Breadcroumb */}
                    <BreadcrumbBox title="Blog Details" />

                    {/* Blog Details */}
                    <section className="blog-details-area">
                        <Container>
                            <Row>
                                <Col lg="11" md="8" sm="7">
                                    <div className="blog-details-box">
                                        <div className="blog-details-banner">
                                            <img src={process.env.PUBLIC_URL + `/assets/images/blog_c-04.jpg`} alt="" className="img-fluid" />
                                        </div>
                                        <div className="heading">
                                            <h4>International students coming in Uk from Asian subcontinant for better education.</h4>
                                        </div>
                                        <div className="blog-auth_date d-flex">
                                            <div className="author-img d-flex">
                                                <Link to={process.env.PUBLIC_URL + "/"}><img src={process.env.PUBLIC_URL + `/assets/images/author.jpg`} alt="" /></Link>
                                                <p><Link to={process.env.PUBLIC_URL + "/"}>Medison Azar</Link></p>
                                            </div>
                                            <div className="post-date">
                                                <p><i className="las la-calendar"></i> April 23, 2020</p>
                                            </div>
                                            <div className="post-category">
                                                <p><Link to={process.env.PUBLIC_URL + "/"}><i className="las la-bookmark"></i> Web Design</Link></p>
                                            </div>
                                            <div className="post-comment">
                                                <p><Link to={process.env.PUBLIC_URL + "/"}><i className="las la-comment"></i> (23)</Link></p>
                                            </div>
                                        </div>
                                        <div className="blog-details-desc">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nesciunt harum facilis odit inventore molestias qui asperiores recusandae architecto mollitia provident ipsa unde, praesentium impedit enim voluptate ducimus, saepe autem. Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br /><br />Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda optio sequi suscipit et modi! Corporis obcaecati rerum et, explicabo inventore, aliquid, odit modi harum libero culpa distinctio. Nemo, aliquid dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio earum accusantium quam eius dignissimos quaerat voluptatem excepturi aliquid dolor ducimus. Illo porro maiores fuga dignissimos temporibus odio nulla nobis nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. <span><i className="las la-quote-right"></i>Nemo, aliquid dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio earum accusantium quam eius dignissimos quaerat voluptatem excepturi aliquid dolor ducimus. Optio earum accusantium quam eius dignissimos quaerat voluptatem excepturi aliquid dolor ducimus.</span>Assumenda optio sequi suscipit et modi! Corporis obcaecati rerum et, explicabo inventore, aliquid, odit modi harum libero culpa distinctio. Nemo, aliquid dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                                            <ul className="list-unstyled">
                                                <li><i className="fa fa-check"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus facere Quae impedit eligendi perspiciatis animi maxime ab minus corporis omnis similique excepturi.</li>
                                                <li><i className="fa fa-check"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus facere Quae impedit eligendi perspiciatis animi maxime ab minus corporis omnis similique excepturi.</li>
                                                <li><i className="fa fa-check"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus facere Quae impedit eligendi perspiciatis animi maxime ab minus corporis omnis similique excepturi.</li>
                                            </ul>
                                        </div>
                                        <div className="blog-tag_share d-flex justify-content-between">
                                            <div className="blog-tag">
                                                <ul className="tags list-unstyled list-inline">
                                                    <li className="list-inline-item">Tags:</li>
                                                    <li className="list-inline-item"><Link to={process.env.PUBLIC_URL + "/"}>Html</Link>,</li>
                                                    <li className="list-inline-item"><Link to={process.env.PUBLIC_URL + "/"}>Design</Link>,</li>
                                                    <li className="list-inline-item"><Link to={process.env.PUBLIC_URL + "/"}>Develop</Link>,</li>
                                                    <li className="list-inline-item"><Link to={process.env.PUBLIC_URL + "/"}>React</Link></li>
                                                </ul>
                                            </div>
                                            <div className="blog-share">
                                                <ul className="social list-unstyled list-inline">
                                                    <li className="list-inline-item">Share:</li>
                                                    <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-facebook-f"></i></a></li>
                                                    <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-twitter"></i></a></li>
                                                    <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-linkedin-in"></i></a></li>
                                                    <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-youtube"></i></a></li>
                                                    <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-dribbble"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>

                                        
                                    </div>
                                </Col>
                                
                            </Row>
                        </Container>
                    </section>

                    {/* Footer 2 */}
                    <FooterTwo />

                </div>
            </Styles>
        )
    }
}

export default FacilitiesDetails