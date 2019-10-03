# DXC Spinner Component

## Overview

The DXC Spinner Component inform users about the status of ongoing processes.

## Usage

```html
<dxc-spinner
  type="basic"
  (click)="selectOption()"
  text="Profile"
  >
</dxc-button>
```

Include the **DxcSpinnerModule** into **app.module.ts** to use the toggle component:

```ts
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { DxcSpinnerModule } from "@diaas/dxc-ngx-cdk";

@NgModule({
  declarations: [AppComponent],
  imports: [DxcSpinnerModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

## API

The API properties are the following:

<table>
    <tr style="background-color: grey">
        <td>Name</td>
        <td>Default</td>
        <td>Description</td>
    </tr>
    <tr>
        <td>@Input<br>label: string</td>
        <td><code>''</code></td>
        <td>Text to be placed inside the spinner.</td>
    </tr>
    <tr>
        <td>@Input<br>theme: 'light' |'dark'</td>
        <td><code>'light'</code></td>
        <td>Uses one of the available toggle themes.</td>
    </tr>
    <tr>
        <td>@Input<br>overlay: boolean</td>
        <td>true</td>
        <td>If true, the spinner will be over a darker background</td>
    </tr>
    <tr>
        <td>@Input<br>value: string</td>
        <td><code></code></td>
        <td>The value of the progress indicator. If it´s received the component is determinated otherwise is indeterminate</td>
    </tr>
    <tr>
        <td>@Input<br>showValue: boolean</td>
        <td>false</td>
        <td>If true the value is displayed inside the spinner</td>
    </tr>
</table>

## Examples

```html

```
