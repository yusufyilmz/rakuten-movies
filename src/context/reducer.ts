import { ActionTypes, Action } from "./actions";
import { MovieCategorize, MovieDetail } from "./types";

export type State = {
  id: string;
  movies: Array<MovieCategorize>;
  isLoading: boolean;
  error: string;
  movieDetails?: MovieDetail;
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionTypes.request:
      return {
        ...state,
        isLoading: true,
        movieDetails: undefined,
      };
    case ActionTypes.requestVideo:
      return {
        ...state,
        isLoading: true,
        movieDetails: { ...state.movieDetails, video: undefined },
      };
    case ActionTypes.successFetchAll:
      return {
        ...state,
        isLoading: false,
        movies: action.results.map((x: any) => x.data),
        movieDetails: undefined,
      };
    case ActionTypes.successFetch:
      return {
        ...state,
      };
    case ActionTypes.successFetchDetail:
      return {
        ...state,
        isLoading: false,
        movieDetails: action.results.data,
      };
    case ActionTypes.successFetcHVideo:
      return {
        ...state,
        isLoading: false,
        movieDetails: {
          ...state.movieDetails,
          video: action.results.data,
        },
      };
    case ActionTypes.successAdd:
      return {
        ...state,
        isLoading: false,
        movies: [...state.movies, action.results],
        movieDetails: undefined,
      };
    case ActionTypes.failure:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        movieDetails: undefined,
      };
    default:
      return state;
  }
}

export default reducer;
