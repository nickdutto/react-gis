import type OlBaseLayer from "ol/layer/Base";
import type { RefObject } from "react";

import { useEffect, useRef } from "react";

import { useMap } from "../map";

export type LayerOptions<T> = T & {
  name: string;
};

type BaseLayerOptions<T> = ConstructorParameters<typeof OlBaseLayer>[0] & LayerOptions<T>;

type LayerConstructor<L extends OlBaseLayer, O extends BaseLayerOptions<unknown>> = new (
  options: O,
) => L;

type UseLayer = <L extends OlBaseLayer, O extends BaseLayerOptions<unknown>>(
  LayerClass: LayerConstructor<L, O>,
  options: O,
) => RefObject<L>;

export const useLayer: UseLayer = (LayerClass, options) => {
  const map = useMap();

  const layerRef = useRef(new LayerClass(options));

  useEffect(() => {
    if (!map) return;

    const layer = layerRef.current;
    map.addLayer(layer);

    return () => {
      map.removeLayer(layer);
    };
  }, [map]);

  useEffect(() => {
    const layer = layerRef.current;
    layer.setProperties(options);
  }, [options]);

  return layerRef;
};
