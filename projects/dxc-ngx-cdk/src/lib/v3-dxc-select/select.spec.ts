import { render, fireEvent } from "@testing-library/angular";
import { V3DxcSelectModule } from "./select-module";
import { V3DxcSelectComponent } from "./select";
import { screen } from "@testing-library/dom";
import { flush } from "@angular/core/testing";

describe("DxcSelect tests", () => {
  test("should render dxc-select", async () => {
    const dxcSelect = await render(V3DxcSelectComponent, {
      template: `<v3-dxc-select label="Select label">,
                      <v3-dxc-select-option value="Facebook" label="Facebook"></v3-dxc-select-option>
                      <v3-dxc-select-option value="Twitter" label="Twitter"></v3-dxc-select-option>
                      <v3-dxc-select-option value="Linkedin" label="Linkedin"></v3-dxc-select-option>
                    </v3-dxc-select>`,
      componentProperties: {},
      imports: [V3DxcSelectModule],
      excludeComponentDeclaration: true,
    });

    expect(dxcSelect.getByText("Select label"));
  });

  test("dxc-select options", async () => {
    const changeMock = jest.fn((x) => {});
    const dxcSelect = await render(V3DxcSelectComponent, {
      template: `<v3-dxc-select label="Select label" (onChange)="changeMock($event)">,
                        <v3-dxc-select-option value="Facebook" label="Facebook"></v3-dxc-select-option>
                        <v3-dxc-select-option value="Twitter" label="Twitter"></v3-dxc-select-option>
                        <v3-dxc-select-option value="Linkedin" label="Linkedin"></v3-dxc-select-option>
                      </v3-dxc-select>`,
      componentProperties: { changeMock },
      imports: [V3DxcSelectModule],
      excludeComponentDeclaration: true,
    });

    expect(dxcSelect.getByText("Select label"));
    fireEvent.click(dxcSelect.getByRole("trigger"));
    dxcSelect.detectChanges();
    expect(screen.getByText("Facebook"));
    expect(screen.getByText("Twitter"));
    expect(screen.getByText("Linkedin"));
  });

 test("dxc-select uncontrolled functionality", async () => {
    const changeMock = jest.fn((x) => {});
    const dxcSelect = await render(V3DxcSelectComponent, {
      template: `<v3-dxc-select label="Select label" (onChange)="changeMock($event)">,
                        <v3-dxc-select-option value="Facebook" label="Facebook"></v3-dxc-select-option>
                        <v3-dxc-select-option value="Twitter" label="Twitter"></v3-dxc-select-option>
                        <v3-dxc-select-option value="Linkedin" label="Linkedin"></v3-dxc-select-option>
                      </v3-dxc-select>`,
      componentProperties: { changeMock },
      imports: [V3DxcSelectModule],
      excludeComponentDeclaration: true,
    });

    expect(dxcSelect.getByText("Select label"));
    fireEvent.click(dxcSelect.getByRole("trigger"));
    dxcSelect.detectChanges();
    expect(screen.getByText("Facebook"));
    expect(screen.getByText("Twitter"));
    expect(screen.getByText("Linkedin"));
    fireEvent.click(screen.getByText("Facebook"));
    expect(changeMock).toHaveBeenCalledWith("Facebook");
    dxcSelect.detectChanges();
    expect(dxcSelect.getByText("Facebook"));
  }); 

    test("dxc-select controlled functionality", async () => {
        const changeMock = jest.fn((x) => {});
        const dxcSelect = await render(V3DxcSelectComponent, {
          template: `<v3-dxc-select label="Select label" value="Twitter" (onChange)="changeMock($event)">,
                            <v3-dxc-select-option value="Facebook" label="Facebook"></v3-dxc-select-option>
                            <v3-dxc-select-option value="Twitter" label="Twitter"></v3-dxc-select-option>
                            <v3-dxc-select-option value="Linkedin" label="Linkedin"></v3-dxc-select-option>
                          </v3-dxc-select>`,
          componentProperties: { changeMock },
          imports: [V3DxcSelectModule],
          excludeComponentDeclaration: true,
        });
    
        expect(dxcSelect.getByText("Select label"));
        fireEvent.click(dxcSelect.getByRole("trigger"));
        expect(dxcSelect.getByText("Twitter"));
        dxcSelect.detectChanges();
        expect(screen.getByText("Facebook"));
        expect(screen.getAllByText("Twitter").length).toBe(2);
        expect(screen.getByText("Linkedin"));
        fireEvent.click(screen.getByText("Facebook"));
        expect(changeMock).toHaveBeenCalledWith("Facebook");
        dxcSelect.detectChanges();
        expect(dxcSelect.getByText("Twitter"));
    });

    test("dxc-select uncontrolled multiple functionality", async () => {
        const changeMock = jest.fn((x) => {});
        const dxcSelect = await render(V3DxcSelectComponent, {
          template: `<v3-dxc-select label="Select label" multiple="true"(onChange)="changeMock($event)">,
                            <v3-dxc-select-option value="Facebook" label="Facebook"></v3-dxc-select-option>
                            <v3-dxc-select-option value="Twitter" label="Twitter"></v3-dxc-select-option>
                            <v3-dxc-select-option value="Linkedin" label="Linkedin"></v3-dxc-select-option>
                          </v3-dxc-select>`,
          componentProperties: { changeMock },
          imports: [V3DxcSelectModule],
          excludeComponentDeclaration: true,
        });
    
        expect(dxcSelect.getByText("Select label"));
        fireEvent.click(dxcSelect.getByRole("trigger"));
        dxcSelect.detectChanges();
        expect(screen.getByText("Facebook"));
        expect(screen.getByText("Twitter"));
        expect(screen.getByText("Linkedin"));
        fireEvent.click(screen.getByText("Facebook"));
        expect(changeMock).toHaveBeenCalledWith(["Facebook"]);
        fireEvent.click(screen.getByText("Twitter"));
        expect(changeMock).toHaveBeenCalledWith(["Facebook", "Twitter"]);
        dxcSelect.detectChanges();
        expect(dxcSelect.getByText("Facebook, Twitter"));
    });

    test("dxc-select controlled multiple functionality", async () => {
        const changeMock = jest.fn((x) => {});
        const initValue = ["Twitter"];
        const dxcSelect = await render(V3DxcSelectComponent, {
          template: `<v3-dxc-select label="Select label" [value]="initValue" multiple="true"(onChange)="changeMock($event)">,
                            <v3-dxc-select-option value="Facebook" label="Facebook"></v3-dxc-select-option>
                            <v3-dxc-select-option value="Twitter" label="Twitter"></v3-dxc-select-option>
                            <v3-dxc-select-option value="Linkedin" label="Linkedin"></v3-dxc-select-option>
                          </v3-dxc-select>`,
          componentProperties: { changeMock, initValue },
          imports: [V3DxcSelectModule],
          excludeComponentDeclaration: true,
        });
    
        dxcSelect.detectChanges();
        expect(dxcSelect.getByText("Twitter"));
        fireEvent.click(dxcSelect.getByRole("trigger"));
        dxcSelect.detectChanges();
        expect(screen.getByText("Facebook"));
        expect(screen.getAllByText("Twitter"));
        expect(screen.getByText("Linkedin"));
        fireEvent.click(screen.getByText("Facebook"));
        expect(changeMock).toHaveBeenCalledWith(["Twitter", "Facebook"]);
        fireEvent.click(screen.getAllByText("Twitter")[1]);
        expect(changeMock).toHaveBeenCalledWith([]);
        dxcSelect.detectChanges();
        expect(dxcSelect.getByText("Twitter"));
    });
});
