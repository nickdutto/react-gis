import type { Options as OlMousePositionOptions } from "ol/control/MousePosition";

import MousePosition from "ol/control/MousePosition";

import type { ControlOptions } from "./use-control";

import { useControl } from "./use-control";

export type MousePositionControlProps = ControlOptions<OlMousePositionOptions>;

export const MousePositionControl = (props: MousePositionControlProps) => {
  useControl<MousePosition, MousePositionControlProps>(MousePosition, props);

  return null;
};
