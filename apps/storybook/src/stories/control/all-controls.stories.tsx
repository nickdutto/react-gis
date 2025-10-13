import type { StoryObj } from "@storybook/react-vite";

import OlTileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";

import {
  AttributionControl,
  FullScreenControl,
  MousePositionControl,
  OverviewMapControl,
  RotateControl,
  ScaleLineControl,
  ZoomControl,
  ZoomSliderControl,
  ZoomToExtentControl,
} from "@react-gis-openlayers/core/control";
import { TileLayer } from "@react-gis-openlayers/core/layer";
import { Map as CoreMap } from "@react-gis-openlayers/core/map";

const meta = {
  title: "Control/AllControls",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    deepControls: {
      enabled: true,
    },
    docs: {
      source: {
        type: "code",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <CoreMap
        mapOptions={{
          controls: [],
          view: { center: [134, -28], zoom: 4 },
        }}
      >
        <AttributionControl />
        <FullScreenControl />
        <MousePositionControl />
        <OverviewMapControl layers={[new OlTileLayer({ source: new OSM() })]} />
        <RotateControl autoHide={false} />
        <ScaleLineControl />
        <ZoomControl />
        <ZoomSliderControl />
        <ZoomToExtentControl />

        <TileLayer name="osm" source={new OSM()} />
      </CoreMap>
    );
  },
};
