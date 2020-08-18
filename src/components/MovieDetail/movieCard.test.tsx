import React from "react";
import { render, screen } from "@testing-library/react";
import { MovieCard } from "./movieCard";
import { MovieDetail, Director, Actor, Genre } from "../../context/types";

test("renders Movie Card with params", () => {
  const movie = {
    title: "test",
    id: "1",
    images: {
      snapshot: "snapshot",
    },
    actors: [
      {
        id: "actor",
        name: "actor",
      } as Actor,
    ],
    directors: [
      {
        id: "director",
        name: "director",
      } as Director,
    ],
    genres: [
      {
        id: "genre",
        name: "genre",
      } as Genre,
    ],
  } as MovieDetail;

  render(<MovieCard movie={movie} />);
  const element = screen.getByText(/test/i);
  expect(element).toBeInTheDocument();

});
