import { fireEvent, render } from '@testing-library/angular';
import { DxcFileInputComponent } from './dxc-file-input.component';
import { DxcFileInputModule } from './dxc-file-input.module';
import { screen, waitFor } from "@testing-library/dom";
import { FileData } from './interfaces/file.interface';

describe('DxcFileInputComponent', () => {

  test("should render dxc-file-input in file mode", async () => {
    const fileInput = await render(DxcFileInputComponent, {
      componentProperties: {
        label: "Label",
        helperText: "Helper Text"
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
        mode: "filedrop"
      },
      excludeComponentDeclaration: true,
      imports: [DxcFileInputModule],
    });

    expect(fileInput.getByText("or drop files"));
  });

  test("should render dxc-file-input in drop zone mode", async () => {
    const fileInput = await render(DxcFileInputComponent, {
      componentProperties: {
        mode: "dropzone"
      },
      excludeComponentDeclaration: true,
      imports: [DxcFileInputModule],
    });

    expect(fileInput.getByText("or drop files"));
  });

  test("should render disabled dxc-file-input", async () => {
    const fileInput = await render(DxcFileInputComponent, {
      componentProperties: {
        disabled: true
      }, 
      excludeComponentDeclaration: true,
      imports: [DxcFileInputModule],
    });

    expect(fileInput.getByText("Select files"));
    const btn = fileInput.getAllByRole("button");
    expect(btn[0].hasAttribute("disabled")).toBe(true);
  });

  test("render dxc-file-input with one file", async () => {
    const fileInput = await render(DxcFileInputComponent, {
      componentProperties: {
        multiple: false,
      }, 
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
      expect(screen.getByText("foo.txt"));
    });
    const file2 = new File(["(⌐□_□)"], "chucknorris.txt", {
      type: "text/plain",
    });
    fireEvent.change(inputEl, { target: { files: [file2] } });
    await waitFor(() => {
      fileInput.detectChanges();
      expect(screen.getByText("chucknorris.txt"));
      expect(() => screen.getByText("foo.txt")).toThrow();
    });
  });

  test("render dxc-file-input with multiple files", async () => {
    const callback = jest.fn();
    const fileInput = await render(DxcFileInputComponent, {
      componentProperties: {
        callbackFile: {
          emit: callback,
        } as any
      }, 
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
      fileInput.detectChanges();
      expect(screen.getByText("foo.txt"));
      expect(screen.getByText("chucknorris.txt"));
    });
  });

  test("render dxc-file-input with error", async () => {
    const callback = jest.fn();
    const fileData = new File(["foo"], "foo.txt", {
      type: "text/plain",
    });
    const file: Array<FileData> = [{
      data: fileData,
      error: "There is an error",
      image: null
    }];
    const fileInput = await render(DxcFileInputComponent, {
      componentProperties: {
        value: file,
        callbackFile: {
          emit: callback,
        } as any
      }, 
      excludeComponentDeclaration: true,
      imports: [DxcFileInputModule],
    });
    fileInput.detectChanges();
    await waitFor(() => {
      fileInput.detectChanges();
      expect(screen.getByText("foo.txt"));
      expect(screen.getByText("There is an error"));
    });
  });

  test("should remove file from dxc-file-input", async () => {
    const fileInput = await render(DxcFileInputComponent, {
      componentProperties: {}, 
      excludeComponentDeclaration: true,
      imports: [DxcFileInputModule],
    });
    fileInput.detectChanges();
    const inputEl = fileInput.getByTestId("input");
    const file = new File(["foo"], "foo.txt", {
      type: "text/plain",
    });
    fireEvent.change(inputEl, { target: { files: [file] } });
    fileInput.detectChanges();
    await waitFor(() => {
      fileInput.detectChanges();
      expect(screen.getByText("foo.txt"));
    });
    const removeIcon = fileInput.getByTestId("removeIcon");
    fireEvent.click(removeIcon);
    fileInput.detectChanges();
    await waitFor(() => {
      fileInput.detectChanges();
      expect(() => screen.getByText("foo.txt")).toThrow();
    });
  });

  test("should return callback files", async () => {
    const callback = jest.fn();
    const fileInput = await render(DxcFileInputComponent, {
      componentProperties: {
        callbackFile: {
          emit: callback,
        } as any
      }, 
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
      fileInput.detectChanges();
      expect(callback).toHaveBeenCalledWith([{"data": file, "error": null, "image": null}, {"data": file2, "error": null, "image": null}]);
      expect(screen.getByText("foo.txt"));
      expect(screen.getByText("chucknorris.txt"));
    });
  });

});
