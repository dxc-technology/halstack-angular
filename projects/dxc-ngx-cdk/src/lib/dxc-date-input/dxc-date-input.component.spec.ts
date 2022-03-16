import { render, fireEvent } from "@testing-library/angular";
import { screen, waitFor } from "@testing-library/dom";
import { DxcDateInputComponent } from "./dxc-date-input.component";
import {
  DateAdapter,
  MatNativeDateModule,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from "@angular/material/core";
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from "@angular/material/datepicker";
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MatMomentDateModule,
} from "@angular/material-moment-adapter";
import { MdePopoverModule } from "@material-extended/mde";
import { DxcBoxModule } from "../dxc-box/dxc-box.module";
import { CommonModule } from "@angular/common";
import { DxcTextInputModule } from "../dxc-text-input/dxc-text-input.module";
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from "@angular/platform-browser-dynamic/testing";
import { TestBed } from "@angular/core/testing";

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
describe("DxcDate", () => {
  const newMockDate = new Date("1995/12/03");
  const newValue = "03-12-1995";

  test("should render dxc-date", async () => {
    const { getByText } = await render(DxcDateInputComponent, {
      componentProperties: { label: "test-date" },
      imports: [
        MatMomentDateModule,
        MatNativeDateModule,
        MatInputModule,
        MatDatepickerModule,
        MdePopoverModule,
        DxcBoxModule,
        CommonModule,
        DxcTextInputModule,
      ],
    });

    expect(getByText("test-date"));
  });

  test("The input´s value is the same as the one received as a parameter", async () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();

    await render(DxcDateInputComponent, {
      componentProperties: {
        label: "test-input",
        value: "03-12-1995",
        onChange: {
          emit: onChange,
        } as any,
        onBlur: {
          emit: onBlur,
        } as any,
      },
      imports: [
        MatMomentDateModule,
        MatNativeDateModule,
        MatInputModule,
        MatDatepickerModule,
        MdePopoverModule,
        DxcBoxModule,
        CommonModule,
        DxcTextInputModule,
      ],
      providers: [
        {
          provide: DateAdapter,
          useClass: MomentDateAdapter,
          deps: [MAT_DATE_LOCALE],
        },
        { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
      ],
    });

    const input = <HTMLInputElement>screen.getByRole("textbox");
    const calendarIcon = screen.getByRole("calendarIcon");

    input.focus();
    expect(screen.getByDisplayValue("03-12-1995"));
    fireEvent.click(calendarIcon);
    expect(screen.getByText("DEC 1995"));
    expect(
      screen.getByText("3").classList.contains("mat-calendar-body-selected")
    ).toBeTruthy();
  });

  test("dxc-date value change and default format", async () => {
    const onChange = jest.fn();

    await render(DxcDateInputComponent, {
      componentProperties: {
        label: "test-input",
        onChange: {
          emit: onChange,
        } as any,
      },
      imports: [
        MatMomentDateModule,
        MatNativeDateModule,
        MatInputModule,
        MatDatepickerModule,
        MdePopoverModule,
        DxcBoxModule,
        CommonModule,
        DxcTextInputModule,
      ],
      providers: [
        {
          provide: DateAdapter,
          useClass: MomentDateAdapter,
          deps: [MAT_DATE_LOCALE],
        },
        { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
      ],
    });

    const input = <HTMLInputElement>screen.getByRole("textbox");
    input.focus();
    fireEvent.input(input, { target: { value: newValue } });
    expect(onChange).toHaveBeenCalledWith({
      value: newValue,
      error: null,
      date: newMockDate,
    });
    expect(screen.getByDisplayValue(newValue));
  });

  test("dxc-date change value twice as uncontrolled", async () => {
    const onChange = jest.fn();

    await render(DxcDateInputComponent, {
      componentProperties: {
        label: "test-input",
        onChange: {
          emit: onChange,
        } as any,
      },
      imports: [
        MatMomentDateModule,
        MatNativeDateModule,
        MatInputModule,
        MatDatepickerModule,
        MdePopoverModule,
        DxcBoxModule,
        CommonModule,
        DxcTextInputModule,
      ],
      providers: [
        {
          provide: DateAdapter,
          useClass: MomentDateAdapter,
          deps: [MAT_DATE_LOCALE],
        },
        { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
      ],
    });

    const input = <HTMLInputElement>screen.getByRole("textbox");
    input.focus();
    fireEvent.input(input, { target: { value: newValue } });
    expect(onChange).toHaveBeenCalledWith({
      value: newValue,
      error: null,
      date: newMockDate,
    });
    expect(screen.getByDisplayValue(newValue));

    input.focus();
    fireEvent.input(input, { target: { value: "04-10-1996" } });
    expect(onChange).toHaveBeenCalledWith({
      value: "04-10-1996",
      error: null,
      date: new Date("1996/10/04"),
    });
    expect(screen.getByDisplayValue("04-10-1996"));
  });

  test("Calendar´s value is the same as the input´s date if it´s right (Depending on the format)", async () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();

    await render(DxcDateInputComponent, {
      componentProperties: {
        label: "test-input",
        format: "YYYY/MM/DD",
        onChange: {
          emit: onChange,
        } as any,
        onBlur: {
          emit: onBlur,
        } as any,
      },
      imports: [
        MatMomentDateModule,
        MatNativeDateModule,
        MatInputModule,
        MatDatepickerModule,
        MdePopoverModule,
        DxcBoxModule,
        CommonModule,
        DxcTextInputModule,
      ],
      providers: [
        {
          provide: DateAdapter,
          useClass: MomentDateAdapter,
          deps: [MAT_DATE_LOCALE],
        },
        { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
      ],
    });

    const input = <HTMLInputElement>screen.getByRole("textbox");
    const calendarIcon = screen.getByRole("calendarIcon");

    input.focus();
    fireEvent.input(input, { target: { value: "1995/12/03" } });
    expect(onChange).toHaveBeenCalledWith({
      value: "1995/12/03",
      error: null,
      date: newMockDate,
    });
    input.focus();
    expect(screen.getByDisplayValue("1995/12/03"));
    fireEvent.click(calendarIcon);
    waitFor(() => {
      expect(screen.getByText("DEC 1995"));
    });
    waitFor(() => {
      expect(
        screen.getByText("3").classList.contains("mat-calendar-body-selected")
      ).toBeTruthy();
    });
  });

  test("dxc-date invalid value", async () => {
    const onChange = jest.fn();
    const invalidValue = "03-12-199_";

    await render(DxcDateInputComponent, {
      componentProperties: {
        label: "test-input",
        onChange: {
          emit: onChange,
        } as any,
      },
      imports: [
        MatMomentDateModule,
        MatNativeDateModule,
        MatInputModule,
        MatDatepickerModule,
        MdePopoverModule,
        DxcBoxModule,
        CommonModule,
        DxcTextInputModule,
      ],
      providers: [
        {
          provide: DateAdapter,
          useClass: MomentDateAdapter,
          deps: [MAT_DATE_LOCALE],
        },
        { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
      ],
    });
    const input = <HTMLInputElement>screen.getByRole("textbox");

    input.focus();
    fireEvent.input(input, { target: { value: invalidValue } });
    expect(onChange).toHaveBeenCalledWith({
      value: invalidValue,
      error: null,
      date: null,
    });
  });

  test("onChange function is called when the user selects from the calendar", async () => {
    const onChange = jest.fn();

    await render(DxcDateInputComponent, {
      componentProperties: {
        label: "test-input",
        value: newValue,
        onChange: {
          emit: onChange,
        } as any,
      },
      imports: [
        MatMomentDateModule,
        MatNativeDateModule,
        MatInputModule,
        MatDatepickerModule,
        MdePopoverModule,
        DxcBoxModule,
        CommonModule,
        DxcTextInputModule,
      ],
      providers: [
        {
          provide: DateAdapter,
          useClass: MomentDateAdapter,
          deps: [MAT_DATE_LOCALE],
        },
        { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
      ],
    });
    const calendarIcon = screen.getByRole("calendarIcon");

    fireEvent.click(calendarIcon);
    fireEvent.click(screen.getByText("4"));
    expect(onChange).toHaveBeenCalledWith({
      value: "04-12-1995",
      date: new Date("1995/12/04"),
    });
  });

  test("onChange function is called when the user selects from the calendar, the stringValue received by the function is the date with the correct format", async () => {
    const onChange = jest.fn();

    await render(DxcDateInputComponent, {
      componentProperties: {
        label: "test-input",
        value: "12-03-1995",
        format: "MM-DD-YYYY",
        onChange: {
          emit: onChange,
        } as any,
      },
      imports: [
        MatMomentDateModule,
        MatNativeDateModule,
        MatInputModule,
        MatDatepickerModule,
        MdePopoverModule,
        DxcBoxModule,
        CommonModule,
        DxcTextInputModule,
      ],
      providers: [
        {
          provide: DateAdapter,
          useClass: MomentDateAdapter,
          deps: [MAT_DATE_LOCALE],
        },
        { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
      ],
    });
    const calendarIcon = screen.getByRole("calendarIcon");

    fireEvent.click(calendarIcon);
    expect(screen.getByText("DEC 1995"));
    expect(
      screen.getByText("3").classList.contains("mat-calendar-body-selected")
    ).toBeTruthy();
    fireEvent.click(screen.getByText("4"));
    expect(onChange).toHaveBeenCalledWith({
      value: "12-04-1995",
      date: new Date("1995/12/04"),
    });
  });

  test("If the user types something, if controlled and without onChange, the value doesn´t change", async () => {
    const onChange = jest.fn();

    await render(DxcDateInputComponent, {
      componentProperties: {
        label: "test-input",
        value: newValue,
        onChange: {
          emit: onChange,
        } as any,
      },
      imports: [
        MatMomentDateModule,
        MatNativeDateModule,
        MatInputModule,
        MatDatepickerModule,
        MdePopoverModule,
        DxcBoxModule,
        CommonModule,
        DxcTextInputModule,
      ],
      providers: [
        {
          provide: DateAdapter,
          useClass: MomentDateAdapter,
          deps: [MAT_DATE_LOCALE],
        },
        { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
      ],
    });
    const calendarIcon = screen.getByRole("calendarIcon");

    fireEvent.click(calendarIcon);
    expect(screen.getByText("DEC 1995"));
    expect(
      screen.getByText("3").classList.contains("mat-calendar-body-selected")
    ).toBeTruthy();
    fireEvent.click(screen.getByText("4"));
    expect(onChange).toHaveBeenCalledWith({
      value: "04-12-1995",
      date: new Date("1995/12/04"),
    });
    fireEvent.click(calendarIcon);
    expect(screen.getByText("DEC 1995"));
    expect(
      screen.getByText("3").classList.contains("mat-calendar-body-selected")
    ).toBeTruthy();
  });

  test("controlled dxc-date", async () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();

    await render(DxcDateInputComponent, {
      componentProperties: {
        label: "test-input",
        value: "03-12-1995",
        onChange: {
          emit: onChange,
        } as any,
        onBlur: {
          emit: onBlur,
        } as any,
      },
      imports: [
        MatMomentDateModule,
        MatNativeDateModule,
        MatInputModule,
        MatDatepickerModule,
        MdePopoverModule,
        DxcBoxModule,
        CommonModule,
        DxcTextInputModule,
      ],
      providers: [
        {
          provide: DateAdapter,
          useClass: MomentDateAdapter,
          deps: [MAT_DATE_LOCALE],
        },
        { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
      ],
    });
    const input = <HTMLInputElement>screen.getByRole("textbox");

    input.focus();
    fireEvent.input(input, { target: { value: "03-10-1996" } });
    expect(onChange).toHaveBeenCalledWith({
      value: "03-10-1996",
      error: null,
      date: new Date("1996/10/03"),
    });
    expect(screen.getByDisplayValue("03-12-1995"));
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalledWith({
      error: null,
      value: "03-12-1995",
      date: new Date("1995/12/03"),
    });
  });
});
