# DXC Table Component

## Overview

The DXC Table Component allows to display information in cells and columns.

## Usage

```html
<dxc-table margin="medium">
  <tr>
    <th>header 1</th>
    <th>header 2</th>
    <th>header 3</th>
  </tr>
  <tr>
    <td>cell 1</td>
    <td>cell 2</td>
    <td>cell 3</td>
  </tr>
  <tr>
    <td>cell 4</td>
    <td>cell 5</td>
    <td>cell 6</td>
  </tr>
</dxc-table>
```

Include the **DxcTableModule** into **app.module.ts** to use the table component:

```ts
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { DxcTableModule } from "@dxc-technology/halstack-angular";

@NgModule({
  declarations: [AppComponent],
  imports: [DxcTableModule],
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
        <td>@Input<br>margin: any (string | object)</td>
        <td></td>
        <td>
            Size of the margin to be applied to the component ('xxsmall' | 
            'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'). You 
            can pass an object with 'top', 'bottom', 'left' and 'right' properties 
            in order to specify different padding sizes.
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
        <td>headerBackgroundColor</td>
        <td><code>#000000</code></td>
        <td>Applies to token headerBackgroundColor.</td>
    </tr>
    <tr>
        <td>headerFontColor</td>
        <td><code>#FFFFFF</code></td>
        <td>Applies to token headerTextColor.</td>
    </tr>
</table>
