# DXC Sidenav Component

## Overview

The DXC Sidenav Component is a side container of the page for navegation.

## Usage

```html
<dxc-sidenav padding="medium" displayArrow="true">
  <dxc-sidenav-menu> Lorem </dxc-sidenav-menu>
  <dxc-sidenav-content> Ipsum </dxc-sidenav-content>
</dxc-sidenav>
```

Include the **DxcSideNavModule** into **app.module.ts** to use the sidenav component:

```ts
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { DxcSideNavModule } from "@dxc-technology/halstack-angular";

@NgModule({
  declarations: [AppComponent],
  imports: [DxcSideNavModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

## API reference

The API properties are the following:

<table>
    <tr style="background-color: grey">
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>@Input<br>padding: string | object</td>
        <td></td>
        <td>
        Size of the padding to be applied to the custom area ('xxsmall' | 'xsmall'
        | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'). You can pass an
        object with 'top', 'bottom', 'left' and 'right' properties in order to
        specify different padding sizes.
        </td>
    </tr>
</table>

## Theming

<table>
    <tr style="background-color: grey">
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>backgroundColor</td>
        <td><code>#F8F8F8</code></td>
        <td>Applies to token backgroundColor.</td>
    </tr>
    <tr>
        <td>selectedOptionBackgroundColor</td>
        <td><code>#D9D9D9</code></td>
        <td>Applies to token selectedOptionBackgroundColor.</td>
    </tr>
    <tr>
        <td>arrowColor</td>
        <td><code>#000000</code></td>
        <td>Applies to token arrowColor.</td>
    </tr>
</table>
