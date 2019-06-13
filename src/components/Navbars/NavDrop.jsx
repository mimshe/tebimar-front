import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem 
} from "reactstrap";

class NavDrop extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

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
    const data = this.props.data;

    const options = [];
    data.options.map(item =>
        options.push(<DropdownItem><Link className="nav-link-icon  nav-child-link" to={item.link}>{item.title}</Link></DropdownItem>)
    );

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
        {data.title}
        <i className="fa fa-chevron-down ml-2"></i>
        </DropdownToggle>
        <DropdownMenu left>
            {options}
        </DropdownMenu>
        </UncontrolledDropdown>
      </>
    );
  }
}

export default NavDrop;