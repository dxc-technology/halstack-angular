# DXC Checkbox Component

## Overview

The DXC Checkbox Component provides to the user the ability to select a true, false or indeterminate value for a field.

## Usage

```html
<dxc-checkbox
  [(checked)]="checked"
  labelPosition="before"
  text="Checkbox 1"
></dxc-checkbox>
```

Include the **DxcCheckboxModule** into **app.module.ts** to use the checkbox component:

```ts
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { DxcCheckboxModule } from "@diaas/dxc-ngx-cdk";

@NgModule({
  declarations: [AppComponent],
  imports: [DxcCheckboxModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

## API

<table>
    <tr style="background-color: grey">
        <td>Name</td>
        <td>Default</td>
        <td>Description</td>
    </tr>
    <tr>
        <td>@Input<br>checked: boolean</td>
        <td>false</td>
        <td>If true, the component is checked.</td>
    </tr>
    <tr>
        <td>@Input<br>value: any</td>
        <td></td>
        <td>Will be passed to the value attribute of the html input element. When inside a form, this value will be only submitted if the checkbox is checked </td>
    </tr>
    <tr>
        <td>@Input<br>label: string</td>
        <td></td>
        <td>Text to be placed next to the checkbox.</td>
    </tr>
    <tr>
        <td>@Input<br>labelPosition: 'before' | 'after'</td>
        <td><code>'before'</code></td>
        <td>Whether the label should appear after or before the checkbox.</td>
    </tr>
    <tr>
        <td>@Input<br>theme: 'light' | 'dark'</td>
        <td><code>'light'</code></td>
        <td>Uses one of the available component themes.</td>
    </tr>
    <tr>
        <td>@Input<br>disabled: boolean</td>
        <td><code>false</code></td>
        <td>If true, the component will be disabled.</td>
    </tr>
    <tr>
        <td>@Input<br>disableRipple: boolean</td>
        <td><code>false</code></td>
        <td>If true, the ripple effect will be disabled.</td>
    </tr>
    <tr>
        <td>@Input<br>required: boolean</td>
        <td><code>false</code></td>
        <td>If true, the component will be marked as required.</td>
    </tr>
    <tr>
        <td>@Input<br>name: string</td>
        <td></td>
        <td>Name attribute of the input element.</td>
    </tr>
    <tr>
        <td>@Output<br>checkedChange: EventEmitter</td>
        <td></td>
        <td>This event will be triggered when the checkbox changes its value. The new value will be passed as a parameter.</td>
    </tr>
</table>
