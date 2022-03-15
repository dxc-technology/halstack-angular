import { render, fireEvent } from "@testing-library/angular";
import { DxcButtonComponent } from "./dxc-button.component";
import { TestBed } from "@angular/core/testing";
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from "@angular/platform-browser-dynamic/testing";
import { screen } from "@testing-library/dom";
import { BackgroundProviderModule } from "../background-provider/background-provider.module";

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

describe("DxcButton tests", () => {
  test("should render dxc-button", async () => {
    await render(`<dxc-button label="test-button"></dxc-button>`, {
      imports: [BackgroundProviderModule],
      componentProperties: {},
      declarations: [DxcButtonComponent],
    });

    expect(screen.getByText("test-button"));
  });

  test("Calls correct function on click", async () => {
    const onClickFunction = jest.fn();
    await render(
      `<dxc-button label="test-button" (onClick)="onClickFunction()"></dxc-button>`,
      {
        imports: [BackgroundProviderModule],
        componentProperties: { onClickFunction },
        declarations: [DxcButtonComponent],
      }
    );
    const button = screen.getByText("test-button");
    fireEvent.click(button);
    expect(onClickFunction).toHaveBeenCalled();
  });
});
