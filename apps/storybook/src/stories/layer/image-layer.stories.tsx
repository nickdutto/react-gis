import type { Meta, StoryObj } from "@storybook/react-vite";
import type { TypeWithDeepControls } from "storybook-addon-deep-controls";

import { ImageWMS, OSM } from "ol/source";

import { ImageLayer, TileLayer } from "@react-gis/openlayers/layer";
import { Map as CoreMap } from "@react-gis/openlayers/map";

import { ExternalLinks } from "~/helpers/external-links";

const meta = {
  title: "Layer/ImageLayer",
  component: ImageLayer,
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
} satisfies TypeWithDeepControls<Meta<typeof ImageLayer>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "us-states",
    visible: true,
    opacity: 1,
    extent: [-13884991, 2870341, -7455066, 6338219],
  },
  render: (props) => {
    return (
      <>
        <CoreMap
          mapOptions={{ view: { center: [-96, 36], zoom: 3.5 } }}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer name="osm" source={new OSM()} />

          <ImageLayer
            {...props}
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

        <ExternalLinks
          links={[
            {
              title: "ReactGIS Docs",
              href: "https://reactgis.nickdutto.dev/docs/API-Reference/openlayers/layer/image-layer",
            },
            {
              title: "OpenLayers Docs",
              href: "https://openlayers.org/en/latest/apidoc/module-ol_layer_Image-ImageLayer.html",
            },
          ]}
        />
      </>
    );
  },
};
