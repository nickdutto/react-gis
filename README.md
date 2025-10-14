# ReactGIS

React wrapper for OpenLayers.

- [Documentation](https://reactgis.nickdutto.dev/docs)
- [Storybook](https://reactgis-storybook.nickdutto.dev)

## Getting Started

### Installation

Install via your preferred package manager

```bash tab="npm"
npm i @react-gis/openlayers
```

```bash tab="pnpm"
pnpm add @react-gis/openlayers
```

```bash tab="yarn"
yarn add @react-gis/openlayers
```

### Basic Usage

Basic map with OpenStreetMap:

```tsx title="app.tsx"
import { View } from "ol";
import { OSM } from "ol/source";

import { TileLayer } from "@react-gis/openlayers/layer";
import { Map } from "@react-gis/openlayers/map";

import "ol/ol.css";

function App() {
  return (
    <Map
      mapOptions={{ view: new View({ center: [0, 0], zoom: 4 }) }}
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer name="osm" source={new OSM()} />
    </Map>
  );
}
```
