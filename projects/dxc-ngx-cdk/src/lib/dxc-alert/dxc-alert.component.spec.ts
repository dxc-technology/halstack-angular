import { TestBed } from "@angular/core/testing";
import { render, fireEvent } from "@testing-library/angular";
import { BackgroundProviderModule } from "../background-provider/background-provider.module";
import { DxcAlertComponent } from "./dxc-alert.component";
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from "@angular/platform-browser-dynamic/testing";
import { screen } from "@testing-library/dom";
import { BackgroundProviderInnerModule } from "../background-provider/background-provider-inner.module";

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

describe("DxcAlertComponent tests", () => {
  test("should render default dxc-alert", async () => {
    const projection = "Content inside the ng-content!";
    await render(`  <dxc-alert>${projection}</dxc-alert>`, {
      imports: [BackgroundProviderInnerModule],
      componentProperties: {},
      declarations: [DxcAlertComponent],
    });
    expect(screen.getByText(projection));
    expect(screen.getByText("information"));
  });

  test("should render dxc-alert warning", async () => {
    const projection = "Content inside the ng-content!";
    await render(`  <dxc-alert type="warning">${projection}</dxc-alert>`, {
      imports: [BackgroundProviderInnerModule],
      componentProperties: {},
      declarations: [DxcAlertComponent],
    });
    expect(screen.getByText(projection));
    expect(screen.getByText("warning"));
  });

  test("should render dxc-alert error", async () => {
    const projection = "Content inside the ng-content!";
    await render(`<dxc-alert type="error">${projection}</dxc-alert>`, {
      imports: [BackgroundProviderInnerModule],
      componentProperties: {},
      declarations: [DxcAlertComponent],
    });
    expect(screen.getByText(projection));
    expect(screen.getByText("error"));
  });

  test("should render dxc-alert confirm", async () => {
    const projection = "Content inside the ng-content!";
    await render(`<dxc-alert type="confirm">${projection}</dxc-alert>`, {
      imports: [BackgroundProviderInnerModule],
      componentProperties: {},
      declarations: [DxcAlertComponent],
    });
    expect(screen.getByText(projection));
    expect(screen.getByText("success"));
  });

  test("should dxc-alert call onClose", async () => {
    const onCloseFunction = jest.fn();
    const projection = "Content inside the ng-content!";
    await render(
      `<dxc-alert (onClose)="onCloseFunction()">${projection}</dxc-alert>`,
      {
        imports: [BackgroundProviderInnerModule],
        componentProperties: { onCloseFunction },
        declarations: [DxcAlertComponent],
      }
    );
    expect(screen.getByText(projection));
    const closeIcon = screen.getByTestId("closeIcon");

    fireEvent.click(closeIcon);
    expect(onCloseFunction).toHaveBeenCalled();
  });
});
