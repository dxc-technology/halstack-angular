import { render, fireEvent } from "@testing-library/angular";
import { screen } from "@testing-library/dom";
import { DxcProgressbarComponent } from "./dxc-progressbar.component";
import { TestBed } from "@angular/core/testing";
import { MatProgressBarModule } from '@angular/material';

describe("DxcProgressbar tests", () => {
  test("should render dxc-progressbar", async () => {
    const progress = await render(DxcProgressbarComponent, {
      componentProperties: {
        label:"label-progressbar"
      },
      imports: [MatProgressBarModule]
    });
    expect(progress.getByText("label-progressbar")).toBeTruthy();
    });

    test("should set value", async () => {
        const progress = await render(DxcProgressbarComponent, {
          componentProperties: {
            label:"label-progressbar",
            value:30,
            showValue:true
          },
          imports: [MatProgressBarModule]
        });
        expect(progress.getByText("30%")).toBeTruthy();
    });
});