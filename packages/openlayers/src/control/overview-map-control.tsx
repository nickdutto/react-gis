import type { Options as OlOverviewMapOptions } from "ol/control/OverviewMap";

import OverviewMap from "ol/control/OverviewMap";

import type { ControlOptions } from "./use-control";

import { useControl } from "./use-control";

export type OverviewMapControlProps = ControlOptions<OlOverviewMapOptions>;

export const OverviewMapControl = (props: OverviewMapControlProps) => {
  useControl<OverviewMap, OverviewMapControlProps>(OverviewMap, props);

  return null;
};
