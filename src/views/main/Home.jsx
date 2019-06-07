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

class Home extends React.Component {
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
            test
            </Col>
            </>
        );
    }
}

export default Home;
