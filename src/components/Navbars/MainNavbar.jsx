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
} from "reactstrap";
import NavDrop from "./NavDrop";
import Language from "./Language";
import Currency from "./Currency";
import Signin from "../../views/main/Home/Signin";
import { connect } from "react-redux";
import Signup from "../../views/main/Home/Signup";
import { mapDispatchToProps, mapStateToProps } from "../../redux/constants";
import UserMenu from "./UserMenu";

class MainNavbar extends React.Component {

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
          className={`navbar-horizontal ${this.props.appearance === 'light' ? 'navbar-main navbar-light' : 'navbar navbar-top navbar-dark'}`}
          expand="lg"
        >
          <Container className="px-1">
            <NavbarBrand to="/main/home" tag={Link}>
              <img alt="..." className="d-lg-none d-xs-block d-sm-block d-md-block d-xl-block" src={require(`assets/img/brand/tebimar-logo-${this.props.appearance === 'light' ? 'green' : 'white'}.png`)} />
              <img alt="..." className="d-none d-lg-block d-xl-none d-md-none d-sm-none d-xs-none" src={require('assets/img/brand/tebimar-mini-logo.png')} />
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
              <Nav className=" mr-2 ml-lg-auto navbar-nav">
              <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    to="/auth/register"
                    tag={Link}
                  >
                    <span className="nav-link-inner--text">
                      <i className="fa fa-phone"></i>
                    </span>
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav className="navbar-nav">
                <Language />
              </Nav>
              <Nav className="navbar-nav mr-3">
                <Currency />
              </Nav>

              <Nav className={`navbar-nav ${this.props.user.id ? 'd-none' : 'd-block'}`}>
              <NavItem>
                  <button
                    onClick={() => this.props.modal.name !== 'signup' ?  this.props.openModal('signup'): this.props.closeModal()}
                    type="button"
                    className="btn btn-sm btn-secondary p-2 mt-2 mr-1">
                    <span className="d-lg-none d-xs-block d-sm-block d-md-block d-xl-block">Sign up</span>
                    <i className="fa fa-user-plus d-none d-lg-block d-xl-none d-md-none d-sm-none d-xs-none m-0" />
                  </button>
                  <button
                   onClick={() => this.props.modal.name !== 'signin' ?  this.props.openModal('signin'): this.props.closeModal()}
                   type="button"
                   className="btn btn-sm btn-t-default p-2 mt-2 mr-0">
                    <span className="d-lg-none d-xs-block d-sm-block d-md-block d-xl-block">Sign in</span>
                    <i className="fa fa-sign-in-alt d-none d-lg-block d-xl-none d-md-none d-sm-none d-xs-none m-0" />
                  </button>
                </NavItem>
              </Nav>
              <Nav className={`navbar-nav ${this.props.user.id ? 'd-block' : 'd-none'}`}>
                <UserMenu />
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
        <Signin />
        <Signup />
      </>
    );
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(MainNavbar);
