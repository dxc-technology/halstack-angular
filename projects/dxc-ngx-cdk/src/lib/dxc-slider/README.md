# DXC Slider Component

## Usage

Include the **DxcSliderModule** into **app.module.ts** to use the slider component:

```ts
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DxcSliderModule } from '@diaas/dxc-ngx-cdk';

@NgModule({
  declarations: [AppComponent],
  imports: [DxcSliderModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

Add the following selector to any template:

```html
<dxc-slider
  [min]="0"
  [max]="100"
  [(value)]="value"
></dxc-slider>
```

## API reference

<table>
    <tr style="background-color: grey">
        <td>Name</td>
        <td>Default</td>
        <td>Description</td>
    </tr>
    <tr>
        <td>@Input<br>min: number</td>
        <td><code>0</code></td>
        <td>The minimum value available for selection.</td>
    </tr>
    <tr>
        <td>@Input<br>max: number</td>
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
        <td>@Input<br>showLimitValues: boolean</td>
        <td><code>false</code></td>
        <td>Whether the min/max value labels should be displayed next to the slider.</td>
    </tr>
    <tr>
        <td>@Input<br>showInput: boolean</td>
        <td><code>false</code></td>
        <td>Whether the input number for displaying/controlling the slider value should be displayed next to the slider.</td>
    </tr>
        <tr>
        <td>@Input<br>name: string</td>
        <td></td>
        <td>Name attribute of the input element.</td>
    </tr>
    <tr>
        <td>@Output<br>valueChange: EventEmitter</td>
        <td></td>
        <td>This event will be triggered when the slider changes its value, as it's being dragged. The new value will be passed as a parameter to the bound function</td>
    </tr>
    <tr>
        <td>@Output<br>dragEnd: EventEmitter</td>
        <td></td>
        <td>This event will be triggered when the slider changes its value, but only when the thumb is released. The new value will be passed as a parameter to the bound function</td>
    </tr>
</table>
