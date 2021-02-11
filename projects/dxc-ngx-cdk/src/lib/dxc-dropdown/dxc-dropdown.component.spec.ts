import { render, fireEvent } from "@testing-library/angular";
import { screen } from "@testing-library/dom";
import { DxcDropdownComponent } from "./dxc-dropdown.component";
import { DxcDropdownModule } from './dxc-dropdown.module';

describe("DxcDropdown tests", () => {

  test("should render dxc-dropdown", async () => {
    const dxcDropdown = await render(DxcDropdownComponent, {
      template: `<dxc-dropdown label="dropdown">,
                  <dxc-dropdown-option label="Facebook"></dxc-dropdown-option>
                  <dxc-dropdown-option label="Twitter"></dxc-dropdown-option>
                  <dxc-dropdown-option label="Linkedin"></dxc-dropdown-option>
                </dxc-dropdown>`,
      componentProperties: {
        label: "dropdown",
      },
      imports: [DxcDropdownModule],
      excludeComponentDeclaration: true,
    });

    expect(dxcDropdown.getByText("dropdown"));
  });

  test("should render options in dxc-dropdown", async () => {
    const dxcDropdown = await render(DxcDropdownComponent, {
      template: `<dxc-dropdown label="dropdown">,
                  <dxc-dropdown-option label="Facebook"></dxc-dropdown-option>
                  <dxc-dropdown-option label="Twitter"></dxc-dropdown-option>
                  <dxc-dropdown-option label="Linkedin"></dxc-dropdown-option>
                </dxc-dropdown>`,
      componentProperties: {
        label: "dropdown",
      },
      imports: [DxcDropdownModule],
      excludeComponentDeclaration: true,
    });

    expect(dxcDropdown.getByText("dropdown"));
    fireEvent.click(dxcDropdown.getByText("dropdown"));
    dxcDropdown.detectChanges();
    expect(screen.getByText("Facebook"));
  });

  test("options interaction in dxc-dropdown", async () => {
    const onSelect = jest.fn((i) => {});
    const optionValue = "Facebook";
    const dxcDropdown = await render(DxcDropdownComponent, {
      template: `<dxc-dropdown (onSelectOption)="onSelect($event)" label="dropdown">,
                  <dxc-dropdown-option label="Facebook" [value]="optionValue" ></dxc-dropdown-option>
                  <dxc-dropdown-option label="Twitter"></dxc-dropdown-option>
                  <dxc-dropdown-option label="Linkedin"></dxc-dropdown-option>
                </dxc-dropdown>`,
      componentProperties: {
        onSelect,
        optionValue
      },
      imports: [DxcDropdownModule],
      excludeComponentDeclaration: true,
    });

    expect(dxcDropdown.getByText("dropdown"));
    fireEvent.click(dxcDropdown.getByText("dropdown"));
    dxcDropdown.detectChanges();
    expect(screen.getByText("Facebook"));
    expect(screen.getByText("Twitter"));
    fireEvent.click(screen.getByText("Facebook"));
    expect(onSelect).toHaveBeenCalledWith("Facebook");
  });
});
