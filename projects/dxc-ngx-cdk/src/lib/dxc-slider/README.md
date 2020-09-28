# DXC Slider Component

## Overview

The DXC Slider Component is an element to select from a range of values.

## Usage

```html
<dxc-slider
    minValue="0"
    maxValue="100"
    showLimitsValues="true"
    name="input"
    step="1"
    margin="medium"
    [value]="inputValue"
    (onChange)="onChange($event)"
></dxc-slider>
```

Include the **DxcSliderModule** into **app.module.ts** to use the slider component:

```ts
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DxcSliderModule } from '@dxc-technology/halstack-angular';

@NgModule({
  declarations: [AppComponent],
  imports: [DxcSliderModule],
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
        <td>@Input<br>minValue: number</td>
        <td><code>0</code></td>
        <td>The minimum value available for selection.</td>
    </tr>
    <tr>
        <td>@Input<br>maxValue: number</td>
        <td><code>100</code></td>
        <td>The maximum value available for selection.</td>
    </tr>
    <tr>
        <td>@Input<br>step: number</td>
        <td><code>1</code></td>
        <td>The step interval between values available for selection.</td>
    </tr>
    <tr>
        <td>@Input<br>value: number</td>
        <td><code>0</code></td>
        <td>The selected value.</td>
    </tr>
    <tr>
        <td>@Input<br>marks: boolean</td>
        <td><code>false</code></td>
        <td>Whether the marks between each step should be shown or not.</td>
    </tr>
    <tr>
        <td>@Input<br>showLimitsValues: boolean</td>
        <td><code>false</code></td>
        <td>
        Whether the min/max value labels should be displayed next to the
        slider.
        </td>
    </tr>
    <tr>
        <td>@Input<br>showInput: boolean</td>
        <td><code>false</code></td>
        <td>
        Whether the input number for displaying/controlling the slider value
        should be displayed next to the slider.
        </td>
    </tr>
    <tr>
        <td>@Input<br>name: string</td>
        <td></td>
        <td>Name attribute of the input element.</td>
    </tr>
    <tr>
        <td>@Input<br>disabled: boolean</td>
        <td><code>false</code></td>
        <td>If true, the component will be disabled.</td>
    </tr>
    <tr>
        <td>@Output<br>valueChange: EventEmitter</td>
        <td></td>
        <td>
        This function will be called when the slider changes its value, as
        it's being dragged. The new value will be passed as a parameter when
        this function is executed.
        </td>
    </tr>
    <tr>
        <td>@Output<br>inputBlur: EventEmitter</td>
        <td></td>
        <td>
            This function will be called when the slider lost the focus. The new value will be passed as a parameter when
            this function is executed.
        </td>
        </tr>
    <tr>
        <td>@Output<br>dragEnd: EventEmitter</td>
        <td></td>
        <td>
        This function will be called when the slider changes its value, but
        only when the thumb is released. The new value will be passed as a
        parameter when this function is executed.
        </td>
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
    <tr>
        <td>@Input<br>size: string | object</td>
        <td><code>'fillParent'</code></td>
        <td>
        Size of the component ('medium' | 'large' | 'fillParent' |
        'fitContent').
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
        <td>color</td>
        <td><code>#000000</code></td>
        <td>Applies to token thumbBackgroundColor, dotsBackgroundColor and trackLine.</td>
    </tr>
</table>