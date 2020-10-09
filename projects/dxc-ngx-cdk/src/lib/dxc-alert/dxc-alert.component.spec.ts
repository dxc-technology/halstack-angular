import { render, fireEvent } from "@testing-library/angular";
import { DxcAlertComponent } from "./dxc-alert.component";

describe("DxcAlertComponent tests", () => {
  test("should render default dxc-alert", async () => {
    const projection = "Content inside the ng-content!";
    const dxcAlert = await render(DxcAlertComponent, {
      template: `<dxc-alert>${projection}</dxc-alert>`,
      componentProperties: {},
    });

    expect(dxcAlert.getByText(projection));
    expect(dxcAlert.getByText("INFORMATION"));
  });

  test("should render dxc-alert warning", async () => {
    const projection = "Content inside the ng-content!";
    const dxcAlert = await render(DxcAlertComponent, {
      template: `<dxc-alert type="warning">${projection}</dxc-alert>`,
      componentProperties: {},
    });

    expect(dxcAlert.getByText(projection));
    expect(dxcAlert.getByText("WARNING"));
  });

  test("should render dxc-alert error", async () => {
    const projection = "Content inside the ng-content!";
    const dxcAlert = await render(DxcAlertComponent, {
      template: `<dxc-alert type="error">${projection}</dxc-alert>`,
      componentProperties: {},
    });

    expect(dxcAlert.getByText(projection));
    expect(dxcAlert.getByText("ERROR"));
  });

  test("should render dxc-alert confirm", async () => {
    const projection = "Content inside the ng-content!";
    const dxcAlert = await render(DxcAlertComponent, {
      template: `<dxc-alert type="confirm">${projection}</dxc-alert>`,
      componentProperties: {},
    });

    expect(dxcAlert.getByText(projection));
    expect(dxcAlert.getByText("SUCCESS"));
  });

  test("should dxc-alert call onClose", async () => {
    const onCloseFunction = jest.fn();
    const projection = "Content inside the ng-content!";
    const dxcAlert = await render(DxcAlertComponent, {
      template: `<dxc-alert (onClose)="onCloseFunction()">${projection}</dxc-alert>`,
      componentProperties: { onCloseFunction },
    });

    expect(dxcAlert.getByText(projection));
    const closeIcon = dxcAlert.getByTestId("closeIcon");

    fireEvent.click(closeIcon);
    expect(onCloseFunction).toHaveBeenCalled();
  });
});
