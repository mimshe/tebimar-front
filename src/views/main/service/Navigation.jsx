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
import LoadingButton from "../../../components/Custom/LoadingButton";

class Navigation extends React.Component {
    state = {
    };

    _handleOnChange(value) {
        this.setState({phone: value})
    }

    render() {
        return (
            <>
            <Col lg="12" md="12">
                <div className="service-navigation mt-5 w-100">
                    <div className="content">
                    <ul>
                        <li className="done">
                            {/* <i className="fa fa-file-medical pr-1"></i> */}
                            <i className="fa fa-check-circle pr-1"></i>
                            <div className="detail">
                                <span className="selected-item">Canser</span>
                                <span className="title">Cure</span>
                            </div>
                        </li>
                        <li className="active">
                            <i className="fa fa-hospital-alt pr-1"></i>
                            <div className="detail">
                                <span className="selected-item">Beheshti</span>
                                <span className="title">Hospital</span>
                            </div>
                        </li>
                        <li>
                            <i className="fa fa-passport pr-1"></i>
                            <div className="detail">
                                <span className="selected-item">...</span>
                                <span className="title">Visa</span>
                            </div>
                        </li>
                        <li>
                            <i className="fa fa-plane pr-1"></i>
                            <div className="detail">
                                <span className="selected-item">...</span>
                                <span className="title">Travel</span>
                            </div>
                        </li>
                        <li>
                            <i className="fa fa-hotel pr-1"></i>
                            <div className="detail">
                                <span className="selected-item">...</span>
                                <span className="title">Hotel</span>
                            </div>
                        </li>

                        <li className="submit">
                            <a>
                                <span className="d-md-none d-sm-none d-lg-none">submit</span>
                                <i className="fa fa-chevron-right"></i>
                            </a>
                        </li>
                    </ul>
                    </div>
                </div>
            </Col>
            </>
        );
    }
}

export default Navigation;
