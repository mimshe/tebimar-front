import React from "react";
import { Link } from "react-router-dom";
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
import store from "../../../redux/store";
import { closeModal, openModal } from "../../../redux/actions";
import { connect } from "react-redux";

class Signup extends React.Component {

  state = {
    defaultModal: false
  };

  render() {
  let isOpen = this.props.name != null && this.props.name == 'signup' ? true : false;
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
                  onClick={() => store.store.dispatch(closeModal())}
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
                              <i className="ni ni-mobile-button" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="phone number" type="number" />
                        </InputGroup>
                      </FormGroup>
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
 
                      <div className="text-center">
                        <Button
                          className="my-3 btn-block"
                          color="primary"
                          type="button"
                        >
                          Sign up
                        </Button>

                      </div>
                      <div className="text-left">
                        <a
                          onClick={() => store.store.dispatch(openModal('signup'))}
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
const mapStateToProps = state => {
  const name = state.modal.name;
  return {name}
}

export default connect(mapStateToProps)(Signup);

