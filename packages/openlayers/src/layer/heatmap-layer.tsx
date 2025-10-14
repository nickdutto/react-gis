import type { Options as HeatmapLayerOptions } from "ol/layer/Heatmap";

import OlHeatmapLayer from "ol/layer/Heatmap";

import type { LayerOptions } from "./use-layer";

import { useLayer } from "./use-layer";

export type HeatmapLayerProps = LayerOptions<HeatmapLayerOptions>;

export const HeatmapLayer = (props: HeatmapLayerProps) => {
  useLayer<OlHeatmapLayer, HeatmapLayerProps>(OlHeatmapLayer, props);

  return null;
};
