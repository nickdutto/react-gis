import type { Options as BaseTileLayerOptions } from "ol/layer/BaseTile";
import type TileSource from "ol/source/Tile";

import OlTileLayer from "ol/layer/Tile";

import type { LayerOptions } from "./use-layer";

import { useLayer } from "./use-layer";

export type TileLayerProps = LayerOptions<BaseTileLayerOptions<TileSource>>;

export const TileLayer = (props: TileLayerProps) => {
  useLayer<OlTileLayer, TileLayerProps>(OlTileLayer, props);

  return null;
};
