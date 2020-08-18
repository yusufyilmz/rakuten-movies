import React from "react";
import styled from "styled-components";
import { MovieCast } from "./movieCast";
import { MovieDescription } from "./movieDescription";
import { MovieCover } from "./movieCover";
import { MovieDetail } from "../../context/types";

const StyledMovieCard = styled.div`
  font: 14px/22px "Lato", Arial, sans-serif;
  color: #a9a8a3;
  padding: 40px 0;
  position: relative;
  width: 100%;
  margin: auto;
`;

const StyledMovieContainer = styled.div`
  margin: 0 auto;
  height: 100%;
  border-radius: 5px;
  position: relative;
  margin: 0 auto;
  width: 90%;
  border-radius: 5px;
  position: relative;
`;

const StyledMovieColumn = styled.div`
  float: left;
  margin-left: 5px;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  width: 100%;
`;

const StyledMovieDescription = styled.div`
  bottom: 0px;
  height: 200px;
  font-size: 16px;
  line-height: 26px;
  color: #b1b0ac;
  width: 100%;
`;

interface MovieCardProps {
  movie: MovieDetail;
}

export const MovieCard = ({ movie }: MovieCardProps): JSX.Element => {
  return (
    <StyledMovieCard>
      <StyledMovieContainer>
        <MovieCover id={movie.id} image={movie.images.snapshot} />
        <StyledMovieDescription>
          <StyledMovieColumn>
            <MovieDescription
              genres={movie.genres}
              artwork={movie.images.artwork}
              title={movie.title}
              originalTitle={movie.original_title}
              plot={movie.plot}
            />
          </StyledMovieColumn>
          <StyledMovieColumn>
            <MovieCast actors={movie.actors} directors={movie.directors} />
          </StyledMovieColumn>
        </StyledMovieDescription>
      </StyledMovieContainer>
    </StyledMovieCard>
  );
};
