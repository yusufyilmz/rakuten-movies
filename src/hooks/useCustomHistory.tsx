import { useHistory } from "react-router-dom";

export const useCustomHistory = (uri: string): [() => void] => {
  const history = useHistory();

  const navigate = () => {
    history.push(uri);
  };

  return [navigate];
};
