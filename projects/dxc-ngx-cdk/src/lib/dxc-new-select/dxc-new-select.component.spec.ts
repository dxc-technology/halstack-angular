import { render, fireEvent } from "@testing-library/angular";

import { DxcNewSelectComponent } from "./dxc-new-select.component";
import { DxcNewSelectModule } from "./dxc-new-select.module";
import { Option } from "./interfaces/option.interface";

describe("DxcNewSelectComponent tests", () => {
  test("should render dxc-select", async () => {
    const dxcSelect = await render(DxcNewSelectComponent, {
      componentProperties: {
        label: "Select label",
        helperText: "Helper Text",
      },
      excludeComponentDeclaration: true,
      imports: [DxcNewSelectModule],
    });

    expect(dxcSelect.getByText("Select label"));
    expect(dxcSelect.getByText("Helper Text"));
  });

  // test("should render list of options", async () => {
  //   const array1: Option[] = [
  //     { label: "label1", value: "1" },
  //     { label: "label2", value: "2" },
  //     { label: "label6", value: "6" },
  //     { label: "label9", value: "9" },
  //     { label: "aida", value: "10" },
  //     { label: "pepe", value: "11" },
  //   ];
  //   const dxcSelect = await render(DxcNewSelectComponent, {
  //     componentProperties: {
  //       label: "Select label",
  //       helperText: "Helper Text",
  //     },
  //     excludeComponentDeclaration: true,
  //     imports: [DxcNewSelectModule],
  //   });

  //   expect(dxcSelect.getByText("Select label"));
  //   expect(dxcSelect.getByText("Helper Text"));
  // });
});
