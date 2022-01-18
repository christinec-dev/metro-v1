import React from "react";
import { Collapse, Navbar, NavbarToggler, NavbarText, NavbarBrand, Nav, NavLink, NavItem, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';
import { Link } from "react-router-dom";
import logo from './images/logo.png'
import "./navbar.css";

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.toggler = this.toggler.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.state = {
      dropdownOpen: false,
      isOpen: false
    };
  }

  toggler() {
    this.setState({
      isOpen: !this.state.isOpen
    });
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
    return <>  
      <div className="nav-main">
        <Navbar expand="lg" light className="nav">
          <NavbarBrand href="/" className="nav-brand">
            <img src={logo} alt="Logo" className="logo"/>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggler} className="nav-toggle"/>
          <Collapse navbar isOpen={this.state.isOpen} className="collapsed">
            <Nav className="me-auto" navbar>
              <NavItem className="nav-item">
                <NavLink>
                  <Link to="/home" className="nav-link">Home</Link> 
                </NavLink>
              </NavItem>
              <NavItem className="nav-item">
                <NavLink className="link-wrap">
                  <Link to="/about" className="nav-link">Our Story</Link>
                </NavLink>
              </NavItem>
              <NavItem className="nav-item">
                <NavLink className="link-wrap">
                  <Link to="/careers" className="nav-link">Careers</Link>
                </NavLink>
              </NavItem>
              <NavItem className="nav-item">
                <NavLink className="link-wrap">
                  <Link to="/contact" className="nav-link">Contact</Link>
                </NavLink>
              </NavItem>
              <NavItem className="nav-item">
                <NavLink>
                  <Dropdown className="d-inline-block" onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle caret className="dropdown">
                      Resources
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu">
                      <DropdownItem className="dropdown-item">
                        <NavLink className="link-wrap-dropdown">
                          <Link to="/404" className="nav-link-dropdown">Licenses</Link>
                        </NavLink>
                      </DropdownItem>
                      <DropdownItem className="dropdown-item">
                      <NavLink className="link-wrap-dropdown">
                          <Link to="/404" className="nav-link-dropdown">Privacy Policy</Link>
                        </NavLink>
                      </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                </NavLink>
              </NavItem>
            </Nav>
            <NavbarText className="nav-link-aside">
              <Button className="nav-link-button">
                <Link to="/" className="no-style">
                  Request Call   
                </Link>
              </Button>
            </NavbarText>
          </Collapse>
        </Navbar>
      </div>
    </>
  }
}