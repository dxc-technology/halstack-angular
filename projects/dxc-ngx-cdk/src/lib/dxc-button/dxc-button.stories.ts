import { ThemeModule } from "../theme";
import { DxcButtonComponent } from "./dxc-button.component";
import { DxcButtonModule } from "./dxc-button.module";
import { moduleMetadata, Meta, Story } from "@storybook/angular";
import { ComponentsModule } from "../../../.storybook/components/components.module";
import { BackgroundProviderModule } from "../background-provider/background-provider.module";

export default {
  title: "Button",
  decorators: [
    moduleMetadata({
      imports: [
        BackgroundProviderModule,
        DxcButtonModule,
        ComponentsModule,
        ThemeModule,
      ],
    }),
  ],
} as Meta;

const TemplateLight: Story = (args) => ({
  component: DxcButtonComponent,
  templateUrl: "./dxc-button.stories.html",
  props: args,
});

export const Chromatic = TemplateLight.bind({});

Chromatic.parameters = {
  pseudo: { hover: false, focus: false, visited: false, active: false },
};
