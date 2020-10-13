import { render, fireEvent } from "@testing-library/angular";
import { DxcWizardComponent } from "./dxc-wizard.component";
import { DxcStepComponent } from "./dxc-step/dxc-step.component";

describe("DxcWizardComponent tests", () => {
  test("should render dxc-wizard", async () => {
    const { getByText } = await render(DxcWizardComponent, {
      declarations: [DxcStepComponent],
      componentProperties: {
        steps: [{ label: "first-step" }, { label: "second-step" }],
      },
    });

    expect(getByText("first-step"));
    expect(getByText("second-step"));
  });

  test("click on step text", async () => {
    const onClickFunction = jest.fn((i) => null);
    const { getByText } = await render(DxcWizardComponent, {
      declarations: [DxcStepComponent],
      componentProperties: {
        steps: [{ label: "first-step" }],
        onStepClick: { emit: onClickFunction } as any,
      },
    });

    const step = getByText("first-step");
    fireEvent.click(step);
    expect(onClickFunction).toHaveBeenCalled();
  });

  test("click on step text", async () => {
    const onClickFunction = jest.fn((i) => null);
    const { getByText } = await render(DxcWizardComponent, {
      declarations: [DxcStepComponent],
      componentProperties: {
        steps: [{ label: "first-step", description: "step-description" }],
        onStepClick: { emit: onClickFunction } as any,
      },
    });

    const step = getByText("step-description");
    fireEvent.click(step);
    expect(onClickFunction).toHaveBeenCalled();
  });

  test("click on step number", async () => {
    const onClickFunction = jest.fn((i) => null);
    const { getByText } = await render(DxcWizardComponent, {
      declarations: [DxcStepComponent],
      componentProperties: {
        steps: [{ label: "first-step", description: "step-description" }],
        onStepClick: { emit: onClickFunction } as any,
      },
    });

    const step = getByText("1");
    fireEvent.click(step);
    expect(onClickFunction).toHaveBeenCalled();
  });

  test("click on disable step", async () => {
    const onClickFunction = jest.fn((i) => null);
    const { getByText } = await render(DxcWizardComponent, {
      declarations: [DxcStepComponent],
      componentProperties: {
        steps: [
          { label: "first-step" },
          { label: "second-step", disabled: true },
        ],
        onStepClick: { emit: onClickFunction } as any,
      },
    });

    const step = getByText("second-step");
    fireEvent.click(step);
    expect(onClickFunction).toHaveBeenCalledTimes(0);
  });
});
