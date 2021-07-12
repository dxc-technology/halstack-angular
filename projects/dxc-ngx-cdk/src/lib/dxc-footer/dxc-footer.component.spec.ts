import { render } from "@testing-library/angular";
import { DxcFooterComponent } from "./dxc-footer.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { PipesModule } from '../pipes/pipes.module';

describe("DxcFooter tests", () => {
  test("should render dxc-footer", async () => {
    const text = "© DXC Technology 2019. All rights reserved.";
    const bottom = [
      {
        href: "https://www.test.com/test",
        text: "bottom-link-text",
      },
    ];
    const footer = await render(DxcFooterComponent, {
      componentProperties: {
        copyright: text,
        bottomLinks: bottom,
      },
      imports: [MatToolbarModule, PipesModule],
    });
    expect(footer.getByText(text)).toBeTruthy();
  });
});
