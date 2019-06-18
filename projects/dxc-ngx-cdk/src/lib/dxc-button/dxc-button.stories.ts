import { storiesOf, moduleMetadata } from "@storybook/angular";
import { DxcButtonComponent } from "./dxc-button.component";
import buttonMD from "./README.md";
import {
  withKnobs,
  text,
  boolean,
  select

} from '@storybook/addon-knobs';
import { DxcButtonModule } from './dxc-button.module';
import { action } from '@storybook/addon-actions';

export const button = {
  type: "basic"
};


storiesOf("Form Components|Button", module)
  .addDecorator(
    moduleMetadata({
      imports: [DxcButtonModule]
    })
  )
    .add(
      "Types",
     () => ({
       template: `
       <div class="Light">
       <h3 style="display: block;
       font-size: 1.17em;
       margin-block-start: 1em;
       margin-block-end: 1em;
       margin-inline-start: 0px;
       margin-inline-end: 0px;
       font-weight: bold;">Light</h3>
       <dxc-button (click)="changeCheckBoxValue()" [label]="'Basic'" iconType="fa" icon="fas fa-allergies" iconPosition="before">
       </dxc-button>
     
       <dxc-button mode="basic" disabled [label]="'Back'" iconType="fa" icon="fas fa-arrow-left" iconPosition="before">
       </dxc-button>
     
       <dxc-button mode="raised" [disableRipple]=true [label]="'Search'" iconType="mat" icon="search"></dxc-button>
     
       <dxc-button mode="raised" disabled [label]="'Share'" icon="fab fa-instagram" iconType="fa" iconPosition="before">
       </dxc-button>
     
       <dxc-button mode="outlined" [label]="'Go to profile'" icon="person"></dxc-button>
     
       <dxc-button mode="outlined" disabled [label]="'Save'" iconType="fa" icon="fas fa-save"></dxc-button>
     
       <dxc-button mode="flat" (click)="showAlert()" [label]="'Warning'" icon="warning"></dxc-button>
     
       <dxc-button mode="flat" disabled [label]="'Take a photo'" icon="photo_camera" iconPosition="before"></dxc-button>
     
       <dxc-button mode="flat" disabled icon="photo_camera" iconPosition="before"></dxc-button>
       <dxc-button mode="raised" [label]="'Click me!'"></dxc-button>
       <dxc-button mode="flat"  [label]="'flat'"></dxc-button>

     </div>
     <h3 style="display: block;
     font-size: 1.17em;
     margin-block-start: 1em;
     margin-block-end: 1em;
     margin-inline-start: 0px;
     margin-inline-end: 0px;
     font-weight: bold;"
     >Dark</h3>
     <div style="background:black" >
      
     <dxc-button (click)="changeCheckBoxValue()" [label]="'Basic'" iconType="fa" icon="fas fa-allergies" iconPosition="before">
     </dxc-button>
   
     <dxc-button [theme]="'dark'" mode="basic" disabled [label]="'Back'" iconType="fa" icon="fas fa-arrow-left" iconPosition="before">
     </dxc-button>
   
     <dxc-button [theme]="'dark'" mode="raised" [disableRipple] = true [label]="'Search'" iconType="mat" icon="search"></dxc-button>
   
     <dxc-button [theme]="'dark'" mode="raised" disabled [label]="'Share'" icon="fab fa-instagram" iconType="fa" iconPosition="before">
     </dxc-button>
   
     <dxc-button [theme]="'dark'" mode="outlined" [label]="'Go to profile'" icon="person"></dxc-button>
   
     <dxc-button [theme]="'dark'" mode="outlined" disabled [label]="'Save'" iconType="fa" icon="fas fa-save"></dxc-button>
   
     <dxc-button [theme]="'dark'" mode="flat" (click)="showAlert()" [label]="'Warning'" icon="warning"></dxc-button>
   
     <dxc-button [theme]="'dark'" mode="flat" disabled [label]="'Take a photo'" icon="photo_camera" iconPosition="before"></dxc-button>
   
     <dxc-button [theme]="'dark'" mode="flat" disabled icon="photo_camera" iconPosition="before"></dxc-button>

     <dxc-button [theme]="'dark'" mode="raised" [label]="'Click me!'"></dxc-button>
     <dxc-button [theme]="'dark'" mode="flat"  [label]="'flat'"></dxc-button>
     
     </div>`
     }))

     storiesOf("Form Components|Button", module)
     .addDecorator(
       moduleMetadata({
         imports: [DxcButtonModule]
       })
     )
     .add(
       "Knobs example",
       () => ({
         template: `<div [ngStyle]= "{'background':theme==='dark' ? 'black' : '#FFFFFF'}" >
            <dxc-button  
            [mode]="mode"
            [theme] = "theme"
            [icon] = "icon"
            [iconType] = "iconType"
            [disabled] = "disabled"  
            [iconPosition]= "iconPosition"
            [label]="label">
            </dxc-button>
         </div>`,
         props: {
          icon: text("icon","photo_camera"),
          iconType: select("iconType", { fa: "fa", mat: "mat" }, "mat"),
          mode: select("mode", { basic: "basic", raised: "raised", flat: "flat", outlined: "outlined" }, "basic"),
          theme: select("theme", { light: "light", dark: "dark" }, "light"),
          disabled: boolean("disabled", false),
          iconPosition: select("icon poistion",{ before: "before", after: "after" }, "before"),
          label: text("label", "Button example"),
          onClick: action("Change fired!"),
         }
       }),
       {
         notes: { markdown: buttonMD }
       }
     );
  // .add(
  //   "Basic",
  //   () => ({
  //     template: `
  //     <dxc-button [label]="Button"></dxc-button>
  //     <dxc-button [label]="Button Disabled" disabled></dxc-button>
  //     <dxc-button [label]="Material" icon="favorite"></dxc-button>
  //     <dxc-button [label]="Font Awesome" iconType="fa" icon="fas fa-allergies" iconPosition="before"></dxc-button>
  //     <dxc-button icon="delete_forever"></dxc-button>
  //     <dxc-button [label]="No Ripple" disableRipple></dxc-button>`,
  //     props: {
  //       button
  //     }
  //   }),
  //   {
  //     notes: { markdown: buttonMD }
  //   }
  // )
  // .add(
  //   "Raised",
  //   () => ({
  //     template: `
  //     <dxc-button mode="raised" [label]="Button"></dxc-button>
  //     <dxc-button mode="raised" [label]="Button Disabled" disabled></dxc-button>
  //     <dxc-button mode="raised" [label]="Material" icon="favorite"></dxc-button>
  //     <dxc-button mode="raised" [label]="Font Awesome" iconType="fa" icon="fas fa-allergies" iconPosition="before"></dxc-button>
  //     <dxc-button mode="raised" icon="delete_forever"></dxc-button>
  //     <dxc-button mode="raised" [label]="No Ripple" disableRipple></dxc-button>`,
  //     props: {
  //       button
  //     }
  //   }),
  //   {
  //     notes: { markdown: buttonMD }
  //   }
  // )
  // .add(
  //   "Outlined",
  //   () => ({
  //     template: `
  //     <dxc-button mode="outlined" [label]="Button"></dxc-button>
  //     <dxc-button mode="outlined" [label]="Button Disabled" disabled></dxc-button>
  //     <dxc-button mode="outlined" [label]="Material" icon="favorite"></dxc-button>
  //     <dxc-button mode="outlined" [label]="Font Awesome" iconType="fa" icon="fas fa-allergies" iconPosition="before"></dxc-button>
  //     <dxc-button mode="outlined" icon="delete_forever"></dxc-button>
  //     <dxc-button mode="outlined" [label]="No Ripple" disableRipple></dxc-button>`,
  //     props: {
  //       button
  //     }
  //   }),
  //   {
  //     notes: { markdown: buttonMD }
  //   }
  // )
  // .add(
  //   "Flat",
  //   () => ({
  //     template: `
  //     <dxc-button mode="flat" [label]="Button"></dxc-button>
  //     <dxc-button mode="flat" [label]="Button Disabled" disabled></dxc-button>
  //     <dxc-button mode="flat" [label]="Material" icon="favorite"></dxc-button>
  //     <dxc-button mode="flat" [label]="Font Awesome" iconType="fa" icon="fas fa-allergies" iconPosition="before"></dxc-button>
  //     <dxc-button mode="flat" icon="delete_forever"></dxc-button>
  //     <dxc-button mode="flat" [label]="No Ripple" disableRipple></dxc-button>`,
  //     props: {
  //       button
  //     }
  //   }),
  //   {
  //     notes: { markdown: buttonMD }
  //   }
  // );
