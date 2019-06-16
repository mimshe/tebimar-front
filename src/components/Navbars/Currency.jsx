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

class Currency extends React.Component {
   constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }
  state = {
    dropdownOpen: false,
    options:[
        {
            key:'dollar',
            title:'Dollar',
            img: <img src={dollar} alt="" />
        },
        {
            key:'euro',
            title:'Euro',
            img:<img src={euro} alt="" />
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

  render() {
    const options = [];
    this.state.options.map(item =>
        options.push(<DropdownItem key={item.key}><a onClick={() =>  this.props.setGeneral({currencyUnit:item.key})} className="nav-link-icon nav-child-link">{item.img} {item.title}</a></DropdownItem>)
    );
    const selectedItem = this.state.options.find(x=> x.key == (this.props.general.currencyUnit != null ? this.props.general.currencyUnit : 'dollar'));

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

export default connect(mapStateToProps,mapDispatchToProps)(Currency);
