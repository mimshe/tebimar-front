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
          validation:false,
          validationText:''
        },
        family:{
          value:'',
          validation:false,
          validationText:''
        },
        country_id:{
          value:'',
          validation:false,
          validationText:''
        },
        email:{
          value:'',
          validation:false,
          validationText:''
        },
        password:{
          value:'',
          validation:false,
          validationText:''
        },
        mobile:{
          value:'',
          validation:false,
          validationText:''
        },
      },
      local:[],
      submit:false
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
        const res = JSON.parse(this.responseText);
        if(res.status){
          const currentState = that.state;
          currentState.local = res.data;
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
    this.validation(false);
  }
  handleDropChange(value,field) {
    const currentState = this.state;
    currentState.field[field].value = value;
    this.setState(currentState);
  }

  handleSubmit(event) {
    this.validation(true);
    event.preventDefault();
  }

  validation(action){
    const name = (this.state.field.name.value != '' ? false : true);    
    const family = (this.state.field.family.value != '' ? false : true);
    const country_id = (this.state.field.country_id.value != '' ? false : true);
    const email = (this.state.field.email.value != '' ? false : true);
    const password = (this.state.field.password.value != '' ?( this.state.field.password.value.length < 6 ? true : false) : true);
    const mobile = (this.state.field.mobile.value != '' ? false : true);
    if((name || family || country_id || email || password || mobile) && this.state.submit){
      const currentState = this.state;
      currentState.field['name'].validation = name;
      currentState.field['family'].validation = family;
      currentState.field['country_id'].validation = country_id;
      currentState.field['email'].validation = email;
      currentState.field['password'].validation = password;
      currentState.field['mobile'].validation = mobile;
      this.setState(currentState);
    }
    else if(action && (!name && !family && !country_id && !email && !password && !mobile)){
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

    var that = this;
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        const res = JSON.parse(this.responseText);
        if(res.status){
          that.props.setUser(res.data);
          that.props.closeModal();
        }
        else{          
          const name = (res.data.name ? true : false);    
          const family = (res.data.family ? true : false);
          const country_id = (res.data.country_id ? true : false);
          const email = (res.data.email ? true : false);
          const password = (res.data.password ? true : false);
          const mobile = (res.data.mobile ? true : false);
          if(name || family || country_id || email || password || mobile){
            const currentState = that.state;
            currentState.submit = true;
            currentState.field['name'].validation = name;
            currentState.field['name'].validationText = (name ? res.data.name : '');
            currentState.field['family'].validation = family;
            currentState.field['family'].validationText = (family ? res.data.family : '');
            currentState.field['country_id'].validation = country_id;
            currentState.field['country_id'].validationText = (country_id ? res.data.country_id : '');
            currentState.field['email'].validation = email;
            currentState.field['email'].validationText = (email ? res.data.email : '');
            currentState.field['password'].validation = password;
            currentState.field['password'].validationText = (password ? res.data.password : '');
            currentState.field['mobile'].validation = mobile;
            currentState.field['mobile'].validationText = (mobile ? res.data.mobile : '');
            that.setState(currentState);
          }
        }
      }
    });

    xhr.open("POST", "http://api.tebimar.com/api/v1/auth/register");
    xhr.send(data);
  }

  render() {    
  const isOpen = this.props.modal.name !== null && this.props.modal.name === 'signup' ? true : false;

  const localOption = [];
  this.state.local.map(item =>
    localOption.push(<Option key={item.id} value={item.id}>{item.phone_prefix} - {item.name} ({item.abbr})</Option>));

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
                        <small className={`mt-2 mb-2 text-red ${this.state.field.name.validationText != '' ? 'd-block' : 'd-none'}`}>{this.state.field.name.validationText}</small>
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
                        <small className={`mt-2 mb-2 text-red ${this.state.field.family.validationText != '' ? 'd-block' : 'd-none'}`}>{this.state.field.family.validationText}</small>
                    </FormGroup>
                    <Select
                    showSearch
                    defaultValue={this.state.field.country_id.value}
                    onChange={(value) => this.handleDropChange(value,'country_id') }
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
                        <small className={`mt-2 mb-2 text-red ${this.state.field.mobile.validationText != '' ? 'd-block' : 'd-none'}`}>{this.state.field.mobile.validationText}</small>
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
                        <small className={`mt-2 mb-2 text-red ${this.state.field.email.validationText != '' ? 'd-block' : 'd-none'}`}>{this.state.field.email.validationText}</small>
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
                        <small className={`mt-2 mb-2 text-red ${this.state.field.password.validationText != '' ? 'd-block' : 'd-none'}`}>{this.state.field.password.validationText}</small>
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

