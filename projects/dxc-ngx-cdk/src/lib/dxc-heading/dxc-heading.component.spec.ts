import { render } from "@testing-library/angular";
import { screen } from "@testing-library/dom";
import { DxcHeadingComponent } from "./dxc-heading.component";

describe("DxcHeading tests", () => {
  test("should render heading level 1", async () => {
    const { getByText } = await render(DxcHeadingComponent, {
      componentProperties: { level: 1, text: "heading1" },
    });

    expect(getByText("heading1"));
    expect(screen.getByRole("heading").textContent).toEqual("heading1");
  });

  test("should render heading level 2", async () => {
    const { getByText } = await render(DxcHeadingComponent, {
      componentProperties: { level: 2, text: "heading2" },
    });

    expect(getByText("heading2"));
    expect(screen.getByRole("heading").textContent).toEqual("heading2");
  });

  test("should render heading level 3", async () => {
    const { getByText } = await render(DxcHeadingComponent, {
      componentProperties: { level: 3, text: "heading3" },
    });

    expect(getByText("heading3"));
    expect(screen.getByRole("heading").textContent).toEqual("heading3");
  });

  test("should render heading level 4", async () => {
    const { getByText } = await render(DxcHeadingComponent, {
      componentProperties: { level: 4, text: "heading4" },
    });

    expect(getByText("heading4"));
    expect(screen.getByRole("heading").textContent).toEqual("heading4");
  });

  test("should render heading level 5", async () => {
    const { getByText } = await render(DxcHeadingComponent, {
      componentProperties: { level: 5, text: "heading5" },
    });

    expect(getByText("heading5"));
    expect(screen.getByRole("heading").textContent).toEqual("heading5");
  });
});
