import { render } from "@testing-library/angular";
import { DxcFooterComponent } from "./dxc-footer.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { PipesModule } from "../pipes/pipes.module";
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

describe("DxcFooter tests", () => {
  test("should render dxc-footer", async () => {
    const text = "© DXC Technology 2019. All rights reserved.";
    const bottom = [
      {
        href: "https://www.test.com/test",
        text: "bottom-link-text",
      },
    ];
    await render(DxcFooterComponent, {
      imports: [BackgroundProviderModule, PipesModule],
      componentProperties: {
        copyright: text,
        bottomLinks: bottom,
      },
    });
    expect(screen.getByText(text)).toBeTruthy();
    expect(screen.getByText("bottom-link-text")).toBeTruthy();
  });
});
