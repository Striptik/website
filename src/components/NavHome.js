import React, { Component } from "react";
import PropTypes from 'prop-types'
import styled from "styled-components";
import Link from 'gatsby-link';

import { COLOR, FONT, DIM } from '../css/variables';
import media from '../css/media';
import { animateShake } from '../css/animations';

const Letter = styled.span`
  display: inline-block;
  position: relative;
  z-index: 300;
  &:hover {
    animation: ${animateShake} 1500ms ease-in-out;
  }
`;

const Separator = styled.span`
  font-weight: 1000;
  color: ${COLOR.ORANGE};
`;

const FirstName = styled.span`
  font-weight: 700;
  color: ${COLOR.GREY};
`;

const CompleteName = styled.span`
  font-weight: 700;
  color: ${COLOR.GREY};
  @media (${media.phone}) {
    display: none;
  }
`;

const LastName = styled.span`
  display: none;
  color: ${COLOR.GREY};
  @media (${media.phone}) {
    display: inline-block;
  }
`;

const StyledLink = styled(Link)`
  ${'' /* border-bottom: 0.4rem solid ${COLOR.ORANGE}; */}
`;

const sepOpen = '{';
const sepOr = '|';
const sepClose = '}';

export default () => (
  <Link to="/">
    <Separator>
      <Letter key='sep-{'>
        {sepOpen}
      </Letter>
    </Separator>
    <FirstName>
      <Letter key='letterK'>K</Letter>
    </FirstName>
    <Separator>
      <Letter key='sep-|'>
        {sepOr}
      </Letter>
    </Separator>
    <CompleteName>
      {'Loiseleur'.split('').map((letter, index) =>
        <Letter key={`${letter}-${index}`}>
          {letter}
        </Letter>
      )}
    </CompleteName>
    <LastName>
      {'L'.split('').map((letter, index) =>
        <Letter key={`${letter}-${index}`}>
          {letter}
        </Letter>
      )}
    </LastName>
    
    <Separator>
      <Letter key='sep-}'>
        {sepClose}
      </Letter>
    </Separator>
  </Link>
);
  
  
  
    
