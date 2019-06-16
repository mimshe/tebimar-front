import React from "react";
// reactstrap components
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem 
} from "reactstrap";

import fa from '../../assets/img/language/iran.png';
import en from '../../assets/img/language/united-kingdom.png';
import { mapStateToProps, mapDispatchToProps } from "../../redux/constants";
import { connect } from "react-redux";

class Language extends React.Component {
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
            key:'en',
            title: <img src={en} alt="" />
        },
        {
            key:'fa',
            title:<img src={fa} alt="" />
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
        options.push(<DropdownItem key={item.key}><a onClick={() => this.props.setGeneral({localLang:item.key})} className="nav-link-icon nav-child-link">{item.title}</a></DropdownItem>)
    );

    const selectedItem = this.state.options.find(x=> x.key == (this.props.general.localLang != null ? this.props.general.localLang : 'en'));

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
        {selectedItem.title}
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

export default connect(mapStateToProps,mapDispatchToProps)(Language);
