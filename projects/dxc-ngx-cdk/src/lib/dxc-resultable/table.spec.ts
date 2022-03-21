import { render, fireEvent, screen } from "@testing-library/angular";
import { DxcResultsetTableModule } from "./table-module";
import { DxcResultTable } from "./table";
import { TestBed } from "@angular/core/testing";
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from "@angular/platform-browser-dynamic/testing";

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

describe("DxcResultset Table tests", () => {
  test("should render dxc-resultset-table", async () => {
    const { getByText } = await render(
      `  <dxc-resultset-table [collectionResource]="[{user:'user1',email:'user1@gmail.com'}]" [margin]="xxsmall">
                        <ng-container dxcColumnDef="user">
                            <td *dxcCellDef="let item">
                                {{item['user']}}
                            </td>
                        </ng-container>
                        <ng-container dxcColumnDef="email">
                            <td *dxcCellDef="let item">
                                {{item['email']}}
                            </td>
                        </ng-container>
                    </dxc-resultset-table>`,
      {
        imports: [DxcResultsetTableModule],
        excludeComponentDeclaration: true,
      }
    );
    expect(getByText("user1")).toBeTruthy();
  });

  test("should show data from next page", async () => {
    const table = await render(
      `  <dxc-resultset-table
                    [showGoToPage]="falseShowGoToPage"
                    [collectionResource]="[
                        {user:'user1',email:'user1@gmail.com'},
                        {user:'pepe',email:'user2@gmail.com'},
                        {user:'user5',email:'user5@gmail.com'},
                        {user:'aida',email:'test@gmail.com'}
                    ]"
                    [itemsPerPage]="2">
                        <ng-container dxcColumnDef="user">
                            <td *dxcCellDef="let item">
                                {{item['user']}}
                            </td>
                        </ng-container>
                        <ng-container dxcColumnDef="email">
                            <td *dxcCellDef="let item">
                                {{item['email']}}
                            </td>
                        </ng-container>
                    </dxc-resultset-table>`,
      {
        componentProperties: { falseShowGoToPage: false },
        imports: [DxcResultsetTableModule],
        excludeComponentDeclaration: true,
      }
    );
    expect(screen.getByText("user1")).toBeTruthy();
    expect(screen.getByText("pepe")).toBeTruthy();
    const nextButton = screen.getAllByRole("button")[2];
    fireEvent.click(nextButton);
    expect(screen.getByText("3 to 4 of 4")).toBeTruthy();
    expect(screen.getByText("Page: 2 of 2")).toBeTruthy();
    expect(screen.getByText("user5")).toBeTruthy();
    expect(screen.getByText("aida")).toBeTruthy();
  });

  test("should show data from last page", async () => {
    const table = await render(
      `  <dxc-resultset-table
                    [showGoToPage]="falseShowGoToPage"
                    [collectionResource]="[
                        {user:'user1',email:'user1@gmail.com'},
                        {user:'pepe',email:'user2@gmail.com'},
                        {user:'user5',email:'user5@gmail.com'},
                        {user:'aida',email:'test@gmail.com'}
                    ]"
                    [itemsPerPage]="1">
                        <ng-container dxcColumnDef="user">
                            <td *dxcCellDef="let item">
                                {{item['user']}}
                            </td>
                        </ng-container>
                        <ng-container dxcColumnDef="email">
                            <td *dxcCellDef="let item">
                                {{item['email']}}
                            </td>
                        </ng-container>
                    </dxc-resultset-table>`,
      {
        componentProperties: { falseShowGoToPage: false },
        imports: [DxcResultsetTableModule],
        excludeComponentDeclaration: true,
      }
    );
    expect(screen.getByText("user1")).toBeTruthy();
    const lastButton = screen.getAllByRole("button")[3];
    fireEvent.click(lastButton);
    expect(screen.getByText("4 to 4 of 4")).toBeTruthy();
    expect(screen.getByText("Page: 4 of 4")).toBeTruthy();
    expect(screen.getByText("aida")).toBeTruthy();
  });

  test("should show data from previous page", async () => {
    await render(
      `  <dxc-resultset-table
                    [showGoToPage]="falseShowGoToPage"
                    [collectionResource]="[
                        {user:'user1',email:'user1@gmail.com'},
                        {user:'pepe',email:'user2@gmail.com'},
                        {user:'user5',email:'user5@gmail.com'},
                        {user:'aida',email:'test@gmail.com'}
                    ]"
                    [itemsPerPage]="1">
                        <ng-container dxcColumnDef="user">
                            <td *dxcCellDef="let item">
                                {{item['user']}}
                            </td>
                        </ng-container>
                        <ng-container dxcColumnDef="email">
                            <td *dxcCellDef="let item">
                                {{item['email']}}
                            </td>
                        </ng-container>
                    </dxc-resultset-table>`,
      {
        componentProperties: { falseShowGoToPage: false },
        imports: [DxcResultsetTableModule],
        excludeComponentDeclaration: true,
      }
    );
    expect(screen.getByText("user1")).toBeTruthy();
    const lastButton = screen.getAllByRole("button")[3];
    fireEvent.click(lastButton);
    expect(screen.getByText("4 to 4 of 4")).toBeTruthy();
    expect(screen.getByText("Page: 4 of 4")).toBeTruthy();
    expect(screen.getByText("aida")).toBeTruthy();
    const previousButton = screen.getAllByRole("button")[1];
    fireEvent.click(previousButton);
    expect(screen.getByText("3 to 3 of 4")).toBeTruthy();
    expect(screen.getByText("Page: 3 of 4")).toBeTruthy();
    expect(screen.getByText("user5")).toBeTruthy();
  });

  test("should show data from first page", async () => {
    await render(
      `  <dxc-resultset-table
                    [showGoToPage]="falseShowGoToPage"
                    [collectionResource]="[
                        {user:'user1',email:'user1@gmail.com'},
                        {user:'pepe',email:'user2@gmail.com'},
                        {user:'user5',email:'user5@gmail.com'},
                        {user:'aida',email:'test@gmail.com'}
                    ]"
                    [itemsPerPage]="1">
                        <ng-container dxcColumnDef="user">
                            <td *dxcCellDef="let item">
                                {{item['user']}}
                            </td>
                        </ng-container>
                        <ng-container dxcColumnDef="email">
                            <td *dxcCellDef="let item">
                                {{item['email']}}
                            </td>
                        </ng-container>
                    </dxc-resultset-table>`,
      {
        componentProperties: { falseShowGoToPage: false },
        imports: [DxcResultsetTableModule],
        excludeComponentDeclaration: true,
      }
    );
    expect(screen.getByText("user1")).toBeTruthy();
    const lastButton = screen.getAllByRole("button")[3];
    fireEvent.click(lastButton);
    expect(screen.getByText("4 to 4 of 4")).toBeTruthy();
    expect(screen.getByText("Page: 4 of 4")).toBeTruthy();
    expect(screen.getByText("aida")).toBeTruthy();
    const firstButton = screen.getAllByRole("button")[0];
    fireEvent.click(firstButton);
    expect(screen.getByText("1 to 1 of 4")).toBeTruthy();
    expect(screen.getByText("Page: 1 of 4")).toBeTruthy();
    expect(screen.getByText("user1")).toBeTruthy();
  });

  test("should sort data by column", async () => {
    await render(
      `  <dxc-resultset-table
                    [collectionResource]="[
                        {user:'user1',email:'user1@gmail.com'},
                        {user:'pepe',email:'user2@gmail.com'},
                        {user:'user5',email:'user5@gmail.com'},
                        {user:'aida',email:'test@gmail.com'}
                    ]"
                    [itemsPerPage]="2">
                        <ng-container dxcColumnDef="user" [sortable]="{isSortable:true, propertyName:'user'}">
                            <td *dxcCellDef="let item">
                                {{item['user']}}
                            </td>
                        </ng-container>
                        <ng-container dxcColumnDef="email">
                            <td *dxcCellDef="let item">
                                {{item['email']}}
                            </td>
                        </ng-container>
                    </dxc-resultset-table>`,
      {
        imports: [DxcResultsetTableModule],
        excludeComponentDeclaration: true,
      }
    );
    expect(screen.getByText("user1")).toBeTruthy();
    expect(screen.getByText("pepe")).toBeTruthy();
    // const sortHeader = screen.getByText("user");
    // fireEvent.click(sortHeader);
    // expect(screen.getByText("aida")).toBeTruthy();
    // expect(screen.getByText("pepe")).toBeTruthy();
    const nextButton = screen.getAllByRole("button")[2];
    fireEvent.click(nextButton);
    // expect(screen.getByText("user1")).toBeTruthy();
    expect(screen.getByText("user5")).toBeTruthy();
  });

  test("should not sort data that is not sortable", async () => {
    await render(
      `<dxc-resultset-table
                    [collectionResource]="[
                        {user:'user1',email:'user1@gmail.com'},
                        {user:'pepe',email:'user2@gmail.com'},
                        {user:'user5',email:'user5@gmail.com'},
                        {user:'aida',email:'test@gmail.com'}
                    ]"
                    [itemsPerPage]="2">
                        <ng-container dxcColumnDef="user" [sortable]="{isSortable:true, propertyName:'user'}">
                            <td *dxcCellDef="let item">
                                {{item['user']}}
                            </td>
                        </ng-container>
                        <ng-container dxcColumnDef="email" [sortable]="{isSortable:false, propertyName:'email'}">
                            <td *dxcCellDef="let item">
                                {{item['email']}}
                            </td>
                        </ng-container>
                    </dxc-resultset-table>`,
      {
        imports: [DxcResultsetTableModule],
        excludeComponentDeclaration: true,
      }
    );

    expect(screen.getByText("user1")).toBeTruthy();
    expect(screen.getByText("pepe")).toBeTruthy();
    //TODO: Fix sorting. Migration to latest version in angular.
    // const sortHeader = table.getByText("email");
    // fireEvent.click(sortHeader);
    // table.detectChanges();
    // expect(table.getByText("user1")).toBeTruthy();
    // expect(table.getByText("pepe")).toBeTruthy();
  });

  test("should update dxc-resultset-table", async () => {
    const { rerender } = await render(
      `<dxc-resultset-table [collectionResource]="[{ user: 'user1', email: 'user1@gmail.com'}, { user: 'pepe', email: 'user2@gmail.com' }, { user: 'user555', email: 'user2@gmail.com'}, { user: 'aida', email: 'user2@gmail.com' }, {  user: 'user75', email: 'user2@gmail.com' },  { user: 'aida', email: 'test@gmail.com' }]"
        [itemsPerPage]="5" [margin]="xxsmall">
                        <ng-container dxcColumnDef="user">
                            <td *dxcCellDef="let item">
                                {{item['user']}}
                            </td>
                        </ng-container>
                        <ng-container dxcColumnDef="email">
                            <td *dxcCellDef="let item">
                                {{item['email']}}
                            </td>
                        </ng-container>
    </dxc-resultset-table>`,
      {
        detectChanges: true,
        imports: [DxcResultsetTableModule],
      }
    );
    expect(screen.getByText("user75")).toBeTruthy();
    expect(screen.getAllByRole("row").length).toBe(5);
    const nextButton = screen.getAllByRole("button")[2];
    fireEvent.click(nextButton);
    expect(screen.getAllByRole("row").length).toBe(1);
  });

  test("should navigate to the page", async () => {
    const table = await render(
      `<dxc-resultset-table showGoToPage="true" [collectionResource]="[{user:'user1',email:'user1@gmail.com'}, {user:'pepe',email:'user2@gmail.com'},{user:'user3',email:'user5@gmail.com'}, {user:'aida2',email:'test@gmail.com'},{user:'user5',email:'user5@gmail.com'}, {user:'aida',email:'test@gmail.com'}, {user:'user6',email:'user5@gmail.com'}, {user:'aida6',email:'test@gmail.com'} ]"
       [itemsPerPage]="2">
           <ng-container dxcColumnDef="user">
               <td *dxcCellDef="let item">
                   {{item['user']}}
               </td>
           </ng-container>
           <ng-container dxcColumnDef="email">
               <td *dxcCellDef="let item">
                   {{item['email']}}
               </td>
           </ng-container>
       </dxc-resultset-table>`,
      {
        imports: [DxcResultsetTableModule],
      }
    );
    table.detectChanges();
    expect(table.getByText("Go to page")).toBeTruthy();
    expect(table.getByText("pepe")).toBeTruthy();
    const trigger = table.getByRole("combobox");
    fireEvent.click(trigger);
    table.detectChanges();
    fireEvent.click(screen.getByText("3"));
    table.detectChanges();
    expect(table.getByText("user5")).toBeTruthy();
    expect(table.getByText("aida")).toBeTruthy();
  });
});
