import type { Meta, StoryObj } from "@storybook/react-vite";
import type { TypeWithDeepControls } from "storybook-addon-deep-controls";

import { HeatmapLayer, TileLayer } from "@react-gis/core/layer";
import { Map as CoreMap } from "@react-gis/core/map";
import KML from "ol/format/KML";
import { OSM } from "ol/source";
import VectorSource from "ol/source/Vector";

const meta = {
  title: "Layer/HeatmapLayer",
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
        center: [134, -10],
        zoom: 4,
      },
    },
  },
  render: (props) => {
    return (
      <CoreMap {...props} style={{ height: "100%", width: "100%" }}>
        <TileLayer name="osm" source={new OSM()} />

        <HeatmapLayer
          name="2012_Earthquakes_Mag5_heatmap"
          source={
            new VectorSource({
              url: "https://openlayers.org/en/latest/examples/data/kml/2012_Earthquakes_Mag5.kml",
              format: new KML({ extractStyles: false }),
            })
          }
        />
      </CoreMap>
    );
  },
};
