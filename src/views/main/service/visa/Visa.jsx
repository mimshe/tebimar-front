import React from "react";
import Navigation from "../Navigation.jsx"
// reactstrap components
import {
    Row,
    Col,
    Container,
} from "reactstrap";
import VisaStep from "./VisaStep.jsx";
import VisaPersonalInformation from "./VisaPersonalInformation.jsx";

class Visa extends React.Component {

    render() {
        return (
            <Container className="pb-5">
                <Row className="d-flex flex-row">
                    <Navigation />
                    <Col className="mt-4" lg="4" md="4">
                        <VisaStep />
                    </Col>
                    <Col className="mt-4" lg="8" md="8">
                        <VisaPersonalInformation />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Visa;
