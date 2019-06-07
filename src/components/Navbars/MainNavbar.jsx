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
  Col
} from "reactstrap";

class MainNavbar extends React.Component {
  render() {
    console.log(this.props.appearance)
    return (
      <>
        <Navbar
          className={`navbar-horizontal ${this.props.appearance == 'light' ? 'navbar-main navbar-light' : 'navbar navbar-top navbar-dark'}`}
          expand="md"
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
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink className="nav-link-icon" to="/" tag={Link}>
                    <span className="nav-link-inner--text">Procedures</span>
                    &nbsp;<i className="fa fa-chevron-down" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link-icon" to="/" tag={Link}>
                    <span className="nav-link-inner--text">Packages</span>
                    &nbsp;<i className="fa fa-chevron-down" />
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
                <NavItem>
                  <button type="button" className="btn btn-sm btn-secondary p-2 mt-2">
                    Counsulation
                  </button>
                  <button type="button" className="btn btn-sm btn-success p-2 mt-2">
                    <i className="fa fa-phone"></i>&nbsp;
                    Call Now
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
