import { DxcNumberInputComponent } from "./dxc-number-input.component";

import { render, fireEvent, screen } from "@testing-library/angular";
import { DxcTextInputModule } from "../dxc-text-input/dxc-text-input.module";
import { waitFor } from "@testing-library/dom";

describe("DxcInputNumberComponent", () => {
  test("should render dxc-number", async () => {
    await render(DxcNumberInputComponent, {
      componentProperties: {
        label: "test-input",
        helperText: "helper-text",
      },
      imports: [DxcTextInputModule],
    });

    expect(screen.queryByText("test-input")).toBeInTheDocument();
    expect(screen.queryByText("helper-text")).toBeInTheDocument();
  });

  test("should render error dxc-number", async () => {
    await render(DxcNumberInputComponent, {
      componentProperties: {
        label: "test-input",
        helperText: "helper-text",
        error: "important error",
      },
      imports: [DxcTextInputModule],
    });

    expect(screen.queryByText("test-input")).toBeInTheDocument();
    expect(screen.queryByText("helper-text")).toBeInTheDocument();
    expect(screen.queryByText("important error")).toBeInTheDocument();
  });

  test("should call onChange in dxc-number", async () => {
    const onChange = jest.fn();
    const dxcNumber = await render(DxcNumberInputComponent, {
      componentProperties: {
        label: "test-input",
        helperText: "helper-text",
        min: 10,
        max: 100,
        step: 5,
        onChange: {
          emit: onChange,
        } as any,
      },
      imports: [DxcTextInputModule],
    });

    const input = <HTMLInputElement>screen.getByRole("textbox");

    expect(screen.queryByText("test-input")).toBeInTheDocument();
    input.focus();
    expect(input).toHaveFocus();
    fireEvent.click(screen.getByLabelText("Increment"));
    dxcNumber.detectChanges();
    waitFor(() => {
      expect(onChange).toHaveBeenCalledWith(10);
    });
    fireEvent.click(screen.getByLabelText("Increment"));
    dxcNumber.detectChanges();
    waitFor(() => {
      expect(onChange).toHaveBeenCalledWith(15);
    });
    fireEvent.click(screen.getByLabelText("Increment"));
    dxcNumber.detectChanges();
    waitFor(() => {
      expect(onChange).toHaveBeenCalledWith(20);
    });
    fireEvent.click(screen.getByLabelText("Decrement"));
    dxcNumber.detectChanges();
    waitFor(() => {
      expect(onChange).toHaveBeenCalledWith(15);
    });
  });

  test("controlled dxc-number", async () => {
    const onChange = jest.fn();
    await render(DxcNumberInputComponent, {
      componentProperties: {
        label: "test-input",
        helperText: "helper-text",
        value: 4,
        min: 1,
        max: 100,
        step: 5,
        onChange: {
          emit: onChange,
        } as any,
      },
      imports: [DxcTextInputModule],
    });

    const input = <HTMLInputElement>screen.getByRole("textbox");

    expect(screen.queryByText("test-input")).toBeInTheDocument();
    input.focus();
    expect(input).toHaveFocus();
    expect(input.step).toBe("5");
    expect(input.min).toBe("1");
    expect(input.max).toBe("100");
    expect(screen.getByDisplayValue("4")).toBeTruthy();
    fireEvent.input(input, { target: { value: "10" } });
    expect(onChange).toHaveBeenCalledWith("10");
    expect(screen.getByDisplayValue("4")).toBeTruthy();
  });

  test("should call onBlur in dxc-number", async () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    await render(DxcNumberInputComponent, {
      componentProperties: {
        label: "test-input",
        helperText: "helper-text",
        value: 4,
        min: 1,
        max: 100,
        step: 5,
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

    expect(screen.queryByText("test-input")).toBeInTheDocument();
    input.focus();
    expect(input).toHaveFocus();
    expect(input.step).toBe("5");
    expect(input.min).toBe("1");
    expect(input.max).toBe("100");
    expect(screen.getByDisplayValue("4"));
    fireEvent.input(input, { target: { value: "10" } });
    expect(onChange).toHaveBeenCalledWith("10");
    expect(screen.getByDisplayValue("4"));
    fireEvent.blur(input);
    waitFor(() => {
      expect(onBlur).toHaveBeenCalledWith({ error: undefined, value: "4" });
    });
  });
});
