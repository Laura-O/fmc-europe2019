import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { Cube } from '../assets/cube'

const Nav = styled.nav`
  display: flex;

  text-align: right;  
  top: 0;
  right: 0;

  z-index: 999;

  background-color: #F4F4F2;

  @media only screen and (max-width: 768px) {
   flex-direction: column;
   right: auto;
   left: 0;
   padding: 0;
   margin-bottom: 1rem;
  }
`

const NavList = styled.ul`
  display: flex;
  z-index: 999;
  top: 0;
  right: 0;

  @media only screen and (max-width: 768px) {
    justify-content: center;
    margin: 0;
    padding-left: 0;
  }
`

const Icon = styled.div`
  display: flex;

  align-items: center;
  height: 10vh;

  font-size: 1.6rem;
  font-weight: 400;

  svg {
    height: 10vh;
  }

  div {
    justify-content: center;
  }

  a {
    text-decoration: none;
    font-weight: 500;
    cursor: pointer;
  }

  span {
      float: left;
      text-align: left;
      padding-left: 5px;
    }

  a:hover {
    text-decoration: none;
    font-weight: 700;
    color: #000000;
  }

  @media only screen and (max-width: 1024px) {
    font-size: 1.2rem;
  }

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
`

const NavItem = styled.li`
  padding: 0.5rem;
  padding-bottom: 1rem;
  margin: 0;
  text-align: center;

  justify-content: flex-end;

  align-items: center;
  text-decoration: none;
  list-style: none;

  flex-direction: column;

  a {
    font-size: 1rem;
    letter-spacing: 2px;
    padding: 1rem;
    color: #272727;
    padding: 10px 10px 0px;

    display: inline-block;
    position: relative;
    text-decoration: none;
    cursor: pointer;   
  }

  a:hover {
    color: #000000;
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
    border-bottom: 8px solid #1995AD;
    transition: 0.4s;
  }
  a:hover:after {
    width: 80%;
  }

  @media only screen and (max-width: 768px) {
    padding: .1rem;
    justify-content: flex-start;
    font-size: 1rem;
    font-weight: 500;

    a {
      padding: 0.4rem;
    }
  }

  @media only screen and (max-width: 480px) {
    padding: .1rem;
    justify-content: flex-start;
    font-size: 0.7rem;
    font-weight: 500;

    a {
      padding: 0.2rem;
    }
  }
`

class Header extends Component {
  render() {
    return (
      <Nav>
        <Icon>
          <Cube />
          <Link to="/">
            <span>FMC Europe 2019</span>
          </Link>
        </Icon>
        <NavList>
        <NavItem>
            <Link to="/#NewsSection">News</Link>
          </NavItem>
          <NavItem>
            <Link to="/#Schedule">Schedule</Link>
          </NavItem>
          <NavItem>
            <Link to="/#AboutSection">About</Link>
          </NavItem>
          <NavItem>
            <Link to="/#FAQSection">FAQ</Link>
          </NavItem>
          <NavItem>
            <Link to="/locations">Locations</Link>
          </NavItem>
          <NavItem>
            <Link to="/competitors">Competitors</Link>
          </NavItem>
        </NavList>
      </Nav>
    )
  }
}

export default Header
