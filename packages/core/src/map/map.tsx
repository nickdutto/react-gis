import type { View } from "ol";
import type { MapOptions } from "ol/Map";
import type { ViewOptions } from "ol/View";
import type { ComponentProps } from "react";

import { useRef } from "react";

import { MapProvider } from "./map-provider";

export type MapProps = ComponentProps<"div"> & {
  mapOptions?: Omit<MapOptions, "view"> & {
    view?: View | ViewOptions;
  };
};

export const Map = ({ mapOptions, children, ...props }: MapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);

  return (
    <MapProvider mapRef={mapRef} mapOptions={mapOptions}>
      <div ref={mapRef} {...props} />
      {children}
    </MapProvider>
  );
};
