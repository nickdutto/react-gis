import type { Meta, StoryObj } from "@storybook/react-vite";
import type { TypeWithDeepControls } from "storybook-addon-deep-controls";

import { TileLayer, VectorLayer } from "@react-gis/core/layer";
import { Map as CoreMap } from "@react-gis/core/map";
import { Feature } from "ol";
import { Point } from "ol/geom";
import { fromLonLat } from "ol/proj";
import { OSM } from "ol/source";
import VectorSource from "ol/source/Vector";
import Circle from "ol/style/Circle";
import Fill from "ol/style/Fill";
import Style from "ol/style/Style";

const meta = {
  title: "Layer/VectorLayer",
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

        <VectorLayer
          name="markers"
          source={
            new VectorSource({
              features: [
                new Feature({
                  geometry: new Point(fromLonLat([134, -28])),
                }),
                new Feature({
                  geometry: new Point(fromLonLat([136, -28])),
                }),
                new Feature({
                  geometry: new Point(fromLonLat([138, -28])),
                }),
                new Feature({
                  geometry: new Point(fromLonLat([134, -30])),
                }),
              ],
            })
          }
          style={
            new Style({
              image: new Circle({
                radius: 14,
                fill: new Fill({
                  color: "orange",
                }),
              }),
            })
          }
        />
      </CoreMap>
    );
  },
};
