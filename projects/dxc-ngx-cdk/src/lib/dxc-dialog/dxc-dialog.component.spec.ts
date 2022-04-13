import { render, fireEvent } from "@testing-library/angular";
import { BackgroundProviderModule } from "../background-provider/background-provider.module";
import { DxcDialogComponent } from "./dxc-dialog.component";
import { screen } from "@testing-library/dom";
import { TestBed } from "@angular/core/testing";
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from "@angular/platform-browser-dynamic/testing";
import { BackgroundProviderInnerModule } from "../background-provider/background-provider-inner.module";

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

describe("DxcDialog tests", () => {
  const projection = "Content inside the ng-content!";

  test("should render dxc-dialog", async () => {
    await render(`<dxc-dialog>${projection}</dxc-dialog>`, {
      imports: [BackgroundProviderInnerModule],
      declarations: [DxcDialogComponent],
    });

    expect(screen.getByText(projection));
  });

  test("should call onCloseClick dxc-dialog", async () => {
    const onCloseClickFunction = jest.fn();
    await render(
      `<dxc-dialog (onCloseClick)="onCloseClickFunction()">${projection}</dxc-dialog>`,
      {
        imports: [BackgroundProviderInnerModule],
        componentProperties: { onCloseClickFunction },
        declarations: [DxcDialogComponent],
      }
    );

    expect(screen.getByText(projection));
    fireEvent.click(screen.getByRole("closeIcon"));
    expect(onCloseClickFunction).toHaveBeenCalled();
  });

  test("should call onBackgroundClick dxc-dialog", async () => {
    const onCloseClickFunction = jest.fn();
    await render(
      `<dxc-dialog (onBackgroundClick)="onCloseClickFunction()">${projection}</dxc-dialog>`,
      {
        imports: [BackgroundProviderInnerModule],
        componentProperties: { onCloseClickFunction },
        declarations: [DxcDialogComponent],
      }
    );

    expect(screen.getByText(projection));
    fireEvent.click(screen.getByRole("overlay"));
    expect(onCloseClickFunction).toHaveBeenCalled();
  });
});
