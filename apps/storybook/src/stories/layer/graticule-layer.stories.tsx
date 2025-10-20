import type { Meta, StoryObj } from "@storybook/react-vite";
import type { TypeWithDeepControls } from "storybook-addon-deep-controls";

import { OSM } from "ol/source";
import Stroke from "ol/style/Stroke";

import { GraticuleLayer, TileLayer } from "@react-gis/openlayers/layer";
import { Map as CoreMap } from "@react-gis/openlayers/map";

import { ExternalLinks } from "~/helpers/external-links";

const meta = {
  title: "Layer/GraticuleLayer",
  component: GraticuleLayer,
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
} satisfies TypeWithDeepControls<Meta<typeof GraticuleLayer>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "graticule",
    visible: true,
    showLabels: true,
    wrapX: true,
    opacity: 1,
    maxLines: 100,
    targetSize: 100,
    intervals: [
      90,
      45,
      30,
      20,
      10,
      5,
      2,
      1,
      30 / 60,
      20 / 60,
      10 / 60,
      5 / 60,
      2 / 60,
      1 / 60,
      30 / 3600,
      20 / 3600,
      10 / 3600,
      5 / 3600,
      2 / 3600,
      1 / 3600,
    ],
  },
  render: (props) => {
    return (
      <>
        <CoreMap style={{ height: "100%", width: "100%" }}>
          <TileLayer name="osm" source={new OSM()} />

          <GraticuleLayer
            {...props}
            strokeStyle={
              new Stroke({
                color: "rgba(255,0,0,0.8)",
                width: 2,
                lineDash: [0.5, 4],
              })
            }
          />
        </CoreMap>

        <ExternalLinks
          links={[
            {
              title: "ReactGIS Docs",
              href: "https://reactgis.nickdutto.dev/docs/API-Reference/openlayers/layer/graticule-layer",
            },
            {
              title: "OpenLayers Docs",
              href: "https://openlayers.org/en/latest/apidoc/module-ol_layer_Graticule-Graticule.html",
            },
          ]}
        />
      </>
    );
  },
};
