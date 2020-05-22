import { render, fireEvent } from "@testing-library/angular";
import { DxcSliderComponent } from "./dxc-slider.component";
import { screen, waitFor, waitForElement } from "@testing-library/dom";
import { MatSliderModule } from "@angular/material";
import { DXCInputTextModule } from '../dxc-text-input/dxc-input-text.module';
import { TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

describe("DxcSlider tests", () => {
  test("should render dxc-slider", async () => {
    const { getByText } = await render(DxcSliderComponent, {
        componentProperties: { showLimitsValues:true },
        imports: [MatSliderModule,DXCInputTextModule]
    });
    expect(getByText("100")).toBeTruthy();
  });

  test("Uncontrolled dxc-slider", async () => {
    const onChangeFunction = jest.fn();
    const value = 22;
    TestBed.overrideComponent(DxcSliderComponent, {
      set: { selector: "slider" }
    });
    const slider = await render(DxcSliderComponent, {
      componentProperties: {  
        showLimitsValues:true, 
        onChange: { emit: onChangeFunction } as any,
        showInput: true 
      },
      imports: [MatSliderModule,DXCInputTextModule]
    });
    const input = <HTMLInputElement>(slider.getByRole("textbox"));
    fireEvent.input(input, { target: { value: value } });
    expect(onChangeFunction).toHaveBeenCalledWith(value);     
  });
  

  test("Controlled dxc-slider", async () => {
    const onChangeFunction = jest.fn();
    const value = 22;
    TestBed.overrideComponent(DxcSliderComponent, {
      set: { selector: "slider" }
    });
    const slider = await render(DxcSliderComponent, {
      componentProperties: {  
        value: 45,
        showLimitsValues:true, 
        onChange: { emit: onChangeFunction } as any,
        showInput: true 
      },
      imports: [MatSliderModule,DXCInputTextModule]
    });
    const input = <HTMLInputElement>(slider.getByRole("textbox"));
    fireEvent.input(input, { target: { value: value } });
    expect(onChangeFunction).toHaveBeenCalledWith(value); 
  });

  test("Disabled dxc-slider", async () => {
    const onChangeFunction = jest.fn();
    const value = 22;
    TestBed.overrideComponent(DxcSliderComponent, {
      set: { selector: "slider" }
    });
    const slider = await render(DxcSliderComponent, {
      componentProperties: {  
        value: 45,
        showLimitsValues:true, 
        onChange: { emit: onChangeFunction } as any,
        showInput: true,
        disabled:true 
      },
      imports: [MatSliderModule,DXCInputTextModule]
    });
    const input = <HTMLInputElement>(slider.getByRole("textbox"));
    fireEvent.input(input, { target: { value: value } });
    expect(onChangeFunction).toHaveBeenCalledWith(value);
    
    input.hasAttribute("disabled")
    expect(input.value).toBe("45");     
  });

  test("DragEnd dxc-slider", async () => {
    const onDragEndFunction = jest.fn((a) => console.log(a));
    const value = 22;
    TestBed.overrideComponent(DxcSliderComponent, {
      set: { selector: "slider" }
    });
    const slider = await render(DxcSliderComponent, {
      componentProperties: {  
        value: 45,
        showLimitsValues:true, 
        onDragEnd: { emit: onDragEndFunction } as any,
        showInput: true,
        disabled:true 
      },
      imports: [MatSliderModule,DXCInputTextModule]
    });
    const input = <HTMLInputElement>(slider.getByRole("slider"));
    fireEvent.mouseUp(input);
    expect(onDragEndFunction).toHaveBeenCalled(); 
  });

});
