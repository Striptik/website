import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';
import Link from 'gatsby-link';


import { COLOR, FONT, DIM } from '../css/variables';
import media from '../css/media';

//import NavigationButton from './NavigationButton'

export const Main = styled.main`
  font-family: ${FONT.DEFAULT};
  position: relative;
  z-index: 200;
  margin: ${DIM.GLOBAL_MARGIN};
  max-width: ${DIM.MAXWIDTH};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (${media.tablet}) {
    margin: 17rem 4rem 5em 4rem;
  }

  @media (${media.phone}) {
    margin: 13rem 3rem 4rem 3rem;
  }
`;

export const Section = styled.section`
  color: ${COLOR.GREY};
  background-color: white;
  margin-bottom: 3rem;
  min-height: ${DIM.MINHIGHTMAIN};
  width: 100%;
  padding: 2rem;
  display:flex;
  
  @media (${media.desktop}) {
    min-height: 65rem;
  }

   @media (${media.tablet}) {
    min-height: 64rem;
  }

  @media (${media.phone}) {
    min-height: 44rem;
  }

  @media ${media.iphoneX} {
    min-height: 50rem;
  }

   @media ${media.iphone678} {
    min-height: 36rem;
  }
`;

export const SectionWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const PresSectionWrapper = styled(SectionWrapper)`
  justify-content: left;
  padding: 1.5rem;
  position: relative;
  display: block;
  text-align: center;

  @media (${media.tablet}) { 
    text-align: center;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  width: 25rem;
  height: 25rem;
  margin: 2rem;
  
  @media (${media.tablet}) {
   
    width: 20rem;
    height: 20rem;
  }

  @media (${media.phone}) {
    width: 17rem;
    height: 17rem;
  }
`;

export const ImageProfile = styled.img`
  border-radius: 50%;
  width: 25rem;
  height: 25rem;
  
  @media (${media.tablet}) {
   
    width: 20rem;
    height: 20rem;
  }

  @media (${media.phone}) {
    width: 17rem;
    height: 17rem;
  }
`;

export const Figure = styled.figure`
  font-style: italic;
  font-family: ${FONT.SECOND};
  font-size: 1.5rem;
`;

export const FigureWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const H1Title = styled.h1`
  color: ${ props => props.primary ? COLOR.BLUE : props.secondary ? COLOR.ORANGE : COLOR.GREY};
  padding: 4rem 0;

  font-family: ${FONT.DEFAULT};
  font-size: ${ props => props.size ? props.size+'rem': '10rem' };
  @media (${media.tablet}) {
    font-size: ${ props => props.size ? (props.size / 1.4)+'rem': '7rem' };
    padding: 1.6rem 0;
  }
  @media (${media.phone}) {
    font-size: ${ props => props.size ? (props.size / 1.7)+'rem': '4rem' };
    padding: 1.4rem 0;
  }
`;

export const H2Title = styled.h2`
  color: ${ props => props.primary ? COLOR.BLUE : props.secondary ? COLOR.ORANGE : COLOR.GREY};
  padding: 1.4rem 0;
  
  font-family: ${FONT.DEFAULT};
  font-size: ${ props => props.size ? props.size+'rem': '8rem' };
  @media (${media.tablet}) {
    font-size: ${ props => props.size ? (props.size / 1.4)+'rem': '5rem' };
    padding: 1.4rem 0;
  }
  @media (${media.phone}) {
    font-size: ${ props => props.size ? (props.size / 1.7)+'rem': '3.5rem' };
    padding: 1.2rem 0;
  }
`;

export const H3Title = styled.h3`
  color: ${ props => props.primary ? COLOR.BLUE : props.secondary ? COLOR.ORANGE : COLOR.GREY};
  padding: 1.4rem 0;
  
  font-family: ${FONT.DEFAULT};
  font-size: ${ props => props.size ? props.size+'rem': '4rem' };
  @media (${media.tablet}) {
    font-size: ${ props => props.size ? (props.size / 1.4)+'rem': '4rem' };
    padding: 1.4rem 0;
  }
  @media (${media.phone}) {
    font-size: ${ props => props.size ? (props.size / 1.7)+'rem': '4rem' };
    padding: 1.2rem 0;
  }
`;

export const H4Title = styled.h4``

export const H5Title = styled.h5``

export const P = styled.p`
  font-family: ${FONT.SECOND};
  padding: 1.5rem 0;
  font-size: ${ props => props.size ? props.size+'rem': '2rem' };
  color: ${ props => props.primary ? COLOR.BLUE : props.secondary ? COLOR.ORANGE : COLOR.GREY};
  @media (${media.tablet}) {
    font-size: ${ props => props.size ? (props.size / 1.4)+'rem': '1.5rem' };
  }
  @media (${media.phone}) {
    font-size: ${ props => props.size ? (props.size / 1.7)+'rem': '1rem' };
  }
`;

export const NavLink = styled(Link) `
  color: ${COLOR.BLUE};
  font-family: ${FONT.SECOND};
  text-decoration: none;
  
  &:hover {
    color: ${COLOR.ORANGE};
  }
`;

const Content = ({children}) => (
  <Main role='main'>
    <Section>
      {children}
    </Section>
  </Main>
);

Content.propTypes = {
  children: PropTypes.func
}

export default Content;
