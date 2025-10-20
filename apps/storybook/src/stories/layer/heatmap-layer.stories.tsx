import type { Meta, StoryObj } from "@storybook/react-vite";
import type { TypeWithDeepControls } from "storybook-addon-deep-controls";

import KML from "ol/format/KML";
import { OSM } from "ol/source";
import VectorSource from "ol/source/Vector";

import { HeatmapLayer, TileLayer } from "@react-gis/openlayers/layer";
import { Map as CoreMap } from "@react-gis/openlayers/map";

import { ExternalLinks } from "~/helpers/external-links";

const meta = {
  title: "Layer/HeatmapLayer",
  component: HeatmapLayer,
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
} satisfies TypeWithDeepControls<Meta<typeof HeatmapLayer>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "2012_Earthquakes_Mag5_heatmap",
    visible: true,
    opacity: 1,
    radius: 8,
    blur: 15,
    weight: "weight",
    gradient: ["#00f", "#0ff", "#0f0", "#ff0", "#f00"],
  },
  render: (props) => {
    return (
      <>
        <CoreMap
          mapOptions={{ view: { center: [134, -10], zoom: 4 } }}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer name="osm" source={new OSM()} />

          <HeatmapLayer
            {...props}
            source={
              new VectorSource({
                url: "https://openlayers.org/en/latest/examples/data/kml/2012_Earthquakes_Mag5.kml",
                format: new KML({ extractStyles: false }),
              })
            }
          />
        </CoreMap>

        <ExternalLinks
          links={[
            {
              title: "ReactGIS Docs",
              href: "https://reactgis.nickdutto.dev/docs/API-Reference/openlayers/layer/heatmap-layer",
            },
            {
              title: "OpenLayers Docs",
              href: "https://openlayers.org/en/latest/apidoc/module-ol_layer_Heatmap-Heatmap.html",
            },
          ]}
        />
      </>
    );
  },
};
