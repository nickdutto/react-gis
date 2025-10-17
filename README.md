[![GitHub Actions Workflow - Release Status](https://img.shields.io/github/actions/workflow/status/nickdutto/react-gis/release.yml?logo=github)](https://github.com/nickdutto/react-gis)
[![GitHub License](https://img.shields.io/github/license/nickdutto/react-gis)](https://github.com/nickdutto/react-gis/blob/main/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/%40react-gis%2Fopenlayers)](https://www.npmjs.com/package/@react-gis/openlayers)
[![GitHub Repo stars](https://img.shields.io/github/stars/nickdutto/react-gis)](https://github.com/nickdutto/react-gis)

# ReactGIS

React wrapper for OpenLayers.

[![Documentation](https://img.shields.io/badge/-Documentation-%23050505?style=for-the-badge&logo=readthedocs&logoColor=%2373e600)](https://reactgis.nickdutto.dev/docs)
[![Storybook](https://img.shields.io/badge/-Storybook-%23050505?style=for-the-badge&logo=storybook)](https://reactgis-storybook.nickdutto.dev)

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
