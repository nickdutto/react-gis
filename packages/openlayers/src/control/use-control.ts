import type OlControl from "ol/control/Control";
import type { RefObject } from "react";

import { useEffect, useRef } from "react";

import { useMap } from "../map";

export type ControlOptions<T> = ConstructorParameters<typeof OlControl>[0] & T;

type ControlConstructor<L extends OlControl, O extends ControlOptions<unknown>> = new (
  options: O,
) => L;

type UseControl = <C extends OlControl, O extends ControlOptions<unknown>>(
  ControlClass: ControlConstructor<C, O>,
  options: O,
) => RefObject<C>;

export const useControl: UseControl = (ControlClass, options) => {
  const map = useMap();

  const controlRef = useRef(new ControlClass(options));

  useEffect(() => {
    if (!map) return;

    const control = controlRef.current;
    map.addControl(control);

    return () => {
      map.removeControl(control);
    };
  }, [map]);

  return controlRef;
};
