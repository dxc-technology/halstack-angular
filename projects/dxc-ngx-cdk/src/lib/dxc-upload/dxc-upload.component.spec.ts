import { render, fireEvent } from "@testing-library/angular";
import { DxcUploadComponent } from "./dxc-upload.component";
import { DxcUploadModule } from "./dxc-upload.module";
import { screen, waitFor } from "@testing-library/dom";
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from "@angular/platform-browser-dynamic/testing";
import { TestBed } from "@angular/core/testing";

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

describe("DxcUpload tests", () => {
  test("should render dxc-upload", async () => {
    const { getByText } = await render(DxcUploadComponent, {
      componentProperties: {},
      excludeComponentDeclaration: true,
      imports: [DxcUploadModule],
    });

    expect(getByText("There are no files to upload"));
  });

  test("should input a file dxc-upload", async () => {
    const dxcUpload = await render(DxcUploadComponent, {
      componentProperties: {},
      excludeComponentDeclaration: true,
      imports: [DxcUploadModule],
    });
    dxcUpload.detectChanges();

    const inputEl = dxcUpload.getByTestId("fileInput");
    const file = new File(["foo"], "foo.txt", {
      type: "text/plain",
    });

    fireEvent.change(inputEl, { target: { files: [file] } });
    dxcUpload.detectChanges();
    await waitFor(() => {
      dxcUpload.detectChanges();
      screen.getByTestId("filesToUpload");
      expect(screen.getByText("foo.txt"));
    });
  });

  test("function callback in dxc-upload", async () => {
    const fileUpload = jest.fn((file) => {
      const result = new Promise((resolve) => setTimeout(resolve, 8000));
      return result;
    });

    const dxcUpload = await render(DxcUploadComponent, {
      componentProperties: { uploadCallback: fileUpload },
      excludeComponentDeclaration: true,
      imports: [DxcUploadModule],
    });
    dxcUpload.detectChanges();

    const inputEl = dxcUpload.getByTestId("fileInput");
    const file = new File(["foo"], "foo.txt", {
      type: "text/plain",
    });

    fireEvent.change(inputEl, { target: { files: [file] } });
    dxcUpload.detectChanges();
    await waitFor(() => {
      dxcUpload.detectChanges();
      screen.getByTestId("filesToUpload");
      expect(screen.getByText("foo.txt"));
      fireEvent.click(screen.getByText("Upload"));
      expect(fileUpload).toHaveBeenCalledWith({
        status: "processing",
        fileData: file,
        image: null,
      });
    });
  });

  test("function callback multiple times in dxc-upload", async () => {
    const fileUpload = jest.fn((file) => {
      const result = new Promise((resolve) => setTimeout(resolve, 8000));
      return result;
    });

    const dxcUpload = await render(DxcUploadComponent, {
      componentProperties: { uploadCallback: fileUpload },
      excludeComponentDeclaration: true,
      imports: [DxcUploadModule],
    });
    dxcUpload.detectChanges();

    const inputEl = dxcUpload.getByTestId("fileInput");
    const file = new File(["foo"], "foo.txt", {
      type: "text/plain",
    });

    const file2 = new File(["(⌐□_□)"], "chucknorris.txt", {
      type: "text/plain",
    });

    fireEvent.change(inputEl, { target: { files: [file, file2] } });
    dxcUpload.detectChanges();
    await waitFor(() => {
      dxcUpload.detectChanges();
      screen.getByTestId("filesToUpload");
      expect(screen.getByText("foo.txt"));
      expect(screen.getByText("chucknorris.txt"));
      fireEvent.click(screen.getByText("Upload"));
      expect(fileUpload).toHaveBeenCalledTimes(2);
    });
  });
});
