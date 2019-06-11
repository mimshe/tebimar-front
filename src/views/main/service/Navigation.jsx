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
                        <li className="active">
                            <span>
                                <i className="fa fa-map pr-1"></i>
                                Choose city
                            </span>
                        </li>
                        <li className="active">
                            <span>
                                <i className="fa fa-hospital-alt pr-1"></i>
                                Hospital
                            </span>
                        </li>
                        <li>
                            <span>
                                <i className="fa fa-passport pr-1"></i>
                                Visa
                            </span>
                        </li>
                        <li>
                            <span>
                                <i className="fa fa-plane pr-1"></i>
                                Travel
                            </span>
                        </li>
                        <li>
                            <span>
                                <i className="fa fa-hotel pr-1"></i>
                                Hotel
                            </span>
                        </li>

                        <li className="submit">
                            <a>
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
