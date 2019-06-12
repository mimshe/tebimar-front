import React from "react";

// reactstrap components
import {
    Row,
    Col,
    Container
} from "reactstrap";

class HomeFeatures extends React.Component {

    render() {
        return (
            <>
                <Container className="pb-5">
                    <div className="features-box mt-5">
                        <h4 className="title">Tebimar, a joyful treatment trip</h4>
                        <Row className="content mt-5">
                            <Col lg="4" md="4" className="item">
                                <div className="body p-3">
                                    <img src={require("assets/img/icons/005-file.svg")} alt=""/>
                                    <h5 className="title mt-3">Title</h5>    
                                    <p className="desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet</p>
                                </div>
                            </Col>
                            <Col lg="4" md="4" className="item">
                                <div className="body p-3">
                                    <img src={require("assets/img/icons/001-doctor.svg")} alt=""/>
                                    <h5 className="title mt-3">Title</h5>    
                                    <p className="desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet</p>
                                </div>
                            </Col>
                            <Col lg="4" md="4" className="item">
                                <div className="body p-3">
                                    <img src={require("assets/img/icons/002-support.svg")} alt=""/>
                                    <h5 className="title mt-3">Title</h5>    
                                    <p className="desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet</p>
                                </div>
                            </Col>
                            <Col lg="4" md="4" className="item">
                                <div className="body p-3">
                                    <img src={require("assets/img/icons/003-timer.svg")} alt=""/>
                                    <h5 className="title mt-3">Title</h5>    
                                    <p className="desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet</p>
                                </div>
                            </Col>
                            <Col lg="4" md="4" className="item">
                                <div className="body p-3">
                                    <img src={require("assets/img/icons/006-money.svg")} alt=""/>
                                    <h5 className="title mt-3">Title</h5>    
                                    <p className="desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet</p>
                                </div>
                            </Col>
                            <Col lg="4" md="4" className="item">
                                <div className="body p-3">
                                    <img src={require("assets/img/icons/004-chair.svg")} alt=""/>
                                    <h5 className="title mt-3">Title</h5>    
                                    <p className="desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </>
        );
    }
}

export default HomeFeatures;
