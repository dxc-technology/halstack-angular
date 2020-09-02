import { render, fireEvent } from "@testing-library/angular";
import { DxcTextareaComponent } from "./dxc-textarea.component";
import { MatInputModule, MatAutocompleteModule } from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { screen, waitFor } from "@testing-library/dom";
import { of } from "rxjs";
import { delay } from "rxjs/internal/operators";
import { switchMap } from "rxjs/operators";

describe("DxcTextareaComponent", () => {
  test("should render dxc-textarea", async () => {
    const { getByText } = await render(DxcTextareaComponent, {
      componentProperties: {
        label: "test-textarea",
        assistiveText: "assistive text",
      },
      imports: [
        MatInputModule,
        MatAutocompleteModule,
        FormsModule,
        ReactiveFormsModule,
      ],
    });

    expect(getByText("test-textarea"));
    expect(getByText("assistive text"));
  });

  test("uncontrolled dxc-textarea input change and blur", async () => {
    const onInputFunction = jest.fn();
    const onBlurFunction = jest.fn();
    const newValue = "new value";
    const { getByRole } = await render(DxcTextareaComponent, {
      componentProperties: {
        label: "test-textarea",
        onChange: { emit: onInputFunction } as any,
        onBlur: { emit: onBlurFunction } as any,
      },
      imports: [
        MatInputModule,
        MatAutocompleteModule,
        FormsModule,
        ReactiveFormsModule,
      ],
    });

    const input = <HTMLInputElement>getByRole("combobox");
    fireEvent.input(input, { target: { value: newValue } });
    expect(onInputFunction).toHaveBeenCalledWith(newValue);
    fireEvent.blur(input);
    expect(onBlurFunction).toHaveBeenCalledWith(newValue);
  });

  test("controlled dxc-textarea input change and blur", async () => {
    const onInputFunction = jest.fn();
    const onBlurFunction = jest.fn();
    const newValue = "new value";
    const defaultValue = "default value";
    const dxcText = await render(DxcTextareaComponent, {
      componentProperties: {
        label: "test-textarea",
        value: defaultValue,
        onChange: { emit: onInputFunction } as any,
        onBlur: { emit: onBlurFunction } as any
      },
      imports: [
        MatInputModule,
        MatAutocompleteModule,
        FormsModule,
        ReactiveFormsModule
      ]
    });

    const input = <HTMLInputElement>dxcText.getByRole("combobox");
    fireEvent.input(input, { target: { value: newValue } });
    expect(onInputFunction).toHaveBeenCalledWith(newValue);
    fireEvent.blur(input);
    expect(onBlurFunction).toHaveBeenCalledWith(defaultValue);
  });
});
