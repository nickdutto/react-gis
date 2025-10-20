import type { Meta, StoryObj } from "@storybook/react-vite";
import type { TypeWithDeepControls } from "storybook-addon-deep-controls";

import { Feature } from "ol";
import { Point } from "ol/geom";
import { fromLonLat } from "ol/proj";
import { OSM } from "ol/source";
import VectorSource from "ol/source/Vector";
import Circle from "ol/style/Circle";
import Fill from "ol/style/Fill";
import Style from "ol/style/Style";

import { TileLayer, VectorLayer } from "@react-gis/openlayers/layer";
import { Map as CoreMap } from "@react-gis/openlayers/map";

import { ExternalLinks } from "~/helpers/external-links";

const meta = {
  title: "Layer/VectorLayer",
  component: VectorLayer,
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
    minZoom: {
      type: "number",
    },
    maxZoom: {
      type: "number",
    },
    minResolution: {
      type: "number",
    },
    maxResolution: {
      type: "number",
    },
    zIndex: {
      type: "number",
    },
  },
} satisfies TypeWithDeepControls<Meta<typeof VectorLayer>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "markers",
    visible: true,
    opacity: 1,
    declutter: false,
    renderBuffer: 100,
    updateWhileAnimating: false,
    updateWhileInteracting: false,
  },
  render: (props) => {
    return (
      <>
        <CoreMap style={{ height: "100%", width: "100%" }}>
          <TileLayer name="osm" source={new OSM()} />

          <VectorLayer
            {...props}
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

        <ExternalLinks
          links={[
            {
              title: "ReactGIS Docs",
              href: "https://reactgis.nickdutto.dev/docs/API-Reference/openlayers/layer/vector-layer",
            },
            {
              title: "OpenLayers Docs",
              href: "https://openlayers.org/en/latest/apidoc/module-ol_layer_Vector-VectorLayer.html",
            },
          ]}
        />
      </>
    );
  },
};
