import React from "react";
// reactstrap components
import {
    Col,
    Button
} from "reactstrap";

class RecommendedPackages extends React.Component {

    render() {
        return (
            <Col className="mt-4" lg="12" md="12">
                <div className="categories-box">
                    <div className="Header">
                        <div className="d-flex Header">
                            <h3 className="title p-2">Recommended Packages</h3>
                            <Button type="button" color="secondary" className="text-t-black mt-1 mb-1 ml-auto">
                                <span className="d-none d-lg-block d-md-block">
                                All Packages
                                <i className="fa fa-chevron-right pl-2"></i>
                                </span>
                                <i className="fa fa-chevron-right d-md-none d-lg-none mr-1 ml-1"></i>
                            </Button>
                        </div>
                    </div>
                    <div className="content row">
                        <Col lg="3" md="3">
                            <div className="p-2">
                                <div className="item">
                                    <img src={require("assets/img/img.jpg")} alt=""/>
                                    <h5 className="title">Title</h5>    
                                    <div className="overlay"></div>                        
                                </div>
                            </div>
                        </Col>
                        <Col lg="3" md="3">
                        <div className="p-2">
                            <div className="item">
                                <img src={require("assets/img/img.jpg")} alt=""/>
                                <h5 className="title">Title</h5>
                                <div className="overlay"></div>
                            </div>                                
                        </div>
                        </Col>
                        <Col lg="3" md="3">
                        <div className="p-2">
                            <div className="item">
                                <img src={require("assets/img/img.jpg")} alt=""/>
                                <h5 className="title">Title</h5>
                                <div className="overlay"></div>                        
                            </div>                                
                        </div>
                        </Col>
                        <Col lg="3" md="3">
                        <div className="p-2">
                            <div className="item">
                                <img src={require("assets/img/img.jpg")} alt=""/>
                                <h5 className="title">Title</h5>
                                <div className="overlay"></div>
                            </div>                                
                        </div>
                        </Col>
                    </div>
                </div>
            </Col>
        );
    }
}

export default RecommendedPackages;
