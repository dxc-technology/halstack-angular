import { render, fireEvent } from "@testing-library/angular";
import { screen } from "@testing-library/dom";
import { DxcAccordionGroupComponent } from "./dxc-accordionGroup.component";
import { MatExpansionModule } from "@angular/material/expansion";
import { TestBed } from "@angular/core/testing";
import { DxcAccordionModule } from "../dxc-accordion/dxc-accordion.module";
import { DxcAccordionGroupModule } from "./dxc-accordionGroup.module";
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from "@angular/platform-browser-dynamic/testing";

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

describe("DxcAccordion tests", () => {
  test("should render dxc-accordion-group uncontrolled", async () => {
    const projection1 = "Lorem ipsum dolor sit amet";
    const projection2 = "Consectetur adipiscing elit";
    const projection3 = "Maecenas enim ipsum";
    await render(
      `<dxc-accordion-group>
                  <dxc-accordion label="test-accordion1">${projection1}</dxc-accordion>
                  <dxc-accordion label="test-accordion2">${projection2}</dxc-accordion>
                  <dxc-accordion label="test-accordion3">${projection3}</dxc-accordion>
                </dxc-accordion-group>`,
      {
        declarations: [DxcAccordionGroupComponent],
        imports: [
          DxcAccordionGroupModule,
          DxcAccordionModule,
          MatExpansionModule,
        ],
        excludeComponentDeclaration: true,
      }
    );

    expect(screen.getByText("test-accordion1")).toBeTruthy();
    expect(screen.getByText("test-accordion2")).toBeTruthy();
    expect(screen.getByText("test-accordion3")).toBeTruthy();
    expect(screen.getAllByRole("button")[0].getAttribute("aria-expanded")).toBe(
      "false"
    );
    expect(screen.getAllByRole("button")[1].getAttribute("aria-expanded")).toBe(
      "false"
    );
    expect(screen.getAllByRole("button")[2].getAttribute("aria-expanded")).toBe(
      "false"
    );
  });

  test("Accordion Group Uncontrolled with undefined ActiveIndex", async () => {
    const projection1 = "Lorem ipsum dolor sit amet";
    const projection2 = "Consectetur adipiscing elit";
    const projection3 = "Maecenas enim ipsum";
    const accordions = await render(
      `<dxc-accordion-group [indexActive]="undefined">
                  <dxc-accordion label="test-accordion1">${projection1}</dxc-accordion>
                  <dxc-accordion label="test-accordion2">${projection2}</dxc-accordion>
                  <dxc-accordion label="test-accordion3">${projection3}</dxc-accordion>
                </dxc-accordion-group>`,
      {
        declarations: [DxcAccordionGroupComponent],
        imports: [
          DxcAccordionGroupModule,
          DxcAccordionModule,
          MatExpansionModule,
        ],
        excludeComponentDeclaration: true,
      }
    );

    expect(screen.getByText("test-accordion1")).toBeTruthy();
    expect(screen.getByText("test-accordion2")).toBeTruthy();
    expect(screen.getByText("test-accordion3")).toBeTruthy();

    expect(screen.getByText(projection1).hidden);
    expect(screen.getByText(projection2).hidden);
    expect(screen.getByText(projection3).hidden);

    expect(screen.getAllByRole("button")[0].getAttribute("aria-expanded")).toBe(
      "false"
    );
    expect(screen.getAllByRole("button")[1].getAttribute("aria-expanded")).toBe(
      "false"
    );
    expect(screen.getAllByRole("button")[2].getAttribute("aria-expanded")).toBe(
      "false"
    );
  });

  test("Accordion Group uncontrolled with function", async () => {
    const projection1 = "Lorem ipsum dolor sit amet";
    const projection2 = "Consectetur adipiscing elit";
    const onClickFunction = jest.fn();
    await render(
      `<dxc-accordion-group (onActiveChange)="onClickFunction($event)">
                  <dxc-accordion label="test-accordion1">${projection1}</dxc-accordion>
                  <dxc-accordion label="test-accordion2">${projection2}</dxc-accordion>
                </dxc-accordion-group>`,
      {
        componentProperties: { onClickFunction },
        imports: [
          DxcAccordionGroupModule,
          DxcAccordionModule,
          MatExpansionModule,
        ],
        declarations: [DxcAccordionGroupComponent],
        excludeComponentDeclaration: true,
      }
    );

    expect(screen.getByText("test-accordion1")).toBeTruthy();
    expect(screen.getByText("test-accordion2")).toBeTruthy();

    expect(screen.getByText(projection1).hidden);
    expect(screen.getByText(projection2).hidden);
    expect(screen.getAllByRole("button")[0].getAttribute("aria-expanded")).toBe(
      "false"
    );
    expect(screen.getAllByRole("button")[1].getAttribute("aria-expanded")).toBe(
      "false"
    );

    fireEvent.click(screen.getByText("test-accordion1"));
    expect(onClickFunction).toHaveBeenCalled();
    expect(screen.getByText(projection1).hidden).toBeFalsy();
    expect(screen.getByText(projection2).hidden);
    expect(screen.getAllByRole("button")[0].getAttribute("aria-expanded")).toBe(
      "true"
    );
    expect(screen.getAllByRole("button")[1].getAttribute("aria-expanded")).toBe(
      "false"
    );

    fireEvent.click(screen.getByText("test-accordion2"));
    expect(onClickFunction).toHaveBeenCalled();
    expect(screen.getByText(projection2).hidden).toBeFalsy();
    expect(screen.getByText(projection1).hidden);
    expect(screen.getAllByRole("button")[0].getAttribute("aria-expanded")).toBe(
      "false"
    );
    expect(screen.getAllByRole("button")[1].getAttribute("aria-expanded")).toBe(
      "true"
    );
  });

  test("Accordion Group Controlled with index active", async () => {
    const projection1 = "Lorem ipsum dolor sit amet";
    const projection2 = "Consectetur adipiscing elit";
    const onClickFunction = jest.fn();
    const indexActive = 0;
    const { rerender } = await render(
      `<dxc-accordion-group [indexActive]="indexActive">
                  <dxc-accordion label="test-accordion1">${projection1}</dxc-accordion>
                  <dxc-accordion label="test-accordion2">${projection2}</dxc-accordion>
                </dxc-accordion-group>`,
      {
        declarations: [DxcAccordionGroupComponent],
        componentProperties: { onClickFunction, indexActive: 0 },
        imports: [
          DxcAccordionGroupModule,
          DxcAccordionModule,
          MatExpansionModule,
        ],
        excludeComponentDeclaration: true,
      }
    );
    expect(screen.getByText("test-accordion1")).toBeTruthy();
    expect(screen.getByText("test-accordion2")).toBeTruthy();

    expect(screen.getByText(projection1)).toBeTruthy();
    expect(screen.getByText(projection2).hidden);

    expect(screen.getAllByRole("button")[0].getAttribute("aria-expanded")).toBe(
      "true"
    );
    expect(screen.getAllByRole("button")[1].getAttribute("aria-expanded")).toBe(
      "false"
    );

    await rerender({ indexActive: 1 });

    expect(screen.getAllByRole("button")[0].getAttribute("aria-expanded")).toBe(
      "false"
    );
    expect(screen.getAllByRole("button")[1].getAttribute("aria-expanded")).toBe(
      "true"
    );
  });

  test("Accordion Group Controlled with static index active and function", async () => {
    const projection1 = "Lorem ipsum dolor sit amet";
    const projection2 = "Consectetur adipiscing elit";
    const onClickFunction = jest.fn();
    await render(
      `<dxc-accordion-group  [indexActive]="null" (onActiveChange)="onClickFunction($event)">
                  <dxc-accordion label="test-accordion1">${projection1}</dxc-accordion>
                  <dxc-accordion label="test-accordion2">${projection2}</dxc-accordion>
                </dxc-accordion-group>`,
      {
        declarations: [DxcAccordionGroupComponent],
        componentProperties: { onClickFunction },
        imports: [
          DxcAccordionGroupModule,
          DxcAccordionModule,
          MatExpansionModule,
        ],
        excludeComponentDeclaration: true,
      }
    );

    expect(screen.getByText("test-accordion1")).toBeTruthy();
    expect(screen.getByText("test-accordion2")).toBeTruthy();

    fireEvent.click(screen.getByText("test-accordion1"));
    expect(onClickFunction).toHaveBeenCalled();

    expect(screen.getByText(projection1).hidden);
    expect(screen.getByText(projection2).hidden);

    expect(screen.getAllByRole("button")[0].getAttribute("aria-expanded")).toBe(
      "false"
    );
    expect(screen.getAllByRole("button")[1].getAttribute("aria-expanded")).toBe(
      "false"
    );
  });
});
