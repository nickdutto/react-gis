import type { Map as OlMap } from "ol";

import { createContext } from "react";

export const MapContext = createContext<OlMap | undefined>(undefined);
