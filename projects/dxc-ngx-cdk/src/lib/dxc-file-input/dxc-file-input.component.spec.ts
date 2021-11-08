import { fireEvent, render } from '@testing-library/angular';
import { DxcFileInputComponent } from './dxc-file-input.component';
import { DxcFileInputModule } from './dxc-file-input.module';
import { screen, waitFor } from "@testing-library/dom";

describe('DxcFileInputComponent', () => {

  test("should render dxc-file-input in file mode", async () => {
    const fileInput = await render(DxcFileInputComponent, {
      componentProperties: {}, 
      excludeComponentDeclaration: true,
      imports: [DxcFileInputModule],
    });

    expect(fileInput.getByText("Select files"));
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
    const callback = jest.fn();
    const fileInput = await render(DxcFileInputComponent, {
      componentProperties: {
        multiple: false,
        callbackFile: {
          emit: callback,
        } as any
      }, 
      excludeComponentDeclaration: true,
      imports: [DxcFileInputModule],
    });

    // const btn = fileInput.getAllByRole("buttonh");
    // fireEvent.click(btn[0]);

    // const inputEl = fileInput.getByTestId("input");
    // const file = new File(["foo"], "foo.txt", {
    //   type: "text/plain",
    // });

    // fireEvent.change(inputEl, { target: { files: [file] } });
    // fileInput.detectChanges();
    // await waitFor(() => {
    //   fileInput.detectChanges();
    //   screen.getByTestId("input");
    //   expect(screen.getByText("foo.txt"));
    // });
  });

});
