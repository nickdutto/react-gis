import type { Options as VectorLayerOptions } from "ol/layer/Vector";

import OlVectorLayer from "ol/layer/Vector";

import type { LayerOptions } from "./use-layer";

import { useLayer } from "./use-layer";

export type VectorLayerProps = LayerOptions<VectorLayerOptions>;

export const VectorLayer = (props: VectorLayerProps) => {
  useLayer<OlVectorLayer, VectorLayerProps>(OlVectorLayer, props);

  return null;
};
