import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderTwo from '../../components/common/Header.js';
import { BreadcrumbBox } from '../../components/common/Breadcrumb.js';
import CourseItemGrid from './components/CourseItemsGrid.js';
import FooterTwo from '../../components/FooterTwo.js';
import { Styles } from './styles/course.js';

class Course extends Component {

    render() {
        return (
            <div className="main-wrapper course-page">

                {/* Header 2 */}
                <HeaderTwo />

                {/* Breadcroumb */}
                <BreadcrumbBox title="Courses" />

                <Styles>
                    {/* Course Grid */}
                    <section className="course-grid-area">
                        <Container>
                            <Row className="justify-content-center">
                                <Col lg="10" md="8" sm="7">
                                    <div className="course-items">
                                        <Row>
                                            <CourseItemGrid />
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </Styles>

                {/* Footer 2 */}
                <FooterTwo />

            </div>
        )
    }
}

export default Course