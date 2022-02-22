# DXC Box Component

## Overview

The DXC Box Component is a container.

## Usage

```html
<dxc-box margin="medium" padding="medium"> Box Content </dxc-box>
```

Include the **DxcBoxModule** into **app.module.ts** to use the box component:

```ts
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { DxcBoxModule } from "@dxc-technology/halstack-angular";

@NgModule({
  declarations: [AppComponent],
  imports: [DxcBoxModule],
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
        <td>@Input<br>shadowDepth: 0 | 1 | 2</td>
        <td><code>2</code></td>
        <td>The size of the shadow to be displayed around the box.</td>
    </tr>
    <tr>
        <td>@Input<br>display: string</td>
        <td>
        <code>'inline-flex'</code>
        </td>
        <td>Changes the display CSS property of the box div.</td>
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
        <td>@Input<br>padding: string | object</td>
        <td></td>
        <td>
        Size of the padding to be applied to the component ('xxsmall' | 'xsmall' |
        'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'). You can pass an
        object with 'top', 'bottom', 'left' and 'right' properties in order to
        specify different padding sizes.
        </td>
    </tr>
    <tr>
        <td>@Input<br>size: string</td>
        <td>
        <code>'fitContent'</code>
        </td>
        <td>
        Size of the component ('small' | 'medium' | 'large' | 'fillParent'|
        'fitContent').
        </td>
    </tr>
</table>

## Theming

Not available tokens.
