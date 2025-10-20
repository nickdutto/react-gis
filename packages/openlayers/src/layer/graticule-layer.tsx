import type { Options as GraticuleLayerOptions } from "ol/layer/Graticule";

import OlGraticuleLayer from "ol/layer/Graticule";

import type { LayerOptions } from "./use-layer";

import { useLayer } from "./use-layer";

export interface GraticuleLayerProps extends LayerOptions<GraticuleLayerOptions> {}

export const GraticuleLayer = (props: GraticuleLayerProps) => {
  useLayer<OlGraticuleLayer, GraticuleLayerProps>(OlGraticuleLayer, props);

  return null;
};
