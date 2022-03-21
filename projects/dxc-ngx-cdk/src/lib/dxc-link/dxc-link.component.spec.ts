import { render, fireEvent } from "@testing-library/angular";
import { DxcLinkComponent } from "./dxc-link.component";
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from "@angular/platform-browser-dynamic/testing";
import { TestBed } from "@angular/core/testing";

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

describe("DxcLink tests", () => {
  test("should render dxc-link", async () => {
    const { getByText } = await render(DxcLinkComponent, {
      componentProperties: { text: "test-link" },
    });

    expect(getByText("test-link"));
  });

  test("Calls correct function with href", async () => {
    const { getByText } = await render(DxcLinkComponent, {
      componentProperties: { text: "test-link", href: "/testpage" },
    });

    const link = getByText("test-link");
    expect(link.getAttribute("href")).toEqual("/testpage");
  });

  test("click on dxc-link", async () => {
    const onClickFunction = jest.fn();
    const { getByText } = await render(
      `<dxc-link text="test-link" (onClick)="onClickFunction($event)"></dxc-link>`,
      {
        declarations: [DxcLinkComponent],
        componentProperties: { onClickFunction },
      }
    );

    expect(getByText("test-link"));
    fireEvent.click(getByText("test-link"));
    expect(onClickFunction).toHaveBeenCalled();
  });
});
