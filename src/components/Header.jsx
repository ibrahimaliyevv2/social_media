import React, { Component } from 'react'
import '../css/Header.css';
import Logo from '../img/logo.png'
import ProfilePhoto from '../img/profile-photo.jpeg'
import { Navbar, NavbarBrand, NavbarToggler, Collapse, NavbarText, Dropdown, DropdownMenu } from 'reactstrap'
import { Nav, NavItem, NavLink } from 'reactstrap'



class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="my-navbar">
        <Navbar
          color="danger"
          expand="md"
          dark
        >
          <NavbarBrand
            className='my-brand-nav'
            href="/social_media">
            <img src={Logo} alt="" />
            Chaos
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} className='collapse-main overflow-hidden' navbar>
            <div className="search-box m-auto">
              <form>
                <input type="text" className="input-search" placeholder="Search..." />
                <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
              </form>
            </div>
            <Nav
              className="nav-main justify-content-end mt-3 mb-3"
              navbar
            >

              <NavItem className='navitem-main'>
                <NavLink className='navlink-main' href="/social_media">
                  <i className="fa-solid fa-house"></i>
                  <NavbarText className='navtext-sp'>HOME</NavbarText>
                </NavLink>
              </NavItem>
              <NavItem className='navitem-main'>
                <Dropdown className='dropdown friend-requests-nav-item'>

                </Dropdown>
                <NavLink href="/social_media" className='navlink-main dropdown-bs-toggle' role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="fa-solid fa-user-large"></i>
                  <NavbarText className='navtext-sp'>FOLLOWERS</NavbarText>
                  <DropdownMenu className='dropdown-menu'>

                  </DropdownMenu>
                </NavLink>

              </NavItem>
              <NavItem className='navitem-main'>
                <NavLink className='navlink-main' href="/">
                  <i className="fa-solid fa-envelope"></i>
                  <NavbarText className='navtext-sp'>MESSAGES</NavbarText>
                </NavLink>
              </NavItem>
              <NavItem className='navitem-main'>
                <NavLink className='navlink-main' href="/">
                  <i className="fa-solid fa-bell"></i>
                  <NavbarText className='navtext-sp'>NOTIFICATIONS</NavbarText>
                </NavLink>
              </NavItem>
              <NavItem className='navitem-main special-navitem'>
                <NavLink className='navlink-main' href="/social_media">
                  <i className="fa-solid fa-globe"></i>
                  <NavbarText className='navtext-sp'>LANGUAGE</NavbarText>
                </NavLink>
              </NavItem>
              <NavItem className='navitem-main user-profile-special'>
                <NavLink className='navlink-main' href="/">
                  <i className="fa-solid fa-address-card"></i>
                  <NavbarText className='navtext-sp'>MY PROFILE</NavbarText>
                </NavLink>
              </NavItem>
              <a className='user-profile'>
                <img src={ProfilePhoto} alt='' />
                <span>Fazail Jabbarov</span>
              </a>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}


export default Header;