import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { fireEvent, render } from '@testing-library/angular';
import { screen, waitFor } from '@testing-library/dom';

import { DxcNewTextareaComponent } from './dxc-new-textarea.component';

describe('DxcNewTextareaComponent', () => {
  test("should render dxc-text-input", async () => {
    const input = await render(DxcNewTextareaComponent, {
      componentProperties: {
        label: "test-input",
        helperText: "helper-text",
      },
      imports: [CommonModule, FormsModule],
    });

    expect(input.getByText("test-input"));
    expect(input.getByText("helper-text"));
  });
  test("Renders with correct label", async () => {
    const input = await render(DxcNewTextareaComponent, {
      componentProperties: {
        label: "Example label",
      },
      imports: [CommonModule, FormsModule],
    });
    expect(input.getByText("Example label")).toBeTruthy();
  });
  test("Renders with correct label and helper text", async () => {
    const input = await render(DxcNewTextareaComponent, {
      componentProperties: {
        label: "Example label",
        helperText: "Example helper text"
      },
      imports: [CommonModule, FormsModule],
    });
    expect(input.getByText("Example label")).toBeTruthy();
    expect(input.getByText("Example helper text")).toBeTruthy();
  });
  test("Renders with correct label and optional", async () => {
    const input = await render(DxcNewTextareaComponent, {
      componentProperties: {
        label: "Example label",
        helperText: "Example helper text",
        optional: true
      },
      imports: [CommonModule, FormsModule],
    });
    expect(input.getByText("Example label")).toBeTruthy();
    expect(input.getByText("(Optional)")).toBeTruthy();
    expect(input.getByText("Example helper text")).toBeTruthy();
  });
  test("Renders with correct placeholder", async () => {
    await render(DxcNewTextareaComponent, {
      componentProperties: {
        placeholder: "Placeholder"
      },
      imports: [CommonModule, FormsModule],
    });
    const input = <HTMLInputElement>screen.getByRole("textbox");
    expect(input.getAttribute("placeholder")).toBe("Placeholder");
  });
  test("Renders with error message", async () => {
    await render(DxcNewTextareaComponent, {
      componentProperties: {
        error: "Error message"
      },
      imports: [CommonModule, FormsModule],
    });
    expect(screen.getByText("Error message")).toBeTruthy();
  });
  test("Renders with correct default rows", async () => {
    await render(DxcNewTextareaComponent, {
      componentProperties: {
        label: "Example label",
        rows: 10
      },
      imports: [CommonModule, FormsModule],
    });
    const textarea = <HTMLInputElement>screen.getByLabelText("Example label");
    expect(textarea.getAttribute("rows")).toBe("10");
  });
  test("Strict mode - Pattern constraint", async () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const dxctextarea = await render(DxcNewTextareaComponent, {
      componentProperties: {
        label: "Example label",
        placeholder: "Placeholder",
        onChange: {
          emit: onChange,
        } as any,
        onBlur: {
          emit: onBlur,
        } as any,
        margin: "medium",
        pattern: '^.*(?=.*[a-zA-Z])(?=.*\\d)(?=.*[!&$%&? "]).*$'
      },
      imports: [CommonModule, FormsModule],
    });
    const textarea = <HTMLInputElement>screen.getByLabelText("Example label");

    textarea.focus();
    expect(textarea).toHaveFocus();
    fireEvent.click(textarea);
    fireEvent.input(textarea, { target: { value: "new value" } });
    expect(onChange).toHaveBeenCalledWith("new value");
    fireEvent.blur(textarea);
    expect(onBlur).toHaveBeenCalledWith({ error: "Please use a valid pattern", value: "new value" });
    expect(screen.getByText("Please use a valid pattern")).toBeTruthy();
    expect(screen.getByDisplayValue("new value"));
    textarea.focus();
    expect(textarea).toHaveFocus();
    fireEvent.click(textarea);
    fireEvent.input(textarea, { target: { value: "pattern4&" } });
    expect(onChange).toHaveBeenCalledWith("pattern4&");
    fireEvent.blur(textarea);
    expect(onBlur).toHaveBeenCalledWith({ error: null, value: "pattern4&" });
    expect(screen.getByDisplayValue("pattern4&"));
  });
  test("Strict mode - Length constraint", async () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const length = { min: 5, max: 10 };
    await render(DxcNewTextareaComponent, {
      componentProperties: {
        label: "Example label",
        placeholder: "Placeholder",
        onChange: {
          emit: onChange,
        } as any,
        onBlur: {
          emit: onBlur,
        } as any,
        margin: "medium",
        length: length
      },
      imports: [CommonModule, FormsModule],
    });
    const textarea = <HTMLInputElement>screen.getByLabelText("Example label");
    textarea.focus();
    expect(textarea).toHaveFocus();
    fireEvent.click(textarea);
    fireEvent.input(textarea, { target: { value: "test" } });
    fireEvent.blur(textarea);
    await waitFor(() => {
      expect(onBlur).toHaveBeenCalledWith({ error: "Min length 5, Max length 10", value: "test" });
      expect(screen.getByText("Min length 5, Max length 10")).toBeTruthy();
    });
    textarea.focus();
    expect(textarea).toHaveFocus();
    fireEvent.click(textarea);
    fireEvent.input(textarea, { target: { value: "test " } });
    fireEvent.blur(textarea);
    expect(screen.queryByText("Min length 5, Max length 10")).toBeFalsy();
  });
  test("Strict mode - Pattern and length constraints", async () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const length = { min: 5, max: 10 };
    await render(DxcNewTextareaComponent, {
      componentProperties: {
        label: "Example label",
        placeholder: "Placeholder",
        onChange: {
          emit: onChange,
        } as any,
        onBlur: {
          emit: onBlur,
        } as any,
        margin: "medium",
        pattern: '^.*(?=.*[a-zA-Z])(?=.*\\d)(?=.*[!&$%&? "]).*$',
        length: length
      },
      imports: [CommonModule, FormsModule],
    });
    const textarea = <HTMLInputElement>screen.getByLabelText("Example label");

    textarea.focus();
    expect(textarea).toHaveFocus();
    fireEvent.click(textarea);
    fireEvent.input(textarea, { target: { value: "test" } });
    fireEvent.blur(textarea);
    expect(screen.getByText("Min length 5, Max length 10")).toBeTruthy();
    textarea.focus();
    expect(textarea).toHaveFocus();
    fireEvent.click(textarea);
    fireEvent.input(textarea, { target: { value: "test " } });
    fireEvent.blur(textarea);
    expect(screen.getByText("Please use a valid pattern")).toBeTruthy();
    textarea.focus();
    expect(textarea).toHaveFocus();
    fireEvent.click(textarea);
    fireEvent.input(textarea, { target: { value: "test 4" } });
    fireEvent.blur(textarea);
    expect(screen.queryByText("Please use a valid pattern")).toBeFalsy();
  });
  test("Non Strict mode - Pattern constraint", async () => {
    const onChange = jest.fn((value) => {
      expect(value).toBe("Example value");
    });
    const onBlur = jest.fn(({ value, error }) => {
      expect(value).toBe("Example value");
      expect(error).toBe("Please use a valid pattern");
    });
    await render(DxcNewTextareaComponent, {
      componentProperties: {
        label: "Example label",
        placeholder: "Placeholder",
        onChange: {
          emit: onChange,
        } as any,
        onBlur: {
          emit: onBlur,
        } as any,
        margin: "medium",
        pattern: '^.*(?=.*[a-zA-Z])(?=.*\d)(?=.*[!&$%&? "]).*$'
      },
      imports: [CommonModule, FormsModule],
    });
    const textarea = <HTMLInputElement>screen.getByLabelText("Example label");
    textarea.focus();
    expect(textarea).toHaveFocus();
    fireEvent.click(textarea);
    fireEvent.input(textarea, { target: { value: "Example value" } });
    fireEvent.blur(textarea);
  });
  test("Non Strict mode - Length constraint", async () => {
    const onChange = jest.fn((value) => {
      expect(value).toBe("Example value");
    });
    const onBlur = jest.fn(({ value, error }) => {
      expect(value).toBe("Example value");
      expect(error).toBe("Min length 5, Max length 10");
    });
    const length = { min: 5, max: 10 };
    await render(DxcNewTextareaComponent, {
      componentProperties: {
        label: "Example label",
        placeholder: "Placeholder",
        onChange: {
          emit: onChange,
        } as any,
        onBlur: {
          emit: onBlur,
        } as any,
        margin: "medium",
        length: length
      },
      imports: [CommonModule, FormsModule],
    });
    const textarea = <HTMLInputElement>screen.getByLabelText("Example label");
    textarea.focus();
    expect(textarea).toHaveFocus();
    fireEvent.click(textarea);
    fireEvent.input(textarea, { target: { value: "Example value" } });
    fireEvent.blur(textarea);
  });
  test("Non Strict mode - Pattern and length constraints", async () => {
    const onChange = jest.fn((value) => {
      expect(value).toBe("Example value");
    });
    const onBlur = jest.fn(({ value, error }) => {
      expect(value).toBe("Example value");
      expect(error).toBe("Min length 5, Max length 10");
    });
    const length = { min: 5, max: 10 };
    await render(DxcNewTextareaComponent, {
      componentProperties: {
        label: "Example label",
        placeholder: "Placeholder",
        onChange: {
          emit: onChange,
        } as any,
        onBlur: {
          emit: onBlur,
        } as any,
        margin: "medium",
        length: length
      },
      imports: [CommonModule, FormsModule],
    });
    const textarea = <HTMLInputElement>screen.getByLabelText("Example label");
    textarea.focus();
    expect(textarea).toHaveFocus();
    fireEvent.click(textarea);
    fireEvent.input(textarea, { target: { value: "Example value" } });
    fireEvent.blur(textarea);
  });
  test("onBlur function is called correctly", async () => {
    const onBlur = jest.fn();
    await render(DxcNewTextareaComponent, {
      componentProperties: {
        label: "Example label",
        onBlur: {
          emit: onBlur,
        } as any,
      },
      imports: [CommonModule, FormsModule],
    });
    const textarea = <HTMLInputElement>screen.getByLabelText("Example label");
    textarea.focus();
    expect(textarea).toHaveFocus();
    fireEvent.click(textarea);
    fireEvent.input(textarea, { target: { value: "Blur test" } });
    fireEvent.blur(textarea);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "Blur test", error: null });
  });
  test("Controlled textarea", async () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    await render(DxcNewTextareaComponent, {
      componentProperties: {
        label: "Example label",
        value: "test",
        onChange: {
          emit: onChange,
        } as any,
        onBlur: {
          emit: onBlur,
        } as any,
        margin: "medium",
      },
      imports: [CommonModule, FormsModule],
    });
    const textarea = <HTMLInputElement>screen.getByLabelText("Example label");
    textarea.focus();
    expect(textarea).toHaveFocus();
    fireEvent.click(textarea);
    fireEvent.input(textarea, { target: { value: "Controlled test" } });
    await waitFor(() => {
      expect(screen.getByDisplayValue("test"));
      expect(onChange).toHaveBeenCalledWith("Controlled test");
    });
    fireEvent.blur(textarea);
    await waitFor(() => {
      expect(onBlur).toHaveBeenCalled();
      expect(onBlur).toHaveBeenCalledWith({ value: "test", error: null });
    });

  });
  test("Uncontrolled input", async () => {
    const onChange = jest.fn();
    await render(DxcNewTextareaComponent, {
      componentProperties: {
        label: "Example label",
        onChange: {
          emit: onChange,
        } as any,
      },
      imports: [CommonModule, FormsModule],
    });
    const textarea = <HTMLInputElement>screen.getByLabelText("Example label");
    textarea.focus();
    expect(textarea).toHaveFocus();
    fireEvent.click(textarea);
    fireEvent.input(textarea, { target: { value: "Uncontrolled test" } });
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith("Uncontrolled test");
    expect(textarea.value).toBe("Uncontrolled test");
  });
});
