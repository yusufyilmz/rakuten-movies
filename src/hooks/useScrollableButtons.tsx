import { useState, useCallback, useEffect } from "react";

export const useScrollableButtons = (inputEl: any): any => {
  const [nextButton, setNextButton] = useState(true);
  const [backButton, setBackButton] = useState(false);

  useEffect(() => {
    const inRef: any = inputEl.current;

    if (!inRef) return;

    if (
      inRef.children[0].offsetWidth * inRef.children.length <
      inRef.offsetWidth
    ) {
      setNextButton(false);
    }
  }, [inputEl]);

  const handleClick = useCallback(
    (increase: boolean) => {
      const inRef: any = inputEl.current;

      if (!inRef) return;
      const width = inRef.children[0].offsetWidth;

      if (increase) {
        if (
          inRef.offsetWidth + inRef.scrollLeft - width >=
          inRef.children.length * width
        ) {
          setNextButton(false);
          return;
        }

        inRef.scrollLeft += width;
        setBackButton(true);
      } else {
        if (inRef.scrollLeft - width <= 0) {
          inRef.scrollLeft = 0;
          setBackButton(false);
          return;
        }

        inRef.scrollLeft -= width;

        setNextButton(true);
      }
    },
    [inputEl]
  );

  return [nextButton, backButton, handleClick];
};
