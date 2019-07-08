import React from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {
    Row,
    Col
} from "reactstrap";

class Rates extends React.Component {

    render() {
        let data = this.props.data;
        const rate1 = (data != undefined ? data.rate1 : 0);
        const rate2 = (data != undefined ? data.rate2 : 0);
        const rate3 = (data != undefined ? data.rate3 : 0);
        const rate4 = (data != undefined ? data.rate4 : 0);
        const rate5 = (data != undefined ? data.rate5 : 0);
        const rate6 = (data != undefined ? data.rate6 : 0);
        const rate7 = (data != undefined ? data.rate7 : 0);
        const rate8 = (data != undefined ? data.rate8 : 0);

        const percentage = 66;

        return (
            <Row>
            <Col className="p-2 text-center" lg="3" md="3" sm="4" xs="6">
                <div className="circle-progress">
                    <CircularProgressbar
                        value={rate1*10}
                        text={rate1}
                        styles={{
                            root: {},
                            path: {
                                stroke: `rgb(24, 187, 24)`,
                                strokeLinecap: 'butt',
                                transition: 'stroke-dashoffset 0.5s ease 0s',
                                transform: 'rotate(0.25turn)',
                                transformOrigin: 'center center',
                            },
                            trail: {
                                stroke: '#e0e0e0',
                                strokeLinecap: 'butt',
                                transform: 'rotate(0.25turn)',
                                transformOrigin: 'center center',
                            },
                            text: {
                                fill: '#808080',
                                fontSize: '16px',
                            },
                            background: {
                                fill: '#3e98c7',
                            },
                            }} />
                </div>
                <h5 className="mb-0 mt-1 text-t-gray">Cleaners</h5>
            </Col>
            <Col className="p-2 text-center" lg="3" md="3" sm="4" xs="6">
                <div className="circle-progress">
                    <CircularProgressbar
                        value={rate2*10}
                        text={rate2}
                        styles={{
                            root: {},
                            path: {
                                stroke: `rgb(24, 187, 24)`,
                                strokeLinecap: 'butt',
                                transition: 'stroke-dashoffset 0.5s ease 0s',
                                transform: 'rotate(0.25turn)',
                                transformOrigin: 'center center',
                            },
                            trail: {
                                stroke: '#e0e0e0',
                                strokeLinecap: 'butt',
                                transform: 'rotate(0.25turn)',
                                transformOrigin: 'center center',
                            },
                            text: {
                                fill: '#808080',
                                fontSize: '16px',
                            },
                            background: {
                                fill: '#3e98c7',
                            },
                            }} />
                </div>
                <h5 className="mb-0 mt-1 text-t-gray">Cleaners</h5>
            </Col>
            <Col className="p-2 text-center" lg="3" md="3" sm="4" xs="6">
                <div className="circle-progress">
                    <CircularProgressbar
                        value={rate3*10}
                        text={rate3}
                        styles={{
                            root: {},
                            path: {
                                stroke: `rgb(24, 187, 24)`,
                                strokeLinecap: 'butt',
                                transition: 'stroke-dashoffset 0.5s ease 0s',
                                transform: 'rotate(0.25turn)',
                                transformOrigin: 'center center',
                            },
                            trail: {
                                stroke: '#e0e0e0',
                                strokeLinecap: 'butt',
                                transform: 'rotate(0.25turn)',
                                transformOrigin: 'center center',
                            },
                            text: {
                                fill: '#808080',
                                fontSize: '16px',
                            },
                            background: {
                                fill: '#3e98c7',
                            },
                            }} />
                </div>
                <h5 className="mb-0 mt-1 text-t-gray">Cleaners</h5>
            </Col>
            <Col className="p-2 text-center" lg="3" md="3" sm="4" xs="6">
                <div className="circle-progress">
                    <CircularProgressbar
                        value={rate4*10}
                        text={rate4}
                        styles={{
                            root: {},
                            path: {
                                stroke: `rgb(24, 187, 24)`,
                                strokeLinecap: 'butt',
                                transition: 'stroke-dashoffset 0.5s ease 0s',
                                transform: 'rotate(0.25turn)',
                                transformOrigin: 'center center',
                            },
                            trail: {
                                stroke: '#e0e0e0',
                                strokeLinecap: 'butt',
                                transform: 'rotate(0.25turn)',
                                transformOrigin: 'center center',
                            },
                            text: {
                                fill: '#808080',
                                fontSize: '16px',
                            },
                            background: {
                                fill: '#3e98c7',
                            },
                            }} />
                </div>
                <h5 className="mb-0 mt-1 text-t-gray">Cleaners</h5>
            </Col>
            <Col className="p-2 text-center" lg="3" md="3" sm="4" xs="6">
                <div className="circle-progress">
                    <CircularProgressbar
                        value={rate5*10}
                        text={rate5}
                        styles={{
                            root: {},
                            path: {
                                stroke: `rgb(24, 187, 24)`,
                                strokeLinecap: 'butt',
                                transition: 'stroke-dashoffset 0.5s ease 0s',
                                transform: 'rotate(0.25turn)',
                                transformOrigin: 'center center',
                            },
                            trail: {
                                stroke: '#e0e0e0',
                                strokeLinecap: 'butt',
                                transform: 'rotate(0.25turn)',
                                transformOrigin: 'center center',
                            },
                            text: {
                                fill: '#808080',
                                fontSize: '16px',
                            },
                            background: {
                                fill: '#3e98c7',
                            },
                            }} />
                </div>
                <h5 className="mb-0 mt-1 text-t-gray">Cleaners</h5>
            </Col>
            <Col className="p-2 text-center" lg="3" md="3" sm="4" xs="6">
                <div className="circle-progress">
                    <CircularProgressbar
                        value={rate6*10}
                        text={rate6}
                        styles={{
                            root: {},
                            path: {
                                stroke: `rgb(24, 187, 24)`,
                                strokeLinecap: 'butt',
                                transition: 'stroke-dashoffset 0.5s ease 0s',
                                transform: 'rotate(0.25turn)',
                                transformOrigin: 'center center',
                            },
                            trail: {
                                stroke: '#e0e0e0',
                                strokeLinecap: 'butt',
                                transform: 'rotate(0.25turn)',
                                transformOrigin: 'center center',
                            },
                            text: {
                                fill: '#808080',
                                fontSize: '16px',
                            },
                            background: {
                                fill: '#3e98c7',
                            },
                            }} />
                </div>
                <h5 className="mb-0 mt-1 text-t-gray">Cleaners</h5>
            </Col>
            <Col className="p-2 text-center" lg="3" md="3" sm="4" xs="6">
                <div className="circle-progress">
                    <CircularProgressbar
                        value={rate7*10}
                        text={rate7}
                        styles={{
                            root: {},
                            path: {
                                stroke: `rgb(24, 187, 24)`,
                                strokeLinecap: 'butt',
                                transition: 'stroke-dashoffset 0.5s ease 0s',
                                transform: 'rotate(0.25turn)',
                                transformOrigin: 'center center',
                            },
                            trail: {
                                stroke: '#e0e0e0',
                                strokeLinecap: 'butt',
                                transform: 'rotate(0.25turn)',
                                transformOrigin: 'center center',
                            },
                            text: {
                                fill: '#808080',
                                fontSize: '16px',
                            },
                            background: {
                                fill: '#3e98c7',
                            },
                            }} />
                </div>
                <h5 className="mb-0 mt-1 text-t-gray">Cleaners</h5>
            </Col>
            <Col className="p-2 text-center" lg="3" md="3" sm="4" xs="6">
                <div className="circle-progress">
                    <CircularProgressbar
                        value={rate8*10}
                        text={rate8}
                        styles={{
                            root: {},
                            path: {
                                stroke: `rgb(24, 187, 24)`,
                                strokeLinecap: 'butt',
                                transition: 'stroke-dashoffset 0.5s ease 0s',
                                transform: 'rotate(0.25turn)',
                                transformOrigin: 'center center',
                            },
                            trail: {
                                stroke: '#e0e0e0',
                                strokeLinecap: 'butt',
                                transform: 'rotate(0.25turn)',
                                transformOrigin: 'center center',
                            },
                            text: {
                                fill: '#808080',
                                fontSize: '16px',
                            },
                            background: {
                                fill: '#3e98c7',
                            },
                            }} />
                </div>
                <h5 className="mb-0 mt-1 text-t-gray">Cleaners</h5>
            </Col>
        </Row>
        );
    }
}

export default Rates;
