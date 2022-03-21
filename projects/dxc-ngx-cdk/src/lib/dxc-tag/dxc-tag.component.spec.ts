import { render, fireEvent } from "@testing-library/angular";
import { DxcTagComponent } from "./dxc-tag.component";
import { DxcBoxModule } from "../dxc-box/dxc-box.module";
import { TestBed } from "@angular/core/testing";
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from "@angular/platform-browser-dynamic/testing";

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
describe("DxcTag tests", () => {
  test("should render dxc-tag", async () => {
    const { getByText } = await render(DxcTagComponent, {
      componentProperties: { label: "test-tag" },
      imports: [DxcBoxModule],
    });

    expect(getByText("test-tag"));
  });

  test("click on dxc-tag", async () => {
    const onClickFunction = jest.fn();
    const { getByText } = await render(
      `<dxc-tag label="test-tag" (onClick)="onClickFunction($event)"></dxc-tag>`,
      {
        declarations: [DxcTagComponent],
        componentProperties: { onClickFunction },
        imports: [DxcBoxModule],
      }
    );

    expect(getByText("test-tag"));
    fireEvent.click(getByText("test-tag"));
    expect(onClickFunction).toHaveBeenCalled();
  });
});
