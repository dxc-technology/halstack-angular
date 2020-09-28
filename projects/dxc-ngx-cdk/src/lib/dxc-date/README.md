# DXC Date Component

## Overview

The DXC Date Component is an element to select a date.

## Usage

```html
<dxc-date
    label="Input label"
    [value]="inputValue"
    assistiveText="assistive text"
    (onInputChange)="onChange($event)"
    [invalid]="isInvalidDate"
    margin="medium"
></dxc-date>
```

Include the **DxcDateModule** into **app.module.ts** to use the date component:

```ts
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { DxcDateModule } from '@dxc-technology/halstack-angular';

@NgModule({
  declarations: [AppComponent],
  imports: [DxcDateModule],
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
        <td>@Input<br>value: any</td>
        <td></td>
        <td>The value of the input element.</td>
    </tr>
    <tr>
        <td>@Input<br>format: string</td>
        <td></td>
        <td>
            The format in which the date value will be displayed. User must use
            this format when editing the input.
        </td>
    </tr>
    <tr>
        <td>@Input<br>label: string</td>
        <td></td>
        <td>Text to be placed next to the date component.</td>
    </tr>
    <tr>
        <td>@Input<br>name: string</td>
        <td></td>
        <td>Name attribute of the input element.</td>
    </tr>
    <tr>
        <td>@Input<br>iconSrc: string</td>
        <td></td>
        <td>The path of an icon to replace the default calendar icon.</td>
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
            If true, a red asterisk will appear before the label to indicate to
            the user that the field is required.
        </td>
    </tr>
    <tr>
        <td>@Input<br>assistiveText: string</td>
        <td></td>
        <td>Assistive text to be placed at the bottom of the input.</td>
    </tr>
    <tr>
        <td>@Input<br>invalid: boolean</td>
        <td>
            <code>false</code>
        </td>
        <td>
            If true, the input will change its appearence, showing that the value
            is not valid.
        </td>
    </tr>
    <tr>
        <td>@Output<br>onChange: EventEmitter</td>
        <td></td>
        <td>
            This function will be called when the user types within the input. 
            An object including the current sring value and the date value 
            (if the string typed is a valid date) will be passed to this function. 
            An example of this object is: {{'{'}} stringValue: value, dateValue: date {{'}'}}.
        </td>
    </tr>
    <tr>
        <td>@Output<br>onBlur: EventEmitter</td>
        <td></td>
        <td>
            This function will be called when the the input loses the focus. 
            The input value will be passed as a parameter.
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
            <code>'medium'</code>
        </td>
        <td>Size of the component ('medium' | 'large' | 'fillParent').</td>
    </tr>   
</table>

## Available date formats

Although there are a lot of date formats for differents countries and languages we only suppor the ones that are widely used (see ISO 8601)

```typescript
export enum Formats {
  "MM/DD/YYYY",
  "DD/MM/YYYY",
  "YYYY/MM/DD",
  "YYYY-MM-DD",
  "DD-MM-YYYY",
  "MM-DD-YYYY",
  "DD.MM.YYYY",
  "MM.DD.YYYY",
  "YYYY.MM.DD"
}
```

## Theming
<table>
    <tr style="background-color: grey">
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>pickerSelectedDateColor</td>
        <td><code>#FFED00</code></td>
        <td>Applies to token pickerSelectedDateColor.</td>
    </tr>
    <tr>
        <td>pickerSelectedDateBackgroundColor</td>
        <td><code>#000000</code></td>
        <td>Applies to token pickerSelectedDateBackgroundColor.</td>
    </tr>
</table>