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
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem 
} from "reactstrap";
import NavDrop from "./NavDrop";

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
    console.log(this.props.appearance)
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
              <div className="navbar-collapse-header d-md-none">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <Link to="/">
                      <img
                        alt="..."
                        src={require("assets/img/brand/argon-react.png")}
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
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    to="/auth/register"
                    tag={Link}
                  >
                    <span className="nav-link-inner--text">Partner with us</span>
                  </NavLink>
                </NavItem>
              </Nav>

              <Nav className="ml-lg-auto navbar-nav">
              <NavItem>
                  <button type="button" className="btn btn-sm btn-secondary p-2 mt-2">
                    Sign up
                  </button>
                  <button type="button" className="btn btn-sm btn-t-default p-2 mt-2">
                    Sign in
                  </button>
                </NavItem>
              </Nav>
              
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default MainNavbar;
