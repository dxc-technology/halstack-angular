import { storiesOf, moduleMetadata } from "@storybook/angular";
import { DxcButtonModule } from "./dxc-button.module";
import { action } from "@storybook/addon-actions";
import { ThemeModule } from "../theme/theme.module";

storiesOf("Form Components|Button", module)
  .addDecorator(
    moduleMetadata({
      imports: [DxcButtonModule, ThemeModule],
    })
  )
  .add("Types", () => ({
    styles: [`
    .container{
      margin: 15px;
    }

    .darkContainer{
      background-color: #333333;
    }

    .mainTitle{
      font-family: 'Open Sans', sans-serif;
    }

    .containerTitle{
      font-family: 'Open Sans', sans-serif;
    }
    `],
    template: `
    <div theme>
      <h2 class="mainTitle"> Primary </h2>
      <div class="container">
        <h4 class="containerTitle">Enabled</h4>
        <dxc-button label="Primeray enabled"></dxc-button>
      </div>
      <div class="container pseudo-hover">
      <h4 class="containerTitle">Hovered</h4>
      <dxc-button label="Primary hovered"></dxc-button>
    </div>
    </div>


      `,
    props: {
      onClick: action("Click fired!"),
    },
  }));
