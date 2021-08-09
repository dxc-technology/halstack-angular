import { render, fireEvent } from "@testing-library/angular";
import { BackgroundProviderModule } from "../background-provider/background-provider.module";
import { DxcAlertComponent } from "./dxc-alert.component";

describe("DxcAlertComponent tests", () => {
  test("should render default dxc-alert", async () => {
    const projection = "Content inside the ng-content!";
    const dxcAlert = await render(DxcAlertComponent, {
      template: `<dxc-alert>${projection}</dxc-alert>`,
      componentProperties: {},
      imports: [BackgroundProviderModule],
    });

    expect(dxcAlert.getByText(projection));
    expect(dxcAlert.getByText("information"));
  });

  test("should render dxc-alert warning", async () => {
    const projection = "Content inside the ng-content!";
    const dxcAlert = await render(DxcAlertComponent, {
      template: `<dxc-alert type="warning">${projection}</dxc-alert>`,
      componentProperties: {},
      imports: [BackgroundProviderModule],
    });

    expect(dxcAlert.getByText(projection));
    expect(dxcAlert.getByText("warning"));
  });

  test("should render dxc-alert error", async () => {
    const projection = "Content inside the ng-content!";
    const dxcAlert = await render(DxcAlertComponent, {
      template: `<dxc-alert type="error">${projection}</dxc-alert>`,
      componentProperties: {},
      imports: [BackgroundProviderModule],
    });

    expect(dxcAlert.getByText(projection));
    expect(dxcAlert.getByText("error"));
  });

  test("should render dxc-alert confirm", async () => {
    const projection = "Content inside the ng-content!";
    const dxcAlert = await render(DxcAlertComponent, {
      template: `<dxc-alert type="confirm">${projection}</dxc-alert>`,
      componentProperties: {},
      imports: [BackgroundProviderModule],
    });

    expect(dxcAlert.getByText(projection));
    expect(dxcAlert.getByText("success"));
  });

  test("should dxc-alert call onClose", async () => {
    const onCloseFunction = jest.fn();
    const projection = "Content inside the ng-content!";
    const dxcAlert = await render(DxcAlertComponent, {
      template: `<dxc-alert (onClose)="onCloseFunction()">${projection}</dxc-alert>`,
      componentProperties: { onCloseFunction },
      imports: [BackgroundProviderModule],
    });

    expect(dxcAlert.getByText(projection));
    const closeIcon = dxcAlert.getByTestId("closeIcon");

    fireEvent.click(closeIcon);
    expect(onCloseFunction).toHaveBeenCalled();
  });
});
