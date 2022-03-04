import { ThemeModule } from "../../theme";
import { DxcFooterComponent } from "../dxc-footer.component";
import { DxcFooterModule } from "../dxc-footer.module";
import { moduleMetadata, Meta, Story } from "@storybook/angular";
import { ComponentsModule } from "../../../../.storybook/components/components.module";

export default {
  title: "Footer",
  decorators: [
    moduleMetadata({
      imports: [DxcFooterModule, ComponentsModule, ThemeModule],
    }),
  ],
} as Meta;

const Default: Story = (args) => ({
  component: DxcFooterComponent,
  templateUrl: "./dxc-footer.stories.html",
  props: args,
});

export const Chromatic = Default.bind({});
Chromatic.args = {
  social: [
    {
      href: "https://www.linkedin.com/company/dxctechnology",
      logoSrc: "./assets/linkedin.svg",
    },
    {
      href: "https://twitter.com/dxctechnology",
      logoSrc: "http://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png",
    },
    {
      href: "https://www.facebook.com/DXCTechnology/",
      logoSrc: "./assets/facebook.svg",
    },
  ],
  bottom: [
    {
      href: "https://www.linkedin.com/company/dxctechnology",
      text: "Linkedin",
    },
    {
      href: "https://twitter.com/dxctechnology",
      text: "Twitter",
    },
    {
      href: "https://www.facebook.com/DXCTechnology/",
      text: "Facebook",
    },
  ],
};
Chromatic.parameters = {};
