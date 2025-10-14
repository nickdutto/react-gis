import type { Meta, StoryObj } from "@storybook/react-vite";
import type { TypeWithDeepControls } from "storybook-addon-deep-controls";

import { OSM } from "ol/source";
import { expect } from "storybook/test";

import { ScaleLineControl } from "@react-gis/openlayers/control";
import { TileLayer } from "@react-gis/openlayers/layer";
import { Map as CoreMap } from "@react-gis/openlayers/map";

const meta = {
  title: "Control/ScaleLineControl",
  component: ScaleLineControl,
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
    bar: {
      type: "boolean",
      description: "Render scalebars instead of a line.",
      table: {
        defaultValue: {
          summary: "false",
        },
      },
    },
    text: {
      type: "boolean",
      description:
        "Render the text scale above of the scalebar. Only applies when `bar` is `true`.",
      table: {
        defaultValue: {
          summary: "false",
        },
      },
    },
    units: {
      type: "string",
      description:
        "[Units](https://openlayers.org/en/latest/apidoc/module-ol_control_ScaleLine.html#~Units)",
      table: {
        defaultValue: {
          summary: "metric",
        },
      },
      control: "inline-radio",
      options: ["degrees", "imperial", "metric", "nautical", "us"],
    },
    steps: {
      type: "number",
      description:
        "Number of steps the scalebar should use. Use even numbers for best results. Only applies when `bar` is `true`.",
      table: {
        defaultValue: {
          summary: "4",
        },
      },
    },
    minWidth: {
      type: "number",
      description:
        "Minimum width in pixels at the OGC default dpi. The width will be adjusted to match the dpi used.",
      table: {
        defaultValue: {
          summary: "64",
        },
      },
    },
    maxWidth: {
      type: "number",
      description:
        "Maximum width in pixels at the OGC default dpi. The width will be adjusted to match the dpi used.",
    },
    dpi: {
      type: "number",
      description:
        "dpi of output device such as printer. Only applies when bar is true. If undefined the OGC default screen pixel size of 0.28mm will be assumed.",
    },
    className: {
      type: "string",
      description:
        "CSS class name. The default is `ol-scale-bar` when configured with bar: true. Otherwise the default is `ol-scale-line`",
      table: {
        defaultValue: {
          summary: "ol-scale-bar",
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
} satisfies TypeWithDeepControls<Meta<typeof ScaleLineControl>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    bar: false,
    text: false,
    units: "metric",
    steps: 4,
  },
  render: (props) => {
    return (
      <CoreMap
        mapOptions={{ controls: [], view: { center: [134, -28], zoom: 4 } }}
        style={{ height: "100%", width: "100%" }}
      >
        <ScaleLineControl {...props} />

        <TileLayer name="osm" source={new OSM()} />
      </CoreMap>
    );
  },
  play: async ({ args, canvasElement }) => {
    const scaleLineElement = Array.from(canvasElement.querySelectorAll("div")).find((element) =>
      element.classList.contains(args.bar ? "ol-scale-bar" : "ol-scale-line"),
    );

    await expect(scaleLineElement).toBeInTheDocument();
  },
};
