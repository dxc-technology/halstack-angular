import { render, fireEvent, waitFor } from "@testing-library/angular";
import { screen } from "@testing-library/dom";
import { CommonModule } from "@angular/common";
import { DxcNewInputPasswordComponent } from "./dxc-new-input-password.component";
import { DxcNewInputTextModule } from "../dxc-new-input-text/dxc-new-input-text.module";

describe("DxcNewInputPasswordComponent", () => {
  test("should render dxc-new-input-password", async () => {
    const input = await render(DxcNewInputPasswordComponent, {
      componentProperties: {
        label: "test-input",
        helperText: "helper-text",
      },
      imports: [CommonModule, DxcNewInputTextModule],
    });

    expect(input.getByText("test-input"));
    expect(input.getByText("helper-text"));
  });

  test("should clear input password", async () => {
    const onChange = jest.fn();
    const input = await render(DxcNewInputPasswordComponent, {
      template: `<dxc-new-input-password
            label="Input label"
            helperText="helper text"
            margin="small"
            value="password-test"
            (onChange)="onChange($event)"
          ></dxc-new-input-password>`,
      imports: [CommonModule, DxcNewInputTextModule],
      componentProperties: { onChange },
    });

    expect(input.getByText("Input label"));
    expect(input.getByText("helper text"));
    expect(screen.getByDisplayValue("password-test")).toBeTruthy();
    fireEvent.click(input.getByLabelText("Clear"));
    input.detectChanges();
    expect(onChange).toHaveBeenCalledWith("");
  });

  test("should mask input password", async () => {
    const onChange = jest.fn();
    const input = await render(DxcNewInputPasswordComponent, {
      template: `<dxc-new-input-password
            label="Input label"
            helperText="helper text"
            margin="small"
            value="password-test"
            (onChange)="onChange($event)"
          ></dxc-new-input-password>`,
      imports: [CommonModule, DxcNewInputTextModule],
      componentProperties: { onChange },
    });

    expect(input.getByText("Input label"));
    expect(input.getByText("helper text"));
    expect(screen.getByDisplayValue("password-test")).toBeTruthy();
    expect(document.querySelector("input[type=password]")).toBeTruthy();
    fireEvent.click(input.getByLabelText("Action"));
    input.detectChanges();
    expect(document.querySelector("input[type=text]")).toBeTruthy();
    fireEvent.click(input.getByLabelText("Action"));
    input.detectChanges();
    expect(document.querySelector("input[type=password]")).toBeTruthy();
  });

  test("controlled dxc-input-password onError pattern", async () => {
    const onInputFunction = jest.fn();
    const onBlurFunction = jest.fn();
    const onErrorFunction = jest.fn();
    const newValue = "new value";
    const dxcInput = await render(DxcNewInputPasswordComponent, {
      componentProperties: {
        label: "test-input",
        clearable: true,
        value: "initial",
        onChange: { emit: onInputFunction } as any,
        onBlur: { emit: onBlurFunction } as any,
        onError: { emit: onErrorFunction } as any,
        pattern: ".{10,15}",
      },
      imports: [CommonModule, DxcNewInputTextModule],
    });

    const input = <HTMLInputElement>dxcInput.getByRole("textbox");
    fireEvent.input(input, { target: { value: newValue } });
    expect(onInputFunction).toHaveBeenCalledWith(newValue);
    waitFor(() => {
      fireEvent.blur(input);
      expect(onBlurFunction).toHaveBeenCalledWith("initial");
      fireEvent.click(dxcInput.getByLabelText("Clear"));
      expect(onInputFunction).toHaveBeenCalledWith(
        "Please use a valid pattern"
      );
      expect(onErrorFunction).toHaveBeenCalled();
      screen.getByDisplayValue("initial");
    });
  });
});
