import { useCallback } from "react";
import { useMovieDataDispatchContext } from "../context";
import { fetchDataError } from "../context/actions";

type OnDemandFetch = (
  url: string,
  requestFunction: () => any,
  successFunction: (a: any) => any,
  options: RequestInit
) => Promise<void>;

export enum FetchType {
  getAll,
  get,
  add,
}

export const useOnDemandFetch = (): [OnDemandFetch] => {
  const { dispatch } = useMovieDataDispatchContext();

  const onDemandFetch = useCallback(
    (
      url: string,
      requestFunction: () => any,
      successFunction: (a: any) => any,
      options: RequestInit
    ): Promise<void> => {
      const fetchData = async () => {
        try {
          dispatch(requestFunction());
          const apiUrl = `${process.env.REACT_RAKUTEN_API_URL}${url}?${process.env.REACT_RAKUTEN_API_PARAMS}`;
          const res = await fetch(apiUrl, { ...options });
          const json = await res.json();

          if (res.status !== 200) {
            dispatch(fetchDataError(json));
          } else {
            dispatch(successFunction(json));
          }

          return Promise.resolve(json);
        } catch (e) {
          dispatch(fetchDataError(e));
          return Promise.reject(e);
        }
      };

      return fetchData();
    },
    [dispatch]
  );

  return [onDemandFetch];
};
