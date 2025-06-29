// FILE: src/pages/blog/Facilities.js

import React, { Component } from 'react';
import Datas from '../../data/facilities/facilities.json';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderTwo from '../../components/common/Header.js';
import { BreadcrumbBox } from '../../components/common/Breadcrumb.js';
import Pagination from '../../components/Pagination.js';
import FooterTwo from '../../components/FooterTwo.js';
import { Styles } from './styles/facilities.js';

class Facilities extends Component {
    render() {
        return (
            <Styles>
                <div className="main-wrapper blog-grid-page">
                    <HeaderTwo />
                    <BreadcrumbBox title="Facilities" />
                    <section className="blog-grid-area">
                        <Container>
                            <Row>
                                <Col lg="12" md="8" sm="7">
                                    <Row>
                                        {
                                            Datas.map((data, i) => (
                                                <Col lg="4" md="6" sm="12" key={i}>
                                                    <div className="blog-item">
                                                        <div className="blog-img">
                                                            <Link to={data.postLink}>
                                                                <img src={process.env.PUBLIC_URL + `/assets/images/${data.postImg}`} alt="" className="img-fluid" />
                                                            </Link>
                                                        </div>
                                                        <div className="blog-content">
                                                            <div className="blog-title">
                                                                <h6><Link to={data.postLink}>{data.postTitle}</Link></h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            ))
                                        }
                                    </Row>
                                    <div className="text-center">
                                        <Pagination />
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

export default Facilities;
