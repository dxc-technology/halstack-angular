import { render, fireEvent } from "@testing-library/angular";
import { DxcToggleGroupComponent } from "./dxc-toggleGroup.component";
import { DxcToggleGroupModule } from "./dxc-toggleGroup.module";
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from "@angular/platform-browser-dynamic/testing";
import { TestBed } from "@angular/core/testing";

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

describe("DxcToggleGroup tests", () => {
  test("should render dxc-togglegroup", async () => {
    const dxcToggleGroup = await render(
      `<dxc-togglegroup>,
        <dxc-toggle label="Facebook" value="1"></dxc-toggle>
        <dxc-toggle label="Twitter" value="2"></dxc-toggle>
        <dxc-toggle label="Linkedin" value="3"></dxc-toggle>
      </dxc-togglegroup>`,
      {
        imports: [DxcToggleGroupModule],
        excludeComponentDeclaration: true,
      }
    );

    expect(dxcToggleGroup.getByText("Facebook"));
  });

  test("dxc-toggleGroup uncontrolled multiple functionality", async () => {
    const changeMock = jest.fn();
    const dxcToggleGroup = await render(
      `<dxc-togglegroup multiple="true" (onChange)="changeMock($event)">,
        <dxc-toggle label="Facebook" value="1"></dxc-toggle>
        <dxc-toggle label="Twitter" value="2"></dxc-toggle>
        <dxc-toggle label="Linkedin" value="3"></dxc-toggle>
      </dxc-togglegroup>`,
      {
        componentProperties: {
          changeMock,
        },
        imports: [DxcToggleGroupModule],
        excludeComponentDeclaration: true,
      }
    );

    expect(dxcToggleGroup.getByText("Facebook"));
    fireEvent.click(dxcToggleGroup.getByText("Facebook"));
    expect(changeMock).toHaveBeenCalledWith(["1"]);
    fireEvent.click(dxcToggleGroup.getByText("Twitter"));
    expect(changeMock).toHaveBeenCalledWith(["1", "2"]);
  });

  test("dxc-toggleGroup defaultValue functionality", async () => {
    const changeMock = jest.fn();
    const dxcToggleGroup = await render(
      `<dxc-togglegroup defaultValue="1" (onChange)="changeMock($event)">,
        <dxc-toggle label="Facebook" value="1"></dxc-toggle>
        <dxc-toggle label="Twitter" value="2"></dxc-toggle>
        <dxc-toggle label="Linkedin" value="3"></dxc-toggle>
      </dxc-togglegroup>`,
      {
        componentProperties: {
          changeMock,
        },
        imports: [DxcToggleGroupModule],
        excludeComponentDeclaration: true,
      }
    );

    dxcToggleGroup.detectChanges();
    fireEvent.click(dxcToggleGroup.getByText("Facebook"));
    dxcToggleGroup.detectChanges();
    expect(changeMock).toHaveBeenCalledWith(null);
    fireEvent.click(dxcToggleGroup.getByText("Facebook"));
    expect(changeMock).toHaveBeenCalledWith("1");
  });

  test("dxc-toggleGroup controlled functionality", async () => {
    const changeMock = jest.fn();
    const dxcToggleGroup = await render(
      `<dxc-togglegroup value="1" (onChange)="changeMock($event)">,
        <dxc-toggle label="Facebook" value="1"></dxc-toggle>
        <dxc-toggle label="Twitter" value="2"></dxc-toggle>
        <dxc-toggle label="Linkedin" value="3"></dxc-toggle>
      </dxc-togglegroup>`,
      {
        componentProperties: {
          changeMock,
        },
        imports: [DxcToggleGroupModule],
        excludeComponentDeclaration: true,
      }
    );

    dxcToggleGroup.detectChanges();
    fireEvent.click(dxcToggleGroup.getByText("Twitter"));
    dxcToggleGroup.detectChanges();
    expect(changeMock).toHaveBeenCalledWith("2");
    fireEvent.click(dxcToggleGroup.getByText("Facebook"));
    expect(changeMock).toHaveBeenCalledWith("1");
  });

  test("dxc-toggleGroup controlled multiple functionality", async () => {
    const changeMock = jest.fn();
    const dxcToggleGroup = await render(
      `<dxc-togglegroup [multiple]="true" [value]="['1']" (onChange)="changeMock($event)">,
          <dxc-toggle label="Facebook" value="1"></dxc-toggle>
          <dxc-toggle label="Twitter" value="2"></dxc-toggle>
          <dxc-toggle label="Linkedin" value="3"></dxc-toggle>
        </dxc-togglegroup>`,
      {
        componentProperties: {
          changeMock,
        },
        imports: [DxcToggleGroupModule],
        excludeComponentDeclaration: true,
      }
    );

    dxcToggleGroup.detectChanges();
    fireEvent.click(dxcToggleGroup.getByText("Twitter"));
    expect(changeMock).toHaveBeenCalledWith(["1", "2"]);
    fireEvent.click(dxcToggleGroup.getByText("Facebook"));
    expect(changeMock).toHaveBeenCalledWith([]);
  });

  test("dxc-toggleGroup disabled", async () => {
    const changeMock = jest.fn();
    const dxcToggleGroup = await render(
      `<dxc-togglegroup [disabled]="true" (onChange)="changeMock($event)">,
          <dxc-toggle label="Facebook" value="1"></dxc-toggle>
          <dxc-toggle label="Twitter" value="2"></dxc-toggle>
          <dxc-toggle label="Linkedin" value="3"></dxc-toggle>
        </dxc-togglegroup>`,
      {
        componentProperties: {
          changeMock,
        },
        imports: [DxcToggleGroupModule],
        excludeComponentDeclaration: true,
      }
    );

    expect(dxcToggleGroup.getByText("Facebook"));
    fireEvent.click(dxcToggleGroup.getByText("Facebook"));
    expect(changeMock).toHaveBeenCalledTimes(0);
  });
});
