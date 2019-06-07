import React from "react";
import Navigation from "./Navigation.jsx"
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

class ChooseCity extends React.Component {
    state = {
    };

    _handleOnChange(value) {
        this.setState({phone: value})
    }

    render() {
        return (
            <>
            <Navigation />
            <Col className="mt-4" lg="4" md="4">
            <div className="service-filter p-3">
            <h4 className="title">
                <i className="fa fa-filter pr-2"></i>
                Filter City
                </h4>
                <div className="content p-2">
                    <div className="option mt-2">
                        <h5 className="title">Room</h5>
                        <FormGroup>
                            <select className="form-control">
                                <option value="1">1 room</option>
                                <option value="2">2 room</option>
                                <option value="3">3 room</option>
                            </select>
                        </FormGroup>
                    </div>
                    <div className="option mt-2">
                        <h5 className="title">Others</h5>
                        <div className="custom-control custom-control-alternative custom-checkbox mb-3">
                            <input className="custom-control-input" id="customCheck1" type="checkbox"/>
                            <label className="custom-control-label" htmlFor="customCheck1">Pool</label>
                        </div>
                        <div className="custom-control custom-control-alternative custom-checkbox mb-3">
                            <input className="custom-control-input" id="customCheck2" type="checkbox"/>
                            <label className="custom-control-label" htmlFor="customCheck2">Wifi</label>
                        </div>
                    </div>
                </div>
            </div>
            </Col>
            <Col className="mt-4" lg="8" md="8">
                <div className="service-items d-flex flex-row p-3">
                    <Col lg="4" md="4">Image</Col>
                    <Col lg="8" md="8">desc</Col>
                </div>
            </Col>

            </>
        );
    }
}

export default ChooseCity;
