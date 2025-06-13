import styled from "styled-components";
import { colors } from "../../../components/common/element/elements.js";

export const Styles = styled.div`
  .blog-details-page {
    .blog-details-area {
      padding: 70px 0;

      .blog-details-box {
        .blog-details-banner {
          img {
            border-radius: 5px;
            margin-bottom: 20px;
          }
        }

        .heading {
          h4 {
            color: ${colors.black1};
            font-weight: 600;
            line-height: 35px;
            margin-bottom: 25px;

            @media (max-width: 575px) {
              font-size: 20px;
            }
          }
        }

        .blog-auth_date {
          margin-bottom: 15px;

          .author-img {
            margin-right: 20px;

            a {
              img {
                max-width: 40px;
                border-radius: 50%;
                margin-right: 10px;
                margin-top: -9px;
              }
            }

            p {
              a {
                font-size: 14px;
                color: ${colors.green};
                font-weight: 500;

                &:hover {
                  color: ${colors.black1};
                }
              }
            }
          }

          .post-date,
          .post-category,
          .post-comment {
            margin-right: 20px;

            p {
              font-size: 14px;
              color: ${colors.text2};
              font-weight: 500;

              i {
                font-size: 20px;
                color: ${colors.green};
                vertical-align: top;
              }

              a {
                font-size: 14px;
                color: ${colors.text2};
                font-weight: 500;

                &:hover {
                  color: ${colors.green};
                }
              }
            }

            @media (max-width: 767px) {
              margin-right: 8px;
            }
          }

          .post-category,
          .post-comment {
            @media (max-width: 767px) {
              display: none;
            }
          }
        }

        .blog-details-desc {
          margin-bottom: 45px;

          p {
            font-size: 15px;
            color: ${colors.text2};
            line-height: 25px;

            span {
              background: ${colors.border1};
              color: ${colors.black2};
              display: block;
              margin: 35px 0;
              padding: 22px 28px;
              border-radius: 5px;
              position: relative;

              i {
                position: absolute;
                top: -20px;
                left: 50%;
                margin-left: -20px;
                font-size: 30px;
                color: #ffffff;
                background: ${colors.gr_bg};
                width: 42px;
                height: 42px;
                text-align: center;
                border-radius: 50%;
                padding-top: 7px;
              }
            }
          }

          ul {
            margin-top: 30px;

            li {
              display: flex;
              align-items: flex-start;
              gap: 15px;
              font-size: 14px;
              color: ${colors.text3};
              line-height: 25px;
              margin-bottom: 15px;

              i {
                flex-shrink: 0;
                color: ${colors.green};
                border: 1px solid ${colors.border3};
                width: 35px;
                height: 35px;
                border-radius: 50%;
                text-align: center;
                line-height: 35px;
                font-size: 16px;
                margin-top: 0;
              }

              &:last-child {
                margin-bottom: 0;
              }
            }
          }
        }

        .blog-tag_share {
          margin-bottom: 45px;

          .blog-tag {
            ul.tags {
              li {
                color: ${colors.text3};

                a {
                  font-size: 14px;
                  color: ${colors.text2};

                  &:hover {
                    color: ${colors.green};
                  }
                }

                &:first-child {
                  font-size: 15px;
                  color: ${colors.black1};
                  font-weight: 500;
                }
              }
            }

            @media (max-width: 767px) {
              margin-bottom: 20px;
            }
          }

          .blog-share {
            ul.social {
              li {
                a {
                  text-align: center;
                  position: relative;
                  height: 18px;
                  display: inline-block;

                  &:before {
                    content: "";
                    position: absolute;
                    border-width: 9px 17px;
                    border-style: solid;
                    border-top-color: transparent;
                    border-right-color: transparent;
                    border-left-color: transparent;
                    top: -18px;
                    left: 0;
                    z-index: 1;
                    transition: all 0.2s ease;
                  }

                  &:after {
                    content: "";
                    position: absolute;
                    border-width: 9px 17px;
                    border-style: solid;
                    border-right-color: transparent;
                    border-bottom-color: transparent;
                    border-left-color: transparent;
                    bottom: -18px;
                    left: 0;
                    z-index: 1;
                    transition: all 0.2s ease;
                  }

                  i {
                    font-size: 14px;
                    color: #ffffff;
                    width: 34px;
                  }

                  &:hover {
                    background-color: ${colors.green} !important;

                    &:before {
                      border-bottom-color: ${colors.green} !important;
                    }

                    &:after {
                      border-top-color: ${colors.green} !important;
                    }
                  }
                }

                &:nth-child(1) {
                  font-size: 15px;
                  color: ${colors.black1};
                  font-weight: 500;
                }

                &:nth-child(2) {
                  a {
                    background-color: #4267b2;

                    &:before {
                      border-bottom-color: #4267b2;
                    }

                    &:after {
                      border-top-color: #4267b2;
                    }
                  }
                }

                &:nth-child(3) {
                  a {
                    background-color: #1da1f2;

                    &:before {
                      border-bottom-color: #1da1f2;
                    }

                    &:after {
                      border-top-color: #1da1f2;
                    }
                  }
                }

                &:nth-child(4) {
                  a {
                    background-color: #2867b2;

                    &:before {
                      border-bottom-color: #2867b2;
                    }

                    &:after {
                      border-top-color: #2867b2;
                    }
                  }
                }

                &:nth-child(5) {
                  a {
                    background-color: #dd1343;

                    &:before {
                      border-bottom-color: #dd1343;
                    }

                    &:after {
                      border-top-color: #dd1343;
                    }
                  }
                }

                &:nth-child(6) {
                  a {
                    background-color: #ea4c89;

                    &:before {
                      border-bottom-color: #ea4c89;
                    }

                    &:after {
                      border-top-color: #ea4c89;
                    }
                  }
                }
              }
            }

            @media (max-width: 767px) {
              margin-bottom: 20px;
            }
          }

          @media (max-width: 767px) {
            margin-bottom: 30px;
            display: unset !important;
          }
        }

        .blog-details-other-labs {
          margin-top: 50px;

          .course-item {
            border-radius: 5px;
            transition: all 0.2s ease;
            overflow: hidden;
            box-shadow: 0 8px 20px 5px rgba(0, 0, 0, 0.07);
            margin-bottom: 30px;

            .course-image-box {
              .course-image {
                width: 290px;
                height: 230px;
                flex: 0 0 290px;
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                border-radius: 5px 5px 0 0;
                position: relative;

                .author-img {
                  position: absolute;
                  left: 20px;
                  top: 20px;

                  img {
                    max-width: 40px;
                    border-radius: 50%;
                    margin-right: 5px;
                  }

                  .title {
                    background: #ffffff;
                    padding: 3px 8px;
                    border-radius: 5px;

                    p {
                      font-size: 12px;
                      color: ${colors.black1};
                      font-weight: 500;
                      margin-bottom: -4px;
                    }

                    span {
                      font-size: 11px;
                      color: ${colors.text3};
                      font-weight: 500;
                    }
                  }

                  @media (max-width: 991px) {
                    top: unset;
                    bottom: 20px;
                  }
                }

                @media (max-width: 991px) {
                  width: 100%;
                }
              }
            }

            .course-content {
              background: #fff;
              padding: 20px 25px;

              h6.heading {
                padding-bottom: 12px;
                margin-bottom: 20px;
                position: relative;

                &:before {
                  position: absolute;
                  content: "";
                  background: ${colors.green};
                  width: 50px;
                  height: 2px;
                  bottom: 0;
                  left: 0;
                }

                a {
                  color: ${colors.black1};
                  font-weight: 600;
                  display: inline-block;

                  &:hover {
                    color: ${colors.green};
                  }
                }
              }

              p.desc {
                font-size: 14px;
                color: ${colors.text3};
                line-height: 25px;
                margin-bottom: 15px;
                white-space: normal;
                overflow-wrap: break-word;
                word-wrap: break-word;
              }
            }

            &:hover {
              box-shadow: 0 12px 25px rgba(0, 0, 0, 0.1);
            }

            @media (max-width: 991px) {
              display: block !important;
            }
          }
        }

        @media (max-width: 767px) {
          padding: 35px 0;
        }

        @media (max-width: 575px) {
          padding-bottom: 0;
        }
      }
    }
  }
`;
