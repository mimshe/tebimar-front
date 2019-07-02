import React from "react";
// reactstrap components
import {
    Row,
    Col,
    Button,
    FormGroup,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Label
} from "reactstrap";
import ReactDatetime from "react-datetime";
import { Select } from 'antd';
const { Option } = Select;

class VisaPersonalInformation extends React.Component {

    render() {
        return (
            <div className="service-items p-3 mb-3">
                <Row>
                    <Col xl="6" md="12"  xs="12">
                        <FormGroup>
                            <Input
                                placeholder="First Name"
                                type="text"
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col xl="6" md="12"  xs="12">
                        <FormGroup>
                            <Input
                                placeholder="Last Name"
                                type="text"
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col xl="6" md="12"  xs="12">
                        <FormGroup>
                            <Input
                                placeholder="Father Name"
                                type="text"
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col xl="6" md="12"  xs="12">
                        <Label className="mb-3">Gender</Label>
                        <div className="custom-control custom-radio mb-3">
                        <input
                            className="custom-control-input"
                            id="customRadio5"
                            name="custom-radio-2"
                            type="radio"
                        />
                        <label className="custom-control-label" htmlFor="customRadio5">
                            Male
                        </label>
                        </div>
                        <div className="custom-control custom-radio mb-3">
                        <input
                            className="custom-control-input"
                            defaultChecked
                            id="customRadio6"
                            name="custom-radio-2"
                            type="radio"
                        />
                        <label className="custom-control-label" htmlFor="customRadio6">
                            Female
                        </label>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xl="6" md="12"  xs="12">
                        <FormGroup>
                            <InputGroup className="input-group-alternative">
                                <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <i className="ni ni-calendar-grid-58" />
                                </InputGroupText>
                                </InputGroupAddon>
                                <ReactDatetime
                                inputProps={{
                                    placeholder: "Date Picker Here"
                                }}
                                timeFormat={false}
                                />
                            </InputGroup>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col xl="6" md="12"  xs="12">
                        <Select
                            showSearch
                            size="large"
                            className="mb-3"
                            style={{ width: '100%' }}
                            placeholder="Country of birth"
                            optionFilterProp="children"
                        >
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="tom">Tom</Option>
                        </Select>
                    </Col>
                </Row>
                <Row>
                    <Col xl="6" md="12"  xs="12">
                        <Select
                            showSearch
                            size="large"
                            className="mb-3"
                            style={{ width: '100%' }}
                            placeholder="Country of residence"
                            optionFilterProp="children"
                        >
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="tom">Tom</Option>
                        </Select>
                    </Col>
                </Row>
                <Row>
                    <Col xl="6" md="12"  xs="12">
                        <Select
                            showSearch
                            size="large"
                            className="mb-3"
                            style={{ width: '100%' }}
                            placeholder="Nationality"
                            optionFilterProp="children"
                        >
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="tom">Tom</Option>
                        </Select>
                    </Col>
                </Row>
                <Row>
                    <Col xl="6" md="12"  xs="12">
                        <FormGroup>
                            <Input
                                placeholder="Last Occupation"
                                type="text"
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col xl="6" md="12"  xs="12">
                        <Label className="mb-3">Maritial Status</Label>
                        <div className="custom-control custom-radio mb-3">
                        <input
                            className="custom-control-input"
                            id="customRadio5"
                            name="custom-radio-2"
                            type="radio"
                        />
                        <label className="custom-control-label" htmlFor="customRadio5">
                            Single
                        </label>
                        </div>
                        <div className="custom-control custom-radio mb-3">
                        <input
                            className="custom-control-input"
                            defaultChecked
                            id="customRadio6"
                            name="custom-radio-2"
                            type="radio"
                        />
                        <label className="custom-control-label" htmlFor="customRadio6">
                            Married
                        </label>
                        </div>
                    </Col>
                </Row>
                <div className="d-flex justify-content-end">
                    <Button color="t-default" type="button">
                    Next 
                    <i className="fa fa-chevron-right pl-2"></i>
                    </Button>
                </div>
            </div>
        );
    }
}

export default VisaPersonalInformation;
