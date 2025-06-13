import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import HeaderTwo from "../../components/common/Header.js";
import { BreadcrumbBox } from "../../components/common/Breadcrumb.js";
import FooterTwo from "../../components/FooterTwo.js";
import { Styles } from "./styles/facilities-details.js";
import Datas from "../../data/facilities/facilities-details.json";

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
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          `/assets/images/blog_c-04.jpg`
                        }
                        alt=""
                        className="img-fluid"
                      />
                    </div>

                    <div className="heading">
                      <h4>Description</h4>
                    </div>
                    <div className="blog-details-desc">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facere nesciunt harum facilis odit inventore molestias
                        qui asperiores recusandae architecto mollitia provident
                        ipsa unde, praesentium impedit enim voluptate ducimus,
                        saepe autem. Lorem ipsum dolor sit, amet consectetur
                        adipisicing elit.{" "}
                      </p>
                      <ul className="list-unstyled">
                        <li>
                          <i className="fa fa-check"></i> Lorem ipsum dolor sit
                          amet, consectetur adipisicing elit. Voluptatum amet
                          quo eius saepe et quis necessitatibus hic natus facere
                          Quae impedit eligendi perspiciatis animi maxime ab
                          minus corporis omnis similique excepturi.
                        </li>
                        <li>
                          <i className="fa fa-check"></i> Lorem ipsum dolor sit
                          amet, consectetur adipisicing elit. Voluptatum amet
                          quo eius saepe et quis necessitatibus hic natus facere
                          Quae impedit eligendi perspiciatis animi maxime ab
                          minus corporis omnis similique excepturi.
                        </li>
                        <li>
                          <i className="fa fa-check"></i> Lorem ipsum dolor sit
                          amet, consectetur adipisicing elit. Voluptatum amet
                          quo eius saepe et quis necessitatibus hic natus facere
                          Quae impedit eligendi perspiciatis animi maxime ab
                          minus corporis omnis similique excepturi.
                        </li>
                      </ul>
                    </div>
                    <div className="blog-details-other-labs">
                      <Row>
                        {Datas.map((data, i) => (
                          <Col md="12" key={i}>
                            <div className="course-item d-flex">
                              <div className="course-image-box">
                                <div
                                  className="course-image"
                                  style={{
                                    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/${data.imgUrl})`,
                                  }}
                                ></div>
                              </div>
                              <div className="course-content">
                                <h6 className="heading">
                                  <Link
                                    to={
                                      process.env.PUBLIC_URL + data.courseLink
                                    }
                                  >
                                    {data.courseTitle}
                                  </Link>
                                </h6>
                                <p className="desc">{data.courseDesc}</p>
                              </div>
                            </div>
                          </Col>
                        ))}
                      </Row>
                    </div>

                    <div className="blog-tag_share d-flex justify-content-between">
                      <div className="blog-tag">
                        <ul className="tags list-unstyled list-inline">
                          <li className="list-inline-item">Tags:</li>
                          <li className="list-inline-item">
                            <Link to={process.env.PUBLIC_URL + "/"}>Html</Link>,
                          </li>
                          <li className="list-inline-item">
                            <Link to={process.env.PUBLIC_URL + "/"}>
                              Design
                            </Link>
                            ,
                          </li>
                          <li className="list-inline-item">
                            <Link to={process.env.PUBLIC_URL + "/"}>
                              Develop
                            </Link>
                            ,
                          </li>
                          <li className="list-inline-item">
                            <Link to={process.env.PUBLIC_URL + "/"}>React</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="blog-share">
                        <ul className="social list-unstyled list-inline">
                          <li className="list-inline-item">Share:</li>
                          <li className="list-inline-item">
                            <a href={process.env.PUBLIC_URL + "/"}>
                              <i className="fab fa-facebook-f"></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href={process.env.PUBLIC_URL + "/"}>
                              <i className="fab fa-twitter"></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href={process.env.PUBLIC_URL + "/"}>
                              <i className="fab fa-linkedin-in"></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href={process.env.PUBLIC_URL + "/"}>
                              <i className="fab fa-youtube"></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href={process.env.PUBLIC_URL + "/"}>
                              <i className="fab fa-dribbble"></i>
                            </a>
                          </li>
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
    );
  }
}

export default FacilitiesDetails;
