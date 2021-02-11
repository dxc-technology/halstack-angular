import { render, fireEvent } from "@testing-library/angular";
import { screen } from "@testing-library/dom";
import { DxcAccordionGroupComponent } from "./dxc-accordionGroup.component";
import { MatExpansionModule } from "@angular/material/expansion";
import { TestBed } from "@angular/core/testing";
import { DxcAccordionModule } from '../dxc-accordion/dxc-accordion.module';
import { DxcAccordionGroupModule } from './dxc-accordionGroup.module';

describe("DxcAccordion tests", () => {
  test("should render dxc-accordion-group uncontrolled", async () => {
    const projection1 = "Lorem ipsum dolor sit amet";
    const projection2 = "Consectetur adipiscing elit";
    const projection3 = "Maecenas enim ipsum";
    const accordions = await render(DxcAccordionGroupComponent, {
      template: `<dxc-accordion-group>
                  <dxc-accordion label="test-accordion1">${projection1}</dxc-accordion>
                  <dxc-accordion label="test-accordion2">${projection2}</dxc-accordion>
                  <dxc-accordion label="test-accordion3">${projection3}</dxc-accordion>
                </dxc-accordion-group>`,
      imports: [DxcAccordionGroupModule,DxcAccordionModule,MatExpansionModule],
      excludeComponentDeclaration: true
    });
    accordions.detectChanges();

    expect(accordions.getByText("test-accordion1")).toBeTruthy();
    expect(accordions.getByText("test-accordion2")).toBeTruthy();
    expect(accordions.getByText("test-accordion3")).toBeTruthy();
  });

  test("Accordion Group Uncontrolled with undefined ActiveIndex", async () => {
    const projection1 = "Lorem ipsum dolor sit amet";
    const projection2 = "Consectetur adipiscing elit";
    const projection3 = "Maecenas enim ipsum";
    const accordions = await render(DxcAccordionGroupComponent, {
      template: `<dxc-accordion-group [indexActive]="undefined">
                  <dxc-accordion label="test-accordion1">${projection1}</dxc-accordion>
                  <dxc-accordion label="test-accordion2">${projection2}</dxc-accordion>
                  <dxc-accordion label="test-accordion3">${projection3}</dxc-accordion>
                </dxc-accordion-group>`,
      imports: [DxcAccordionGroupModule,DxcAccordionModule,MatExpansionModule],
      excludeComponentDeclaration: true
    });
    accordions.detectChanges();

    expect(accordions.getByText("test-accordion1")).toBeTruthy();
    expect(accordions.getByText("test-accordion2")).toBeTruthy();
    expect(accordions.getByText("test-accordion3")).toBeTruthy();

    expect(accordions.getByText(projection1).hidden);
    expect(accordions.getByText(projection2).hidden);
    expect(accordions.getByText(projection3).hidden);

  });

  test("Accordion Group uncontrolled with function", async () => {
    const projection1 = "Lorem ipsum dolor sit amet";
    const projection2 = "Consectetur adipiscing elit";
    const projection3 = "Maecenas enim ipsum";
    const onClickFunction = jest.fn();
    const accordions = await render(DxcAccordionGroupComponent, {
      template: `<dxc-accordion-group (onActiveChange)="onClickFunction($event)">
                  <dxc-accordion label="test-accordion1">${projection1}</dxc-accordion>
                  <dxc-accordion label="test-accordion2">${projection2}</dxc-accordion>
                  <dxc-accordion label="test-accordion3">${projection3}</dxc-accordion>
                </dxc-accordion-group>`,
      componentProperties: { onClickFunction },
      imports: [DxcAccordionGroupModule,DxcAccordionModule,MatExpansionModule],
      excludeComponentDeclaration: true
    });
    accordions.detectChanges();

    expect(accordions.getByText("test-accordion1")).toBeTruthy();
    expect(accordions.getByText("test-accordion2")).toBeTruthy();
    expect(accordions.getByText("test-accordion3")).toBeTruthy();

    expect(accordions.getByText(projection1).hidden);
    expect(accordions.getByText(projection2).hidden);
    expect(accordions.getByText(projection3).hidden);
    fireEvent.click(accordions.getByText("test-accordion1"));
    expect(onClickFunction).toHaveBeenCalled();
    expect(screen.getByText(projection1).hidden).toBeFalsy();
    expect(accordions.getByText(projection2).hidden);
    expect(accordions.getByText(projection3).hidden);
    fireEvent.click(accordions.getByText("test-accordion2"));
    expect(onClickFunction).toHaveBeenCalled();
    expect(screen.getByText(projection2).hidden).toBeFalsy();
    expect(accordions.getByText(projection1).hidden);
    expect(accordions.getByText(projection3).hidden);
    fireEvent.click(accordions.getByText("test-accordion3"));
    expect(onClickFunction).toHaveBeenCalled();
    expect(screen.getByText(projection3).hidden).toBeFalsy();
    expect(accordions.getByText(projection1).hidden);
    expect(accordions.getByText(projection2).hidden);
  });

  test("Accordion Group Controlled with static index active", async () => {
    const projection1 = "Lorem ipsum dolor sit amet";
    const projection2 = "Consectetur adipiscing elit";
    const onClickFunction = jest.fn();
    const accordions = await render(DxcAccordionGroupComponent, {
      template: `<dxc-accordion-group [indexActive]="0">
                  <dxc-accordion label="test-accordion1">${projection1}</dxc-accordion>
                  <dxc-accordion label="test-accordion2">${projection2}</dxc-accordion>
                </dxc-accordion-group>`,
      componentProperties: { onClickFunction },
      imports: [DxcAccordionGroupModule,DxcAccordionModule,MatExpansionModule],
      excludeComponentDeclaration: true
    });
    accordions.detectChanges();

    expect(accordions.getByText("test-accordion1")).toBeTruthy();
    expect(accordions.getByText("test-accordion2")).toBeTruthy();

    expect(accordions.getByText(projection1)).toBeTruthy();
    expect(accordions.getByText(projection2).hidden);

  });

  test("Accordion Group Controlled with static index active and function", async () => {
    const projection1 = "Lorem ipsum dolor sit amet";
    const projection2 = "Consectetur adipiscing elit";
    const onClickFunction = jest.fn();
    const accordions = await render(DxcAccordionGroupComponent, {
      template: `<dxc-accordion-group  [indexActive]="null" (onActiveChange)="onClickFunction($event)">
                  <dxc-accordion label="test-accordion1">${projection1}</dxc-accordion>
                  <dxc-accordion label="test-accordion2">${projection2}</dxc-accordion>
                </dxc-accordion-group>`,
      componentProperties: { onClickFunction },
      imports: [DxcAccordionGroupModule,DxcAccordionModule,MatExpansionModule],
      excludeComponentDeclaration: true
    });
    accordions.detectChanges();

    expect(accordions.getByText("test-accordion1")).toBeTruthy();
    expect(accordions.getByText("test-accordion2")).toBeTruthy();

    expect(accordions.getByText(projection1).hidden);
    expect(accordions.getByText(projection2).hidden);

  });

});
