import type { Options as WebGLTileLayerOptions } from "ol/layer/WebGLTile";

import OlWebGLTileLayer from "ol/layer/WebGLTile";

import type { LayerOptions } from "./use-layer";

import { useLayer } from "./use-layer";

export interface WebGLTileLayerProps extends LayerOptions<WebGLTileLayerOptions> {}

export const WebGLTileLayer = (props: WebGLTileLayerProps) => {
  useLayer<OlWebGLTileLayer, WebGLTileLayerProps>(OlWebGLTileLayer, props);

  return null;
};
