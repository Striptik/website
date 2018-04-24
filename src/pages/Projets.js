import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';
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
class Projets extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <Content>
          <H1>
      {'{'}Projets{'}'}
      </H1>
      </Content>
    );
  }
};

export default Projets;

        