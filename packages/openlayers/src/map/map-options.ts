import type { View } from "ol";
import type { MapOptions as OlMapOptions } from "ol/Map";
import type { ViewOptions } from "ol/View";

export interface MapOptions extends Omit<OlMapOptions, "view"> {
  view?: View | ViewOptions;
}
