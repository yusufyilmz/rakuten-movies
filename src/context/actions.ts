export enum ActionTypes {
  request,
  requestVideo,
  successFetch,
  successFetchAll,
  successFetchDetail,
  successFetcHVideo,
  successAdd,
  failure,
}

export type Action =
  | { type: ActionTypes.request }
  | { type: ActionTypes.requestVideo }
  | { type: ActionTypes.successFetch }
  | { type: ActionTypes.successFetchAll; results: any }
  | { type: ActionTypes.successFetchDetail; results: any }
  | { type: ActionTypes.successFetcHVideo; results: any }
  | { type: ActionTypes.successAdd; results: any }
  | { type: ActionTypes.failure; error: string };

export function dataRequested(): Action {
  return {
    type: ActionTypes.request,
  };
}

export function videoRequested(): Action {
  return {
    type: ActionTypes.requestVideo,
  };
}

export function fetchMoviesSuccess(): Action {
  return {
    type: ActionTypes.successFetch,
  };
}

export function fetchAllMoviesSuccess(data: any): Action {
  return {
    type: ActionTypes.successFetchAll,
    results: data,
  };
}

export function fetchMovieDetailsSuccess(data: any): Action {
  return {
    type: ActionTypes.successFetchDetail,
    results: data,
  };
}

export function fetchMovieVideoSuccess(data: any): Action {
  return {
    type: ActionTypes.successFetcHVideo,
    results: data,
  };
}

export function addDataSuccess(data: any): Action {
  return {
    type: ActionTypes.successAdd,
    results: data,
  };
}

export function fetchDataError(error: string): Action {
  return {
    type: ActionTypes.failure,
    error,
  };
}
