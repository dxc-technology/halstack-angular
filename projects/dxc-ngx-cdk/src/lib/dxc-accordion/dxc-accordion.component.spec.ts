import { render, fireEvent } from "@testing-library/angular";
import { screen } from "@testing-library/dom";
import { DxcAccordionComponent } from "./dxc-accordion.component";
import { MatExpansionModule } from "@angular/material/expansion";
import { TestBed } from "@angular/core/testing";
import { BackgroundProviderModule } from "../background-provider/background-provider.module";
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from "@angular/platform-browser-dynamic/testing";
import { BackgroundProviderInnerModule } from "../background-provider/background-provider-inner.module";

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

describe("DxcAccordion tests", () => {
  test("should render dxc-accordion", async () => {
    const { getByText } = await render(DxcAccordionComponent, {
      componentProperties: {
        label: "test-button",
        assistiveText: "assistiveText",
      },
      imports: [MatExpansionModule, BackgroundProviderInnerModule],
    });

    expect(getByText("test-button")).toBeTruthy();
    expect(getByText("assistiveText")).toBeTruthy();
  });

  test("defaultIsExpanded dxc-accordion", async () => {
    const projection = "Content inside the ng-content!";
    const onClickFunction = jest.fn();

    await render(
      `<dxc-accordion label="test-accordion" defaultIsExpanded="true" assistiveText="assistiveText" (onClick)="onClickFunction($event)">${projection}</dxc-accordion>`,
      {
        componentProperties: { onClickFunction },
        imports: [MatExpansionModule, BackgroundProviderInnerModule],
        declarations: [DxcAccordionComponent],
      }
    );

    expect(screen.getByText("test-accordion")).toBeTruthy();
    expect(screen.getByText("assistiveText"));

    expect(screen.getByText(projection).hidden).toBeFalsy();;
    fireEvent.click(screen.getByText("test-accordion"));
    expect(onClickFunction).toHaveBeenCalled();
    expect(screen.getByText(projection).hidden)
    fireEvent.click(screen.getByText("test-accordion"));
    expect(screen.getByText(projection).hidden).toBeFalsy();
  });

  test("controlled dxc-accordion", async () => {
    const projection = "Content inside the ng-content!";
    const onClickFunction = jest.fn();
    // TestBed.overrideComponent(DxcAccordionComponent, {
    //   set: { selector: "accordion" },
    // });
    const { getByText } = await render(
      `<dxc-accordion label="test-accordion" assistiveText="assistiveText" isExpanded="false" (onClick)="onClickFunction($event)">${projection}</dxc-accordion>`,
      {
        componentProperties: { onClickFunction },
        declarations: [DxcAccordionComponent],
        imports: [MatExpansionModule, BackgroundProviderInnerModule],
      }
    );

    expect(getByText("test-accordion")).toBeTruthy();
    expect(getByText("assistiveText"));

    expect(getByText(projection).hidden);
    fireEvent.click(getByText("test-accordion"));
    expect(onClickFunction).toHaveBeenCalled();
    expect(getByText(projection).hidden);
    fireEvent.click(getByText("test-accordion"));
    expect(getByText(projection).hidden);
  });
});
