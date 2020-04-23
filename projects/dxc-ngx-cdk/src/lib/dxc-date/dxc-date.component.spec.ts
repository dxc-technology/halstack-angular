import { render, fireEvent } from "@testing-library/angular";
import { DxcDateComponent } from "./dxc-date.component";
import {
  MatNativeDateModule,
  MatInputModule,
  MatDatepickerModule
} from "@angular/material";
import { MatMomentDateModule } from "@angular/material-moment-adapter";

describe("DxcDate", () => {
  const newMockDate = new Date("1995/12/03");
  const newValue = "03/12/1995";

  test("should render dxc-date", async () => {
    const { getByText } = await render(DxcDateComponent, {
      componentProperties: { label: "test-date" },
      imports: [
        MatMomentDateModule,
        MatNativeDateModule,
        MatInputModule,
        MatDatepickerModule
      ]
    });

    expect(getByText("test-date"));
  });

  test("The input´s value is the same as the one received as a parameter", () => {})

  test("dxc-date value change and default format", async () => {
    const onChangeFunction = jest.fn(x => {
      x;
    });
    const { getByRole } = await render(DxcDateComponent, {
      componentProperties: {
        label: "test-date",
        onChange: { emit: onChangeFunction } as any
      },
      imports: [
        MatMomentDateModule,
        MatNativeDateModule,
        MatInputModule,
        MatDatepickerModule
      ]
    });

    const input = <HTMLInputElement>getByRole("textbox");
    fireEvent.change(input, { target: { value: newValue } });
    expect(onChangeFunction).toHaveBeenCalledWith({
      stringValue: newValue,
      dateValue: newMockDate
    });
  });

  test("Calendar´s value is the same as the input´s date if it´s right (Depending on the format)", () => {});

  test("dxc-date invalid value", async () => {
    const onChangeFunction = jest.fn(x => {
      x;
    });
    const { getByRole } = await render(DxcDateComponent, {
      componentProperties: {
        label: "test-date",
        onChange: { emit: onChangeFunction } as any
      },
      imports: [
        MatMomentDateModule,
        MatNativeDateModule,
        MatInputModule,
        MatDatepickerModule
      ]
    });

    const invalidValue = "03/12/199_";

    const input = <HTMLInputElement>getByRole("textbox");
    fireEvent.change(input, { target: { value: invalidValue } });
    expect(onChangeFunction).toHaveBeenCalledWith({
      stringValue: invalidValue
    });
  });

  test("onChange function is called when the user selects from the calendar", () => {});

  test("onChange function is called when the user selects from the calendar, the dateValue received by the function is the selected date", () => {});

  test("onChange function is called when the user selects from the calendar, the stringValue received by the function is the date with the correct format", () => {});

  test("If the user types something, if controlled and without onChange, the value doesn´t change", () => {});
});
