import { render, fireEvent } from "@testing-library/angular";
import { DxcTextareaComponent } from "./dxc-textarea.component";
import { MatLegacyInputModule as MatInputModule } from "@angular/material/legacy-input";
import { MatLegacyAutocompleteModule as MatAutocompleteModule } from "@angular/material/legacy-autocomplete";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

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

    const input = <HTMLInputElement>getByRole("textbox");
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
        onBlur: { emit: onBlurFunction } as any,
      },
      imports: [
        MatInputModule,
        MatAutocompleteModule,
        FormsModule,
        ReactiveFormsModule,
      ],
    });

    const input = <HTMLInputElement>dxcText.getByRole("textbox");
    fireEvent.input(input, { target: { value: newValue } });
    expect(onInputFunction).toHaveBeenCalledWith(newValue);
    fireEvent.blur(input);
    expect(onBlurFunction).toHaveBeenCalledWith(defaultValue);
  });
});
