import styled from "styled-components";
import { colors } from "../element/elements.js";

export const Styles = styled.div`
.mobile-menu-area {
    background: ${colors.bg1};
    display: none;

    .mb-logo-area {
        padding: 18px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .hm-button {
            margin-top: 8px;

            a#mb-sidebar-btn {
                i {
                    font-size: 20px;
                    color: ${colors.green};
                }
            }

            @media(max-width: 480px) {
                margin-top: 6px;
            }
        }

        .mb-logo {
            a {
                img {
                    max-width: 150px;

                    @media(max-width: 480px) {
                        max-width: 120px;
                    }
                }
            }
        }
    }

    @media(max-width: 767px) {
        display: block;
    }
}

.mb-sidebar {
    background: #ffffff;
    height: 100%;
    width: 320px;
    position: fixed;
    top : 0;
    left: -320px;
    overflow-y: auto;
    z-index: 9999;
    transition: all 400ms cubic-bezier(0.785,0.135,0.15,0.86);
    display: none;

    .mb-sidebar-heading {
        background: ${colors.gr_bg};
        padding: 25px;

        h5 {
            color: #ffffff;
            text-transform: uppercase;
        }

        a#close-mb-sidebar {
            i {
                font-size : 22px;
                color : #ffffff;
            }
        }
    }

    .mb-sidebar-menu {
        padding: 25px;

        .mb-menu-item {
            border-top: 1px solid ${colors.border1};

            &:last-child {
                border-bottom: 1px solid ${colors.border1};
            }

            button.mb-menu-button {
                border       : none;
                background   : transparent;
                display      : block;
                width        : 100%;
                padding      : 10px 0;
                text-align   : left;

                p {
                    font-size  : 14px;
                    color      : ${colors.black1};
                    text-transform: uppercase;

                    a {
                        color: ${colors.black1};
                        text-decoration: none;

                        &:hover {
                            color: ${colors.green};
                        }
                    }

                    i {
                        font-size: 13px;
                        float: right;
                        border: 1px solid ${colors.border3};
                        border-radius: 25px;
                        padding: 3px;
                    }

                    &:hover {
                        color      : ${colors.green};

                        i {
                            border-color : ${colors.green};
                        }
                    }
                }
            }

            .mb-menu-content {
                max-height: 0;
                overflow  : hidden;
                transition: max-height 0.2s ease-in-out;

                ul {
                    li {
                        border-top: 1px solid ${colors.border1};

                        a {
                            font-size  : 13px;
                            color      : ${colors.black2};
                            display    : block;
                            padding    : 10px 0;
                            padding-left: 15px;
                            text-decoration: none;

                            &:hover {
                                color      : ${colors.green};
                            }
                        }
                    }
                }
            }

            .mb-menu-content.show {
                max-height: 100%;
            }
        }
    }

    @media(max-width: 767px) {
        display : block;
    }

    @media(max-width: 480px) {
        max-width: 275px;
    }
}

.mb-sidebar.opened {
    left: 0 !important;
}

.mb-sidebar-overlay {
    position        : fixed;
    left            : 0;
    top             : 0;
    height          : 100%;
    width           : 100%;
    display         : block;
    background-color: rgba(0, 0, 0, 0.8);
    z-index         : 1111;
    visibility      : hidden;
    opacity         : 0;
    transition      : 0.3s ease;
}

.mb-sidebar-overlay.visible {
    visibility: visible;
    opacity   : 1;
}
`;
