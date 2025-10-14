import type { Meta, StoryObj } from "@storybook/react-vite";
import type { TypeWithDeepControls } from "storybook-addon-deep-controls";

import { OverviewMapControl } from "@react-gis/openlayers/control";
import { TileLayer } from "@react-gis/openlayers/layer";
import { Map as CoreMap } from "@react-gis/openlayers/map";
import OlTileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";
import { expect } from "storybook/test";

const meta = {
  title: "Control/OverviewMapControl",
  component: OverviewMapControl,
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
    collapsed: {
      type: "boolean",
      description: "Whether the control should start collapsed or not (expanded).",
      table: {
        defaultValue: {
          summary: "true",
        },
      },
    },
    collapsible: {
      type: "boolean",
      description: "Whether the control can be collapsed or not.",
      table: {
        defaultValue: {
          summary: "true",
        },
      },
    },
    rotateWithView: {
      type: "boolean",
      description: "Whether the control view should rotate with the main map view.",
      table: {
        defaultValue: {
          summary: "false",
        },
      },
    },
    label: {
      type: "string",
      description:
        "Text label to use for the collapsed overviewmap button. Instead of text, also an element (e.g. a span element) can be used. `HTMLElement` |",
      table: {
        defaultValue: {
          summary: "›",
        },
      },
    },
    collapseLabel: {
      type: "string",
      description:
        "Text label to use for the expanded overviewmap button. Instead of text, also an element (e.g. a span element) can be used. `HTMLElement` |",
      table: {
        defaultValue: {
          summary: "‹",
        },
      },
    },
    tipLabel: {
      type: "string",
      description: "Text label to use for the button tip.",
      table: {
        defaultValue: {
          summary: "Overview map",
        },
      },
    },
    className: {
      type: "string",
      description: "CSS class name.",
      table: {
        defaultValue: {
          summary: "ol-overviewmap",
        },
      },
    },
    layers: {
      description:
        "Layers for the overview map. `Array<`[BaseLayer](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html)`>` | [Collection](https://openlayers.org/en/latest/apidoc/module-ol_Collection-Collection.html)`<`[BaseLayer](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html)`>` | `undefined`",
    },
    view: {
      description:
        "Custom view for the overview map (should use same projection as main map). If not provided, a default view with the same projection as the main map will be used. [View](https://openlayers.org/en/latest/apidoc/module-ol_View-View.html) | `undefined`",
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
} satisfies TypeWithDeepControls<Meta<typeof OverviewMapControl>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    collapsed: false,
    collapsible: true,
    rotateWithView: false,
    label: "›",
    collapseLabel: "‹",
    tipLabel: "Overview map",
  },
  render: (props) => {
    return (
      <CoreMap
        mapOptions={{ controls: [], view: { center: [134, -28], zoom: 4 } }}
        style={{ height: "100%", width: "100%" }}
      >
        <OverviewMapControl {...props} layers={[new OlTileLayer({ source: new OSM() })]} />

        <TileLayer name="osm" source={new OSM()} />
      </CoreMap>
    );
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByTitle("Overview map")).toBeInTheDocument();
  },
};
