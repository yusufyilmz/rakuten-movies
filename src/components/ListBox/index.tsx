import React, { useRef } from "react";
import styled from "styled-components";
import Next from "../../logos/next.svg";
import Previous from "../../logos/previous.svg";
import { useScrollableButtons } from "../../hooks/useScrollableButtons";

const StyledListBoxGroup = styled.ul`
  display: flex;
  overflow: hidden;
  scroll-behavior: smooth;
  flex-direction: row;
  padding: 0;
`;

const StyledArrowImage = styled.img`
  width: 50px;
  height: 50px;
  &.active {
    border: none;
  }
`;

const StyledArrowButton = styled.button`
  border: none;
  background: linear-gradient(
    to left,
    rgba(23, 23, 23, 0.95) 0,
    transparent 100%
  );
  font-size: 42px;
  text-shadow: 0 0 3px rgba(0, 0, 0, 0.8);
  cursor: pointer;
  right: 0;
  padding-right: 5px;
  padding-left: 10px;
  position: absolute;
  top: 0;
  display: flex;
  height: 100%;
  align-items: center;
  z-index: 100;
`;

const StyledArrowButtonLeft = styled.button`
  border: none;
  background: linear-gradient(
    to right,
    rgba(23, 23, 23, 0.95) 0,
    transparent 100%
  );
  font-size: 42px;
  text-shadow: 0 0 3px rgba(0, 0, 0, 0.8);
  cursor: pointer;
  left: 0;
  padding-left: 5px;
  padding-right: 10px;
  position: absolute;
  top: 0;
  display: flex;
  height: 100%;
  align-items: center;
  z-index: 100;
`;

const StyledSectionDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  z-index: 100;
  position: relative;
  padding: 0 15px 25px;
  width: 100%;
`;

const StyledSectionTitle = styled.h2`
  display: flex;
  margin-right: 5px;
  margin-bottom: 7px;
  margin-left: 5px;
  color: #fff;
  font-size: 20px;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.8);
  align-items: flex-end;
  justify-content: space-between;
  margin-left: 50px;
`;

const StyledSectionBody = styled.div`
  display: flex;
  flex-direction: column;
`;

interface ListBoxProps {
  name: string;
}

export const ListBox = ({
  name,
  children,
}: PropsWithChildren<ListBoxProps>): JSX.Element => {
  const inputEl = useRef(null);
  const [nextButton, backButton, handleButtons] = useScrollableButtons(inputEl);

  return (
    <StyledSectionDiv>
      {name && <StyledSectionTitle>{name}</StyledSectionTitle>}
      <StyledSectionBody>
        {backButton && (
          <StyledArrowButtonLeft>
            <StyledArrowImage
              onClick={() => handleButtons(false)}
              src={Previous}
              alt=""
            />
          </StyledArrowButtonLeft>
        )}
        <StyledListBoxGroup ref={inputEl}>{children}</StyledListBoxGroup>
        {nextButton && (
          <StyledArrowButton>
            <StyledArrowImage
              onClick={() => handleButtons(true)}
              src={Next}
              alt=""
            />
          </StyledArrowButton>
        )}
      </StyledSectionBody>
    </StyledSectionDiv>
  );
};
