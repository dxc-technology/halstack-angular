import { render, fireEvent } from "@testing-library/angular";
import { DxcSwitchComponent } from "./dxc-switch.component";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from "@angular/platform-browser-dynamic/testing";
import { TestBed } from "@angular/core/testing";

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

describe("DxcSwitch tests", () => {
  test("should render dxc-switch", async () => {
    const dxcSwitch = await render(DxcSwitchComponent, {
      componentProperties: { label: "test-switch" },
      imports: [MatSlideToggleModule],
    });

    expect(dxcSwitch.getByText("test-switch"));
  });

  test("uncontrolled dxc-switch functionality", async () => {
    const onClickFunction = jest.fn();
    const dxcSwitch = await render(DxcSwitchComponent, {
      componentProperties: {
        label: "test-switch",
        onChange: { emit: onClickFunction } as any,
      },
      imports: [MatSlideToggleModule],
    });
    const input = <HTMLInputElement>dxcSwitch.getByRole("switch");
    expect(input.checked).toBeFalsy();
    fireEvent.click(dxcSwitch.getByText("test-switch"));
    expect(onClickFunction).toHaveBeenCalledWith(true);
    expect(input.checked).toBeTruthy();
  });

  test("controlled dxc-switch functionality", async () => {
    const onClickFunction = jest.fn();
    const dxcSwitch = await render(DxcSwitchComponent, {
      componentProperties: {
        label: "test-switch",
        checked: true,
        onChange: { emit: onClickFunction } as any,
      },
      imports: [MatSlideToggleModule],
    });
    const input = <HTMLInputElement>dxcSwitch.getByRole("switch");
    expect(input.checked).toBeTruthy();
    fireEvent.click(dxcSwitch.getByText("test-switch"));
    expect(onClickFunction).toHaveBeenCalledWith(false);
    expect(input.checked).toBeTruthy();
  });
});
