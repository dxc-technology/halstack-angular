import { DxcNumberInputComponent } from "./dxc-number-input.component";

import { render, fireEvent, screen } from "@testing-library/angular";
import { DxcTextInputModule } from "../dxc-text-input/dxc-text-input.module";
import { waitFor } from "@testing-library/dom";
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from "@angular/platform-browser-dynamic/testing";
import { TestBed } from "@angular/core/testing";

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

describe("DxcNumberInputComponent", () => {
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

  test("should render defaultValue", async () => {
    await render(DxcNumberInputComponent, {
      componentProperties: {
        label: "test-input",
        helperText: "helper-text",
        defaultValue: "4",
      },
      imports: [DxcTextInputModule],
    });

    expect(screen.queryByText("test-input")).toBeInTheDocument();
    expect(screen.queryByText("helper-text")).toBeInTheDocument();
    expect(screen.getByDisplayValue("4")).toBeTruthy();
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

  test("increase should call onChange in dxc-number", async () => {
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
    expect(onChange).toHaveBeenCalledWith({ value: "10", error: undefined });
  });

  test("decrease should call onChange in dxc-number", async () => {
    const onChange = jest.fn();
    const dxcNumber = await render(DxcNumberInputComponent, {
      componentProperties: {
        label: "test-input",
        helperText: "helper-text",
        min: 5,
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
    fireEvent.click(screen.getByLabelText("Decrement"));
    expect(onChange).toHaveBeenCalledWith({ value: "5", error: undefined });
  });

  test("controlled dxc-number", async () => {
    const onChange = jest.fn();
    await render(DxcNumberInputComponent, {
      componentProperties: {
        label: "test-input",
        helperText: "helper-text",
        value: "4",
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
    expect(onChange).toHaveBeenCalledWith({ value: "10", error: undefined });
    expect(screen.getByDisplayValue("4")).toBeTruthy();
  });

  test("should call onBlur in dxc-number", async () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    await render(DxcNumberInputComponent, {
      componentProperties: {
        label: "test-input",
        helperText: "helper-text",
        value: "4",
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
    expect(onChange).toHaveBeenCalledWith({ value: "10", error: undefined });
    expect(screen.getByDisplayValue("4"));
    fireEvent.blur(input);
    waitFor(() => {
      expect(onBlur).toHaveBeenCalledWith({ error: undefined, value: "4" });
    });
  });
});
