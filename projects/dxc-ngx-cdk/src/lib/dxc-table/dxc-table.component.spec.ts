import { render } from "@testing-library/angular";
import { DxcTableComponent } from "./dxc-table.component";
import { DxcTableModule } from "./dxc-table.module";
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from "@angular/platform-browser-dynamic/testing";
import { TestBed } from "@angular/core/testing";

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

describe("DxcTable tests", () => {
  test("should render dxc-table", async () => {
    const table = await render(
      `<dxc-table margin="medium">
        <tr>
            <th>header 1</th>
            <th>header 2</th>
            <th>header 3</th>
        </tr>
        <tr>
            <td>cell 1</td>
            <td>cell 2</td>
            <td>cell 3</td>
        </tr>
        <tr>
            <td>cell 4</td>
            <td>cell 5</td>
            <td>cell 6</td>
        </tr>
        </dxc-table>`,
      {
        componentProperties: {},
        imports: [DxcTableModule],
        excludeComponentDeclaration: true,
      }
    );
    table.detectChanges();
    expect(table.getByText("header 1")).toBeTruthy();
    expect(table.getByText("header 2")).toBeTruthy();
    expect(table.getByText("header 3")).toBeTruthy();
    expect(table.getByText("cell 1")).toBeTruthy();
    expect(table.getByText("cell 2")).toBeTruthy();
    expect(table.getByText("cell 3")).toBeTruthy();
    expect(table.getByText("cell 4")).toBeTruthy();
    expect(table.getByText("cell 5")).toBeTruthy();
    expect(table.getByText("cell 6")).toBeTruthy();
  });
});
