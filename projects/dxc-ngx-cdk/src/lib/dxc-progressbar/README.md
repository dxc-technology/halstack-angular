# DXC ProgressBar Component

## Overview

The DXC ProgressBar Component inform users about the status of ongoing processes.

## Usage

```html
<dxc-progressbar margin="medium" showValue="true" label="Loading...">
</dxc-progressbar>
```

Include the **DxcProgressBar** into **app.module.ts** to use the progress bar component:

```ts
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { DxcProgressBar } from "@dxc-technology/halstack-angular";

@NgModule({
  declarations: [AppComponent],
  imports: [DxcProgressBar],
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
        <td>Text to be placed above the progress bar.</td>
    </tr>
    <tr>
        <td>@Input<br>overlay: boolean</td>
        <td>
        <code>true</code>
        </td>
        <td>If true, the progress bar will be displayed as a modal.</td>
    </tr>
    <tr>
        <td>@Input<br>value: string</td>
        <td></td>
        <td>
        The value of the progress indicator. If it's received the component is
        determinate otherwise is indeterminate.
        </td>
    </tr>
    <tr>
        <td>@Input<br>showValue: boolean</td>
        <td>
        <code>false</code>
        </td>
        <td>If true, the value is displayed above the progress bar.</td>
    </tr>
    <tr>
        <td>@Input<br>margin: any (string | object)</td>
        <td></td>
        <td>
        Size of the margin to be applied to the component ('xxsmall' | 'xsmall' |
        'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'). You can pass an
        object with 'top', 'bottom', 'left' and 'right' properties in order to
        specify different margin sizes.
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
        <td>trackLine</td>
        <td><code>#6F2C91</code></td>
        <td>Applies to token trackLine.</td>
    </tr>
    <tr>
        <td>totalLine</td>
        <td><code>#000000</code></td>
        <td>Applies to token totalLine.</td>
    </tr>
</table>
