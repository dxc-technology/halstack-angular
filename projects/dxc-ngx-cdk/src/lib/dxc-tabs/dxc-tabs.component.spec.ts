import { render, fireEvent } from "@testing-library/angular";
import { screen } from "@testing-library/dom";
import { DxcTabsModule } from "./dxc-tabs.module";
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from "@angular/platform-browser-dynamic/testing";
import { TestBed } from "@angular/core/testing";

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

describe("DxcTabs tests", () => {
  test("should render dxc-tabs", async () => {
    const tabs = await render(
      `<dxc-tabs>
        <dxc-tab label="Tab1"></dxc-tab>
        <dxc-tab label="Tab2"></dxc-tab>
        <dxc-tab label="Tab3"></dxc-tab>
      </dxc-tabs>`,
      {
        componentProperties: {},
        imports: [DxcTabsModule],
        excludeComponentDeclaration: true,
      }
    );
    tabs.detectChanges();
    expect(tabs.getByText("Tab1")).toBeTruthy();
    expect(tabs.getByText("Tab2")).toBeTruthy();
    expect(tabs.getByText("Tab3")).toBeTruthy();
  });

  test("should render dxc-tabs with default value", async () => {
    const clickFunction = jest.fn();
    const tabs = await render(
      `<dxc-tabs margin="xsmall" defaultActiveTabIndex="2">
        <dxc-tab label="Tab1" (onTabClick)="clickFunction($event)"></dxc-tab>
        <dxc-tab label="Tab2" (onTabClick)="clickFunction($event)"></dxc-tab>
        <dxc-tab label="Tab3" (onTabClick)="clickFunction($event)"></dxc-tab>
      </dxc-tabs>`,
      {
        componentProperties: { clickFunction },
        imports: [DxcTabsModule],
        excludeComponentDeclaration: true,
      }
    );
    tabs.detectChanges();
    const arrTabs = screen.getAllByRole("tab");
    expect(arrTabs[0].getAttribute("aria-selected")).toBe("false");
    expect(arrTabs[1].getAttribute("aria-selected")).toBe("false");
    expect(arrTabs[2].getAttribute("aria-selected")).toBe("true");
    expect(tabs.getByText("Tab1")).toBeTruthy();
    expect(tabs.getByText("Tab2")).toBeTruthy();
    expect(tabs.getByText("Tab3")).toBeTruthy();

    const tab1 = screen.getByText("Tab1");
    fireEvent.click(tab1);
    tabs.detectChanges();
    expect(clickFunction).toHaveBeenCalledWith(0);
    expect(arrTabs[0].getAttribute("aria-selected")).toBe("true");
    expect(arrTabs[1].getAttribute("aria-selected")).toBe("false");
    expect(arrTabs[2].getAttribute("aria-selected")).toBe("false");
  });

  test("should render dxc-badge", async () => {
    const tabs = await render(
      `<dxc-tabs>
        <dxc-tab label="Tab1" notificationNumber="90"></dxc-tab>
        <dxc-tab label="Tab2" notificationNumber="150"></dxc-tab>
        <dxc-tab label="Tab3"></dxc-tab>
      </dxc-tabs>`,
      {
        componentProperties: {},
        imports: [DxcTabsModule],
        excludeComponentDeclaration: true,
      }
    );
    tabs.detectChanges();
    expect(tabs.getByText("90")).toBeTruthy();
    expect(tabs.getByText("+99")).toBeTruthy();
  });

  test("should render uncontrolled tabs", async () => {
    const clickFunction = jest.fn();
    const tabs = await render(
      `<dxc-tabs>
        <dxc-tab label="Tab1" (onTabClick)="clickFunction($event)"></dxc-tab>
        <dxc-tab label="Tab2" (onTabClick)="clickFunction($event)"></dxc-tab>
        <dxc-tab label="Tab3" (onTabClick)="clickFunction($event)"></dxc-tab>
      </dxc-tabs>`,
      {
        componentProperties: { clickFunction },
        imports: [DxcTabsModule],
        excludeComponentDeclaration: true,
      }
    );
    tabs.detectChanges();
    const tab1 = screen.getByText("Tab1");
    const tab2 = screen.getByText("Tab2");
    fireEvent.click(tab2);
    tabs.detectChanges();
    expect(clickFunction).toHaveBeenCalledWith(1);
    tabs.detectChanges();
    fireEvent.click(tab1);
    tabs.detectChanges();
    expect(clickFunction).toHaveBeenCalledWith(0);
  });

  test("should render controlled tabs", async () => {
    const clickFunction = jest.fn();
    const tabs = await render(
      `<dxc-tabs [activeTabIndex]="0">
        <dxc-tab label="Tab1" (onTabClick)="clickFunction($event)"></dxc-tab>
        <dxc-tab label="Tab2" (onTabClick)="clickFunction($event)"></dxc-tab>
        <dxc-tab label="Tab3" (onTabClick)="clickFunction($event)"></dxc-tab>
      </dxc-tabs>`,
      {
        componentProperties: { clickFunction },
        imports: [DxcTabsModule],
        excludeComponentDeclaration: true,
      }
    );
    tabs.detectChanges();
    const arrTabs = screen.getAllByRole("tab");
    expect(arrTabs[0].getAttribute("aria-selected")).toBe("true");
    expect(arrTabs[1].getAttribute("aria-selected")).toBe("false");
    expect(arrTabs[2].getAttribute("aria-selected")).toBe("false");
    const tab2 = screen.getByText("Tab2");
    const tab3 = screen.getByText("Tab3");
    fireEvent.click(tab2);
    tabs.detectChanges();
    expect(clickFunction).toHaveBeenCalledWith(1);
    expect(arrTabs[0].getAttribute("aria-selected")).toBe("false");
    expect(arrTabs[1].getAttribute("aria-selected")).toBe("true");
    expect(arrTabs[2].getAttribute("aria-selected")).toBe("false");
    tabs.detectChanges();
    fireEvent.click(tab3);
    tabs.detectChanges();
    expect(clickFunction).toHaveBeenCalledWith(2);
    expect(arrTabs[0].getAttribute("aria-selected")).toBe("false");
    expect(arrTabs[1].getAttribute("aria-selected")).toBe("false");
    expect(arrTabs[2].getAttribute("aria-selected")).toBe("true");
  });
});
