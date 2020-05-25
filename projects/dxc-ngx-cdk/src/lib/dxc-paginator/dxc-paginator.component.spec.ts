import { render, fireEvent } from "@testing-library/angular";
import { screen } from "@testing-library/dom";
import { DxcPaginatorComponent } from "./dxc-paginator.component";
import { TestBed } from "@angular/core/testing";
import { DxcButtonModule } from '../dxc-button/dxc-button.module';

describe("DxcPaginator tests", () => {

  test("should render dxc-paginator", async () => {
    const paginator = await render(DxcPaginatorComponent, {
      template: `<dxc-paginator></dxc-paginator>`,
      componentProperties: {},
      imports: [DxcButtonModule]
    });
    expect(paginator.getByText("1 to 1 of 1")).toBeTruthy();
    expect(paginator.getByText("Page: 1 of 1")).toBeTruthy();
  });

  test("Paginator renders with itemsPerPage", async () => {
    const perPage = 10;
    const total = 20;
    const current = 1;
    const paginator = await render(DxcPaginatorComponent, {
        template: `<dxc-paginator [itemsPerPage]=${perPage} [totalItems]=${total} [currentPage]=${current}></dxc-paginator>`,
        componentProperties: {
        },
        imports: [DxcButtonModule]
    });
    expect(paginator.getByText("Page: 1 of 2")).toBeTruthy();
    expect(paginator.getByText("1 to 10 of 20")).toBeTruthy();
  });

  test("Paginator renders with totalItems", async () => {
    const total = 20;
    const paginator = await render(DxcPaginatorComponent, {
        template: `<dxc-paginator [totalItems]=${total}></dxc-paginator>`,
        componentProperties: { },
        imports: [DxcButtonModule]
    });
    expect(paginator.getByText("1 to 5 of 20")).toBeTruthy();
    expect(paginator.getByText("Page: 1 of 4")).toBeTruthy();
  });

  test("Paginator renders with correct text in second page", async () => {
    const paginationActions : Array<string> = ['prev', 'next', 'first'];
    const page : number = 2;
    const totalItems : number = 27;
    const itemsPerPage : number = 10;

    const paginator = await render(DxcPaginatorComponent, {
        template: `<dxc-paginator [itemsPerPage]=${itemsPerPage} [totalItems]=${totalItems} [currentPage]=${page}></dxc-paginator>`,
        componentProperties: {},
        imports: [DxcButtonModule]
    });
    expect(paginator.getByText("11 to 20 of 27")).toBeTruthy();
    expect(paginator.getByText("Page: 2 of 3")).toBeTruthy();
  });

  /*test("should click next function", async () => {
    const navegateFunction = jest.fn();
    const paginationActions : Array<string> = ['prev', 'next', 'first'];
    const page : number = 2;
    const totalItems : number = 27;
    const itemsPerPage : number = 10;
    const actions = ['next'];
    const paginator = await render(DxcPaginatorComponent, {
      template: `<dxc-paginator [itemsPerPage]=${itemsPerPage} [totalItems]=${totalItems} [currentPage]=${page} [paginationActions]=${actions} (nextFunction)="navegateFunction($event, 'next')"></dxc-paginator>`,
      componentProperties: {
        nextFunction: {navegateFunction }
      },
      imports: [DxcButtonModule]
    });
    const nextButton = paginator.getAllByRole("button");
    fireEvent.click(nextButton[0]);
    expect(navegateFunction).toHaveBeenCalled();
  });*/

});