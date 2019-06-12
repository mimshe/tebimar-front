import React from "react";

// reactstrap components
import {
    Row,
    Col,
    Container
} from "reactstrap";
import { Carousel } from 'antd';


class HomeRecommendedPackages extends React.Component {

    render() {
        return (
            <>
                <div className="categories-box-dark p-5">
                    <div className="Header mb-2">
                        <div className="d-flex Header">
                            <h4 className="title p-2">Recommended Packages</h4>
                            <button type="button" className="btn btn-sm btn-t-secondary mt-1 mb-1 ml-auto">
                                <span className="d-none d-lg-block d-md-block">
                                All Packages
                                <i className="fa fa-chevron-right pl-2"></i>
                                </span>
                                <i className="fa fa-chevron-right d-md-none d-lg-none mr-1 ml-1"></i>
                            </button>
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
            </>
        );
    }
}
export default HomeRecommendedPackages;
