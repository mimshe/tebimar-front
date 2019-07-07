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


class Signin extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      field:{
        email:{
          value:'',
          validation:false
        },
        password:{
          value:'',
          validation:false
        }
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    const email = (this.state.field.email.value != '' ? false : true);
    const password = (this.state.field.password.value != '' ?( this.state.field.password.value.length < 6 ? true : false) : true);
    if(email || password){
      const currentState = this.state;
      currentState.field['email'].validation = email;
      currentState.field['password'].validation = password;
      this.setState(currentState);
    }
    else{
      this.login();
    }
  }

  login(){
    var data = new FormData();
    data.append("email", this.state.field.email.value);
    data.append("password", this.state.field.password.value);

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
      }
    });
    
    xhr.open("POST", "http://api.tebimar.com/api/v1/auth/login");    
    xhr.send(data);
  }

  render() {
  const isOpen = this.props.modal.name !== null && this.props.modal.name === 'signin' ? true : false;
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
                    Sign in to <span className="text-t-green">Tebimar</span>
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
                            placeholder="Password"
                            type="password" />
                        </InputGroup>
                      </FormGroup>
                      <div className="custom-control custom-control-alternative custom-checkbox">
                        <input
                          className="custom-control-input"
                          id=" customCheckLogin"
                          type="checkbox"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor=" customCheckLogin"
                        >
                          <span className="text-muted">Remember me</span>
                        </label>
                      </div>
                      <div className="text-center">
                        <Button
                          className="my-3 btn-block"
                          color="primary"
                          type="submit">
                          Sign in
                        </Button> 
                      </div>
                      <div className="text-left">
                        <a className="text-t-green d-block">Forgot Password!</a>
                        <a
                          onClick={() => this.props.openModal('signup')}
                          className="text-t-green d-block">Sign up</a>
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

export default connect(mapStateToProps, mapDispatchToProps)(Signin);

