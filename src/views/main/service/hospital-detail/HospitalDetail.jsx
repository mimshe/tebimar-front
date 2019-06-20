import React from "react";
import Navigation from "../Navigation.jsx"
// reactstrap components
import {
    Row,
    Col,
    Button,
    Container
} from "reactstrap";
import { Carousel } from 'antd';

import fa from '../../../../assets/img/language/iran.png';
import en from '../../../../assets/img/language/united-kingdom.png';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import user from '../../../../assets/img/theme/team-3-800x800.jpg'
import Comments from "./Comments.jsx";
import RecommendedPackages from "./RecommendedPackages.jsx";
import Physicians from "./Physicians.jsx";
import Costs from "./Costs.jsx";

class HospitalDetail extends React.Component {

    render() {
        const percentage = 66;
        return (
            <Container className="pb-5">
                <Row className="d-flex flex-row">
                    <Navigation />
                    <Col className="mt-4" lg="4" md="12">
                    <div className="hospital-detail-box">
                        <div className="header d-flex justify-content-between p-3">
                            <h1 className="title">Sadr hospital</h1>
                            <div className="rate-box ml-lg-auto">
                                <div className="rate">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star-half-alt"></i>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i>
                                </div>
                                <div className="rate-point">45/5</div>
                            </div>
                        </div>
                        <div className="body">
                            <div className="content pl-3 pr-3 pb-3 pt-0">
                                <div className="item d-flex align-items-md-start p-2">
                                    <i className="fa fa-map-marked-alt"></i>
                                    <span className="ml-3">Iran - Tehran - Meydan Teymouri Box Coworking space</span>
                                </div>
                                <div className="item d-flex align-items-md-start p-2">
                                    <i className="fa fa-phone"></i>
                                    <span className="ml-3">+98 021 3524 1479</span>
                                </div>
                                <Button className="mt-2" color="t-default" block outline type="button">
                                    deselect
                                </Button>                            
                            </div>
                        </div>
                    </div>
                    </Col>
                    <Col className="mt-4" lg="8" md="12">
                        <Carousel autoplay>
                            <div>
                                <div
                                    style={{
                                        minHeight: "246px",
                                        backgroundImage:
                                        "url(" + require("assets/img/1.jpg") + ")",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center top"
                                    }}>
                                </div>
                            </div>
                            <div>
                                <div
                                    style={{
                                        minHeight: "262px",
                                        backgroundImage:
                                        "url(" + require("assets/img/1.jpg") + ")",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center top"
                                    }}>
                                </div>
                            </div>
                            <div>
                                <div
                                    style={{
                                        minHeight: "262px",
                                        backgroundImage:
                                        "url(" + require("assets/img/1.jpg") + ")",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center top"
                                    }}>
                                </div>
                            </div>
                        </Carousel>
                    </Col>
                    <Col className="mt-4" lg="4" md="12">
                        <div className="hospital-detail-box">
                            <div className="header d-flex justify-content-between p-3">
                                <h4 className="title">About Hospital</h4>
                            </div>
                            <div className="body">
                                <div className="content pl-3 pr-3 pb-3 pt-0">
                                    <p className="mb-0 pl-2 pr-2">
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                                    </p>  
                                    <div className="item d-flex align-items-md-start p-2">
                                        <span className="item-title">Spoken Lan</span>
                                        <span className="ml-2">
                                            <img className="m-1" src={fa} alt="" />
                                            <img className="m-1" src={en} alt="" />
                                        </span>
                                    </div>  
                                    <div className="item row pl-3 pr-3 pb-0 pt-0">
                                        <span className="facility col-4 p-2">
                                            <i className="fa fa-check"></i>
                                            <span className="ml-1">Rooms</span>
                                        </span>
                                        <span className="facility col-4 p-2">
                                            <i className="fa fa-check"></i>
                                            <span className="ml-1">Parking</span>
                                        </span>
                                        <span className="facility col-4 p-2">
                                            <i className="fa fa-check"></i>
                                            <span className="ml-1">Pool</span>
                                        </span>
                                        <span className="facility col-4 p-2">
                                            <i className="fa fa-check"></i>
                                            <span className="ml-1">Rest</span>
                                        </span>
                                        <span className="facility col-4 p-2">
                                            <i className="fa fa-check"></i>
                                            <span className="ml-1">Spa</span>
                                        </span>
                                        <span className="facility col-4 p-2">
                                            <i className="fa fa-check"></i>
                                            <span className="ml-1">Sea</span>
                                        </span>
                                        <span className="facility col-4 p-2">
                                            <i className="fa fa-check"></i>
                                            <span className="ml-1">Bath</span>
                                        </span>
                                    </div>                    
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="mt-4" lg="8" md="12">
                        <div className="hospital-detail-box d-flex flex-row row">
                            <Col className="border-right" lg="7">
                                <div className="header d-flex justify-content-between mt-3 mb-3">
                                    <h4 className="title">About Hospital</h4>
                                </div>
                                <div className="body">
                                    <div className="content pl-3 pr-3 pb-3 pt-0">
                                        <Row>
                                            <Col className="p-2 text-center" lg="3" md="3" sm="4" xs="6">
                                                <div className="circle-progress">
                                                    <CircularProgressbar
                                                        value="6.2"
                                                        text="6.2"
                                                        styles={{
                                                            root: {},
                                                            path: {
                                                                stroke: `rgb(24, 187, 24, ${percentage / 100})`,
                                                                strokeLinecap: 'butt',
                                                                transition: 'stroke-dashoffset 0.5s ease 0s',
                                                                transform: 'rotate(0.25turn)',
                                                                transformOrigin: 'center center',
                                                            },
                                                            trail: {
                                                                stroke: '#e0e0e0',
                                                                strokeLinecap: 'butt',
                                                                transform: 'rotate(0.25turn)',
                                                                transformOrigin: 'center center',
                                                            },
                                                            text: {
                                                                fill: '#808080',
                                                                fontSize: '16px',
                                                            },
                                                            background: {
                                                                fill: '#3e98c7',
                                                            },
                                                            }} />
                                                </div>
                                                <h5 className="mb-0 mt-1 text-t-gray">Cleaners</h5>
                                            </Col>
                                            <Col className="p-2 text-center" lg="3" md="3" sm="4" xs="6">
                                                <div className="circle-progress">
                                                    <CircularProgressbar
                                                        value="6.2"
                                                        text="6.2"
                                                        styles={{
                                                            root: {},
                                                            path: {
                                                                stroke: `rgb(24, 187, 24, ${percentage / 100})`,
                                                                strokeLinecap: 'butt',
                                                                transition: 'stroke-dashoffset 0.5s ease 0s',
                                                                transform: 'rotate(0.25turn)',
                                                                transformOrigin: 'center center',
                                                            },
                                                            trail: {
                                                                stroke: '#e0e0e0',
                                                                strokeLinecap: 'butt',
                                                                transform: 'rotate(0.25turn)',
                                                                transformOrigin: 'center center',
                                                            },
                                                            text: {
                                                                fill: '#808080',
                                                                fontSize: '16px',
                                                            },
                                                            background: {
                                                                fill: '#3e98c7',
                                                            },
                                                            }} />
                                                </div>
                                                <h5 className="mb-0 mt-1 text-t-gray">Cleaners</h5>
                                            </Col>
                                            <Col className="p-2 text-center" lg="3" md="3" sm="4" xs="6">
                                                <div className="circle-progress">
                                                    <CircularProgressbar
                                                        value="6.2"
                                                        text="6.2"
                                                        styles={{
                                                            root: {},
                                                            path: {
                                                                stroke: `rgb(24, 187, 24, ${percentage / 100})`,
                                                                strokeLinecap: 'butt',
                                                                transition: 'stroke-dashoffset 0.5s ease 0s',
                                                                transform: 'rotate(0.25turn)',
                                                                transformOrigin: 'center center',
                                                            },
                                                            trail: {
                                                                stroke: '#e0e0e0',
                                                                strokeLinecap: 'butt',
                                                                transform: 'rotate(0.25turn)',
                                                                transformOrigin: 'center center',
                                                            },
                                                            text: {
                                                                fill: '#808080',
                                                                fontSize: '16px',
                                                            },
                                                            background: {
                                                                fill: '#3e98c7',
                                                            },
                                                            }} />
                                                </div>
                                                <h5 className="mb-0 mt-1 text-t-gray">Cleaners</h5>
                                            </Col>
                                            <Col className="p-2 text-center" lg="3" md="3" sm="4" xs="6">
                                                <div className="circle-progress">
                                                    <CircularProgressbar
                                                        value="6.2"
                                                        text="6.2"
                                                        styles={{
                                                            root: {},
                                                            path: {
                                                                stroke: `rgb(24, 187, 24, ${percentage / 100})`,
                                                                strokeLinecap: 'butt',
                                                                transition: 'stroke-dashoffset 0.5s ease 0s',
                                                                transform: 'rotate(0.25turn)',
                                                                transformOrigin: 'center center',
                                                            },
                                                            trail: {
                                                                stroke: '#e0e0e0',
                                                                strokeLinecap: 'butt',
                                                                transform: 'rotate(0.25turn)',
                                                                transformOrigin: 'center center',
                                                            },
                                                            text: {
                                                                fill: '#808080',
                                                                fontSize: '16px',
                                                            },
                                                            background: {
                                                                fill: '#3e98c7',
                                                            },
                                                            }} />
                                                </div>
                                                <h5 className="mb-0 mt-1 text-t-gray">Cleaners</h5>
                                            </Col>
                                            <Col className="p-2 text-center" lg="3" md="3" sm="4" xs="6">
                                                <div className="circle-progress">
                                                    <CircularProgressbar
                                                        value="6.2"
                                                        text="6.2"
                                                        styles={{
                                                            root: {},
                                                            path: {
                                                                stroke: `rgb(24, 187, 24, ${percentage / 100})`,
                                                                strokeLinecap: 'butt',
                                                                transition: 'stroke-dashoffset 0.5s ease 0s',
                                                                transform: 'rotate(0.25turn)',
                                                                transformOrigin: 'center center',
                                                            },
                                                            trail: {
                                                                stroke: '#e0e0e0',
                                                                strokeLinecap: 'butt',
                                                                transform: 'rotate(0.25turn)',
                                                                transformOrigin: 'center center',
                                                            },
                                                            text: {
                                                                fill: '#808080',
                                                                fontSize: '16px',
                                                            },
                                                            background: {
                                                                fill: '#3e98c7',
                                                            },
                                                            }} />
                                                </div>
                                                <h5 className="mb-0 mt-1 text-t-gray">Cleaners</h5>
                                            </Col>
                                            <Col className="p-2 text-center" lg="3" md="3" sm="4" xs="6">
                                                <div className="circle-progress">
                                                    <CircularProgressbar
                                                        value="6.2"
                                                        text="6.2"
                                                        styles={{
                                                            root: {},
                                                            path: {
                                                                stroke: `rgb(24, 187, 24, ${percentage / 100})`,
                                                                strokeLinecap: 'butt',
                                                                transition: 'stroke-dashoffset 0.5s ease 0s',
                                                                transform: 'rotate(0.25turn)',
                                                                transformOrigin: 'center center',
                                                            },
                                                            trail: {
                                                                stroke: '#e0e0e0',
                                                                strokeLinecap: 'butt',
                                                                transform: 'rotate(0.25turn)',
                                                                transformOrigin: 'center center',
                                                            },
                                                            text: {
                                                                fill: '#808080',
                                                                fontSize: '16px',
                                                            },
                                                            background: {
                                                                fill: '#3e98c7',
                                                            },
                                                            }} />
                                                </div>
                                                <h5 className="mb-0 mt-1 text-t-gray">Cleaners</h5>
                                            </Col>
                                            <Col className="p-2 text-center" lg="3" md="3" sm="4" xs="6">
                                                <div className="circle-progress">
                                                    <CircularProgressbar
                                                        value="6.2"
                                                        text="6.2"
                                                        styles={{
                                                            root: {},
                                                            path: {
                                                                stroke: `rgb(24, 187, 24, ${percentage / 100})`,
                                                                strokeLinecap: 'butt',
                                                                transition: 'stroke-dashoffset 0.5s ease 0s',
                                                                transform: 'rotate(0.25turn)',
                                                                transformOrigin: 'center center',
                                                            },
                                                            trail: {
                                                                stroke: '#e0e0e0',
                                                                strokeLinecap: 'butt',
                                                                transform: 'rotate(0.25turn)',
                                                                transformOrigin: 'center center',
                                                            },
                                                            text: {
                                                                fill: '#808080',
                                                                fontSize: '16px',
                                                            },
                                                            background: {
                                                                fill: '#3e98c7',
                                                            },
                                                            }} />
                                                </div>
                                                <h5 className="mb-0 mt-1 text-t-gray">Cleaners</h5>
                                            </Col>
                                            <Col className="p-2 text-center" lg="3" md="3" sm="4" xs="6">
                                                <div className="circle-progress">
                                                    <CircularProgressbar
                                                        value="6.2"
                                                        text="6.2"
                                                        styles={{
                                                            root: {},
                                                            path: {
                                                                stroke: `rgb(24, 187, 24, ${percentage / 100})`,
                                                                strokeLinecap: 'butt',
                                                                transition: 'stroke-dashoffset 0.5s ease 0s',
                                                                transform: 'rotate(0.25turn)',
                                                                transformOrigin: 'center center',
                                                            },
                                                            trail: {
                                                                stroke: '#e0e0e0',
                                                                strokeLinecap: 'butt',
                                                                transform: 'rotate(0.25turn)',
                                                                transformOrigin: 'center center',
                                                            },
                                                            text: {
                                                                fill: '#808080',
                                                                fontSize: '16px',
                                                            },
                                                            background: {
                                                                fill: '#3e98c7',
                                                            },
                                                            }} />
                                                </div>
                                                <h5 className="mb-0 mt-1 text-t-gray">Cleaners</h5>
                                            </Col>
                                        </Row>

                                        <Button className="mt-2" color="t-default" block outline type="button">
                                            Log in to Rate
                                        </Button>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="5" className="d-none d-lg-block d-xl-block d-md-block d-sm-none d-xs-none">
                                <div className="header d-flex justify-content-between mt-3 mb-3">
                                    <h4 className="title">Comments</h4>
                                </div>
                                <div className="body">
                                    <div className="content pl-2 pr-2 pb-3 pt-0">
                                        <div className="mini-comment-box">
                                            <div className="item d-flex align-items-md-start">
                                                <img src={user} alt="" />
                                                <div className="content ml-2">
                                                    <h5 className="title">Sara <small>from NY</small></h5>
                                                    <p className="desc">Lorem ipsum ipsum ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy onsectetuer</p>
                                                </div>
                                            </div>
                                            <div className="item d-flex align-items-md-start">
                                                <img src={user} alt="" />
                                                <div className="content ml-2">
                                                    <h5 className="title">Alex <small>from NY</small></h5>
                                                    <p className="desc">Lorem ipsum ipsum ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy onsectetuer</p>
                                                </div>
                                            </div>
                                            <div className="item d-flex align-items-md-start">
                                                <img src={user} alt="" />
                                                <div className="content ml-2">
                                                    <h5 className="title">Deby <small>from NY</small></h5>
                                                    <p className="desc">Lorem ipsum ipsum ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy onsectetuer</p>
                                                </div>
                                            </div>
                                        </div>

                                        <Button className="mt-2 text-t-black" color="secondary" block outline type="button">
                                            <span>more comment</span>
                                            <i className="fa fa-chevron-down ml-2"></i>
                                        </Button>
                                    </div>
                                </div>
                            </Col>
                        </div>
                    </Col>

                    <Physicians />
                    <RecommendedPackages />
                    <Costs />
                    <Comments />
                </Row>
            </Container>
        );
    }
}

export default HospitalDetail;
