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
    Col,
    Button,
    Pagination,
    PaginationItem,
    PaginationLink
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
            <Row className="d-flex flex-row">
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
                    <div className="service-items d-flex flex-row p-3 mb-3">
                        <Col lg="4" md="4">
                            <img src={require("assets/img/theme/react.jpg")} alt=""/>
                        </Col>
                        <Col lg="8" md="8">
                            <h4>Tehran</h4>
                            <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat
                            </p>
                            <div className="d-flex justify-content-end">
                            <Button color="secondary" type="button">More</Button>
                            <Button color="t-default" type="button">Select</Button>
                            </div>
                        </Col>
                    </div>
                    <div className="service-items d-flex flex-row p-3 mb-3">
                        <Col lg="4" md="4">
                            <img src={require("assets/img/theme/react.jpg")} alt=""/>
                        </Col>
                        <Col lg="8" md="8">
                            <h4>Tehran</h4>
                            <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat
                            </p>
                            <div className="d-flex justify-content-end">
                            <Button color="secondary" type="button">More</Button>
                            <Button color="t-default" type="button">Select</Button>
                            </div>
                        </Col>
                    </div>
                    <div className="d-flex justify-content-center pt-4">
                    <nav aria-label="...">
                        <Pagination>
                            <PaginationItem className="disabled">
                            <PaginationLink
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                                tabIndex="-1"
                            >
                                <i className="fa fa-angle-left" />
                                <span className="sr-only">Previous</span>
                            </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                            <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                                1
                            </PaginationLink>
                            </PaginationItem>
                            <PaginationItem className="active">
                            <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                                2 <span className="sr-only">(current)</span>
                            </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                            <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                                3
                            </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                            <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                                <i className="fa fa-angle-right" />
                                <span className="sr-only">Next</span>
                            </PaginationLink>
                            </PaginationItem>
                        </Pagination>
                    </nav>
                    </div>
                </Col>
            </Row>
        );
    }
}

export default ChooseCity;
