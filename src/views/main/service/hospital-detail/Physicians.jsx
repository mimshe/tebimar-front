import React from "react";
// reactstrap components
import {
    Row,
    Col,
    Button
} from "reactstrap";
import user from '../../../../assets/img/theme/team-3-800x800.jpg'

class Physicians extends React.Component {

    render() {
        return (
            <Col className="mt-4" lg="12" md="12">
                <div className="physicians-box">             
                    <div className="Header">
                        <div className="d-flex Header">
                            <h3 className="title p-2">Physicians</h3>
                            <Button type="button" color="secondary" className="text-t-black mt-1 mb-1 ml-auto">
                                <span className="d-none d-lg-block d-md-block">
                                All Physicians
                                <i className="fa fa-chevron-right pl-2"></i>
                                </span>
                                <i className="fa fa-chevron-right d-md-none d-lg-none mr-1 ml-1"></i>
                            </Button>
                        </div>
                    </div>
                    <div className="content">
                        <Row>
                            <Col lg="2" md="3" sm="6" className="p-2">
                                <div className="physician-card text-center p-2">
                                    <img src={user} alt="" />
                                    <h4 className="name mb-0">Dr Ali Hosseini</h4>
                                    <h4 className="expertise">Heart & Head</h4>
                                    <div className="rate">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star-half-alt"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </div>
                                    <Button className="mt-2" color="t-default" block type="button">Profile</Button>
                                </div>
                            </Col>
                            <Col lg="2" md="3" sm="6" className="p-2">
                                <div className="physician-card text-center p-2">
                                    <img src={user} alt="" />
                                    <h4 className="name mb-0">Dr Ali Hosseini</h4>
                                    <h4 className="expertise">Heart & Head</h4>
                                    <div className="rate">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star-half-alt"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </div>
                                    <Button className="mt-2" color="t-default" block type="button">Profile</Button>
                                </div>
                            </Col>
                            <Col lg="2" md="3" sm="6" className="p-2">
                                <div className="physician-card text-center p-2">
                                    <img src={user} alt="" />
                                    <h4 className="name mb-0">Dr Ali Hosseini</h4>
                                    <h4 className="expertise">Heart & Head</h4>
                                    <div className="rate">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star-half-alt"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </div>
                                    <Button className="mt-2" color="t-default" block type="button">Profile</Button>
                                </div>
                            </Col>
                            <Col lg="2" md="3" sm="6" className="p-2">
                                <div className="physician-card text-center p-2">
                                    <img src={user} alt="" />
                                    <h4 className="name mb-0">Dr Ali Hosseini</h4>
                                    <h4 className="expertise">Heart & Head</h4>
                                    <div className="rate">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star-half-alt"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </div>
                                    <Button className="mt-2" color="t-default" block type="button">Profile</Button>
                                </div>
                            </Col>
                            <Col lg="2" md="3" sm="6" className="p-2">
                                <div className="physician-card text-center p-2">
                                    <img src={user} alt="" />
                                    <h4 className="name mb-0">Dr Ali Hosseini</h4>
                                    <h4 className="expertise">Heart & Head</h4>
                                    <div className="rate">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star-half-alt"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </div>
                                    <Button className="mt-2" color="t-default" block type="button">Profile</Button>
                                </div>
                            </Col>
                            <Col lg="2" md="3" sm="6" className="p-2">
                                <div className="physician-card text-center p-2">
                                    <img src={user} alt="" />
                                    <h4 className="name mb-0">Dr Ali Hosseini</h4>
                                    <h4 className="expertise">Heart & Head</h4>
                                    <div className="rate">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star-half-alt"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </div>
                                    <Button className="mt-2" color="t-default" block type="button">Profile</Button>
                                </div>
                            </Col>
                            

                        </Row>
                    </div>
                </div>
        </Col>
        );
    }
}

export default Physicians;
