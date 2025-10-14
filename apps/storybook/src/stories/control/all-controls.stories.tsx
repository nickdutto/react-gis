import type { StoryObj } from "@storybook/react-vite";

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
} from "@react-gis/core/control";
import { TileLayer } from "@react-gis/core/layer";
import { Map as CoreMap } from "@react-gis/core/map";
import OlTileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";

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
        style={{ height: "100%", width: "100%" }}
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
