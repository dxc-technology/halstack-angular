import { render, fireEvent } from "@testing-library/angular";
import { DxcPaginatorComponent } from "./dxc-paginator.component";
import { DxcButtonModule } from "../dxc-button/dxc-button.module";
import { screen } from "@testing-library/dom";
import { DxcPaginatorModule } from "./dxc-paginator.module";
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from "@angular/platform-browser-dynamic/testing";
import { TestBed } from "@angular/core/testing";

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

describe("DxcPaginator tests", () => {
  test("should render default dxc-paginator", async () => {
    const paginator = await render(DxcPaginatorComponent, {
      componentProperties: {},
      imports: [DxcPaginatorModule],
      excludeComponentDeclaration: true,
    });
    expect(paginator.getByText("1 to 1 of 1")).toBeTruthy();
    expect(paginator.getByText("Page: 1 of 1")).toBeTruthy();
  });

  test("Paginator renders with itemsPerPage", async () => {
    const perPage = 10;
    const total = 20;
    const current = 1;
    const paginator = await render(DxcPaginatorComponent, {
      componentProperties: {
        itemsPerPage: perPage,
        totalItems: total,
        currentPage: current,
      },
      imports: [DxcPaginatorModule],
      excludeComponentDeclaration: true,
    });
    expect(paginator.getByText("Page: 1 of 2")).toBeTruthy();
    expect(paginator.getByText("1 to 10 of 20")).toBeTruthy();
  });

  test("Paginator renders with totalItems", async () => {
    const total = 20;
    const paginator = await render(DxcPaginatorComponent, {
      componentProperties: {
        totalItems: total,
      },
      imports: [DxcPaginatorModule],
      excludeComponentDeclaration: true,
    });
    expect(paginator.getByText("1 to 5 of 20")).toBeTruthy();
    expect(paginator.getByText("Page: 1 of 4")).toBeTruthy();
  });

  test("Paginator renders with correct text in second page", async () => {
    const paginationActions: Array<string> = ["prev", "next", "first"];
    const page: number = 2;
    const totalItems: number = 27;
    const itemsPerPage: number = 10;

    const paginator = await render(DxcPaginatorComponent, {
      componentProperties: {
        itemsPerPage: itemsPerPage,
        totalItems: totalItems,
        currentPage: page,
      },
      imports: [DxcPaginatorModule],
      excludeComponentDeclaration: true,
    });
    expect(paginator.getByText("11 to 20 of 27")).toBeTruthy();
    expect(paginator.getByText("Page: 2 of 3")).toBeTruthy();
  });

  test("should click next function", async () => {
    const navegateFunction = jest.fn();
    const page: number = 1;
    const totalItems: number = 27;
    const itemsPerPage: number = 10;
    const paginator = await render(
      `<dxc-paginator (onGoToPage)="navegateFunction($event,'next')" [itemsPerPage]=${itemsPerPage} [totalItems]=${totalItems} [currentPage]=${page} [paginationActions]="['next']" ></dxc-paginator>`,
      {
        componentProperties: {
          navegateFunction,
        },
        imports: [DxcPaginatorModule],
        excludeComponentDeclaration: true,
      }
    );
    expect(paginator.getByText("1 to 10 of 27")).toBeTruthy();
    const nextButton = paginator.getAllByRole("button");
    fireEvent.click(nextButton[0]);
    expect(navegateFunction).toHaveBeenCalled();
  });

  test("should click prev function", async () => {
    const navegateFunction = jest.fn();
    const page: number = 2;
    const totalItems: number = 20;
    const itemsPerPage: number = 10;
    const paginator = await render(
      `<dxc-paginator (onGoToPage)="navegateFunction($event,'prev')" [itemsPerPage]=${itemsPerPage} [totalItems]=${totalItems} [currentPage]=${page} [paginationActions]="['prev']" ></dxc-paginator>`,
      {
        componentProperties: {
          navegateFunction,
        },
        imports: [DxcPaginatorModule],
        excludeComponentDeclaration: true,
      }
    );
    const btn = paginator.getAllByRole("button");
    fireEvent.click(btn[0]);
    expect(navegateFunction).toHaveBeenCalled();
  });

  test("should click first function", async () => {
    const navegateFunction = jest.fn();
    const page: number = 2;
    const totalItems: number = 30;
    const itemsPerPage: number = 10;
    const paginator = await render(
      `<dxc-paginator (onGoToPage)="navegateFunction($event,'first')" [itemsPerPage]=${itemsPerPage} [totalItems]=${totalItems} [currentPage]=${page} [paginationActions]="['first']" ></dxc-paginator>`,
      {
        componentProperties: {
          navegateFunction,
        },
        imports: [DxcPaginatorModule],
        excludeComponentDeclaration: true,
      }
    );
    const btn = paginator.getAllByRole("button");
    fireEvent.click(btn[0]);
    expect(navegateFunction).toHaveBeenCalled();
  });

  test("should click last function", async () => {
    const navegateFunction = jest.fn();
    const page: number = 1;
    const totalItems: number = 20;
    const itemsPerPage: number = 10;
    const paginator = await render(
      `<dxc-paginator (onGoToPage)="navegateFunction($event,'last')" [itemsPerPage]=${itemsPerPage} [totalItems]=${totalItems} [currentPage]=${page} [paginationActions]="['last']" ></dxc-paginator>`,
      {
        componentProperties: {
          navegateFunction,
        },
        imports: [DxcPaginatorModule],
        excludeComponentDeclaration: true,
      }
    );
    const btn = paginator.getAllByRole("button");
    fireEvent.click(btn[0]);
    expect(navegateFunction).toHaveBeenCalled();
  });

  test("should click disabled next function", async () => {
    const navegateFunction = jest.fn();
    const page: number = 2;
    const totalItems: number = 20;
    const itemsPerPage: number = 10;
    const paginator = await render(
      `<dxc-paginator (onGoToPage)="navegateFunction($event,'next')" [itemsPerPage]=${itemsPerPage} [totalItems]=${totalItems} [currentPage]=${page} [paginationActions]="['next']" ></dxc-paginator>`,
      {
        componentProperties: {
          navegateFunction,
        },
        imports: [DxcPaginatorModule],
        excludeComponentDeclaration: true,
      }
    );
    const nextButton = paginator.getAllByRole("button");
    expect(nextButton[0].hasAttribute("disabled")).toBe(true);
  });

  test("should click disabled prev function", async () => {
    const navegateFunction = jest.fn();
    const page: number = 1;
    const totalItems: number = 20;
    const itemsPerPage: number = 10;
    const paginator = await render(
      `<dxc-paginator (onGoToPage)="navegateFunction($event,'prev')" [itemsPerPage]=${itemsPerPage} [totalItems]=${totalItems} [currentPage]=${page} [paginationActions]="['prev']" ></dxc-paginator>`,
      {
        componentProperties: {
          navegateFunction,
        },
        imports: [DxcPaginatorModule],
        excludeComponentDeclaration: true,
      }
    );
    const btn = paginator.getAllByRole("button");
    expect(btn[0].hasAttribute("disabled")).toBe(true);
  });

  test("should click disabled first function", async () => {
    const navegateFunction = jest.fn();
    const page: number = 1;
    const totalItems: number = 20;
    const itemsPerPage: number = 10;
    const paginator = await render(
      `<dxc-paginator (onGoToPage)="navegateFunction($event,'first')" [itemsPerPage]=${itemsPerPage} [totalItems]=${totalItems} [currentPage]=${page} [paginationActions]="['first']" ></dxc-paginator>`,
      {
        componentProperties: {
          navegateFunction,
        },
        imports: [DxcPaginatorModule],
        excludeComponentDeclaration: true,
      }
    );
    const btn = paginator.getAllByRole("button");
    expect(btn[0].hasAttribute("disabled")).toBe(true);
  });

  test("should click last function", async () => {
    const navegateFunction = jest.fn();
    const page: number = 2;
    const totalItems: number = 20;
    const itemsPerPage: number = 10;
    const paginator = await render(
      `<dxc-paginator (onGoToPage)="navegateFunction($event,'last')" [itemsPerPage]=${itemsPerPage} [totalItems]=${totalItems} [currentPage]=${page} [paginationActions]="['last']" ></dxc-paginator>`,
      {
        componentProperties: {
          navegateFunction,
        },
        imports: [DxcPaginatorModule],
        excludeComponentDeclaration: true,
      }
    );
    const btn = paginator.getAllByRole("button");
    expect(btn[0].hasAttribute("disabled")).toBe(true);
  });

  test("should disable last and next buttons", async () => {
    const navegateFunction = jest.fn();
    const page: number = 2;
    const totalItems: number = 20;
    const itemsPerPage: number = 10;
    const paginator = await render(
      `<dxc-paginator (onGoToPage)="navegateFunction($event,'next')" (lastFunction)="navegateFunction($event,'last')" 
    (firstFunction)="navegateFunction($event,'first')" (prevFunction)="navegateFunction($event,'prev')" 
    [itemsPerPage]=${itemsPerPage} [totalItems]=${totalItems} [currentPage]=${page} ></dxc-paginator>`,
      {
        componentProperties: {
          navegateFunction,
        },
        imports: [DxcPaginatorModule],
        excludeComponentDeclaration: true,
      }
    );
    const firstButton = paginator.getAllByRole("button")[0];
    const prevButton = paginator.getAllByRole("button")[1];
    const nextButton = paginator.getAllByRole("button")[2];
    const lastButton = paginator.getAllByRole("button")[3];
    expect(firstButton.hasAttribute("disabled")).toBeFalsy();
    expect(prevButton.hasAttribute("disabled")).toBeFalsy();
    expect(nextButton.hasAttribute("disabled")).toBeTruthy();
    expect(lastButton.hasAttribute("disabled")).toBeTruthy();
  });

  test("should disable first and previous buttons", async () => {
    const navegateFunction = jest.fn();
    const page: number = 1;
    const totalItems: number = 20;
    const itemsPerPage: number = 10;
    const paginator = await render(
      `<dxc-paginator (onGoToPage)="navegateFunction($event,'next')" (lastFunction)="navegateFunction($event,'last')" 
    (firstFunction)="navegateFunction($event,'first')" (prevFunction)="navegateFunction($event,'prev')" 
    [itemsPerPage]=${itemsPerPage} [totalItems]=${totalItems} [currentPage]=${page} ></dxc-paginator>`,
      {
        componentProperties: {
          navegateFunction,
        },
        imports: [DxcPaginatorModule],
        excludeComponentDeclaration: true,
      }
    );
    const firstButton = paginator.getAllByRole("button")[0];
    const prevButton = paginator.getAllByRole("button")[1];
    const nextButton = paginator.getAllByRole("button")[2];
    const lastButton = paginator.getAllByRole("button")[3];
    expect(firstButton.hasAttribute("disabled")).toBeTruthy();
    expect(prevButton.hasAttribute("disabled")).toBeTruthy();
    expect(nextButton.hasAttribute("disabled")).toBeFalsy();
    expect(lastButton.hasAttribute("disabled")).toBeFalsy();
  });

  test("Paginator renders with items per page options", async () => {
    const itemsPerPageOptions = [10, 20];

    const paginator = await render(
      `<dxc-paginator itemsPerPage="10" [itemsPerPageOptions]="itemsPerPageOptions" totalItems="27" currentPage="2"></dxc-paginator>`,
      {
        componentProperties: { itemsPerPageOptions: itemsPerPageOptions },
        imports: [DxcPaginatorModule],
        excludeComponentDeclaration: true,
      }
    );
    expect(screen.getByText("Items per page")).toBeTruthy();
    expect(screen.getByRole("combobox")).toBeTruthy();
  });

  test("Paginator change items per page value", async () => {
    const changeMock = jest.fn();
    const itemsPerPageOptions = [10, 20];

    const paginator = await render(
      `<dxc-paginator itemsPerPage="10" [itemsPerPageOptions]="itemsPerPageOptions" totalItems="27" (itemsPerPageFunction)="changeMock($event)" currentPage="2"></dxc-paginator>`,
      {
        componentProperties: {
          itemsPerPageOptions,
          changeMock,
        },
        imports: [DxcPaginatorModule],
        excludeComponentDeclaration: true,
      }
    );
    expect(screen.getByText("Items per page")).toBeTruthy();
    fireEvent.click(paginator.getByRole("combobox"));
    paginator.detectChanges();
    fireEvent.click(screen.getByText("20"));
    expect(changeMock).toHaveBeenCalledWith(20);
  });

  test("Paginator renders with go to page options", async () => {
    const changeMock = jest.fn();
    const itemsPerPageOptions = [10, 20];

    const paginator = await render(
      `<dxc-paginator showGoToPage="true" itemsPerPage="10" totalItems="27" (onGoToPage)="changeMock($event)" currentPage="2"></dxc-paginator>`,
      {
        componentProperties: {
          itemsPerPageOptions,
          changeMock,
        },
        imports: [DxcPaginatorModule],
        excludeComponentDeclaration: true,
      }
    );

    expect(screen.getByText("Go to page")).toBeTruthy();
    fireEvent.click(paginator.getByRole("combobox"));
    paginator.detectChanges();
    fireEvent.click(screen.getByText("3"));
    expect(changeMock).toHaveBeenCalledWith(3);
  });
});
