import { render, fireEvent } from "@testing-library/angular";
import { BackgroundProviderModule } from "../background-provider/background-provider.module";
import { DxcDialogComponent } from "./dxc-dialog.component";

describe("DxcDialog tests", () => {
  const projection = "Content inside the ng-content!";

  test("should render dxc-dialog", async () => {
    const dxcDialog = await render(DxcDialogComponent, {
      template: `<dxc-dialog>${projection}</dxc-dialog>`,
      componentProperties: {},
      imports: [BackgroundProviderModule],
    });

    expect(dxcDialog.getByText(projection));
  });

  test("should call onCloseClick dxc-dialog", async () => {
    const onCloseClickFunction = jest.fn();
    const dxcDialog = await render(DxcDialogComponent, {
      template: `<dxc-dialog (onCloseClick)="onCloseClickFunction()">${projection}</dxc-dialog>`,
      componentProperties: { onCloseClickFunction },
      imports: [BackgroundProviderModule],
    });

    expect(dxcDialog.getByText(projection));
    fireEvent.click(dxcDialog.getByRole("closeIcon"));
    expect(onCloseClickFunction).toHaveBeenCalled();
  });

  test("should call onBackgroundClick dxc-dialog", async () => {
    const onCloseClickFunction = jest.fn();
    const dxcDialog = await render(DxcDialogComponent, {
      template: `<dxc-dialog (onBackgroundClick)="onCloseClickFunction()">${projection}</dxc-dialog>`,
      componentProperties: { onCloseClickFunction },
      imports: [BackgroundProviderModule],
    });

    expect(dxcDialog.getByText(projection));
    fireEvent.click(dxcDialog.getByRole("overlay"));
    expect(onCloseClickFunction).toHaveBeenCalled();
  });
});
