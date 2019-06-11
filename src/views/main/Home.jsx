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
    Col
} from "reactstrap";


import ReactPhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/dist/style.css'
import LoadingButton from "../../components/Custom/LoadingButton";

class Home extends React.Component {
    state = {
        phone: '+98',
        loading: false
    };

    _handleOnChange(value) {
        this.setState({phone: value})
    }

    render() {
        return (
            <>
            <div className="mt-4">
                <div className="categories-box">
                    <div className="Header">
                        <div className="d-flex Header">
                            <h4 className="title p-2">Procedures</h4>
                            <a className="more ml-auto p-2">
                                All Procedures
                                <i className="fa fa-chevron-right pl-2"></i>
                            </a>
                        </div>
                    </div>
                    <div className="content row">
                        <Col lg="3" md="3">
                            <div className="item">
                                <img src={require("assets/img/img.jpg")} alt=""/>
                                <h5 className="title">Title</h5>                            
                            </div>
                        </Col>
                        <Col lg="3" md="3">
                            <div className="item">
                                <img src={require("assets/img/img.jpg")} alt=""/>
                                <h5 className="title">Title</h5>                            
                            </div>
                        </Col>
                        <Col lg="3" md="3">
                            <div className="item">
                                <img src={require("assets/img/img.jpg")} alt=""/>
                                <h5 className="title">Title</h5>                            
                            </div>
                        </Col>
                        <Col lg="3" md="3">
                            <div className="item">
                                <img src={require("assets/img/img.jpg")} alt=""/>
                                <h5 className="title">Title</h5>                            
                            </div>
                        </Col>
                    </div>
                    
                </div>
            </div>
            {/* <Col lg="6" md="8">
            test
            </Col> */}
            </>
        );
    }
}

export default Home;
