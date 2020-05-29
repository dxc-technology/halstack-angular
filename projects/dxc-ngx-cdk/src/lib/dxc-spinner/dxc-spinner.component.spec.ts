import { render, fireEvent } from "@testing-library/angular";
import { screen } from "@testing-library/dom";
import { DxcSpinnerComponent } from "./dxc-spinner.component";
import { TestBed } from "@angular/core/testing";
import { MatIconModule, MatProgressSpinnerModule } from '@angular/material';

describe("DxcSpinner tests", () => {
  test("should render dxc-spinner", async () => {
    const spinner = await render(DxcSpinnerComponent, {
      componentProperties: {
        label:"label-spinner"
      },
      imports: [MatIconModule,MatProgressSpinnerModule]
    });
    expect(spinner.getByText("label-spinner")).toBeTruthy();
    });

    test("should set value", async () => {
        const spinner = await render(DxcSpinnerComponent, {
          componentProperties: {
            label:"label-spinner",
            value:30,
            showValue:true
          },
          imports: [MatIconModule,MatProgressSpinnerModule]
        });
        expect(spinner.getByText("30%")).toBeTruthy();
    });
});