import type { Options as OlScaleLineOptions } from "ol/control/ScaleLine";

import ScaleLine from "ol/control/ScaleLine";

import type { ControlOptions } from "./use-control";

import { useControl } from "./use-control";

export type ScaleLineControlProps = ControlOptions<OlScaleLineOptions>;

export const ScaleLineControl = (props: ScaleLineControlProps) => {
  useControl<ScaleLine, ScaleLineControlProps>(ScaleLine, props);

  return null;
};
