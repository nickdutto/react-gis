import type { Meta, StoryObj } from "@storybook/react-vite";
import type { TypeWithDeepControls } from "storybook-addon-deep-controls";

import { OSM } from "ol/source";

import { TileLayer } from "@react-gis/openlayers/layer";
import { Map as CoreMap } from "@react-gis/openlayers/map";

const meta = {
  title: "Map",
  component: CoreMap,
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
  argTypes: {
    "mapOptions.layers": {
      table: {
        disable: true,
      },
    },
  },
} satisfies TypeWithDeepControls<Meta<typeof CoreMap>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    mapOptions: {
      view: {
        center: [134, -28],
        zoom: 5,
      },
    },
  },
  render: (props) => {
    return (
      <CoreMap {...props} style={{ height: "100%", width: "100%" }}>
        <TileLayer name="osm" source={new OSM()} />
      </CoreMap>
    );
  },
};
