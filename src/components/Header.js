import React, { Component } from "react";
import PropTypes from 'prop-types'
import styled from "styled-components";
import Link from 'gatsby-link';


import { animateBackground, animateShake } from '../css/animations';

const Name = styled.h1`
  z-index: 200;
  display: flex;
  flex-wrap: wrap;
  font-size: 1.8rem;
  text-transform: uppercase;
  font-weight: 700;
  align-items: center;
  transition: font-size 250ms ease-in-out, padding 150ms ease-in;
  background-color: #FFF;
  color: black;
  padding: 0.5rem 1rem;
  margin: 0;
  width: auto;
  border: 2px solid #fa1616;
  border-radius: 15px;
  user-select: text;
  .wf-active & {
    font-family: 'Montserrat', sans-serif;
  }
  @media only screen and (min-width: 375px) {
    font-size: 2.5rem;
  }
  @media only screen and (min-width: 768px) {
    font-size: 4.5rem;
    padding: 1rem 2rem;
  }
`

const Letter = styled.span`
  display: inline-block;
  position: relative;
  z-index: 3;
  &:hover {
    animation: ${animateShake} 1000ms ease-in-out;
  }
`

const First = styled.span`
  padding-right: 2vw;
  font-weight: 700;
  white-space: nowrap;
`

const Last = styled.span`
  font-weight: 400;
  white-space: nowrap;
`

const StyledLink = styled(Link) `
  color: inherit;
`

export default class Header extends Component {
  render() {
    return (
      <Name className="name">
          <StyledLink to="/">
            <First>
              {'Kevin'.split('').map((letter, index) =>
                <Letter key={`${letter}-${index}`}>
                  {letter}
                </Letter>
              )}
            </First>
            <Last>
              {'Loiseleur'.split('').map((letter, index) =>
                <Letter key={`${letter}-${index}`}>
                  {letter}
                </Letter>
              )}
            </Last>
          </StyledLink>
        </Name>

    )
  }
}
