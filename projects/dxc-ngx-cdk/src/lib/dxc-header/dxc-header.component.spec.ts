import { render, fireEvent } from "@testing-library/angular";
import { screen } from "@testing-library/dom";
import { DxcHeaderComponent } from "./dxc-header.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { TestBed } from "@angular/core/testing";
import { PipesModule } from "../pipes/pipes.module";
import { BackgroundProviderModule } from "../background-provider/background-provider.module";
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from "@angular/platform-browser-dynamic/testing";

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

describe("DxcHeader tests", () => {
  test("should render dxc-header", async () => {
    await render(`<dxc-header></dxc-header>`, {
      imports: [PipesModule, BackgroundProviderModule],
      componentProperties: {},
      declarations: [DxcHeaderComponent],
    });
    expect(screen.getAllByRole("img")).toBeTruthy();
  });

  test("should click on logo", async () => {
    const onClick = jest.fn();
    await render(`<dxc-header (onClick)="onClick($event)"></dxc-header>`, {
      imports: [PipesModule, BackgroundProviderModule],
      componentProperties: { onClick },
      declarations: [DxcHeaderComponent],
    });
    fireEvent.click(screen.getAllByRole("img")[0]);
    expect(onClick).toHaveBeenCalled();
  });

  test("Header renders with menu", async () => {
    Object.defineProperty(window, "innerWidth", {
      configurable: true,
      value: 375,
    });
    TestBed.overrideComponent(DxcHeaderComponent, {
      set: { selector: "header" },
    });
    await render(`<header isResponsive="true" isMenuVisible="true"></header>`, {
      imports: [PipesModule, BackgroundProviderModule],
      componentProperties: {},
      declarations: [DxcHeaderComponent],
    });
    expect(screen.getByText("Menu"));
  });
});
