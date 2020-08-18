import React from "react";
import styled from "styled-components";
import { Genre } from "../../context/types";

const StyledDetailsTitle = styled.div`
  color: white;
  font-size: 30px;
  margin-bottom: 13px;
  position: relative;
`;

const StyledDetailsText = styled.div`
  top: 3px;
  border-radius: 5px;
  color: #544c21;
  font-size: 14px;
  padding: 0px 4px;
`;

const StyledMovieColumn = styled.div`
  float: left;
  margin-left: 5px;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  width: 100%;
`;

const StyledDescriptionDetail = styled.div`
  margin-left: 20px;
  flex-basis: 70%;
`;

const StyledMovieTag = styled.span`
  background: white;
  border-radius: 10px;
  padding: 3px 8px;
  font-size: 14px;
  margin-right: 4px;
  line-height: 35px;
  cursor: pointer;
  &:hover {
    background: #ddd;
  }
`;

interface MovieDescriptionProps {
  genres: Array<Genre>;
  artwork: string;
  title: string;
  originalTitle: string;
  plot: string;
}

const StyledMovieDescriptionCover = styled.img`
  z-index: 2;
  flex-basis: 30%;
  display: flex;
  justify-content: center;
  height: 400px;
`;

export const MovieDescription = ({
  genres,
  artwork,
  title,
  originalTitle,
  plot,
}: MovieDescriptionProps): JSX.Element => {
  return (
    <>
      <StyledMovieDescriptionCover src={artwork} />
      <StyledDescriptionDetail>
        <StyledDetailsTitle>{title}</StyledDetailsTitle>
        <StyledDetailsText>({originalTitle})</StyledDetailsText>
        <p>{plot}</p>
        <StyledMovieColumn>
          {genres.map((genre) => (
            <StyledMovieTag key={genre.id}>{genre.name}</StyledMovieTag>
          ))}
        </StyledMovieColumn>
      </StyledDescriptionDetail>
    </>
  );
};
