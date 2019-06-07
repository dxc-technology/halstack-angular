import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { DxcSliderComponent } from './dxc-slider.component';
import { MatSliderModule } from '@angular/material';

storiesOf('Checkbox', module)
  .addDecorator(
    moduleMetadata({
      imports: [MatSliderModule],
      declarations: [DxcSliderComponent]
    })
  )
  .add(
    'Normal',
    () => ({
      template: `
      <dxc-checkbox [(ngModel)]="checked" text="Checkbox 1" (change)="onChange($event)"></dxc-checkbox>
      <dxc-checkbox [(ngModel)]="checked" labelPosition="before" text="Checkbox 2"></dxc-checkbox>
      <dxc-checkbox [(ngModel)]="checked" labelPosition="after" text="Checkbox 3"></dxc-checkbox>
      <dxc-checkbox disabled required labelPosition="before" text="Checkbox 4"></dxc-checkbox>
      <dxc-checkbox indeterminate text="Checkbox 5"></dxc-checkbox>
      <dxc-checkbox></dxc-checkbox>
      <dxc-checkbox indeterminate (change)="onChange($event)"
        (indeterminateChange)="onIndeterminateChange($event)" required text="Checkbox 7"></dxc-checkbox>
      `,
      props: {
        onChange: action('Change fired!'),
        onIndeterminateChange: action('Indeterminate change fired!')
      }
    }),
    { notes: 'Normal DXC Checkbox' }
  );
