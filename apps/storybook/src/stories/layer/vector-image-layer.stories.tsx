import type { Meta, StoryObj } from "@storybook/react-vite";
import type { TypeWithDeepControls } from "storybook-addon-deep-controls";

import GeoJSON from "ol/format/GeoJSON";
import { OSM } from "ol/source";
import VectorSource from "ol/source/Vector";

import { TileLayer, VectorImageLayer } from "@react-gis/openlayers/layer";
import { Map as CoreMap } from "@react-gis/openlayers/map";

import { ExternalLinks } from "~/helpers/external-links";

const meta = {
  title: "Layer/VectorImageLayer",
  component: VectorImageLayer,
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
} satisfies TypeWithDeepControls<Meta<typeof VectorImageLayer>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "eco-regions",
    background: "#101012",
    visible: true,
    opacity: 1,
    declutter: false,
    renderBuffer: 100,
    imageRatio: 1,
  },
  render: (props) => {
    return (
      <>
        <CoreMap style={{ height: "100%", width: "100%" }}>
          <TileLayer name="osm" source={new OSM()} />

          <VectorImageLayer
            {...props}
            source={
              new VectorSource({
                url: "https://openlayers.org/data/vector/ecoregions.json",
                format: new GeoJSON(),
              })
            }
            style={{
              "fill-color": ["string", ["get", "COLOR"], "#eee"],
            }}
          />
        </CoreMap>

        <ExternalLinks
          links={[
            {
              title: "ReactGIS Docs",
              href: "https://reactgis.nickdutto.dev/docs/API-Reference/openlayers/layer/vector-image-layer",
            },
            {
              title: "OpenLayers Docs",
              href: "https://openlayers.org/en/latest/apidoc/module-ol_layer_VectorImage-VectorImageLayer.html",
            },
          ]}
        />
      </>
    );
  },
};
