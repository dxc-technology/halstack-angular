import { render, fireEvent } from "@testing-library/angular";
import { DxcTagComponent } from "./dxc-tag.component";
import { DxcBoxModule } from "../dxc-box/dxc-box.module";

describe("DxcTag tests", () => {
  test("should render dxc-tag", async () => {
    const { getByText } = await render(DxcTagComponent, {
      componentProperties: { label: "test-tag" },
      imports: [DxcBoxModule]
    });

    expect(getByText("test-tag"));
  });

  test("click on dxc-tag", async () => {
    const onClickFunction = jest.fn();
    const { getByText } = await render(DxcTagComponent, {
      template: `<dxc-tag label="test-tag" (onClick)="onClickFunction($event)"></dxc-tag>`,
      componentProperties: { onClickFunction },
      imports: [DxcBoxModule]
    });

    expect(getByText("test-tag"));
    fireEvent.click(getByText("test-tag"));
    expect(onClickFunction).toHaveBeenCalled();
  });
});
