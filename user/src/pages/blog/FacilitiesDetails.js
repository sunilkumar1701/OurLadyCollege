import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import HeaderTwo from "../../components/common/Header.js";
import { BreadcrumbBox } from "../../components/common/Breadcrumb.js";
import FooterTwo from "../../components/FooterTwo.js";
import { Styles } from "./styles/facilities-details.js";
import Datas from "../../data/facilities/facilities-details.json";
import FacilitiesData from "../../data/facilities/facilities.json"; // NEW import

class FacilitiesDetails extends Component {
  render() {
    const { match } = this.props;
    const facilityId = match.params.id;

    // Get dynamic facility description by ID
    const facility = FacilitiesData.find(item => item.id === facilityId);
    const description = facility?.description;

    // Filter detail content based on facilityId
    const filteredDetails = Datas.filter(item => item.id === facilityId);

    return (
      <Styles>
        <div className="main-wrapper blog-details-page">
          <HeaderTwo />
          <BreadcrumbBox title="Facility Details" />

          <section className="blog-details-area">
            <Container>
              <Row>
                <Col lg="11" md="8" sm="7">
                  <div className="blog-details-box">
                    <div className="blog-details-banner">
                      <img
                        src={process.env.PUBLIC_URL + `/assets/images/blog_c-04.jpg`}
                        alt=""
                        className="img-fluid"
                      />
                    </div>

                    {/* Description Section */}
                    <div className="heading">
                      <h4>Description</h4>
                    </div>
                    <div className="blog-details-desc">
                      <p>{description?.paragraph || "No description available."}</p>
                      <ul className="list-unstyled">
                        {description?.points?.map((point, index) => (
                          <li key={index}>
                            <i className="fa fa-check"></i> {point}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Other Labs Section */}
                    <div className="blog-details-other-labs">
                      <Row>
                        {filteredDetails.map((data, i) => (
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
                                  <Link to={process.env.PUBLIC_URL + data.courseLink}>
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
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <FooterTwo />
        </div>
      </Styles>
    );
  }
}

export default FacilitiesDetails;
