// File: CourseDetails.js

import React, { useEffect, useState } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import HeaderTwo from "../../components/common/Header";
import { BreadcrumbBox } from "../../components/common/Breadcrumb";
import FooterTwo from "../../components/FooterTwo";
import { Styles } from "./styles/course";
import Pagination from "./../../components/Pagination";
import instructorData from "../../data/course/instructor.json";
import courseData from "../../data/course/courseDescription.json";
import achievementsData from "../../data/course/achievements.json";

function CourseDetails(props) {
  const id = props.match.params.id;
  const [course, setCourse] = useState(null);
  const [achievements, setAchievements] = useState([]);
  const [faculty, setFaculty] = useState([]);

  useEffect(() => {
    const selectedCourse = courseData.find((course) => course.id === id);
    setCourse(selectedCourse);

    const matchedAchievements = achievementsData.find((a) => a.id === id);
    setAchievements(matchedAchievements ? matchedAchievements.achievements : []);

    const matchedFaculty = instructorData.find((inst) => inst.id === id);
    setFaculty(matchedFaculty ? matchedFaculty.faculty : []);
  }, [id]);

  useEffect(() => {
    const courseButton = document.querySelectorAll(".course-button");
    courseButton.forEach((button) => {
      button.addEventListener("click", () => {
        button.classList.toggle("active");
        const content = button.nextElementSibling;
        if (button.classList.contains("active")) {
          content.className = "course-content show";
          content.style.maxHeight = content.scrollHeight + "px";
        } else {
          content.className = "course-content";
          content.style.maxHeight = "0";
        }
      });
    });
  }, []);

  if (!course) {
    return (
      <p style={{ textAlign: "center", marginTop: "100px" }}>
        Course not found. Please check your URL or course ID.
      </p>
    );
  }

  return (
    <div className="main-wrapper course-details-page">
      <HeaderTwo />
      <BreadcrumbBox title="Course Details" />
      <Styles>
        <section className="course-details-area">
          <Container>
            <Row>
              <Col lg="12" md="8" sm="12">
                <div className="course-details-top">
                  <div className="heading">
                    <h4>{course.heading}</h4>
                  </div>
                  <div className="course-top-overview">
                    <div className="d-flex overviews">
                      <div className="author">
                        <div className="author-name">
                          <h6>Author</h6>
                          <p>{course.authorName}</p>
                        </div>
                      </div>
                      <div className="category">
                        <h6>Durations</h6>
                        <p>3 Years</p>
                      </div>
                    </div>
                  </div>
                  <div className="course-details-banner">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/${course.banner}`}
                      alt=""
                      className="img-fluid"
                      style={{
                        width: "100%",
                        height: "500px",
                        objectFit: "cover",
                      }}
                    />
                  </div>

                  <div className="course-tab-list">
                    <Tab.Container defaultActiveKey="overview">
                      <Nav className="flex-column">
                        <Nav.Item>
                          <Nav.Link eventKey="overview">Overview</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="curriculum">Faculty</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="instructor">Achievements</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="apply">Apply</Nav.Link>
                        </Nav.Item>
                      </Nav>

                      <Tab.Content>
                        {/* === OVERVIEW TAB === */}
                        <Tab.Pane eventKey="overview" className="overview-tab">
                          <div className="course-desc">
                            <h5>Course Description</h5>
                            <p>{course.overview.courseDesc}</p>
                          </div>
                          <div className="course-feature mt-4">
                            <h5>Course Feature</h5>
                            <p>{course.overview.courseFeature}</p>
                            <ul className="list-unstyled">
                              {course.overview.featureList.map((item, i) => (
                                <li
                                  key={i}
                                  style={{
                                    lineHeight: "1.8",
                                    marginBottom: "10px",
                                    display: "flex",
                                    alignItems: "flex-start",
                                  }}
                                >
                                  <i
                                    className="las la-arrow-right text-success"
                                    style={{
                                      marginRight: "10px",
                                      minWidth: "20px",
                                    }}
                                  ></i>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="course-learn mt-4">
                            <h5>Learning Outcome</h5>
                            <p>{course.overview.courseLearn}</p>
                            <ul className="list-unstyled">
                              {course.overview.learnList.map((item, i) => (
                                <li
                                  key={i}
                                  style={{
                                    lineHeight: "1.8",
                                    marginBottom: "10px",
                                    display: "flex",
                                    alignItems: "flex-start",
                                  }}
                                >
                                  <i
                                    className="fa fa-check text-success"
                                    style={{
                                      marginRight: "10px",
                                      minWidth: "20px",
                                    }}
                                  ></i>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          {course.overview.eligibilityCriteria && (
                            <div className="course-eligibility mt-4">
                              <h5>Eligibility Criteria</h5>
                              <ul className="list-unstyled">
                                {course.overview.eligibilityCriteria.map(
                                  (item, i) => (
                                    <li
                                      key={i}
                                      style={{
                                        lineHeight: "1.8",
                                        marginBottom: "10px",
                                        display: "flex",
                                        alignItems: "flex-start",
                                      }}
                                    >
                                      <i
                                        className="fa fa-check text-success"
                                        style={{
                                          marginRight: "10px",
                                          minWidth: "20px",
                                        }}
                                      ></i>
                                      <span>{item}</span>
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                          )}
                        </Tab.Pane>

                        {/* === CURRICULUM TAB (Dynamic) === */}
                        <Tab.Pane eventKey="curriculum" className="curriculum-tab">
                          <section className="instructor-area">
                            <Container>
                              <Row>
                                {faculty.length > 0 ? (
                                  faculty.map((data, i) => (
                                    <Col lg="3" md="4" sm="6" xs="12" key={i}>
                                      <div className="instructor-item">
                                        <Link to={`/instructor-details/instructor-${i + 1}`}>
                                          <img
                                            src={`${process.env.PUBLIC_URL}/assets/images/${data.personImage}`}
                                            alt=""
                                            className="img-fluid"
                                          />
                                        </Link>
                                        <div className="img-content text-center">
                                          <h5>
                                            <Link to={`/instructor-details/instructor-${i + 1}`}>
                                              {data.personName}
                                            </Link>
                                          </h5>
                                          <p>{data.personTitle}</p>
                                          <ul className="list-unstyled list-inline">
                                            <li className="list-inline-item">
                                              <a href={data.socialLinks.facebook}>
                                                <i className="fab fa-facebook-f"></i>
                                              </a>
                                            </li>
                                            <li className="list-inline-item">
                                              <a href={data.socialLinks.twitter}>
                                                <i className="fab fa-twitter"></i>
                                              </a>
                                            </li>
                                            <li className="list-inline-item">
                                              <a href={data.socialLinks.youtube}>
                                                <i className="fab fa-youtube"></i>
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </Col>
                                  ))
                                ) : (
                                  <Col>
                                    <p>No faculty available for this course.</p>
                                  </Col>
                                )}
                                <Col md="12" className="text-center">
                                  <Pagination />
                                </Col>
                              </Row>
                            </Container>
                          </section>
                        </Tab.Pane>

                        {/* === ACHIEVEMENTS TAB (Dynamic) === */}
                        <Tab.Pane eventKey="instructor" className="instructor-tab">
                          <h5>Achievements and Awards</h5>
                          {achievements.length > 0 ? (
                            achievements.map((a, i) => (
                              <div className="instructor-item" key={i}>
                                <Row>
                                  <Col md="3">
                                    <div className="instructor-img">
                                      <img
                                        src={`${process.env.PUBLIC_URL}/assets/images/${a.image}`}
                                        alt=""
                                        className="img-fluid"
                                      />
                                    </div>
                                  </Col>
                                  <Col md="9">
                                    <div className="instructor-content">
                                      <div className="instructor-box">
                                        <div className="top-content d-flex justify-content-between">
                                          <div className="instructor-name">
                                            <h6>{a.name}</h6>
                                            <p>{a.title}</p>
                                          </div>
                                          <div className="instructor-social">
                                            <ul className="social list-unstyled list-inline">
                                              <li className="list-inline-item">
                                                <a href="/"><i className="fab fa-facebook-f"></i></a>
                                              </li>
                                              <li className="list-inline-item">
                                                <a href="/"><i className="fab fa-twitter"></i></a>
                                              </li>
                                              <li className="list-inline-item">
                                                <a href="/"><i className="fab fa-linkedin-in"></i></a>
                                              </li>
                                              <li className="list-inline-item">
                                                <a href="/"><i className="fab fa-youtube"></i></a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                        <div className="instructor-desk">
                                          <p>{a.description}</p>
                                        </div>
                                      </div>
                                    </div>
                                  </Col>
                                </Row>
                              </div>
                            ))
                          ) : (
                            <p>No achievements available for this course.</p>
                          )}
                        </Tab.Pane>

                        {/* === APPLY TAB === */}
                        <Tab.Pane eventKey="apply" className="apply-tab">
                          <h5>Coming soon</h5>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </Styles>
      <FooterTwo />
    </div>
  );
}

export default CourseDetails;
