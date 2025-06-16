import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderTwo from '../../components/common/Header';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import FooterTwo from '../../components/FooterTwo';
import { Styles } from './styles/instructor';
import instructorData from '../../data/course/instructorDetails.json';

class InstructorDetails extends Component {
  render() {
    const { id } = this.props.match.params;
    const instructor = instructorData.find(item => item.id === id);

    if (!instructor) {
      return (
        <Styles>
          <div className="main-wrapper instructor-details-page">
            <HeaderTwo />
            <BreadcrumbBox title="Instructor Not Found" />
            <section className="instructor-details-area">
              <Container>
                <Row>
                  <Col>
                    <p>No instructor found for ID: {id}</p>
                  </Col>
                </Row>
              </Container>
              <FooterTwo />
            </section>
          </div>
        </Styles>
      );
    }

    return (
      <Styles>
        <div className="main-wrapper instructor-details-page">
          <HeaderTwo />
          <BreadcrumbBox title={instructor.name} />

          <section className="instructor-details-area">
            <Container>
              <Row>
                <Col md="4">
                  <div className="instructor-img">
                    <img
                      src={process.env.PUBLIC_URL + `/assets/images/${instructor.image}`}
                      alt=""
                      className="img-fluid"
                    />
                    <ul className="list-unstyled getintouch">
                      <li><i className="las la-phone"></i> {instructor.phone}</li>
                      <li><i className="lar la-envelope"></i> {instructor.email}</li>
                      <li><i className="lab la-skype"></i> {instructor.skype}</li>
                    </ul>
                    <ul className="social list-unstyled list-inline">
                      <li className="list-inline-item"><a href={instructor.social.facebook}><i className="fab fa-facebook-f"></i></a></li>
                      <li className="list-inline-item"><a href={instructor.social.twitter}><i className="fab fa-twitter"></i></a></li>
                      <li className="list-inline-item"><a href={instructor.social.linkedin}><i className="fab fa-linkedin-in"></i></a></li>
                      <li className="list-inline-item"><a href={instructor.social.youtube}><i className="fab fa-youtube"></i></a></li>
                    </ul>
                  </div>
                </Col>
                <Col md="8">
                  <div className="instructor-content">
                    <h4>{instructor.name}</h4>
                    <span>{instructor.title}</span>
                    <p>{instructor.bio}</p>
                  </div>
                  <div className="qual-expe d-flex">
                    <div className="qualification">
                      <h5>Qualifications</h5>
                      {instructor.qualifications.map((qual, index) => (
                        <div className="qual-expe-box" key={index}>
                          <h6>{qual.school}</h6>
                          <p>{qual.degree}</p>
                        </div>
                      ))}
                    </div>
                    <div className="experiance">
                      <h5>Experience</h5>
                      {instructor.experience.map((exp, index) => (
                        <div className="qual-expe-box" key={index}>
                          <h6>{exp.place}</h6>
                          <p>{exp.duration}</p>
                        </div>
                      ))}
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

export default InstructorDetails;
