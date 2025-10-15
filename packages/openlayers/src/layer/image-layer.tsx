import type { Options as BaseImageOptions } from "ol/layer/BaseImage";
import type ImageSource from "ol/source/Image";

import OlImageLayer from "ol/layer/Image";

import type { LayerOptions } from "./use-layer";

import { useLayer } from "./use-layer";

export interface ImageLayerProps extends LayerOptions<BaseImageOptions<ImageSource>> {}

export const ImageLayer = (props: ImageLayerProps) => {
  useLayer<OlImageLayer<ImageSource>, ImageLayerProps>(OlImageLayer, props);

  return null;
};
