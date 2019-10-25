import { storiesOf, moduleMetadata } from "@storybook/angular";
import headerMD from "./README.md";
import { boolean, select, text, object } from "@storybook/addon-knobs";
import "hammerjs";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { DXCHeaderModule } from "./dxc-header.module";
import { MatIconModule } from "@angular/material";
import { DxcSwitchModule } from "../dxc-switch/dxc-switch.module";
import { DXCSelectModule } from '../dxc-select/dxc-select.module';

const icons = [
  { value: "spain", iconSrc: "./spain.svg" },
  { value: "english", iconSrc: "/united-kingdom.svg" },
  { value: "france", iconSrc: "/france.svg" }
];

storiesOf("Form Components|Header", module)
  .addDecorator(
    moduleMetadata({
      imports: [
        DXCHeaderModule,
        DXCSelectModule,
        DxcSwitchModule,
        MatIconModule,
        BrowserModule,
        BrowserAnimationsModule
      ]
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
      <div style="background: #D3D3D3;">
      <div>
          <h4> Header with no underline</h4>
        <dxc-header>
          <div  style="color: white; display: contents;">
            <dxc-switch [label]="'Autosave'" [theme]="'dark'"></dxc-switch>
            <mat-icon style="margin-right: 35px;">settings</mat-icon>
            <p style="margin-right: 10px;"> kkdrensk</p>
            <mat-icon >account_circle</mat-icon>
          </div> 
        </dxc-header>

        <h4> Header with  underline</h4>
        <dxc-header [underline]="true">
            <div  style="display: contents;">
            <dxc-switch [label]="'Autosave'"></dxc-switch>
            <mat-icon style="margin-right: 35px;">settings</mat-icon>
            <p style="margin-right: 10px;"> kkdrensk</p>
            <mat-icon >account_circle</mat-icon>
      </div> 
        
        
        </dxc-header>
            
        <h3 style="display: block;
        font-size: 1.17em;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        font-weight: bold;"
        >Dark</h3>

        <div style="padding-bottom:20px;" >            
        <div>
        <h4> Header with no underline</h4>
        <dxc-header  [theme]="'dark'">
         <div  style="display: contents;">
            <dxc-switch [label]="'Autosave'" ></dxc-switch>
            <mat-icon style="margin-right: 35px;">settings</mat-icon>
            <p style="margin-right: 10px;"> kkdrensk</p>
            <mat-icon >account_circle</mat-icon>
          </div> 
        </dxc-header>

        <h4 > Header with  underline</h4>
        <dxc-header [underline]="true" [theme]="'dark'">
          <div  style="color: white; display: contents;">
              <dxc-switch [label]="'Autosave'" [theme]="'dark'"></dxc-switch>
              <mat-icon style="margin-right: 35px;">settings</mat-icon>
              <p style="margin-right: 10px;"> kkdrensk</p>
              <mat-icon >account_circle</mat-icon>
          </div> 
        </dxc-header>
        </div>
      </div>  
      `,

      props: {
        label: text("label", ""),
        icons: object("icons", icons),
        underlined: boolean("Inderlined", false),
        theme: select("theme", { light: "light", dark: "dark" }, "light")
      }
    }),
    {
      notes: { markdown: headerMD }
    }
  );

storiesOf("Form Components|Header", module)
  .addDecorator(
    moduleMetadata({
      imports: [  DXCHeaderModule,
        DXCSelectModule,
        DxcSwitchModule,
        MatIconModule,
        BrowserModule,
        BrowserAnimationsModule]
    })
  ) 
  .add(
    "Knobs example",
    () => ({
      template: `<div style="background: #D3D3D3;min-height: 200px;" >
                     <dxc-header [theme]="theme" [underline]="underline" >
                        <div  style="color: white; display: contents;">
                            <dxc-switch style="margin-bottom: 10px;" [label]="'Autosave'" [theme]="'dark'"></dxc-switch>
                            <mat-icon style="margin-right: 35px;">settings</mat-icon>
                            <p style="margin-right: 10px;"> kkdrensk</p>
                            <mat-icon >account_circle</mat-icon>
                        </div> 
                        </dxc-header>    
                     </div>
                        `,
      props: {
        icons: object("icons", icons),
        label: text("label", ""),
        underline: boolean("Inderline", false),
        theme: select("theme", { light: "light", dark: "dark" }, "light")
      }
    }),
    {
      notes: { markdown: headerMD }
    }
  );
