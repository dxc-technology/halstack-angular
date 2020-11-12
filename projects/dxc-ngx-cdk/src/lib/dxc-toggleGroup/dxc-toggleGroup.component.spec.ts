import { render, fireEvent } from "@testing-library/angular";
import { DxcToggleGroupComponent } from "./dxc-toggleGroup.component";
import { DxcToggleGroupModule } from "./dxc-toggleGroup.module";

const optionsMock = [
  {
    value: "pepe",
    label: "Amazon",
  },
  {
    value: "martin",
    label: "Ebay",
  },
  {
    value: "3",
    label: "Apple",
  },
  {
    value: "4",
    label: "Google",
  },
];

describe("DxcToggleGroup tests", () => {
  test("should render dxc-toggleGroup", async () => {
    const { getByText } = await render(DxcToggleGroupComponent, {
      componentProperties: { options: optionsMock },
      excludeComponentDeclaration: true,
      imports: [DxcToggleGroupModule],
    });

    expect(getByText("Amazon"));
    expect(getByText("Google"));
  });

  test("dxc-toggleGroup uncontrolled functionality", async () => {
    const changeMock = jest.fn();
    const dxcToggleGroup = await render(DxcToggleGroupComponent, {
      componentProperties: {
        options: optionsMock,
        onChange: { emit: changeMock } as any,
      },
      excludeComponentDeclaration: true,
      imports: [DxcToggleGroupModule],
    });

    expect(dxcToggleGroup.getByText("Amazon"));
    fireEvent.click(dxcToggleGroup.getByText("Amazon"));
    expect(changeMock).toHaveBeenCalledWith("pepe");
    fireEvent.click(dxcToggleGroup.getByText("Amazon"));
    expect(changeMock).toHaveBeenCalledWith("");
  });

  test("dxc-toggleGroup uncontrolled multiple functionality", async () => {
    const changeMock = jest.fn();
    const dxcToggleGroup = await render(DxcToggleGroupComponent, {
      componentProperties: {
        options: optionsMock,
        onChange: { emit: changeMock } as any,
        multiple: true
      },
      excludeComponentDeclaration: true,
      imports: [DxcToggleGroupModule],
    });

    expect(dxcToggleGroup.getByText("Amazon"));
    fireEvent.click(dxcToggleGroup.getByText("Amazon"));
    expect(changeMock).toHaveBeenCalledWith(["pepe"]);
    fireEvent.click(dxcToggleGroup.getByText("Apple"));
    expect(changeMock).toHaveBeenCalledWith(["pepe", "3"]);
    fireEvent.click(dxcToggleGroup.getByText("Amazon"));
    expect(changeMock).toHaveBeenCalledWith(["3"]);
  });

  test("dxc-toggleGroup controlled functionality", async () => {
    const changeMock = jest.fn();
    const dxcToggleGroup = await render(DxcToggleGroupComponent, {
      componentProperties: {
        options: optionsMock,
        onChange: { emit: changeMock } as any,
        value: "pepe"
      },
      excludeComponentDeclaration: true,
      imports: [DxcToggleGroupModule],
    });

    fireEvent.click(dxcToggleGroup.getByText("Google"));
    expect(changeMock).toHaveBeenCalledWith("4");
    fireEvent.click(dxcToggleGroup.getByText("Amazon"));
    expect(changeMock).toHaveBeenCalledWith("");
  });

  test("dxc-toggleGroup controlled multiple functionality", async () => {
    const changeMock = jest.fn();
    const dxcToggleGroup = await render(DxcToggleGroupComponent, {
      componentProperties: {
        options: optionsMock,
        onChange: { emit: changeMock } as any,
        value: "pepe",
        multiple: true
      },
      excludeComponentDeclaration: true,
      imports: [DxcToggleGroupModule],
    });

    fireEvent.click(dxcToggleGroup.getByText("Google"));
    expect(changeMock).toHaveBeenCalledWith(["pepe", "4"]);
    fireEvent.click(dxcToggleGroup.getByText("Amazon"));
    expect(changeMock).toHaveBeenCalledWith([]);
  });

  test("dxc-toggleGroup disabled", async () => {
    const changeMock = jest.fn();
    const dxcToggleGroup = await render(DxcToggleGroupComponent, {
      componentProperties: {
        options: optionsMock,
        onChange: { emit: changeMock } as any,
        disabled: true
      },
      excludeComponentDeclaration: true,
      imports: [DxcToggleGroupModule],
    });

    expect(dxcToggleGroup.getByText("Amazon"));
    fireEvent.click(dxcToggleGroup.getByText("Amazon"));
    expect(changeMock).toHaveBeenCalledTimes(0);
  });
});
