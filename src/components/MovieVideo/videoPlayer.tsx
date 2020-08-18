import React from "react";
import styled from "styled-components";

const Video = styled.video`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: 1000;
`;

const StyledButton = styled.button`
  width: 200px;
  font-size: 18px;
  padding: 10px;
  border: none;
  background: none;
  cursor: pointer;
  z-index: 1000;
`;

const StyledClose = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: 0.5;
  color: lightgray;
`;

interface VideoPlayerProps {
  url: string;
  onClose: () => any;
}

export const VideoPlayer = ({ url, onClose }: VideoPlayerProps) => {
  return (
    <>
      <Video autoPlay width="100%" height="100%" controls src={url}>
        <source type="video/mp4" />
      </Video>
      <StyledButton onClick={onClose}>
        <StyledClose aria-hidden="true">×</StyledClose>
      </StyledButton>
    </>
  );
};
