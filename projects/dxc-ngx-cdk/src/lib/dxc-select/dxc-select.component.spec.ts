import { render, fireEvent } from "@testing-library/angular";
import { DxcSelectComponent } from "./dxc-select.component";
import { MatSelectModule } from "@angular/material";
import { screen } from "@testing-library/dom";

const optionsMock = [
  {
    value: 'pepe',
    label: "Amazon"
  },
  {
    value: 'martin',
    label: "Ebay"
  },
  {
    value: '3',
    label: "Apple"
  },
  {
    value: '4',
    label: "Google"
  }
];

describe("DxcSelect tests", () => {
  test("should render dxc-select", async () => {
    const { getByText } = await render(DxcSelectComponent, {
      componentProperties: { label: "test-select", options: optionsMock },
      imports: [MatSelectModule]
    });

    expect(getByText("test-select"));
  });

  test("dxc-select options", async () => {
    const changeMock = jest.fn();
    const dxcSelect = await render(DxcSelectComponent, {
      componentProperties: {
        label: "test-select",
        options: optionsMock,
        onChange: { emit: changeMock } as any
      },
      imports: [MatSelectModule]
    });
    dxcSelect.detectChanges();
    fireEvent.click(dxcSelect.getByText("test-select"));
    dxcSelect.detectChanges();
    expect(screen.getByText("Google"));
    expect(screen.getByText("Apple"));
    expect(screen.getByText("Ebay"));
    expect(screen.getByText("Amazon"));
  });

  test("dxc-select uncontrolled functionality", async () => {
    const changeMock = jest.fn();
    const dxcSelect = await render(DxcSelectComponent, {
      componentProperties: {
        label: "test-select",
        options: optionsMock,
        onChange: { emit: changeMock } as any
      },
      imports: [MatSelectModule]
    });
    dxcSelect.detectChanges();
    fireEvent.click(dxcSelect.getByText("test-select"));
    dxcSelect.detectChanges();
    fireEvent.click(screen.getByText("Apple"));
    dxcSelect.detectChanges();
    expect(changeMock).toHaveBeenCalledWith("3");
    expect(dxcSelect.getByText("Apple"));
  });

  test("dxc-select assigned value", async () => {
    const changeMock = jest.fn();
    const dxcSelect = await render(DxcSelectComponent, {
      componentProperties: {
        label: "test-select",
        options: optionsMock,
        value: "pepe",
        onChange: { emit: changeMock } as any
      },
      imports: [MatSelectModule]
    });
    dxcSelect.detectChanges();
    expect(dxcSelect.getByText("Amazon"));
  });

  test("dxc-select controlled functionality", async () => {
    const changeMock = jest.fn();
    const dxcSelect = await render(DxcSelectComponent, {
      componentProperties: {
        label: "test-select",
        options: optionsMock,
        value: "pepe",
        onChange: { emit: changeMock } as any
      },
      imports: [MatSelectModule]
    });
    dxcSelect.detectChanges();
    fireEvent.click(dxcSelect.getByText("Amazon"));
    dxcSelect.detectChanges();
    expect(screen.getByText("Google"));
    fireEvent.click(screen.getByText("Apple"));
    dxcSelect.detectChanges();
    expect(changeMock).toHaveBeenCalledWith("3");
    expect(dxcSelect.getByText("Amazon"));
  });

  test("dxc-select uncontrolled multiple functionality", async () => {
    const changeMock = jest.fn();
    const dxcSelect = await render(DxcSelectComponent, {
      componentProperties: {
        label: "test-select",
        options: optionsMock,
        multiple: true,
        onChange: { emit: changeMock } as any
      },
      imports: [MatSelectModule]
    });
    dxcSelect.detectChanges();
    fireEvent.click(dxcSelect.getByText("test-select"));
    dxcSelect.detectChanges();
    fireEvent.click(screen.getByText("Apple"));
    expect(changeMock).toHaveBeenCalledWith(["3"]);
    fireEvent.click(screen.getByText("Google"));
    expect(changeMock).toHaveBeenCalledWith(["3", "4"]);
    dxcSelect.detectChanges();
    expect(dxcSelect.getByText("Apple,Google"));
  });

  test("dxc-select controlled multiple functionality", async () => {
    const changeMock = jest.fn();
    const dxcSelect = await render(DxcSelectComponent, {
      componentProperties: {
        label: "test-select",
        options: optionsMock,
        multiple: true,
        value: ["pepe", "martin"],
        onChange: { emit: changeMock } as any
      },
      imports: [MatSelectModule]
    });
    dxcSelect.detectChanges();
    dxcSelect.getByText("Amazon,Ebay");
    fireEvent.click(dxcSelect.getByText("Amazon,Ebay"));
    dxcSelect.detectChanges();
    fireEvent.click(screen.getByText("Apple"));
    expect(changeMock).toHaveBeenCalledWith(["pepe", "martin", "3"]);
    dxcSelect.detectChanges();
    fireEvent.click(dxcSelect.getByText("Amazon,Ebay"));
    dxcSelect.detectChanges();
    fireEvent.click(screen.getByText("Google"));
    expect(changeMock).toHaveBeenCalledWith(["pepe", "martin", "3", "4"]);
    dxcSelect.detectChanges();
    expect(dxcSelect.getByText("Amazon,Ebay"));
  });
});
