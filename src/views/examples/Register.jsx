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

class Register extends React.Component {
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
            <Col lg="6" md="8">
                <Card className="bg-secondary shadow border-0">
                    {/* <CardHeader className="bg-transparent pb-5">
              <div className="text-muted text-center mt-2 mb-4">
                <small>Sign up with</small>
              </div>
              <div className="text-center">
                <Button
                  className="btn-neutral btn-icon mr-4"
                  color="default"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <span className="btn-inner--icon">
                    <img
                      alt="..."
                      src={require("assets/img/icons/common/github.svg")}
                    />
                  </span>
                  <span className="btn-inner--text">Github</span>
                </Button>
                <Button
                  className="btn-neutral btn-icon"
                  color="default"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <span className="btn-inner--icon">
                    <img
                      alt="..."
                      src={require("assets/img/icons/common/google.svg")}
                    />
                  </span>
                  <span className="btn-inner--text">Google</span>
                </Button>
              </div>
            </CardHeader>*/}
                    <CardBody className="px-lg-5 py-lg-5">
                        <div className="text-center text-muted mb-4">
                            <small>Sign up with credentials</small>
                        </div>
                        <Form role="form" onSubmit={() => {
                            this.setState({
                                loading: true
                            });
                            setTimeout(()=>{
                                this.setState({
                                    loading: false
                                });
                            },3000)
                            //alert(this.state.phone)
                        }}>
                            <Row>
                                <Col md="6">

                                    <FormGroup>
                                        <InputGroup className="input-group-alternative mb-3">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="ni ni-single-02"/>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input placeholder="Name" type="text"/>
                                        </InputGroup>
                                    </FormGroup>
                                </Col>

                                <Col md="6">
                                    <FormGroup>
                                        <InputGroup className="input-group-alternative mb-3">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="ni ni-single-02"/>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input placeholder="Family" type="text"/>
                                        </InputGroup>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup>
                                <InputGroup className="input-group-alternative ">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="ni ni-email-83"/>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input placeholder="Email" type="email"/>
                                </InputGroup>
                            </FormGroup>
                            <Row>
                                <Col md="6">
                                    <FormGroup>
                                        <InputGroup className="input-group-alternative">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="ni ni-lock-circle-open"/>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input placeholder="Password" type="password"/>
                                        </InputGroup>
                                    </FormGroup>
                                </Col>
                                <Col md="6">
                                    <FormGroup>
                                        <InputGroup className="input-group-alternative">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="ni ni-lock-circle-open"/>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input placeholder="Confirm Password" type="password"/>
                                        </InputGroup>
                                    </FormGroup>
                                </Col>
                            </Row>


                            <FormGroup>
                                <InputGroup className="input-group-alternative mb-3">

                                    <ReactPhoneInput buttonclassName="phone-selector-dropdown" enableSearchField
                                                     autoFormat={false}
                                                     inputclassName="phone-selector"
                                                     value={this.state.phone}
                                                     onChange={(value) => this._handleOnChange(value)}

                                    />
                                </InputGroup>
                            </FormGroup>

                            <LoadingButton loading={this.state.loading}>Create Account</LoadingButton>
                        </Form>
                    </CardBody>
                </Card>

            </Col>
            </>
        );
    }
}

export default Register;
