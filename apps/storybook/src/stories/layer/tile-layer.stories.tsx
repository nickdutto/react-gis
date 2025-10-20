import type { Meta, StoryObj } from "@storybook/react-vite";
import type { TypeWithDeepControls } from "storybook-addon-deep-controls";

import { OSM } from "ol/source";

import { TileLayer } from "@react-gis/openlayers/layer";
import { Map as CoreMap } from "@react-gis/openlayers/map";

import { ExternalLinks } from "~/helpers/external-links";

const meta = {
  title: "Layer/TileLayer",
  component: TileLayer,
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
} satisfies TypeWithDeepControls<Meta<typeof TileLayer>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "osm",
    visible: true,
    opacity: 1,
    preload: 0,
  },
  render: (props) => {
    return (
      <>
        <CoreMap style={{ height: "100%", width: "100%" }}>
          <TileLayer {...props} source={new OSM()} />
        </CoreMap>

        <ExternalLinks
          links={[
            {
              title: "ReactGIS Docs",
              href: "https://reactgis.nickdutto.dev/docs/API-Reference/openlayers/layer/tile-layer",
            },
            {
              title: "OpenLayers Docs",
              href: "https://openlayers.org/en/latest/apidoc/module-ol_layer_Tile-TileLayer.html",
            },
          ]}
        />
      </>
    );
  },
};
