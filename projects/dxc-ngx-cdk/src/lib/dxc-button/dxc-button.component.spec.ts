import { render, fireEvent } from "@testing-library/angular";
import { DxcButtonComponent } from "./dxc-button.component";

describe("DxcButton tests", () => {
  test("should render dxc-button", async () => {
    const { getByText } = await render(DxcButtonComponent, {
      componentProperties: { label: "test-button" },
    });

    expect(getByText("test-button"));
  });

  test("Calls correct function on click", async () => {
    const onClickFunction = jest.fn();
    const { getByText } = await render(DxcButtonComponent, {
      componentProperties: {
        label: "test-button",
        onClick: { emit: onClickFunction } as any,
      },
    });

    const button = getByText("test-button");
    fireEvent.click(button);
    expect(onClickFunction).toHaveBeenCalled();
  });
});
