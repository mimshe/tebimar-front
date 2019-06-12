import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Modal
} from "reactstrap";
import NavDrop from "./NavDrop";
import Signin from "../../views/main/Home/Signin";

class MainNavbar extends React.Component {

  state = {
    defaultModal: false
  };
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };

  render() {
  const menuItem_Procedures = {
    title: 'Procedures',
    options:[
      {
        title:'option 1',
        link:'/'
      },
      {
        title:'option 2',
        link:'/'
      }
    ]
  };
  const menuItem_Packages = {
    title: 'Packages',
    options:[
      {
        title:'p 1',
        link:'/'
      }
    ]
  };
    return (
      <>
        <Navbar
          className={`navbar-horizontal ${this.props.appearance == 'light' ? 'navbar-main navbar-light' : 'navbar navbar-top navbar-dark'}`}
          expand="lg"
        >
          <Container className="px-4">
            <NavbarBrand to="/main/home" tag={Link}>
              <img alt="..." src={require(`assets/img/brand/tebimar-logo-${this.props.appearance == 'light' ? 'green' : 'white'}.png`)} />
            </NavbarBrand>
            <button className="navbar-toggler" id="navbar-collapse-main">
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse navbar toggler="#navbar-collapse-main">
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <Link to="/">
                      <img
                        alt="..."
                        src={require("assets/img/brand/tebimar-logo-green.png")}
                      />
                    </Link>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button
                      className="navbar-toggler"
                      id="navbar-collapse-main"
                    >
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="ml-3" navbar>
                <NavDrop data={menuItem_Procedures} />
                <NavDrop data={menuItem_Packages} />
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    to="/"
                    tag={Link}
                  >
                    <span className="nav-link-inner--text">Blog</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    to="/auth/register"
                    tag={Link}
                  >
                    <span className="nav-link-inner--text">Business Customers</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    to="/auth/register"
                    tag={Link}
                  >
                    <span className="nav-link-inner--text">Consultation</span>
                  </NavLink>
                </NavItem>
              </Nav>

              <Nav className="ml-lg-auto navbar-nav">
              <NavItem>
                  <button
                    onClick={() => this.toggleModal("signupModal")}
                    type="button"
                    className="btn btn-sm btn-secondary p-2 mt-2">
                    Sign up
                  </button>
                  <button
                   onClick={() => this.toggleModal("signinModal")}
                   type="button"
                   className="btn btn-sm btn-t-default p-2 mt-2">
                    Sign in
                  </button>
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>

        <Modal
              className="modal-dialog-centered"
              size="sm"
              isOpen={this.state.signinModal}
              toggle={() => this.toggleModal("signinModal")}
            >
              <div className="modal-body p-0">
                <Card className="bg-secondary shadow border-0">
                <div className="modal-header">
                  <h4 className="modal-title" id="modal-title-default">
                    Sign in to <span className="text-t-green">Tebimar</span>
                  </h4>
                  <button
                  aria-label="Close"
                  className="close"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => this.toggleModal("signinModal")}
                >
                  <span aria-hidden={true}>×</span>
                </button>
                </div>
                  <CardBody className="px-lg-5 py-lg-4">
                    <Form role="form">
                      <FormGroup className="mb-3">
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Email" type="email" />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-lock-circle-open" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Password" type="password" />
                        </InputGroup>
                      </FormGroup>
                      <div className="custom-control custom-control-alternative custom-checkbox">
                        <input
                          className="custom-control-input"
                          id=" customCheckLogin"
                          type="checkbox"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor=" customCheckLogin"
                        >
                          <span className="text-muted">Remember me</span>
                        </label>
                      </div>
                      <div className="text-center">
                        <Button
                          className="my-3 btn-block"
                          color="primary"
                          type="button"
                        >
                          Sign in
                        </Button>

                      </div>
                      <div className="text-left">
                        <a className="text-t-green d-block">Forgot Password!</a>
                        <a
                          onClick={() => this.toggleModal("signinModal")}
                          className="text-t-green d-block">Sign up</a>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </div>
        </Modal>


        <Modal
              className="modal-dialog-centered"
              size="sm"
              isOpen={this.state.signupModal}
              toggle={() => this.toggleModal("signupModal")}
            >
              <div className="modal-body p-0">
                <Card className="bg-secondary shadow border-0">
                <div className="modal-header">
                  <h4 className="modal-title" id="modal-title-default">
                    Sign up to <span className="text-t-green">Tebimar</span>
                  </h4>
                  <button
                  aria-label="Close"
                  className="close"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => this.toggleModal("signupModal")}
                >
                  <span aria-hidden={true}>×</span>
                </button>
                </div>
                  <CardBody className="px-lg-5 py-lg-4">
                    <Form role="form">
                    <FormGroup className="mb-3">
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-mobile-button" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="phone number" type="number" />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup className="mb-3">
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Email" type="email" />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-lock-circle-open" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Password" type="password" />
                        </InputGroup>
                      </FormGroup>
 
                      <div className="text-center">
                        <Button
                          className="my-3 btn-block"
                          color="primary"
                          type="button"
                        >
                          Sign up
                        </Button>

                      </div>
                      <div className="text-left">
                        <a
                          onClick={() => this.toggleModal("signinModal")}
                          className="text-t-green d-block">Sign in</a>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </div>
        </Modal>
      </>
    );
  }
}

export default MainNavbar;
