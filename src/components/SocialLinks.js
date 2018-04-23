import React from "react";
import styled from "styled-components";
import { FaGithub, FaSpotify, FaTwitter, FaLinkedin, FaMedium } from 'react-icons/lib/fa';

import { FONT, COLOR, DIM } from '../css/variables';
import media from '../css/media';

const ListSocial = styled.ul`
  font-size: 3rem;
  display: flex;
  justify-content: center;

  @media (${media.tablet}) {
    font-size: 2.4rem;
  }

  @media (${media.phone}) {
    font-size: 2rem;
  }
`;

const SocialItem = styled.li`
  margin: 0 2rem;
  padding-bottom: 2rem;
`;

const SocialLink = styled.a`
  color: ${COLOR.ORANGE};

  &:hover {
    color: ${COLOR.BLUE};
  }
`;

export default ({ localisation }) => (
  <ListSocial>
    <SocialItem>
      <SocialLink
        localisation={localisation}
        target='_blank'
        href='https://github.com/Striptik'
      >
        <FaGithub />
      </SocialLink>
    </SocialItem>
    <SocialItem>
      <SocialLink
        localisation={localisation}
        target='_blank'
        href='https://fr.linkedin.com/in/kevin-loiseleur-30704398'
      >
        <FaLinkedin />
      </SocialLink>
    </SocialItem>
    <SocialItem>
      <SocialLink
        localisation={localisation}
        href='https://twitter.com/kloiseleur'
        target='_blank'
      >
        <FaTwitter />
      </SocialLink>
    </SocialItem>
    <SocialItem>
      <SocialLink
        localisation={localisation}
        target='_blank'
        href='https://medium.com/@kloiseleur'
      >
        <FaMedium />
      </SocialLink>
    </SocialItem>
    <SocialItem>
      <SocialLink
        localisation={localisation}
        href='https://open.spotify.com/user/tazzz4'
        target='_blank'
      >
        <FaSpotify />
      </SocialLink>
    </SocialItem>        
  </ListSocial>
);