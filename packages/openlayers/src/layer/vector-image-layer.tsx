import type { Options as VectorImageLayerOptions } from "ol/layer/VectorImage";

import OlVectorImageLayer from "ol/layer/VectorImage";

import type { LayerOptions } from "./use-layer";

import { useLayer } from "./use-layer";

export interface VectorImageLayerProps extends LayerOptions<VectorImageLayerOptions> {}

export const VectorImageLayer = (props: VectorImageLayerProps) => {
  useLayer<OlVectorImageLayer, VectorImageLayerProps>(OlVectorImageLayer, props);

  return null;
};
