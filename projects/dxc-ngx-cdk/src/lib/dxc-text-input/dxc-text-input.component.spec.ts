import { DxcTextInputComponent } from "./dxc-text-input.component";
import { render, fireEvent } from "@testing-library/angular";
import { screen, waitFor } from "@testing-library/dom";
import { CommonModule } from "@angular/common";
import { BoldOptionsPipe } from "./pipes/bold-options.pipe";
import { FilterOptionsPipe } from "./pipes/filter-options.pipe";
import { DxcTextInputService } from "./services/dxc-text-input.service";
import { DxcTextInputActionComponent } from "./dxc-text-input-action/dxc-text-input-action.component";
import { FormsModule } from "@angular/forms";

describe("DxcNewTextInputComponent", () => {
  test("should render dxc-text-input", async () => {
    const input = await render(DxcTextInputComponent, {
      componentProperties: {
        label: "test-input",
        helperText: "helper-text",
      },
      imports: [CommonModule, FormsModule],
      providers: [DxcTextInputService],
      declarations: [FilterOptionsPipe, BoldOptionsPipe],
    });

    expect(input.getByText("test-input"));
    expect(input.getByText("helper-text"));
  });

  test("should render error dxc-text-input", async () => {
    const input = await render(DxcTextInputComponent, {
      componentProperties: {
        label: "test-input",
        helperText: "helper-text",
        error: "Very important error",
      },
      imports: [CommonModule, FormsModule],
      providers: [DxcTextInputService],
      declarations: [FilterOptionsPipe, BoldOptionsPipe],
    });

    expect(input.getByText("test-input"));
    expect(input.getByText("helper-text"));
    expect(input.getByText("Very important error"));
    expect(input.getByLabelText("Error"));
  });

  test("should show options", async () => {
    const input = await render(DxcTextInputComponent, {
      template: `<dxc-text-input
        placeholder="placeholder"
        label="Input label"
        helperText="helper text"
        margin="small"
        clearable="true"
        [suggestions]="[
          'Albania',
          'Andorra',
          'Belgium'
        ]"
      ></dxc-text-input>`,
      imports: [CommonModule, FormsModule],
      providers: [DxcTextInputService],
      declarations: [FilterOptionsPipe, BoldOptionsPipe],
    });

    expect(input.getByText("Input label"));
    expect(input.getByText("helper text"));
    expect(input.getByText("Albania"));
    expect(input.getByText("Andorra"));
    expect(input.getByText("Belgium"));
  });

  test("should filter options", async () => {
    const input = await render(DxcTextInputComponent, {
      template: `<dxc-text-input
        placeholder="placeholder"
        label="Input label"
        helperText="helper text"
        value="Belgium"
        margin="small"
        clearable="true"
        [suggestions]="[
          'Albania',
          'Andorra',
          'Belgium'
        ]"
      ></dxc-text-input>`,
      imports: [CommonModule, FormsModule],
      providers: [DxcTextInputService],
      declarations: [FilterOptionsPipe, BoldOptionsPipe],
    });

    expect(input.getByText("Input label"));
    expect(input.getByText("helper text"));
    const text1 = input.queryByText("Albania");
    const text2 = input.queryByText("Andorra");
    expect(text1).toBeNull();
    expect(text2).toBeNull();
    expect(input.getByText("Belgium"));
  });

  test("should clear input", async () => {
    const onChange = jest.fn();
    const input = await render(DxcTextInputComponent, {
      template: `<dxc-text-input
        placeholder="placeholder"
        label="Input label"
        helperText="helper text"
        margin="small"
        value="test input value"
        clearable="true"
        (onChange)="onChange($event)"
        optional="true"
      ></dxc-text-input>`,
      imports: [CommonModule, FormsModule],
      providers: [DxcTextInputService],
      declarations: [FilterOptionsPipe, BoldOptionsPipe],
      componentProperties: { onChange },
    });

    expect(input.getByText("Input label"));
    expect(input.getByText("helper text"));
    expect(screen.getByDisplayValue("test input value")).toBeTruthy();
    fireEvent.click(input.getByLabelText("Clear"));
    input.detectChanges();
    expect(onChange).toHaveBeenCalledWith({value: "", error: null});
  });

  test("should allow interaction with action button", async () => {
    const click = jest.fn();
    const input = await render(DxcTextInputComponent, {
      template: `<dxc-text-input
        placeholder="placeholder"
        label="Input label"
        helperText="helper text"
        margin="small"
        value="controlledValue"
        clearable="true"
        (onActionClick)="click()"
      >
        <dxc-text-input-action>
          <svg
            id="highlight_off_black_18dp"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path
              id="Path_2943"
              data-name="Path 2943"
              d="M0,0H18V18H0Z"
              fill="none"
            />
            <path
              id="Path_2944"
              data-name="Path 2944"
              d="M10,4a6,6,0,1,0,6,6A6.01,6.01,0,0,0,10,4Zm3,7.945L11.945,13,10,11.06,8.059,13,7,11.945,8.944,10,7,8.059,8.059,7,10,8.944,11.945,7,13,8.059,11.06,10Z"
              transform="translate(-1.002 -1.002)"
              fill="#ffe6e9"
            />
            <path
              id="Path_2945"
              data-name="Path 2945"
              d="M11.444,6.5,9.5,8.443,7.558,6.5,6.5,7.558,8.443,9.5,6.5,11.444,7.558,12.5,9.5,10.558,11.444,12.5,12.5,11.444,10.558,9.5,12.5,7.558ZM9.5,2A7.5,7.5,0,1,0,17,9.5,7.494,7.494,0,0,0,9.5,2Zm0,13.5a6,6,0,1,1,6-6A6.009,6.009,0,0,1,9.5,15.5Z"
              transform="translate(-0.501 -0.501)"
              fill="#d0011b"
            />
          </svg>
        </dxc-text-input-action>
      </dxc-text-input>`,
      imports: [CommonModule, FormsModule],
      providers: [DxcTextInputService, DxcTextInputActionComponent],
      declarations: [
        FilterOptionsPipe,
        BoldOptionsPipe,
        DxcTextInputActionComponent,
      ],
      componentProperties: { click },
    });

    fireEvent.click(input.getByLabelText("Action"));
    expect(click).toHaveBeenCalled();
  });

  test("should not allow interation with disabled input", async () => {
    const onChange = jest.fn();
    const input = await render(DxcTextInputComponent, {
      template: `<dxc-text-input
        placeholder="placeholder"
        label="Input label"
        helperText="helper text"
        margin="small"
        value="test input value"
        disabled="true"
        (onChange)="onChange($event)"
      ></dxc-text-input>`,
      imports: [CommonModule, FormsModule],
      providers: [DxcTextInputService],
      declarations: [FilterOptionsPipe, BoldOptionsPipe],
      componentProperties: { onChange },
    });

    expect(input.getByText("Input label"));
    expect(input.getByText("helper text"));
    expect(screen.getByDisplayValue("test input value")).toBeTruthy();
    fireEvent.click(input.getByRole("textbox"));
    input.detectChanges();
    expect(onChange).not.toHaveBeenCalledWith({value: "", error: null});
  });

  test("controlled dxc-input-text input change and blur", async () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    await render(DxcTextInputComponent, {
      componentProperties: {
        label: "Input label",
        value: "initial",
        onChange: {
          emit: onChange,
        } as any,
        onBlur: {
          emit: onBlur,
        } as any,
      },
      imports: [CommonModule, FormsModule],
      providers: [DxcTextInputService],
      declarations: [FilterOptionsPipe, BoldOptionsPipe],
    });

    const input = <HTMLInputElement>screen.getByRole("textbox");
    input.focus();
    fireEvent.click(input);
    expect(screen.getByDisplayValue("initial"));
    fireEvent.input(input, { target: { value: "new value" } });
    expect(onChange).toHaveBeenCalledWith({value: "new value", error: null});
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalledWith({ error: null, value: "initial" });
    await waitFor(() => {
      expect(screen.getByDisplayValue("initial"));
    });
  });

  test("uncontrolled dxc-input-text input change and blur", async () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    await render(DxcTextInputComponent, {
      componentProperties: {
        label: "Input label",
        onChange: {
          emit: onChange,
        } as any,
        onBlur: {
          emit: onBlur,
        } as any,
      },
      imports: [CommonModule, FormsModule],
      providers: [DxcTextInputService],
      declarations: [FilterOptionsPipe, BoldOptionsPipe],
    });

    const input = <HTMLInputElement>screen.getByRole("textbox");
    input.focus();
    fireEvent.click(input);
    expect(screen.getByDisplayValue(""));
    fireEvent.input(input, { target: { value: "new value" } });
    expect(onChange).toHaveBeenCalledWith({value: "new value", error: null});
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalledWith({ error: null, value: "new value" });
    await waitFor(() => {
      expect(screen.getByDisplayValue("new value"));
    });
  });

  test("controlled dxc-input-text input with clear, change and blur", async () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    await render(DxcTextInputComponent, {
      componentProperties: {
        label: "test-input",
        clearable: true,
        value: "initial string",
        onChange: {
          emit: onChange,
        } as any,
        onBlur: {
          emit: onBlur,
        } as any,
        optional: true
      },
      imports: [CommonModule, FormsModule],
      providers: [DxcTextInputService],
      declarations: [FilterOptionsPipe, BoldOptionsPipe],
    });

    const input = <HTMLInputElement>screen.getByRole("textbox");
    input.focus();
    fireEvent.click(input);
    expect(screen.getByDisplayValue("initial string"));
    fireEvent.input(input, { target: { value: "new value" } });
    expect(onChange).toHaveBeenCalledWith({value: "new value", error: null});
    await waitFor(() => {
      fireEvent.blur(input);
      expect(onBlur).toHaveBeenCalledWith({ error: null, value: "initial string" });
      fireEvent.click(screen.getByLabelText("Clear"));
      expect(onChange).toHaveBeenCalledWith({value: "", error: null});
      screen.getByDisplayValue("initial string");
    });
  });

  test("controlled dxc-input-text onError pattern", async () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    await render(DxcTextInputComponent, {
      componentProperties: {
        label: "Input label",
        clearable: true,
        value: "initial",
        pattern: ".{10,15}",
        onChange: {
          emit: onChange,
        } as any,
        onBlur: {
          emit: onBlur,
        } as any,
        optional: true
      },
      imports: [CommonModule, FormsModule],
      providers: [DxcTextInputService],
      declarations: [FilterOptionsPipe, BoldOptionsPipe],
    });

    const input = <HTMLInputElement>screen.getByRole("textbox");
    input.focus();
    fireEvent.click(input);
    expect(screen.getByDisplayValue("initial"));
    fireEvent.input(input, { target: { value: "new value" } });
    expect(onChange).toHaveBeenCalledWith({value: "new value", error: "Please use a valid pattern"});
    fireEvent.blur(input);
    await waitFor(() => {
      expect(screen.getByDisplayValue("initial"));
      expect(onBlur).toHaveBeenCalledWith({
        error: "Please use a valid pattern",
        value: "initial",
      });
    });
    fireEvent.click(screen.getByLabelText("Clear"));
    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith({value: "", error: null});
      expect(screen.getByDisplayValue("initial"));
    });
  });

  test("controlled dxc-input-text onError length", async () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const lengthLimit = { min: 2, max: 5 };
    await render(DxcTextInputComponent, {
      componentProperties: {
        label: "Input label",
        value: "initial",
        clearable: true,
        length: lengthLimit,
        onChange: {
          emit: onChange,
        } as any,
        onBlur: {
          emit: onBlur,
        } as any,
        optional: true
      },
      imports: [CommonModule, FormsModule],
      providers: [DxcTextInputService],
      declarations: [FilterOptionsPipe, BoldOptionsPipe],
    });

    const input = <HTMLInputElement>screen.getByRole("textbox");
    input.focus();
    fireEvent.click(input);
    expect(screen.getByDisplayValue("initial"));
    fireEvent.input(input, { target: { value: "new value" } });
    expect(onChange).toHaveBeenCalledWith({value: "new value", error: "Min length 2, Max length 5"});
    fireEvent.blur(input);
    await waitFor(() => {
      expect(screen.getByDisplayValue("initial"));
      expect(onBlur).toHaveBeenCalledWith({
        error: "Min length 2, Max length 5",
        value: "initial",
      });
    });
    fireEvent.click(screen.getByLabelText("Clear"));
    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith({value: "", error: null});
      expect(screen.getByDisplayValue("initial"));
    });
  });

  test("controlled dxc-input-text input with optional error", async () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    await render(DxcTextInputComponent, {
      componentProperties: {
        label: "test-input",
        clearable: true,
        value: "initial string",
        onChange: {
          emit: onChange,
        } as any,
        onBlur: {
          emit: onBlur,
        } as any,
      },
      imports: [CommonModule, FormsModule],
      providers: [DxcTextInputService],
      declarations: [FilterOptionsPipe, BoldOptionsPipe],
    });

    const input = <HTMLInputElement>screen.getByRole("textbox");
    input.focus();
    fireEvent.click(input);
    expect(screen.getByDisplayValue("initial string"));
    fireEvent.input(input, { target: { value: "new value" } });
    expect(onChange).toHaveBeenCalledWith({value: "new value", error: null});
    await waitFor(() => {
      fireEvent.blur(input);
      expect(onBlur).toHaveBeenCalledWith({ error: null, value: "initial string" });
      fireEvent.click(screen.getByLabelText("Clear"));
      expect(onChange).toHaveBeenCalledWith({value: "", error: "This field is required. Please, enter a value."});
      screen.getByDisplayValue("initial string");
    });
  });
});


