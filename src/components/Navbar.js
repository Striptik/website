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
  /*height:2.5rem;*/

  &:first-child{
    width:60%;
    text-align:left;
    font-size: 3rem;

    @media (${media.tablet}) {
      font-size: 2rem;
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
          to="/parcours/"
          pathname={pathname}
          hash={hash}
          label={'Parcours'}
        />
      </NavItem>
      {/* Projets */}
      <NavItem>
        <Item 
          to="/projets/"
          pathname={pathname}
          hash={hash}
          label={'Projets'}
        />
      </NavItem>
      {/* Autres */}
      <NavItem>
        <Item 
          to="/divers/"
          pathname={pathname}
          hash={hash}
          label={'Divers'}
        />
      </NavItem>
      {/* Contact */}
      <NavItem>
        <Item 
          to="/contact/"
          pathname={pathname}
          hash={hash}
          label={'Contact'}
        />
      </NavItem>

      {/* <NavItem><Item to="">Lien4</Item></NavItem>
      <NavItem><Item to="">Lien5</Item></NavItem>
      <NavItem><Item to="">Lien6</Item></NavItem> */}
      
    </NavList>
  </Nav>
);
}



