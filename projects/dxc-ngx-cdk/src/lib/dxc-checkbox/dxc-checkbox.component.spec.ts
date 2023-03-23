import { render, fireEvent } from "@testing-library/angular";
import { DxcCheckboxComponent } from "./dxc-checkbox.component";
import { MatLegacyCheckboxModule as MatCheckboxModule } from "@angular/material/legacy-checkbox";

describe("DxcCheckbox tests", () => {
  test("should render dxc-checkbox", async () => {
    const { getByText } = await render(DxcCheckboxComponent, {
      componentProperties: { label: "test-checkbox" },
      imports: [MatCheckboxModule],
    });

    expect(getByText("test-checkbox"));
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
