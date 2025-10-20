import type { Meta, StoryObj } from "@storybook/react-vite";
import type { TypeWithDeepControls } from "storybook-addon-deep-controls";

import MVT from "ol/format/MVT";
import VectorTileSource from "ol/source/VectorTile";

import { VectorTileLayer } from "@react-gis/openlayers/layer";
import { Map as CoreMap } from "@react-gis/openlayers/map";

import { ExternalLinks } from "~/helpers/external-links";

const meta = {
  title: "Layer/VectorTileLayer",
  component: VectorTileLayer,
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
    renderMode: {
      control: "inline-radio",
      options: ["hybrid", "vector"],
    },
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
} satisfies TypeWithDeepControls<Meta<typeof VectorTileLayer>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "world-base-map",
    visible: true,
    opacity: 1,
    renderMode: "hybrid",
    declutter: false,
    renderBuffer: 100,
    preload: 0,
    updateWhileInteracting: false,
  },
  render: (props) => {
    return (
      <>
        <CoreMap style={{ height: "100%", width: "100%" }}>
          <VectorTileLayer
            {...props}
            source={
              new VectorTileSource({
                format: new MVT(),
                url: "https://basemaps.arcgis.com/arcgis/rest/services/World_Basemap_v2/VectorTileServer/tile/{z}/{y}/{x}.pbf",
              })
            }
          />
        </CoreMap>

        <ExternalLinks
          links={[
            {
              title: "ReactGIS Docs",
              href: "https://reactgis.nickdutto.dev/docs/API-Reference/openlayers/layer/vector-tile-layer",
            },
            {
              title: "OpenLayers Docs",
              href: "https://openlayers.org/en/latest/apidoc/module-ol_layer_VectorTile.html",
            },
          ]}
        />
      </>
    );
  },
};
