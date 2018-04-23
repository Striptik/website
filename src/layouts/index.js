import React, { Component } from 'react';
import propTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

// Base CSS
import '../css/base.css';
import { FONT, COLOR } from '../css/variables';

// CSS Particles JS
import particlesConfig from '../css/particlesJS/particles-config.json';
import '../css/particlesJS/particle-styles.css';


import Header from '../components/Header';
import Footer from '../components/Footer';

const Root = styled.div`
  position: relative;
  background-size: 250% 250%;
  user-select: none;
`;

export default class Layout extends Component {
  static propTypes = {
    children: propTypes.func
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.Particles = require('../css/particlesJS/particles')
    this.Particles(`background-particles`, particlesConfig)
  }

  componentWillUnmount() {
    if (this.Particles) {
      this.Particles.destroy()
    }
  }

  render() {
    const { children, location } = this.props;
    const { pathname, hash } = location
    // Add here a condition to find if this is the home or not ?
    return (
      <Root id='background-particles' {...this.props}>
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content="Kévin Loiseleur, Développeur Javascript sur Paris. Foramtion Epitech - ECV Digital, fabrique actuellement des outils pour les humains chez Nestor."/>
          <meta name="keywords" content="developer, développeur, javascript, fullstack, js, node.js, epitech, ecv, nestor, paris"/>
          <title>Kevin Loiseleur - Développeur JS</title>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway:700|Roboto|Roboto+Slab:700"/>

           <html lang="fr" dir="ltr" />
        </Helmet>
        
       
        <Header
          pathname={pathname}
        />
          {children()}
        <Footer />
      </Root>
    )
  }
}