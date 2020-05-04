import { render, fireEvent } from "@testing-library/angular";
import { DxcToggleComponent } from "./dxc-toggle.component";
import { MatButtonToggleModule } from "@angular/material";

describe("DxcToggle tests", () => {
  test("should render dxc-toggle", async () => {
    const toggle = await render(DxcToggleComponent, {
      componentProperties: { label: "test-toggle" },
      imports: [MatButtonToggleModule]
    });

    expect(toggle.getByText("test-toggle"));
  });

  test("Calls correct function on click", async () => {
    const onClickFunction = jest.fn();
    const { getByText } = await render(DxcToggleComponent, {
      componentProperties: {
        label: "test-toggle",
        onClick: { emit: onClickFunction } as any
      },
      imports: [MatButtonToggleModule]
    });

    const toggle = getByText("test-toggle");
    fireEvent.click(toggle);
    expect(onClickFunction).toHaveBeenCalledWith(true);
  });

  test("Calls correct function on click", async () => {
    const onClickFunction = jest.fn();
    const { getByText } = await render(DxcToggleComponent, {
      componentProperties: {
        label: "test-toggle",
        onClick: { emit: onClickFunction } as any,
        selected: true
      },
      imports: [MatButtonToggleModule]
    });

    const toggle = getByText("test-toggle");
    fireEvent.click(toggle);
    expect(onClickFunction).toHaveBeenCalledWith(false);
  });
});
