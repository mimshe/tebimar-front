import React from "react";

// reactstrap components
import {
    Card,
    //CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Row,
    Col,
    Container
} from "reactstrap";


import ReactPhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/dist/style.css'
import LoadingButton from "../../../components/Custom/LoadingButton";
import HomeFeatures from "./Home-Features";
import HomeRecommendedPackages from "./Home-Recommended-Packages";

class Home extends React.Component {

    render() {
        return (
            <>
                <Container className="pb-5">
                    <div className="mt-4">
                        <div className="categories-box">
                            <div className="Header">
                                <div className="d-flex Header">
                                    <h4 className="title p-2">Procedures</h4>
                                    <button type="button" className="btn btn-sm btn-t-default mt-1 mb-1 ml-auto">
                                        <span className="d-none d-lg-block d-md-block">
                                        All Procedures
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
                    </div>
                </Container>

                <HomeRecommendedPackages />

                <HomeFeatures />

            </>
        );
    }
}

export default Home;
