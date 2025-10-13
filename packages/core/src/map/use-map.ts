import { useContext } from "react";

import { MapContext } from "./map-context";

export const useMap = () => {
  const map = useContext(MapContext);

  return map;
};
