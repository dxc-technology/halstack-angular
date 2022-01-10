import { fireEvent, render } from "@testing-library/angular";
import { DxcFileInputComponent } from "./dxc-file-input.component";
import { DxcFileInputModule } from "./dxc-file-input.module";
import { screen, waitFor } from "@testing-library/dom";
import { FileData } from "./interfaces/file.interface";

describe("DxcFileInputComponent", () => {
  test("should render dxc-file-input in file mode", async () => {
    const fileInput = await render(DxcFileInputComponent, {
      componentProperties: {
        label: "Label",
        helperText: "Helper Text",
      },
      excludeComponentDeclaration: true,
      imports: [DxcFileInputModule],
    });

    expect(fileInput.getByText("Select files"));
    expect(fileInput.getByText("Label"));
    expect(fileInput.getByText("Helper Text"));
  });

  test("should render dxc-file-input in file drop mode", async () => {
    const fileInput = await render(DxcFileInputComponent, {
      componentProperties: {
        mode: "filedrop",
      },
      excludeComponentDeclaration: true,
      imports: [DxcFileInputModule],
    });

    expect(fileInput.getByText("or drop files"));
  });

  test("should render dxc-file-input in drop zone mode", async () => {
    const fileInput = await render(DxcFileInputComponent, {
      componentProperties: {
        mode: "dropzone",
      },
      excludeComponentDeclaration: true,
      imports: [DxcFileInputModule],
    });

    expect(fileInput.getByText("or drop files"));
  });

  test("should render disabled dxc-file-input", async () => {
    const fileInput = await render(DxcFileInputComponent, {
      componentProperties: {
        disabled: true,
      },
      excludeComponentDeclaration: true,
      imports: [DxcFileInputModule],
    });

    expect(fileInput.getByText("Select files"));
    const btn = fileInput.getAllByRole("button");
    expect(btn[0].hasAttribute("disabled")).toBe(true);
  });

  test("should not have files even if they are selected", async () => {
    const fileInput = await render(DxcFileInputComponent, {
      template: `<dxc-file-input multiple="false"></dxc-file-input>`,
      excludeComponentDeclaration: true,
      imports: [DxcFileInputModule],
    });
    fileInput.detectChanges();
    const inputEl = fileInput.getByTestId("input");
    const file = new File(["foo"], "foo.txt", {
      type: "text/plain",
    });
    fireEvent.change(inputEl, { target: { files: [file] } });
    await waitFor(() => {
      fileInput.detectChanges();
      expect(() => screen.getByText("foo.txt")).toThrow();
    });
  });

  test("should render error when file does not meet minSize", async () => {
    const file = new File(["foo"], "foo.txt", {
      type: "text/plain",
    });
    const callback = jest.fn();
    const fileInput = await render(DxcFileInputComponent, {
      template: `<dxc-file-input (callbackFile)="callback($event)" minSize="50" multiple="false"></dxc-file-input>`,
      componentProperties: { callback },
      excludeComponentDeclaration: true,
      imports: [DxcFileInputModule],
    });
    fileInput.detectChanges();
    const inputEl = fileInput.getByTestId("input");
    fireEvent.change(inputEl, { target: { files: [file] } });
    await waitFor(() => {
      fileInput.detectChanges();
      expect(screen.getByText("foo.txt"));
      expect(screen.getByText("File size must be greater than min size."));
    });
  });

  test("should render error when file does not meet maxSize", async () => {
    const file = new File(["foo"], "foo.txt", {
      type: "text/plain",
    });
    const value: Array<FileData> = [
      {
        data: file,
        image: "",
        error: "",
      }
    ];
    const maxSize = 1;
    const callback = jest.fn();
    const fileInput = await render(DxcFileInputComponent, {
      template: `<dxc-file-input [value]="value" (callbackFile)="callback($event)" [maxSize]="maxSize" multiple="false"></dxc-file-input>`,
      componentProperties: { callback, value, maxSize },
      excludeComponentDeclaration: true,
      imports: [DxcFileInputModule],
    });
    fileInput.detectChanges();
    await waitFor(() => {
      fileInput.detectChanges();
      expect(screen.getByText("foo.txt"));
      expect(screen.getByText("File size must be less than max size."));
    });
  });

  test("render given values when multiple is false", async () => {
    const callback = jest.fn();
    const file = new File(["foo"], "foo.txt", {
      type: "text/plain",
    });
    const file2 = new File(["chucknorris"], "chucknorris.txt", {
      type: "text/plain",
    });
    let value: Array<FileData> = [
      {
        data: file,
        image: "",
        error: "Error for file",
      },
      {
        data: file2,
        image: "",
        error: "Error for file2",
      },
    ];
    const fileInput = await render(DxcFileInputComponent, {
      componentProperties: {
        multiple: false,
        value: value,
        callbackFile: {
          emit: callback,
        } as any,
      },
      excludeComponentDeclaration: true,
      imports: [DxcFileInputModule],
    });
    fileInput.detectChanges();

    await waitFor(() => {
      fileInput.detectChanges();
      expect(screen.getByText("foo.txt"));
      expect(screen.getByText("chucknorris.txt"));
      expect(screen.getByText("Error for file"));
      expect(screen.getByText("Error for file2"));
    });
  });

  test("render dxc-file-input with multiple files", async () => {
    const callback = jest.fn();
    const file = new File(["foo"], "foo.txt", {
      type: "text/plain",
    });
    const file2 = new File(["test"], "test.txt", {
      type: "text/plain",
    });
    const value = [{
          data: file,
          image: ""
        }, {
          data: file2,
          image: ""
        }];
    const fileInput = await render(DxcFileInputComponent, {
      template: `<dxc-file-input [value]="value" (callbackFile)="callback($event)"></dxc-file-input>`,
      componentProperties: { callback, value },
      excludeComponentDeclaration: true,
      imports: [DxcFileInputModule],
    });
    fileInput.detectChanges();
    const inputEl = fileInput.getByTestId("input");
    fileInput.detectChanges();
    await waitFor(() => {
      fileInput.detectChanges();
      expect(screen.getByText("foo.txt"));
      expect(screen.getByText("test.txt"));
    });
  });

  test("should remove file from dxc-file-input", async () => {
    const callback = jest.fn();
    const file = new File(["foo"], "foo.txt", {
      type: "text/plain",
    });
    const file2 = new File(["test"], "test.txt", {
      type: "text/plain",
    });
    const value = [{
          data: file,
          image: ""
        }, {
          data: file2,
          image: ""
        }];
    const fileInput = await render(DxcFileInputComponent, {
      template: `<dxc-file-input [value]="value" (callbackFile)="callback($event)"></dxc-file-input>`,
      componentProperties: { callback, value },
      excludeComponentDeclaration: true,
      imports: [DxcFileInputModule],
    });
    fileInput.detectChanges();
    const inputEl = fileInput.getByTestId("input");

    fireEvent.change(inputEl, { target: { files: [file, file2] } });
    fileInput.detectChanges();
    await waitFor(() => {
      fileInput.detectChanges();
      expect(screen.getByText("foo.txt"));
    });
    const removeIcons = fileInput.getAllByTestId("removeIcon");
    fireEvent.click(removeIcons[0]);
    fileInput.detectChanges();
    await waitFor(() => {
      fileInput.detectChanges();
      expect(callback).toHaveBeenCalledWith([{data: file2, error:null, image:null}]);
    });
  });

  test("should return callback files", async () => {
    const callback = jest.fn();
    const value = [];
    const fileInput = await render(DxcFileInputComponent, {
      template: `<dxc-file-input [value]="value" (callbackFile)="callback($event)"></dxc-file-input>`,
      componentProperties: { callback, value },
      excludeComponentDeclaration: true,
      imports: [DxcFileInputModule],
    });
    fileInput.detectChanges();
    const inputEl = fileInput.getByTestId("input");
    const file = new File(["foo"], "foo.txt", {
      type: "text/plain",
    });
    const file2 = new File(["(⌐□_□)"], "chucknorris.txt", {
      type: "text/plain",
    });
    fireEvent.change(inputEl, { target: { files: [file, file2] } });
    fileInput.detectChanges();
    await waitFor(() => {
      expect(callback).toHaveBeenCalledWith([
        { data: file, error: null, image: null },
        { data: file2, error: null, image: null },
      ]);
    });
  });
});
