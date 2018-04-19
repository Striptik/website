import React, { Component } from "react";
import PropTypes from 'prop-types'
import styled from "styled-components";

import particlesConfig from '../css/particles-config.json';
import '../css/particle-styles.css';



const BackgroundParticles = styled.div`
  ${'' /* height: ${props => (props.isPost ? '15vh' : '100vh')}; */}
  background-color: #033859;
  color: white;
  position: relative;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: 250% 250%;
  font-weight: 400;
  ${'' /* transition: height 250ms ease-in-out; */}
  user-select: none;
  ${'' /* @media only screen and (min-width: 768px) {
    height: ${props => (props.isPost ? '30vh' : '100vh')};
  } */}
`;

export default class Background extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.Particles = require('../css/particles')
    this.Particles(`background-particles`, particlesConfig)
  }

  componentWillUnmount() {
    if (this.Particles) {
      this.Particles.destroy()
    }
  }

  render() {
    return (
      <BackgroundParticles id='background-particles' {...this.props} />
    )
  }
}
