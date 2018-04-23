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
} from '../components/Content';

import imgWolf from '../images/wolf3d-min.jpg';
import img42SH from '../images/42sh-min.png';
import imgSnake from '../images/snake.jpg';
import imgEpidroid from '../images/epidroid.png';
import imgBomberman from '../images/bomberman.jpg';
import imgChatbot from '../images/chatbot.png';
import imgWiki from '../images/wiki.png';
import imgMiniMarket from '../images/miniMarket.png';
import imgInsightLab from '../images/insightLab.png';

const PP = styled(P)`
  font-size: 2rem;
  text-align: justify;
  padding: 3rem;
`;

const H1 = styled(H1Title)`
  font-size: 4rem;
  color: ${COLOR.ORANGE};
`;

const H2 = styled(H2Title)`
  font-size: 3rem;
  text-align: left;
  color: ${COLOR.BLUE};
`;

const H3 = styled(H3Title)`
  text-align: left;
  font-size: 2rem;
`;

class Parcours extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <Content>
        <PresSectionWrapper>

          <H1>
            {'{'}FORMATION{'}'}
          </H1>
          <PP>
            Après avoir obtenu mon Baccalauréat série Scientifique, j'ai décidé de m'orienter vers une école de développement, EPITECH.
          </PP>
          <H2>
            EPITECH
          </H2>
          <PP>
            La pédagogie de cette école est très spécifique. Elle fonctionne par projet,
            et permet à l'étudiant d'apprendre à apprendre, devenir autonome et auto-didacte. <br/><br />
            Il n'y a ni professeurs, ni cours, mais seulement des assistants et quelques travaux dirigés.
            C'est donc une école difficile mais très formatrice, qui fait ses preuves depuis plusieurs annéees.
          </PP>
          <br />
          <hr />
          <br />
          <H3
            size={2}
          >
            1ère Année || Tous à l'eau
          </H3>
          
          <PP>
            - Apprentissage des bases du développement avec le langage C<br/>
            - Beaucoup de petits projets permettant de recoder des outils déjà existants<br/>
            - Obligation de suivre une norme pour le code<br />
            - Quelques projets plus importants comme le Wolfenstein ou le 42SH<br/>
            - Initiation à la Robotique <br />
            - Stage 4 mois
          </PP>

          <FigureWrapper>
            <Figure>
              <Image src={imgWolf} alt="Projet Epitech Wolf3D"/>
              <figcaption>Wolf 3D</figcaption>
            </Figure>
            <Figure>
              <Image src={img42SH} alt="Projet Epitech 42SH"/>
              <figcaption>42SH</figcaption>
            </Figure>
          </FigureWrapper>

          <PP>
            Cette première année est primordiale. Elle permet d'acquérir les bases de la programmation.<br /> 
            Elle m'a apporté de la structure, de l'autonomie, de la volonté et de l'acharnement.<br />
            Le stage est également très enrichissant, j'ai découvert le monde du web.
          </PP>


          <br />
          <hr />
          <br />

          <H3
            size={2}
          >
            2ème Année || C++ Dur
          </H3>
          
          <PP>
            - Apprentissage de la programmation orientée Objet (C++) <br/>
            - Travail en équipe<br/>
            - Spécialisation sur la data et l'algorithmie<br />
            - Approfondissement du langage C<br />
            - Projets plus importants et plus funs (Snake / Bomberman / IRC )<br/>
          </PP>

          <FigureWrapper>
            <Figure>
              <Image src={imgSnake} alt="Projet Epitech Snake"/>
              <figcaption>Snake</figcaption>
            </Figure>
            <Figure>
              <Image src={imgBomberman} alt="Projet Epitech Bomberman"/>
              <figcaption>Bomberman</figcaption>
            </Figure>
          </FigureWrapper>

          
          <PP>
            Cette deuxième année est davantage spécialisée, avec la découverte d'autres paradigmes
            et l'approfondissement du C.<br />
            Je me suis également trouvé une attirance vers la data.<br />
            L'ampleur des projets et le travail en équipe sont très formateurs.
          </PP>

          <br />
          <hr />
          <br />

          <H3
            size={2}
          >
            3ème Année || Code ?
          </H3>
          
          <PP>
            - Piscine Moon Shot - Entrepreunariat <br/>
            - Java (EpiDroid) / .Net (MyVLC) <br />
            - Gestion de projet (Agile) <br/>
            - Préparation du projet de fin d'étude<br />
          </PP>

          <FigureWrapper>
            <Figure>
              <Image src={imgEpidroid} alt="Projet Epitech EpiDroid"/>
              <figcaption>EpiDroid</figcaption>
            </Figure>
          </FigureWrapper>

          
          <PP>
            La troisième année est beaucoup moins technique que les deux précédentes.
            J'ai donc été contraint de sortir de mon environnement pour acquérir d'autres compétences.<br />
            Suite à cette année et à mon expérience pro, je décide de me réorienté dans le web en rentrant à l'ECV Digital.
          </PP>
          <br />
          <hr />
          <br />
          <br />
          <H2>
            ECV Digital
          </H2>
          <PP>
            L'ECV Digital est une école polyvalente, axée sur le Web.
            Les cours sont assurés par des intervenants professionnels et qualifiés.<br /><br/>
            Les profils présents dans le Master Développement Web sont davantages orientés Front/Design (intégrateurs),
            ce qui était pour moi un beau défi à relever.
            De plus, le rythme d'alternance 4/5 condense au maximum les cours, le travail à fournir sur le plan professionnel est conséquent.

          </PP>

          <br />
          <hr />
          <br />

         <H3
            size={2}
          >
            4ème Année || Bonjour Web
          </H3>
          
          <PP>
              Les différentes matières abordées :<br />
              - Back-end (PHP / Doctrine / POO / API) <br/>
              - Approfondissement du Front-end (Intégration / Responsive Design / JS) <br/>
              - Sensibilisation à la PAO (Photoshop / Sketch) <br/>
              - Autres compétences (Digital Marketing / UML / Devops / Drupal)<br /><br />

              Les deux projets les plus enrichissants de cette année ont été le Wiki et le chatbot MyCanal.<br /><br />
              Le Wiki nous a permis de travailler à 4 et mettre en applications différentes connaissances (Angular, Symfony).<br /><br />
              J'ai réalisé le chatbot dans le cadre de la compétition de fin d'année, suite à un brief de Canal+.
              Je suis parti from scratch, en NodeJS, avec l'API Messenger de Facebook.
          </PP>

          <FigureWrapper>
            <Figure>
              <Image src={imgWiki} alt="Projet Epitech Wiki"/>
              <figcaption>Wiki</figcaption>
            </Figure>
            <Figure>
              <Image src={imgChatbot} alt="Projet Epitech Chatbot MyCanal"/>
              <figcaption>ChatBot</figcaption>
            </Figure>
          </FigureWrapper>

          <br />
          <hr />
          <br />

          <H3
            size={2}
          >
            5ème Année || JS {'<'}3
          </H3>
          
          <PP>
            - Framework Front JS (React / Redux / Angular)<br />
            - Applications Hybrides JS (React Native / Ionic)<br />
            - Back-end JS (NodeJS / Express / Mongo)<br />
            - Projet Pro<br />
            - Certification OPQUAST (780) / Eco-Conception (85%)
            - Agilité et Scrum <br/>
            - Données liées <br /><br />

              Deux projets forts intéressants cette année ont été un miniMarket et InsightLab.<br /><br />
              Le premier est un mini site où l'on peut ajouter au panier et payer par différents moyens de paiement.
              Il y a donc l'API de Stripe intégrée, le tout développé en React<br /><br />
              Ensuite, Insight Lab est un projet d'application hybride qui a pour vocation de faciliter la gestion de sa page facebook
              en fournissant des données pertinentes et visuels. Cette application est réalisée en React Native.<br /><br />
          </PP>

          <FigureWrapper>
            <Figure>
              <Image src={imgMiniMarket} alt="Projet Epitech Mini Market"/>
              <figcaption>Mini Market</figcaption>
            </Figure>
            <Figure>
              <Image src={imgInsightLab} alt="Projet Epitech EpiDroid"/>
              <figcaption>Insight Lab</figcaption>
            </Figure>
          </FigureWrapper>

          
          <PP>
            Cette dernière année m'a permis de monter en compétences sur des technologies passionantes et très recherchées sur le marché du travail. 
          </PP>
          <br />
          <hr />
          <br />


      <H1>
      {'{'}EXPERIENCES PROFESSIONNELLES{'}'}
      </H1>
      <hr />
      <hr />
    
      </PresSectionWrapper>
      </Content>
    );
  }
};

export default Parcours;

        