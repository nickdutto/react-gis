import type { Options as OlFullScreenOptions } from "ol/control/FullScreen";

import FullScreen from "ol/control/FullScreen";

import type { ControlOptions } from "./use-control";

import { useControl } from "./use-control";

export interface FullScreenControlProps extends ControlOptions<OlFullScreenOptions> {}

export const FullScreenControl = (props: FullScreenControlProps) => {
  useControl<FullScreen, FullScreenControlProps>(FullScreen, props);

  return null;
};
