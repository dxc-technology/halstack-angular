import { render, fireEvent } from "@testing-library/angular";
import { DxcTextInputComponent } from "./dxc-input-text.component";
import { MatInputModule } from "@angular/material";

describe("DxcTextInputComponent", () => {
  test("should render dxc-input-text", async () => {
    const { getByText } = await render(DxcTextInputComponent, {
      componentProperties: {
        label: "test-input",
        assistiveText: "assistive text"
      },
      imports: [MatInputModule]
    });

    expect(getByText("test-input"));
    expect(getByText("assistive text"));
  });

  test("uncontrolled dxc-input-text input change and blur", async () => {
    const onInputFunction = jest.fn();
    const onBlurFunction = jest.fn();
    const newValue = "new value";
    const { getByRole } = await render(DxcTextInputComponent, {
      componentProperties: {
        label: "test-input",
        onChange: { emit: onInputFunction } as any,
        onBlur: { emit: onBlurFunction } as any
      },
      imports: [MatInputModule]
    });

    const input = <HTMLInputElement>(getByRole("textbox"));
    fireEvent.input(input, { target: { value: newValue } });
    expect(onInputFunction).toHaveBeenCalledWith(newValue);
    fireEvent.blur(input);
    expect(onBlurFunction).toHaveBeenCalledWith(newValue);
  });

  test("controlled dxc-input-text input change and blur", async () => {
    const onInputFunction = jest.fn();
    const onBlurFunction = jest.fn();
    const newValue = "new value";
    const defaultValue = "default value";
    const dxcText = await render(DxcTextInputComponent, {
      componentProperties: {
        label: "test-input",
        value: defaultValue,
        onChange: { emit: onInputFunction } as any,
        onBlur: { emit: onBlurFunction } as any
      },
      imports: [MatInputModule]
    });

    const input = <HTMLInputElement>(dxcText.getByRole("textbox"));
    fireEvent.input(input, { target: { value: newValue } });
    expect(onInputFunction).toHaveBeenCalledWith(newValue);
    fireEvent.blur(input);
    expect(onBlurFunction).toHaveBeenCalledWith(defaultValue);
  });

  test("dxc-input-text prefix click", async () => {
    const onClickFunction = jest.fn();
    const { getByText } = await render(DxcTextInputComponent, {
      componentProperties: {
        label: "test-input",
        assistiveText: "assistive text",
        prefix: "pr",
        suffix: "su",
        onClickPrefix: { emit: onClickFunction } as any
      },
      imports: [MatInputModule]
    });

    expect(getByText("pr"));
    fireEvent.click(getByText("pr"));
    expect(onClickFunction).toHaveBeenCalled();
  });

  test("dxc-input-text suffix click", async () => {
    const onClickFunction = jest.fn();
    const { getByText } = await render(DxcTextInputComponent, {
      componentProperties: {
        label: "test-input",
        assistiveText: "assistive text",
        prefix: "pr",
        suffix: "su",
        onClickSuffix: { emit: onClickFunction } as any
      },
      imports: [MatInputModule]
    });

    expect(getByText("su"));
    fireEvent.click(getByText("su"));
    expect(onClickFunction).toHaveBeenCalled();
  });
});
