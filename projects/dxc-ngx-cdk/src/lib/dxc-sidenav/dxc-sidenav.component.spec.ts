import { render, fireEvent } from "@testing-library/angular";
import { DxcSidenavComponent } from "./dxc-sidenav.component";
import { DxcSideNavModule } from "./dxc-sidenav.module";
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from "@angular/platform-browser-dynamic/testing";
import { TestBed } from "@angular/core/testing";

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

describe("DxcSidenav tests", () => {
  test("should render dxc-sidenav", async () => {
    const dxcSidenav = await render(
      `<dxc-sidenav>
        <dxc-sidenav-title>title</dxc-sidenav-title>
        <dxc-sidenav-subtitle>subtitle</dxc-sidenav-subtitle>
        <dxc-sidenav-link>link</dxc-sidenav-link>
      </dxc-sidenav>`,
      {
        excludeComponentDeclaration: true,
        imports: [DxcSideNavModule],
      }
    );

    expect(dxcSidenav.getByText("title"));
    expect(dxcSidenav.getByText("subtitle"));
    expect(dxcSidenav.getByText("link"));
  });

  test("dxc-sidenav link functionality", async () => {
    const onClickFunction = jest.fn();
    const dxcSidenav = await render(
      `<dxc-sidenav>
        <dxc-sidenav-link (onClick)="onClickFunction($event)">link</dxc-sidenav-link>
      </dxc-sidenav>`,
      {
        componentProperties: { onClickFunction },
        excludeComponentDeclaration: true,
        imports: [DxcSideNavModule],
      }
    );

    expect(dxcSidenav.getByText("link"));
    fireEvent.click(dxcSidenav.getByText("link"));
    expect(onClickFunction).toHaveBeenCalled();
  });
});
