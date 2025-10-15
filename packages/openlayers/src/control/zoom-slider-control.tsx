import type { Options as OlZoomSliderOptions } from "ol/control/ZoomSlider";

import ZoomSlider from "ol/control/ZoomSlider";

import type { ControlOptions } from "./use-control";

import { useControl } from "./use-control";

export interface ZoomSliderControlProps extends ControlOptions<OlZoomSliderOptions> {}

export const ZoomSliderControl = (props: ZoomSliderControlProps) => {
  useControl<ZoomSlider, ZoomSliderControlProps>(ZoomSlider, props);

  return null;
};
