import { render, fireEvent, screen } from "@testing-library/angular";
import { DxcCheckboxComponent } from "./dxc-checkbox.component";
import { MatCheckboxModule } from "@angular/material/checkbox";
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from "@angular/platform-browser-dynamic/testing";
import { TestBed } from "@angular/core/testing";

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
describe("DxcCheckbox tests", () => {
  test("should render dxc-checkbox", async () => {
    await render(DxcCheckboxComponent, {
      componentProperties: { label: "test-checkbox" },
      imports: [MatCheckboxModule],
    });

    expect(screen.getByText("test-checkbox"));
  });

  test("Uncontrolled dxc-checkbox", async () => {
    const onClickFunction = jest.fn();
    const dxcCheckbox = await render(DxcCheckboxComponent, {
      componentProperties: {
        label: "test-checkbox",
        onChange: { emit: onClickFunction } as any,
      },
      imports: [MatCheckboxModule],
    });
    expect(dxcCheckbox);

    const input = <HTMLInputElement>dxcCheckbox.getByRole("checkbox");
    expect(input.checked).toBeFalsy();
    const dxcInput = dxcCheckbox.getByText("test-checkbox");
    fireEvent.click(dxcInput);
    expect(onClickFunction).toHaveBeenCalledWith(true);
    expect(input.checked).toBeTruthy();
  });

  test("Controlled dxc-checkbox", async () => {
    const onClickFunction = jest.fn();
    const dxcCheckbox = await render(DxcCheckboxComponent, {
      componentProperties: {
        label: "test-checkbox",
        checked: true,
        onChange: { emit: onClickFunction } as any,
      },
      imports: [MatCheckboxModule],
    });
    expect(dxcCheckbox);

    const input = <HTMLInputElement>dxcCheckbox.getByRole("checkbox");
    expect(input.checked).toBeTruthy();

    const dxcInput = dxcCheckbox.getByText("test-checkbox");
    fireEvent.click(dxcInput);
    expect(onClickFunction).toHaveBeenCalledWith(false);
    expect(input.checked).toBeTruthy();
  });
});
