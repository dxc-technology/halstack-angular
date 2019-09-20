import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import { boolean, select, text } from "@storybook/addon-knobs";
import { DxcCardModule } from "../dxc-card/dxc-card.module";
import cardMD from "./README.md";

storiesOf("Form Components|Card", module)
  .addDecorator(
    moduleMetadata({
      imports: [DxcCardModule]
    })
  )
  .add(
    "Types",
    () => ({
      template: `
      <h3 style="display: block;
      font-size: 1.17em;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      font-weight: bold;"
      >Light</h3>
      <div style="display: inline-flex; align-items: center;">
        <dxc-card (onClick)="onClick($event)" [imageSrc] = "'/pwa-lighthouse.png'">
          <span>Card Example</span>
        </dxc-card>

        <dxc-card (onClick)="onClick($event)" [imagePosition] = "'after'" [imageSrc] = "'/pwa-lighthouse.png'" [mode]="'alternative'"> 
          <span>Card Example</span>
        </dxc-card>

        <dxc-card (onClick)="onClick($event)" [imagePosition] = "'above'" [imageSrc] = "'/pwa-lighthouse.png'"  [mode]="'alternative'">
          <span>Card Example</span>
        </dxc-card>

        <dxc-card (onClick)="onClick($event)" [imagePosition] = "'below'" [imageSrc] = "'/pwa-lighthouse.png'"> 
          <span>Card Example</span>
        </dxc-card>
      </div>
      <h3 style="display: block;
      font-size: 1.17em;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      font-weight: bold;"
      >Dark</h3>
      <div style="background:black; padding-top:10px; display: inline-flex; align-items: center;" >            
        <dxc-card (onClick)="onClick($event)" [theme]="'dark'" [imageSrc] = "'/pwa-lighthouse.png'">
          <span>Card Example</span>
        </dxc-card>

        <dxc-card (onClick)="onClick($event)" [theme]="'dark'" [imagePosition] = "'after'" [imageSrc] = "'/pwa-lighthouse.png'" [mode]="'alternative'"> 
          <span>Card Example</span>
        </dxc-card>

        <dxc-card (onClick)="onClick($event)" [theme]="'dark'" [imagePosition] = "'above'" [imageSrc] = "'/pwa-lighthouse.png'"  [mode]="'alternative'">
          <span>Card Example</span>
        </dxc-card>

        <dxc-card (onClick)="onClick($event)" [theme]="'dark'" [imagePosition] = "'below'" [imageSrc] = "'/pwa-lighthouse.png'"> 
          <span>Card Example</span>
        </dxc-card>
      </div>
      `,
      props: {
        onClick: action("Click fired!")
      }
    }),
    {
      notes: { markdown: cardMD }
    }
  );

storiesOf("Form Components|Card", module)
  .addDecorator(
    moduleMetadata({
      imports: [DxcCardModule]
    })
  )
  .add(
    "Knobs example",
    () => ({
      template: `
      <div [ngStyle]= "{'background':theme==='dark' ? 'black' : '#FFFFFF', 'display': 'inline-flex', 'align-items': 'center', 'flex-wrap': 'wrap'}" >
        <dxc-card [theme]="theme" [imagePosition] = "imagePosition" [imageSrc] = "'/pwa-lighthouse.png'" (onClick)="onClick($event)" [mode]="mode">
          <div>
            <h1>Knobs example</h1>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </dxc-card>
      
        <dxc-card [theme]="theme" [imagePosition] = "imagePosition" [imageSrc] = "'/pwa-lighthouse.png'" (onClick)="onClick($event)" [mode]="mode">
          <div>
            <h1>Knobs example</h1>
            <p>Lorem ipsum dolor sit, amet.</p>
          </div>
        </dxc-card>
      
        <dxc-card [theme]="theme" [imagePosition] = "imagePosition" [imageSrc] = "'/pwa-lighthouse.png'" (onClick)="onClick($event)" [mode]="mode">
          <div><span>Knobs example</span></div>
        </dxc-card>
      
        <dxc-card [theme]="theme" [imagePosition] = "imagePosition" [imageSrc] = "'/pwa-lighthouse.png'" (onClick)="onClick($event)" [mode]="mode">
        </dxc-card>
      </div>`,
      props: {
        mode: select(
          "mode",
          {
            default: "default",
            alternative: "alternative"
          },
          "default"
        ),
        theme: select("theme", { light: "light", dark: "dark" }, "light"),
        imagePosition: select(
          "iconPosition",
          { before: "before", after: "after", below: "below", above: "above" },
          "before"
        ),
        onClick: action("Click fired!")
      }
    }),
    {
      notes: { markdown: cardMD }
    }
  );
