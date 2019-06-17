# DXC Radio Component

## Usage

Include the **DxcRadioModule** into **app.module.ts** to use the radio component:

```ts
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DxcRadioModule } from '@diaas/dxc-ngx-cdk';

@NgModule({
  declarations: [AppComponent],
  imports: [DxcRadioModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

Add the following selector to any template:

```html
<dxc-radio
  [(checked)]="isChecked"
  label="Example label"
  labelPosition="before"
></dxc-radio>
```

## API reference

The API properties are the following:

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
        <td>Will be passed to the value attribute of the html input element. When inside a form, this value will be only submitted if the radio is checked </td>
    </tr>
    <tr>
        <td>@Input<br>label: string</td>
        <td></td>
        <td>Text to be placed next to the radio.</td>
    </tr>
    <tr>
        <td>@Input<br>labelPosition: 'before' | 'after'</td>
        <td><code>'before'</code></td>
        <td>Whether the label should appear after or before the radio.</td>
    </tr>
    <tr>
        <td>@Input<br>theme: 'light' | 'dark'</td>
        <td><code>'light'</code></td>
        <td>Uses one of the available component themes.</td>
    </tr>
    <tr>
        <td>@Input<br>name: string</td>
        <td></td>
        <td>Name attribute of the input element.</td>
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
        <td>@Output<br>checkedChange: EventEmitter</td>
        <td></td>
        <td>This event will be triggered when the radio changes its value. The new value will be passed as a parameter.</td>
    </tr>
</table>
