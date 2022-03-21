import { SortService } from "./sort.service";
import { TestBed, ComponentFixture } from "@angular/core/testing";
import { Ordering } from "../directives/sorting.directive";
import { Component } from "@angular/core";
import { MockDirective, ngMocks, MockedDirective } from "ng-mocks";
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from "@angular/platform-browser-dynamic/testing";

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
let data = [
  {
    user: "user1",
    email: "user1@gmail.com",
  },
  {
    user: "pepe",
    email: "user2@gmail.com",
  },
  {
    user: "user555",
    email: "user2@gmail.com",
  },
  {
    user: "aida",
    email: "user2@gmail.com",
  },
  {
    user: "user75",
    email: "user2@gmail.com",
  },
  {
    user: "espe",
    email: "user2@gmail.com",
  },
];

@Component({
  template: `<div
      ordering="{{ isSortable }}"
      id="header-{{ columnName }}-{{ parentClassName }}"
      propertyname="{{ value }}"
    >
      {{ columnName }}
      <span
        id="iconSort-{{ columnName }}-{{ parentClassName }}"
        *ngIf="isSortable"
      ></span>
    </div>
    >`,
})
class TestHeaderComponent {
  columnName: string = "User";
  isSortable: boolean = true;
  parentClassName: any = "0000";
  value: string = "User";
}

describe("SortService", () => {
  let sort: SortService;
  let spyDefaultIcon;
  let spyAscIcon;
  let spyDescIcon;
  let mockedDirectiveInstance;

  let fixture: ComponentFixture<TestHeaderComponent>;
  let component: TestHeaderComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestHeaderComponent, MockDirective(Ordering)],
      providers: [SortService],
    }).compileComponents();
    fixture = TestBed.createComponent(TestHeaderComponent);
    sort = TestBed.inject(SortService);
    component = fixture.componentInstance;
    spyDefaultIcon = jest.spyOn(sort, "getDefaultIcon");
    spyAscIcon = jest.spyOn(sort, "getAscIcon");
    spyDescIcon = jest.spyOn(sort, "getDescIcon");
    mockedDirectiveInstance = ngMocks.findInstance(
      fixture.debugElement,
      Ordering
    ) as MockedDirective<Ordering>;
    fixture.detectChanges();
  });

  afterEach(() => {
    spyDefaultIcon.mockReset();
    spyDefaultIcon.mockRestore();
    spyAscIcon.mockReset();
    spyAscIcon.mockRestore();
    spyDescIcon.mockReset();
    spyDescIcon.mockRestore();
    jest.resetModules();
  });

  test("should get sorted asc list from given list", () => {
    let list = sort.getSortedList(data, "user", "asc");
    expect(list[0].user).toBe("aida");
    expect(list[1].user).toBe("espe");
    expect(list[2].user).toBe("pepe");
    expect(list[3].user).toBe("user1");
    expect(list[4].user).toBe("user555");
    expect(list[5].user).toBe("user75");
  });

  test("should get sorted desc list from given list", () => {
    let list = sort.getSortedList(data, "user", "desc");
    expect(list[0].user).toBe("user75");
    expect(list[1].user).toBe("user555");
    expect(list[2].user).toBe("user1");
    expect(list[3].user).toBe("pepe");
    expect(list[4].user).toBe("espe");
    expect(list[5].user).toBe("aida");
  });

  test("should set to default state the given header id", () => {
    expect(sort).toBeTruthy();
    let iconDefault =
      '<svg id="icon_default-User" xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 24 24" width="24" fill="white"><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z"></path></svg>';
    spyDefaultIcon.mockImplementation(() => iconDefault);
    document.body.innerHTML =
      '<div ordering="true" id="header-User-User" propertyname="User">' +
      "   User" +
      '  <span id="iconSort-User-User">' +
      "  </span>" +
      "</div>";
    fixture.detectChanges();
    sort.removeOtherSortings("header-User-User");
    expect(spyDefaultIcon).toHaveBeenCalled();
    expect(sort.mapStatesHeaders.get("User")).toBe("default");
    expect(document.getElementById("iconSort-User-User").innerHTML).toBe(
      iconDefault
    );
    expect(document.getElementById("icon_default-User")).not.toBeNull();
  });

  test("should return default icon for the given header", () => {
    let columnName = "user";
    let icon = `<svg id="icon_default-${columnName}" class="iconHeader" xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 24 24" width="24" fill="white"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z"/></svg>`;
    expect(sort.getDefaultIcon(columnName)).toBe(icon);
  });

  test("should return asc icon for the given header", () => {
    let columnName = "user";
    let icon = `<svg id="icon_asc-${columnName}" class="iconHeader" xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 24 24" width="24" fill="white"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/></svg>`;
    expect(sort.getAscIcon(columnName)).toBe(icon);
  });

  test("should return desc icon for the given header", () => {
    let columnName = "user";
    let icon = `<svg id="icon_desc-${columnName}" class="iconHeader" xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 24 24" width="24" fill="white"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"/></svg>`;
    expect(sort.getDescIcon(columnName)).toBe(icon);
  });

  // test("should set default icon to the header", () => {
  //   expect(sort).toBeTruthy();
  //   component.isSortable = true;
  //   component.columnName = component.parentClassName = component.value = "User";
  //   mockedDirectiveInstance.elementRef = fixture.debugElement;
  //   let iconDefault =
  //     '<svg id="icon_default-User" class="iconHeader" xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 24 24" width="24" fill="white"><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z"></path></svg>';
  //   spyDefaultIcon.mockImplementation(() => iconDefault);
  //   sort.setDefaultIconSort(mockedDirectiveInstance);
  //   expect(spyDefaultIcon).toHaveBeenCalled();
  //   let spanIcon = (
  //     mockedDirectiveInstance.elementRef.nativeElement as HTMLElement
  //   ).children[0].innerHTML;
  //   expect(spanIcon).toBe(iconDefault);
  // });

  // test("should set asc icon to the header", () => {
  //   expect(sort).toBeTruthy();
  //   component.isSortable = true;
  //   component.columnName = component.parentClassName = component.value = "User";
  //   mockedDirectiveInstance.elementRef = fixture.debugElement;
  //   let iconAsc =
  //     '<svg id="icon_asc-User" class="iconHeader" xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 24 24" width="24" fill="white"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path></svg>';
  //   spyAscIcon.mockImplementation(() => iconAsc);
  //   sort.setAscIconSort(mockedDirectiveInstance);
  //   expect(spyAscIcon).toHaveBeenCalled();
  //   let spanIcon = (
  //     mockedDirectiveInstance.elementRef.nativeElement as HTMLElement
  //   ).children[0].innerHTML;
  //   expect(spanIcon).toBe(iconAsc);
  // });

  // test("should set desc icon to the header", () => {
  //   expect(sort).toBeTruthy();
  //   component.isSortable = true;
  //   component.columnName = component.parentClassName = component.value = "User";
  //   mockedDirectiveInstance.elementRef = fixture.debugElement;
  //   let iconDesc =
  //     '<svg id="icon_desc-User" class="iconHeader" xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 24 24" width="24" fill="white"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></svg>';
  //   spyDescIcon.mockImplementation(() => iconDesc);
  //   sort.setDescIconSort(mockedDirectiveInstance);
  //   expect(spyDescIcon).toHaveBeenCalled();
  //   let spanIcon = (
  //     mockedDirectiveInstance.elementRef.nativeElement as HTMLElement
  //   ).children[0].innerHTML;
  //   expect(spanIcon).toBe(iconDesc);
  // });
});
