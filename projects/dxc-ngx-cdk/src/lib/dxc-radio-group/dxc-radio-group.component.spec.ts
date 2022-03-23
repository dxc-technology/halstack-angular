import { render, fireEvent, screen } from "@testing-library/angular";
import userEvent from "@testing-library/user-event";
import { DxcRadioGroupComponent } from "./dxc-radio-group.component";
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from "@angular/platform-browser-dynamic/testing";
import { TestBed } from "@angular/core/testing";
import { DxcRadioGroupModule } from "./dxc-radio-group.module";

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

const options = [
  { value: "1", label: "label1", disabled: false },
  { value: "2", label: "label2", disabled: true },
  { value: "3", label: "label3", disabled: true },
  { value: "4", label: "label4", disabled: false },
];

describe("DxcRadioGroup tests", () => {
  test("should render dxc-radio-group", async () => {
    const dxcRadioGroup = await render(DxcRadioGroupComponent, {
      componentProperties: { label: "test-radio-group", options: options },
      excludeComponentDeclaration: true,
      imports: [DxcRadioGroupModule],
    });

    expect(dxcRadioGroup.getByText("test-radio-group"));
    expect(dxcRadioGroup.getByText("label1"));
    expect(dxcRadioGroup.getByText("label2"));
    expect(dxcRadioGroup.getByText("label3"));
    expect(dxcRadioGroup.getByText("label4"));
  });

  test("dxc-radio-group should render optional item", async () => {
    const dxcRadioGroup = await render(DxcRadioGroupComponent, {
      componentProperties: { label: "test-radio-group", options: options, optional: true },
      excludeComponentDeclaration: true,
      imports: [DxcRadioGroupModule],
    });
    expect(dxcRadioGroup.getByText("(Optional)"));
    expect(dxcRadioGroup.getByText("label1"));
    expect(dxcRadioGroup.getByText("label2"));
    expect(dxcRadioGroup.getByText("label3"));
    expect(dxcRadioGroup.getByText("label4"));
    expect(dxcRadioGroup.getByText("N/A"));
  });

  test("dxc-radio-group should render optional item with custom label", async () => {
    const dxcRadioGroup = await render(DxcRadioGroupComponent, {
      componentProperties: { label: "test-radio-group", options: options, optional: true, optionalItemLabel: "optional item" },
      excludeComponentDeclaration: true,
      imports: [DxcRadioGroupModule],
    });

    expect(dxcRadioGroup.getByText("label1"));
    expect(dxcRadioGroup.getByText("label2"));
    expect(dxcRadioGroup.getByText("label3"));
    expect(dxcRadioGroup.getByText("label4"));
    expect(dxcRadioGroup.getByText("optional item"));
  });

  test("dxc-radio-group shoul render error message", async () => {
    const dxcRadioGroup = await render(DxcRadioGroupComponent, {
      componentProperties: {
        label: "test-radio-group",
        options: options,
        error: "Error message",
      },
      excludeComponentDeclaration: true,
      imports: [DxcRadioGroupModule],
    });

    expect(dxcRadioGroup.getByText("Error message"));
  });

  test("dxc-radio-group should change value when uncontrolled", async () => {
    const changeMock = jest.fn((x) => {});

    const dxcRadioGroup = await render(DxcRadioGroupComponent, {
      componentProperties: {
        label: "test-radio-group",
        options: options,
        onChange: {
          emit: changeMock,
        } as any,
      },
      excludeComponentDeclaration: true,
      imports: [DxcRadioGroupModule],
    });

    fireEvent.click(dxcRadioGroup.getByText("label1"));
    expect(changeMock).toHaveBeenCalledWith("1");
    expect(screen.getAllByRole("radio")[0].getAttribute("aria-checked")).toBe(
      "true"
    );
  });

  test("dxc-radio-group should not change value when controlled", async () => {
    const changeMock = jest.fn((x) => {});

    const dxcRadioGroup = await render(DxcRadioGroupComponent, {
      componentProperties: {
        label: "test-radio-group",
        options: options,
        value: "1",
        onChange: {
          emit: changeMock,
        } as any,
      },
      excludeComponentDeclaration: true,
      imports: [DxcRadioGroupModule],
    });

    fireEvent.click(dxcRadioGroup.getByText("label4"));
    expect(changeMock).toHaveBeenCalledWith("4");
    expect(screen.getAllByRole("radio")[0].getAttribute("aria-checked")).toBe(
      "true"
    );
    expect(screen.getAllByRole("radio")[3].getAttribute("aria-checked")).toBe(
      "false"
    );
  });

  test("dxc-radio-group click on disabled should not emit", async () => {
    const changeMock = jest.fn((x) => {});

    const dxcRadioGroup = await render(DxcRadioGroupComponent, {
      componentProperties: {
        label: "test-radio-group",
        options: options,
        value: "1",
        onChange: {
          emit: changeMock,
        } as any,
      },
      excludeComponentDeclaration: true,
      imports: [DxcRadioGroupModule],
    });

    fireEvent.click(dxcRadioGroup.getByText("label2"));
    fireEvent.click(dxcRadioGroup.getByText("label3"));
    expect(screen.getAllByRole("radio")[0].getAttribute("aria-checked")).toBe(
      "true"
    );
    expect(screen.getAllByRole("radio")[1].getAttribute("aria-checked")).toBe(
      "false"
    );
    expect(screen.getAllByRole("radio")[2].getAttribute("aria-checked")).toBe(
      "false"
    );
    expect(changeMock).toBeCalledTimes(0);
  });

  test("dxc-radio-group click on readOnly should not emit", async () => {
    const changeMock = jest.fn((x) => {});

    const dxcRadioGroup = await render(DxcRadioGroupComponent, {
      componentProperties: {
        label: "test-radio-group",
        options: options,
        value: "1",
        readOnly: true,
        onChange: {
          emit: changeMock,
        } as any,
      },
      excludeComponentDeclaration: true,
      imports: [DxcRadioGroupModule],
    });

    fireEvent.click(dxcRadioGroup.getByText("label2"));
    fireEvent.click(dxcRadioGroup.getByText("label3"));
    fireEvent.click(dxcRadioGroup.getByText("label4"));
    expect(screen.getAllByRole("radio")[0].getAttribute("aria-checked")).toBe(
      "true"
    );
    expect(screen.getAllByRole("radio")[1].getAttribute("aria-checked")).toBe(
      "false"
    );
    expect(screen.getAllByRole("radio")[2].getAttribute("aria-checked")).toBe(
      "false"
    );
    expect(screen.getAllByRole("radio")[3].getAttribute("aria-checked")).toBe(
      "false"
    );
    expect(changeMock).toBeCalledTimes(0);
  });

  test("dxc-radio-group keyboard events", async () => {
    const changeMock = jest.fn((x) => {});
    const blurMock = jest.fn((x) => {});

    const dxcRadioGroup = await render(DxcRadioGroupComponent, {
      componentProperties: {
        label: "test-radio-group",
        options: options,
        onChange: {
          emit: changeMock,
        } as any,
        onBlur: {
          emit: blurMock,
        } as any,
      },
      excludeComponentDeclaration: true,
      imports: [DxcRadioGroupModule],
    });

    userEvent.tab();
    expect(changeMock).toHaveBeenCalledTimes(0);
    userEvent.keyboard(" ");
    expect(changeMock).toHaveBeenCalledWith("1");
    userEvent.keyboard("{ArrowUp}");
    expect(changeMock).toHaveBeenCalledWith("4");
    dxcRadioGroup.detectChanges();
    expect(screen.getAllByRole("radio")[3].getAttribute("aria-checked")).toBe(
      "true"
    );
    userEvent.tab();
    expect(blurMock).toHaveBeenCalledWith({value: "4" , error: undefined});
  });

  test("dxc-radio-group onBlur event", async () => {
    const changeMock = jest.fn((x) => {});
    const blurMock = jest.fn((x) => {});

    const dxcRadioGroup = await render(DxcRadioGroupComponent, {
      componentProperties: {
        label: "test-radio-group",
        options: options,
        onChange: {
          emit: changeMock,
        } as any,
        onBlur: {
          emit: blurMock,
        } as any,
      },
      excludeComponentDeclaration: true,
      imports: [DxcRadioGroupModule],
    });

    userEvent.tab();
    expect(changeMock).toHaveBeenCalledTimes(0);
    userEvent.tab();
    expect(blurMock).toHaveBeenCalledWith({value: undefined , error: "This is required"});
  });
});
