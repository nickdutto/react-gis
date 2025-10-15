import type { Options as AttributionControlOptions } from "ol/control/Attribution";

import Attribution from "ol/control/Attribution";

import type { ControlOptions } from "./use-control";

import { useControl } from "./use-control";

export interface AttributionControlProps extends ControlOptions<AttributionControlOptions> {}

export const AttributionControl = (props: AttributionControlProps) => {
  useControl<Attribution, AttributionControlProps>(Attribution, props);

  return null;
};
