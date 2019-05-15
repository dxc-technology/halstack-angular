import { storiesOf, moduleMetadata } from '@storybook/angular';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { DxcButtonComponent } from './dxc-button.component';

export const button = {
  type: 'basic'
};

storiesOf('Button', module)
  .addDecorator(
    moduleMetadata({
      imports: [MatButtonModule, MatIconModule],
      declarations: [DxcButtonComponent]
    })
  )
  .add(
    'Basic',
    () => ({
      template: `
      <dxc-button text="Button"></dxc-button>
      <dxc-button text="Button Disabled" disabled></dxc-button>
      <dxc-button text="Material" icon="favorite"></dxc-button>
      <dxc-button text="Font Awesome" iconType="fa" icon="fas fa-allergies" iconPosition="before"></dxc-button>
      <dxc-button icon="delete_forever"></dxc-button>
      <dxc-button text="No Ripple" disableRipple></dxc-button>`,
      props: {
        button
      }
    }),
    { notes: 'Basic DXC Button' }
  )
  .add(
    'Raised',
    () => ({
      template: `
      <dxc-button type="raised" text="Button"></dxc-button>
      <dxc-button type="raised" text="Button Disabled" disabled></dxc-button>
      <dxc-button type="raised" text="Material" icon="favorite"></dxc-button>
      <dxc-button type="raised" text="Font Awesome" iconType="fa" icon="fas fa-allergies" iconPosition="before"></dxc-button>
      <dxc-button type="raised" icon="delete_forever"></dxc-button>
      <dxc-button type="raised" text="No Ripple" disableRipple></dxc-button>`,
      props: {
        button
      }
    }),
    { notes: 'Raised DXC Button' }
  )
  .add(
    'Outlined',
    () => ({
      template: `
      <dxc-button type="outlined" text="Button"></dxc-button>
      <dxc-button type="outlined" text="Button Disabled" disabled></dxc-button>
      <dxc-button type="outlined" text="Material" icon="favorite"></dxc-button>
      <dxc-button type="outlined" text="Font Awesome" iconType="fa" icon="fas fa-allergies" iconPosition="before"></dxc-button>
      <dxc-button type="outlined" icon="delete_forever"></dxc-button>
      <dxc-button type="outlined" text="No Ripple" disableRipple></dxc-button>`,
      props: {
        button
      }
    }),
    { notes: 'Outlined DXC Button' }
  )
  .add(
    'Flat',
    () => ({
      template: `
      <dxc-button type="flat" text="Button"></dxc-button>
      <dxc-button type="flat" text="Button Disabled" disabled></dxc-button>
      <dxc-button type="flat" text="Material" icon="favorite"></dxc-button>
      <dxc-button type="flat" text="Font Awesome" iconType="fa" icon="fas fa-allergies" iconPosition="before"></dxc-button>
      <dxc-button type="flat" icon="delete_forever"></dxc-button>
      <dxc-button type="flat" text="No Ripple" disableRipple></dxc-button>`,
      props: {
        button
      }
    }),
    { notes: 'Flat DXC Button' }
  );
