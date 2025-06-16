import React from 'react';
import { useParams, Link } from 'react-router-dom';
import DetailsData from '../../data/gallery/gallery-details.json';
import { Container, Row, Col } from 'react-bootstrap';
import ModalImage from 'react-modal-image';
import HeaderTwo from '../../components/common/Header';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import FooterTwo from '../../components/FooterTwo';
import { Styles } from './styles/gallery.js';

const GalleryDetails = () => {
  const { id } = useParams();
  const gallery = DetailsData.find(item => item.id === id);

  if (!gallery) {
    return (
      <Styles>
        <div className="main-wrapper gallery-page">
          <HeaderTwo />
          <BreadcrumbBox title="Gallery Details" />
          <Container className="text-center my-5">
            <h3>Gallery not found</h3>
            <Link to="/gallery" className="btn btn-primary mt-3">Back to Gallery</Link>
          </Container>
          <FooterTwo />
        </div>
      </Styles>
    );
  }

  return (
    <Styles>
      <div className="main-wrapper gallery-page">
        <HeaderTwo />
        <BreadcrumbBox title={gallery.title} />

        <section className="gallery-page-area">
          <Container>
            <Row>
              {gallery.images.map((img, i) => (
                <Col lg="4" sm="6" key={i}>
                  <div className="gallery-box">
                    <ModalImage
                      small={`${process.env.PUBLIC_URL}/assets/images/${img}`}
                      large={`${process.env.PUBLIC_URL}/assets/images/${img}`}
                      alt=""
                    />
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <FooterTwo />
      </div>
    </Styles>
  );
};

export default GalleryDetails;
