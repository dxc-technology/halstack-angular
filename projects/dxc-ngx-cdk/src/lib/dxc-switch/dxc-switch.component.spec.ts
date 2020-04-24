import { render, fireEvent } from "@testing-library/angular";
import { DxcSwitchComponent } from "./dxc-switch.component";
import { screen } from "@testing-library/dom";
import { MatSlideToggleModule } from "@angular/material";

describe("DxcSwitch tests", () => {

  test("should render dxc-switch", async () => {
    const dxcSwitch = await render(DxcSwitchComponent, {
      componentProperties: { label: "test-switch" },
      imports: [MatSlideToggleModule]
    });

    expect(dxcSwitch.getByText("test-switch"));
  });

  test("uncontrolled dxc-switch functionality", async () => {
    const dxcSwitch = await render(DxcSwitchComponent, {
      componentProperties: { label: "test-switch" },
      imports: [MatSlideToggleModule]
    });
    const input = <HTMLInputElement>dxcSwitch.getByRole("switch");
    expect(input.checked).toBeFalsy();
    fireEvent.click(dxcSwitch.getByText("test-switch"));
    expect(input.checked).toBeTruthy();
  });

  test("controlled dxc-switch functionality", async () => {
    const dxcSwitch = await render(DxcSwitchComponent, {
      componentProperties: { label: "test-switch", checked: true },
      imports: [MatSlideToggleModule]
    });
    const input = <HTMLInputElement>dxcSwitch.getByRole("switch");
    expect(input.checked).toBeTruthy();
    fireEvent.click(dxcSwitch.getByText("test-switch"));
    expect(input.checked).toBeTruthy();
  });

});