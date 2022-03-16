import { render, fireEvent } from "@testing-library/angular";
import { DxcRadioComponent } from "./dxc-radio.component";
import { MatRadioModule } from "@angular/material/radio";
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from "@angular/platform-browser-dynamic/testing";
import { TestBed } from "@angular/core/testing";

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

describe("DxcRadio tests", () => {
  test("should render dxc-radio", async () => {
    const { getByText } = await render(DxcRadioComponent, {
      componentProperties: { label: "test-radio" },
      imports: [MatRadioModule],
    });

    expect(getByText("test-radio"));
  });

  test("Uncontrolled dxc-radio", async () => {
    const onClickFunction = jest.fn();
    const dxcRadio = await render(DxcRadioComponent, {
      componentProperties: {
        label: "test-radio",
        onChange: { emit: onClickFunction } as any,
      },
      imports: [MatRadioModule],
    });
    expect(dxcRadio);

    const input = <HTMLInputElement>dxcRadio.getByRole("radio");
    expect(input.checked).toBeFalsy();
    const dxcInput = dxcRadio.getByText("test-radio");
    fireEvent.click(dxcInput);
    expect(onClickFunction).toHaveBeenCalledWith(true);
    expect(input.checked).toBeTruthy();
  });

  test("Controlled dxc-radio", async () => {
    const onClickFunction = jest.fn();
    const dxcRadio = await render(DxcRadioComponent, {
      componentProperties: {
        label: "test-radio",
        checked: false,
        onChange: { emit: onClickFunction } as any,
      },
      imports: [MatRadioModule],
    });
    expect(dxcRadio);

    const input = <HTMLInputElement>dxcRadio.getByRole("radio");
    expect(input.checked).toBeFalsy();
    const dxcInput = dxcRadio.getByText("test-radio");
    fireEvent.click(dxcInput);
    expect(onClickFunction).toHaveBeenCalledWith(true);
    expect(input.checked).toBeFalsy();
  });
});
