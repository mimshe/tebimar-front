/*eslint-disable*/
import React from "react";

// reactstrap components
import {
    NavItem,
    NavLink,
    Nav, 
    Container,
    Row,
    Col,
    Input,
    FormGroup,
    InputGroup,
    InputGroupAddon,
    Button
} from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer className="footer-main mt-5 pt-5 pb-2">
          <Container>
            <Row className="align-items-center justify-content-xl-between">
              <Col xl="3" sm="6" md="3">
                <div className="nav-footer-main justify-content-center justify-content-xl-end">
                    <h4 className="title">IN THE MAIN</h4>
                    <ul>
                        <li><a>Consultation</a></li>
                        <li><a>Packages</a></li>
                        <li><a>Blog</a></li>
                        <li><a>About</a></li>
                        <li><a>Contact Us</a></li>
                    </ul>
                </div>
              </Col>
              <Col xl="3" sm="6" md="3">
                <div className="nav-footer-main justify-content-center justify-content-xl-end">
                    <h4 className="title">IN THE MAIN</h4>
                    <ul>
                        <li><a>Terms</a></li>
                        <li><a>Disclaimer</a></li>
                        <li><a>Privacy Policy</a></li>
                        <li><a>How it Works</a></li>
                        <li><a>Why Partner</a></li>
                    </ul>
                </div>
              </Col>
              <Col xl="6" sm="12" md="6">
                <div className="contact-footer-main justify-content-center justify-content-xl-end">
                    <h4 className="title">SUBSCRIBE</h4>
                    <div className="subscribe mb-3 mt-4">
                        <InputGroup>
                            <Input 
                            type="email"
                            placeholder="name@example.com"
                            />
                            <InputGroupAddon addonType="append">
                            <Button color="t-default">Subscribe</Button>
                            </InputGroupAddon>
                        </InputGroup>
                    </div>
                    <div className="contact">
                        <div className="pb-2 pt-2">
                            <i className="fa fa-map-marked-alt" />
                            <span className="ml-3">Iran - Tehran - Meydan Teymouri - Box Cowork</span>
                        </div>
                        <div className="pb-2 pt-2">
                            <i className="fa fa-phone" />
                            <span className="ml-3">+98 021 3524 1479</span>
                        </div>
                        <div className="share mt-3">
                            <span className="mr-2"><a><i className="fab fa-instagram"></i></a></span>
                            <span className="mr-2"><a><i className="fab fa-facebook-f"></i></a></span>
                            <span className="mr-2"><a><i className="fab fa-youtube"></i></a></span>
                            <span className="mr-2"><a><i className="fab fa-whatsapp"></i></a></span>
                            <span className="mr-2"><a><i className="fab fa-telegram"></i></a></span>
                        </div>
                    </div>
                </div>
              </Col>
            </Row>
            <Row>
                <Col xl="12">
                    <div className="copyright text-center text-xl-center text-muted mt-5">
                        © 2019{" "}
                        <a
                        className="font-weight-bold ml-1"
                        href="https://www.creative-tim.com?ref=adr-auth-footer"
                        target="_blank"
                        >
                        Tebimar Team
                        </a>
                    </div>
                </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default Footer;
