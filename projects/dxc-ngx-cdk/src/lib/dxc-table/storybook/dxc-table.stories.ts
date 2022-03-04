import { ThemeModule } from "../../theme";
import { DxcTableComponent } from "../dxc-table.component";
import { DxcTableModule } from "../dxc-table.module";
import { moduleMetadata, Meta, Story } from "@storybook/angular";
import { ComponentsModule } from "../../../../.storybook/components/components.module";

export default {
  title: "Table",
  decorators: [
    moduleMetadata({
      imports: [DxcTableModule, ComponentsModule, ThemeModule],
    }),
  ],
} as Meta;

const Default: Story = (args) => ({
  component: DxcTableComponent,
  templateUrl: "./dxc-table.stories.html",
  props: args,
});
export const Chromatic = Default.bind({});

Chromatic.parameters = {};
