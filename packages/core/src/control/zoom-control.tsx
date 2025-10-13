import type { Options as OlZoomOptions } from "ol/control/Zoom";

import Zoom from "ol/control/Zoom";

import type { ControlOptions } from "./use-control";

import { useControl } from "./use-control";

export type ZoomControlProps = ControlOptions<OlZoomOptions>;

export const ZoomControl = (props: ZoomControlProps) => {
  useControl<Zoom, ZoomControlProps>(Zoom, props);

  return null;
};
