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
      template: `<dxc-button type="basic">
        Button <mat-icon>home</mat-icon>
      </dxc-button>
      <dxc-button type="basic" disabled>
        Button <mat-icon>home</mat-icon>
      </dxc-button>`,
      props: {
        button
      }
    }),
    { notes: 'Basic DXC Button' }
  )
  .add(
    'Raised',
    () => ({
      template: `<dxc-button type="raised">
        Button <mat-icon>person</mat-icon>
      </dxc-button>
      <dxc-button type="raised" disabled>
        Button <mat-icon>person</mat-icon>
      </dxc-button>`,
      props: {
        button
      }
    }),
    { notes: 'Raised DXC Button' }
  )
  .add(
    'Outlined',
    () => ({
      template: `<dxc-button type="outlined">
        Button <mat-icon>info</mat-icon>
      </dxc-button>
      <dxc-button type="raised" disabled>
        Button <mat-icon>info</mat-icon>
      </dxc-button>`,
      props: {
        button
      }
    }),
    { notes: 'Outlined DXC Button' }
  )
  .add(
    'Flat',
    () => ({
      template: `<dxc-button type="flat">
        Button <mat-icon>info</mat-icon>
      </dxc-button>
      <dxc-button type="flat" disabled>
        Button <mat-icon>info</mat-icon>
      </dxc-button>`,
      props: {
        button
      }
    }),
    { notes: 'Flat DXC Button' }
  );
