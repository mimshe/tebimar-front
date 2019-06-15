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

import dollar from '../../assets/img/currency/dollar.png';
import euro from '../../assets/img/currency/euro.png';

class Currency extends React.Component {
   constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }
  state = {
    dropdownOpen: false,
    selectedOption:'en',
    options:[
        {
            key:'en',
            title:'Dollar',
            img: <img src={dollar} />
        },
        {
            key:'fa',
            title:'Euro',
            img:<img src={euro} />
        },
    ]
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

  setLanguage(item){
    this.setState(prevState => ({
        selectedOption: item
    }));
  }

  render() {
    const data = this.props.data;

    const options = [];
    this.state.options.map(item =>
        options.push(<DropdownItem key={item.key}><a onClick={() => this.setLanguage(item.key)} className="nav-link-icon nav-child-link">{item.img} {item.title}</a></DropdownItem>)
    );

    const selectedItem = this.state.options.find(x=> x.key == this.state.selectedOption);

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
        {selectedItem.img}
        <i className="fa fa-chevron-down ml-2"></i>
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-mini">
            {options}
        </DropdownMenu>
        </UncontrolledDropdown>
      </>
    );
  }
}

export default Currency;