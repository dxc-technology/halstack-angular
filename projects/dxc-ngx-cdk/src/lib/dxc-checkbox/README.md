# DXC Checkbox Component

## Overview

The DXC Checkbox Component provides to the user the ability to select a true, false or indeterminate value for a field.

## Usage

To use the component, add the following selector to any template:

<table style="border-radius: 10px">
    <tr>
        <td style="background-color: black; color: white">Selector</td>
        <td>dxc-checkbox</td>
    </tr>
</table>

```html
<dxc-checkbox
  [(ngModel)]="checked"
  labelPosition="before"
  text="Checkbox 1"
></dxc-checkbox>
```

Include the **DxcCheckboxModule** into **app.module.ts** to use the checkbox component:

```ts
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DxcCheckboxModule } from '@diaas/dxc-ngx-cdk';

@NgModule({
  declarations: [AppComponent],
  imports: [DxcCheckboxModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

## API

The API properties are the following:

<table>
    <tr style="background-color: grey">
        <td>Property</td>
        <td>Input / Output</td>
        <td>Type</td>
        <td>Values</td>
        <td>Required</td>
        <td>Default</td>
    </tr>
    <tr>
        <td>theme</td>
        <td>@Input()</td>
        <td><code> string</code></td>
        <td>{light,dark}</td>
        <td>No</td>
        <td>light</td>
    </tr>
    <tr>
        <td>ngModel</td>
        <td>@Input()</td>
        <td><code>string</code></td>
        <td>-</td>
        <td>No</td>
        <td>""</td>
    </tr>
    <tr>
        <td>indeterminate</td>
        <td>@Input()</td>
        <td><code>boolean | string</code></td>
        <td>-</td>
        <td>No</td>
        <td>false</td>
    </tr>
    <tr>
        <td>checked</td>
        <td>@Input()</td>
        <td><code>boolean</code></td>
        <td>{true, false}</td>
        <td>No</td>
        <td>false</td>
    </tr>
    <tr>
        <td>disableRipple</td>
        <td>@Input()</td>
        <td><code>boolean | string</code></td>
        <td>-</td>
        <td>No</td>
        <td>false</td>
    </tr>
     <tr>
        <td>disabled</td>
        <td>@Input()</td>
        <td><code>boolean | string</code></td>
        <td>-</td>
        <td>No</td>
        <td>false</td>
    </tr>
     <tr>
        <td>required</td>
        <td>@Input()</td>
        <td><code>boolean | string</code></td>
        <td>-</td>
        <td>No</td>
        <td>false</td>
    </tr>
    <tr>
        <td>text</td>
        <td>@Input()</td>
        <td><code>string</code></td>
        <td>-</td>
        <td>No</td>
        <td>""</td>
    </tr>
    <tr>
        <td>name</td>
        <td>@Input()</td>
        <td><code>string</code></td>
        <td>-</td>
        <td>No</td>
        <td>""</td>
    </tr>
    <tr>
        <td>id</td>
        <td>@Input()</td>
        <td><code>string</code></td>
        <td>-</td>
        <td>No</td>
        <td>""</td>
    </tr>
    <tr>
        <td>labelPosition</td>
        <td>@Input()</td>
        <td><code>string</code></td>
        <td>{before, after}</td>
        <td>No</td>
        <td>"after"</td>
    </tr>
    <tr>
        <td>value</td>
        <td>@Input()</td>
        <td><code>string</code></td>
        <td>-</td>
        <td>No</td>
        <td>""</td>
    </tr>
    <tr>
        <td>change</td>
        <td>@Output()</td>
        <td><code>EventEmitter &lt;MatCheckboxChange&gt;</code></td>
        <td>-</td>
        <td>No</td>
        <td>""</td>
    </tr>
    <tr>
        <td>indeterminateChange</td>
        <td>@Output()</td>
        <td><code>EventEmitter &lt;boolean&gt;</code></td>
        <td>-</td>
        <td>No</td>
        <td>""</td>
    </tr>
</table>

## Example

```html
<!-- Checkbox with text, label positioned before and ngModel-->
<dxc-checkbox
  [(ngModel)]="checked"
  labelPosition="before"
  text="Checkbox 1"
></dxc-checkbox>

<!-- Checkbox with text and label positioned after-->
<dxc-checkbox labelPosition="after" text="Checkbox 2"></dxc-checkbox>

<!-- Checkbox with text and label positioned after-->
<dxc-checkbox text="Checkbox 3"></dxc-checkbox>

<!-- Checkbox with text, label positioned before, disabled but not required (required is not available if disabled is applied)-->
<dxc-checkbox
  disabled
  required
  labelPosition="before"
  text="Checkbox 4"
></dxc-checkbox>

<!-- Checkbox with text, label positioned after, indeterminate, value and showAlert is triggered when checkbox state changes-->
<dxc-checkbox
  indeterminate
  value="checkbox"
  (change)="showAlert()"
  text="Checkbox 5"
></dxc-checkbox>

<!-- Checkbox without text and checked-->
<dxc-checkbox checked="true"></dxc-checkbox>

<!-- Checkbox with text, label positioned after, required, id, name, disbleRipple and indeterminate-->
<dxc-checkbox
  indeterminate
  disableRipple
  name="checkbox"
  id="checkbox7"
  required
  text="Checkbox 7"
></dxc-checkbox>
```
