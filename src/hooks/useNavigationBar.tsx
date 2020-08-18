import React from "react";
import Navigation from "../components/Navigation";

export const useNavigationBar = (text?: string): [() => JSX.Element] => {
  const NavigationBar = () => {
    return <Navigation text={text !== undefined ? text : "Rakuten TV"} />;
  };

  return [NavigationBar];
};
