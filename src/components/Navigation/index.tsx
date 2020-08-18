import React, { memo } from "react";
import { Navbar } from "react-bootstrap";
import styled from "styled-components";

const StyledNavBar = styled(Navbar)`
  margin-left: 50px;
  font-family: cursive;
  span {
    color: white !important;
    font-size: xx-large;
    border: 1px solid white;
    padding: 10px;
    border-radius: 16px;
  }
`;

const NavigationBar = ({ text }: any): JSX.Element => {
  return (
    <StyledNavBar>
      <Navbar.Brand>{text}</Navbar.Brand>
    </StyledNavBar>
  );
};

export default memo(NavigationBar);
