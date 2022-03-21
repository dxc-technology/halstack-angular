import { render, fireEvent } from "@testing-library/angular";
import { screen } from "@testing-library/dom";
import { DxcDropdownComponent } from "./dxc-dropdown.component";
import { DxcDropdownModule } from "./dxc-dropdown.module";
import { TestBed } from "@angular/core/testing";
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from "@angular/platform-browser-dynamic/testing";
import { BackgroundProviderModule } from "../background-provider/background-provider.module";
import { MatMenuModule } from "@angular/material/menu";

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

describe("DxcDropdown tests", () => {
  test("should render dxc-dropdown", async () => {
    await render(
      `<dxc-dropdown label="dropdown">,
        <dxc-dropdown-option label="Facebook"></dxc-dropdown-option>
        <dxc-dropdown-option label="Twitter"></dxc-dropdown-option>
        <dxc-dropdown-option label="Linkedin"></dxc-dropdown-option>
      </dxc-dropdown>`,
      {
        imports: [BackgroundProviderModule, DxcDropdownModule, MatMenuModule],
        declarations: [DxcDropdownComponent],
        excludeComponentDeclaration: true,
      }
    );
    expect(screen.getByText("dropdown"));
  });

  test("should render options in dxc-dropdown", async () => {
    await render(
      `<dxc-dropdown label="dropdown">,
          <dxc-dropdown-option label="Facebook"></dxc-dropdown-option>
          <dxc-dropdown-option label="Twitter"></dxc-dropdown-option>
          <dxc-dropdown-option label="Linkedin"></dxc-dropdown-option>
        </dxc-dropdown>`,
      {
        imports: [BackgroundProviderModule, DxcDropdownModule],
        declarations: [DxcDropdownComponent],
        excludeComponentDeclaration: true,
      }
    );

    expect(screen.getByText("dropdown"));
    fireEvent.click(screen.getByText("dropdown"));
    expect(screen.getByText("Facebook"));
  });

  test("options interaction in dxc-dropdown", async () => {
    const onSelect = jest.fn((i) => {});
    const optionValue = "Facebook";
    await render(
      `<dxc-dropdown (onSelectOption)="onSelect($event)" label="dropdown">,
          <dxc-dropdown-option label="Facebook" [value]="optionValue" ></dxc-dropdown-option>
          <dxc-dropdown-option label="Twitter"></dxc-dropdown-option>
          <dxc-dropdown-option label="Linkedin"></dxc-dropdown-option>
        </dxc-dropdown>`,
      {
        imports: [BackgroundProviderModule, DxcDropdownModule],
        componentProperties: {
          onSelect,
          optionValue,
        },
        declarations: [DxcDropdownComponent],
        excludeComponentDeclaration: true,
      }
    );

    expect(screen.getByText("dropdown"));
    fireEvent.click(screen.getByText("dropdown"));
    expect(screen.getByText("Facebook"));
    expect(screen.getByText("Twitter"));
    fireEvent.click(screen.getByText("Facebook"));
    expect(onSelect).toHaveBeenCalledWith("Facebook");
  });
});
