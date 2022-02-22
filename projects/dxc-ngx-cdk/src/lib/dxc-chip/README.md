# DXC Chip Component

## Overview

The DXC Chip Component is a compact element that displays short information.

## Usage

```html
<dxc-chip label="Default Chip" margin="small"></dxc-chip>
```

Include the **DxcChipModule** into **app.module.ts** to use the chip component:

```ts
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { DxcChipModule } from "@dxc-technology/halstack-angular";

@NgModule({
  declarations: [AppComponent],
  imports: [DxcChipModule],
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
    <td>@Input<br>label: string</td>
    <td></td>
    <td>Text to be placed inside the chip.</td>
  </tr>
  <tr>
    <td>@Input<br>suffixIconSrc: string</td>
    <td></td>
    <td><b>Deprecated.</b>Path of the icon to be placed after the label.</td>
  </tr>
  <tr>
    <td>@Input<br>prefixIconSrc: string</td>
    <td></td>
    <td><b>Deprecated.</b>Path of the icon to be placed before the label.</td>
  </tr>
  <tr>
    <td>@Input<br>margin: string | object</td>
    <td></td>
    <td>
      Size of the margin to be applied to the component ('xxsmall' | 'xsmall' |
      'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'). You can pass an
      object with 'top', 'bottom', 'left' and 'right' properties in order to
      specify different margin sizes.
    </td>
  </tr>
  <tr>
    <td>@Input<br>disabled: boolean</td>
    <td><code>false</code></td>
    <td>
      If true, the component will be disabled.
    </td>
  </tr>
  <tr>
    <td>@Input<br>tabIndexValue: number</td>
    <td><code>0</code></td>
    <td>
      Value of the tabindex, it also applies to prefix and suffix icons when a function is given.
    </td>
  </tr>
  <tr>
    <td>@Output<br>suffixIconClick: EventEmitter</td>
    <td></td>
    <td>
     Event that will be emitted when the suffix icon is clicked.
    </td>
  </tr>
  <tr>
    <td>@Output<br>prefixIconClick: EventEmitter</td>
    <td></td>
    <td>
      Event that will be emitted when the prefix icon is clicked.
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
        <td>fontColor</td>
        <td><code>#000000</code></td>
        <td>Applies to token textColor.</td>
    </tr>
    <tr>
        <td>backgroundColor</td>
        <td><code>#EEEEEE</code></td>
        <td>Applies to token backgroundColor.</td>
    </tr>
    <tr>
        <td>outlinedColor</td>
        <td></td>
        <td>Applies to token outlinedColor.</td>
    </tr>
</table>
