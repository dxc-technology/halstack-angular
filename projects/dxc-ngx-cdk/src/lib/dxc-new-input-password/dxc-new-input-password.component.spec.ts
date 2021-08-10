import { render, fireEvent } from "@testing-library/angular";
import { screen } from "@testing-library/dom";
import { CommonModule } from "@angular/common";
import { DxcNewInputPasswordComponent } from "./dxc-new-input-password.component";
import { DxcNewInputTextModule } from "../dxc-new-input-text/dxc-new-input-text.module";

describe("DxcNewInputPasswordComponent", () => {
  test("should render dxc-new-input-password", async () => {
    const input = await render(DxcNewInputPasswordComponent, {
      componentProperties: {
        label: "test-input",
        helperText: "helper-text",
      },
      imports: [CommonModule, DxcNewInputTextModule],
    });

    expect(input.getByText("test-input"));
    expect(input.getByText("helper-text"));
  });

  test("should clear input password", async () => {
    const onChange = jest.fn();
    const input = await render(DxcNewInputPasswordComponent, {
      template: `<dxc-new-input-password
            label="Input label"
            helperText="helper text"
            margin="small"
            value="password-test"
            (onChange)="onChange($event)"
          ></dxc-new-input-password>`,
      imports: [CommonModule, DxcNewInputTextModule],
      componentProperties: { onChange },
    });

    expect(input.getByText("Input label"));
    expect(input.getByText("helper text"));
    expect(screen.getByDisplayValue("password-test")).toBeTruthy();
    fireEvent.click(input.getByLabelText("Clear"));
    input.detectChanges();
    expect(onChange).toHaveBeenCalledWith("");
  });

  test("should mask input password", async () => {
    const onChange = jest.fn();
    const input = await render(DxcNewInputPasswordComponent, {
      template: `<dxc-new-input-password
            label="Input label"
            helperText="helper text"
            margin="small"
            value="password-test"
            (onChange)="onChange($event)"
          ></dxc-new-input-password>`,
      imports: [CommonModule, DxcNewInputTextModule],
      componentProperties: { onChange },
    });

    expect(input.getByText("Input label"));
    expect(input.getByText("helper text"));
    expect(screen.getByDisplayValue("password-test")).toBeTruthy();
    expect(document.querySelector('input[type=password]')).toBeTruthy();
    fireEvent.click(input.getByLabelText("Action"));
    input.detectChanges();
    expect(document.querySelector('input[type=text]')).toBeTruthy();
    fireEvent.click(input.getByLabelText("Action"));
    input.detectChanges();
    expect(document.querySelector('input[type=password]')).toBeTruthy();
  });
});
