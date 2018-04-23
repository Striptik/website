import React, { Component } from "react";
import PropTypes from 'prop-types'
import styled from "styled-components";
import Link from 'gatsby-link';

import { COLOR, FONT, DIM } from '../css/variables';

const NavLink = styled(Link) `
  width: 20%;
  color: ${COLOR.GREY};
  font-family: ${FONT.TITLE};
  text-decoration: none;
  border-bottom: 0.4rem solid transparent;
  transition: border-bottom 0.3s;

  ${prop => prop.selected ? ` border-color: ${COLOR.ORANGE};` : ''};
  ${prop => !prop.selected ? `
    &:hover {
      border-color: ${COLOR.ORANGE};
    }
  `: ''};
`;

export default ({ to, pathname, label }) => {
  const selected = pathname.indexOf(label.toLowerCase()) > -1;
  console.log(pathname, selected);
  return (
    <NavLink to={to} selected={selected}>
      {label}
    </NavLink>
  );
}