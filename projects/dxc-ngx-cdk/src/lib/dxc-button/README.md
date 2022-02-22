# DXC Button Component

## Overview

The DXC Button Component is a clickable element.

## Usage

```html
<dxc-button
  mode="primary"
  label="Basic Button"
  (onClick)="onClick()"
  margin="medium"
></dxc-button>
```

Include the **DxcButtonModule** into **app.module.ts** to use the button component:

```ts
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { DxcButtonModule } from "@dxc-technology/halstack-angular";

@NgModule({
  declarations: [AppComponent],
  imports: [DxcButtonModule],
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
      <td>@Input<br>'primary' | 'secondary' | 'text'</td>
      <td>
        <code>'primary'</code>
      </td>
      <td>Uses on of the available button modes.</td>
    </tr>
    <tr>
      <td>@Input<br>label: string</td>
      <td></td>
      <td>Text to be placed next to the button.</td>
    </tr>
    <tr>
      <td>@Input<br>iconSrc: string</td>
      <td></td>
      <td>URL of the icon that will be placed next to the button label.</td>
    </tr>
    <tr>
      <td>@Input<br>iconPosition: 'before' | 'after'</td>
      <td>
        <code>'before'</code>
      </td>
      <td>Whether the icon should appear after or before the label.</td>
    </tr>
    <tr>
      <td>@Input<br>disabled: boolean</td>
      <td>
        <code>false</code>
      </td>
      <td>If true, the component will be disabled.</td>
    </tr>
    <tr>
      <td>@Output<br>onClick: EventEmitter</td>
      <td></td>
      <td>
        This function will be called when the user clicks the button. The
        event object will be passed as a parameter.
      </td>
    </tr>
    <tr>
      <td>@Input<br>margin: string | object</td>
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
      <td></td>
      <td>
        Size of the component ('small' | 'medium' | 'large' | 'fillParent' |
        'fitContent').
      </td>
    </tr>
    <tr>
      <td>@Input<br>tabIndexValue: number</td>
      <td></td>
      <td>
        Value of the tabindex.
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
      <td>
        <code>#6F2C91</code>
      </td>
      <td>Applies to token primaryBackgroundColor and secondaryBorderColor in primary and secondary mode.</td>
    </tr>
    <tr>
      <td>hoverColor</td>
      <td>
        <code>#000000</code>
      </td>
      <td>Applies to token hoverBackgroundColor, hoverOutlinedColor and hoverBackgroundColor in primary, secondary and text mode.</td>
    </tr>
    <tr>
      <td>primaryFontColor</td>
      <td>
        <code>#FFFFFF</code>
      </td>
      <td>Applies to token primaryTextColor in primary mode.</td>
    </tr>
    <tr>
      <td>primaryHoverFontColor</td>
      <td>        
        <code>#FFFFFF</code>
      </td>
      <td>Applies to token hoverTextColor in primary mode.</td>
    </tr>
    <tr>
      <td>secondaryFontColor</td>
      <td>
        <code>#000000</code>
      </td>
      <td>Applies to token secondaryTextColor secondary mode.</td>
    </tr>
    <tr>
      <td>secondaryHoverFontColor</td>
        <td>
          <code>#000000</code>
        </td>
      <td>Applies to token hoverTextColor in secondary mode.</td>
    </tr>
    <tr>
      <td>textFontColor</td>
      <td>
        <code>#6F2C91</code>
      </td>
      <td>Applies to token textTextColor in text mode.</td>
    </tr>
    <tr>
      <td>textHoverFontColor</td>
      <td>
        <code>#FFFFFF</code>
      </td>
      <td>Applies to token hoverTextColor in text mode.</td>
    </tr>
</table>
