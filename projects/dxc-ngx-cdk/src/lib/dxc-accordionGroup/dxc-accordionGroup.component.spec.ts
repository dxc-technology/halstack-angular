import { render, fireEvent } from "@testing-library/angular";
import { screen } from "@testing-library/dom";
import { DxcAccordionGroupComponent } from "./dxc-accordionGroup.component";
import { MatExpansionModule } from "@angular/material/expansion";
import { TestBed } from "@angular/core/testing";
import { DxcAccordionModule } from '../dxc-accordion/dxc-accordion.module';
import { DxcAccordionGroupModule } from './dxc-accordionGroup.module';

describe("DxcAccordion tests", () => {
  test("should render dxc-accordion-group", async () => {
    const projection1 = "Lorem ipsum dolor sit amet";
    const projection2 = "Consectetur adipiscing elit";
    const projection3 = "Maecenas enim ipsum";
    const onClickFunction = jest.fn();
    const accordions = await render(DxcAccordionGroupComponent, {
      template: `<dxc-accordion-group>
                  <dxc-accordion label="test-accordion 1" (onClick)="onClickFunction($event)">${projection1}</dxc-accordion>
                  <dxc-accordion label="test-accordion 2" (onClick)="onClickFunction($event)">${projection2}</dxc-accordion>
                  <dxc-accordion label="test-accordion 3" (onClick)="onClickFunction($event)">${projection3}</dxc-accordion>
                </dxc-accordion-group>`,
      componentProperties: { onClickFunction },
      imports: [DxcAccordionGroupModule,DxcAccordionModule,MatExpansionModule],
      excludeComponentDeclaration: true
    });
    accordions.detectChanges();

    expect(accordions.getByText("test-accordion 1")).toBeTruthy();
    expect(accordions.getByText("test-accordion 2")).toBeTruthy();
    expect(accordions.getByText("test-accordion 3")).toBeTruthy();
  });

  test("should hide not selected dxc-accordions", async () => {
    const projection1 = "Lorem ipsum dolor sit amet";
    const projection2 = "Consectetur adipiscing elit";
    const projection3 = "Maecenas enim ipsum";
    const onClickFunction = jest.fn();
    const accordions = await render(DxcAccordionGroupComponent, {
      template: `<dxc-accordion-group>
                  <dxc-accordion label="test-accordion 1" (onClick)="onClickFunction($event)">${projection1}</dxc-accordion>
                  <dxc-accordion label="test-accordion 2" (onClick)="onClickFunction($event)">${projection2}</dxc-accordion>
                  <dxc-accordion label="test-accordion 3" (onClick)="onClickFunction($event)">${projection3}</dxc-accordion>
                </dxc-accordion-group>`,
      componentProperties: { onClickFunction },
      imports: [DxcAccordionGroupModule,DxcAccordionModule,MatExpansionModule],
      excludeComponentDeclaration: true
    });
    accordions.detectChanges();

    expect(accordions.getByText("test-accordion 1")).toBeTruthy();
    expect(accordions.getByText("test-accordion 2")).toBeTruthy();
    expect(accordions.getByText("test-accordion 3")).toBeTruthy();

    expect(accordions.getByText(projection1).hidden);
    expect(accordions.getByText(projection2).hidden);
    expect(accordions.getByText(projection3).hidden);

    fireEvent.click(accordions.getByText("test-accordion 1"));
    expect(onClickFunction).toHaveBeenCalled();
    expect(accordions.getByText(projection1).hidden).toBeFalsy();
    expect(accordions.getByText(projection2).hidden);
    expect(accordions.getByText(projection3).hidden);

    fireEvent.click(accordions.getByText("test-accordion 2"));
    expect(onClickFunction).toHaveBeenCalled();
    expect(accordions.getByText(projection1).hidden);
    expect(accordions.getByText(projection2).hidden).toBeFalsy();
    expect(accordions.getByText(projection3).hidden);

    fireEvent.click(accordions.getByText("test-accordion 3"));
    expect(onClickFunction).toHaveBeenCalled();
    expect(accordions.getByText(projection1).hidden);
    expect(accordions.getByText(projection2).hidden);
    expect(accordions.getByText(projection3).hidden).toBeFalsy();
  });
});
