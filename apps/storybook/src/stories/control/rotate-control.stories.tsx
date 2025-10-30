import type { Meta, StoryObj } from "@storybook/react-vite";
import type { TypeWithDeepControls } from "storybook-addon-deep-controls";

import { OSM } from "ol/source";
import { expect } from "storybook/test";

import { RotateControl } from "@react-gis/openlayers/control";
import { TileLayer } from "@react-gis/openlayers/layer";
import { Map as CoreMap } from "@react-gis/openlayers/map";

const meta = {
  title: "Control/RotateControl",
  component: RotateControl,
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
    autoHide: {
      type: "boolean",
      description: "Hide the control when rotation is 0.",
      table: {
        defaultValue: {
          summary: "true",
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
    resetNorth: {
      type: "function",
      description:
        "Function called when the control is clicked. This will override the default resetNorth.",
    },
    label: {
      type: "string",
      description:
        "Text label to use for the rotate button. Instead of text, also an element (e.g. a `span` element) can be used. `HTMLElement` |",
      table: {
        defaultValue: {
          summary: "⇧",
        },
      },
    },
    tipLabel: {
      type: "string",
      description: "Text label to use for the rotate tip.",
      table: {
        defaultValue: {
          summary: "Reset rotation",
        },
      },
    },
    className: {
      type: "string",
      description: "CSS class name.",
      table: {
        defaultValue: {
          summary: "ol-rotate",
        },
      },
    },
    compassClassName: {
      type: "string",
      description: "CSS class name for the compass.",
      table: {
        defaultValue: {
          summary: "ol-compass",
        },
      },
    },
    target: {
      description:
        "Specify a target if you want the control to be rendered outside of the map's viewport. `HTMLElement` | `string` | `undefined`",
    },
    render: {
      type: "function",
      description:
        "Function called when the control should be re-rendered. This is called in a `requestAnimationFrame` callback.",
    },
  },
} satisfies TypeWithDeepControls<Meta<typeof RotateControl>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    autoHide: false,
    duration: 250,
    label: "⇧",
    tipLabel: "Reset rotation",
  },
  render: (props) => {
    return (
      <CoreMap
        mapOptions={{
          controls: [],
          view: { center: [134, -28], zoom: 4 },
        }}
        style={{ height: "100%", width: "100%" }}
      >
        <RotateControl {...props} />

        <TileLayer name="osm" source={new OSM()} />
      </CoreMap>
    );
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByTitle("Reset rotation")).toBeInTheDocument();
  },
};
