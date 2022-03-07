import { ThemeModule } from "../../theme";
import { DxcSpinnerComponent } from "../dxc-spinner.component";
import { DxcSpinnerModule } from "../dxc-spinner.module";
import { moduleMetadata, Meta, Story } from "@storybook/angular";
import { ComponentsModule } from "../../../../.storybook/components/components.module";

export default {
  title: "Spinner",
  decorators: [
    moduleMetadata({
      imports: [DxcSpinnerModule, ComponentsModule, ThemeModule],
    }),
  ],
} as Meta;

const Default: Story = (args) => ({
  component: DxcSpinnerComponent,
  templateUrl: "./dxc-spinner.stories.html",
  props: args,
});
const WithOverlay: Story = (args) => ({
  component: DxcSpinnerComponent,
  templateUrl: "./spinner-overlay.stories.html",
  props: args,
});
const WithOverlay100: Story = (args) => ({
  component: DxcSpinnerComponent,
  templateUrl: "./spinner-overlay-100.stories.html",
  props: args,
});
const OverlayWithLabel: Story = (args) => ({
  component: DxcSpinnerComponent,
  templateUrl: "./spinner-overlay-label.stories.html",
  props: args,
});
const OverlayWithValue: Story = (args) => ({
  component: DxcSpinnerComponent,
  templateUrl: "./spinner-overlay-value.stories.html",
  props: args,
});
const OverlayWithValueAndLabel: Story = (args) => ({
  component: DxcSpinnerComponent,
  templateUrl: "./spinner-overlay-label-value.stories.html",
  props: args,
});

export const Chromatic = Default.bind({});
export const SpinnerWithOverlay = WithOverlay.bind({});
export const SpinnerOverlayWith100 = WithOverlay100.bind({});
export const SpinnerOverlayWithLabel = OverlayWithLabel.bind({});
export const SpinnerOverlayWithValue = OverlayWithValue.bind({});
export const SpinnerOverlayWithValueAndLabel = OverlayWithValueAndLabel.bind(
  {}
);

Chromatic.parameters = {};
