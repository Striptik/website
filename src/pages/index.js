import React, { Component } from "react";
import styled from "styled-components";
import Link from 'gatsby-link';

import Typist from 'react-typist';

import { COLOR, FONT, DIM } from '../css/variables';
import media from '../css/media';
import Content, { 
  Main, 
  Section, 
  H1Title, 
  H2Title, 
  H3Title, 
  H4Title, 
  H5Title,
  PresSectionWrapper,
  ImageWrapper,
  TextWrapper,
  ImageProfile,
  P,
  NavLink
} from '../components/Content';
import { DevSocial } from '../components/SocialLinks'

import ProfilPict from '../images/profil_kevin.jpg';

const PresTextWrapper = styled(TextWrapper)`
  width: 100%;
  justify-content: center;
  display: block;
  text-align:center;
  ${'' /* flex-direction: column; */}
  @media (${media.tablet}) {
  margin-top: 3rem;
   width: 100%;
  }
`;

const PresImageWrapper = styled(ImageWrapper)`
  justify-content: center;
  width: 30%;

`;

const PresH2Title = styled(H2Title)`
  margin-bottom: 3rem;
`;

const PresP = styled(P)`
  padding: 3rem;
`;


class Index extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
     <Content>

        <PresSectionWrapper> 

          <ImageWrapper>
            <ImageProfile src={ProfilPict}/>
          </ImageWrapper>
            
          <PresTextWrapper>
            <H1Title 
              primary
              size={5}
            >
              Kevin Loiseleur
            </H1Title>

            <PresH2Title
              secondary
              size={3}
            >
              Développeur Fullstack Javascript
            </PresH2Title>

            <DevSocial localisation='pres' />

            <PresP
              size={2.4}
            >
              Avec une expérience de plus de 5 ans dans le développement,<br/>
              je suis un réel passionné et enthousiaste, en perpetuelle formation et quête de nouveaux challenges.<br/><br/>
              Ma mission est de construire des outils pour les humains, si possible en Javascript. <br/><br/>
              Je suis également musicien, grimpeur, passioné de musique électronique, séries.<br/><br/>
              Pour me connaître davantage, je vous invite à découvrir  <NavLink to='/formation/'>ma formation</NavLink> et <NavLink to='/exp/'>mes expériences professionnelles</NavLink>.
              N'hésitez pas à <NavLink to='/contact/'>me contacter</NavLink> 
            </PresP>

          </PresTextWrapper>
        </PresSectionWrapper>
  
    </Content>

    );
  }
}

export default Index;
