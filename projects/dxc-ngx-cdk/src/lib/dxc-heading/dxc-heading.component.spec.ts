import { render } from "@testing-library/angular";
import { screen } from "@testing-library/dom";
import { DxcHeadingComponent } from "./dxc-heading.component";

describe("DxcHeading tests", () => {
  test("should render heading level 1", async () => {
    const { getByRole, getByText } = await render(DxcHeadingComponent, {
      componentProperties: { level: 1, text: "heading1" },
    });

    expect(getByText("heading1"));
    expect(screen.getByRole("heading").textContent).toEqual("heading1");
    expect(getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  test("should render heading level 2", async () => {
    const { getByRole, getByText } = await render(DxcHeadingComponent, {
      componentProperties: { level: 2, text: "heading2" },
    });

    expect(getByText("heading2"));
    expect(screen.getByRole("heading").textContent).toEqual("heading2");
    expect(getByRole("heading", { level: 2 })).toBeInTheDocument();
  });

  test("should render heading level 3", async () => {
    const { getByRole, getByText } = await render(DxcHeadingComponent, {
      componentProperties: { level: 3, text: "heading3" },
    });

    expect(getByText("heading3"));
    expect(screen.getByRole("heading").textContent).toEqual("heading3");
    expect(getByRole("heading", { level: 3 })).toBeInTheDocument();
  });

  test("should render heading level 4", async () => {
    const { getByRole, getByText } = await render(DxcHeadingComponent, {
      componentProperties: { level: 4, text: "heading4" },
    });

    expect(getByText("heading4"));
    expect(screen.getByRole("heading").textContent).toEqual("heading4");
    expect(getByRole("heading", { level: 4 })).toBeInTheDocument();
  });

  test("should render heading level 5", async () => {
    const { getByRole, getByText } = await render(DxcHeadingComponent, {
      componentProperties: { level: 5, text: "heading5" },
    });

    expect(getByText("heading5"));
    expect(screen.getByRole("heading").textContent).toEqual("heading5");
    expect(getByRole("heading", { level: 5 })).toBeInTheDocument();
  });

  test("should render heading level 1 and tag h3", async () => {
    const { getByRole, getByText } = await render(DxcHeadingComponent, {
      componentProperties: { level: 1, text: "heading1 as tag h3", asTag: "h3" },
    });

    expect(getByText("heading1 as tag h3"));
    expect(getByRole("heading", { level: 3 })).toBeInTheDocument();
  });
  test("should render heading level 2 and tag h4", async () => {
    const { getByRole, getByText } = await render(DxcHeadingComponent, {
      componentProperties: { level: 2, text: "heading2 as tag h4", asTag: "h4" },
    });

    expect(getByText("heading2 as tag h4"));
    expect(getByRole("heading", { level: 4 })).toBeInTheDocument();
  });

  test("should render heading level 3 and tag h5", async () => {
    const { getByRole, getByText } = await render(DxcHeadingComponent, {
      componentProperties: { level: 3, text: "heading3 as tag h5", asTag: "h5" },
    });

    expect(getByText("heading3 as tag h5"));
    expect(getByRole("heading", { level: 5 })).toBeInTheDocument();
  });  

  test("should render heading level 4 and tag h2", async () => {
    const { getByRole, getByText } = await render(DxcHeadingComponent, {
      componentProperties: { level: 4, text: "heading4 as tag h2", asTag: "h2" },
    });

    expect(getByText("heading4 as tag h2"));
    expect(getByRole("heading", { level: 2 })).toBeInTheDocument();
  });

  test("should render heading level 5 and tag h1", async () => {
    const { getByRole, getByText } = await render(DxcHeadingComponent, {
      componentProperties: { level: 5, text: "heading5 as tag h1", asTag: "h1" },
    });

    expect(getByText("heading5 as tag h1"));
    expect(getByRole("heading", { level: 1 })).toBeInTheDocument();
  });
});
