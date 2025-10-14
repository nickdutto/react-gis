import type { Meta, StoryObj } from "@storybook/react-vite";
import type { TypeWithDeepControls } from "storybook-addon-deep-controls";

import { ZoomSliderControl } from "@react-gis/core/control";
import { TileLayer } from "@react-gis/core/layer";
import { Map as CoreMap } from "@react-gis/core/map";
import { OSM } from "ol/source";
import { expect } from "storybook/test";

const meta = {
  title: "Control/ZoomSliderControl",
  component: ZoomSliderControl,
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
    duration: {
      type: "number",
      description: "Animation duration in milliseconds.",
      table: {
        defaultValue: {
          summary: "200",
        },
      },
    },
    className: {
      type: "string",
      description: "CSS class name.",
      table: {
        defaultValue: {
          summary: "ol-zoomslider",
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
} satisfies TypeWithDeepControls<Meta<typeof ZoomSliderControl>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    duration: 200,
  },
  render: (props) => {
    return (
      <CoreMap
        mapOptions={{ controls: [], view: { center: [134, -28], zoom: 4 } }}
        style={{ height: "100%", width: "100%" }}
      >
        <ZoomSliderControl {...props} />

        <TileLayer name="osm" source={new OSM()} />
      </CoreMap>
    );
  },
  play: async ({ canvasElement }) => {
    const zoomSliderElement = Array.from(canvasElement.querySelectorAll("div")).find((element) =>
      element.classList.contains("ol-zoomslider"),
    );

    await expect(zoomSliderElement).toBeInTheDocument();
  },
};
