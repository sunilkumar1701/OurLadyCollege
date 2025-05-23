import React, { Component } from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { Styles } from "../styles/tabBox.js";

class TabBox extends Component {

    render() {
        return (
            <Styles>
                {/* Tab Box Area */}
                <section className="tab-section">
                    <Container>
                        <Tab.Container defaultActiveKey="Vision">
                            <Row>
                                <Col lg="3" md="4">
                                    <Nav className="flex-column">
                                        <Nav.Item>
                                            <Nav.Link eventKey="Vision"><i className="las la-arrow-right"></i> Vision</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="Mission"><i className="las la-arrow-right"></i> Mission</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="Purpose"><i className="las la-arrow-right"></i> Purpose</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="Philosophy"><i className="las la-arrow-right"></i> Philosophy</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="Objectives"><i className="las la-arrow-right"></i>  Objectives</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col lg="9" md="8">
                                    <Tab.Content>
                                        <Tab.Pane eventKey="Vision">
                                            <h4 className="tab-title">Vision</h4>
                                            <p className="tab-desc">Highest Quality and Advanced Health Care Education , in view of the Scientific and Technologic advancement in today’s Global context towards holistic Health Care System.</p>
                                            <ul className="list-unstyled check-list">
                                                <li><i className="fa fa-check"></i>Provide top-quality education that prepares students for modern healthcare by using the latest science and technology from around the world.</li>
                                                <li><i className="fa fa-check"></i>Focus on complete healthcare training that includes physical, mental, and emotional well-being to meet global healthcare standards and needs.</li>
                                                <li><i className="fa fa-check"></i>Equip students with advanced medical knowledge and skills to improve patient care and adapt to today's fast-changing healthcare environment.</li>
                                            </ul>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="Mission">
                                            <h4 className="tab-title">Mission</h4>
                                            <p className="tab-desc">Formation of young female Nurses through a continuing educative process that inculcates both human values and higher nursing professional skills. This process includes training them to become efficient service providers to the society, and to be available to serve the sick all over the world, facing today’s challenges with professionalism.</p>
                                            <ul className="list-unstyled check-list">
                                                <li><i className="fa fa-check"></i>Train young female nurses with strong human values and advanced nursing skills to serve people with care and compassion globally.</li>
                                                <li><i className="fa fa-check"></i>Help nurses grow through ongoing education, making them skilled, confident, and ready to face modern healthcare challenges with professionalism.</li>
                                                <li><i className="fa fa-check"></i>Prepare dedicated nurses who are always ready to care for the sick, bringing hope and healing to society worldwide.</li>
                                            </ul>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="Purpose">
                                            <h4 className="tab-title">Purpose</h4>
                                            <ul className="list-unstyled check-list">
                                                <li><i className="fa fa-check"></i>To help the student nurse to grow along with scientific progress made in nursing.</li>
                                                <li><i className="fa fa-check"></i>To educate the student in the prevention of disease, promotion of health, restoration of wellbeing and rehabilitation.</li>
                                                <li><i className="fa fa-check"></i>To train the student to provide the best care for the chronically ill patients.</li>
                                                <li><i className="fa fa-check"></i>To help the local community in the care of sick and needy.</li>
                                                <li><i className="fa fa-check"></i>To provide patient oriented and professionally efficient care.</li>
                                            </ul>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="Philosophy">
                                            <h4 className="tab-title">Our Ranking</h4>
                                            <ul className="list-unstyled check-list">
                                                <li><i className="fa fa-check"></i>We, the ICM Sisters believe that Higher Quality Nursing Education is to be imparted on sound Scientific Principles to enable the female students to become confident members of the Health Care Team Today.</li>
                                                <li><i className="fa fa-check"></i>We respect the needs, religious beliefs and practices of the community and train our students to serve them professionally and extensively.</li>
                                                <li><i className="fa fa-check"></i>We promote overall development of female nurses in the Educational, Cultural, Psychological, Physical, Spiritual, and Ethical fields, preparing them to become skilled, competent Nurses to care for Society’s needs.</li>
                                                <li><i className="fa fa-check"></i>We assume responsibility to provide our female students with continuing educational expertise to update their professionalism and prepare for challenges as skilled, specialized Nurses..</li>
                                            </ul>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="Objectives">
                                            <h4 className="tab-title">Objectives</h4>
                                            <ul className="list-unstyled check-list">
                                                <li><i className="fa fa-check"></i>To provide the female students with knowledge and skills toward promotion of health, prevention of illness, disabilities, early diagnosis, restoration of health and rehabilitation.</li>
                                                <li><i className="fa fa-check"></i>To prepare every student to be person-oriented and professionally efficient in the hospital and in the community set-ups.</li>
                                                <li><i className="fa fa-check"></i>To provide knowledge and skills for female student nurses for growing along with the technological and scientific progress made in Health Care System.</li>
                                                <li><i className="fa fa-check"></i>To guide and tap the potentials and talents present in each student, so that a mature, selfaffirming, responsible professional woman nurse with respect and service-mindedness may contribute towards a healthy society.</li>
                                                <li><i className="fa fa-check"></i>To instill a desire in the student to contribute to the building of the Nation today by placing special services on meeting the health needs of the rural population.</li>
                                                <li><i className="fa fa-check"></i>To develop in the student personal, intellectual, professional, leadership qualities and decision-making abilities in various situations.</li>
                                                <li><i className="fa fa-check"></i>To create a passion in Mission for the care of the sick and an understanding of the principles and practice of Ethics and Codes of this profession</li>
                                                <li><i className="fa fa-check"></i>To kindle / stimulate a desire in the female students for further study in the advanced fields of nursing and expertise, the knowledge and skill regularly.</li>
                                            </ul>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Container>
                </section>
            </Styles>
        )
    }
}

export default TabBox
