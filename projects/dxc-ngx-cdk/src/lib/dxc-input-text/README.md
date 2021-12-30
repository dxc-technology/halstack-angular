# DXC Input Text Component

## Overview

The DXC Input Text Component allows the user to introduce text.

## Usage

```html
<dxc-input-text
  label="Input label"
  [value]="inputValue"
  assistiveText="assistive text"
  (onChange)="onChange($event)"
  (onBlur)="onBlur($event)"
  margin="medium"
>
</dxc-input-text>
```

Include the **DxcInputTextModule** into **app.module.ts** to use the input text component:

```ts
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { DxcInputTextModule } from "@dxc-technology/halstack-angular";

@NgModule({
  declarations: [AppComponent],
  imports: [DxcInputTextModule],
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
        <td>Value of the input element.</td>
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
        <td>@Input<br>prefix: string</td>
        <td></td>
        <td>
        Prefix to be placed before the input value. Use prefixIconSrc in case the
        prefix is an icon.
        </td>
    </tr>
    <tr>
        <td>@Input<br>suffix: string</td>
        <td></td>
        <td>
        Suffix to be placed after the input value. Use suffixIconSrc in case the
        suffix is an icon.
        </td>
    </tr>
    <tr>
        <td>@Input<br>prefixIconSrc: string</td>
        <td></td>
        <td><b>Deprecated.</b> Path of the icon to be placed before the input value.</td>
    </tr>
    <tr>
        <td>@Input<br>suffixIconSrc: string</td>
        <td></td>
        <td><b>Deprecated.</b> Path of the icon to be placed after the input value.</td>
    </tr>
    <tr>
        <td>@Input<br>name: string</td>
        <td></td>
        <td>Name attribute of the input element.</td>
    </tr>
    <tr>
        <td>@Input<br>placeholder: string</td>
        <td></td>
        <td>Text to be put as placeholder in the input.</td>
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
        <td>@Input<br>isMasked: boolean</td>
        <td><code>false</code></td>
        <td>
        If true, a mask will be displayed.
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
      <td>@Input<br>tabIndexValue: number</td>
      <td><code>0</code></td>
      <td>
        Value of the tabindex, it also applies to prefix and suffix when a function is given.
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
        <td>@Output<br>onClickPrefix: EventEmitter</td>
        <td></td>
        <td>
        This function will be called when the prefix (text or icon) is clicked.
        </td>
    </tr>
    <tr>
        <td>@Output<br>onClickSuffix: EventEmitter</td>
        <td></td>
        <td>
        This function will be called when the suffix (text or icon) is clicked.
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
        <td>@Input<br>
        autocompleteOptions: any ([string] | function: Observable &lt;Array&gt;)
        </td>
        <td><code></code></td>
        <td>
        It can be either an array or a function:
        <ul>
            <li>
            <b>Array</b>: Array of options that will be filtered by the component.
            </li>
            <li>
            <b>Function</b>: This function will be called when the user changes
            the value and when the component is initialized, this function will receive 
            the new value as parameter and should return one Observable on which we subscribe 
            to get the suggestions array.
            </li>
        </ul>
        </td>
    </tr>
</table>

### Children
#### DxcInputPrefixIcon

<table>
    <tr style="background-color: grey">
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>@Input<br>tabIndexValue: number</td>
        <td><code>0</code></td>
        <td>Tabindex value given to the preffix icon.</td>
  </tr>
    <tr>
        <td>@Output<br>onClickPrefix: EventEmitter</td>
        <td></td>
        <td>This function will be called when the prefix is clicked.</td>
  </tr>
</table>

#### DxcInputSuffixIcon

<table>
    <tr style="background-color: grey">
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>@Input<br>tabIndexValue: number</td>
        <td><code>0</code></td>
        <td>Tabindex value given to the suffix icon.</td>
  </tr>
    <tr>
        <td>@Output<br>onClickPrefix: EventEmitter</td>
        <td></td>
        <td>This function will be called when the prefix is clicked.</td>
  </tr>
</table>

## Theming

No available tokens.
