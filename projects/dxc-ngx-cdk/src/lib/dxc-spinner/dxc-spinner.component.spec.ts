import { render } from "@testing-library/angular";
import { DxcSpinnerComponent } from "./dxc-spinner.component";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

describe("DxcSpinner tests", () => {
  test("should render dxc-spinner", async () => {
    const spinner = await render(DxcSpinnerComponent, {
      componentProperties: {
        label: "label-spinner",
      },
      imports: [MatIconModule, MatProgressSpinnerModule],
    });
    expect(spinner.getByText("label-spinner")).toBeTruthy();
  });

  test("should set value", async () => {
    const spinner = await render(DxcSpinnerComponent, {
      componentProperties: {
        label: "label-spinner",
        value: 30,
        showValue: true,
      },
      imports: [MatIconModule, MatProgressSpinnerModule],
    });
    expect(spinner.getByText("30%")).toBeTruthy();
  });
});
