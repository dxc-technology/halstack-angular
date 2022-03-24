import { render, fireEvent } from "@testing-library/angular";
import { screen } from "@testing-library/dom";

import { DxcSelectComponent } from "./dxc-select.component";
import { DxcSelectModule } from "./dxc-select.module";
import { Option } from "./interfaces/option.interface";

describe("DxcSelectComponent tests", () => {
  test("should render dxc-select", async () => {
    const dxcSelect = await render(DxcSelectComponent, {
      componentProperties: {
        label: "Select label",
        helperText: "Helper Text",
      },
      excludeComponentDeclaration: true,
      imports: [DxcSelectModule],
    });

    expect(dxcSelect.getByText("Select label"));
    expect(dxcSelect.getByText("Helper Text"));
  });

  test("should render list of options", async () => {
    const array1: Option[] = [
      { label: "label1", value: "1" },
      { label: "label2", value: "2" },
      { label: "label6", value: "6" },
      { label: "label9", value: "9" },
      { label: "aida", value: "10" },
      { label: "pepe", value: "11" },
    ];
    const dxcSelect = await render(DxcSelectComponent, {
      componentProperties: {
        label: "Select label",
        helperText: "Helper Text",
        options: array1,
      },
      excludeComponentDeclaration: true,
      imports: [DxcSelectModule],
    });

    expect(dxcSelect.getByText("Select label"));
    expect(dxcSelect.getByText("Helper Text"));
    fireEvent.click(dxcSelect.getByText("Choose an option"));
    expect(dxcSelect.getByText("label1"));
  });

  test("dxc-select single controlled functionality", async () => {
    const array1: Option[] = [
      { label: "label1", value: "1" },
      { label: "label2", value: "2" },
      { label: "label6", value: "6" },
      { label: "label9", value: "9" },
      { label: "aida", value: "10" },
      { label: "pepe", value: "11" },
    ];
    const changeMock = jest.fn((x) => {});
    const dxcSelect = await render(DxcSelectComponent, {
      componentProperties: {
        label: "Select label",
        helperText: "Helper Text",
        options: array1,
        onChange: {
          emit: changeMock,
        } as any,
        value: "1",
      },
      imports: [DxcSelectModule],
      excludeComponentDeclaration: true,
    });
    expect(dxcSelect.getByText("Select label"));
    expect(dxcSelect.getByText("Helper Text"));
    expect(dxcSelect.getByText("label1"));
    fireEvent.click(dxcSelect.getByRole("combobox"));
    expect(screen.getAllByText("label1")[1].getAttribute("aria-selected")).toBe(
      "true"
    );
    fireEvent.click(screen.getByText("aida"));
    expect(changeMock).toHaveBeenCalledWith({ value: "10", error: null });
    expect(screen.getAllByText("label1")[1].getAttribute("aria-selected")).toBe(
      "true"
    );
    expect(screen.getAllByText("aida")[0].getAttribute("aria-selected")).toBe(
      "false"
    );
    expect(screen.getAllByText("label2")[0].getAttribute("aria-selected")).toBe(
      "false"
    );
    expect(screen.getAllByText("label6")[0].getAttribute("aria-selected")).toBe(
      "false"
    );
    expect(screen.getAllByText("label9")[0].getAttribute("aria-selected")).toBe(
      "false"
    );
    expect(screen.getAllByText("pepe")[0].getAttribute("aria-selected")).toBe(
      "false"
    );
  });

  test("dxc-select single uncontrolled functionality", async () => {
    const array1: Option[] = [
      { label: "label1", value: "1" },
      { label: "label2", value: "2" },
      { label: "label6", value: "6" },
      { label: "label9", value: "9" },
      { label: "aida", value: "10" },
      { label: "pepe", value: "11" },
    ];
    const changeMock = jest.fn((x) => {});
    const dxcSelect = await render(DxcSelectComponent, {
      componentProperties: {
        label: "Select label",
        helperText: "Helper Text",
        options: array1,
        onChange: {
          emit: changeMock,
        } as any,
      },
      imports: [DxcSelectModule],
      excludeComponentDeclaration: true,
    });
    expect(dxcSelect.getByText("Select label"));
    expect(dxcSelect.getByText("Helper Text"));
    dxcSelect.getByText("Choose an option");
    fireEvent.click(dxcSelect.getByRole("combobox"));
    fireEvent.click(screen.getByText("aida"));
    expect(changeMock).toHaveBeenCalledWith({ value: "10", error: null });
    expect(screen.getAllByText("aida")[1].getAttribute("aria-selected")).toBe(
      "true"
    );
    expect(screen.getAllByText("label1")[0].getAttribute("aria-selected")).toBe(
      "false"
    );
    expect(screen.getAllByText("label2")[0].getAttribute("aria-selected")).toBe(
      "false"
    );
    expect(screen.getAllByText("label6")[0].getAttribute("aria-selected")).toBe(
      "false"
    );
    expect(screen.getAllByText("label9")[0].getAttribute("aria-selected")).toBe(
      "false"
    );
    expect(screen.getAllByText("pepe")[0].getAttribute("aria-selected")).toBe(
      "false"
    );
    fireEvent.click(screen.getByText("pepe"));
    expect(changeMock).toHaveBeenCalledWith({ value: "11", error: null });
    expect(screen.getAllByText("pepe")[1].getAttribute("aria-selected")).toBe(
      "true"
    );
    expect(screen.getAllByText("label1")[0].getAttribute("aria-selected")).toBe(
      "false"
    );
    expect(screen.getAllByText("label2")[0].getAttribute("aria-selected")).toBe(
      "false"
    );
    expect(screen.getAllByText("label6")[0].getAttribute("aria-selected")).toBe(
      "false"
    );
    expect(screen.getAllByText("label9")[0].getAttribute("aria-selected")).toBe(
      "false"
    );
    expect(screen.getAllByText("aida")[0].getAttribute("aria-selected")).toBe(
      "false"
    );
  });

  test("should render optional error", async () => {
    const array1: Option[] = [
      { label: "label1", value: "1" },
      { label: "label2", value: "2" },
      { label: "label6", value: "6" },
      { label: "label9", value: "9" },
      { label: "aida", value: "10" },
      { label: "pepe", value: "11" },
    ];
    const onBlur = jest.fn((x) => {});
    const dxcSelect = await render(DxcSelectComponent, {
      componentProperties: {
        label: "Select label",
        helperText: "Helper Text",
        options: array1,
        onBlur: {
          emit: onBlur,
        } as any,
      },
      excludeComponentDeclaration: true,
      imports: [DxcSelectModule],
    });

    expect(dxcSelect.getByText("Select label"));
    expect(dxcSelect.getByText("Helper Text"));
    fireEvent.click(dxcSelect.getByText("Choose an option"));
    fireEvent.focusOut(dxcSelect.getByText("Choose an option"));
    expect(onBlur).toHaveBeenCalledWith({
      value: "",
      error: "This field is required. Please, enter a value.",
    });
  });
});
