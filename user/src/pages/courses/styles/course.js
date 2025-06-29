import styled from "styled-components";
import { colors } from "../../../components/common/element/elements.js";

export const Styles = styled.div`

    /* Course Grid */
    .course-grid-area {
        padding: 70px 0;
        ${"" /* ithula iruinthu na potathuu */}
        display: flex;
        justify-content: center; /* Centers the content horizontally */
        align-items: center; /* Centers the content vertically */
        flex-direction: column; /* Stacks the content properly */
        text-align: center; /* Align text in the center */
        max-width: 1200px; /* Adjust the width as per your design */
        margin: 0 auto; /* Centers it horizontally */
        padding: 70px 0;
        .course-items {
            .course-item {
                border: 1px solid ${colors.border1};
                border-radius : 5px;
                transition : all 0.2s ease;
                overflow : hidden;
                margin-bottom: 30px;

                .course-image {
                    width              : 100%;
                    height             : 240px;
                    background-size    : cover;
                    background-position: center;
                    background-repeat  : no-repeat;
                    border-radius : 5px 5px 0 0;
                    position: relative;

                    .author-img {
                        position: absolute;
                        left    : 20px;
                        bottom  : 20px;

                        img {
                            max-width: 40px;
                            border-radius : 50%;
                            margin-right: 5px;
                        }

                        .title {
                            background: #ffffff;
                            padding   : 3px 8px;
                            border-radius : 5px;

                            p {
                                font-size    : 12px;
                                color        : ${colors.black1};
                                font-weight  : 500;
                                margin-bottom: -4px;
                            }

                            span {
                                font-size  : 11px;
                                color      : ${colors.text3};
                                font-weight: 500;
                            }
                        }

                    }

                    .course-price {
                        p {
                            font-size  : 16px;
                            color      : #ffffff;
                            background : ${colors.bg1};
                            position   : absolute;
                            right      : 20px;
                            bottom     : 20px;
                            padding    : 8px 10px;
                            font-weight: 500;
                            border-radius : 5px;
                        }
                    }

                    @media(max-width: 767px) {
                        height: 185px;
                    }
                }

                .course-content {
                    background: #fff;
                    padding   : 20px 25px;

                    h6.heading {
                        a {
                            color        : ${colors.black1};
                            font-weight  : 600;
                            display      : inline-block;
                            margin-bottom: 12px;

                            &:hover {
                                color: ${colors.green};
                            }
                        }
                    }

                    p.desc {
                        font-size     : 14px;
                        color         : ${colors.text3};
                        line-height   : 25px;
                        border-bottom : 1px solid ${colors.border1};
                        padding-bottom: 10px;
                        margin-bottom : 12px;
                    }

                    .course-face {

                        .duration,
                        .student {
                            p {
                                font-size: 13px;
                                color    : ${colors.text3};

                                i {
                                    font-size     : 16px;
                                    color         : ${colors.green};
                                    vertical-align: text-bottom;
                                    margin-right  : 3px;
                                }
                            }
                        }

                        .rating {
                            ul {
                                li {
                                    margin-right: 0;

                                    i {
                                        font-size: 14px;
                                        color    : ${colors.yellow};
                                    }

                                    &:last-child {
                                        font-size: 13px;
                                        color    : ${colors.text3};
                                    }
                                }
                            }
                        }
                    }
                }

                &:hover {
                    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.07);
                }
            }
        }

        @media(max-width: 767px) {
            padding: 40px 0 30px;
        }
    }

    /* Course List */
    .course-list-area {
        padding: 70px 0;
        .course-items2 {
            .course-item {
                border-radius : 5px;
                transition : all 0.2s ease;
                overflow : hidden;
                box-shadow: 0 8px 20px 5px rgba(0,0,0,0.07);
                margin-bottom: 30px;

                .course-image-box {
                    .course-image {
                        width              : 290px;
                        height             : 230px;
                        background-size    : cover;
                        background-position: center;
                        background-repeat  : no-repeat;
                        border-radius : 5px 5px 0 0;
                        position: relative;

                        .author-img {
                            position: absolute;
                            left    : 20px;
                            top  : 20px;

                            img {
                                max-width: 40px;
                                border-radius : 50%;
                                margin-right: 5px;
                            }

                            .title {
                                background: #ffffff;
                                padding   : 3px 8px;
                                border-radius : 5px;

                                p {
                                    font-size    : 12px;
                                    color        : ${colors.black1};
                                    font-weight  : 500;
                                    margin-bottom: -4px;
                                }

                                span {
                                    font-size  : 11px;
                                    color      : ${colors.text3};
                                    font-weight: 500;
                                }
                            }

                            @media(max-width: 991px) {
                                top  : unset;
                                bottom : 20px;
                            }
                        }

                        .course-price {
                            p {
                                font-size  : 16px;
                                color      : #ffffff;
                                background : ${colors.bg1};
                                position   : absolute;
                                right      : 20px;
                                top     : 20px;
                                padding    : 8px 10px;
                                font-weight: 500;
                                border-radius : 5px;

                                @media(max-width: 991px) {
                                    top  : unset;
                                    bottom : 20px;
                                }
                            }
                        }

                        @media(max-width: 991px) {
                            width: 100%;
                        }
                    }
                }

                .course-content {
                    background: #fff;
                    padding   : 20px 25px;

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
                            color        : ${colors.black1};
                            font-weight  : 600;
                            display      : inline-block;

                            &:hover {
                                color: ${colors.green};
                            }
                        }
                    }

                    .rating {
                        margin-bottom: 6px;
                        ul {
                            li {
                                margin-right: 0;

                                i {
                                    font-size: 14px;
                                    color    : ${colors.yellow};
                                }

                                &:last-child {
                                    font-size: 13px;
                                    color    : ${colors.text3};
                                }
                            }
                        }
                    }

                    p.desc {
                        font-size     : 14px;
                        color         : ${colors.text3};
                        line-height   : 25px;
                        margin-bottom : 15px;
                    }

                    a.details-btn {
                        font-size : 13px;
                        color : ${colors.green};
                        border : 1px solid ${colors.border3};
                        padding: 7px 15px;
                        border-radius: 5px;
                        font-weight: 500;
                        &:hover {
                            color : #ffffff;
                            background : ${colors.gr_bg};
                            border-color : ${colors.green};
                        }
                    }
                }

                &:hover {
                    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.1);
                }

                @media(max-width: 991px) {
                    display : block !important;
                }
            }
        }

        @media(max-width: 767px) {
            padding: 40px 0 30px;
        }
    }

    /* Course Details */
    .course-details-area {
        padding : 70px 0 78px;
        .course-details-top {
            .heading {
                h4 {
                    color : ${colors.black1};
                    font-weight: 600;
                    line-height: 35px;
                    margin-bottom: 25px;

                    @media(max-width: 575px) {
                        font-size : 20px;
                    }
                }
            }
            .course-top-overview {
                margin-bottom : 25px;
                .overviews {
                    .author {
                        margin-right : 20px;
                        padding-right : 20px;
                        margin-top: -3px;
                        border-right : 1px solid ${colors.border3};
                        img {
                            float : left;
                            max-width: 50px;
                            border-radius: 50%;
                            margin-right: 10px;
                        }
                        .author-name {
                            float : left;
                            margin-top: 3px;
                            h6 {
                                color : ${colors.black2};
                                font-weight: 600;
                                text-transform: uppercase;
                                margin-bottom: 5px;

                                @media(max-width: 767px) {
                                    font-size : 14px;
                                }
                            }
                            p {
                                font-size : 15px;
                                color : ${colors.text3};
                                font-weight: 500;

                                @media(max-width: 767px) {
                                    font-size : 14px;
                                }
                            }
                        }
                    }

                    .category {
                        margin-right : 20px;
                        padding-right : 20px;
                        border-right : 1px solid ${colors.border3};
                        h6 {
                            color : ${colors.black2};
                            font-weight: 600;
                            text-transform: uppercase;
                            margin-bottom: 5px;

                            @media(max-width: 767px) {
                                font-size : 14px;
                            }
                        }
                        p {
                            font-size : 15px;
                            color : ${colors.text3};
                            font-weight: 500;

                            @media(max-width: 767px) {
                                font-size : 14px;
                            }
                        }
                    }

                    .rating {
                        margin-right : 20px;
                        padding-right : 20px;
                        border-right : 1px solid ${colors.border3};
                        h6 {
                            color : ${colors.black2};
                            font-weight: 600;
                            text-transform: uppercase;
                            margin-bottom: 5px;

                            @media(max-width: 767px) {
                                font-size : 14px;
                            }
                        }
                        ul {
                            li {
                                margin-right: 1px;
                                i {
                                    font-size: 16px;
                                    color: ${colors.yellow};
                                }
                                &:last-child {
                                    font-size : 15px;
                                    color : ${colors.text3};
                                    font-weight: 500;
                                    margin-left: 5px;

                                    @media(max-width: 767px) {
                                        font-size : 14px;
                                    }
                                }
                            }
                        }
                    }

                    .price {
                        h6 {
                            color : ${colors.black2};
                            font-weight: 600;
                            text-transform: uppercase;
                            margin-bottom: 5px;

                            @media(max-width: 767px) {
                                font-size : 14px;
                            }
                        }
                        p {
                            font-size : 15px;
                            color : ${colors.text3};
                            font-weight: 500;

                            @media(max-width: 767px) {
                                font-size : 14px;
                            }
                        }
                    }
                }

                @media(max-width: 480px) {
                    display : none;
                }
            }
            .course-details-banner {
                margin-bottom: 40px;
                img {
                    border-radius : 5px;
                }
            }
            .course-tab-list {
                .nav {
                    display: inline-block;
                    border-radius: 5px;
                    box-shadow: 0 8px 25px rgba(0,0,0,0.1);
                    margin-bottom: 35px;
                    .nav-item {
                        display: inline-block;
                        a.nav-link {
                            font-size: 14px;
                            color: ${colors.black2};
                            font-weight: 500;
                            text-transform : uppercase;
                            padding: 12px 30px 10px;
                            border-radius: 5px;

                            @media(max-width: 991px) {
                                padding: 12px 16px 9px;
                            }
                        }
                        a.nav-link.active {
                            background : ${colors.gr_bg};
                            color : #ffffff;
                        }
                    }
                }
                .tab-content {
                    .overview-tab {
                        h5 {
                            color: ${colors.black2};
                            font-weight: 600;
                            padding-bottom: 10px;
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

                            @media(max-width: 575px) {
                                font-size : 17px;
                            }                            
                        }
                        p {
                            font-size: 15px;
                            color: ${colors.text2};
                            line-height: 25px;

                            @media(max-width: 575px) {
                                font-size : 14px;
                            }
                        }

                        .course-desc {
                            margin-bottom: 40px;
                        }

                        .course-feature {
                            margin-bottom: 40px;
                            ul {
                                margin-top: 20px;
                                li {
                                    font-size : 14px;
                                    color: ${colors.text3};
                                    line-height : 25px;
                                    margin-bottom : 10px;
                                    i {
                                        font-size : 20px;
                                        color: ${colors.green};
                                        float: left;
                                        height: 40px;
                                        line-height: 27px;
                                        margin-right: 10px;
                                    }
                                    &:last-child {
                                        margin-bottom: 0;
                                    }
                                }
                            }
                        }
                        .course-learn {
                            margin-bottom: 40px;
                            ul {
                                margin-top: 20px;
                                li {
                                    font-size: 14px;
                                    color: ${colors.text3};
                                    line-height: 25px;
                                    margin-bottom: 15px;
                                    i {
                                        float: left;
                                        color: ${colors.green};
                                        border: 1px solid ${colors.border3};
                                        width: 35px;
                                        height: 35px;
                                        border-radius: 50%;
                                        text-align: center;
                                        padding-top: 9px;
                                        margin-top: 8px;
                                        margin-right: 15px;
                                    }
                                    &:last-child {
                                        margin-bottom: 0;
                                    }
                                }
                            }
                        }
                        .course-share {
                            ul.social {
                                margin-top: 30px;
                                li {
                                    a {
                                        text-align: center;
                                        position  : relative;
                                        height    : 18px;
                                        display   : inline-block;

                                        &:before {
                                            content           : "";
                                            position          : absolute;
                                            border-width      : 9px 17px;
                                            border-style      : solid;
                                            border-top-color  : transparent;
                                            border-right-color: transparent;
                                            border-left-color : transparent;
                                            top               : -18px;
                                            left              : 0;
                                            z-index           : 1;
                                            transition : all 0.2s ease;
                                        }

                                        &:after {
                                            content            : "";
                                            position           : absolute;
                                            border-width       : 9px 17px;
                                            border-style       : solid;
                                            border-right-color : transparent;
                                            border-bottom-color: transparent;
                                            border-left-color  : transparent;
                                            bottom             : -18px;
                                            left               : 0;
                                            z-index            : 1;
                                            transition : all 0.2s ease;
                                        }

                                        i {
                                            font-size: 14px;
                                            color    : #ffffff;
                                            width    : 34px;
                                        }

                                        &:hover {
                                            background-color: ${
                                              colors.green
                                            } !important;

                                            &:before {
                                                border-bottom-color: ${
                                                  colors.green
                                                } !important;
                                            }

                                            &:after {
                                                border-top-color: ${
                                                  colors.green
                                                } !important;
                                            }
                                        }
                                    }

                                    &:nth-child(1) {
                                        a {
                                            background-color: #4267B2;

                                            &:before {
                                                border-bottom-color: #4267B2;
                                            }

                                            &:after {
                                                border-top-color: #4267B2;
                                            }
                                        }
                                    }

                                    &:nth-child(2) {
                                        a {
                                            background-color: #1DA1F2;

                                            &:before {
                                                border-bottom-color: #1DA1F2;
                                            }

                                            &:after {
                                                border-top-color: #1DA1F2;
                                            }
                                        }
                                    }

                                    &:nth-child(3) {
                                        a {
                                            background-color: #2867B2;

                                            &:before {
                                                border-bottom-color: #2867B2;
                                            }

                                            &:after {
                                                border-top-color: #2867B2;
                                            }
                                        }
                                    }

                                    &:nth-child(4) {
                                        a {
                                            background-color: #DD1343;

                                            &:before {
                                                border-bottom-color: #DD1343;
                                            }

                                            &:after {
                                                border-top-color: #DD1343;
                                            }
                                        }
                                    }

                                    &:nth-child(5) {
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
                        }
                    }
                    .curriculum-tab {
                        .instructor-area {
                            padding: 70px 0;

                            .instructor-item {
                                position: relative;
                                margin-bottom: 62px;
                            
                                a {
                                    img {
                                        border-radius: 5px;
                                    }
                                }

                                .img-content {
                                    background: #ffffff;
                                    box-shadow: 0 10px 18px rgba(0, 0, 0, 0.07);
                                    position: absolute;
                                    bottom: -30px;
                                    left: 10%;
                                    width: 80%;
                                    z-index: 1;
                                    border-radius: 5px;
                                    padding: 15px 0;

                                    h5 {
                                        margin-bottom: 5px;

                                        a {
                                            color: ${colors.black2};
                                            font-weight: 600;

                                            &:hover {
                                                color: ${colors.green};
                                            }
                                        }
                                    }

                                    p {
                                        font-size: 14px;
                                        color: ${colors.text3};
                                        font-weight: 500;
                                        margin-bottom: 5px;
                                    }

                                    ul {
                                        li {
                                            a {
                                                i {
                                                    font-size: 14px;
                                                    color: #ffffff;
                                                    width: 33px;
                                                    height: 33px;
                                                    border-radius: 50%;
                                                    padding-top: 10px;
                                                    transition: all 0.2s ease;

                                                    &:hover {
                                                        background-color: ${
                                                          colors.green
                                                        } !important;
                                                    }
                                                }

                                                i.fa-facebook-f {
                                                    background-color: #4267B2;
                                                }

                                                i.fa-twitter {
                                                    background-color: #1DA1F2;
                                                }

                                                i.fa-youtube {
                                                    background-color: #DD1343;
                                                }
                                            }
                                        }
                                    }
                                }
                            }

                            @media(max-width: 767px) {
                                padding: 40px 0 30px;
                            }                   
                        }
                    }


                    .instructor-tab {
                        h5 {
                            color: ${colors.black2};
                            font-weight: 600;
                            padding-bottom: 10px;
                            margin-bottom: 35px;
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

                            @media(max-width: 575px) {
                                font-size : 17px;
                            }
                        }

                        .instructor-item {
                            margin-bottom: 30px;

                            .instructor-img {
                                img {
                                    border-radius : 5px;
                                }
                            }

                            .instructor-content {
                                position: relative;
                                width: 100%;
                                display: flex;
                                justify-content: center;

                                .instructor-box {
                                    box-shadow: 0 0px 20px rgba(0, 0, 0, 0.08);
                                    padding: 25px;
                                    background: #ffffff;
                                    border-radius: 5px;
                                    position: relative;
                                    z-index: 1;
                                    width: 100%;
                                    max-width: 1050px;
                                    min-height: 200px;
                                    overflow: hidden;
                                    top: 20px;
                                    left: -75px;

                                    @media (max-width: 1200px) {
                                    max-width: 960px;
                                    left: -60px;
                                    }

                                    @media (max-width: 992px) {
                                    max-width: 720px;
                                    left: -40px;
                                    padding: 20px;
                                    }

                                    @media (max-width: 768px) {
                                    max-width: 540px;
                                    left: -20px;
                                    padding: 18px;
                                    }

                                    @media (max-width: 576px) {
                                    max-width: 100%;
                                    left: 0;
                                    padding: 15px;
                                    top: 10px;
                                    }

        .top-content {
            margin-bottom: 20px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            flex-wrap: wrap;

            .instructor-name {
                h6 {
                    color: ${colors.black2};
                    font-weight: 600;
                    text-transform: uppercase;
                    margin-bottom: 12px;
                    font-size: 16px;

                    @media (max-width: 575px) {
                        font-size: 14px;
                    }
                }

                p {
                    font-size: 14px;
                    color: ${colors.text3};
                    font-weight: 500;
                }
            }

            .instructor-social {
                margin-top: 10px;

                ul.social {
                    padding: 0;
                    display: flex;
                    gap: 8px;

                    li {
                        list-style: none;

                        a {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            width: 28px;
                            height: 28px;
                            border-radius: 50%;
                            color: #fff;
                            font-size: 13px;
                            transition: background-color 0.3s;

                            &:hover {
                                background-color: ${colors.green};
                            }
                        }

                        &:nth-child(1) a {
                            background-color: #4267B2;
                        }

                        &:nth-child(2) a {
                            background-color: #1DA1F2;
                        }

                        &:nth-child(3) a {
                            background-color: #2867B2;
                        }

                        &:nth-child(4) a {
                            background-color: #DD1343;
                        }
                    }
                }
            }
        }

        .instructor-desk {
            p {
                font-size: 15px;
                color: ${colors.text2};
                line-height: 25px;

                @media (max-width: 575px) {
                    font-size: 14px;
                }
            }
        }
    }
}

                                }
                            }

                            &:last-child {
                                margin-bottom: 0;
                            }
                        }
                    }

                    .review-tab {
                        .review-comments {
                            margin-bottom: 40px;
                            h5 {
                                color: ${colors.black2};
                                font-weight: 600;
                                padding-bottom: 10px;
                                margin-bottom: 35px;
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

                                @media(max-width: 575px) {
                                    font-size : 17px;
                                }
                            }
                            .comment-box {
                                border-bottom: 1px solid ${colors.border1};
                                padding-bottom: 20px;
                                margin-bottom: 25px;
                                .comment-image {
                                    img {
                                        max-width : 100px;
                                        border-radius : 5px;
                                        margin-right : 20px;
                                    }
                                }
                                .comment-content {
                                    .content-title {
                                        .comment-writer {
                                            h6 {
                                                color: ${colors.black2};
                                                font-weight: 600;
                                                margin-bottom : 10px;

                                                @media(max-width: 575px) {
                                                    font-size : 14px;
                                                }
                                            }
                                            p {
                                                font-size : 12px;
                                                color: ${colors.text3};
                                                margin-bottom: 5px;
                                            }
                                            ul {
                                                margin-bottom: 8px;
                                                li {
                                                    margin-right: 1px;
                                                    i {
                                                        font-size: 16px;
                                                        color: ${colors.yellow};
                                                    }
                                                    &:last-child {
                                                        font-size: 13px;
                                                        color: ${colors.text2};
                                                        margin-left: 5px;
                                                    }
                                                }
                                            }
                                        }
                                        .reply-btn {
                                            button {
                                                font-size : 14px;
                                                color: ${colors.green};
                                                background : transparent;
                                                border : 1px solid ${
                                                  colors.border3
                                                };
                                                font-weight: 500;
                                                border-radius: 25px;
                                                padding: 4px 12px 3px;
                                                margin-top : 10px;
                                                i {
                                                    font-size: 17px;
                                                    vertical-align: text-top;
                                                }
                                                &:hover {
                                                    color : #ffffff;
                                                    background : ${
                                                      colors.gr_bg
                                                    };
                                                    border-color : ${
                                                      colors.green
                                                    };
                                                }
                                            }
                                        }
                                    }
                                    .comment-desc {
                                        p {
                                            font-size: 14px;
                                            color: ${colors.text3};
                                            line-height: 25px;
                                        }
                                    }
                                }
                                &:last-child {
                                    border-bottom : none;
                                    padding-bottom : 0;
                                    margin-bottom : 0;
                                }
                            }
                        }

                        .review-form {
                            h5 {
                                color: ${colors.black2};
                                font-weight: 600;
                                padding-bottom: 10px;
                                margin-bottom: 25px;
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

                                @media(max-width: 575px) {
                                    font-size : 17px;
                                }
                            }
                        }
                    }
                }
            }

            @media(max-width: 767px) {
                margin-bottom: 40px;
            }
        }

        .single-details-sidbar {
            .course-details-feature {
                box-shadow: 0 8px 25px rgba(0,0,0,0.1);
                border-radius: 5px;
                padding: 15px 20px 20px;
                h5.title {
                    color: ${colors.black1};
                    font-weight: 600;
                    padding-bottom: 10px;
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

                    @media(max-width: 575px) {
                        font-size : 17px;
                    }
                }

                ul.feature-list {
                    margin-bottom: 20px;
                    li {
                        border-top: 1px dashed ${colors.border3};
                        padding: 12px 0;
                        font-size : 14px;
                        color : ${colors.black2};
                        font-weight: 500;
                        i {
                            font-size : 20px;
                            color: ${colors.green};
                            vertical-align: top;
                            margin-right : 2px;
                        }
                        span {
                            float : right;
                            font-size: 13px;
                            color: ${colors.text3};
                            font-weight: 400;
                            line-height: 20px;
                        }
                        &:first-child {
                            border-top : none;
                            padding-top : 0;
                        }
                        &:last-child {
                            padding-bottom : 0;
                        }
                    }
                }

                button.enroll-btn {
                    font-size: 16px;
                    color: #fff;
                    background: ${colors.gr_bg};
                    display: inline-block;
                    width: 100%;
                    height: 40px;
                    font-weight : 500;
                    border : none;
                    padding: 9px;
                    border-radius: 5px;
                    &:hover {
                        background: ${colors.gr_bg2};
                    }

                    @media(max-width: 575px) {
                        font-size : 14px;
                    }
                }

                @media(max-width: 1199px) {
                    padding: 12px 15px 15px;
                }
            }
        }

        @media(max-width: 767px) {
            padding: 20px 0 5px;
        }
    }
`;
