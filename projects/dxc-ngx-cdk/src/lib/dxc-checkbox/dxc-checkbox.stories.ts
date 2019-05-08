import { storiesOf, moduleMetadata } from '@storybook/angular';
import { MatCheckboxModule } from '@angular/material';
import { DxcCheckboxComponent } from './dxc-checkbox.component';

export const checkbox = {};

storiesOf('Checkbox', module)
  .addDecorator(
    moduleMetadata({
      imports: [MatCheckboxModule],
      declarations: [DxcCheckboxComponent]
    })
  )
  .add(
    'Normal',
    () => ({
      template: `<dxc-checkbox>Checkbox</dxc-checkbox>`,
      props: {
        checkbox
      }
    }),
    { notes: 'Normal DXC Checkbox' }
  );
