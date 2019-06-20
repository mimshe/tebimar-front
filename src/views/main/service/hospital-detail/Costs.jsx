import React from "react";
import {
    Col,
    Row
} from "reactstrap";

import { Select } from 'antd';
const { Option } = Select;


class Costs extends React.Component {

    render() {
        return (
            <Col className="mt-4" lg="12" md="12">
                <div className="cost-box">
                    <div className="header">
                        <h3 className="title">Cost</h3>
                        <div className="filter">
                            <Row>
                                <Col lg="4" md="3">
                                    <Select
                                        size="large"
                                        className="mt-2 mb-2"
                                        style={{ width: '100%' }}
                                        placeholder="Section 1"
                                        optionFilterProp="children"
                                    >
                                        <Option value="jack">Jack</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="tom">Tom</Option>
                                    </Select>
                                </Col>
                                <Col lg="4" md="3">
                                    <Select
                                        size="large"
                                        className="mt-2 mb-2"
                                        style={{ width: '100%' }}
                                        placeholder="Cure"
                                        optionFilterProp="children"
                                    >
                                        <Option value="jack">Jack</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="tom">Tom</Option>
                                    </Select>
                                </Col>
                                <Col lg="4" md="3">
                                    <Select
                                        size="large"
                                        className="mt-2 mb-2"
                                        style={{ width: '100%' }}
                                        placeholder="Head"
                                        optionFilterProp="children"
                                    >
                                        <Option value="jack">Jack</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="tom">Tom</Option>
                                    </Select>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div className="table-responsive">
                        <table class="table table-borderless">
                        <thead>
                            <tr>
                            <th scope="col">Code</th>
                            <th scope="col">Name</th>
                            <th scope="col">Name 2</th>
                            <th scope="col">Dr</th>
                            <th scope="col">Cost</th>
                            <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">#4196</th>
                                <td>Canser</td>
                                <td>Head Cancer</td>
                                <td>Ali Hosseini</td>
                                <td>5.000.000$</td>
                                <td className="submit">Book</td>
                            </tr>
                            <tr>
                                <th scope="row">#4196</th>
                                <td>Canser</td>
                                <td>Head Cancer</td>
                                <td>Ali Hosseini</td>
                                <td>5.000.000$</td>
                                <td className="submit">Book</td>
                            </tr>
                            <tr>
                                <th scope="row">#4196</th>
                                <td>Canser</td>
                                <td>Head Cancer</td>
                                <td>Ali Hosseini</td>
                                <td>5.000.000$</td>
                                <td className="submit">Book</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                </div>
            </Col>
        );
    }
}

export default Costs;
