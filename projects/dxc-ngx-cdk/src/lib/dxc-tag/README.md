# DXC Tag Component

## Overview

The DXC Tag Component provides a label with information.

## Usage

```html
<dxc-tag margin="medium" iconSrc="{{dxcLogoPath}}" label="DXC TECHNOLOGY">
</dxc-tag>
```

Include the **DxcTagModule** into **app.module.ts** to use the tag component:

```ts
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { DxcTagModule } from "@dxc-technology/halstack-angular";

@NgModule({
  declarations: [AppComponent],
  imports: [DxcTagModule],
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
        <td>Text to be placed next inside the tag.</td>
    </tr>
    <tr>
        <td>@Input<br>labelPosition: string</td>
        <td><code>'after'</code></td>
        <td>Whether the label should appear after or before the icon.</td>
    </tr>
    <tr>
        <td>@Input<br>iconSrc: string</td>
        <td></td>
        <td>URL of the icon.</td>
    </tr>
    <tr>
        <td>@Input<br>iconBgColor: string</td>
        <td><code>'#5f249f'</code></td>
        <td>Background color of the icon section of the tag.</td>
    </tr>
    <tr>
        <td>@Input<br>linkHref: string</td>
        <td></td>
        <td>If defined, the tag will be displayed as an anchor, using this prop as "href". 
            Component will show some visual feedback on hover.</td>
    </tr>
    <tr>
        <td>@Output<br>onClick: EventEmitter</td>
        <td></td>
        <td>This function will be called when the user clicks the tag. 
            Component will show some visual feedback on hover.</td>
    </tr>
    <tr>
        <td>@Input<br>margin: string | object</td>
        <td></td>
        <td>
            Size of the margin to be applied to the component ('xxsmall' | 
            'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'). You 
            can pass an object with 'top', 'bottom', 'left' and 'right' properties 
            in order to specify different padding sizes.
        </td>
    </tr>
    <tr>
        <td>@Input<br>size: string</td>
        <td><code>'fitContent'</code></td>
        <td>Size of the component ('small' | 'medium' | 'large' | 'fillParent' | 'fitContent').</td>
    </tr>
    <tr>
        <td>@Input<br>newWindow: boolean</td>
        <td>
            <code>false</code>
        </td>
        <td>
            If true, the page is opened in a new browser tab.
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

Not available tokens.
