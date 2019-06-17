import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";
import { DxcRadioModule } from "./dxc-radio.module";
import { DxcRadioComponent } from "./dxc-radio.component";
import radioMD from "./README.md";


storiesOf("Form Components|Radio", module)
  .addDecorator(
    moduleMetadata({
      imports: [DxcRadioModule]
    })
  )
  .add(
    "Knobs example",
    () => ({
      component: DxcRadioComponent,
      props: {
        label: text("label", "Radio example"),
        checkedChange: action("Change fired!")
      }
    }),
    {
      notes: { markdown: radioMD }
    }
  );
