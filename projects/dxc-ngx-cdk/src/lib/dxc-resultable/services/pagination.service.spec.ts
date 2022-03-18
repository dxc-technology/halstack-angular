import { PaginationService } from "./pagination.service";
import { TestBed } from "@angular/core/testing";
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from "@angular/platform-browser-dynamic/testing";

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

describe("PaginationService", () => {
  let service: PaginationService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaginationService],
    }).compileComponents();
    service = TestBed.inject(PaginationService);
  });

  test("should be created", () => {
    expect(service).toBeTruthy();
  });

  test("should return current start", () => {
    expect(service.getCurrentStart()).toBe(0);
    service.start = 1;
    expect(service.getCurrentStart()).toBe(1);
  });

  test("should return current end", () => {
    expect(service.getCurrentEnd()).toBe(5);
    service.end = 10;
    expect(service.getCurrentEnd()).toBe(10);
  });

  test("should calculate pagination", () => {
    function callback(data) {
      expect(JSON.stringify(data)).toBe(JSON.stringify({ start: 5, end: 10 }));
    }
    service.calculatePagination(2, 5, callback);

    function callback2(data) {
      expect(JSON.stringify(data)).toBe(JSON.stringify({ start: 0, end: 5 }));
    }
    service.calculatePagination(1, 5, callback2);
  });
});
