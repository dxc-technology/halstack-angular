import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DxcNewInputTextComponent } from "./dxc-new-input-text.component";

import { render, fireEvent } from "@testing-library/angular";
import { screen, waitFor } from "@testing-library/dom";
import { CommonModule } from "@angular/common";
import { BoldOptionsPipe } from "./pipes/bold-options.pipe";
import { FilterOptionsPipe } from "./pipes/filter-options.pipe";
import { DxcNewInputTextService } from "./services/dxc-new-input-text.service";
import { DxcNewInputTextActionComponent } from "./dxc-new-input-text-action/dxc-new-input-text-action.component";

describe("DxcNewTextInputComponent", () => {
  test("should render dxc-new-input-text", async () => {
    const input = await render(DxcNewInputTextComponent, {
      componentProperties: {
        label: "test-input",
        helperText: "helper-text",
        prefix: "+34",
        suffix: "$"
      },
      imports: [CommonModule],
      providers: [DxcNewInputTextService],
      declarations: [FilterOptionsPipe, BoldOptionsPipe],
    });

    expect(input.getByText("test-input"));
    expect(input.getByText("helper-text"));
    expect(input.getByText("+34"));
    expect(input.getByText("$"));
  });

  test("should render error dxc-new-input-text", async () => {
    const input = await render(DxcNewInputTextComponent, {
      componentProperties: {
        label: "test-input",
        helperText: "helper-text",
        prefix: "+34",
        suffix: "$",
        error: "Very important error"
      },
      imports: [CommonModule],
      providers: [DxcNewInputTextService],
      declarations: [FilterOptionsPipe, BoldOptionsPipe],
    });

    expect(input.getByText("test-input"));
    expect(input.getByText("helper-text"));
    expect(input.getByText("+34"));
    expect(input.getByText("$"));
    expect(input.getByText("Very important error"));
    expect(input.getByLabelText('Error'));
  });

  test("should show options", async () => {
    const input = await render(DxcNewInputTextComponent, {
      template: `<dxc-new-input-text
        placeholder="placeholder"
        label="Input label"
        helperText="helper text"
        margin="small"
        clearable="true"
        [autocompleteOptions]="[
          'Albania',
          'Andorra',
          'Belgium'
        ]"
      ></dxc-new-input-text>`,
      imports: [CommonModule],
      providers: [DxcNewInputTextService],
      declarations: [FilterOptionsPipe, BoldOptionsPipe],
    });

    expect(input.getByText("Input label"));
    expect(input.getByText("helper text"));
    expect(input.getByText("Albania"));
    expect(input.getByText("Andorra"));
    expect(input.getByText("Belgium"));
  });

  test("should filter options", async () => {
    const input = await render(DxcNewInputTextComponent, {
      template: `<dxc-new-input-text
        placeholder="placeholder"
        label="Input label"
        helperText="helper text"
        value="Belgium"
        margin="small"
        clearable="true"
        [autocompleteOptions]="[
          'Albania',
          'Andorra',
          'Belgium'
        ]"
      ></dxc-new-input-text>`,
      imports: [CommonModule],
      providers: [DxcNewInputTextService],
      declarations: [FilterOptionsPipe, BoldOptionsPipe],
    });

    expect(input.getByText("Input label"));
    expect(input.getByText("helper text"));
    const text1 = input.queryByText('Albania');
    const text2 = input.queryByText('Andorra');
    expect(text1).toBeNull();
    expect(text2).toBeNull();
    expect(input.getByText("Belgium"));
  });

  test("should clear input", async () => {
    const onChange = jest.fn();
    const input = await render(DxcNewInputTextComponent, {
      template: `<dxc-new-input-text
        placeholder="placeholder"
        label="Input label"
        helperText="helper text"
        margin="small"
        value="test input value"
        clearable="true"
        (onChange)="onChange($event)"
      ></dxc-new-input-text>`,
      imports: [CommonModule],
      providers: [DxcNewInputTextService],
      declarations: [FilterOptionsPipe, BoldOptionsPipe],
      componentProperties: { onChange },
    });

    expect(input.getByText("Input label"));
    expect(input.getByText("helper text"));
    expect(screen.getByDisplayValue('test input value')).toBeTruthy();
    fireEvent.click(input.getByLabelText('Clear'));
    input.detectChanges();
    expect(onChange).toHaveBeenCalledWith("");
  });

  test("should allow interaction with action button", async () => {
    const click = jest.fn();
    const input = await render(DxcNewInputTextComponent, {
      template: `<dxc-new-input-text
        placeholder="placeholder"
        label="Input label"
        helperText="helper text"
        margin="small"
        value="controlledValue"
        clearable="true"
        (onActionClick)="click()"
      >
        <dxc-new-input-text-action>
          <svg
            id="highlight_off_black_18dp"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path
              id="Path_2943"
              data-name="Path 2943"
              d="M0,0H18V18H0Z"
              fill="none"
            />
            <path
              id="Path_2944"
              data-name="Path 2944"
              d="M10,4a6,6,0,1,0,6,6A6.01,6.01,0,0,0,10,4Zm3,7.945L11.945,13,10,11.06,8.059,13,7,11.945,8.944,10,7,8.059,8.059,7,10,8.944,11.945,7,13,8.059,11.06,10Z"
              transform="translate(-1.002 -1.002)"
              fill="#ffe6e9"
            />
            <path
              id="Path_2945"
              data-name="Path 2945"
              d="M11.444,6.5,9.5,8.443,7.558,6.5,6.5,7.558,8.443,9.5,6.5,11.444,7.558,12.5,9.5,10.558,11.444,12.5,12.5,11.444,10.558,9.5,12.5,7.558ZM9.5,2A7.5,7.5,0,1,0,17,9.5,7.494,7.494,0,0,0,9.5,2Zm0,13.5a6,6,0,1,1,6-6A6.009,6.009,0,0,1,9.5,15.5Z"
              transform="translate(-0.501 -0.501)"
              fill="#d0011b"
            />
          </svg>
        </dxc-new-input-text-action>
      </dxc-new-input-text>`,
      imports: [CommonModule],
      providers: [DxcNewInputTextService, DxcNewInputTextActionComponent],
      declarations: [FilterOptionsPipe, BoldOptionsPipe, DxcNewInputTextActionComponent],
      componentProperties: { click },
    });

    fireEvent.click(input.getByLabelText('Action'));
    expect(click).toHaveBeenCalled();
  });

  test("should not allow interation with disabled input", async () => {
    const onChange = jest.fn();
    const input = await render(DxcNewInputTextComponent, {
      template: `<dxc-new-input-text
        placeholder="placeholder"
        label="Input label"
        helperText="helper text"
        margin="small"
        value="test input value"
        disabled="true"
        (onChange)="onChange($event)"
      ></dxc-new-input-text>`,
      imports: [CommonModule],
      providers: [DxcNewInputTextService],
      declarations: [FilterOptionsPipe, BoldOptionsPipe],
      componentProperties: { onChange },
    });

    expect(input.getByText("Input label"));
    expect(input.getByText("helper text"));
    expect(screen.getByDisplayValue('test input value')).toBeTruthy();
    fireEvent.click(input.getByRole('combobox'));
    input.detectChanges();
    expect(onChange).not.toHaveBeenCalledWith("");
  });
});
