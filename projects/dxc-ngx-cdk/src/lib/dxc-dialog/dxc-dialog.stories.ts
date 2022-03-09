import { ThemeModule } from "../theme";
import { DxcDialogComponent } from "./dxc-dialog.component";
import { DxcDialogModule } from "./dxc-dialog.module";
import { moduleMetadata, Meta, Story } from "@storybook/angular";
import { ComponentsModule } from "../../../../../.storybook/components/components.module";

export default {
  title: "Dialog",
  component: DxcDialogComponent,
  decorators: [
    moduleMetadata({
      imports: [DxcDialogModule, ComponentsModule, ThemeModule],
    }),
  ],
} as Meta;

const Default: Story = (args) => ({
  template: `<sb-example-container>
  <sb-title title="Default dialog" [level]="2"></sb-title>
  <dxc-dialog
    ><p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas
      luctus porttitor. Donec massa magna, placerat sit amet felis eget,
      venenatis fringilla ipsum. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Donec congue laoreet orci, nec elementum dolor consequat
      quis. Curabitur rhoncus justo sed dapibus tincidunt. Vestibulum cursus ut
      risus sit amet congue. Nunc luctus, urna ullamcorper facilisis Jia Le,
      risus eros aliquam erat, ut efficitur ante neque id odio. Nam orci leo,
      dignissim sit amet dolor ut, congue gravida enim. Donec rhoncus aliquam
      nisl, ac cursus enim bibendum vitae. Nunc sit amet elit ornare, malesuada
      urna eu, fringilla mauris. Vivamus bibendum turpis est, id elementum purus
      euismod sit amet. Etiam sit amet maximus augue. Vivamus erat sapien,
      ultricies fringilla tellus id, condimentum blandit justo. Praesent quis
      nunc dignissim, pharetra neque molestie, molestie lectus.
    </p></dxc-dialog
  >
</sb-example-container>`,
  props: args,
});

const WithoutOverlay: Story = (args) => ({
  template: `<sb-example-container>
  <sb-title title="Dialog without overlay" [level]="2"></sb-title>
  <dxc-dialog [overlay]="false"
    ><p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas
      luctus porttitor. Donec massa magna, placerat sit amet felis eget,
      venenatis fringilla ipsum. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Donec congue laoreet orci, nec elementum dolor consequat
      quis. Curabitur rhoncus justo sed dapibus tincidunt. Vestibulum cursus ut
      risus sit amet congue. Nunc luctus, urna ullamcorper facilisis Jia Le,
      risus eros aliquam erat, ut efficitur ante neque id odio. Nam orci leo,
      dignissim sit amet dolor ut, congue gravida enim. Donec rhoncus aliquam
      nisl, ac cursus enim bibendum vitae. Nunc sit amet elit ornare, malesuada
      urna eu, fringilla mauris. Vivamus bibendum turpis est, id elementum purus
      euismod sit amet. Etiam sit amet maximus augue. Vivamus erat sapien,
      ultricies fringilla tellus id, condimentum blandit justo. Praesent quis
      nunc dignissim, pharetra neque molestie, molestie lectus.
    </p></dxc-dialog
  >
</sb-example-container>`,
  props: args,
});

const WithoutClose: Story = (args) => ({
  template: `<sb-example-container>
  <sb-title title="Dialog without close" [level]="2"></sb-title>
  <dxc-dialog [isCloseVisible]="false"
    ><p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas
      luctus porttitor. Donec massa magna, placerat sit amet felis eget,
      venenatis fringilla ipsum. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Donec congue laoreet orci, nec elementum dolor consequat
      quis. Curabitur rhoncus justo sed dapibus tincidunt. Vestibulum cursus ut
      risus sit amet congue. Nunc luctus, urna ullamcorper facilisis Jia Le,
      risus eros aliquam erat, ut efficitur ante neque id odio. Nam orci leo,
      dignissim sit amet dolor ut, congue gravida enim. Donec rhoncus aliquam
      nisl, ac cursus enim bibendum vitae. Nunc sit amet elit ornare, malesuada
      urna eu, fringilla mauris. Vivamus bibendum turpis est, id elementum purus
      euismod sit amet. Etiam sit amet maximus augue. Vivamus erat sapien,
      ultricies fringilla tellus id, condimentum blandit justo. Praesent quis
      nunc dignissim, pharetra neque molestie, molestie lectus.
    </p></dxc-dialog
  >
</sb-example-container>
`,
  props: args,
});

const XxsmallPadding: Story = (args) => ({
  template: `<sb-example-container>
  <sb-title title="Dialog with xxsmall padding" [level]="2"></sb-title>
  <dxc-dialog padding="xxsmall"
    ><p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas
      luctus porttitor. Donec massa magna, placerat sit amet felis eget,
      venenatis fringilla ipsum. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Donec congue laoreet orci, nec elementum dolor consequat
      quis. Curabitur rhoncus justo sed dapibus tincidunt. Vestibulum cursus ut
      risus sit amet congue. Nunc luctus, urna ullamcorper facilisis Jia Le,
      risus eros aliquam erat, ut efficitur ante neque id odio. Nam orci leo,
      dignissim sit amet dolor ut, congue gravida enim. Donec rhoncus aliquam
      nisl, ac cursus enim bibendum vitae. Nunc sit amet elit ornare, malesuada
      urna eu, fringilla mauris. Vivamus bibendum turpis est, id elementum purus
      euismod sit amet. Etiam sit amet maximus augue. Vivamus erat sapien,
      ultricies fringilla tellus id, condimentum blandit justo. Praesent quis
      nunc dignissim, pharetra neque molestie, molestie lectus.
    </p></dxc-dialog
  >
</sb-example-container>
`,
  props: args,
});

const XsmallPadding: Story = (args) => ({
  template: `<sb-example-container>
  <sb-title title="Dialog with xsmall padding" [level]="2"></sb-title>
  <dxc-dialog padding="xsmall"
    ><p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas
      luctus porttitor. Donec massa magna, placerat sit amet felis eget,
      venenatis fringilla ipsum. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Donec congue laoreet orci, nec elementum dolor consequat
      quis. Curabitur rhoncus justo sed dapibus tincidunt. Vestibulum cursus ut
      risus sit amet congue. Nunc luctus, urna ullamcorper facilisis Jia Le,
      risus eros aliquam erat, ut efficitur ante neque id odio. Nam orci leo,
      dignissim sit amet dolor ut, congue gravida enim. Donec rhoncus aliquam
      nisl, ac cursus enim bibendum vitae. Nunc sit amet elit ornare, malesuada
      urna eu, fringilla mauris. Vivamus bibendum turpis est, id elementum purus
      euismod sit amet. Etiam sit amet maximus augue. Vivamus erat sapien,
      ultricies fringilla tellus id, condimentum blandit justo. Praesent quis
      nunc dignissim, pharetra neque molestie, molestie lectus.
    </p></dxc-dialog
  >
</sb-example-container>
`,
  props: args,
});

const SmallPadding: Story = (args) => ({
  template: `<sb-example-container>
  <sb-title title="Dialog with small padding" [level]="2"></sb-title>
  <dxc-dialog padding="small"
    ><p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas
      luctus porttitor. Donec massa magna, placerat sit amet felis eget,
      venenatis fringilla ipsum. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Donec congue laoreet orci, nec elementum dolor consequat
      quis. Curabitur rhoncus justo sed dapibus tincidunt. Vestibulum cursus ut
      risus sit amet congue. Nunc luctus, urna ullamcorper facilisis Jia Le,
      risus eros aliquam erat, ut efficitur ante neque id odio. Nam orci leo,
      dignissim sit amet dolor ut, congue gravida enim. Donec rhoncus aliquam
      nisl, ac cursus enim bibendum vitae. Nunc sit amet elit ornare, malesuada
      urna eu, fringilla mauris. Vivamus bibendum turpis est, id elementum purus
      euismod sit amet. Etiam sit amet maximus augue. Vivamus erat sapien,
      ultricies fringilla tellus id, condimentum blandit justo. Praesent quis
      nunc dignissim, pharetra neque molestie, molestie lectus.
    </p></dxc-dialog
  >
</sb-example-container>
`,
  props: args,
});

const MediumPadding: Story = (args) => ({
  template: `<sb-example-container>
  <sb-title title="Dialog with medium padding" [level]="2"></sb-title>
  <dxc-dialog padding="medium"
    ><p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas
      luctus porttitor. Donec massa magna, placerat sit amet felis eget,
      venenatis fringilla ipsum. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Donec congue laoreet orci, nec elementum dolor consequat
      quis. Curabitur rhoncus justo sed dapibus tincidunt. Vestibulum cursus ut
      risus sit amet congue. Nunc luctus, urna ullamcorper facilisis Jia Le,
      risus eros aliquam erat, ut efficitur ante neque id odio. Nam orci leo,
      dignissim sit amet dolor ut, congue gravida enim. Donec rhoncus aliquam
      nisl, ac cursus enim bibendum vitae. Nunc sit amet elit ornare, malesuada
      urna eu, fringilla mauris. Vivamus bibendum turpis est, id elementum purus
      euismod sit amet. Etiam sit amet maximus augue. Vivamus erat sapien,
      ultricies fringilla tellus id, condimentum blandit justo. Praesent quis
      nunc dignissim, pharetra neque molestie, molestie lectus.
    </p></dxc-dialog
  >
</sb-example-container>
`,
  props: args,
});

const LargePadding: Story = (args) => ({
  template: `<sb-example-container>
  <sb-title title="Dialog with large padding" [level]="2"></sb-title>
  <dxc-dialog padding="large"
    ><p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas
      luctus porttitor. Donec massa magna, placerat sit amet felis eget,
      venenatis fringilla ipsum. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Donec congue laoreet orci, nec elementum dolor consequat
      quis. Curabitur rhoncus justo sed dapibus tincidunt. Vestibulum cursus ut
      risus sit amet congue. Nunc luctus, urna ullamcorper facilisis Jia Le,
      risus eros aliquam erat, ut efficitur ante neque id odio. Nam orci leo,
      dignissim sit amet dolor ut, congue gravida enim. Donec rhoncus aliquam
      nisl, ac cursus enim bibendum vitae. Nunc sit amet elit ornare, malesuada
      urna eu, fringilla mauris. Vivamus bibendum turpis est, id elementum purus
      euismod sit amet. Etiam sit amet maximus augue. Vivamus erat sapien,
      ultricies fringilla tellus id, condimentum blandit justo. Praesent quis
      nunc dignissim, pharetra neque molestie, molestie lectus.
    </p></dxc-dialog
  >
</sb-example-container>
`,
  props: args,
});

const XlargePadding: Story = (args) => ({
  template: `<sb-example-container>
  <sb-title title="Dialog with xlarge padding" [level]="2"></sb-title>
  <dxc-dialog padding="xlarge"
    ><p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas
      luctus porttitor. Donec massa magna, placerat sit amet felis eget,
      venenatis fringilla ipsum. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Donec congue laoreet orci, nec elementum dolor consequat
      quis. Curabitur rhoncus justo sed dapibus tincidunt. Vestibulum cursus ut
      risus sit amet congue. Nunc luctus, urna ullamcorper facilisis Jia Le,
      risus eros aliquam erat, ut efficitur ante neque id odio. Nam orci leo,
      dignissim sit amet dolor ut, congue gravida enim. Donec rhoncus aliquam
      nisl, ac cursus enim bibendum vitae. Nunc sit amet elit ornare, malesuada
      urna eu, fringilla mauris. Vivamus bibendum turpis est, id elementum purus
      euismod sit amet. Etiam sit amet maximus augue. Vivamus erat sapien,
      ultricies fringilla tellus id, condimentum blandit justo. Praesent quis
      nunc dignissim, pharetra neque molestie, molestie lectus.
    </p></dxc-dialog
  >
</sb-example-container>
`,
  props: args,
});

const XxlargePadding: Story = (args) => ({
  template: `<sb-example-container>
  <sb-title title="Dialog with xxlarge padding" [level]="2"></sb-title>
  <dxc-dialog padding="xxlarge"
    ><p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas
      luctus porttitor. Donec massa magna, placerat sit amet felis eget,
      venenatis fringilla ipsum. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Donec congue laoreet orci, nec elementum dolor consequat
      quis. Curabitur rhoncus justo sed dapibus tincidunt. Vestibulum cursus ut
      risus sit amet congue. Nunc luctus, urna ullamcorper facilisis Jia Le,
      risus eros aliquam erat, ut efficitur ante neque id odio. Nam orci leo,
      dignissim sit amet dolor ut, congue gravida enim. Donec rhoncus aliquam
      nisl, ac cursus enim bibendum vitae. Nunc sit amet elit ornare, malesuada
      urna eu, fringilla mauris. Vivamus bibendum turpis est, id elementum purus
      euismod sit amet. Etiam sit amet maximus augue. Vivamus erat sapien,
      ultricies fringilla tellus id, condimentum blandit justo. Praesent quis
      nunc dignissim, pharetra neque molestie, molestie lectus.
    </p></dxc-dialog
  >
</sb-example-container>
`,
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

Chromatic.parameters = {};
