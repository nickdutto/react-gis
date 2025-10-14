import type { Meta, StoryObj } from "@storybook/react-vite";
import type { TypeWithDeepControls } from "storybook-addon-deep-controls";

import { OSM } from "ol/source";
import { expect } from "storybook/test";

import { ZoomToExtentControl } from "@react-gis-openlayers/core/control";
import { TileLayer } from "@react-gis-openlayers/core/layer";
import { Map as CoreMap } from "@react-gis-openlayers/core/map";

const meta = {
  title: "Control/ZoomToExtentControl",
  component: ZoomToExtentControl,
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
    extent: {
      description:
        "The extent to zoom to. If undefined the validity extent of the view projection is used. [Extent](https://openlayers.org/en/latest/apidoc/module-ol_extent.html#~Extent) | `undefined`",
    },
    label: {
      type: "string",
      description:
        "Text label to use for the button. Instead of text, also an element (e.g. a `span` element) can be used. `HTMLElement` |",
      table: {
        defaultValue: {
          summary: "E",
        },
      },
    },
    tipLabel: {
      type: "string",
      description: "Text label to use for the button tip.",
      table: {
        defaultValue: {
          summary: "Fit to extent",
        },
      },
    },
    className: {
      type: "string",
      description: "CSS class name.",
      table: {
        defaultValue: {
          summary: "ol-zoom-extent",
        },
      },
    },
    target: {
      description:
        "Specify a target if you want the control to be rendered outside of the map's viewport. `HTMLElement` | `string` | `undefined`",
    },
  },
} satisfies TypeWithDeepControls<Meta<typeof ZoomToExtentControl>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "E",
    tipLabel: "Fit to extent",
  },
  render: (props) => {
    return (
      <CoreMap
        mapOptions={{ controls: [], view: { center: [134, -28], zoom: 4 } }}
        style={{ height: "100%", width: "100%" }}
      >
        <ZoomToExtentControl {...props} />

        <TileLayer name="osm" source={new OSM()} />
      </CoreMap>
    );
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByTitle("Fit to extent")).toBeInTheDocument();
  },
};

export const Extent: Story = {
  args: {
    label: "E",
    tipLabel: "Fit to extent",
    extent: [16483492.275642, -4335508.244335, 16697515.95484, -4167958.278334],
  },
  render: (props) => {
    return (
      <CoreMap
        mapOptions={{ controls: [], view: { center: [134, -28], zoom: 4 } }}
        style={{ height: "100%", width: "100%" }}
      >
        <ZoomToExtentControl {...props} />

        <TileLayer name="osm" source={new OSM()} />
      </CoreMap>
    );
  },
};
