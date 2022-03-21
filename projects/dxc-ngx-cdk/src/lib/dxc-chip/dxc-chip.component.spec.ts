import { render } from "@testing-library/angular";
import { DxcChipComponent } from "./dxc-chip.component";
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

describe("DxcChip tests", () => {
  test("should render dxc-chip", async () => {
    await render(`<dxc-chip label="test-chip"></dxc-chip>`, {
      imports: [BackgroundProviderModule],
      declarations: [DxcChipComponent],
    });

    expect(screen.getByText("test-chip"));
  });
});
