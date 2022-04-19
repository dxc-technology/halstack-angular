import { render, fireEvent } from "@testing-library/angular";
import { DxcSliderComponent } from "./dxc-slider.component";
import { MatSliderModule } from "@angular/material/slider";
import { TestBed } from "@angular/core/testing";
import { DxcTextInputModule } from "../dxc-text-input/dxc-text-input.module";
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from "@angular/platform-browser-dynamic/testing";

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

describe("DxcSlider tests", () => {
  test("should render dxc-slider", async () => {
    const { getByText } = await render(DxcSliderComponent, {
      componentProperties: { showLimitsValues: true },
      imports: [MatSliderModule, DxcTextInputModule],
    });
    expect(getByText("100")).toBeTruthy();
  });

  test("Uncontrolled dxc-slider", async () => {
    const onChangeFunction = jest.fn();
    const value = 22;
    TestBed.overrideComponent(DxcSliderComponent, {
      set: { selector: "slider" },
    });
    const slider = await render(DxcSliderComponent, {
      componentProperties: {
        showLimitsValues: true,
        onChange: { emit: onChangeFunction } as any,
        showInput: true,
      },
      imports: [MatSliderModule, DxcTextInputModule],
    });
    const input = <HTMLInputElement>slider.getByRole("textbox");
    input.focus();
    fireEvent.click(input);
    fireEvent.input(input, { target: { value: value } });
    expect(onChangeFunction).toHaveBeenCalledWith(value);
  });

  test("Uncontrolled dxc-slider with default value", async () => {
    const onChangeFunction = jest.fn();
    const value = 22;
    TestBed.overrideComponent(DxcSliderComponent, {
      set: { selector: "slider" },
    });
    const slider = await render(DxcSliderComponent, {
      componentProperties: {
        showLimitsValues: true,
        onChange: { emit: onChangeFunction } as any,
        showInput: true,
        defaultValue: 10,
      },
      imports: [MatSliderModule, DxcTextInputModule],
    });
    const input = <HTMLInputElement>slider.getByRole("textbox");
    expect(input.value).toBe("10");
    input.focus();
    fireEvent.click(input);
    fireEvent.input(input, { target: { value: value } });
    expect(onChangeFunction).toHaveBeenCalledWith(value);
    expect(input.value).toBe("22");
  });

  test("Controlled dxc-slider", async () => {
    const onChangeFunction = jest.fn();
    const value = 22;
    TestBed.overrideComponent(DxcSliderComponent, {
      set: { selector: "slider" },
    });
    const slider = await render(DxcSliderComponent, {
      componentProperties: {
        value: 45,
        showLimitsValues: true,
        onChange: { emit: onChangeFunction } as any,
        showInput: true,
      },
      imports: [MatSliderModule, DxcTextInputModule],
    });
    const input = <HTMLInputElement>slider.getByRole("textbox");
    input.focus();
    fireEvent.click(input);
    fireEvent.input(input, { target: { value: value } });
    expect(onChangeFunction).toHaveBeenCalledWith(value);
  });

  test("Disabled dxc-slider", async () => {
    const onChangeFunction = jest.fn();
    const onDragEndFunction = jest.fn();
    TestBed.overrideComponent(DxcSliderComponent, {
      set: { selector: "slider" },
    });
    const slider = await render(DxcSliderComponent, {
      componentProperties: {
        value: 45,
        showLimitsValues: true,
        onChange: { emit: onChangeFunction } as any,
        onDragEnd: { emit: onDragEndFunction } as any,
        showInput: true,
        disabled: true,
      },
      imports: [MatSliderModule, DxcTextInputModule],
    });
    const input = <HTMLInputElement>slider.getByRole("textbox");
    fireEvent.click(input);
    slider.detectChanges();
    expect(onChangeFunction).not.toHaveBeenCalledWith("");
    input.hasAttribute("disabled");
    expect(input.value).toBe("45");

    const sliderElement = <HTMLInputElement>slider.getByRole("slider");
    fireEvent.mouseUp(sliderElement);
    expect(onChangeFunction).not.toHaveBeenCalled();
  });

  test("DragEnd dxc-slider", async () => {
    const onDragEndFunction = jest.fn();
    const value = 22;
    TestBed.overrideComponent(DxcSliderComponent, {
      set: { selector: "slider" },
    });
    const slider = await render(DxcSliderComponent, {
      componentProperties: {
        value: 45,
        showLimitsValues: true,
        onDragEnd: { emit: onDragEndFunction } as any,
        showInput: true,
        disabled: true,
      },
      imports: [MatSliderModule, DxcTextInputModule],
    });
    const input = <HTMLInputElement>slider.getByRole("slider");
    fireEvent.mouseUp(input);
    expect(onDragEndFunction).toHaveBeenCalled();
  });
});
