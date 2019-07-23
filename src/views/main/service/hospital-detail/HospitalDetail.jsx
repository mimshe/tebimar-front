import React from "react";
import Navigation from "../Navigation.jsx"
import {
    Row,
    Col,
    Button,
    Container
} from "reactstrap";
import { Carousel } from 'antd';
import fa from '../../../../assets/img/language/iran.png';
import en from '../../../../assets/img/language/united-kingdom.png';
import Comments from "./Comments.jsx";
import RecommendedPackages from "./RecommendedPackages.jsx";
import Physicians from "./Physicians.jsx";
import Costs from "./Costs.jsx";
import PlaceInMap from "./PlaceInMap.jsx";
import MiniComments from "./MiniComments.jsx";
import Rates from "./Rates.jsx";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../../../../redux/constants";

class HospitalDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          id:'',
          hospital:{
              detail:{
                id: '',
                user_id: '',
                name: '',
                description: '',
                lat: 35.69439,
                long: 51.42151,
                address: '',
                phone: '',
                created_at: '',
                updated_at: ''
              },
              comments:[],
              rate:[],
              gallery:{

              }
          }
        };
    }
    componentWillMount () {
        const { id } = this.props.match.params;
        const currentState = this.state;
        currentState.id = id;
        this.setState(currentState);
        this.getData();
        console.log(this.state);
    }

    getData(){
        this.getDetail();
        this.getComment();
        this.getRate();
        this.getGallery();
    }

    getDetail(){
        var that = this;
        var data = null;
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        xhr.addEventListener("readystatechange", function () {
          if (this.readyState === 4) {
            const res = JSON.parse(this.responseText);
            if(res.status){
                const currentState = that.state;
                currentState.hospital.detail = res.data;
                that.setState(currentState);
            }
          }
        });
        xhr.open("GET", `http://api.tebimar.com/api/v1/hospital/${this.state.id}`);        
        xhr.send(data);
    }
    getComment(){
        var that = this;
        var data = null;
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        xhr.addEventListener("readystatechange", function () {
          if (this.readyState === 4) {
            const res = JSON.parse(this.responseText);
            if(res.status){
                const currentState = that.state;
                currentState.hospital.comments = res.data;
                that.setState(currentState);
            }
          }
        });
        xhr.open("GET", `http://api.tebimar.com/api/v1/hospital/${this.state.id}/comment`);        
        xhr.send(data);
    }
    getRate(){
        var that = this;
        var data = null;
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        xhr.addEventListener("readystatechange", function () {
          if (this.readyState === 4) {
            const res = JSON.parse(this.responseText);
            if(res.status){
                const currentState = that.state;
                currentState.hospital.rate = res.data;
                that.setState(currentState);
            }
          }
        });
        xhr.open("GET", `http://api.tebimar.com/api/v1/hospital/${this.state.id}/rate`);        
        xhr.send(data);
    }
    getGallery(){
        var that = this;
        var data = null;
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        xhr.addEventListener("readystatechange", function () {
          if (this.readyState === 4) {
            const res = JSON.parse(this.responseText);
            if(res.status){
                const currentState = that.state;
                currentState.hospital.gallery = res.data;
                that.setState(currentState);
            }
          }
        });
        xhr.open("GET", `http://api.tebimar.com/api/v1/hospital/${this.state.id}/gallery`);        
        xhr.send(data);
    }

    render() {
        return (
            <Container className="pb-5">
                <Row className="d-flex flex-row">
                    <Navigation />
                    <Col className="mt-4" lg="4" md="12">
                    <div className="hospital-detail-box">
                        <div className="header d-flex justify-content-between p-3">
                            <h1 className="title">{this.state.hospital.detail.name}</h1>
                            <div className="rate-box ml-lg-auto">
                                <div className="rate">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star-half-alt"></i>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i>
                                </div>
                                <div className="rate-point">45/5</div>
                            </div>
                        </div>
                        <div className="body">
                            <div className="content pl-3 pr-3 pb-3 pt-0">
                                <div className="item d-flex align-items-md-start p-2">
                                    <i className="fa fa-map-marked-alt"></i>
                                    <span className="ml-3">{this.state.hospital.detail.address}</span>
                                </div>
                                <div className="item d-flex align-items-md-start p-2">
                                    <i className="fa fa-phone"></i>
                                    <span className="ml-3">{this.state.hospital.detail.phone}</span>
                                </div>
                                <Button className="mt-2" color="t-default" block outline type="button">
                                    deselect
                                </Button>                            
                            </div>
                            <PlaceInMap lat={this.state.hospital.detail.lat} lng={this.state.hospital.detail.long} />
                        </div>
                    </div>
                    </Col>
                    <Col className="mt-4" lg="8" md="12">
                        <Carousel autoplay>
                            <div>
                                <div
                                    style={{
                                        minHeight: "341px",
                                        backgroundImage:
                                        "url(" + require("assets/img/1.jpg") + ")",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center top"
                                    }}>
                                </div>
                            </div>
                            <div>
                                <div
                                    style={{
                                        minHeight: "341px",
                                        backgroundImage:
                                        "url(" + require("assets/img/1.jpg") + ")",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center top"
                                    }}>
                                </div>
                            </div>
                            <div>
                                <div
                                    style={{
                                        minHeight: "341px",
                                        backgroundImage:
                                        "url(" + require("assets/img/1.jpg") + ")",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center top"
                                    }}>
                                </div>
                            </div>
                        </Carousel>
                    </Col>
                    <Col className="mt-4" xl="4" lg="12" md="12">
                        <div className="hospital-detail-box">
                            <div className="header d-flex justify-content-between p-3">
                                <h4 className="title">About Hospital</h4>
                            </div>
                            <div className="body">
                                <div className="content pl-3 pr-3 pb-3 pt-0">
                                    <p className="description mb-0 pl-2 pr-2">{this.state.hospital.detail.description}</p>  
                                    <div className="item d-flex align-items-md-start p-2">
                                        <span className="item-title">Spoken Lan</span>
                                        <span className="ml-2">
                                            <img className="m-1" src={fa} alt="" />
                                            <img className="m-1" src={en} alt="" />
                                        </span>
                                    </div>  
                                    <div className="item row pl-3 pr-3 pb-0 pt-0">
                                        <span className="facility col-4 p-2">
                                            <i className="fa fa-check"></i>
                                            <span className="ml-1">Rooms</span>
                                        </span>
                                        <span className="facility col-4 p-2">
                                            <i className="fa fa-check"></i>
                                            <span className="ml-1">Parking</span>
                                        </span>
                                        <span className="facility col-4 p-2">
                                            <i className="fa fa-check"></i>
                                            <span className="ml-1">Pool</span>
                                        </span>
                                        <span className="facility col-4 p-2">
                                            <i className="fa fa-check"></i>
                                            <span className="ml-1">Rest</span>
                                        </span>
                                        <span className="facility col-4 p-2">
                                            <i className="fa fa-check"></i>
                                            <span className="ml-1">Spa</span>
                                        </span>
                                        <span className="facility col-4 p-2">
                                            <i className="fa fa-check"></i>
                                            <span className="ml-1">Sea</span>
                                        </span>
                                        <span className="facility col-4 p-2">
                                            <i className="fa fa-check"></i>
                                            <span className="ml-1">Bath</span>
                                        </span>
                                    </div>                    
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="mt-4" xl="8" lg="12" md="12">
                        <div className="hospital-detail-box d-flex flex-row">
                            <Col
                            className={`${this.state.hospital.comments.length <= 0 ? 'col-lg-12' : 'border-right'}`}
                            lg="7">
                                <div className="header d-flex justify-content-between mt-3 mb-3">
                                    <h4 className="title">Rate Hospital</h4>
                                </div>
                                <div className="body">
                                    <div className="content pl-3 pr-3 pb-3 pt-0">
                                        <Rates data={this.state.hospital.rate.find(x=> x.id == this.state.id)} />

                                        <Button
                                            className={`mt-2 ${this.props.user.id ? 'd-none' : 'd-block'}`}
                                            color="t-default"
                                            block
                                            outline
                                            type="button">
                                            Log in to Rate
                                        </Button>

                                        <Button
                                            className={`mt-2 ${this.props.user.id ? 'd-block' : 'd-none'}`}
                                            color="t-default"
                                            block
                                            outline
                                            type="button">
                                            Rate
                                        </Button>
                                    </div>
                                </div>
                            </Col>
                            <Col
                                lg="5"
                                className={`${this.state.hospital.comments.length <= 0 ? 'd-none' : 'd-none d-lg-block d-xl-block d-md-block d-sm-none d-xs-none'}`}>
                                <div className="header d-flex justify-content-between mt-3 mb-3">
                                    <h4 className="title">Comments</h4>
                                </div>
                                <div className="body">
                                    <div className="content pl-2 pr-2 pb-3 pt-0">
                                        <MiniComments comments={this.state.hospital.comments} />
                                        <Button className="mt-2 text-t-black" color="secondary" block outline type="button">
                                            <span>more comment</span>
                                            <i className="fa fa-chevron-down ml-2"></i>
                                        </Button>
                                    </div>
                                </div>
                            </Col>
                        </div>
                    </Col>

                    <Physicians />
                    <RecommendedPackages />
                    <Costs />
                    <Comments comments={this.state.hospital.comments} />
                </Row>
            </Container>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HospitalDetail);

