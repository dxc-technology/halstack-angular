import { render, fireEvent } from "@testing-library/angular";
import { DxcWizardComponent } from "./dxc-wizard.component";
import { DxcWizardStepComponent } from "./dxc-wizard-step/dxc-wizard-step.component";
import { DxcWizardModule } from "./dxc-wizard.module";
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from "@angular/platform-browser-dynamic/testing";
import { TestBed } from "@angular/core/testing";

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

describe("DxcWizardComponent tests", () => {
  test("should render dxc-wizard", async () => {
    const { getByText, getAllByRole } = await render(
      `<dxc-wizard>
        <dxc-wizard-step label="first-step"></dxc-wizard-step>
        <dxc-wizard-step label="second-step"></dxc-wizard-step>
      </dxc-wizard>`,
      {
        imports: [DxcWizardModule],
        excludeComponentDeclaration: true,
      }
    );

    expect(getByText("first-step"));
    expect(getByText("second-step"));
    const btn = getAllByRole("button");
    expect(btn[0].getAttribute("aria-current")).toBe("true");
    expect(btn[1].getAttribute("aria-current")).toBe("false");
  });

  test("click on step text", async () => {
    const onClickFunction = jest.fn((i) => null);
    const { getByText, getAllByRole } = await render(
      `<dxc-wizard (onStepClick)="onClickFunction($event)">
        <dxc-wizard-step label="first-step"></dxc-wizard-step>
        <dxc-wizard-step label="second-step"></dxc-wizard-step>
      </dxc-wizard>`,
      {
        componentProperties: {
          onClickFunction,
        },
        imports: [DxcWizardModule],
        excludeComponentDeclaration: true,
      }
    );

    const step = getByText("first-step");
    fireEvent.click(step);
    expect(onClickFunction).toHaveBeenCalledWith(0);
    const btn = getAllByRole("button");
    expect(btn[0].getAttribute("aria-current")).toBe("true");
    expect(btn[1].getAttribute("aria-current")).toBe("false");
  });

  test("click on step text with description", async () => {
    const onClickFunction = jest.fn((i) => null);
    const { getByText, getAllByRole } = await render(
      `<dxc-wizard (onStepClick)="onClickFunction($event)">
        <dxc-wizard-step label="first-step"></dxc-wizard-step>
        <dxc-wizard-step label="second-step" description="step-description"></dxc-wizard-step>
      </dxc-wizard>`,
      {
        componentProperties: {
          onClickFunction,
        },
        imports: [DxcWizardModule],
        excludeComponentDeclaration: true,
      }
    );

    const step = getByText("step-description");
    fireEvent.click(step);
    expect(onClickFunction).toHaveBeenCalledWith(1);
    const btn = getAllByRole("button");
    expect(btn[0].getAttribute("aria-current")).toBe("false");
    expect(btn[1].getAttribute("aria-current")).toBe("true");
  });

  test("click on step number", async () => {
    const onClickFunction = jest.fn((i) => null);
    const { getByText, getAllByRole } = await render(
      `<dxc-wizard (onStepClick)="onClickFunction($event)">
        <dxc-wizard-step label="first-step"></dxc-wizard-step>
        <dxc-wizard-step label="second-step" description="step-description"></dxc-wizard-step>
      </dxc-wizard>`,
      {
        componentProperties: {
          onClickFunction,
        },
        imports: [DxcWizardModule],
        excludeComponentDeclaration: true,
      }
    );

    const step = getByText("1");
    fireEvent.click(step);
    expect(onClickFunction).toHaveBeenCalledWith(0);
    const btn = getAllByRole("button");
    expect(btn[0].getAttribute("aria-current")).toBe("true");
    expect(btn[1].getAttribute("aria-current")).toBe("false");
  });

  test("click on disabled step", async () => {
    const onClickFunction = jest.fn((i) => null);
    const { getByText, getAllByRole } = await render(
      `<dxc-wizard (onStepClick)="onClickFunction($event)">
          <dxc-wizard-step label="first-step"></dxc-wizard-step>
          <dxc-wizard-step label="second-step" disabled="true"></dxc-wizard-step>
        </dxc-wizard>`,
      {
        componentProperties: {
          onClickFunction,
        },
        imports: [DxcWizardModule],
        excludeComponentDeclaration: true,
      }
    );

    const step = getByText("second-step");
    fireEvent.click(step);
    expect(onClickFunction).toHaveBeenCalledTimes(0);
    const btn = getAllByRole("button");
    expect(btn[0].getAttribute("aria-current")).toBe("true");
    expect(btn[1].getAttribute("aria-current")).toBe("false");
  });

  test("wizard with default step", async () => {
    const onClickFunction = jest.fn((i) => null);
    const { getAllByRole } = await render(
      `<dxc-wizard defaultCurrentStep="2">
        <dxc-wizard-step label="first-step"></dxc-wizard-step>
        <dxc-wizard-step label="second-step"></dxc-wizard-step>
        <dxc-wizard-step label="third-step"></dxc-wizard-step>
      </dxc-wizard>`,
      {
        componentProperties: {
          onClickFunction,
        },
        imports: [DxcWizardModule],
        excludeComponentDeclaration: true,
      }
    );
    const btn = getAllByRole("button");
    expect(btn[0].getAttribute("aria-current")).toBe("false");
    expect(btn[1].getAttribute("aria-current")).toBe("false");
    expect(btn[2].getAttribute("aria-current")).toBe("true");
  });

  test("wizard with default step and current step", async () => {
    const onClickFunction = jest.fn((i) => null);
    const { getAllByRole } = await render(
      `<dxc-wizard defaultCurrentStep="2" currentStep="1">
        <dxc-wizard-step label="first-step"></dxc-wizard-step>
        <dxc-wizard-step label="second-step"></dxc-wizard-step>
        <dxc-wizard-step label="third-step"></dxc-wizard-step>
      </dxc-wizard>`,
      {
        componentProperties: {
          onClickFunction,
        },
        imports: [DxcWizardModule],
        excludeComponentDeclaration: true,
      }
    );
    const btn = getAllByRole("button");
    expect(btn[0].getAttribute("aria-current")).toBe("false");
    expect(btn[1].getAttribute("aria-current")).toBe("true");
    expect(btn[2].getAttribute("aria-current")).toBe("false");
  });
});
