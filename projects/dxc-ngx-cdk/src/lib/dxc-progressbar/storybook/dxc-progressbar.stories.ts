import { ThemeModule } from "../../theme";
import { DxcProgressbarComponent } from "../dxc-progressbar.component";
import { DxcProgressbarModule } from "../dxc-progressbar.module";
import { moduleMetadata, Meta, Story } from "@storybook/angular";
import { ComponentsModule } from "../../../../.storybook/components/components.module";

export default {
  title: "Progressbar",
  decorators: [
    moduleMetadata({
      imports: [DxcProgressbarModule, ComponentsModule, ThemeModule],
    }),
  ],
} as Meta;

const Progressbar: Story = (args) => ({
  component: DxcProgressbarComponent,
  templateUrl: "./dxc-progressbar.stories.html",
  props: args,
});

const Overlay: Story = (args) => ({
  component: DxcProgressbarComponent,
  templateUrl: "./overlay-progressbar.stories.html",
  props: args,
});

export const Chromatic = Progressbar.bind({});
export const ProgressbarOverlay = Overlay.bind({});

Chromatic.parameters = {};
