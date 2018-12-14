import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { Cube } from '../assets/cube'

const Nav = styled.nav`
  display: flex;

  text-align: right;
  height: 42px;
  top: 0;
  right: 0;

  z-index: 999;
`

const NavList = styled.ul`
  display: flex;
  margin-top: 0;
  margin-left: auto;

  background-color: #fff;
  z-index: 999;
  top: 0;
  right: 0;

  @media only screen and (max-width: 768px) {
    display: none;
    flex-direction: column;
    margin-top: 50px;
  }
`

const Icon = styled.div`
  display: flex;

  align-items: center;
  height: 10vh;

  font-size: 1.8rem;

  svg {
    height: 10vh;
  }

  div {
    justify-content: center;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
    font-weight: 300;
    color: #272727;
  }

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
`

const NavItem = styled.li`
  padding: 0.8rem;
  padding-bottom: 2rem;
  margin: 0;
  text-align: center;

  background-color: #fff;

  justify-content: flex-end;

  align-items: center;
  text-decoration: none;
  list-style: none;

  flex-direction: column;

  a {
    font-size: 1rem;
    letter-spacing: 2px;
    padding: 1rem;
    /* margin-bottom: 0.5rem; */
    color: #272727;
    padding: 10px 30px 0px;

    display: inline-block;
    position: relative;
    text-decoration: none;
  }

  a:after {
    content: '';
    position: absolute;
    float: right;
    margin-left: 10px;
    margin-bottom: -4px;
    bottom: 0;
    left: 0;
    width: 0%;
    border-bottom: 8px solid #14a76c;
    transition: 0.4s;
  }
  a:hover:after {
    width: 80%;
  }
`

const Toggle = styled.div`
  display: none;
  margin-left: auto;
  right: 0;
  position: absolute;
  padding: 1rem;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    display: block;
  }
`

class Header extends Component {
  state = {
    responsiveMenuOpen: false,
  }

  toggleMenu = () => () => {
    console.log('click')
    const currentState = this.state.responsiveMenuOpen
    console.log(currentState)
    this.setState({
      responsiveMenuOpen: !currentState,
    })
  }

  render() {
    return (
      <Nav>
        <Icon>
          <Cube />
          <Link to="/">
            <span>FMC Europe 2018</span>
          </Link>
        </Icon>
        <Toggle onClick={this.toggleMenu()}>Menu</Toggle>
        <NavList className={this.state.responsiveMenuOpen ? 'active' : ''}>
          <NavItem>
            <Link to="/#AboutSection">About</Link>
          </NavItem>
          <NavItem>
            <Link to="/#FAQSection">FAQ</Link>
          </NavItem>
          <NavItem>
            <Link to="/locations">Locations</Link>
          </NavItem>
        </NavList>
      </Nav>
    )
  }
}

export default Header
