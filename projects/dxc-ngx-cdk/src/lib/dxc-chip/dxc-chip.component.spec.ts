import { render, fireEvent } from "@testing-library/angular";
import { DxcChipComponent } from "./dxc-chip.component";
import { screen } from "@testing-library/dom";
import { MatCheckboxModule } from "@angular/material";

describe("DxcChip tests", () => {
  test("should render dxc-chip", async () => {
    const { getByText } = await render(DxcChipComponent, {
      componentProperties: { label: "test-chip" }
    });

    expect(getByText("test-chip"));
  });

});
