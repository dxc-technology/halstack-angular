import { render, fireEvent } from "@testing-library/angular";
import { DxcCardComponent } from "./dxc-card.component";
import { MatCardModule } from "@angular/material/card";
import { DxcBoxModule } from "../dxc-box/dxc-box.module";
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

describe("DxcCardComponent tests", () => {
  test("should render dxc-card", async () => {
    const projection = "Content inside the ng-content!";
    await render(`<dxc-card>${projection}</dxc-card>`, {
      imports: [BackgroundProviderModule, DxcBoxModule],
      componentProperties: {},
      declarations: [DxcCardComponent],
    });

    expect(screen.getByText(projection));
  });

  test("dxc-card onClick", async () => {
    const projection = "Content inside the ng-content!";
    const onClickFunction = jest.fn();
    await render(
      `<dxc-card (onClick)="onClickFunction($event)">${projection}</dxc-card>`,
      {
        imports: [BackgroundProviderModule, DxcBoxModule],
        componentProperties: { onClickFunction },
        declarations: [DxcCardComponent],
      }
    );

    expect(screen.getByText(projection));
    fireEvent.click(screen.getByText(projection));
    expect(onClickFunction).toHaveBeenCalled();
  });
});
