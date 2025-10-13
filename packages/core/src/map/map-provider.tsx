import type { MapOptions } from "ol/Map";
import type { ViewOptions } from "ol/View";
import type { ReactNode } from "react";

import { Map as OlMap } from "ol";
import { defaults as defaultControls } from "ol/control/defaults";
import { fromLonLat } from "ol/proj";
import View from "ol/View";
import { useEffect, useState } from "react";

import { MapContext } from "./map-context";

type MapProviderProps = {
  children: ReactNode;
  mapRef: React.RefObject<HTMLDivElement | null>;
  mapOptions?: Omit<MapOptions, "view"> & {
    view?: View | ViewOptions;
  };
};

export const MapProvider = ({ children, mapRef, mapOptions }: MapProviderProps) => {
  const [map, setMap] = useState<OlMap>();

  useEffect(() => {
    if (!mapRef.current) return;

    const mapProps = {
      target: mapRef.current,
      controls: defaultControls(),
      ...mapOptions,
      view:
        mapOptions?.view instanceof View
          ? mapOptions?.view
          : new View({
              zoom: 0,
              ...mapOptions?.view,
              center: fromLonLat(
                mapOptions?.view?.center ?? [0, 0],
                mapOptions?.view?.projection ?? "EPSG:3857",
              ),
            }),
    };

    const olMap = new OlMap(mapProps);
    setMap(olMap);

    return () => {
      olMap.setTarget(undefined);
      setMap(undefined);
    };
  }, [mapRef, mapOptions]);

  return <MapContext.Provider value={map}>{children}</MapContext.Provider>;
};
