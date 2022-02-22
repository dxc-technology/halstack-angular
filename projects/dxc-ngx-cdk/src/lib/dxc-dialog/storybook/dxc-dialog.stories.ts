import { ThemeModule } from "../../theme";
import { DxcDialogComponent } from "../dxc-dialog.component";
import { DxcDialogModule } from "../dxc-dialog.module";
import { moduleMetadata, Meta, Story } from "@storybook/angular";
import { ComponentsModule } from "../../../../.storybook/components/components.module";

export default {
  title: "Dialog",
  decorators: [
    moduleMetadata({
      imports: [
        DxcDialogModule,
        ComponentsModule,
        ThemeModule,
      ],
    }),
  ],
} as Meta;

const Default: Story = (args) => ({
  component: DxcDialogComponent,
  templateUrl: "./default-dialog.stories.html",
  props: args,
});

const WithoutOverlay: Story = (args) => ({
  component: DxcDialogComponent,
  templateUrl: "./dialog-without-overlay.stories.html",
  props: args,
});

const WithoutClose: Story = (args) => ({
  component: DxcDialogComponent,
  templateUrl: "./dialog-without-close.stories.html",
  props: args,
});

const XxsmallPadding: Story = (args) => ({
  component: DxcDialogComponent,
  templateUrl: "./dialog-xxsmall-padding.stories.html",
  props: args,
});

const XsmallPadding: Story = (args) => ({
  component: DxcDialogComponent,
  templateUrl: "./dialog-xsmall-padding.stories.html",
  props: args,
});

const SmallPadding: Story = (args) => ({
  component: DxcDialogComponent,
  templateUrl: "./dialog-small-padding.stories.html",
  props: args,
});

const MediumPadding: Story = (args) => ({
  component: DxcDialogComponent,
  templateUrl: "./dialog-medium-padding.stories.html",
  props: args,
});

const LargePadding: Story = (args) => ({
  component: DxcDialogComponent,
  templateUrl: "./dialog-large-padding.stories.html",
  props: args,
});

const XlargePadding: Story = (args) => ({
  component: DxcDialogComponent,
  templateUrl: "./dialog-xlarge-padding.stories.html",
  props: args,
});

const XxlargePadding: Story = (args) => ({
  component: DxcDialogComponent,
  templateUrl: "./dialog-xxlarge-padding.stories.html",
  props: args,
});

export const Chromatic = Default.bind({});
export const DialogWithoutOverlay = WithoutOverlay.bind({});
export const DialogWithoutClose = WithoutClose.bind({});
export const DialogWithXxsmallPadding = XxsmallPadding.bind({});
export const DialogWithXsmallPadding = XsmallPadding.bind({});
export const DialogWithSmallPadding = SmallPadding.bind({});
export const DialogWithMediumPadding = MediumPadding.bind({});
export const DialogWithLargePadding = LargePadding.bind({});
export const DialogWithXlargePadding = XlargePadding.bind({});
export const DialogWithXxlargePadding = XxlargePadding.bind({});

Chromatic.parameters = {
};
