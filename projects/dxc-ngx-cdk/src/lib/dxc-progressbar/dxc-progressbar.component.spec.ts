import { render } from "@testing-library/angular";
import { DxcProgressbarComponent } from "./dxc-progressbar.component";
import { MatProgressBarModule } from "@angular/material/progress-bar";

describe("DxcProgressbar tests", () => {
  test("should render dxc-progressbar", async () => {
    const progress = await render(DxcProgressbarComponent, {
      componentProperties: {
        label: "label-progressbar",
      },
      imports: [MatProgressBarModule],
    });
    expect(progress.getByText("label-progressbar")).toBeTruthy();
  });

  test("should set value", async () => {
    const progress = await render(DxcProgressbarComponent, {
      componentProperties: {
        label: "label-progressbar",
        value: 30,
        showValue: true,
      },
      imports: [MatProgressBarModule],
    });
    expect(progress.getByText("30%")).toBeTruthy();
  });
});
