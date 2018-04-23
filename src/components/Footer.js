import React, { Component } from "react";
import styled from "styled-components";
import { FaGithub, FaSpotify, FaTwitter, FaLinkedin, FaMedium } from 'react-icons/lib/fa';

import { FONT, COLOR, DIM } from '../css/variables';
import media from '../css/media';
import SocialLinks from "./SocialLinks";


const Footer = styled.footer`
  position: relative;
  display:flex;
  font-family: ${FONT.DEFAULT};
  background-color: ${COLOR.GREY};
  width: 100%;
  padding: 3rem;
  z-index: 1000;
  border-top: 0.2rem solid${COLOR.ORANGE};
  font-family: ${FONT.DEFAULT};
  font-size: 1.3rem;
  color: ${COLOR.ORANGE};
`;

const Container = styled.div`
  max-width: ${DIM.MAXWIDTH};
  margin: auto;
`;

const Copyright = styled.p`
  
   @media (${media.tablet}) {
    font-size: 1.3rem;
  }

  @media (${media.phone}) {
    font-size: 1rem;
  }
`;


export default () => (
  <Footer role="contentinfo">
    <Container>
      <SocialLinks localisation='footer'/>
      <Copyright>&copy; Copyright 2018 Kevin Loiseleur - Développé en React/Gatsby</Copyright>
    </Container>
  </Footer>
);