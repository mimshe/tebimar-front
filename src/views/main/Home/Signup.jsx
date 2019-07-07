import React from "react";
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Modal
} from "reactstrap";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../../../redux/constants";
import { Select } from 'antd';
const { Option } = Select;

class Signup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      field:{
        name:{
          value:'',
          validation:false
        },
        family:{
          value:'',
          validation:false
        },
        country_id:{
          value:'',
          validation:false
        },
        email:{
          value:'',
          validation:false
        },
        password:{
          value:'',
          validation:false
        },
        mobile:{
          value:'',
          validation:false
        },
      },
      local:[]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getLocal();
  }

  getLocal(){
    var data = null;
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    var that = this;
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        if(this.responseText.status){
          console.log(this.responseText);
          const currentState = that.state;
          currentState.local = this.responseText.data;
          that.setState(currentState);
        }
      }
    });

    xhr.open("GET", "http://api.tebimar.com/api/v1/local/countries");
    xhr.send(data);
  }

  handleChange(event) {
    const currentState = this.state;
    currentState.field[event.target.name].value = event.target.value;
    this.setState(currentState);
  }

  handleSubmit(event) {
    this.validation();
    event.preventDefault();
  }

  validation(){
    const name = (this.state.field.name.value != '' ? false : true);    
    const family = (this.state.field.family.value != '' ? false : true);
    const country_id = (this.state.field.country_id.value != '' ? false : true);
    const email = (this.state.field.email.value != '' ? false : true);
    const password = (this.state.field.password.value != '' ?( this.state.field.password.value.length < 6 ? true : false) : true);
    const mobile = (this.state.field.mobile.value != '' ? false : true);
    if(name || family || country_id || email || password || mobile){
      const currentState = this.state;
      currentState.field['name'].validation = name;
      currentState.field['family'].validation = family;
      currentState.field['country_id'].validation = country_id;
      currentState.field['email'].validation = email;
      currentState.field['password'].validation = password;
      currentState.field['mobile'].validation = mobile;
      this.setState(currentState);
    }
    else{
      this.register();
    }
  }

  register() {
    var data = new FormData();
    data.append("name", this.state.field.name.value);
    data.append("family", this.state.field.family.value);
    data.append("country_id", this.state.field.country_id.value);
    data.append("email", this.state.field.email.value);
    data.append("password", this.state.field.password.value);
    data.append("mobile", this.state.field.mobile.value);

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
      }
    });

    xhr.open("POST", "http://api.tebimar.com/api/v1/auth/register");
    xhr.send(data);
  }

  render() {    
  const isOpen = this.props.modal.name !== null && this.props.modal.name === 'signup' ? true : false;

  const localOption = [];
  this.state.local.map(item =>
    localOption.push(<Option value={item.id}>{item.name}</Option>));

    return (
      <>
        <Modal
              className="modal-dialog-centered"
              size="sm"
              isOpen={isOpen}
        >
              <div className="modal-body p-0">
                <Card className="bg-secondary shadow border-0">
                <div className="modal-header">
                  <h4 className="modal-title" id="modal-title-default">
                    Sign up to <span className="text-t-green">Tebimar</span>
                  </h4>
                  <button
                  aria-label="Close"
                  className="close"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => this.props.closeModal()}
                >
                  <span aria-hidden={true}>×</span>
                </button>
                </div>
                  <CardBody className="px-lg-5 py-lg-4">
                    <Form role="form" onSubmit={this.handleSubmit}>

                    <FormGroup className={`mb-3 ${this.state.field.name.validation ? 'has-danger' : ''}`}>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-single-02" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            name="name"
                            value={this.state.field.name.value}
                            onChange={this.handleChange}
                            placeholder="Name"
                            type="text" />
                        </InputGroup>
                    </FormGroup>
                    <FormGroup className={`mb-3 ${this.state.field.family.validation ? 'has-danger' : ''}`}>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-single-02" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            name="family"
                            value={this.state.field.family.value}
                            onChange={this.handleChange}
                            placeholder="Family"
                            type="text" />
                        </InputGroup>
                    </FormGroup>
                    <Select
                    showSearch
                    size="large"
                    className="mb-3"
                    style={{ width: '100%' }}
                    placeholder="Local"
                    optionFilterProp="children"
                >
                  {localOption}
                  </Select>
                    <FormGroup className={`mb-3 ${this.state.field.mobile.validation ? 'has-danger' : ''}`}>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-mobile-button" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            name="mobile"
                            value={this.state.field.mobile.value}
                            onChange={this.handleChange}
                            placeholder="phone number"
                            type="text" />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup className={`mb-3 ${this.state.field.email.validation ? 'has-danger' : ''}`}>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            name="email"
                            value={this.state.field.email.value}
                            onChange={this.handleChange}
                            placeholder="Email"
                            type="email" />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup className={`mb-3 ${this.state.field.password.validation ? 'has-danger' : ''}`}>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-lock-circle-open" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            name="password"
                            value={this.state.field.password.value}
                            onChange={this.handleChange}
                            placeholder="password"
                            type="password" />
                        </InputGroup>
                      </FormGroup>
 
                      <div className="text-center">
                        <Button
                          className="my-3 btn-block"
                          color="primary"
                          type="submit">
                          Sign up
                        </Button> 

                      </div>
                      <div className="text-left">
                        <a
                          onClick={() => this.props.openModal('signin')}
                          className="text-t-green d-block">Sign in</a>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </div>
        </Modal>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

