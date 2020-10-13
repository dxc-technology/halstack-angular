# DXC Wizard Component

## Overview

The DXC Wizard Component shows a layout where the user needs to go through several steps.

## Usage

```html
<dxc-wizard
  [currentStep]="currentStep"
  (onStepClick)="onStepClick($event)"
  [steps]="steps"
>
</dxc-wizard>
```

Include the **DxcWizardModule** into **app.module.ts** to use the wizard component:

```ts
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { DxcWizardModule } from "@dxc-technology/halstack-angular";

@NgModule({
  declarations: [AppComponent],
  imports: [DxcWizardModule],
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
        <td>@Input<br>mode: 'horizontal' | 'vertical'</td>
        <td>
            <code>'horizontal'</code>
        </td>
        <td>The wizard can be showed in horizontal or vertical.</td>
    </tr>
    <tr>
        <td>@Input<br>currentStep: number</td>
        <td>
            <code>'0'</code>
        </td>
        <td>Defines which step is marked as the current. The numeration starts in 0.</td>
    </tr>
    <tr>
        <td>@Output<br>onStepClick: EventEmitter</td>
        <td></td>
        <td>
            This function will be called when the user clicks a step. The step number will be passed as a parameter.
        </td>
    </tr>
    <tr>
        <td>@Input<br>steps: object[]</td>
        <td>
            <code>[]</code>
        </td>
        <td>
            An array of objects representing the steps. Each of them has the following properties:
            <ul>
                <li>label: Step label.</li>
                <li>description: Step description.</li>
                <li>iconSrc: URL of the icon to be displayed in the step.</li>
                <li>disabled: Whether the step is disabled or not.</li>
                <li>valid: Whether the step is valid or not.</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>@Input<br>margin: string | object</td>
        <td></td>
        <td>
            Size of the margin to be applied to the component ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'). 
            You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different margin sizes.
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
        <td>selectedBackgroundColor</td>
        <td><code>#FFED00</code></td>
        <td>Applies to token selectedBackgroundColor.</td>
    </tr>
    <tr>
        <td>selectedFont</td>
        <td><code>#000000</code></td>
        <td>Applies to token selectedFont.</td>
    </tr>
</table>
