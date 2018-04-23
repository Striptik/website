import React, { Component } from "react";
import styled from "styled-components";
import Link from 'gatsby-link';

import Typist from 'react-typist';

import { COLOR, FONT, DIM } from '../css/variables';
import media from '../css/media';
import Content from '../components/Content';


class Index extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props)
    return (
     <Content>
          <Typist
            avgTypingSpeed={40}
            startDelay={2000}
            cursor={{
              show: true,
              blink: true,
              element: '|',
              hideWhenDone: false,
              hideWhenDoneDelay: 1000,
            }}
          >

            <h1>About Styled Components</h1>
            <Typist.Backspace count={23} delay={1200} />
            <p>Styled Components is cool</p>
          </Typist>
          </Content>

    );
  }
}

export default Index;
