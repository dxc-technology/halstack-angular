import { render } from "@testing-library/angular";
import { DxcChipComponent } from "./dxc-chip.component";

describe("DxcChip tests", () => {
  test("should render dxc-chip", async () => {
    const { getByText } = await render(DxcChipComponent, {
      componentProperties: { label: "test-chip" },
    });

    expect(getByText("test-chip"));
  });
});
