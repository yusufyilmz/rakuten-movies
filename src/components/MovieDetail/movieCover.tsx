import React from "react";
import styled from "styled-components";
import { useCustomHistory } from "../../hooks/useCustomHistory";
import Play from "../../logos/play.svg";

const StyledMovieCover = styled.div`
    height: 600px;  
    margin:0;
    position: relative;
    overflow: hidden;
    z-index:1;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    &:before {
        content:'';
        width:100%; 
        height:100%;
        position:absolute;
        overflow: hidden;
        top:0; 
        left:0;
        background-image: url("${(props) => props.image}");
        height: 100%;
        background-repeat: no-repeat;
        background-size: cover;
}`;

const StyledMovieTrailer = styled.div`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.4);
`;

const StyledMovieTrailerPlayIcon = styled.img`
  width: 30%;
  z-index: 1000;
`;

interface MovieCoverProps {
  id: string;
  image: string;
}

export const MovieCover = ({ id, image }: MovieCoverProps): JSX.Element => {
  const [navigate] = useCustomHistory(`/movieVideo/${id}`);

  return (
    <StyledMovieCover image={image}>
      <StyledMovieTrailer>
        <StyledMovieTrailerPlayIcon
          src={Play}
          onClick={() => {
            navigate();
          }}
        />
      </StyledMovieTrailer>
    </StyledMovieCover>
  );
};
