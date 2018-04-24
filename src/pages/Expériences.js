import React, { Component } from "react";
import styled from "styled-components";
import Link from 'gatsby-link';

import { COLOR, FONT, DIM } from '../css/variables';
import media from '../css/media';
import Content, {
  PresSectionWrapper,
  H1Title,
  H2Title,
  H3Title,
  Image,
  P,
  FigureWrapper,
  Figure,
  NavLink,
} from '../components/Content';

import imgNestor from '../images/nestor.png';
import imgMilliweb from '../images/milliweb-1.png';
import imgUsineDoc from '../images/usineDoc.png';
import imgExam from '../images/exam.png';
import imgPres from '../images/Pres1.png';
import imgEducatec from '../images/educatec.png';

const PP = styled(P) `
  font-size: 2rem;
  text-align: justify;
  padding: 3rem;
`;

const H1 = styled(H1Title) `
  font-size: 4rem;
  color: ${COLOR.ORANGE};
`;

const H2 = styled(H2Title) `
  padding: 3rem 0;
  font-size: 3rem;
  text-align: left;
  color: ${COLOR.BLUE};
`;

const H3 = styled(H3Title) `
  text-align: left;
  font-size: 2rem;
`;

const IMGLOGO = styled(Image)`
  width: 8rem;
  height: 8rem;
  padding: 0;
  margin: 0;
`

const LogoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

class Projets extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Content>
        <PresSectionWrapper>
          <H1>
            {'{'}Expériences Professionnelles{'}'}
          </H1>
        
          <LogoWrapper>
            <H2>
              Milliweb 
            </H2>
            <IMGLOGO src={imgMilliweb} alt='Logo Milliweb'/>
          </LogoWrapper>
        
        
          <PP>
            Mes deux premières expériences dans le domaine du web se sont déroulées chez Milliweb. Le premier stage à eu lieu en fin de première année d'EPITECH, pendant 4 mois.
            Le second d'une durée de 6 mois à mi-temps (2j/semaine), en 3ème année. <br /><br />

            Milliweb est une startup éditrice de logiciels et d'outils de diffusion collaboratifs pour l'éducation et la formation.<br />
          </PP>
          <br />
          <H3>1er Stage</H3>
          <PP>
            Lors de mon premier stage, j'ai été sensibilisé à toutes les phases de conception d'une fonctionnalité,
            de la réflexion à la mise en production.<br /><br />

            Mes premières missions furent de corriger certains bugs sur les différents sites existants
            (<NavLink target='_blank' href='http://usinedoc.numericlasse.fr' alt='Usinedoc'>Usinedoc</NavLink>,
            &nbsp;<NavLink target='_blank' href='https://milliweb.fr/' alt='Milliweb'>Milliweb</NavLink>) 
            et améliorer graphiquement certaines pages.<br /><br />

            Ma plue value s'est rapidement fait sentir côté Back. J'ai alors développé entièrement l'outil permettant aux professeurs de créer des examens.
          </PP>

              <FigureWrapper>
                <Figure>
                  <Image src={imgUsineDoc} alt="Expérince Pro Usine Doc"/>
                  <figcaption>Usine Doc</figcaption>
                </Figure>
                <Figure>
                  <Image src={imgExam} alt="Expérince Pro Module Examen"/>
                  <figcaption>Module Examen</figcaption>
                </Figure>
              </FigureWrapper>

          <PP>
            Ce premier stage dans le web m'a beaucoup appris: <br /><br />
            &nbsp;- Langages Front et Back du Web (HTML, CSS, JS, PHP)<br />
            &nbsp;- Découverte des bases de donnée SQL<br />
            &nbsp;- Premier Framework MVC (Zend2)<br />
            &nbsp;- Process de développement de A à Z<br />
            &nbsp;- Rendu immédiat et finalité palpable<br />
            &nbsp;- Ambiance Startup<br /><br />
          </PP>
          <br /><br />


            <H3>2ème Stage</H3>
          <PP>
            La deuxième partie de mon expérience chez Milliweb m'a grandement conforté dans mon souhait de réorientation. <br /><br />

            Mon objectif fut d'intégrer un outil de visualisation open-source (<NavLink target='_blank' href='http://strut.io/editor/index.html' alt='Strut'>Strut.io</NavLink>) 
            dans l'Usine Documentaire, pour mettre à disposition un outil de présentation. Cet outil est aujourd'hui utilisé par les professeurs pour diffuser leurs présentations en live.<br /><br />

            A l'issue de ce stage, j'ai participé au salon Educatice-Educatec. Nous exposions notre solution sur le stand d'Orange, client pour lequel nous travaillions en marque blanche.

          </PP>

              <FigureWrapper>
                <Figure>
                  <Image src={imgEducatec} alt="Expérince Pro Salon Educatec"/>
                  <figcaption>Stand Orange, Salon Educatice Educatec</figcaption>
                </Figure>
                <Figure>
                  <Image src={imgPres} alt="Expérince Pro création d'un examen"/>
                  <figcaption>Création d'un Examen</figcaption>
                </Figure>
              </FigureWrapper>

          <PP>
            Les compétences que j'ai pu acquérir durant ce stage: <br /><br />
            &nbsp;- Découverte du Javascript côté serveur (Node.JS)<br />
            &nbsp;- Approfondissement du PHP <br />
            &nbsp;- Travail pro & perso simultanément<br />
            &nbsp;- Présentation live devant le client<br />
          </PP>

          <br />
          <hr />
          <br />
          <br />
          <LogoWrapper>
            <H2>
              Nestor 
            </H2>
            <IMGLOGO src={imgNestor} alt='Logo Nestor'/>
          </LogoWrapper>

        

        </PresSectionWrapper>
      </Content>
    );
  }
};

export default Projets;