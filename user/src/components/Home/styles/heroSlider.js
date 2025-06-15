import styled from "styled-components";
import { colors } from "../../common/element/elements.js";

export const Styles = styled.div`
    /* ========== Hero Slider Styles ========== */
    .hero-slider-area {
        .swiper-container {
            position: relative;

            .swiper-wrapper {
                .swiper-slide.slider-item {
                    position: relative;

                    .image-container {
                        width: 100%;
                        height: 700px;
                        overflow: hidden;

                        img.slider-image {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                            transition: all 6000ms linear;
                            transform: scale(1);
                        }

                        @media(max-width: 767px) {
                            height: 450px;
                        }

                        @media(max-width: 575px) {
                            height: 360px;
                        }
                    }

                    .slider-table {
                        display: table;
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        top: 0;
                        left: 0;
                        z-index: 9999;

                        .slider-tablecell {
                            display: table-cell;
                            vertical-align: middle;

                            .slider-box {
                                .slider-title p {
                                    font-size: 18px;
                                    color: ${colors.border3};
                                    text-transform: uppercase;
                                    margin-bottom: 8px;
                                }

                                .slider-desc h1 {
                                    font-size: 46px;
                                    color: #fff;
                                    max-width: 700px;
                                    margin-bottom: 32px;
                                    font-weight: 600;

                                    @media(max-width: 767px) {
                                        font-size: 26px;
                                        font-weight: 500;
                                    }
                                }

                                .slider-btn {
                                    a.slider-btn1, a.slider-btn2 {
                                        font-size: 14px;
                                        display: inline-block;
                                        width: 145px;
                                        height: 40px;
                                        text-align: center;
                                        padding: 11px;
                                        border-radius: 5px;
                                        color: #fff;
                                        text-decoration: none;
                                    }

                                    a.slider-btn1 {
                                        background: ${colors.gr_bg};

                                        &:hover {
                                            background: ${colors.gr_bg2};
                                        }
                                    }

                                    a.slider-btn2 {
                                        background: ${colors.bg1};
                                        margin-left: 15px;

                                        &:hover {
                                            background: ${colors.gr_bg};
                                            color: #fff;
                                        }
                                    }
                                }

                                @media(max-width: 575px) {
                                    text-align: center !important;
                                }
                            }
                        }
                    }
                }

                .swiper-slide-active .image-container img.slider-image {
                    transform: scale(1.15);
                }

                .swiper-slide-active .slider-title {
                    animation: fadeInDown 1s 0.2s both;
                }

                .swiper-slide-active .slider-desc {
                    animation: fadeInUp 1.5s 0.2s both;
                }

                .swiper-slide-active .slider-btn {
                    animation: fadeInUp 2s 0.2s both;
                }
            }

            .swiper-btn {
                position: absolute;
                top: 50%;
                width: 45px;
                height: 45px;
                font-size: 24px;
                color: ${colors.border1};
                text-align: center;
                padding-top: 5px;
                border-radius: 5px;
                transition: 0.3s ease;
                z-index: 111;
                margin-top: -35px;

                &:hover {
                    background: ${colors.gr_bg};
                    color: #fff;
                }

                &.slider-button-next {
                    right: 40px;
                }

                &.slider-button-prev {
                    left: 40px;
                }
            }
        }
    }

    /* ========== Popup One Styles ========== */
    .popup-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        padding: 20px;
    }

    .popup-box {
        position: relative;
        background: #ffffff;
        padding: 60px 50px;
        border-radius: 16px;
        max-width: 800px;
        width: 100%;
        min-height: 400px;
        text-align: center;
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.35);
    }

    .popup-title {
        font-size: 2.5rem;
        margin-bottom: 20px;
        font-weight: bold;
    }

    .popup-text {
        font-size: 1.3rem;
        margin-bottom: 30px;
    }

    .popup-image {
        width: 100%;
        max-height: 450px;
        object-fit: cover;
        border-radius: 12px;
        margin-bottom: 20px;
    }

    .popup-submit-btn {
        font-size: 1rem;
        padding: 14px 34px;
        border: none;
        background-color: #007bff;
        color: #fff;
        border-radius: 8px;
        cursor: pointer;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: #0056b3;
        }
    }

    .popup-close-btn {
        position: absolute;
        top: 10px;
        right: 15px;
        background: none;
        border: none;
        font-size: 2rem;
        cursor: pointer;
        color: #000;
    }

    /* ========== Popup Two Scroll Styles ========== */
    .popup-box.scroll-style {
        padding: 40px 30px;

        .scroll-loop-container {
            height: 320px;
            overflow: hidden;
            position: relative;
        }

        .scroll-loop-content {
            display: flex;
            flex-direction: column;
            animation: verticalScroll 10s linear infinite;
        }

        .scroll-loop-entry {
            flex: 0 0 auto;
            margin-bottom: 40px;

            .popup-title {
                font-size: 1.8rem;
                margin-bottom: 10px;
            }

            .popup-text {
                font-size: 1.1rem;
            }
        }
        .popup-divider {
            border: none;
            height: 1px;
            background: #ddd;
            margin: 30px auto;
            width: 80%;
        }
    }

    @keyframes verticalScroll {
        0% { transform: translateY(0); }
        100% { transform: translateY(-50%); }
    }
`;
