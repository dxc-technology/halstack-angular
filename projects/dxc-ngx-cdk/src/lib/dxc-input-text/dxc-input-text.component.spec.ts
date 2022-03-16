import { render, fireEvent } from "@testing-library/angular";
import { DxcInputTextComponent } from "./dxc-input-text.component";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatInputModule } from "@angular/material/input";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { screen, waitFor } from "@testing-library/dom";
import { of } from "rxjs";
import { delay } from "rxjs/operators";
import { switchMap } from "rxjs/operators";
import { TestBed } from "@angular/core/testing";
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from "@angular/platform-browser-dynamic/testing";

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

describe("DxcTextInputComponent", () => {
  test("should render dxc-input-text", async () => {
    const { getByText } = await render(DxcInputTextComponent, {
      componentProperties: {
        label: "test-input",
        assistiveText: "assistive text",
      },
      imports: [MatAutocompleteModule, FormsModule, ReactiveFormsModule],
      declarations: [DxcInputTextComponent],
    });

    expect(getByText("test-input"));
    expect(getByText("assistive text"));
  });

  test("uncontrolled dxc-input-text input change and blur", async () => {
    const onInputFunction = jest.fn();
    const onBlurFunction = jest.fn();
    const newValue = "new value";
    const { getByRole } = await render(DxcInputTextComponent, {
      componentProperties: {
        label: "test-input",
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

  test("controlled dxc-input-text input change and blur", async () => {
    const onInputFunction = jest.fn();
    const onBlurFunction = jest.fn();
    const newValue = "new value";
    const defaultValue = "default value";
    const dxcText = await render(DxcInputTextComponent, {
      componentProperties: {
        label: "test-input",
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

    const input = <HTMLInputElement>dxcText.getByRole("combobox");
    fireEvent.input(input, { target: { value: newValue } });
    expect(onInputFunction).toHaveBeenCalledWith(newValue);
    fireEvent.blur(input);
    expect(onBlurFunction).toHaveBeenCalledWith(defaultValue);
  });

  test("dxc-input-text prefix click", async () => {
    const onClickFunction = jest.fn();
    const { getByText } = await render(DxcInputTextComponent, {
      componentProperties: {
        label: "test-input",
        assistiveText: "assistive text",
        prefix: "pr",
        suffix: "su",
        onClickPrefix: { emit: onClickFunction } as any,
      },
      imports: [
        MatInputModule,
        MatAutocompleteModule,
        FormsModule,
        ReactiveFormsModule,
      ],
    });

    expect(getByText("pr"));
    fireEvent.click(getByText("pr"));
    expect(onClickFunction).toHaveBeenCalled();
  });

  test("dxc-input-text suffix click", async () => {
    const onClickFunction = jest.fn();
    const { getByText } = await render(DxcInputTextComponent, {
      componentProperties: {
        label: "test-input",
        assistiveText: "assistive text",
        prefix: "pr",
        suffix: "su",
        onClickSuffix: { emit: onClickFunction } as any,
      },
      imports: [
        MatInputModule,
        MatAutocompleteModule,
        FormsModule,
        ReactiveFormsModule,
      ],
    });

    expect(getByText("su"));
    fireEvent.click(getByText("su"));
    expect(onClickFunction).toHaveBeenCalled();
  });
});

describe("DxcTextInputComponent autocomplete tests", () => {
  test("should render autocomplete options", async () => {
    const dxcInput = await render(DxcInputTextComponent, {
      componentProperties: {
        label: "test-input",
        assistiveText: "assistive text",
        autocompleteOptions: ["One", "Two", "Three"],
      },
      imports: [
        MatInputModule,
        MatAutocompleteModule,
        FormsModule,
        ReactiveFormsModule,
      ],
    });

    expect(dxcInput.getByText("test-input"));
    expect(dxcInput.getByText("assistive text"));
    fireEvent.focusIn(dxcInput.getByRole("combobox"));
    dxcInput.detectChanges();
    expect(screen.getByText("One"));
    expect(screen.getByText("Two"));
    expect(screen.getByText("Three"));
  });

  test("should filter autocomplete options", async () => {
    const dxcInput = await render(DxcInputTextComponent, {
      componentProperties: {
        label: "test-input",
        assistiveText: "assistive text",
        autocompleteOptions: ["One", "Two", "Three"],
      },
      imports: [
        MatInputModule,
        MatAutocompleteModule,
        FormsModule,
        ReactiveFormsModule,
      ],
    });

    expect(dxcInput.getByText("test-input"));
    expect(dxcInput.getByText("assistive text"));
    const input = <HTMLInputElement>dxcInput.getByRole("combobox");
    fireEvent.input(input, { target: { value: "O" } });
    fireEvent.focusIn(dxcInput.getByRole("combobox"));
    dxcInput.detectChanges();
    expect(screen.getByText("One"));
    expect(screen.getByText("Two"));
    const filteredOutOption = screen.queryByText("Three");
    expect(filteredOutOption).toBeNull();
  });

  test("should use autocomplete function", async () => {
    const autocompleteFunction = jest.fn(() => {
      return of(["One", "Two", "Three"]);
    });
    const dxcInput = await render(DxcInputTextComponent, {
      componentProperties: {
        label: "test-input",
        assistiveText: "assistive text",
        autocompleteOptions: autocompleteFunction,
      },
      imports: [
        MatInputModule,
        MatAutocompleteModule,
        FormsModule,
        ReactiveFormsModule,
      ],
    });

    expect(dxcInput.getByText("test-input"));
    expect(dxcInput.getByText("assistive text"));
    fireEvent.focusIn(dxcInput.getByRole("combobox"));
    dxcInput.detectChanges();
    expect(screen.getByText("One"));
    expect(screen.getByText("Two"));
    expect(screen.getByText("Three"));
  });

  test("should use autocomplete function returning an observable", async () => {
    const autocompleteFunction = jest.fn(() => {
      return of(["One", "Two", "Three"]).pipe(
        switchMap((options) => of(options).pipe(delay(1000)))
      );
    });
    const dxcInput = await render(DxcInputTextComponent, {
      componentProperties: {
        label: "test-input",
        assistiveText: "assistive text",
        autocompleteOptions: autocompleteFunction,
      },
      imports: [
        MatInputModule,
        MatAutocompleteModule,
        FormsModule,
        ReactiveFormsModule,
      ],
    });

    expect(dxcInput.getByText("test-input"));
    expect(dxcInput.getByText("assistive text"));
    fireEvent.focusIn(dxcInput.getByRole("combobox"));
    dxcInput.detectChanges();
    expect(screen.getByText("Searching..."));
    await waitFor(
      () => {
        dxcInput.detectChanges();
        expect(screen.getByText("Two")).toBeTruthy();
      },
      { timeout: 1200 }
    );
  });
});
