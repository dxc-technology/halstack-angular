# DXC Radio Component

## Overview

The DXC Radio Component allows the user to select an option.

## Usage

```html
<dxc-radio
    label="Radio label"
    name="radioSimple1"
    [checked]="checked"
    (onChange)="onChange($event)"
    margin="medium"
    labelPosition="before">
</dxc-radio>
```

Include the **DxcRadioModule** into **app.module.ts** to use the radio component:

```ts
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DxcRadioModule } from '@dxc-technology/halstack-angular';

@NgModule({
  declarations: [AppComponent],
  imports: [DxcRadioModule],
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
        <td>@Input<br>checked: boolean</td>
        <td>
            <code>false</code>
        </td>
        <td>
            If true, the radio is selected. If undefined the component will be
            uncontrolled and the value will be managed internally by the
            component.
        </td>
    </tr>
    <tr>
        <td>@Input<br>value: any</td>
        <td></td>
        <td>
            Will be passed to the value attribute of the html input element. 
            When inside a form, this value will be only submitted if the radio is checked.
        </td>
    </tr>
    <tr>
        <td>@Input<br>label: string</td>
        <td></td>
        <td>Text to be placed next to the radio.</td>
    </tr>
    <tr>
        <td>@Input<br>labelPosition: string ('before' | 'after')</td>
        <td>
            <code>'before'</code>
        </td>
        <td>Whether the label should appear after or before the radio.</td>
    </tr>
    <tr>
        <td>@Input<br>name: string</td>
        <td></td>
        <td>Name attribute of the input element.</td>
    </tr>
    <tr>
        <td>@Input<br>disabled: boolean</td>
        <td>
            <code>false</code>
        </td>
        <td>If true, the component will be disabled.</td>
    </tr>
    <tr>
        <td>@Input<br>required: boolean</td>
        <td>
            <code>false</code>
        </td>
        <td>
            If true, the radio will change its appearence, showing that the value
            is required.
        </td>
    </tr>
    <tr>
        <td>@Output<br>onChange: EventEmitter</td>
        <td></td>
        <td>
            This function will be called when the user clicks the radio. The new
            value will be passed as a parameter.
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
        <td>@Input<br>size: any (string | object)</td>
        <td>
            <code>'fitContent'</code>
        </td>
        <td>
            Size of the component ('small' | 'medium' | 'large' | 'fillParent' | 'fitContent').
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
        <td>Applies to token dotColor and borderColor.</td>
    </tr>
</table>