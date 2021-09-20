import { DxcNumberComponent } from "./dxc-number.component";

import { render, fireEvent } from "@testing-library/angular";
import { screen, waitFor } from "@testing-library/dom";
import { DxcNewInputTextModule } from "../dxc-new-input-text/dxc-new-input-text.module";

describe("DxcInputNumberComponent", () => {
  test("should render dxc-number", async () => {
    const input = await render(DxcNumberComponent, {
      componentProperties: {
        label: "test-input",
        helperText: "helper-text",
      },
      imports: [DxcNewInputTextModule],
    });

    expect(input.getByText("test-input"));
    expect(input.getByText("helper-text"));
  });

  test("should render error dxc-number", async () => {
    const input = await render(DxcNumberComponent, {
      componentProperties: {
        label: "test-input",
        helperText: "helper-text",
        error: "important error",
      },
      imports: [DxcNewInputTextModule],
    });

    expect(input.getByText("test-input"));
    expect(input.getByText("helper-text"));
    expect(input.getByText("important error"));
  });

  test("should call onChange", async () => {
    const onChangeFunction = jest.fn();
    const dxcNumber = await render(DxcNumberComponent, {
      componentProperties: {
        label: "test-input",
        helperText: "helper-text",
        step: "5",
        min: "1",
        max: "100",
        onChange: { emit: onChangeFunction } as any,
      },
      imports: [DxcNewInputTextModule],
    });
    expect(dxcNumber);
    const input = <HTMLInputElement>dxcNumber.getByRole("textbox");
    expect(input.step).toBe("5");
    expect(input.min).toBe("1");
    expect(input.max).toBe("100");
    fireEvent.input(input, { target: { value: "10" } });
    expect(onChangeFunction).toHaveBeenCalledWith("10");
    expect(screen.getByDisplayValue("10"));
  });

  test("controlled input", async () => {
    const onChangeFunction = jest.fn();
    const dxcNumber = await render(DxcNumberComponent, {
      componentProperties: {
        label: "test-input",
        helperText: "helper-text",
        step: "5",
        value: "4",
        min: "1",
        max: "100",
        onChange: { emit: onChangeFunction } as any,
      },
      imports: [DxcNewInputTextModule],
    });
    expect(dxcNumber);
    const input = <HTMLInputElement>dxcNumber.getByRole("textbox");
    expect(input.step).toBe("5");
    expect(input.min).toBe("1");
    expect(input.max).toBe("100");
    expect(screen.getByDisplayValue("4"));
    fireEvent.input(input, { target: { value: "10" } });
    expect(onChangeFunction).toHaveBeenCalledWith("10");
    expect(screen.getByDisplayValue("4"));
  });

  test("should call onBlur", async () => {
    const mockFunction = jest.fn();
    const dxcNumber = await render(DxcNumberComponent, {
      componentProperties: {
        label: "test-input",
        helperText: "helper-text",
        step: "5",
        value: "4",
        min: "1",
        max: "100",
        onChange: { emit: mockFunction } as any,
        onBlur: { emit: mockFunction } as any,
      },
      imports: [DxcNewInputTextModule],
    });
    expect(dxcNumber);
    const input = <HTMLInputElement>dxcNumber.getByRole("textbox");
    expect(input.step).toBe("5");
    expect(input.min).toBe("1");
    expect(input.max).toBe("100");
    expect(screen.getByDisplayValue("4"));
    fireEvent.input(input, { target: { value: "10" } });
    expect(mockFunction).toHaveBeenCalledWith("10");
    expect(screen.getByDisplayValue("4"));
    fireEvent.blur(input);
    expect(mockFunction).toHaveBeenCalledWith("4");
  });
});
