import type { Options as OlZoomToExtentOptions } from "ol/control/ZoomToExtent";

import ZoomToExtent from "ol/control/ZoomToExtent";

import type { ControlOptions } from "./use-control";

import { useControl } from "./use-control";

export type ZoomToExtentControlProps = ControlOptions<OlZoomToExtentOptions>;

export const ZoomToExtentControl = (props: ZoomToExtentControlProps) => {
  useControl<ZoomToExtent, ZoomToExtentControlProps>(ZoomToExtent, props);

  return null;
};
