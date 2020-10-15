import { render, fireEvent } from "@testing-library/angular";
import { screen } from "@testing-library/dom";
import { DxcDropdownComponent } from "./dxc-dropdown.component";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";

describe("DxcDropdown tests", () => {
  const mockOptions = [
    {
      value: 1,
      label: "Facebook",
    },
    {
      value: 2,
      label: "Twitter",
    },
    {
      value: 3,
      label: "Linkedin",
    },
  ];
  test("should render dxc-dropdown", async () => {
    const dxcDropdown = await render(DxcDropdownComponent, {
      componentProperties: {
        label: "dropdown",
        options: mockOptions,
      },
      imports: [MatMenuModule, MatButtonModule],
    });

    expect(dxcDropdown.getByText("dropdown"));
  });

  test("should render options in dxc-dropdown", async () => {
    const dxcDropdown = await render(DxcDropdownComponent, {
      componentProperties: {
        label: "dropdown",
        options: mockOptions,
      },
      imports: [MatMenuModule, MatButtonModule],
    });

    expect(dxcDropdown.getByText("dropdown"));
    fireEvent.click(dxcDropdown.getByText("dropdown"));
    dxcDropdown.detectChanges();
    expect(screen.getByText("Facebook"));
  });

  test("options interaction in dxc-dropdown", async () => {
    const onSelect = jest.fn();
    const dxcDropdown = await render(DxcDropdownComponent, {
      componentProperties: {
        label: "dropdown",
        options: mockOptions,
        onSelectOption: { emit: onSelect } as any,
      },
      imports: [MatMenuModule, MatButtonModule],
    });

    expect(dxcDropdown.getByText("dropdown"));
    fireEvent.click(dxcDropdown.getByText("dropdown"));
    dxcDropdown.detectChanges();
    expect(screen.getByText("Facebook"));
    fireEvent.click(screen.getByText("Facebook"));
    expect(onSelect).toHaveBeenCalledWith(1);
  });
});
