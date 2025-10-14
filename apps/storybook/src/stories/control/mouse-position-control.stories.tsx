import type { Meta, StoryObj } from "@storybook/react-vite";
import type { TypeWithDeepControls } from "storybook-addon-deep-controls";

import { MousePositionControl } from "@react-gis/core/control";
import { TileLayer } from "@react-gis/core/layer";
import { Map as CoreMap } from "@react-gis/core/map";
import { toStringHDMS } from "ol/coordinate";
import { Projection } from "ol/proj";
import { OSM } from "ol/source";
import { expect } from "storybook/test";

const meta = {
  title: "Control/MousePositionControl",
  component: MousePositionControl,
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
    wrapX: {
      type: "boolean",
      description:
        "Wrap the world horizontally on the projection's antimeridian, if it is a global projection.",
      table: {
        defaultValue: {
          summary: "true",
        },
      },
    },
    coordinateFormat: {
      description:
        "[CoordinateFormat](https://openlayers.org/en/latest/apidoc/module-ol_coordinate.html#~CoordinateFormat) | `undefined`",
    },
    projection: {
      description:
        "[ProjectionLike](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#~ProjectionLike) | `undefined`",
      table: {
        defaultValue: {
          summary: "Map View Projection",
        },
      },
    },
    placeholder: {
      type: "string",
      description:
        "Markup to show when the mouse position is not available (e.g. when the pointer leaves the map viewport). By default, a non-breaking space is rendered initially and the last position is retained when the mouse leaves the viewport. When a string is provided (e.g. 'no position' or '' for an empty string) it is used as a placeholder.",
    },
    className: {
      type: "string",
      description: "CSS class name.",
      table: {
        defaultValue: {
          summary: "ol-mouse-position",
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
} satisfies TypeWithDeepControls<Meta<typeof MousePositionControl>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    wrapX: true,
  },
  render: (props) => {
    return (
      <CoreMap
        mapOptions={{ controls: [], view: { center: [134, -28], zoom: 3 } }}
        style={{ height: "100%", width: "100%" }}
      >
        <MousePositionControl {...props} />

        <TileLayer name="osm" source={new OSM()} />
      </CoreMap>
    );
  },
  play: async ({ canvasElement }) => {
    const mousePositionElement = Array.from(canvasElement.querySelectorAll("div")).find((element) =>
      element.classList.contains("ol-mouse-position"),
    );

    await expect(mousePositionElement).toBeInTheDocument();
  },
};

export const CoordinateFormatStory: Story = {
  args: {
    wrapX: true,
    coordinateFormat: (coordinate) => toStringHDMS(coordinate ?? []),
  },
  render: (props) => {
    return (
      <CoreMap
        mapOptions={{ controls: [], view: { center: [134, -28], zoom: 3 } }}
        style={{ height: "100%", width: "100%" }}
      >
        <MousePositionControl {...props} />

        <TileLayer name="osm" source={new OSM()} />
      </CoreMap>
    );
  },
};

CoordinateFormatStory.storyName = "CoordinateFormat";

export const ProjectionStory: Story = {
  args: {
    wrapX: true,
    projection: new Projection({ code: "EPSG:4326" }),
  },
  render: (props) => {
    return (
      <CoreMap
        mapOptions={{ controls: [], view: { center: [134, -28], zoom: 3 } }}
        style={{ height: "100%", width: "100%" }}
      >
        <MousePositionControl {...props} />

        <TileLayer name="osm" source={new OSM()} />
      </CoreMap>
    );
  },
};

ProjectionStory.storyName = "Projection";
