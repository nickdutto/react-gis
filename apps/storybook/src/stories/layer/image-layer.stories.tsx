import type { Meta, StoryObj } from "@storybook/react-vite";
import type { TypeWithDeepControls } from "storybook-addon-deep-controls";

import { ImageWMS, OSM } from "ol/source";

import { ImageLayer, TileLayer } from "@react-gis/openlayers/layer";
import { Map as CoreMap } from "@react-gis/openlayers/map";

const meta = {
  title: "Layer/ImageLayer",
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
        center: [-96, 36],
        zoom: 4,
      },
    },
  },
  render: (props) => {
    return (
      <CoreMap {...props} style={{ height: "100%", width: "100%" }}>
        <TileLayer name="osm" source={new OSM()} />

        <ImageLayer
          name="us-states"
          extent={[-13884991, 2870341, -7455066, 6338219]}
          source={
            new ImageWMS({
              url: "https://ahocevar.com/geoserver/wms",
              params: { LAYERS: "topp:states" },
              ratio: 1,
              serverType: "geoserver",
            })
          }
        />
      </CoreMap>
    );
  },
};
