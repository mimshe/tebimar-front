import React from "react";

// reactstrap components
import {
    Card,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Row,
    Col,
    Container
} from "reactstrap";

import { Select } from 'antd';

const { Option } = Select;

class HomeSelectService extends React.Component {

    render() {
        function onChange(value) {
            console.log(`selected ${value}`);
        }
        
        function onBlur() {
        console.log('blur');
        }
        
        function onFocus() {
        console.log('focus');
        }
        
        function onSearch(val) {
        console.log('search:', val);
        }

        return (
            <>
            <div className="d-flex justify-content-center mt-4">
                <Select
                    showSearch
                    size="large"
                    className="main-cure-drop"
                    placeholder="Step 1 Search a cure"
                    optionFilterProp="children"
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="tom">Tom</Option>
                </Select>
            </div>

            <div className="d-flex justify-content-center">
                <div className="main-service-navigation mt-2">
                    <div className="content">
                        <ul>
                            <li className="active">
                                <i className="fa fa-hospital-alt pb-1"></i>
                                <h5 className="title">Hospital</h5>
                            </li>
                            <li>
                                <i className="fa fa-passport pb-1"></i>
                                <h5 className="title">Visa</h5>
                            </li>
                            <li>
                                <i className="fa fa-plane pb-1"></i>
                                <h5 className="title">Travel</h5>
                            </li>
                            <li>
                                <i className="fa fa-hotel pb-1"></i>
                                <h5 className="title">Hotel</h5>
                            </li>
                            <li className="submit">
                                <a>
                                    <span className="text-white d-md-none d-lg-none">submit</span>
                                    <i className="fa fa-chevron-right"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            </>
        );
    }
}

export default HomeSelectService;
