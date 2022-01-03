import { render, fireEvent } from "@testing-library/angular";
import { screen } from "@testing-library/dom";
import { DxcPasswordInputComponent } from "./dxc-password-input.component";
import { DxcTextInputModule } from "../dxc-text-input/dxc-text-input.module";

describe("DxcPasswordInputComponent", () => {
  test("should render dxc-password", async () => {
    await render(DxcPasswordInputComponent, {
      componentProperties: {
        label: "test-input",
        helperText: "helper-text",
      },
      imports: [DxcTextInputModule],
    });

    expect(screen.queryByText("test-input")).toBeInTheDocument();
    expect(screen.queryByText("helper-text")).toBeInTheDocument();
  });

  test("should clear input password", async () => {
    const onChange = jest.fn();
    await render(DxcPasswordInputComponent, {
      componentProperties: {
        label: "test-input",
        helperText: "helper-text",
        value: "password-test",
        clearable: true,
        onChange: {
          emit: onChange,
        } as any,
      },
      imports: [DxcTextInputModule],
    });

    const btn = screen.getByLabelText("Clear");

    expect(screen.queryByText("test-input")).toBeInTheDocument();
    expect(screen.getByDisplayValue("password-test")).toBeTruthy();
    fireEvent.click(btn);
    expect(onChange).toHaveBeenCalledWith("");
  });

  test("should mask input password", async () => {
    const onChange = jest.fn();
    await render(DxcPasswordInputComponent, {
      componentProperties: {
        label: "test-input",
        helperText: "helper-text",
        value: "password-test",
        onChange: {
          emit: onChange,
        } as any,
      },
      imports: [DxcTextInputModule],
    });
    const input = <HTMLInputElement>screen.getByRole("textbox");
    const btn = screen.getByLabelText("Action");

    expect(screen.getByDisplayValue("password-test")).toBeTruthy();
    expect(input.type).toBe("password");
    fireEvent.click(btn);
    expect(input.type).toBe("text");
    fireEvent.click(btn);
    expect(input.type).toBe("password");
  });

  test("controlled dxc-password error pattern", async () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();

    await render(DxcPasswordInputComponent, {
      componentProperties: {
        label: "test-input",
        clearable: true,
        value: "initial",
        pattern: ".{10,15}",
        onChange: {
          emit: onChange,
        } as any,
        onBlur: {
          emit: onBlur,
        } as any,
      },
      imports: [DxcTextInputModule],
    });

    const input = <HTMLInputElement>screen.getByRole("textbox");
    input.focus();
    expect(input).toHaveFocus();
    expect(screen.getByDisplayValue("initial"));
    fireEvent.input(input, { target: { value: "new value" } });
    expect(onChange).toHaveBeenCalledWith("new value");
    expect(screen.getByDisplayValue("initial"));
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalledWith({ error: "Please use a valid pattern", value: "initial" });
  });

  test("controlled dxc-password onError length", async () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const lengthLimit = { min: 2, max: 5 };

    await render(DxcPasswordInputComponent, {
      componentProperties: {
        label: "test-input",
        clearable: true,
        value: "initial",
        length: lengthLimit,
        onChange: {
          emit: onChange,
        } as any,
        onBlur: {
          emit: onBlur,
        } as any,
      },
      imports: [DxcTextInputModule],
    });

    const input = <HTMLInputElement>screen.getByRole("textbox");
    input.focus();
    expect(input).toHaveFocus();
    expect(screen.getByDisplayValue("initial"));
    fireEvent.input(input, { target: { value: "new value" } });
    expect(onChange).toHaveBeenCalledWith("new value");
    expect(screen.getByDisplayValue("initial"));
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalledWith({ error: "Min length 2, Max length 5", value: "initial" });
  });
});
