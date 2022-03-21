import { render } from "@testing-library/angular";
import { screen } from "@testing-library/dom";
import { DxcHeadingComponent } from "./dxc-heading.component";

import { TestBed } from "@angular/core/testing";
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from "@angular/platform-browser-dynamic/testing";

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

describe("DxcHeading tests", () => {
  test("should render heading level 1", async () => {
    await render(DxcHeadingComponent, {
      componentProperties: { level: 1, text: "heading1" },
      declarations: [DxcHeadingComponent],
    });

    expect(screen.getByText("heading1"));
    expect(screen.getByRole("heading").textContent).toEqual("heading1");
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  test("should render heading level 2", async () => {
    await render(DxcHeadingComponent, {
      componentProperties: { level: 2, text: "heading2" },
    });

    expect(screen.getByText("heading2"));
    expect(screen.getByRole("heading").textContent).toEqual("heading2");
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
  });

  test("should render heading level 3", async () => {
    await render(DxcHeadingComponent, {
      componentProperties: { level: 3, text: "heading3" },
    });

    expect(screen.getByText("heading3"));
    expect(screen.getByRole("heading").textContent).toEqual("heading3");
    expect(screen.getByRole("heading", { level: 3 })).toBeInTheDocument();
  });

  test("should render heading level 4", async () => {
    await render(DxcHeadingComponent, {
      componentProperties: { level: 4, text: "heading4" },
    });

    expect(screen.getByText("heading4"));
    expect(screen.getByRole("heading").textContent).toEqual("heading4");
    expect(screen.getByRole("heading", { level: 4 })).toBeInTheDocument();
  });

  test("should render heading level 5", async () => {
    await render(DxcHeadingComponent, {
      componentProperties: { level: 5, text: "heading5" },
    });

    expect(screen.getByText("heading5"));
    expect(screen.getByRole("heading").textContent).toEqual("heading5");
    expect(screen.getByRole("heading", { level: 5 })).toBeInTheDocument();
  });

  test("should render heading level 1 and tag h3", async () => {
    await render(DxcHeadingComponent, {
      componentProperties: {
        level: 1,
        text: "heading1 as tag h3",
        asTag: "h3",
      },
    });

    expect(screen.getByText("heading1 as tag h3"));
    expect(screen.getByRole("heading", { level: 3 })).toBeInTheDocument();
  });
  test("should render heading level 2 and tag h4", async () => {
    await render(DxcHeadingComponent, {
      componentProperties: {
        level: 2,
        text: "heading2 as tag h4",
        asTag: "h4",
      },
    });

    expect(screen.getByText("heading2 as tag h4"));
    expect(screen.getByRole("heading", { level: 4 })).toBeInTheDocument();
  });

  test("should render heading level 3 and tag h5", async () => {
    await render(DxcHeadingComponent, {
      componentProperties: {
        level: 3,
        text: "heading3 as tag h5",
        asTag: "h5",
      },
    });

    expect(screen.getByText("heading3 as tag h5"));
    expect(screen.getByRole("heading", { level: 5 })).toBeInTheDocument();
  });

  test("should render heading level 4 and tag h2", async () => {
    await render(DxcHeadingComponent, {
      componentProperties: {
        level: 4,
        text: "heading4 as tag h2",
        asTag: "h2",
      },
    });

    expect(screen.getByText("heading4 as tag h2"));
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
  });

  test("should render heading level 5 and tag h1", async () => {
    await render(DxcHeadingComponent, {
      componentProperties: {
        level: 5,
        text: "heading5 as tag h1",
        asTag: "h1",
      },
    });

    expect(screen.getByText("heading5 as tag h1"));
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });
});
