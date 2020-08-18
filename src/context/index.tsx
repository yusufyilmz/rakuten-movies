import React, {
  useContext,
  createContext,
  useReducer,
  Dispatch,
  PropsWithChildren,
} from "react";
import reducer, { State } from "./reducer";
import { Action } from "./actions";
import { MovieCategorize, MovieDetail } from "./types";

export type ContextDispatchInterface = { dispatch: Dispatch<Action> };

export type ContextStateInterface = {
  state: {
    id: string;
    movies: Array<MovieCategorize>;
    isLoading: boolean;
    error: string;
    movieDetails?: MovieDetail;
  };
};

const initialState = {
  id: '',
  isLoading: false,
  movies: new Array<MovieCategorize>(),
  movieDetails: undefined,
  error: "",
} as State;

export const MovieDataStateContext = createContext<ContextStateInterface>({
  state: initialState,
});

export const MovieDataDispatchContext = createContext<ContextDispatchInterface>(
  {
    dispatch: () => null,
  }
);

export const useMovieDataDispatchContext = (): ContextDispatchInterface => {
  const contextValue = useContext(MovieDataDispatchContext);

  return contextValue;
};

export const useMovieDataStateContext = (): ContextStateInterface => {
  const contextValue = useContext(MovieDataStateContext);

  return contextValue;
};

export const MovieDataProvider = ({
  children,
}: PropsWithChildren<unknown>): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MovieDataDispatchContext.Provider value={{ dispatch }}>
      <MovieDataStateContext.Provider value={{ state }}>
        {children}
      </MovieDataStateContext.Provider>
    </MovieDataDispatchContext.Provider>
  );
};
