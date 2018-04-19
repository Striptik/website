import React, { Component } from "react";
import styled from "styled-components";
import Link from 'gatsby-link';

import Typist from 'react-typist';

//import NavigationButton from './NavigationButton'

const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin: 0 auto 12px auto;
  &:last-child {
    margin-bottom: 0;
  }
`;

const Avatar = styled.img`
  flex: 0 0 96px;
  width: 96px;
  height: 96px;
  margin: 0;
  border-radius: 30px;
`;

const Description = styled.div`
  flex: 1;
  margin-left: 18px;
  padding: 12px;
`;

const Username = styled.h2`
  margin: 0 0 12px 0;
  padding: 0;
`;

const Excerpt = styled.p`
  margin: 0;
`;

const User = props => (
  <UserWrapper>
    <Avatar src={props.avatar} alt="" />
    <Description>
      <Username>{props.username}</Username>
      <Excerpt>{props.excerpt}</Excerpt>
    </Description>
  </UserWrapper>
);







const StyledLink = styled(Link) `
  color: inherit;
`

const BackContainer = styled.div`
  position: fixed;
  z-index: 2;
  top: 4px;
  left: 0;
`

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showBackButton: false
    }
  }

  // componentDidMount() {
  //   this.setState({
  //     showBackButton: document.referrer.match('dustinschau')
  //   })
  //   this.Particles = require('../css/particles')
  //   this.Particles(`blog-header`, particlesConfig)
  //   console.log(this.Particles);

  // }

  // componentWillUnmount() {
  //   if (this.Particles) {
  //     this.Particles.destroy()
  //   }
  // }

  render() {
    const { showBackButton } = this.state
    return (

  <Container>
        
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
    <User
      username="Jane Doe"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
      excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
    <User
      username="Bob Smith"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
      excerpt="I'm Bob smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
      <User
      username="Jane Doe"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
      excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
    <User
      username="Bob Smith"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
      excerpt="I'm Bob smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
      <User
      username="Jane Doe"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
      excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
    <User
      username="Bob Smith"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
      excerpt="I'm Bob smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
      <User
      username="Jane Doe"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
      excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
    <User
      username="Bob Smith"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
      excerpt="I'm Bob smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
  </Container>

    );
  }
}

export default Header
