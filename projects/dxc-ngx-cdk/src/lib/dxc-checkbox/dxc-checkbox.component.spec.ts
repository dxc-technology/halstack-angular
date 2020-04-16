import { render, fireEvent } from "@testing-library/angular";
import { DxcCheckboxComponent } from "./dxc-checkbox.component";
import { MatCheckboxModule } from "@angular/material";

describe("DxcCheckbox tests", () => {
  test("should render dxc-checkbox", async () => {
    const { getByText } = await render(DxcCheckboxComponent, {
      componentProperties: { label: "test-checkbox" },
      imports: [MatCheckboxModule]
    });

    expect(getByText("test-checkbox"));
  });

  test("uncontrolled dxc-checkbox", async () => {
    const onClickFunction = jest.fn(x => {
      expect(input.checked).toBeTruthy();
      expect(x).toBeTruthy();
    });
    const dxcCheckbox = await render(DxcCheckboxComponent, {
      componentProperties: {
        label: "test-checkbox",
        checkedChange: { emit: onClickFunction } as any
      },
      imports: [MatCheckboxModule]
    });
    expect(dxcCheckbox);

    const input = <HTMLInputElement>dxcCheckbox.getByRole("checkbox");
    fireEvent.click(input);
  });
});
