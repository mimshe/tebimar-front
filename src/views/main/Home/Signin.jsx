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
                    <Form role="form">
                      <FormGroup className="mb-3">
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Email" type="email" />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-lock-circle-open" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Password" type="password" />
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
                          type="button"
                        >
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

