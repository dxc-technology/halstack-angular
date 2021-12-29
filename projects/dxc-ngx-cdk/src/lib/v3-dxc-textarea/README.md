# DXC Textarea Component

## Overview

The DXC Textarea Component allows the user to introduce text with multiline.

## Usage

```html
<v3-dxc-textarea
  label="Textarea label"
  [value]="inputValue"
  assistiveText="assistive text"
  (onChange)="onChange($event)"
  margin="medium"
  required="true"
>
</v3-dxc-textarea>
```

Include the **V3DxcTextareaModule** into **app.module.ts** to use the textarea component:

```ts
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { V3DxcTextareaModule } from "@dxc-technology/halstack-angular";

@NgModule({
  declarations: [AppComponent],
  imports: [V3DxcTextareaModule],
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
        <td>@Input<br>value: string</td>
        <td></td>
        <td>
        Value of the input element. If undefined, the component will be
        uncontrolled and the value will be managed internally by the component.
        </td>
    </tr>
    <tr>
        <td>@Input<br>label: string</td>
        <td></td>
        <td>Text to be placed next to the input.</td>
    </tr>
    <tr>
        <td>@Input<br>assistiveText: string</td>
        <td></td>
        <td>Assistive text to be placed bellow the input.</td>
    </tr>
    <tr>
        <td>@Input<br>name: string</td>
        <td></td>
        <td>Name attribute of the input element.</td>
    </tr>
    <tr>
        <td>@Input<br>numRows: number</td>
        <td><code>4</code></td>
        <td>Number of rows of the textarea.</td>
    </tr>
    <tr>
        <td>@Input<br>placeholder: string</td>
        <td></td>
        <td>Text to be put as placeholder in the textarea.</td>
    </tr>
    <tr>
        <td>@Input<br>disabled: boolean</td>
        <td><code>false</code></td>
        <td>If true, the component will be disabled.</td>
    </tr>
    <tr>
        <td>@Input<br>required: boolean</td>
        <td><code>false</code></td>
        <td>
        If true, the input will change its appearence showing that the value is
        required.
        </td>
    </tr>
    <tr>
        <td>@Input<br>invalid: boolean</td>
        <td><code>false</code></td>
        <td>
        If true, the input will change its appearence showing that the value is
        invalid.
        </td>
    </tr>
    <tr>
        <td>@Output<br>onChange: EventEmitter</td>
        <td></td>
        <td>
        This function will be called when the user changes the value of the input.
        The new value will be passed as a parameter.
        </td>
    </tr>
    <tr>
        <td>@Output<br>onBlur: EventEmitter</td>
        <td></td>
        <td>
        This function will be called when the the input loses the focus. The input
        value will be passed as a parameter.
        </td>
    </tr>
    <tr>
        <td>@Input<br>margin: any (string | object)</td>
        <td></td>
        <td>
        Size of the margin to be applied to the component ('xxsmall' | 'xsmall' |
        'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'). You can pass an
        object with 'top', 'bottom', 'left' and 'right' properties in order to
        specify different padding sizes.
        </td>
    </tr>
    <tr>
        <td>@Input<br>size: any (string | object)</td>
        <td><code>'medium'</code></td>
        <td>
        Size of the component ('small' | 'medium' | 'large' | 'fillParent').
        </td>
    </tr>
    <tr>
      <td>@Input<br>tabIndexValue: number</td>
      <td><code>0</code></td>
      <td>
        Value of the tabindex.
      </td>
    </tr>
</table>

## Theming

No available tokens.
