import type { Options as VectorTileLayerOptions } from "ol/layer/VectorTile";

import OlVectorTileLayer from "ol/layer/VectorTile";

import type { LayerOptions } from "./use-layer";

import { useLayer } from "./use-layer";

export interface VectorTileLayerProps extends LayerOptions<VectorTileLayerOptions> {}

export const VectorTileLayer = (props: VectorTileLayerProps) => {
  useLayer<OlVectorTileLayer, VectorTileLayerProps>(OlVectorTileLayer, props);

  return null;
};
