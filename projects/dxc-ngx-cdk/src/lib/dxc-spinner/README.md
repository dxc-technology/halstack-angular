# DXC Spinner Component

## Overview

The DXC Spinner Component inform users about the status of ongoing processes.

## Usage

```html
<dxc-spinner 
    margin="medium" 
    label="Loading...">
</dxc-spinner>
```

Include the **DxcSpinnerModule** into **app.module.ts** to use the spinner component:

```ts
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { DxcSpinnerModule } from '@dxc-technology/halstack-angular';

@NgModule({
  declarations: [AppComponent],
  imports: [DxcSpinnerModule],
  providers: [],
  bootstrap: [AppComponent]
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
        <td>Text to be placed inside the spinner.</td>
    </tr>
    <tr>
        <td>@Input<br>mode: string ('large' | 'small' | 'overlay')</td>
        <td>
        <code>
            'large'
        </code>
        </td>
        <td>The spinner can have overlay or small or large size. </td>
    </tr>
    <tr>
        <td>@Input<br>value: string</td>
        <td></td>
        <td>
        The value of the progress indicator. If it's received the component is
        determinate, otherwise is indeterminate.
        </td>
    </tr>
    <tr>
        <td>@Input<br>showValue: boolean</td>
        <td>
        <code>false</code>
        </td>
        <td>If true, the value is displayed inside the spinner.</td>
    </tr>
    <tr>
        <td>@Input<br>margin: any (string | object)</td>
        <td></td>
        <td>
        Size of the margin to be applied to the component ('xxsmall' |
        'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'). You
        can pass an object with 'top', 'bottom', 'left' and 'right' properties
        in order to specify different margin sizes.
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
        <td>totalCircleColor</td>
        <td><code>#FFFFFF</code></td>
        <td>Applies to token totalCircle.</td>
    </tr>
    <tr>
        <td>trackCircleColor</td>
        <td><code>#FFED00</code></td>
        <td>Applies to token trackLine.</td>
    </tr>
</table>