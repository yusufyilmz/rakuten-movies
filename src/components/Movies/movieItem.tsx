import React from "react";
import styled from "styled-components";
import { ListGroup } from "react-bootstrap";
import { useCustomHistory } from "../../hooks/useCustomHistory";

const StyledMovieImg = styled.img`
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
  flex-shrink: 0;
  width: 100%;
  vertical-align: middle;
  border-style: none;
  width: 18em;
`;

const StyledMovie = styled(ListGroup)`
  padding: 0px;
  margin-right: 20px;
`;

interface MovieProps {
  id: string;
  artwork: string;
}

export const MovieItem = ({ id, artwork }: MovieProps): JSX.Element => {
  const [navigate] = useCustomHistory(`/movieDetail/${id}`);

  return (
    <StyledMovie onClick={() => navigate()}>
      <StyledMovieImg src={artwork} />
    </StyledMovie>
  );
};
