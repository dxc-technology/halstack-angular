import { render, fireEvent } from "@testing-library/angular";
import { DxcDropdownComponent } from "./dxc-dropdown.component";
import { MatButtonModule, MatMenuModule } from "@angular/material";
import { screen } from "@testing-library/dom";

const optionsMock = [
    {
      value: 1,
      label: "Facebook"
    },
    {
      value: 2,
      label: "Twitter"
    },
    {
      value: 3,
      label: "Linkedin"
    }
  ];

describe("DxcDropdown tests", () => {
  test("should render dxc-dropdown", async () => {
    const { getByText } = await render(DxcDropdownComponent, {
      componentProperties: { label: "test-dropdown", options: optionsMock },
      imports: [MatButtonModule, MatMenuModule]
    });

    expect(getByText("test-dropdown"));
  });

  test("dxc-dropdown options", async () => {
    const dxcDropdown = await render(DxcDropdownComponent, {
      componentProperties: {
        label: "test-dropdown",
        options: optionsMock
      },
      imports: [MatButtonModule, MatMenuModule]
    });
    fireEvent.click(dxcDropdown.getByText("test-dropdown"));
    expect(screen.getByText("Facebook"));
    expect(screen.getByText("Twitter"));
    expect(screen.getByText("Linkedin"));
  });

  test("dxc-dropdown selectOption", async () => {
    const changeMock = jest.fn();
    const dxcDropdown = await render(DxcDropdownComponent, {
      componentProperties: {
        label: "test-dropdown",
        options: optionsMock,
        selectOption: { emit: changeMock } as any
      },
      imports: [MatButtonModule, MatMenuModule]
    });
    fireEvent.click(dxcDropdown.getByText("test-dropdown"));
    fireEvent.click(screen.getByText("Facebook"));
    expect(changeMock).toHaveBeenCalledWith(1);
    fireEvent.click(dxcDropdown.getByText("test-dropdown"));
    fireEvent.click(screen.getByText("Twitter"));
    expect(changeMock).toHaveBeenCalledWith(2);
    fireEvent.click(dxcDropdown.getByText("test-dropdown"));
    fireEvent.click(screen.getByText("Linkedin"));
    expect(changeMock).toHaveBeenCalledWith(3);   
  });

});
