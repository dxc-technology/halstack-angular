import { render, fireEvent } from "@testing-library/angular";
import { screen } from "@testing-library/dom";
import { DxcDateComponent } from "./dxc-date.component";
import { DateAdapter, MatNativeDateModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from "@angular/material/core";
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from "@angular/material/datepicker";
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MatMomentDateModule
} from "@angular/material-moment-adapter";
import { DxcPopoverModule } from "../dxc-popover/dxc-popover-module";
import { DxcBoxModule } from "../dxc-box/dxc-box.module";
import { DxcInputTextModule } from "../dxc-text-input/dxc-input-text.module";

describe("DxcDate", () => {
  const newMockDate = new Date("1995/12/03");
  const newValue = "03-12-1995";

  test("should render dxc-date", async () => {
    const { getByText } = await render(DxcDateComponent, {
      componentProperties: { label: "test-date" },
      imports: [
        MatMomentDateModule,
        MatNativeDateModule,
        MatInputModule,
        MatDatepickerModule,
        DxcPopoverModule,
        DxcBoxModule,
        DxcInputTextModule,
      ],
    });

    expect(getByText("test-date"));
  });

  test("The input´s value is the same as the one received as a parameter", async () => {
    const onChangeFunction = jest.fn();
    const dxcDate = await render(DxcDateComponent, {
      providers: [
        {
          provide: DateAdapter,
          useClass: MomentDateAdapter,
          deps: [MAT_DATE_LOCALE],
        },
        { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
      ],
      componentProperties: {
        label: "test-date",
        onChange: { emit: onChangeFunction } as any,
        value: newValue,
      },
      imports: [
        MatMomentDateModule,
        MatNativeDateModule,
        MatInputModule,
        MatDatepickerModule,
        DxcPopoverModule,
        DxcBoxModule,
        DxcInputTextModule,
      ],
    });

    dxcDate.detectChanges();
    const calendarIcon = dxcDate.getByRole("calendarIcon");
    fireEvent.click(calendarIcon);
    dxcDate.detectChanges();
    expect(screen.getByText("DEC 1995"));
    expect(
      screen.getByText("3").classList.contains("mat-calendar-body-selected")
    ).toBeTruthy();
  });

  test("dxc-date value change and default format", async () => {
    const onChangeFunction = jest.fn((x) => {
      x;
    });
    const dxcDate = await render(DxcDateComponent, {
      componentProperties: {
        label: "test-date",
        onChange: { emit: onChangeFunction } as any,
      },
      imports: [
        MatMomentDateModule,
        MatNativeDateModule,
        MatInputModule,
        MatDatepickerModule,
        DxcPopoverModule,
        DxcBoxModule,
        DxcInputTextModule,
      ],
    });

    const input = <HTMLInputElement>dxcDate.getByRole("combobox");
    expect(dxcDate.getByRole("combobox"));
    fireEvent.input(input, { target: { value: newValue } });
    expect(onChangeFunction).toHaveBeenCalledWith({
      stringValue: newValue,
      dateValue: newMockDate,
    });
  });

  test("Calendar´s value is the same as the input´s date if it´s right (Depending on the format)", async () => {
    const onChangeFunction = jest.fn();
    const dxcDate = await render(DxcDateComponent, {
      providers: [
        {
          provide: DateAdapter,
          useClass: MomentDateAdapter,
          deps: [MAT_DATE_LOCALE],
        },
        { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
      ],
      componentProperties: {
        label: "test-date",
        onChange: { emit: onChangeFunction } as any,
        format: "YYYY/MM/DD",
      },
      imports: [
        MatMomentDateModule,
        MatNativeDateModule,
        MatInputModule,
        MatDatepickerModule,
        DxcPopoverModule,
        DxcBoxModule,
        DxcInputTextModule,
      ],
    });

    const input = <HTMLInputElement>dxcDate.getByRole("combobox");
    expect(dxcDate.getByRole("combobox"));
    fireEvent.input(input, { target: { value: "1995/12/03" } });
    expect(onChangeFunction).toHaveBeenCalledWith({
      stringValue: "1995/12/03",
      dateValue: newMockDate,
    });
    dxcDate.detectChanges();
    const calendarIcon = dxcDate.getByRole("calendarIcon");
    fireEvent.click(calendarIcon);
    dxcDate.detectChanges();
    expect(screen.getByText("DEC 1995"));
    expect(
      screen.getByText("3").classList.contains("mat-calendar-body-selected")
    ).toBeTruthy();
  });

  test("dxc-date invalid value", async () => {
    const onChangeFunction = jest.fn((x) => {
      x;
    });
    const dxcDate = await render(DxcDateComponent, {
      componentProperties: {
        label: "test-date",
        onChange: { emit: onChangeFunction } as any,
      },
      imports: [
        MatMomentDateModule,
        MatNativeDateModule,
        MatInputModule,
        MatDatepickerModule,
        DxcPopoverModule,
        DxcBoxModule,
        DxcInputTextModule,
      ],
    });

    const invalidValue = "03-12-199_";

    const input = <HTMLInputElement>dxcDate.getByRole("combobox");
    expect(dxcDate.getByRole("combobox"));
    fireEvent.input(input, { target: { value: invalidValue } });
    expect(onChangeFunction).toHaveBeenCalledWith({
      dateValue: null,
      stringValue: invalidValue,
    });
  });

  test("onChange function is called when the user selects from the calendar", async () => {
    const onChangeFunction = jest.fn();
    const dxcDate = await render(DxcDateComponent, {
      providers: [
        {
          provide: DateAdapter,
          useClass: MomentDateAdapter,
          deps: [MAT_DATE_LOCALE],
        },
        { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
      ],
      componentProperties: {
        label: "test-date",
        onChange: { emit: onChangeFunction } as any,
        value: newValue,
      },
      imports: [
        MatMomentDateModule,
        MatNativeDateModule,
        MatInputModule,
        MatDatepickerModule,
        DxcPopoverModule,
        DxcBoxModule,
        DxcInputTextModule,
      ],
    });
    dxcDate.detectChanges();
    const calendarIcon = dxcDate.getByRole("calendarIcon");
    fireEvent.click(calendarIcon);
    dxcDate.detectChanges();
    fireEvent.click(screen.getByText("4"));
    expect(onChangeFunction).toHaveBeenCalledWith({
      stringValue: "04-12-1995",
      dateValue: new Date("1995/12/04"),
    });
  });

  test("onChange function is called when the user selects from the calendar, the stringValue received by the function is the date with the correct format", async () => {
    const onChangeFunction = jest.fn();
    const dxcDate = await render(DxcDateComponent, {
      providers: [
        {
          provide: DateAdapter,
          useClass: MomentDateAdapter,
          deps: [MAT_DATE_LOCALE],
        },
        { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
      ],
      componentProperties: {
        label: "test-date",
        onChange: { emit: onChangeFunction } as any,
        value: "12-03-1995",
        format: "MM-DD-YYYY",
      },
      imports: [
        MatMomentDateModule,
        MatNativeDateModule,
        MatInputModule,
        MatDatepickerModule,
        DxcPopoverModule,
        DxcBoxModule,
        DxcInputTextModule,
      ],
    });
    dxcDate.detectChanges();
    const calendarIcon = dxcDate.getByRole("calendarIcon");
    fireEvent.click(calendarIcon);
    dxcDate.detectChanges();
    expect(screen.getByText("DEC 1995"));
    expect(
      screen.getByText("3").classList.contains("mat-calendar-body-selected")
    ).toBeTruthy();
    fireEvent.click(screen.getByText("4"));
    dxcDate.detectChanges();
    expect(onChangeFunction).toHaveBeenCalledWith({
      stringValue: "12-04-1995",
      dateValue: new Date("1995/12/04"),
    });
  });

  test("If the user types something, if controlled and without onChange, the value doesn´t change", async () => {
    const onChangeFunction = jest.fn();
    const dxcDate = await render(DxcDateComponent, {
      providers: [
        {
          provide: DateAdapter,
          useClass: MomentDateAdapter,
          deps: [MAT_DATE_LOCALE],
        },
        { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
      ],
      componentProperties: {
        label: "test-date",
        onChange: { emit: onChangeFunction } as any,
        value: newValue,
      },
      imports: [
        MatMomentDateModule,
        MatNativeDateModule,
        MatInputModule,
        MatDatepickerModule,
        DxcPopoverModule,
        DxcBoxModule,
        DxcInputTextModule,
      ],
    });
    dxcDate.detectChanges();
    const calendarIcon = dxcDate.getByRole("calendarIcon");
    fireEvent.click(calendarIcon);
    dxcDate.detectChanges();
    expect(screen.getByText("DEC 1995"));
    expect(
      screen.getByText("3").classList.contains("mat-calendar-body-selected")
    ).toBeTruthy();
    fireEvent.click(screen.getByText("4"));
    dxcDate.detectChanges();
    expect(onChangeFunction).toHaveBeenCalledWith({
      stringValue: "04-12-1995",
      dateValue: new Date("1995/12/04"),
    });
    fireEvent.click(calendarIcon);
    dxcDate.detectChanges();
    expect(screen.getByText("DEC 1995"));
    expect(
      screen.getByText("3").classList.contains("mat-calendar-body-selected")
    ).toBeTruthy();
  });
});
