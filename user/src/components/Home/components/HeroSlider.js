// File: HeroSlider.js
import React, { Component } from "react";
import Datas from "../../../data/home/hero-slider.json";
import popupData from "../../../data/pop-up/popupDetails.json";
import secondPopupData from "../../../data/pop-up/secondpopup.json";
import { Link, withRouter } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Swiper from "react-id-swiper";
import { Styles } from "../styles/heroSlider.js";

class OverlayPopup extends Component {
  render() {
    const { isOpen, onClose, data, onSubmit, minimal = false } = this.props;

    if (!isOpen) return null;

    return (
      <div className="popup-overlay">
        <div className={`popup-box ${minimal ? "scroll-style" : ""}`}>
          <button className="popup-close-btn" onClick={onClose}>✖</button>

          {!minimal ? (
            <>
              <h1 className="popup-title">{data.title}</h1>
              <p className="popup-text">{data.description}</p>
              {data.image && (
                <img src={process.env.PUBLIC_URL + data.image} alt="Popup" className="popup-image" />
              )}
              <button className="popup-submit-btn" onClick={onSubmit}>
                {data.button}
              </button>
            </>
          ) : (
            <div className="scroll-loop-container">
              <div className="scroll-loop-content">
                {[...data, ...data].map((item, idx, arr) => (
                  <div key={idx}>
                    <div className="scroll-loop-entry">
                      <h2 className="popup-title">{item.title}</h2>
                      <p className="popup-text">{item.description}</p>
                    </div>
                    {idx !== arr.length - 1 && <hr className="popup-divider" />}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

class HeroSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popupOneOpened: true,
      popupTwoOpened: false,
    };
  }

  handleCloseFirstPopup = () => {
    this.setState({
      popupOneOpened: false,
      popupTwoOpened: true,
    });
  };

  handleCloseSecondPopup = () => {
    this.setState({ popupTwoOpened: false });
  };

  handlePopupSubmit = () => {
    this.props.history.push(`${process.env.PUBLIC_URL}/course`);
  };

  render() {
    const settings = {
      slidesPerView: 1,
      loop: true,
      speed: 3000,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      watchSlidesVisibility: true,
      effect: "fade",
      navigation: {
        nextEl: ".slider-button-next",
        prevEl: ".slider-button-prev",
      },
      renderPrevButton: () => (
        <div className="swiper-btn slider-button-prev">
          <i className="flaticon-arrow-left-th"></i>
        </div>
      ),
      renderNextButton: () => (
        <div className="swiper-btn slider-button-next">
          <i className="flaticon-arrow-right-th"></i>
        </div>
      ),
    };

    return (
      <Styles>
        <OverlayPopup
          isOpen={this.state.popupOneOpened}
          onClose={this.handleCloseFirstPopup}
          onSubmit={this.handlePopupSubmit}
          data={popupData}
        />
        <OverlayPopup
          isOpen={this.state.popupTwoOpened}
          onClose={this.handleCloseSecondPopup}
          data={secondPopupData}
          minimal={true}
        />

        <section className="hero-slider-area">
          <Swiper {...settings}>
            {Datas.map((data, i) => (
              <div className="slider-item" key={i}>
                <div className="image-container">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/${data.backgroundImage}`}
                    className="slider-image"
                    alt={data.backgroundImage}
                  />
                </div>
                <div className="slider-table">
                  <div className="slider-tablecell">
                    <Container>
                      <Row>
                        <Col md="12">
                          <div className={data.uniqClass}>
                            <div className="slider-title">
                              <p>{data.title}</p>
                            </div>

                            {/* 🟡 Moved slider-desc here just below title */}
                            <div className="slider-desc" style={{ marginBottom: "30px" }}>
                              <h1 style={{ whiteSpace: "pre-line" }}>
                                {data.desc}
                              </h1>
                            </div>

                            <div className="slider-btn">
                              <Link className="slider-btn1" to={`/${data.btnOneLink}`}>
                                Our Courses
                              </Link>
                              <Link className="slider-btn2" to={`/${data.btnTwoLink}`}>
                                Contact Us
                              </Link>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                </div>
              </div>
            ))}
          </Swiper>
        </section>
      </Styles>
    );
  }
}

export default withRouter(HeroSlider);
