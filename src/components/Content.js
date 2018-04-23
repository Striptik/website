import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';


import { COLOR, FONT, DIM } from '../css/variables';
import media from '../css/media';

//import NavigationButton from './NavigationButton'

const Main = styled.main`
  font-family: ${FONT.SECOND};
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

const Section = styled.section`
  color: ${COLOR.ORANGE};
  background-color: white;
  margin-bottom: 3rem;
  min-height: ${DIM.MINHIGHTMAIN};
  width: 100%;
  padding: 2rem;
  
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

const Content = ({ children }) => (
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