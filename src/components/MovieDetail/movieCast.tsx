import React from "react";
import styled from "styled-components";
import { ListGroup } from "react-bootstrap";
import { ListBox } from "../ListBox";

const StyledActorImg = styled.img`
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
  flex-shrink: 0;
  width: 100%;
  vertical-align: middle;
  border-style: none;
  width: 180px;
  height: 220px;
`;

const StyledActor = styled(ListGroup)`
  padding: 0px;
  margin-right: 20px;
`;

interface CastItemProps {
  photo: string;
  name: string;
  director: boolean;
}

const CastItem = ({ photo, name, director }: CastItemProps) => {
  return (
    <StyledActor>
      <StyledActorImg src={photo} />
      <span>{name}</span>
      {director && (
        <span>
          <b> (Director) </b>
        </span>
      )}
    </StyledActor>
  );
};

interface MovieCastProps {
  actors: Array<Actor>;
  directors: Array<Director>;
}

export const MovieCast = ({
  actors,
  directors,
}: MovieCastProps): JSX.Element => {
  return (
    <ListBox width={180} name="Director and actors">
      {[...directors, ...actors].map((actor, i) => {
        return (
          <CastItem
            key={actor.id}
            photo={actor.photo}
            name={actor.name}
            director={i < directors.length}
          />
        );
      })}
    </ListBox>
  );
};
