import type { Meta, StoryObj } from "@storybook/react-vite";
import type { TypeWithDeepControls } from "storybook-addon-deep-controls";

import { OSM } from "ol/source";
import { expect } from "storybook/test";

import { ZoomControl } from "@react-gis-openlayers/core/control";
import { TileLayer } from "@react-gis-openlayers/core/layer";
import { Map as CoreMap } from "@react-gis-openlayers/core/map";

const meta = {
  title: "Control/ZoomControl",
  component: ZoomControl,
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
    delta: {
      type: "number",
      description: "The zoom delta applied on each click.",
      table: {
        defaultValue: {
          summary: "1",
        },
      },
    },
    duration: {
      type: "number",
      description: "Animation duration in milliseconds.",
      table: {
        defaultValue: {
          summary: "250",
        },
      },
    },
    zoomInLabel: {
      type: "string",
      description:
        "Text label to use for the zoom-in button. Instead of text, also an element (e.g. a span element) can be used.",
      table: {
        defaultValue: {
          summary: "+",
        },
      },
    },
    zoomOutLabel: {
      type: "string",
      description:
        "Text label to use for the zoom-out button. Instead of text, also an element (e.g. a span element) can be used.",
      table: {
        defaultValue: {
          summary: "-",
        },
      },
    },
    zoomInTipLabel: {
      type: "string",
      description: "Text label to use for the zoom-in button tip.",
      table: {
        defaultValue: {
          summary: "Zoom in",
        },
      },
    },
    zoomOutTipLabel: {
      type: "string",
      description: "Text label to use for the zoom-out button tip.",
      table: {
        defaultValue: {
          summary: "Zoom out",
        },
      },
    },
    className: {
      type: "string",
      description: "CSS class name.",
      table: {
        defaultValue: {
          summary: "ol-zoom",
        },
      },
    },
    zoomInClassName: {
      type: "string",
      description: "CSS class name for the zoom-in button.",
      table: {
        defaultValue: {
          summary: "className + -in",
        },
      },
    },
    zoomOutClassName: {
      type: "string",
      description: "CSS class name for the zoom-out button.",
      table: {
        defaultValue: {
          summary: "className + -out",
        },
      },
    },
    target: {
      description:
        "Specify a target if you want the control to be rendered outside of the map's viewport. `HTMLElement` | `string` | `undefined`",
    },
  },
} satisfies TypeWithDeepControls<Meta<typeof ZoomControl>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    delta: 1,
    duration: 250,
  },
  render: (props) => {
    return (
      <CoreMap
        mapOptions={{ controls: [], view: { center: [134, -28], zoom: 4 } }}
        style={{ height: "100%", width: "100%" }}
      >
        <ZoomControl {...props} />

        <TileLayer name="osm" source={new OSM()} />
      </CoreMap>
    );
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByTitle("Zoom in")).toBeInTheDocument();
    await expect(canvas.getByTitle("Zoom out")).toBeInTheDocument();
  },
};
