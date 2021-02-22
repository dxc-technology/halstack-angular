# DXC Tabs Component

## Overview

The DXC Tabs Component provides the user a navegation element with different groups of content.

## Usage

```html
<dxc-tabs margin="small" [activeTabIndex]="activeTabIndex">
  <dxc-tab label="Tab 1" (onClick)="tabClicked($event)"></dxc-tab>
  <dxc-tab label="Tab 2" (onClick)="tabClicked($event)"></dxc-tab>
  <dxc-tab label="Tab 3" (onClick)="tabClicked($event)"></dxc-tab>
</dxc-tabs>
```

Include the **DxcTabsModule** into **app.module.ts** to use the tabs component:

```ts
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { DxcTabsModule } from "@dxc-technology/halstack-angular";

@NgModule({
  declarations: [AppComponent],
  imports: [DxcTabsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

## API reference

<table>
    <tr style="background-color: grey">
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>@Input<br>activeTabIndex: number</td>
        <td><code>0</code></td>
        <td>The index of the active tab.</td>
    </tr>
        <tr>
        <td>@Input<br>iconPosition: string ('top' | 'left')</td>
        <td><code>'left'</code></td>
        <td>Position of icons in tabs.</td>
    </tr>
    <tr>
        <td>@Input<br>margin: any (string | object)</td>
        <td></td>
        <td>
        Size of the margin to be applied to the component ('xxsmall' | 'xsmall' |
        'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'). You can pass an
        object with 'top', 'bottom', 'left' and 'right' properties in order to
        specify different margin sizes.
        </td>
    </tr>
</table>

### Tab properties

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
        <td>Text to be placed within the tab.</td>
    </tr>
    <tr>
        <td>@Input<br>iconSrc: string</td>
        <td></td>
        <td>The path of an icon to be placed within the tab.</td>
    </tr>
    <tr>
        <td>@Input<br>disabled: boolean</td>
        <td><code>false</code></td>
        <td>Whether the tab is disabled.</td>
    </tr>
	<tr>
        <td>@Output<br>onTabClick: EventEmitter</td>
        <td></td>
        <td>This function will be called when the user clicks on a tab. The index of the clicked tab will be passed as a parameter.</td>
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
        <td>selectedUnderlinedColor</td>
        <td><code>#6F2C91</code></td>
        <td>Applies to token selectedUnderlinedColor.</td>
    </tr>
    <tr>
        <td>selectedFontColor</td>
        <td><code>#000000</code></td>
        <td>Applies to token selectedColor.</td>
    </tr>
    <tr>
        <td>selectedBackgroundColor</td>
        <td><code>#FFFFFF</code></td>
        <td>Applies to token selectedBackgroundColor.</td>
    </tr>
</table>
