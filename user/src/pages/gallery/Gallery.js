import React, { Component } from 'react';
import Datas from '../../data/gallery/gallery-page.json';
import { Container, Row, Col } from 'react-bootstrap';
import ModalImage from 'react-modal-image';
import HeaderTwo from '../../components/common/Header';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import Pagination from '../../components/Pagination';
import FooterTwo from '../../components/FooterTwo';
import { Styles } from './styles/gallery.js';
import { Link } from 'react-router-dom';

class Gallery extends Component {
  render() {
    return (
      <Styles>
        <div className="main-wrapper gallery-page">
          <HeaderTwo />
          <BreadcrumbBox title="Gallery" />

          <section className="gallery-page-area">
            <Container>
              <Row>
                {Datas.map((data, i) => (
                  <Col lg="4" sm="6" key={i}>
                    <div className="gallery-box">
                      <Link to={`/gallery-details/${data.id}`}>
                        <ModalImage
                          small={`${process.env.PUBLIC_URL}/assets/images/${data.thumbnail}`}
                          large={`${process.env.PUBLIC_URL}/assets/images/${data.thumbnail}`}
                          alt={data.title}
                        />
                      </Link>
                      <p className="text-center mt-2">{data.title}</p>
                    </div>
                  </Col>
                ))}
                <Col md="12" className="text-center">
                  <Pagination />
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

export default Gallery;
