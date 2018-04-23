import React, { Component } from "react";
import PropTypes from 'prop-types'
import styled from "styled-components";
import Link from 'gatsby-link';

import { FONT, COLOR, DIM } from '../css/variables';
import media from '../css/media';

import NavHome from './NavHome';
import Item from './NavItems';

const Nav = styled.nav`
  max-width: ${DIM.MAXWIDTH};
  margin: auto;
  padding: 2rem 0;
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between; 
`;

const NavItem = styled.li`
  width: 20%;
  text-align: right;
  padding-left: 2rem;
  font-size: 2rem;
  /*height:2.5rem;*/

  &:first-child{
    width:60%;
    text-align:left;
    font-size: 4rem;

    @media (${media.tablet}) {
      font-size: 3rem;
    } 
  }
`;

export default ({ pathname, hash }) => {

  return (
  <Nav role='navigation'>
    <NavList>
      {/* HOME */}
      <NavItem>
        <NavHome/>
      </NavItem>
     
     {/* 
        About 
        A propose de moi petit résumé
        Formation
        Expérience Pro
        Compétence
     */}
      <NavItem>
        <Item 
          to="/formation/"
          pathname={pathname}
          hash={hash}
          label={'Formation'}
        />
      </NavItem>
      {/* Projets */}
      <NavItem>
        <Item 
          to="/exp/"
          pathname={pathname}
          hash={hash}
          label={'Expériences'}
        />
      </NavItem>
      {/* Contact */}
      <NavItem>
        <Item 
          to="/contact/"
          pathname={pathname}
          hash={hash}
          label={'Me Contacter'}
        />
      </NavItem>

      {/* <NavItem><Item to="">Lien4</Item></NavItem>
      <NavItem><Item to="">Lien5</Item></NavItem>
      <NavItem><Item to="">Lien6</Item></NavItem> */}
      
    </NavList>
  </Nav>
);
}



