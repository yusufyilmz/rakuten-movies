import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export const useBrowserEvents = (): void => {
  const [locationKeys, setLocationKeys] = useState([]);
  const history = useHistory();

  useEffect(() => {
    return history.listen((location: any) => {
      if (history.action === "PUSH") {
        setLocationKeys([location.key]);
      }

      if (history.action === "POP") {
        if (locationKeys[1] === location.key) {
          setLocationKeys(([_, ...keys]) => keys);
        } else {
          setLocationKeys((keys: any) => [location.key, ...keys]);

          if (history.location.pathname.includes("movieVideo")) {
            history.push("/movies");
          }
        }
      }
    });
  }, [history, locationKeys]);
};
