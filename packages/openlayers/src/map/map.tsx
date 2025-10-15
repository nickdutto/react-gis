import type { ComponentProps } from "react";

import { useRef } from "react";

import type { MapOptions } from "./map-options";

import { MapProvider } from "./map-provider";

export type MapProps = ComponentProps<"div"> & {
  mapOptions?: MapOptions;
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
