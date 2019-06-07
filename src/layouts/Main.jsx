import React from "react";
import { Route, Switch } from "react-router-dom";
// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import MainNavbar from "components/Navbars/MainNavbar.jsx";
import MainFooter from "components/Footers/MainFooter.jsx";

import routes from "routes.js";

class Main extends React.Component {
  componentDidMount() {
    //document.body.classList.add("bg-default");
  }
  componentWillUnmount() {
  // document.body.classList.remove("bg-default");
  }
  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === "/main") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  navbar(){
    if(window.location.hash == '#/main/home'){
      return (
        <>
        <MainNavbar appearance="dark" />
        <div className="header bg-gradient-primary py-7 py-lg-8">
            <Container>
              <div className="header-body text-center mb-4">
                <Row className="justify-content-center">
                  <Col lg="6" md="8">
                    <h1 className="text-white">Will be back healthier than the past</h1>
                    <p className="text-lead text-white">Lorem ipsum dolor sit amet consectetuer adipiscing elit</p>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
        </>
      );
    }
    else{
      return (
        <MainNavbar appearance="light" />
      );
    }
  }
  render() {
    return (
      <>
        <div className="main-content">

          {this.navbar()}
          {/* Page content */}
          
          <Container className="pb-5">
            <Row className="d-flex flex-row">
              <Switch>{this.getRoutes(routes)}</Switch>
            </Row>
          </Container>
        </div>
        <MainFooter />
      </>
    );
  }
}

export default Main;
