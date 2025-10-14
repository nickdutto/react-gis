import type { Meta, StoryObj } from "@storybook/react-vite";
import type { TypeWithDeepControls } from "storybook-addon-deep-controls";

import { OSM } from "ol/source";
import { expect } from "storybook/test";

import { AttributionControl } from "@react-gis/openlayers/control";
import { TileLayer } from "@react-gis/openlayers/layer";
import { Map as CoreMap } from "@react-gis/openlayers/map";

const meta = {
  title: "Control/AttributionControl",
  component: AttributionControl,
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
    attributions: {
      type: "string",
      description:
        "Optional attribution(s) that will always be displayed regardless of the layers rendered. **Caution:** Attributions are rendered dynamically using `innerHTML`, which can lead to potential [**XSS (Cross-Site Scripting)**](https://en.wikipedia.org/wiki/Cross-site_scripting) vulnerabilities. Use this feature only for trusted content or ensure that the content is properly sanitized before inserting it.",
    },
    collapsed: {
      description: "Specify if attributions should be collapsed at startup.",
      table: {
        defaultValue: {
          summary: "true",
        },
      },
    },
    collapsible: {
      description:
        "Specify if attributions can be collapsed. If not specified, sources control this behavior with their `attributionsCollapsible` setting.",
    },
    label: {
      type: "string",
      description:
        "Text label to use for the collapsed attributions button. Instead of text, also an element (e.g. a `span` element) can be used.",
      table: {
        defaultValue: {
          summary: "i",
        },
      },
    },
    tipLabel: {
      type: "string",
      description: "Text label to use for the button tip.",
    },
    className: {
      type: "string",
      description: "CSS class name.",
      table: {
        defaultValue: {
          summary: "ol-attribution",
        },
      },
    },
    collapseClassName: {
      type: "string",
      description: "CSS class name for the expanded attributions button.",
      table: {
        defaultValue: {
          summary: "className + -collapse",
        },
      },
    },
    expandClassName: {
      type: "string",
      description: "CSS class name for the collapsed attributions button.",
      table: {
        defaultValue: {
          summary: "className + -expand",
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
} satisfies TypeWithDeepControls<Meta<typeof AttributionControl>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    attributions: ["CrankLab"],
    collapsible: false,
    collapsed: true,
  },
  render: (props) => {
    return (
      <CoreMap
        mapOptions={{ controls: [], view: { center: [134, -28], zoom: 4 } }}
        style={{ height: "100%", width: "100%" }}
      >
        <AttributionControl {...props} />

        <TileLayer name="osm" source={new OSM()} />
      </CoreMap>
    );
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByTitle("Attributions")).toBeInTheDocument();
  },
};
