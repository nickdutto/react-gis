import type { Meta, StoryObj } from "@storybook/react-vite";
import type { TypeWithDeepControls } from "storybook-addon-deep-controls";

import { FullScreenControl } from "@react-gis/openlayers/control";
import { TileLayer } from "@react-gis/openlayers/layer";
import { Map as CoreMap } from "@react-gis/openlayers/map";
import { OSM } from "ol/source";
import { expect } from "storybook/test";

const meta = {
  title: "Control/FullScreenControl",
  component: FullScreenControl,
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
    keys: {
      type: "boolean",
      description: "Full keyboard access.",
      table: {
        defaultValue: {
          summary: "false",
        },
      },
    },
    label: {
      type: "string",
      description:
        "Text label to use for the button. Instead of text, also an element (e.g. a `span` element) can be used. `string` | `Text` | `HTMLElement`",
      table: {
        defaultValue: {
          summary: "\u2922",
        },
      },
    },
    labelActive: {
      type: "string",
      description:
        "Text label to use for the button when full-screen is active. Instead of text, also an element (e.g. a `span` element) can be used. `string` | `Text` | `HTMLElement` ",
      table: {
        defaultValue: {
          summary: "\u00d7",
        },
      },
    },
    tipLabel: {
      type: "string",
      description: "Text label to use for the button tip.",
      table: {
        defaultValue: {
          summary: "Toggle full-screen",
        },
      },
    },
    className: {
      type: "string",
      description: "CSS class name.",
      table: {
        defaultValue: {
          summary: "ol-full-screen",
        },
      },
    },
    activeClassName: {
      type: "string",
      description: "CSS class name for the button when full-screen is active.",
      table: {
        defaultValue: {
          summary: "className + -true",
        },
      },
    },
    inactiveClassName: {
      type: "string",
      description: "CSS class name for the button when full-screen is inactive.",
      table: {
        defaultValue: {
          summary: "className + -false",
        },
      },
    },
    target: {
      description:
        "Specify a target if you want the control to be rendered outside of the map's viewport. `HTMLElement` | `string` | `undefined`",
    },
    source: {
      description:
        "The element to be displayed fullscreen. When not provided, the element containing the map viewport will be displayed fullscreen. `HTMLElement` | `string` | `undefined`",
    },
  },
} satisfies TypeWithDeepControls<Meta<typeof FullScreenControl>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    keys: false,
    label: "\u2922",
    labelActive: "\u00d7",
  },
  render: (props) => {
    return (
      <CoreMap
        mapOptions={{ controls: [], view: { center: [134, -28], zoom: 4 } }}
        style={{ height: "100%", width: "100%" }}
      >
        <FullScreenControl {...props} />

        <TileLayer name="osm" source={new OSM()} />
      </CoreMap>
    );
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByTitle("Toggle full-screen")).toBeInTheDocument();
  },
};
