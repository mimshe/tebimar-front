import React from "react";
// reactstrap components
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem 
} from "reactstrap";

import dollar from '../../assets/img/currency/dollar.png';
import euro from '../../assets/img/currency/euro.png';
import { mapDispatchToProps, mapStateToProps } from "../../redux/constants";
import { connect } from "react-redux";

class UserMenu extends React.Component {
   constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }
  state = {
    dropdownOpen: false,
  };

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  onMouseEnter() {
    this.setState({dropdownOpen: true});
  }

  onMouseLeave() {
    this.setState({dropdownOpen: false});
  }

  render() {
    return (
      <>
        <UncontrolledDropdown
            nav
            inNavbar
            onMouseOver={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
            isOpen={this.state.dropdownOpen}
            toggle={this.toggle}>
        <DropdownToggle nav>
        {`welcome, ${this.props.user.name}`}
        <i className="fa fa-chevron-down ml-2"></i>
        </DropdownToggle>
        <DropdownMenu className="">
        <DropdownItem><a className="nav-link-icon nav-child-link"><i className="fa fa-user mr-2"></i>Profile</a></DropdownItem>
        <DropdownItem><a onClick={() =>  this.props.resetUser()} className="nav-link-icon nav-child-link"><i className="fa fa-sign-out-alt mr-2"></i>Sign out</a></DropdownItem>
        </DropdownMenu>
        </UncontrolledDropdown>
      </>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserMenu);
