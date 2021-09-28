import { render, fireEvent } from "@testing-library/angular";
import { screen } from "@testing-library/dom";
import { DxcHeaderComponent } from "./dxc-header.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { TestBed } from "@angular/core/testing";
import { PipesModule } from '../pipes/pipes.module';
import { BackgroundProviderModule } from "../background-provider/background-provider.module";

describe("DxcHeader tests", () => {
  test("should render dxc-header", async () => {
    const header = await render(DxcHeaderComponent, {
      componentProperties: {},
      imports: [MatToolbarModule, PipesModule, BackgroundProviderModule],
    });
    expect(header.getAllByRole("img")).toBeTruthy();
  });

  test("should render dxc-header", async () => {
    const header = await render(DxcHeaderComponent, {
      componentProperties: {},
      imports: [MatToolbarModule, PipesModule, BackgroundProviderModule],
    });
    expect(header.getAllByRole("img")).toBeTruthy();
  });

  test("should click on logo", async () => {
    const onClick = jest.fn();
    const header = await render(DxcHeaderComponent, {
      componentProperties: {
        onClick: { emit: onClick } as any,
      },
      imports: [MatToolbarModule, PipesModule, BackgroundProviderModule],
    });
    fireEvent.click(header.getAllByRole("img")[0]);
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
    await render(DxcHeaderComponent, {
      template: `<header isResponsive="true" isMenuVisible="true"></header>`,
      imports: [MatToolbarModule, PipesModule, BackgroundProviderModule],
    });
    expect(screen.getByText("Menu"));
  });
});
