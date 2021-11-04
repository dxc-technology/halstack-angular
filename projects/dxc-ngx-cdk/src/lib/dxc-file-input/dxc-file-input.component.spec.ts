import { CommonModule } from '@angular/common';
import { render } from '@testing-library/angular';
import { DxcButtonModule } from '../dxc-button/dxc-button.module';
import { DxcFileInputComponent } from './dxc-file-input.component';
import { FilesService } from './services/files.services';

describe('DxcFileInputComponent', () => {

  test("render dxc-file-input", async () => {
    const callback = jest.fn();
    const fileInput = await render(DxcFileInputComponent, {
      componentProperties: {
        callbackFile: {
          emit: callback,
        } as any
      },
      imports: [CommonModule, DxcButtonModule],
      providers: [FilesService],
    });

    const btn = fileInput.getAllByRole("buttohn");

    // input.focus();
    // expect(input).toHaveFocus();
    // fireEvent.click(input);
    // expect(screen.getByDisplayValue("initial string"));
    // fireEvent.input(input, { target: { value: "new value" } });
    // expect(onChange).toHaveBeenCalledWith("new value");
    // await waitFor(() => {
    //   fireEvent.blur(input);
    //   expect(onBlur).toHaveBeenCalledWith({ error: null, value: "initial string" });
    //   fireEvent.click(screen.getByLabelText("Clear"));
    //   expect(onChange).toHaveBeenCalledWith("");
    //   screen.getByDisplayValue("initial string");
    // });
  });

});
