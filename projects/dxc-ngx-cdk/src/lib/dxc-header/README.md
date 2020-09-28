# DXC Header Component

## Overview

The DXC Header Component is a navegation container used at the top of the app.

## Usage

```html
<dxc-header margin="medium" padding="medium">
</dxc-header>
```

Include the **DxcHeaderModule** into **app.module.ts** to use the header component:

```ts
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { DxcHeaderModule } from '@dxc-technology/halstack-angular';

@NgModule({
  declarations: [AppComponent],
  imports: [DxcHeaderModule],
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
        <td>@Input<br>logoSrc: string</td>
        <td>
            <code>'default'</code>
        </td>
        <td>The path of an icon to replace the default dxc logo.</td>
    </tr>
    <tr>
        <td>@Output<br>onClick: EventEmitter</td>
        <td></td>
        <td>
            This function will be called when the user clicks the header logo.
        </td>
    </tr>
    <tr>
        <td>@Input<br>children: node</td>
        <td></td>
        <td>
            The right section of the header. Can be used to render custom content
            in this area.
        </td>
    </tr>
    <tr>
        <td>@Input<br>margin: string</td>
        <td></td>
        <td>
            Size of the bottom margin to be applied to the footer ('xxsmall' |
            'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
        </td>
    </tr>
    <tr>
        <td>@Input<br>padding: any (string | object)</td>
        <td></td>
        <td>
            Size of the padding to be applied to the custom area of the component
            ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' |
            'xxlarge'). You can pass an object with 'top', 'bottom', 'left' and
            'right' properties in order to specify different padding sizes.
        </td>
    </tr>
</table>

## Directives

Directives are used to add functionality and new syntax into HTML components. The following directives are customized and you can use them on this component.

<table>
    <tr style="background-color: grey">
        <th>Name</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>isClosable</td>
        <td>Directive to close the responsive menu when click on element.</td>
    </tr>
</table>

Here is an example of its used:

```html
  <dxc-header>
    <div id="responsive">
      <a isClosable>test</a>
    </div>  
  </dxc-header>
```

## Responsive

You can make your header responsive. You need to specify with the id attribute which HTML element you want to apply the responsive menu.

<table>
    <tr style="background-color: grey">
        <th>Name</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>responsive</td>
        <td>Content that will be displayed when the width of the device is small.</td>
    </tr>
    <tr>
        <td>unresponsive</td>
        <td>Content that will be displayed when the width of the device is large.</td>
    </tr>
</table>

Here is an example of its used:

```html
  <dxc-header>
    <div id="unresponsive">
        <a>Overview</a>
        <a>Components</a>
    </div>
    <div id="responsive">
      <ul style="list-style: none;">
        <li><a>Overview</a></li>
        <li><a>Components</a></li>
      </ul>
    </div>
  </dxc-header>
```

## Theming
<table>
    <tr style="background-color: grey">
      <th>Name</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>backgroundColor</td>
      <td>
        <code>#000000</code>
      </td>
      <td>Applies to token backgroundColor.</td>
    </tr>
    <tr>
      <td>underlinedColor</td>
      <td>
        <code>#000000</code>
      </td>
      <td>Applies to token underlinedColor.</td>
    </tr>
    <tr>
      <td>fontColor</td>
      <td>
        <code>#FFFFFF</code>
      </td>
      <td>Applies to token textColor.</td>
    </tr>
    <tr>
      <td>backgroundColorMenu</td>
      <td>        
        <code>#D9D9D9</code>
      </td>
      <td>Applies to token backgroundColorMenu.</td>
    </tr>
    <tr>
      <td>fontColorMenu</td>
      <td>
        <code>#000000</code>
      </td>
      <td>Applies to token textColorMenu.</td>
    </tr>
    <tr>
      <td>hamburguerColor</td>
        <td>
          <code>#FFFFFF</code>
        </td>
      <td>Applies to token hamburguerColor and hoverHamburguerColor (0.16 opacity).</td>
    </tr>
</table>