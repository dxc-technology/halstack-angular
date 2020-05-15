import { render, fireEvent } from '@testing-library/angular';
import { screen } from '@testing-library/dom';
import { DxcCardComponent } from './dxc-card.component'
import { MatExpansionModule} from '@angular/material';
import { MatCardModule } from '@angular/material';
import { TestBed } from '@angular/core/testing';

describe('DxcCardComponent tests', () => {
  test('should render dxc-card', async () => {
    const projection = "Content inside the ng-content!";
    const dxcCard = await render(DxcCardComponent, {
      template: `<dxc-card>${projection}</dxc-card>`,
      componentProperties: { },
      imports: [MatCardModule]
    })

    expect(dxcCard.getByText(projection));
  })

  test('dxc-card onClick', async () => {
    const projection = "Content inside the ng-content!";
    const onClickFunction = jest.fn();
    const dxcCard = await render(DxcCardComponent, {
      template: `<dxc-card (onClick)="onClickFunction($event)">${projection}</dxc-card>`,
      componentProperties: {onClickFunction},
      imports: [MatCardModule]
    })

    expect(dxcCard.getByText(projection));
    fireEvent.click(dxcCard.getByText(projection));
    expect(onClickFunction).toHaveBeenCalled();
  })
  
})