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
              je suis un réel <b>passionné</b> et <b>enthousiaste</b>, en <b>perpetuelle formation</b> et quête de <b>nouveaux challenges</b>.<br/><br/>
              Ma mission est de <b>construire des outils pour les humains</b>, avec préférence en <b>Javascript</b>. <br/><br/>
              Je suis également <b>musicien</b>, <b>grimpeur</b>, <b>passioné de musique électronique</b>, <b>séries</b>.<br/><br/>
              Pour me connaître davantage, je vous invite à découvrir  <NavLink to='/formation/'>ma formation</NavLink> et <NavLink to='/expériences/'>mes expériences professionnelles</NavLink>.
            </PresP>

          </PresTextWrapper>
        </PresSectionWrapper>
  
    </Content>

    );
  }
}

export default Index;
