import type { Options as OlRotateOptions } from "ol/control/Rotate";

import Rotate from "ol/control/Rotate";

import type { ControlOptions } from "./use-control";

import { useControl } from "./use-control";

export interface RotateControlProps extends ControlOptions<OlRotateOptions> {}

export const RotateControl = (props: RotateControlProps) => {
  useControl<Rotate, RotateControlProps>(Rotate, props);

  return null;
};
