import React, { Component } from "react";
import styled from "styled-components";

import { FONT, COLOR } from '../css/variables';
import Navbar from './Navbar'

const Header = styled.header`
  font-family: ${FONT.TITLE};
  background-color: ${COLOR.WHITE};
  padding: 0 2rem;
  position: fixed;
  z-index: 1000;
  width: 100%;
  top: 0;
  left: 0;
  border-bottom: 0.2rem solid${COLOR.ORANGE} ;
`;

export default ({ pathname }) => (
  <Header role='banner'>
    <Navbar 
      pathname={pathname} 
    />
  </Header>
);