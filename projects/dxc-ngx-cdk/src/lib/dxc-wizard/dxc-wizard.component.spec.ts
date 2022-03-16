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
    const { getByText } = await render(
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
  });

  test("click on step text", async () => {
    const onClickFunction = jest.fn((i) => null);
    const { getByText } = await render(
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
  });

  test("click on step text", async () => {
    const onClickFunction = jest.fn((i) => null);
    const { getByText } = await render(
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
  });

  test("click on step number", async () => {
    const onClickFunction = jest.fn((i) => null);
    const { getByText } = await render(
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
  });

  test("click on disable step", async () => {
    const onClickFunction = jest.fn((i) => null);
    const { getByText } = await render(
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
  });
});
