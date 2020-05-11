import { render, fireEvent } from '@testing-library/angular';
import { screen } from '@testing-library/dom';
import { DxcAccordionComponent } from './dxc-accordion.component'
import { MatExpansionModule} from '@angular/material';
import { TestBed } from '@angular/core/testing';

describe('DxcAccordion tests', () => {
  test('should render dxc-accordion', async () => {
    const { getByText } = await render(DxcAccordionComponent, {
      componentProperties: { label: "test-button", assistiveText: "assistiveText" },
      imports: [MatExpansionModule]
    })

    expect(getByText("test-button")).toBeTruthy();
    expect(getByText("assistiveText")).toBeTruthy();
  })

  test('uncontrolled dxc-accordion event', async () => {
    const onClickFunction = jest.fn();
    const { getByText } = await render(DxcAccordionComponent, {
      componentProperties: { label: "test-accordion", assistiveText: "assistiveText", onClick: { emit: onClickFunction } as any },
      imports: [MatExpansionModule]
    })

    expect(getByText("test-accordion")).toBeTruthy();
    expect(getByText("assistiveText")).toBeTruthy();

    fireEvent.click(getByText("test-accordion"));
    expect(onClickFunction).toHaveBeenCalledWith(true);
    fireEvent.click(getByText("test-accordion"));
    expect(onClickFunction).toHaveBeenCalledWith(false);
  })

  test('uncontrolled dxc-accordion content', async () => {
    const projection = 'Content inside the ng-content!';
    const onClickFunction = jest.fn();
    TestBed.overrideComponent(DxcAccordionComponent, { set: { selector: 'accordion' } });
    await render(DxcAccordionComponent, {
      template: `<accordion label="test-accordion" assistiveText="assistiveText" (onClick)=${onClickFunction()}>${projection}</accordion>`,
      imports: [MatExpansionModule]
    })

    expect(screen.getByText("test-accordion")).toBeTruthy();;
    expect(screen.getByText("assistiveText"));
    
    expect(screen.getByText(projection).hidden);
    fireEvent.click(screen.getByText("test-accordion"));
    expect(onClickFunction).toHaveBeenCalled();
    expect(screen.getByText(projection).hidden).toBeFalsy();
    fireEvent.click(screen.getByText("test-accordion"));
    expect(screen.getByText(projection).hidden);
  })

  test('controlled dxc-accordion event', async () => {
    const onClickFunction = jest.fn();
    const { getByText } = await render(DxcAccordionComponent, {
      componentProperties: { label: "test-accordion", assistiveText: "assistiveText", isExpanded: false, onClick: { emit: onClickFunction } as any },
      imports: [MatExpansionModule]
    })

    expect(getByText("test-accordion")).toBeTruthy();
    expect(getByText("assistiveText")).toBeTruthy();

    fireEvent.click(getByText("test-accordion"));
    expect(onClickFunction).toHaveBeenCalledWith(true);
    fireEvent.click(getByText("test-accordion"));
    expect(onClickFunction).toHaveBeenCalledWith(true);
  })

  test('controlled dxc-accordion content', async () => {
    const projection = 'Content inside the ng-content!';
    const onClickFunction = jest.fn();
    TestBed.overrideComponent(DxcAccordionComponent, { set: { selector: 'accordion' } });
    await render(DxcAccordionComponent, {
      template: `<accordion label="test-accordion" assistiveText="assistiveText" isExpanded="false" (onClick)=${onClickFunction()}>${projection}</accordion>`,
      imports: [MatExpansionModule]
    })

    expect(screen.getByText("test-accordion")).toBeTruthy();;
    expect(screen.getByText("assistiveText"));
    
    expect(screen.getByText(projection).hidden);
    fireEvent.click(screen.getByText("test-accordion"));
    expect(onClickFunction).toHaveBeenCalled();
    expect(screen.getByText(projection).hidden);
    fireEvent.click(screen.getByText("test-accordion"));
    expect(screen.getByText(projection).hidden);
  })
})