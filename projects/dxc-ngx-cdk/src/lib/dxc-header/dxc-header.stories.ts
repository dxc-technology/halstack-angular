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
import { action } from "@storybook/addon-actions";

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
        <dxc-header (onClick)="onClick($event)">
          <div  style="color: white; display: contents;">
            <dxc-switch [label]="'Autosave'" [theme]="'dark'"></dxc-switch>
            <mat-icon style="margin-right: 35px;">settings</mat-icon>
            <p> kkdrensk</p>
            <mat-icon >account_circle</mat-icon>
          </div> 
        </dxc-header>

        <h4> Header with  underline</h4>
        <dxc-header (onClick)="onClick($event)" [underline]="true">
            <div  style="display: contents;">
            <dxc-switch [label]="'Autosave'"></dxc-switch>
            <mat-icon style="margin-right: 35px;">settings</mat-icon>
            <p> kkdrensk</p>
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
        <dxc-header (onClick)="onClick($event)" [theme]="'dark'">
         <div  style="display: contents;">
            <dxc-switch [label]="'Autosave'" ></dxc-switch>
            <mat-icon style="margin-right: 35px;">settings</mat-icon>
            <p> kkdrensk</p>
            <mat-icon >account_circle</mat-icon>
          </div> 
        </dxc-header>

        <h4 > Header with  underline</h4>
        <dxc-header (onClick)="onClick($event)" [underline]="true" [theme]="'dark'">
          <div  style="color: white; display: contents;">
              <dxc-switch [label]="'Autosave'" [theme]="'dark'"></dxc-switch>
              <mat-icon style="margin-right: 35px;">settings</mat-icon>
              <p> kkdrensk</p>
              <mat-icon >account_circle</mat-icon>
          </div> 
        </dxc-header>
        </div>
      </div>  
      `,

      props: {
        label: text("label", ""),
        underlined: boolean("Inderlined", false),
        theme: select("theme", { light: "light", dark: "dark" }, "light"),
        onClick: action("Click fired!")
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
                            <dxc-switch [label]="'Autosave'" [theme]="'dark'"></dxc-switch>
                            <mat-icon style="margin-right: 35px;">settings</mat-icon>
                            <p> kkdrensk</p>
                            <mat-icon >account_circle</mat-icon>
                        </div> 
                        </dxc-header>    
                     </div>
                        `,
      props: {
        label: text("label", ""),
        underline: boolean("Inderline", false),
        theme: select("theme", { light: "light", dark: "dark" }, "light"),
        onClick: action("Click fired!")
      }
    }),
    {
      notes: { markdown: headerMD }
    }
  );
