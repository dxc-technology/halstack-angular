import { render } from "@testing-library/angular";
import { DxcSpinnerComponent } from "./dxc-spinner.component";
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from "@angular/platform-browser-dynamic/testing";
import { TestBed } from "@angular/core/testing";

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

describe("DxcSpinner tests", () => {
  test("should render dxc-spinner", async () => {
    const spinner = await render(DxcSpinnerComponent, {
      componentProperties: {
        label: "label-spinner",
      },
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
    });
    expect(spinner.getByText("30%")).toBeTruthy();
  });
});
