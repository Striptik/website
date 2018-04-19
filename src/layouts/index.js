import React, { Component } from 'react';
import propTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import '../css/base.css';
import Background from '../components/Background';
import Header from '../components/Header';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default class Layout extends Component {
  static propTypes = {
    children: propTypes.func
  }

  render() {
    const { children, location } = this.props;
    // Add here a condition to find if this is the home or not ?

    console.log('location ->', location);
    return (
      <Root>
        <Helmet
          title="Kevin Loiseleur - Développeur"
          meta={[
              {
                name: 'description',
                content: 
                  'Site de présentation de Kévin Loiseleur, Développeur Javascript sur Paris. Foramtion Epitech - ECV Digital, fabrique actuellement des outils pour les humains chez Nestor.'
              },
              {
                name: 'keywords',
                content:
                  'Developer, javascript, fullstack, js, node.js, epitech, ecv, nestor, paris'
              }
              // Others meta balises
          ]}
        />
  
        <Background>
        <Header/>
          {children()}
        </Background>
      </Root>
    )
  }
}